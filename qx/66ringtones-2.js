/******************************

脚本名称: 66铃声 解锁VIP
下载地址：商店
脚本作者：Mikephie
更新时间：2024年6月15日 15:56
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^https?:\/\/kkyun\.com\/api\/accounts\/user? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/66ringtones.js

[mitm] 
hostname = kkyun.com

*******************************/

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