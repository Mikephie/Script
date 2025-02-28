/*

📜 AppRaven 解锁 VIP 脚本
📅 更新时间：2024年08月15日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
https://appraven.net/appraven/graphql url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/AppRaven.js
[mitm] 

hostname = appraven.net

*/


var body = $response.body;

body = body.replace(/"premium":false/g, '"premium":true');
body = body.replace(/"hasInAppPurchases":false/g,'"hasInAppPurchases":true');
body = body.replace(/"youOwn":false/g,
'"youOwn":true');
body = body.replace(/"arcade":false/g,
'"arcade":true');

body = body.replace(/"preorder":false/g,
'"preorder":true');

$done({ body });