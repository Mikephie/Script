/*

📜 DuetDisplayPro 解锁 VIP 脚本
📅 更新时间：2024年06月28日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

需登录

[rewrite_local]
https://rdp.duetdisplay.com/v1/users/validateReceipt url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/duetdisplaypro.js

[mitm]
hostname = rdp.duetdisplay.com

*/


var objc = JSON.parse($response.body);

    objc = {
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
}

$done({body : JSON.stringify(objc)});
