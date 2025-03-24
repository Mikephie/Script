/*
📜 ✨ 海报制作大师 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbzzds.js

[MITM]
hostname = poster.leminet.cn

*/

// 主脚本函数...
let body = $response.body;
if (!body) { $done({}); }

body = {
    "success": true,
    "data": {
        "guest": false,
        "admin": true,
        "id": 1766214,
        "role": 1,
        "join_at": 1716393343,
        "username": "MIKEPHIE",
        "endpoint": "oss-cn-hangzhou",
        "no": 23105214,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmRwb2ludElkIjowLCJleHAiOjE3MTg5ODUzNTIsInJvbGUiOjAsInVpZCI6MTc2NTIxNH0.lGeXRcKi759yQXwD5aUEJus1UgpEZeMJ6k47XzMeBZ0",
        "vip": true,
        "vip_expire": 4092610661000
    }
};
// 主脚本函数...

/********** 应用配置信息 **********/
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "海报制作大师_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨海报制作大师✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}

$done({ body: JSON.stringify(body) });