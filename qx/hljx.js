/*

📜 婚礼精选 解锁 VIP 脚本
📅 更新时间：2024年03月08日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https:\/\/www\.lovewith\.me\/golove\/v05\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hljx.js


[MITM]
hostname = www.lovewith.me

*/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "data" : {
    "id" : 1163222,
    "phone" : "",
    "balance" : 888888,
    "is_guest" : 0,
    "avatar" : "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
    "city_id" : 0,
    "group_id" : 1,
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjE5ODY3MjQsInN0YXR1cyI6MSwidXNlcl9pZCI6MTE2MzIyMn0.QcqjpzCLTJ3f1bP_TH1yzxqHqRTCTAOoamnsoyUuOIk",
    "username" : "Mikephie",
    "is_admin" : 0,
    "email" : "mikephiemy@gmail.com",
    "untried" : false,
    "vip_expire" : 3742762088000
  }
}

$done({body : JSON.stringify(mikephie)});