/*
海报制作大师
解锁永久VIP
@Rnik666

[rewrite_local] 

^https?:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/HBZZDS.js

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
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmRwb2ludElkIjoxLCJleHAiOjE3MjE2NTI4MjksInJvbGUiOjAsInVpZCI6MTc3MDExMX0.l6QdgQK3utZCUP0eF3VJOrziAXK_Iqjd1eHBYYzK6os",
    "username" : "Mikephie",
    "no" : 23110111,
    "biz" : "",
    "endpoint" : "oss-us-west-1",
    "guest" : false,
    "role" : 1,
    "vip_expire" : 4092610661000
  }
}
  

$done({body : JSON.stringify(mikephie)});