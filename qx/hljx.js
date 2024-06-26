/*        
        ➪：脚本名称: 婚礼精选 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https:\/\/www\.lovewith\.me\/golove\/v05\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hljx.js


[MITM]
hostname = www.lovewith.me

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "data" : {
    "guest" : false,
    "admin" : false,
    "role" : 0,
    "join_at" : 1716719701,
    "endpoint" : "oss-us-west-1",
    "no" : 23110111,
    "id" : 1163222,
    "phone" : "",
    "balance" : 888888,
    "is_guest" : 0,
    "avatar" : "https://i.ibb.co/f1cgnGT/IMG-1215.jpg",
    "city_id" : 0,
    "group_id" : 1,
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjE5ODY3MjQsInN0YXR1cyI6MSwidXNlcl9pZCI6MTE2MzIyMn0.QcqjpzCLTJ3f1bP_TH1yzxqHqRTCTAOoamnsoyUuOIk",
    "username" : "Mikephie",
    "is_admin" : 0,
    "email" : "mikephiemy@gmail.com",
    "untried" : false,
    "vip" : true,
    "vip_expire" : 3742762088000
  }
}

$done({body : JSON.stringify(mikephie)});