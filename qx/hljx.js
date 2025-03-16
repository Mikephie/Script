/*
📜 ✨ 婚禮精選 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/love\.leminet\.cn\/golove\/v05\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hljx.js

[Script] // Surge
婚礼精选 = type=http-response, pattern=^https:\/\/love\.leminet\.cn\/golove\/v05\/profile, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/hljx.js, timeout=60

[Script] // Loon
http-response ^https:\/\/love\.leminet\.cn\/golove\/v05\/profile script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/hljx.js, requires-body=true, tag=婚礼精选

[MITM]
hostname = love.leminet.cn

*/

// 主腳本函數...
try {
    var body = JSON.parse($response.body);

    body = {
      "success" : true,
      "data" : {
        "id" : 1163222,
        "phone" : "",
        "balance" : 888888,
        "is_guest" : 0,
        "avatar" : "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
        "city_id" : 0,
        "group_id" : 1,
        "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjE5ODY3MjQsInN0YXR1cyI6MSwidXNlcl9pZCI6MTE2MzIyMn0.QcqjpzCLTJ3f1bP_TH1yzxqHqRTCTAOoamnsoyUuOIk",
        "username" : "MIKEPHIE",
        "is_admin" : 0,
        "email" : "888@gmail.com",
        "untried" : false,
        "vip_expire" : 3742762088000
      }
    };

    /********** 應用配置信息 **********/
    const appName = "✨婚禮精選✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解鎖或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10;
    const cooldownMs = cooldownMinutes * 60 * 1000;
    const notifyKey = "wedding_select_notify_key_v1";
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