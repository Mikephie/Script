/*
#!name= ✨ DuetDisplayPro ✨
#!desc=效率
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/duetdisplaypro.js
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
#需登录
[rewrite_local]
^https:\/\/rdp\.duetdisplay\.com\/v1\/users\/validateReceipt url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/duetdisplaypro.js

[MITM]
hostname = rdp.duetdisplay.com

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ DuetDisplayPro ✨";   // ← 只改这个显示名
const ID = "duetdisplaypro";              // ← 对应键名，保持纯字母数字（无 emoji）

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
var obj = JSON.parse($response.body);
if (!obj) { $done({}); }

obj = {
    "success": true,
    "products": [
        {
            "vendor": "apple",
            "product": "DuetStudioAnnual",
            "subscriptionId": 434779,
            "purchaseDate": "2024-05-27T04:25:43Z",
            "cancelled": false,
            "expiresDate": "2088-08-08T08:08:08Z",
            "inTrial": true
        }
    ],
    "hasStripeAccount": false
};

$done({ body: JSON.stringify(obj) });
// 主脚本函数...
