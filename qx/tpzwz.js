/*
#!name= ✨ 图片转文字 ✨
#!desc=图像编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/tpzwz.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^http://api\.528529\.com/apple_product/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/tpzwz.js

[mitm]
hostname = api.528529.com

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ 图片转文字 ✨";   // ← 只改这个显示名
const ID = "图片转文字";              // ← 对应键名，保持纯字母数字（无 emoji）

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

obj = {
  msg: "success",
  data: [
    {
      vip_type: "vip",
      due_time: "2088-08-08 08:08:08",
      isExpire: false,
      isExist: true,
      in_app: [
        {
          quantity: "1",
          product_id: "vip_1_year_auto",
          transaction_id: "60002037256498",
          original_transaction_id: "60002037256498",
          purchase_date: "2024-09-21 18:00:50 Etc/GMT",
          purchase_date_ms: "1726941650000",
          purchase_date_pst: "2024-09-21 11:00:50 America/Los_Angeles",
          original_purchase_date: "2024-09-21 18:00:51 Etc/GMT",
          original_purchase_date_ms: "1726941651000",
          original_purchase_date_pst: "2024-09-21 11:00:51 America/Los_Angeles",
          expires_date: "2088-08-08 08:08:08 Etc/GMT",
          expires_date_ms: "3742762088000",
          expires_date_pst: "2088-08-08 08:08:08 America/Los_Angeles",
          web_order_line_item_id: "60000900340093",
          is_trial_period: "true",
          is_in_intro_offer_period: "true",
          in_app_ownership_type: "PURCHASED"
        }
      ]
    }
  ],
  code: 1
};

$done({ body: JSON.stringify(obj) });
// 主脚本函数...