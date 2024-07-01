/*        
        ➪：脚本名称: 微商海报大师 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/api-poster\.ycase\.cn\/api\/User\/home url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/wshb2.js

[MITM]
hostname = poster.leminet.cn

#"token" : "rk36l7e9ptanK4KkcmmO8UBHmqdLQouH",
*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "status" : 1,
  "info" : "成功",
  "data" : {
    "collection" : [

    ],
    "id" : "1",
    "userinfo" : {
      "phone" : "17157858185",
      "username" : "Mikephie🎖",
      "headimgurl" : "https://i.ibb.co/G2zzXBr/IMG-1275.jpg",
      "vip_status" : "1",
      "vip_expiration" : "2088-08-08",
      "gold_balance" : 888888
    }
  }
}

$done({body : JSON.stringify(mikephie)});