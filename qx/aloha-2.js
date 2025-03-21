/*
📜 ✨ Aloha ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/api\.alohaprofile\.com\/v1\/profile_info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aloha.js

[Script] // Surge
Aloha = type=http-response, pattern=^https:\/\/api\.alohaprofile\.com\/v1\/profile_info, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aloha.js, timeout=60

[Script] // Loon
http-response ^https:\/\/api\.alohaprofile\.com\/v1\/profile_info script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aloha.js, requires-body=true, timeout=60

[MITM]
hostname = api.alohaprofile.com

*/

// 主脚本函数...
let body = $response.body;
if (!body) { $done({}); }

body = JSON.parse(body); // Parse JSON string into object
if (body?.profile) {
    Object.assign(body.profile, {
        is_premium: true,
        end_of_premium: 3742762088, // August 8, 2088, 08:08:08 UTC
        email: "888@gmail.com",
        _end_of_premium: "2088-08-08 08:08:08.000"
    });
}

/********** 应用配置信息 **********/
const cooldownMs = 10 * 60 * 1000; // 10 minutes
const notifyKey = "Aloha_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;

if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Aloha✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}

$done({ body: JSON.stringify(body) });