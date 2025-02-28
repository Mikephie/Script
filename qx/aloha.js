/*

📜 Aloha 解锁 VIP 脚本
📅 更新时间：2024年08月15日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api\.alohaprofile\.com\/v1\/profile_info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aloha.js

[mitm]
hostname = api.alohaprofile.com

*/
 

var mikephie = JSON.parse($response.body);

mikephie.profile = {
  ...mikephie.profile,
  "is_premium": true,
  "end_of_premium": 3742762088,
  "email": "888@gmail.com",
  "_end_of_premium": "2088-08-08 08:08:08.000"
};

$done({body: JSON.stringify(mikephie)});