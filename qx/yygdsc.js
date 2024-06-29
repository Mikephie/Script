/*        
        ➪：脚本名称: 雅俗共赏/高定素材大师（永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >雅俗共赏/高定素材大师（永久会员）需要登录！
^https?:\/\/apps-api\.(lianaishouce|lingege)\.cn\/user\/(public\/login.*|getUserInfo) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/yygdsc.js

[mitm] 
hostname = apps-api.lianaishouce.cn, apps-api.lingege.cn

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
    "memberExpireTimeStr": "2088-08-08 08:08:08",
    "memberStatusStr": "已开通",
    "remainNum": 9999,
 
 else if {
    
 
  },
  "code" : 0
}

$done({body : JSON.stringify(mikephie)});