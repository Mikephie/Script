/*
#!name= ✨ 边框水印大师 ✨
#!desc=图像编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/bksyds.js
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/photoby\.hasmash\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js

[MITM]
hostname = photoby.hasmash.com

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ 边框水印大师 ✨";   // ← 只改这个显示名
const ID = "边框水印大师";              // ← 对应键名，保持纯字母数字（无 emoji）

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

$done({ body: JSON.stringify(body) });
// 主脚本函数...
