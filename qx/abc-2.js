/*        
        ➪：脚本名称: 海报制作大师 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/poster\.leminet\.cn\/v02\/export url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/abc-2.js

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