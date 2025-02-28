/*

📜 海报制作大师 解锁 VIP 脚本
📅 更新时间：2024年03月08日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https?:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbzzds.js


[MITM]
hostname = poster.leminet.cn

*/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "data" : {
    "guest" : false,
    "admin" : true,
    "id" : 1766214,
    "role" : 1,
    "join_at" : 1716393343,
    "username" : "Rnik666",
    "endpoint" : "oss-cn-hangzhou",
    "no" : 23105214,
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmRwb2ludElkIjowLCJleHAiOjE3MTg5ODUzNTIsInJvbGUiOjAsInVpZCI6MTc2NTIxNH0.lGeXRcKi759yQXwD5aUEJus1UgpEZeMJ6k47XzMeBZ0",
    "vip" : true,
    "vip_expire" : 4092610661000
  }
}
  

$done({body : JSON.stringify(mikephie)});