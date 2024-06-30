/*        
        ➪：脚本名称: Facer （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

^https:\/\/www\.facer\.io\/parse\/functions\/startSubscription url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/facer-3b.js

[mitm]
hostname = www.facer.io


*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "result" : {
    "platform" : "apple",
    "isActive" : true
  }
}
 
$done({body : JSON.stringify(mikephie)});