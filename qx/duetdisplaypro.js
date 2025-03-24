/*
📜 ✨ DuetDisplayPro ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

需登录

[rewrite_local]
^https:\/\/rdp\.duetdisplay\.com\/v1\/users\/validateReceipt url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/duetdisplaypro.js

[MITM]
hostname = rdp.duetdisplay.com

*/

// 主脚本函数...
var obj = JSON.parse($response.body);
if (!obj) { $done({}); }

obj = {
    "success": true,
    "products": [
        {
            "vendor": "apple",
            "product": "DuetStudioAnnual",
            "subscriptionId": 434779,
            "purchaseDate": "2024-05-27T04:25:43Z",
            "cancelled": false,
            "expiresDate": "2088-08-08T08:08:08Z",
            "inTrial": true
        }
    ],
    "hasStripeAccount": false
};
// 主脚本函数...

/********** 应用配置信息 **********/
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "Subscription_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;

if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Subscription Unlock✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}

$done({ body: JSON.stringify(obj) });