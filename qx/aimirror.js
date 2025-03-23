/*
📜 ✨ AIMirror ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/be\.aimirror\.fun\/.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js

[MITM]
hostname = be.aimirror.fun

*/

// 主脚本函数...
let body = $response.body;
const url = $request.url;

if (!body) { $done({}); }

// Handle specific URL cases
if (url.includes("query_is_vip")) {
    if (body === 'false') {
        body = 'true';
    } else {
        let data = JSON.parse(body);
        if (data.hasOwnProperty("is_vip")) data.is_vip = true;
        if (data.hasOwnProperty("vip")) data.vip = true;
        body = JSON.stringify(data);
    }
} else if (url.includes("draw")) {
    body = body.replace(/"is_vip"\s*:\s*false/gi, '"is_vip":true');
    body = body.replace(/"vip"\s*:\s*false/gi, '"vip":true');
} else if (url.includes("video_render_count")) {
    if (body !== '0') {
        let data = JSON.parse(body);
        if (typeof data === 'number') {
            data = 999;
            body = JSON.stringify(data);
        } else if (!isNaN(body) && parseInt(body) > 0) {
            body = '999';
        }
    }
} else if (url.includes("consumable_quota")) {
    body = body.replace(/"has_quota"\s*:\s*false/gi, '"has_quota":true');
    body = body.replace(/"quota"\s*:\s*0/g, '"quota":999');
} else if (url.includes("discount")) {
    body = body.replace(/"discount"\s*:\s*false/gi, '"discount":true');
} else {
    let data = JSON.parse(body);
    if (typeof data === 'object' && data !== null) {
        const vipKeys = ['is_vip', 'vip', 'isVip', 'premium', 'isPremium'];
        vipKeys.forEach(key => {
            if (data.hasOwnProperty(key) && data[key] === false) {
                data[key] = true;
            }
        });
        body = JSON.stringify(data);
    }
}
// 主脚本函数...

/********** 应用配置信息 **********/
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "AIMirror_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;

if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨AIMirror✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}

$done({ body });