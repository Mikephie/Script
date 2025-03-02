function Env(name) {
    this.name = name;
    this.startTime = Date.now();
    
    this.isLoon = typeof $loon !== 'undefined';
    this.isQuanX = typeof $task !== 'undefined';
    this.isSurge = typeof $httpClient !== 'undefined' && !this.isLoon;
    
    this.notify = (title, subtitle, message) => {
        if (this.isLoon || this.isSurge) {
            $notification.post(title, subtitle, message);
        } else if (this.isQuanX) {
            $notify(title, subtitle, message);
        }
    };
    
    this.persist = {
        read: (key) => {
            if (this.isLoon || this.isSurge) {
                return $persistentStore.read(key);
            } else if (this.isQuanX) {
                return $prefs.valueForKey(key);
            }
        }
    };
    
    this.http = {
        post: (options) => {
            if (this.isLoon || this.isSurge) {
                return new Promise((resolve, reject) => {
                    $httpClient.post(options, (error, response, data) => {
                        if (error) reject(error);
                        else resolve({ response, data });
                    });
                });
            } else if (this.isQuanX) {
                options.method = 'POST';
                return $task.fetch(options);
            }
        }
    };
    
    this.done = (value) => {
        if (this.isLoon || this.isQuanX || this.isSurge) $done(value);
    };

    console.log(`[ENV] 脚本运行环境: ${this.isLoon ? 'Loon' : this.isQuanX ? 'QuantumultX' : this.isSurge ? 'Surge' : 'unknown'}`);
}

const $ = new Env('Emby保号任务');

const SERVER_KEYS = {
    'th': { key: 'emby_th_playing', name: 'tanhuatv', comment: '探花' },
    'nf': { key: 'emby_nf_playing', name: 'Nanflix', comment: 'Nanflix' }
};

const formatTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
};

const processRequest = async (server, requestData) => {
    return new Promise((resolve) => {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('请求超时')), 5000);
        });

        const requestPromise = (async () => {
            try {
                const urlObj = new URL(requestData.url);
                const domainWithPort = urlObj.port ? `${urlObj.hostname}:${urlObj.port}` : urlObj.hostname;

                const videoId = requestData.url.match(/videos\/([^\/]+)/)?.[1] || requestData.url.match(/md5=([^&]+)/)?.[1];
                if (!videoId) throw new Error('无法提取 VideoId');

                const userIdMatch = requestData.headers['X-Emby-Authorization'].match(/UserId="([^"]+)"/);
                const userId = userIdMatch ? userIdMatch[1] : null;
                if (!userId) throw new Error('无法提取 UserId');

                const headers = {
                    ...requestData.headers,
                    'Content-Type': 'application/json'
                };
                const playSessionId = requestData.url.match(/PlaySessionId=([^&]+)/)?.[1] || '';

                // Step 1: 初始化播放会话
                const startUrl = `${urlObj.protocol}//${domainWithPort}/emby/Sessions/Playing`;
                const startBody = JSON.stringify({
                    ItemId: videoId,
                    PlayMethod: 'DirectStream',
                    PlaySessionId: playSessionId
                });
                console.log(`[Task] 执行 ${server.comment} 开始请求: ${startUrl}`);
                console.log(`[Task] 开始请求体: ${startBody}`);
                const startResponse = await $.http.post({ url: startUrl, headers, body: startBody });
                console.log(`[Task] ${server.comment} 开始响应: HTTP ${startResponse.response.status}, 数据: ${startResponse.data || '无内容'}`);

                // Step 2: 更新播放进度
                const progressUrl = `${urlObj.protocol}//${domainWithPort}/emby/Sessions/Playing/Progress`;
                const progressBody = JSON.stringify({
                    ItemId: videoId,
                    PositionTicks: 10000000,
                    IsPaused: false,
                    PlayMethod: 'DirectStream',
                    PlaySessionId: playSessionId
                });
                console.log(`[Task] 执行 ${server.comment} 进度请求: ${progressUrl}`);
                console.log(`[Task] 进度请求体: ${progressBody}`);
                const { response, data } = await $.http.post({
                    url: progressUrl,
                    headers,
                    body: progressBody
                });

                console.log(`[Task] ${server.comment} 进度响应: HTTP ${response.status}, 数据: ${data || '无内容'}`);
                if (response.status === 204 || response.status === 200) {
                    if (data && (data.includes('invalid') || data.includes('expired'))) {
                        throw new Error(`服务器响应错误: ${data}`);
                    }
                    console.log(`[Task] ${server.comment} 请求成功: ${data || '无响应内容 (204 No Content)'}`);
                    return { success: true, domain: domainWithPort, comment: server.comment };
                } else {
                    throw new Error(`HTTP 状态码异常: ${response.status}`);
                }
            } catch (error) {
                console.log(`[Task] ${server.comment} 请求失败: ${error.message || '未知错误'}`);
                console.log(`[Task] ${server.comment} 错误详情: ${JSON.stringify(error)}`);
                return { success: false, domain: new URL(requestData.url).hostname || '-', comment: server.comment };
            }
        })();

        Promise.race([requestPromise, timeoutPromise])
            .then(resolve)
            .catch((error) => {
                console.log(`[Task] ${server.comment} 请求异常: ${error.message || '未知异常'}`);
                console.log(`[Task] ${server.comment} 异常详情: ${JSON.stringify(error)}`);
                resolve({ success: false, domain: new URL(requestData.url).hostname || '-', comment: server.comment });
            });
    });
};

const doTask = async () => {
    console.log(`[Task] 开始执行定时任务 [${formatTime()}]`);
    const startTime = Date.now();
    const serverResults = {};

    for (const [serverId, server] of Object.entries(SERVER_KEYS)) {
        const data = $.persist.read(server.key);
        if (data) {
            try {
                const parsedData = JSON.parse(data);
                const result = await processRequest(server, parsedData);
                serverResults[server.comment] = {
                    success: result.success ? 1 : 0,
                    total: 1,
                    domain: result.domain
                };
            } catch (e) {
                console.log(`[Task] ${server.comment} 数据解析失败: ${e.message}`);
                serverResults[server.comment] = { success: 0, total: 1, domain: '-' };
            }
        } else {
            console.log(`[Task] ${server.comment} 无存储数据`);
            serverResults[server.comment] = { success: 0, total: 1, domain: '-' };
        }
        await new Promise(r => setTimeout(r, 200));
    }

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    const serverCount = Object.keys(serverResults).length;

    if (serverCount > 0) {
        const message = Object.entries(serverResults)
            .map(([name, stats]) => `${name} (${stats.domain})\n${stats.success}/1 ${stats.success ? '✅' : '❌'}`)
            .join('\n');

        const allSuccess = Object.values(serverResults).every(stats => stats.success === 1);
        console.log(`[Task] 通知内容: ${message}`);
        $.notify('Emby保号任务',
            allSuccess ? '全部成功 ✅' : '部分成功 ⚠️',
            `${message}\n执行耗时: ${duration}秒`
        );
    } else {
        console.log('[Task] 无数据');
        $.notify('Emby保号任务', '无数据 ❌', '未找到任何播放记录');
    }

    $.done({ status: serverCount > 0 ? 'completed' : 'no_data', results: serverResults });
};

doTask();