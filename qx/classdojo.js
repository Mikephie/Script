/*
📜 ✨ Classdojo ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0 url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js

[Script] // Surge
Classdojo = type=http-response, pattern=^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js, timeout=60

[Script] // Loon
http-response ^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0 script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js, requires-body=true, timeout=60

[MITM]
hostname = payments.classdojo.com

*/

// 主脚本函数...
let obj = JSON.parse($response.body);
if (!obj) { $done({}); }

if (obj.subscriber && obj.subscriber.subscriptions) {
    for (const key in obj.subscriber.subscriptions) {
        if (obj.subscriber.subscriptions.hasOwnProperty(key)) {
            obj.subscriber.subscriptions[key].expires_date = "2088-08-08T08:08:08Z";
        }
    }
}

if (obj.subscriber && obj.subscriber.entitlements) {
    for (const key in obj.subscriber.entitlements) {
        if (obj.subscriber.entitlements.hasOwnProperty(key)) {
            obj.subscriber.entitlements[key].expires_date = "2088-08-08T08:08:08Z";
        }
    }
}
// 主脚本函数...

/********** 应用配置信息 **********/
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "Classdojo_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;

if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Classdojo✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}

$done({ body: JSON.stringify(obj) });