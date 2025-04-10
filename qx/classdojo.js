/*
#!name= ✨ Classdojo ✨
#!desc=天气预测
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/classdojo.js
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0 url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js

[MITM]
hostname = payments.classdojo.com

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "Classdojo_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Classdojo✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

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

$done({ body: JSON.stringify(obj) });
// 主脚本函数...