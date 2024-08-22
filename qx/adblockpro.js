/*        
        ➪：脚本名称: Adblock Pro （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹


[rewrite_local]
^https:\/\/api\.adblockpro\.app\/verify url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js

[mitm]
hostname = api.adblockpro.app

*******************************/
 
var mikephie = JSON.parse($response.body);

    mikephie = {
  "p" : 1,
  "a" : "",
  "i" : 1,
  "x" : 1,
  "b" : 274,
  "r" : "",
  "c" : "F8DABB6D",
  "s" : 1,
  "l" : 1,
  "t" : 1,
  "e" : 1,
  "m" : 1,
  "f" : 1,
  "v" : true
}

$done({body : JSON.stringify(mikephie)});