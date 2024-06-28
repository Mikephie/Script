/*        
        ➪：脚本名称: 微商海报大师 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local] 
^https?:\/\/api-poster\.ycase\.cn\/api\/user\/info url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/WS1.js
^https?:\/\/api-poster\.ycase\.cn\/api\/User\/home url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/WS1.js 
^https?:\/\/api-poster\.ycase\.cn\/web\/display url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/WS2.js
[MITM]
hostname = api-poster.ycase.cn


*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "status" : "1",
  "info" : "成功",
  "data" : {
    "sex" : "未知",
    "phone" : "1",
    "username" : "Mikephie🎖",
    "user_id" : "539279",
    "headimgurl" : "https://i.ibb.co/G2zzXBr/IMG-1275.jpg",
    "vip_status" : "1",
    "vip_expiration" : "2088-08-08",
    "token" : "rk36l7e9ptanK4KkcmmO8UBHmqdLQouH"
  }
}

$done({body : JSON.stringify(mikephie)});