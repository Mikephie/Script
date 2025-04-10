/*
#!name= ✨ AppRaven ✨
#!desc=应用排行榜
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/appraven.js
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/appraven\.net\/appraven\/graphql url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/AppRaven.js

[MITM]
hostname = appraven.net

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "AppRaven_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨AppRaven✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
let body = $response.body;
if (!body) { $done({}); }

// Apply replacements
[
    { pattern: /"premium":false/g, replacement: '"premium":true' },
    { pattern: /"hasInAppPurchases":false/g, replacement: '"hasInAppPurchases":true' },
    { pattern: /"youOwn":false/g, replacement: '"youOwn":true' },
    { pattern: /"arcade":false/g, replacement: '"arcade":true' },
    { pattern: /"preorder":false/g, replacement: '"preorder":true' }
].forEach(({ pattern, replacement }) => {
    body = body.replace(pattern, replacement);
});

$done({ body });
// 主脚本函数...