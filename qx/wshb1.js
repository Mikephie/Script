/*        
        ➪：脚本名称: 海报制作大师 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/abc.js

[MITM]
hostname = poster.leminet.cn


*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "status" : "1",
  "info" : "成功",
  "data" : {
    "sex" : "未知",
    "phone" : "1",
    "username" : "Rnik666🎖",
    "user_id" : "539279",
    "headimgurl" : "https://pavo.elongstatic.com/i/ori/1uG8Yb8CUWA.png",
    "vip_status" : "1",
    "vip_expiration" : "2999-09-09",
    "token" : "rk36l7e9ptanK4KkcmmO8UBHmqdLQouH"
  }
}

$done({body : JSON.stringify(mikephie)});