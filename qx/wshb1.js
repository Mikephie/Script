/*        
        ➪：脚本名称: 微商海报大师 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/api-poster\.ycase\.cn\/api\/user\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/wshb1.js

[MITM]
hostname = api-poster.ycase.cn

#"token" : "rk36l7e9ptanK4KkcmmO8UBHmqdLQouH"
*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "status" : "1",
  "info" : "成功",
  "data" : {
    "sex" : "未知",
    "phone" : "17157858185",
    "username" : "Mikephie🎖",
    "user_id" : "539279",
    "headimgurl" : "https://i.ibb.co/G2zzXBr/IMG-1275.jpg",
    "vip_status" : "1",
    "vip_expiration" : "2088-08-08",
    
  }
}

$done({body : JSON.stringify(mikephie)});