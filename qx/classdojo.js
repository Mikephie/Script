/*
#!name= ✨ Classdojo ✨
#!desc=天气预测
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/classdojo.js
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0 url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js

[MITM]
hostname = payments.classdojo.com

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ Classdojo ✨";   // ← 只改这个显示名
const ID = "classdojo";              // ← 对应键名，保持纯字母数字（无 emoji）

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
let obj = JSON.parse($response.body);
if (!obj) { $done({}); }

if (obj.subscriber && obj.subscriber.subscriptions) {
    for (const key in obj.subscriber.subscriptions) {
        if (obj.subscriber.subscriptions.hasOwnProperty(key)) {
            obj.subscriber.subscriptions[key].expires_date = "2088-08-08T08:08:08Z";
        }
    }
}

if (obj.subscriber && obj.subscriber.entitlements) {
    for (const key in obj.subscriber.entitlements) {
        if (obj.subscriber.entitlements.hasOwnProperty(key)) {
            obj.subscriber.entitlements[key].expires_date = "2088-08-08T08:08:08Z";
        }
    }
}

$done({ body: JSON.stringify(obj) });
// 主脚本函数...
