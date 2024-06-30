/*        
        ➪：脚本名称: Facer （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

^https:\/\/www\.facer\.io\/parse\/users\/me url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/facer-1.js

[mitm]
hostname = www.facer.io


*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "_ClientVersion" : "js4.1.0",
  "_InstallationId" : "4058947d-67e5-4432-bcf3-a98bf3615359",
  "_SessionToken" : "r:424b3501-f81d-42f5-9321-64e4389d5849",
  "_method" : "GET",
  "_ApplicationId" : "hEuoCWhpPbhupDK19f3FKb4YuMu8jxwyZlBgoeBc"
}
 
$done({body : JSON.stringify(mikephie)});