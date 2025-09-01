/*
#!name= ✨ ToonMe ✨
#!desc=图像编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/toonme.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https?:\/\/purchases\.ws\.pho\.to\/api\/v2\/apple\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/toonme.js

[MITM]
hostname = purchases.ws.pho.to

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ ToonMe ✨";   // ← 只改这个显示名
const ID = "toonme";              // ← 对应键名，保持纯字母数字（无 emoji）

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
var obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "app_item_id": 1508120751,
    "receipt_creation_date": "2023-07-10 13:43:37 Etc\/GMT",
    "bundle_id": "com.informelab.toonme",
    "original_purchase_date": "2023-07-10 13:11:19 Etc\/GMT",
    "adam_id": 1508120751,
    "receipt_creation_date_pst": "2023-07-10 06:43:37 America\/Los_Angeles",
    "request_date": "2023-07-10 13:43:40 Etc\/GMT",
    "request_date_pst": "2023-07-10 06:43:40 America\/Los_Angeles",
    "version_external_identifier": 858037300,
    "request_date_ms": "1688996620991",
    "original_purchase_date_pst": "2023-07-10 06:11:19 America\/Los_Angeles",
    "application_version": "1892",
    "original_purchase_date_ms": "1688994679000",
    "receipt_creation_date_ms": "1688996617000",
    "original_application_version": "1892",
    "download_id": 502594302492761518
  },
  "pending_renewal_info": [
    {
      "product_id": "pro_features_tnmweek_4",
      "original_transaction_id": "730001188515156",
      "auto_renew_product_id": "pro_features_tnmweek_4",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1688996616000",
      "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
      "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "730001188515156",
      "is_trial_period": "false",
      "original_transaction_id": "730001188515156",
      "purchase_date": "2023-07-10 13:43:36 Etc\/GMT",
      "product_id": "pro_features_tnmweek_4",
      "original_purchase_date_pst": "2023-07-10 06:43:37 America\/Los_Angeles",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "21022245",
      "original_purchase_date_ms": "1688996617000",
      "web_order_line_item_id": "730000549129674",
      "expires_date_ms": "148204937166000",
      "purchase_date_pst": "2023-07-10 06:43:36 America\/Los_Angeles",
      "original_purchase_date": "2023-07-10 13:43:37 Etc\/GMT"
    }
  ]
};
$done({ body: JSON.stringify(obj) });
// 主脚本函数...