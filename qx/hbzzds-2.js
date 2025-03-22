/*
📜 ✨ 海报制作大师 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https?:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbzzds.js

[Script] // Surge
海报制作大师 = type=http-response, pattern=^https?:\/\/poster\.leminet\.cn\/v01\/profile, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbzzds.js, timeout=60

[Script] // Loon
http-response ^https?:\/\/poster\.leminet\.cn\/v01\/profile script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbzzds.js, requires-body=true, timeout=60

[MITM]
hostname = poster.leminet.cn

*/

// 主脚本函数...
try {
    var body = JSON.parse($response.body);

    body = {
      "success" : true,
      "data" : {
        "guest" : false,
        "admin" : true,
        "id" : 1766214,
        "role" : 1,
        "join_at" : 1716393343,
        "username" : "MIKEPHIE",
        "endpoint" : "oss-cn-hangzhou",
        "no" : 23105214,
        "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmRwb2ludElkIjowLCJleHAiOjE3MTg5ODUzNTIsInJvbGUiOjAsInVpZCI6MTc2NTIxNH0.lGeXRcKi759yQXwD5aUEJus1UgpEZeMJ6k47XzMeBZ0",
        "vip" : true,
        "vip_expire" : 4092610661000
      }
    };
// 主脚本函数...

    /********** 应用配置信息 **********/
    const appName = "✨海报制作大师✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10;
    const cooldownMs = cooldownMinutes * 60 * 1000;
    const notifyKey = "poster_master_notify_key_v1";
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