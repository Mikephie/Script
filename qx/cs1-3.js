/*        
        ➪：脚本名称: CamScanner （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]

^https:\/\/d82\.intsig\.net\/sync\/query_storage\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cs1-3.js

[mitm]

hostname = d82.intsig.net

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "storage" : "544840777/16008609792"
}

$done({body : JSON.stringify(mikephie)});