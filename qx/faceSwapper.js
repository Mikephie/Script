/*

📜 FaceSwapper 解锁 VIP 脚本
📅 更新时间：2024年07月19日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/api-.*\.facereplacerext\.com\/api\/rest\/commerce\/integrate\/vip\/perform url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/faceSwapper.js

[MITM]
hostname = api-*.facereplacerext.com

*/


var mikephie = JSON.parse($response.body);

mikephie.data.list = [{
  "startTime" : 1703477754000,
  "orderId" : "340001399999999",
  "isTrialPeriod" : true,
  "endTime" : 3742762088000,
  "productId" : "73_premium_normal_yearly",
  "productType" : 3,
  "orderStatus" : 1,
  "autoRenewStatus" : true,
  "originalOrderId" : "340001399999999",
  "sign" : "c5e5450b552ac10149dcd7d4625b1ad2"
}];

$done({body : JSON.stringify(mikephie)});