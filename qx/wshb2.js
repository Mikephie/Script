/*        
        ➪：脚本名称: 微商海报大师 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/api-poster\.ycase\.cn\/api\/User\/home url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/WS1.js

[MITM]
hostname = poster.leminet.cn


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
      "username" : "Rnik666🎖",
      "headimgurl" : "https://pavo.elongstatic.com/i/ori/1uG8Yb8CUWA.png",
      "vip_status" : "1",
      "vip_expiration" : "2999-09-09",
      "token" : "rk36l7e9ptanK4KkcmmO8UBHmqdLQouH",
      "gold_balance" : 0
    }
  }
}

$done({body : JSON.stringify(mikephie)});