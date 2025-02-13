// Emby请求类型说明：兼容三个平台
// session: 创建/维护会话的请求，用于初始化播放
// progress: 更新播放进度的请求，用于记录历史
// playing: 维持播放状态的请求，用于保持账户活跃（保号）

function Env(name) {
    this.name = name;
    this.startTime = Date.now();
    
    // 平台判断
    this.isLoon = typeof $loon !== 'undefined';
    this.isQuanX = typeof $task !== 'undefined';
    this.isSurge = typeof $httpClient !== 'undefined' && !this.isLoon;
    
    // 统一通知接口
    this.notify = (title, subtitle, message) => {
        if (this.isLoon || this.isSurge) {
            $notification.post(title, subtitle, message);
        } else if (this.isQuanX) {
            $notify(title, subtitle, message);
        }
    };
    
    // 统一持久化接口
    this.persist = {
        read: (key) => {
            if (this.isLoon || this.isSurge) {
                return $persistentStore.read(key);
            } else if (this.isQuanX) {
                return $prefs.valueForKey(key);
            }
        },
        write: (key, value) => {
            if (this.isLoon || this.isSurge) {
                return $persistentStore.write(value, key);
            } else if (this.isQuanX) {
                return $prefs.setValueForKey(value, key);
            }
        }
    };
    
    // 统一网络请求接口
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
    
    this.done = () => {
        if (this.isLoon || this.isQuanX || this.isSurge) $done();
    };

    // 输出环境信息
    console.log(`[ENV] 脚本运行环境: ${this.isLoon ? 'Loon' : this.isQuanX ? 'QuantumultX' : this.isSurge ? 'Surge' : 'unknown'}`);
}

const $ = new Env('Emby定时任务');

// Server配置
const SERVER_KEYS = {
    'th': {
        key: 'emby_th_playing',
        name: 'tanhuatv',
        comment: '探花'
    },
    'vc': {
        key: 'emby_vc_playing',
        name: 'viclub',
        comment: 'VIP'
    },
    'jz': {
        key: 'emby_jz_playing',
        name: '惊蛰',
        comment: '惊蛰'
    },
    'moe': {
        key: 'emby_moe_playing',
        name: 'Moe',
        comment: 'MisakaF'
    },
    'nf': {
        key: 'emby_nf_playing',
        name: 'Nanflix',
        comment: 'Nanflix'
    }
};

// 工具函数
const formatTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
};

// 处理单个请求
const processRequest = async (key, serverName, comment) => {
    return new Promise((resolve) => {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error('请求超时'));
            }, 5000);
        });

        const requestPromise = (async () => {
            try {
                const data = $.persist.read(key);
                if (!data) {
                    console.log(`[Task] ${comment} 无播放记录`);
                    return null;
                }

                const requestData = JSON.parse(data);
                const domain = new URL(requestData.url).hostname;
                console.log(`[Task] 执行playing请求 [${comment}:${domain}]`);

                const response = await $.http.post({
                    url: requestData.url,
                    headers: requestData.headers,
                    body: requestData.body
                });

                console.log(`[Task] ${comment} playing请求成功`);
                return { success: true, domain, comment };
            } catch (error) {
                console.log(`[Task] ${comment} playing请求失败:`, error);
                return { success: false, domain, comment };
            }
        })();

        Promise.race([requestPromise, timeoutPromise])
            .then(resolve)
            .catch((error) => {
                console.log(`[Task] ${comment} 请求异常:`, error);
                resolve(null);
            });
    });
};

// 主任务
const doTask = async () => {
    try {
        console.log(`[Task] 开始执行定时任务 [${formatTime()}]`);
        const startTime = Date.now();
        const serverResults = {};

        // 并行处理所有请求
        const results = await Promise.all(
            Object.entries(SERVER_KEYS).map(async ([serverId, server]) => {
                const result = await processRequest(server.key, server.name, server.comment);
                if (result) {
                    serverResults[server.comment] = {
                        success: result.success ? 1 : 0,
                        total: 1,
                        domain: result.domain
                    };
                }
                await new Promise(r => setTimeout(r, 300));
                return result;
            })
        );

        // 生成通知消息
        const duration = ((Date.now() - startTime) / 1000).toFixed(1);
        const serverCount = Object.keys(serverResults).length;

        if (serverCount > 0) {
            const message = Object.entries(serverResults)
                .map(([name, stats]) => {
                    return `${name} (${stats.domain})\n${stats.success}/1 ${stats.success ? '✅' : '❌'}`;
                })
                .join('\n');

            const allSuccess = Object.values(serverResults)
                .every(stats => stats.success === 1);

            $.notify('Emby保号任务',
                allSuccess ? '全部成功 ✅' : '部分成功 ⚠️',
                `${message}\n执行耗时: ${duration}秒`
            );
        } else {
            $.notify('Emby保号任务', '无数据 ❌', '未找到任何播放记录');
        }

    } catch (error) {
        console.log('[Task] 执行错误:', error);
        $.notify('Emby保号任务', '执行错误 ❌', error.message || error);
    }
    $.done();
};

// 执行
console.log(`[Task] 脚本开始于 ${formatTime()}`);
doTask();