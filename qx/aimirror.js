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
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

// 主脚本函数...
// Flag to ensure notification is sent only once per session
let notificationSent = false;

// Send notification
function sendNotification(title, subtitle, message) {
    if (!notificationSent) {
        if (typeof $notification != 'undefined') {
            $notification.post(title, subtitle, message);
        } else if (typeof $notify != 'undefined') {
            $notify(title, subtitle, message);
        }
        // Set the flag to true after sending the notification
        notificationSent = true;
    }
}

let body = $response.body;
let url = $request.url;

try {
    switch (true) {
        case url.includes("/query_is_vip"):
            if (body === 'false') {
                body = 'true';  // Set VIP status to true
            }
            break;
        case url.includes("/draw"):
            body = body.replace(/"is_vip"\s*:\s*false/g, '"is_vip":true');  // Change VIP status in draw results
            break;
        case url.includes("/users/video_render_count"):
            if (body === '0') {
                body = '这个没解锁别用了';  // Inform the user that the feature is not unlocked
                sendNotification("提示", "", "这个视频ai无法解锁，请返回上一个界面");
            }
            break;
        case url.includes("/query_consumable_quota"):
            body = body.replace(/"has_quota"\s*:\s*false/g, '"has_quota":true');  // Set quota to true
            break;
        case url.includes("/users/discount"):
            body = body.replace(/"discount"\s*:\s*false/g, '"discount":true');  // Apply discount
            break;
    }
// 主脚本函数...

sNotify(appName, author, message, 10 * 60 * 1000);
if (typeof body === 'object') {
    $done({ body: JSON.stringify(body) });
} else {
    $done({ body });
}
