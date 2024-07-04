/*        
        ➪：脚本名称: Facer （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

^https:\/\/www\.facer\.io\/parse\/users\/me url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/facer-1a.js

[mitm]
hostname = www.facer.io


*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "createdAt" : "2024-07-04T01:50:11.139Z",
  "sessionToken" : "r:24219225-f3f7-4af5-867d-e5d67b780059",
  "objectId" : "yo5ZYNiz4i",
  "updatedAt" : "2024-07-04T01:50:11.139Z",
  "user" : {
    "__type" : "Pointer",
    "className" : "_User",
    "objectId" : "HMEOUskSHv"
  }
}
 
$done({body : JSON.stringify(mikephie)});