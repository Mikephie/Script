/*
📜 ✨ Filmix PRO+ ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/appv3\.filmix\.com\.cn\/api\/v1\/user\/user url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/filmix.js

[Script] // Surge
filmix_vip = type=http-response, pattern=^https:\/\/appv3\.filmix\.com\.cn\/api\/v1\/user\/user, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/filmix.js, timeout=60

[Script] // Loon
http-response ^https:\/\/appv3\.filmix\.com\.cn\/api\/v1\/user\/user script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/filmix.js, requires-body=true, timeout=60

[MITM]
hostname = appv3.filmix.com.cn

*/

// 主脚本函数...
let body = $response.body;
if (!body) { $done({}); }

let data = JSON.parse(body);
data.vip_level = 5;
data.is_vip = true;
data.vip_end_time = "2088-08-08T08:08:08Z";
// 主脚本函数...

/********** 应用配置信息 **********/
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "Filmix PRO+_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Filmix PRO+✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}

$done({ body: JSON.stringify(data) });