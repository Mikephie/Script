/*        
        ➪：脚本名称: 海报制作大师 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 

^https?:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/zypg-3.js

[MITM]
hostname = poster.leminet.cn

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "msg" : "操作成功",
  "data" : {
    "userId" : "88888888",
    "avatar" : "https://i.ibb.co/f1cgnGT/IMG-1215.jpg",
    "nickname" : "Mikephie",
    "vipLevel" : 2,
    "isForeverVip" : true,
    "accountSourceType" : 1,
    "memberStatus" : 1,
    "memberExpireTime" : 3742762088000
  },
  "code" : 0
}

$done({body : JSON.stringify(mikephie)});