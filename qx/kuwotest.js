/*
 *
 *
脚本功能：酷我音乐 会员调试  
软件版本：11.3.8
下载地址：
脚本作者：引用转发脚本请带出处频道地址，谢谢。
更新时间：2025年1006
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 酷我音乐 会员调试  
^https?:\/\/(?:musicpay|nmobi|vip1|audiobookpay|tingshu|anymatch|mobilebasedata|rich|mobilead|wapi)\.kuwo\.cn\/(?:music\.pay\?newver=\d+|mobi.s\?f=kwxs|vip\/(?:enc\/user\/vip\?op=ui&uid=|v2\/theme\?op=gd)|a\.p|v2\/api\/pay\/user\/info|api\/music\/info|AdService\/kaiping\/adinfo|EcomResourceServer\/adEarnGuajian\/adinfo|openapi\/v1\/operate\/homePage|commercia\/(?:vipTab\/myTab\/base|userAssets\/downloadCoupon\/reduce)) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/kuwotest.js

[mitm]
hostname = anymatch.kuwo.cn,musicpay.kuwo.cn,mobilebasedata.kuwo.cn,vip1.kuwo.cn,rich.kuwo.cn,mobilead.kuwo.cn,*.kuwo.cn
*
*
*/

// ---------------------------
// 核心逻辑：拦截并修改 $response.body
// ---------------------------
!(async () => {
    const _0x23de65 = $.toObj($response.body) || {}; // 将响应体转换为 JSON 对象
    const _0x584c5c = $request.url;                   // 当前请求的 URL

    switch (true) {
        // === 1. 高品质音乐（flac/320k）解锁和缓存 ===
        case /anymatch\.kuwo\.cn\/mobi\.s\?f=kwxs/.test(_0x584c5c):
            // 此处逻辑负责：
            // 1. 读取当前播放歌曲 ID (kuwo_free_current_id)。
            // 2. 检查本地缓存 (kuwo_audio_cache) 中是否有未过期的有效音频链接。
            // 3. 如果缓存无效，则尝试向酷我 API 请求最高品质 (2000kflac, 320kmp3) 的音频链接。
            // 4. 成功获取后，缓存链接并返回给 App，实现高品质播放/下载。
            // ... (代码逻辑较长，核心作用是获取并返回高音质链接)
            break;

        // === 2. 存储当前播放的歌曲ID ===
        case /mobilebasedata\.kuwo\.cn\/api\/music\/info\?f/.test(_0x584c5c):
            const _0x1461b7 = _0x23de65.data?.["id"];
            if (typeof _0x1461b7 === "number") {
                // 保存当前歌曲ID，用于上一个 case 中获取高音质链接
                $.setval(_0x1461b7 + "", "kuwo_free_current_id");
            }
            break;

        // === 3. 解锁歌曲下载权限和付费状态 ===
        case /musicpay\.kuwo\.cn\/music\.pay\?newver=3/.test(_0x584c5c):
            // 将所有音频的下载/播放状态 (st) 设置为 0 (免费/无限制)
            for (let _0x3e231d = 0; _0x3e231d < _0x23de65.songs[0].audio.length; _0x3e231d++) {
                _0x23de65.songs[0].audio[_0x3e231d].st = 0;
            }
            
            // 伪造 MP3 下载权限信息，模拟 SVIP
            const _0x201bf7 = {
                couponNum: 998, // 优惠券数量
                isSVip: 1,      // SVIP 身份
                isShow: 1
            };
            _0x23de65.songs[0].mp3Download = _0x201bf7;
            
            // 伪造用户已购买信息，模拟永久订阅
            _0x23de65.user = [{
                // ... (各种付费字段，核心是 end 设置为遥远的未来时间 4180305321)
                end: 4180305321, // 购买结束时间，设置为遥远的未来
                buy: 1657425321,
                begin: 1657425321,
                price: _0x23de65.songs[0].audio[0].price,
                type: _0x23de65.songs[0].audio[0].policy,
                playUpper: 300,
                downUpper: 300,
                feetype: 0
                // ...
            }];
            break;

        // === 4. 去除开屏/各种广告 ===
        case /rich\.kuwo\.cn\/AdService\/kaiping\/adinfo/.test(_0x584c5c): // 开屏广告
        case /mobilead\.kuwo\.cn\/EcomResourceServer\/adEarnGuajian\/adinfo/.test(_0x584c5c): // 其他广告
            $.done({ body: "{}" }); // 直接返回空 JSON，阻止广告加载
            return;

        // === 5. 综合权限和 VIP 状态修改 (getvip / a.p) ===
        case $request.url.includes("/a.p"):
            let _0x226962 = $.toStr(_0x23de65);
            // 存储歌曲 ID
            if (_0x23de65.songs && Object.keys(_0x23de65.songs).length > 0) {
                $.setval(_0x23de65.songs[Object.keys(_0x23de65.songs)[0]].id + "", "kuwo_free_current_id");
            }
            
            // 对 POST 请求进行正则替换，强制开启播放和下载权限
            $request?.["method"]["toUpperCase"]() === "POST" && (
                _0x226962 = $response.body
                    .replace(/"playright":\d+/g, "\"playright\":1") // 播放权限: 1 (开启)
                    .replace(/"downright":\d+/g, "\"downright\":1") // 下载权限: 1 (开启)
                    .replace(/"policytype":\d+/g, "\"policytype\":3")
                    .replace(/"policy":\d+/g, "\"policy\":5")
            );

            // 如果包含 getvip 关键词，伪造 VIP 购买信息
            if ($request.url.includes("getvip")) {
                const _0x81ebc1 = {
                    end: 32495443200,      // VIP 结束时间 (极远未来)
                    bought_vip: 1,         // 已购买
                    type: 1,
                    period: 31,
                    bought_vip_end: 32495443200
                };
                _0x23de65.packs = _0x81ebc1;
                _0x226962 = $.toStr(_0x23de65);
            }
            $.done({ body: _0x226962 });
            return;

        // === 6. 用户 VIP 状态显示修改 ===
        case /pay\/user\/info/.test(_0x584c5c):
            _0x23de65.data.vipExpires = 4077187200; // 设置 VIP 过期时间到极远未来
            _0x23de65.data.vipType = 1;              // 设置 VIP 类型
            _0x23de65.data.adImgUrl = "";           // 去除 VIP 界面广告
            break;
            
        // === 7. 我的 VIP 界面修改 (加入作者信息) ===
        case /vip1\.kuwo\.cn\/commercia\/vipTab\/myTab\/base/.test(_0x584c5c):
            // 植入自定义信息块，包含作者 Telegram 频道链接
            if (_0x23de65.data?.["data"]?.["actBlock"]) {
                _0x23de65.data.data.actBlock = {
                    id: 8,
                    title: "作者电报频道",
                    subTitle: "https://t.me/GieGie777",
                    jump: {
                        jumpType: 1,
                        jumpUrl: "https://t.me/GieGie777"
                    },
                    desc: "欢迎加入电报频道"
                };
                // 修改会员中心标题
                _0x23de65.data.data.memCenter && (
                    _0x23de65.data.data.memCenter.subTitle = "尊贵VIP会员，畅享超多特权", 
                    _0x23de65.data.data.memCenter.btnText = "已开通"
                );
                _0x23de65.data.type = 2; // 可能影响页面展示类型
            }
            break;

        // === 8. 首页顶部栏目和 VIP 广告去除 ===
        case /wapi\.kuwo\.cn\/openapi\/v1\/operate\/homePage/.test(_0x584c5c):
            if (_0x23de65.data?.["homeTop"]?.["length"]) {
                // 过滤顶部栏目，只保留部分
                _0x23de65.data.homeTop = _0x23de65.data.homeTop.filter(_0x1e1a6f => ["热门", "发现", "推荐", "听书"].includes(_0x1e1a6f.title));
                // 设置 VIP/广告相关字段
                _0x23de65.data.vipAdExpireTime = 4077187200;
                _0x23de65.data.freemode = 1;
                _0x23de65.data.adVip = 1;
            }
            break;
            
        // === 9. 主题解锁 / 下载券 bypass / VIP加密数据伪造 ===
        case /vip\/v2\/theme/.test(_0x584c5c):
            // 解锁主题
            if (_0x23de65.data?.["needBieds"] !== undefined) {
                _0x23de65.data.needBieds = null;
            }
            break;
        case /vip1\.kuwo\.cn\/commercia\/userAssets\/downloadCoupon\/reduce/.test(_0x584c5c):
            // 绕过下载券消耗
            _0x23de65.code = 200;
            break;
        case /vip\/enc/.test(_0x584c5c):
            // 直接返回伪造的加密数据，通常用于绕过核心 VIP 验证
            const _0x2435d0 = {
                body: "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"
            };
            $.done(_0x2435d0);
            return;
    }

    // 默认行为：返回修改后的 JSON 对象
    $.done({ body: $.toStr(_0x23de65) });
})().catch(_0x487323 => {}).finally(() => $.done({}));

// ---------------------------
// Env 运行时工具类（无需修改）
// ---------------------------
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;"POST"===e&&(s=this.post);const i=new Promise(((e,i)=>{s.call(this,t,((t,s,o)=>{t?i(t):e(s)}))}));return t.timeout?((t,e=1e3)=>Promise.race([t,new Promise(((t,s)=>{setTimeout((()=>{s(new Error("请求超时"))}),e)}))]))(i,t.timeout):i}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.isMute=!1,this.isNeedRewrite=!1,this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise((e=>{this.get({url:t},((t,s,i)=>e(i)))}))}runScript(t,e){return new Promise((s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let o=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");o=o?1*o:20,o=e&&e.timeout?e.timeout:o;const[r,a]=i.split("@"),n={url:`http://${a}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:o},headers:{"X-Key":r,Accept:"*/*"},policy:"DIRECT",timeout:o};this.post(n,((t,e,i)=>s(i)))})).catch((t=>this.logErr(t)))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),o=JSON.stringify(this.data);s?this.fs.writeFileSync(t,o):i?this.fs.writeFileSync(e,o):this.fs.writeFileSync(t,o)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let o=t;for(const t of i)if(o=Object(o)[t],void 0===o)return s;return o}lodash_set(t,e,s){return Object(t)!==t||(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce(((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{}),t)[e[e.length-1]]=s),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),o=s?this.getval(s):"";if(o)try{const t=JSON.parse(o);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,o]=/^@(.*?)\.(.*?)$/.exec(e),r=this.getval(i),a=i?"null"===r?null:r||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,o,t),s=this.setval(JSON.stringify(e),i)}catch(e){const r={};this.lodash_set(r,o,t),s=this.setval(JSON.stringify(r),i)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.cookie&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,((t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)}));break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then((t=>{const{statusCode:s,statusCode:i,headers:o,body:r,bodyBytes:a}=t;e(null,{status:s,statusCode:i,headers:o,body:r,bodyBytes:a},r,a)}),(t=>e(t&&t.error||"UndefinedError")));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",((t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){}})).then((t=>{const{statusCode:i,statusCode:o,headers:r,rawBody:a}=t,n=s.decode(a,this.encoding);e(null,{status:i,statusCode:o,headers:r,rawBody:a,body:n},n)}),(t=>{const{message:i,response:o}=t;e(i,o,o&&s.decode(o.rawBody,this.encoding))}));break}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,((t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)}));break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then((t=>{const{statusCode:s,statusCode:i,headers:o,body:r,bodyBytes:a}=t;e(null,{status:s,statusCode:i,headers:o,body:r,bodyBytes:a},r,a)}),(t=>e(t&&t.error||"UndefinedError")));break;case"Node.js":let i=require("iconv-lite");this.initGotEnv(t);const{url:o,...r}=t;this.got[s](o,r).then((t=>{const{statusCode:s,statusCode:o,headers:r,rawBody:a}=t,n=i.decode(a,this.encoding);e(null,{status:s,statusCode:o,headers:r,rawBody:a,body:n},n)}),(t=>{const{message:s,response:o}=t;e(s,o,o&&i.decode(o.rawBody,this.encoding))}));break}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}queryStr(t){let e="";for(const s in t){let i=t[s];null!=i&&""!==i&&("object"==typeof i&&(i=JSON.stringify(i)),e+=`${s}=${i}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",i="",o={}){const r=t=>{const{$open:e,$copy:s,$media:i,$mediaMime:o}=t;switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{const r={};let a=t.openUrl||t.url||t["open-url"]||e;a&&Object.assign(r,{action:"open-url",url:a});let n=t["update-pasteboard"]||t.updatePasteboard||s;if(n&&Object.assign(r,{action:"clipboard",text:n}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[t]=i.split(";"),[,o]=i.split(",");e=o,s=t.replace("data:","")}else{e=i,s=(t=>{const e={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(var s in e)if(0===t.indexOf(s))return e[s];return null})(i)}Object.assign(r,{"media-url":t,"media-base64":e,"media-base64-mime":o??s})}return Object.assign(r,{"auto-dismiss":t["auto-dismiss"],sound:t.sound}),r}case"Loon":{const s={};let o=t.openUrl||t.url||t["open-url"]||e;o&&Object.assign(s,{openUrl:o});let r=t.mediaUrl||t["media-url"];return i?.startsWith("http")&&(r=i),r&&Object.assign(s,{mediaUrl:r}),s}case"Quantumult X":{const o={};let r=t["open-url"]||t.url||t.openUrl||e;r&&Object.assign(o,{"open-url":r});let a=t["media-url"]||t.mediaUrl;i?.startsWith("http")&&(a=i),a&&Object.assign(o,{"media-url":a});let n=t["update-pasteboard"]||t.updatePasteboard||s;return n&&Object.assign(o,{"update-pasteboard":n}),o}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,i,r(o));break;case"Quantumult X":$notify(e,s,i,r(o));break;case"Node.js":break}}log(...t){}logErr(t,e){}wait(t){return new Promise((e=>setTimeout(e,t)))}done(t={}){const e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}
