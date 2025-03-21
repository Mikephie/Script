/*
📜 ✨ 百转格 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^http:\/\/format-api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bzg.js

[Script] // Surge
百转格 = type=http-response, pattern=^http:\/\/format-api\.netpock\.com\/api\/user_info, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bzg.js, timeout=60

[Script] // Loon
http-response ^http:\/\/format-api\.netpock\.com\/api\/user_info script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bzg.js, requires-body=true, timeout=60

[MITM]
hostname = format-api.netpock.com

*/

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
// 主脚本函数...

/********** 应用配置信息 **********/
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "百转格_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;

if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨百转格✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}

$done({ body: JSON.stringify(obj) });