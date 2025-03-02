
// 变量
const $ = new Env('Emby播放记录');
const NOTIFY_COUNT_KEY = 'notify_count';

// 服务器配置
const SERVERS = {
    'tanhuatv': {
        domain: 'tanhuatv.site',
        prefix: 'th',
        storage_key: 'emby_th_playing',
        comment: '探花'
    },
    'nanflix': {
        domain: 'us.nanflix.net',
        prefix: 'nf',
        storage_key: 'emby_nf_playing',
        comment: 'Nanflix'
    }
};

// 是否是请求
const isRequest = typeof $request !== 'undefined';

// 通知控制
const shouldNotify = () => {
    try {
        let countStr = $.getdata(NOTIFY_COUNT_KEY) || '0';
        let count = parseInt(countStr);
        
        // 限制为2次
        if (count >= 2) {
            return false;
        }

        count++;
        $.setdata(count.toString(), NOTIFY_COUNT_KEY);
        
        return true;
    } catch (e) {
        console.log('通知控制错误:', e);
        return false;
    }
};

// 通知函数
const notify = (title, subtitle, message) => {
    if (shouldNotify()) {
        $.msg(title, subtitle, message);
    }
};

// 获取服务器信息
const getServerInfo = (url) => {
    try {
        const domain = url.split('/')[2].split(':')[0];
        for (const [name, info] of Object.entries(SERVERS)) {
            if (domain.includes(info.domain)) {
                return {
                    name: name,
                    ...info,
                    domain: domain
                };
            }
        }
    } catch (e) {}
    return null;
};

// 保存数据
const saveData = (server, videoInfo) => {
    try {
        const key = server.storage_key;
        const requestInfo = {
            url: videoInfo.url,
            headers: $request.headers,
            body: $request.body || null,
            method: $request.method,
            timestamp: new Date().getTime()
        };
        
        const result = $.setdata(JSON.stringify(requestInfo), key);
        console.log(`[保存${server.comment}记录] ${result ? '成功' : '失败'} [${server.domain}]`);
        
        if (result) {
            notify('Emby播放记录', 
                `已记录 ${server.comment} ✅`, 
                `视频ID: ${videoInfo.videoId}\n时间: ${new Date().toLocaleString()}`);
        }
        
        return result;
    } catch (e) {
        console.log(`保存失败:`, e.message || e);
        return false;
    }
};

// 处理请求
const handleRequest = () => {
    try {
        const url = $request.url;
        console.log(`[请求] URL: ${url}`);

        const server = getServerInfo(url);
        if (!server) {
            console.log(`[跳过] 未知服务器`);
            return;
        }

        let videoId = '';
        
        // MisakaF服务器特殊处理
        if (url.includes('newplay.emby.moe')) {
            const md5Match = url.match(/md5=([^&]+)/);
            if (md5Match) {
                videoId = md5Match[1];
            }
        } else {
            // 其他服务器通用处理
            const videoMatch = url.match(/\/emby\/videos\/([^\/]+)\/(original|stream)/);
            if (videoMatch) {
                videoId = videoMatch[1];
            }
        }

        if (videoId) {
            console.log(`[视频ID] ${videoId} [${server.domain}]`);

            const videoInfo = {
                videoId: videoId,
                url: url,
                method: $request.method,
                timestamp: new Date().getTime()
            };

            saveData(server, videoInfo);
        } else {
            console.log(`[跳过] 无法获取视频ID: ${url}`);
        }
    } catch (e) {
        console.log('[错误]', e);
    }
    $done({});
};

// 主函数
if (isRequest) {
    // 重置通知计数
    $.setdata('0', NOTIFY_COUNT_KEY);
    handleRequest();
} else {
    $done({});
}

// Env
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,i=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":i}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}}}(t,e)