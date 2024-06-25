*************************************/
/*        
        ➪：脚本名称: 海报制作大师 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ


[rewrite_local] 
^https?:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbzzds.js


[MITM]
hostname = poster.leminet.cn

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹


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