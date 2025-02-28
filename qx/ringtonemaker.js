/*

📜 ringtonemaker 解锁 VIP 脚本
📅 更新时间：2024年06月15日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^http:\/\/clip\.tto321\.cn\/v1\/api\/query\/userInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ringtonemaker.js

[mitm] 
hostname = clip.tto321.cn

*/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "msg" : "OK",
  "data" : {
    "uid" : 88888888,
    "userName" : "Mikephie",
    "wordRemain" : 88888,
    "payType" : 1,
    "inviteNums" : 0,
    "paintRemain" : 88888,
    "isVip" : 1,
    "expireTime" : "2088-08-08 08:08:08",
    "isTourst" : 0,
    "inviteCode" : "000000"
  },
  "code" : 200
}
  

$done({body : JSON.stringify(mikephie)});