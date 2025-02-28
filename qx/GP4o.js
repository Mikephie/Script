/*

📜 GP4o 解锁 VIP 脚本
📅 更新时间：2024年03月08日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
https://nichousha.sjrjyffs.top/api/img/aiSketch url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/GP4ohd.js
https://nichousha.sjrjyffs.top/api/app/user/getCurrentInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/GP4o.js

[mitm]
hostname = nichousha.sjrjyffs.top

*/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "msg": "ok",
  "data": {
    "vipStatus": "1",
    "id": "1818946794591789058",
    "vipLabel": "1",
    "nickname": "尾号tAI_Mikephie",
    "imgNum": 888888,
    "avatar": "https://i.ibb.co/wM5z10N/IMG-1287.jpg"
  },
  "code": 200
}
  
$done({body : JSON.stringify(mikephie)});