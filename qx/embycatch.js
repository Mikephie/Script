// 变量
const $ = new Env('Emby播放记录');
const NOTIFY_COUNT_KEY = 'notify_count';
const NOTIFY_SESSION_KEY = 'notify_session';

// 服务器配置
const SERVERS = {
    'tanhuatv': {
        domain: 'tanhuatv.site',
        prefix: 'th'
    },
    'viclub': {
        domain: 'su.viclub.top',
        prefix: 'vc'
    },
    'jingzhe': {
        domain: 'jingzhe.pro',
        prefix: 'jz'
    },
    'moe': {
        domain: 'emby.moe',
        prefix: 'moe'
    },
    'nanflix': {
        domain: 'nanflix.net',
        prefix: 'nf'
    }
};

// 是否是请求
const isRequest = typeof $request !== 'undefined';

// 通知控制
const shouldNotify = () => {
    try {
        let countStr = $.getdata(NOTIFY_COUNT_KEY) || '0';
        let count = parseInt(countStr);

        const currentSession = Math.floor(new Date().getTime() / 1000 / 60).toString();
        const lastSession = $.getdata(NOTIFY_SESSION_KEY);

        if (currentSession !== lastSession) {
            count = 0;
            $.setdata(currentSession, NOTIFY_SESSION_KEY);
        }

        if (count >= 3) {
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
        const domain = url.split('/')[2];
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

// 获取存储键
const getStorageKey = (serverPrefix, type) => {
    return `emby_${serverPrefix}_${type}`;
};

// 保存数据
const saveData = (server, type, data) => {
    try {
        const key = getStorageKey(server.prefix, type);
        const dataStr = JSON.stringify(data);
        const result = $.setdata(dataStr, key);
        console.log(`[保存${key}] ${result ? '成功' : '失败'} [${server.domain}]`);
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

        const requstInfo = {
            url: url,
            headers: $request.headers,
            body: $request.body || null,
            method: $request.method,
            timestamp: new Date().getTime()
        };

        let type = '';
        if (url.endsWith('/Playing') || url.includes('/Playing$')) {
            type = 'session';
        } else if (url.includes('/Playing/Progress')) {
            type = 'progress';
        } else if (url.includes('/Playing/Stopped')) {
            type = 'playing';
        }

        if (type) {
            console.log(`[类型] ${type} [${server.domain}]`);
            const result = saveData(server, type, requstInfo);
            if (result) {
                notify('Emby播放记录', 
                    `已记录 ${server.name} ✅`, 
                    `类型: ${type}\n服务器: ${server.domain}`);
            }
        } else {
            console.log(`[跳过] 未知类型: ${url}`);
        }
    } catch (e) {
        console.log('[错误]', e.message || e);
    }
    $done({});
};

// 主函数
if (isRequest) {
    handleRequest();
} else {
    $done({});
}

// Env
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,i=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":i}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}}}(t,e)