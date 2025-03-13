/*
📜 ✨ AppRaven ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/appraven\.net\/appraven\/graphql url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/AppRaven.js

[Script] // Surge
AppRaven = type=http-response, pattern=^https:\/\/appraven\.net\/appraven\/graphql, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/AppRaven.js, timeout=60

[Script] // Loon
http-response ^https:\/\/appraven\.net\/appraven\/graphql script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/AppRaven.js, requires-body=true, timeout=60

[MITM]
hostname = appraven.net

*/

// 主脚本函数...
let body = $response.body;

try {
    const replacements = [
        { pattern: /"premium":false/g, replacement: '"premium":true' },
        { pattern: /"hasInAppPurchases":false/g, replacement: '"hasInAppPurchases":true' },
        { pattern: /"youOwn":false/g, replacement: '"youOwn":true' },
        { pattern: /"arcade":false/g, replacement: '"arcade":true' },
        { pattern: /"preorder":false/g, replacement: '"preorder":true' }
    ];
    replacements.forEach(({ pattern, replacement }) => {
        body = body.replace(pattern, replacement);
    });
// 主脚本函数...

/********** 应用配置信息 **********/
const appName = "✨AppRaven✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
const cooldown = 10 * 60 * 1000; // 1分钟冷却时间
const notifyKey = "lastNotifyTime";
const now = Date.now();
const lastNotifyTime = $persistentStore.read(notifyKey) || 0;
if (now - lastNotifyTime > cooldown) {
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