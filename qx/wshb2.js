/*        
        ➪：脚本名称: 海报制作大师 （永久会员）

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
  "message" : "恭喜你",
  "success" : true,
  "code" : 0
}

$done({body : JSON.stringify(mikephie)});