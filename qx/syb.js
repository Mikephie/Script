/*

📜 水印宝 解锁 VIP 脚本
📅 更新时间：2024年12月06日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/newappapi\.fntmob\.com\/api\/v1\/qsy\/user-info(.?)+ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/syb.js

[mitm] 
hostname = newappapi.fntmob.com

*/


let obj =  JSON.parse($response.body);

obj.data = {
    ...obj.data,
    "avatar": "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
    "nickname": "Mikephie",
    "is_vip" : 1,
    "level_expire" : 3742762088
}

$done({body: JSON.stringify(obj)});