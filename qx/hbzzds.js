/******************************

脚本名称: 海报制作大师 解锁VIP
下载地址：商店
脚本作者：Mikephie
更新时间：2024年6月15日 15:56
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local] 
 
^https?:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbzzds.js

[MITM]
hostname = poster.leminet.cn

{
  "success" : true,
  "data" : {
    "guest" : false,
    "admin" : true,
    "id" : 1770111,
    "role" : 1,
    "join_at" : 1716719701,
    "username" : "Mikephie",
    "endpoint" : "oss-us-west-1",
    "no" : 23110111,
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmRwb2ludElkIjoxLCJleHAiOjE3MjE1MzI2MTIsInJvbGUiOjAsInVpZCI6MTc3MDExMX0.lglVbwP76K8UofGRt7iNPwLgRj-J1zct8w_KT4HRt2U",
    "vip" : true,
    "vip_expire" : 4092610661000
  }
}