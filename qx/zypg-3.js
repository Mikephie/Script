/*        
        ➪：脚本名称: 海报制作大师 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 

^https?:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/zypg-3.js

[MITM]
hostname = poster.leminet.cn

var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "data" : {
    "id" : 1770111,
    "vip" : true,
    "join_at" : 1716719701,
    "admin" : true,
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmRwb2ludElkIjoxLCJleHAiOjE3MjE4ODg2OTMsInJvbGUiOjAsInVpZCI6MTc3MDExMX0.8BWU1wZeaUBJQMNhZER7IC7ig9tCFhfEO4OCZ1EM5DY",
    "username" : "Mikephie",
    "no" : 23110111,
    "biz" : "",
    "endpoint" : "oss-us-west-1",
    "guest" : true,
    "role" : 1,
    "vip_expire" : 3742762088000
  }
}

$done({body : JSON.stringify(mikephie)});