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
let data = JSON.parse(body);
data.vip_level = 5;
data.is_vip = true;
data.vip_end_time = "2088-08-08T08:08:08Z";
// 主脚本函数...

    /********** 应用配置信息 **********/
    const appName = "✨Filmix PRO+✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10; 
    const cooldownMs = cooldownMinutes * 60 * 1000;
    
    const notifyKey = "Filmix PRO+_notify_key";
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

    $done({ body: JSON.stringify(data) });
} catch (e) {
    $done({ body: $response.body });
}