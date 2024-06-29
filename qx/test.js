/*        
        ➪：脚本名称: 微商海报大师 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/api-poster\.ycase\.cn\/web\/display url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/WS2.js

[MITM]
hostname = api-poster.ycase.cn


*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "data" : {
    "guest" : false,
    "admin" : false,
    "id" : 1770111,
    "role" : 0,
    "join_at" : 1716719701,
    "username" : "Mikephie",
    "endpoint" : "oss-us-west-1",
    "no" : 23110111,
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmRwb2ludElkIjoxLCJleHAiOjE3MjE5ODIwNTYsInJvbGUiOjAsInVpZCI6MTc3MDExMX0.fuOgfmp7T_liHQq_6iWYdENuYJLSX5VxHlts6t7GHbo",
    "vip" : true,
    "vip_expire" : 3742762088000
  }
}

$done({body : JSON.stringify(mikephie)});