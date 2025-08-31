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

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ AppRaven ✨";   // ← 只改这个显示名
const ID = "appraven";              // ← 对应键名，保持纯字母数字（无 emoji）

const EN = "n:"+ID+":e";             // 开关
const TS = "n:"+ID+":t";             // 时间戳
const CD = 600000;                   // 冷却时长：10 分钟（毫秒）

// ---- 通知函数（兼容 QX / Surge / Loon）----
function notify(t,s,b){
  if (typeof $notify==="function") $notify(t,s,b);
  else if ($notification?.post) $notification.post(t,s,b);
  else console.log("[Notify]", t, s, b);
}

// ---- 判定逻辑 ----
let enabled = (($persistentStore.read(EN) || "1") === "1");
if (enabled) {
  let now  = Date.now();
  let last = parseInt($persistentStore.read(TS) || "0",10) || 0;
  if (last===0 || now-last>CD) {
    notify(APP_NAME,"💖永久解锁 🆚 ⓿❽-⓿❽-❷⓿❽❽💗");
    $persistentStore.write(String(now), TS);
  }
}

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
