/*        
        ➪：脚本名称: 婚礼精选 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

# > Flightradar24@ddgksf2013
^https?:\/\/mobile\.flightradar24\.com\/mobile\/(user-session|\w{9}) url script-echo-response https://github.com/ddgksf2013/dev/raw/main/flightradar24.js

[mitm]
hostname = mobile.flightradar24.com

*******************************/


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