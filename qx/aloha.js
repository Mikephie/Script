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
try {
    let body = JSON.parse($response.body);

    if (body?.profile) {
        Object.assign(body.profile, {
            is_premium: true,
            end_of_premium: 3742762088,
            email: "888@gmail.com",
            _end_of_premium: "2088-08-08 08:08:08.000"
        });
    }
// 主脚本函数...

    /********** 应用配置信息 **********/
    const appName = "✨Aloha✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10;
    const cooldownMs = cooldownMinutes * 60 * 1000;
    const notifyKey = "Aloha_notify_key_v1";
    const now = Date.now();
    let lastNotifyTime = 0;
    try {
        const storedTime = $persistentStore.read(notifyKey);
        if (storedTime) {
            lastNotifyTime = parseInt(storedTime);
            if (isNaN(lastNotifyTime)) lastNotifyTime = 0;
        }
    } catch (e) {
        lastNotifyTime = 0;
    }
    if (now - lastNotifyTime > cooldownMs) {
        if (typeof $notification !== 'undefined') {
            $notification.post(appName, author, message);
        } else if (typeof $notify !== 'undefined') {
            $notify(appName, author, message);
        }
        $persistentStore.write(now.toString(), notifyKey);
    }

    $done({ body: JSON.stringify(body) });
} catch (e) {
    $done({ body: $response.body });
}