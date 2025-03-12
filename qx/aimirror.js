/*
📜 ✨ AIMirror ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/be\.aimirror\.fun\/.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js

[Script] // Surge
AIMirror = type=http-response, pattern=^https:\/\/be\.aimirror\.fun\/.*, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js, timeout=60

[Script] // Loon
http-response ^https:\/\/be\.aimirror\.fun\/.* script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js, requires-body=true, timeout=60

[MITM]
hostname = be.aimirror.fun

/********** 会话通知模块 **********/
function sNotify(a,b,c,d=60000){const e=`${a.replace(/[^a-zA-Z]/g,'').toLowerCase()}_session`;const f=typeof $prefs!=='undefined';const g=typeof $persistentStore!=='undefined'&&typeof $notify!=='undefined';const h=typeof $persistentStore!=='undefined'&&typeof $notification!=='undefined';const i=f?$prefs:$persistentStore;const j=f?$notification:(g?$notify:$notification);if(!i||!j)return false;try{const k=f?i.valueForKey(e):i.read(e);const l=Date.now();if(!k||(l-parseInt(k)>d)){j.post(a,b,c);f?i.setValueForKey(l.toString(),e):i.write(l.toString(),e);return true;}}catch(m){console.log(`[${a}] 错误: ${m}`);}return false;}

/********** 应用配置信息 **********/
const appName = "✨AIMirror✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 ⓿❽-⓿❽-❷⓿❽❽";

// 主脚本函数...
let body = $response.body;
let url = $request.url;

// 记录请求信息到控制台
console.log(`[AIMirror] 请求URL: ${url}`);
console.log(`[AIMirror] 原始响应: ${body}`);

// 针对不同端点的处理
if (url.includes("query_is_vip")) {
    // 如果是纯文本的 false 直接替换为 true
    if (body === 'false') {
        body = 'true';
    } else {
        // 尝试解析JSON
        try {
            let data = JSON.parse(body);
            // 修改JSON中的所有VIP相关状态
            if (data.hasOwnProperty("is_vip")) data.is_vip = true;
            if (data.hasOwnProperty("vip")) data.vip = true;
            body = JSON.stringify(data);
        } catch (e) {
            // 如果不是有效JSON，尝试直接替换
            body = body.replace(/false/g, 'true');
        }
    }
} else if (url.includes("draw")) {
    // 替换所有可能的VIP状态
    body = body.replace(/"is_vip"\s*:\s*false/g, '"is_vip":true');
    body = body.replace(/"vip"\s*:\s*false/g, '"vip":true');
} else if (url.includes("video_render_count")) {
    // 特殊情况，只有在值不为"0"时才修改
    if (body !== '0') {
        try {
            let data = JSON.parse(body);
            // 尝试找到并增加计数
            if (typeof data === 'number') {
                data = 999;
                body = JSON.stringify(data);
            }
        } catch (e) {
            // 如果不是有效JSON并且是数字字符串
            if (!isNaN(body) && parseInt(body) > 0) {
                body = '999';
            }
        }
    }
} else if (url.includes("consumable_quota")) {
    // 处理配额相关字段
    body = body.replace(/"has_quota"\s*:\s*false/g, '"has_quota":true');
    body = body.replace(/"quota"\s*:\s*0/g, '"quota":999');
} else if (url.includes("discount")) {
    // 处理折扣相关字段
    body = body.replace(/"discount"\s*:\s*false/g, '"discount":true');
} else {
    // 通用处理：尝试解析JSON并修改可能的VIP状态
    try {
        let data = JSON.parse(body);
        
        // 检查并修改常见的VIP标识
        if (typeof data === 'object' && data !== null) {
            const vipKeys = ['is_vip', 'vip', 'isVip', 'premium', 'isPremium'];
            vipKeys.forEach(key => {
                if (data.hasOwnProperty(key) && data[key] === false) {
                    data[key] = true;
                }
            });
            body = JSON.stringify(data);
        }
    } catch (e) {
        // 如果不是有效JSON，不做修改
    }
}

console.log(`[AIMirror] 修改后响应: ${body}`);
// 主脚本函数...

sNotify(appName, author, message, 10 * 60 * 1000);
if (typeof body === 'object') {
    $done({ body: JSON.stringify(body) });
} else {
    $done({ body });
}
