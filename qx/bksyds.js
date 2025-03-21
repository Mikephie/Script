/*
📜 ✨ 边框水印大师 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/photoby\.hasmash\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js

[Script] // Surge
边框水印大师 = type=http-response, pattern=^https:\/\/photoby\.hasmash\.com, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js, timeout=60

[Script] // Loon
http-response ^https:\/\/photoby\.hasmash\.com script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js, requires-body=true, timeout=60

[MITM]
hostname = photoby.hasmash.com

*/

// 主脚本函数...
let body = JSON.parse($response.body || '{}');
const url = $request.url;

if (!body) { $done({}); }

body.result = body.result || {};

if (url.includes("/auth/member")) {
    body.result.memberExpire = 3742762088000;
} else if (url.includes("/clickEvent")) {
    body.result.isVip = 1;
    body.result.vipTime = "2088-08-08 08:08:08";
} else if (url.includes("/verify")) {
    body.result.expire = 3742762088000;
}
// 主脚本函数...

/********** 应用配置信息 **********/
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "边框水印大师_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;

if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨边框水印大师✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}

$done({ body: JSON.stringify(body) });