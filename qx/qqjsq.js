/*

📜 亲戚计算器 解锁 VIP 脚本
📅 更新时间：2024年03月08日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^http:\/\/chenghu\.kuaixuanwo\.com\/user\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/qqjsq.js

[mitm] 
hostname = chenghu.kuaixuanwo.com

*/


let mikephie = JSON.parse($response.body);

mikephie.data = {
   ...mikephie.data,
   "subscribe_expires_date" : "2088-08-08T08:08:08Z",
   "vip_type" : 1,
   "purchase_date" : 32472115200,
   "is_vip" : 1
}

$done({body: JSON.stringify(mikephie)});