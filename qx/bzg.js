/*
#!name= ✨ 百转格 ✨
#!desc=效率
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/bzg.js
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^http:\/\/format-api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bzg.js

[MITM]
hostname = format-api.netpock.com

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "百转格_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨百转格✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
var obj = JSON.parse($response.body);
if (!obj) { $done({}); }

obj.data = {
    ...obj.data,
    "user_name": "MIKEPHIE",
    "is_vip": true,
    "wps_size": 88888888,
    "vip_expiration_time": 3742762088
};

$done({ body: JSON.stringify(obj) });
// 主脚本函数...