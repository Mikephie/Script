/*

📜 FaceLab 解锁 VIP 脚本
📅 更新时间：2024年07月19日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/subscription-api\.lyrebirdstudio\.net\/subscriptions\/apple\/(verify|status|decode-apple-receipt) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/facelab.js

[mitm]
hostname = subscription-api.lyrebirdstudio.net

*/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "data" : {
    "app_id" : "com.lyrebirdstudio.facelab",
    "quantity" : 1,
    "start_date" : 1708187889000,
    "end_date" : 3742762088000,
    "created_at" : 1708187892597,
    "user_id" : "A59BD623FE0349588C87C655BAA880B1",
    "type" : "Auto-Renewable Subscription",
    "main_status_code" : 3.1000000000000001,
    "mmp_id" : "1707723056548-8345046",
    "sub_status_name" : "TRIAL",
    "app_platform" : "IOS",
    "product_id" : "com.lyrebirdstudio.facelab.iap.subscription.weekly7a",
    "invoice_token" : "490001637717255",
    "updated_at" : 1708187892597,
    "status_name" : "ACTIVE_AUTO_REN_ON",
    "ownership_type" : "PURCHASED",
    "country" : "HK"
  }
};

$done({body : JSON.stringify(mikephie)});