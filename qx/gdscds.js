/*        
        ➪：脚本名称: 高定素材大师（永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >高定素材大师（永久会员）需要登录！
^https?:\/\/apps-api.lingege.cn\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/gdscds.js

[mitm] 
hostname = apps-api.lingege.cn

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "msg" : "操作成功",
  "data" : {
    "userId" : "88888888",
    "avatar" : "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
    "nickname" : "Mikephie",
    "vipLevel" : 4,
    "isForeverVip" : true,
    "accountSourceType" : 1,
    "memberStatus" : 1,
    "memberExpireTime" : 3742762088000
    "memberExpireTimeStr":"2099-09-09 09:09:09",
  },
  "code" : 0
}

$done({body : JSON.stringify(mikephie)});