/*
📜 ✨ AdblockPRO ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/api\.adblockpro\.app\/verify url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js

[Script] // Surge
api_vip = type=http-response, pattern=^https:\/\/api\.adblockpro\.app\/verify, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js, timeout=60

[Script] // Loon
http-response ^https:\/\/api\.adblockpro\.app\/verify script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js, requires-body=true, timeout=60

[MITM]
hostname = api.adblockpro.app

*/

// 主脚本函数...
let body = $response.body;
if (!body) { $done({}); }

body = JSON.parse(body); // Parse the JSON string into an object
['p', 's', 'l'].forEach(key => {
    if (body.hasOwnProperty(key)) body[key] = 1;
});
if (body.hasOwnProperty('v')) body.v = true;

/********** 应用配置信息 **********/
const cooldownMs = 10 * 60 * 1000; // 10 minutes
const notifyKey = "AdblockPRO_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;

if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨AdblockPRO✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}

$done({ body: JSON.stringify(body) });