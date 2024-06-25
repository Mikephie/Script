/*
海报制作大师
解锁永久VIP
@Rnik666

[rewrite_local] 

^https?:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbzzds.js

[MITM]
hostname = poster.leminet.cn

*************************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "data" : {
    "guest" : false,
    "admin" : false,
    "id" : 1770111,
    "role" : 1,
    "join_at" : 1716719701,
    "username" : "Rnik666🎖",
    "endpoint" : "oss-us-west-1",
    "no" : 23110111,
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmRwb2ludElkIjoxLCJleHAiOjE3MjE4ODgyMzAsInJvbGUiOjAsInVpZCI6MTc3MDExMX0.BaifbBXKIbnehWoMu2O4gOimn3pafRpIXhyCFmVoaoI",
    "vip" : true,
    "vip_expire" : 4092566400
  }
}
  

$done({body : JSON.stringify(mikephie)});