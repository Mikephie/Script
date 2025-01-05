/*
试卷100解锁VIP
2024.1.12


  
[rewrite_local]
^https:\/\/paper\.zjapp\.xyz\/api\/v1\/status\/list url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sj100-2.js

[mitm]
hostname = paper.zjapp.xyz
*/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "method": "GET",
  "url": "/api/translation/thirdToken?token_channel=MS",
  "headers": {
    "authority": "translator.felo.me",
    "accept": "*/*",
    "content-type": "application/json",
    "deviceid": "C58D8339-7888-4914-B1E8-054F75B568B9",
    "accept-language": "zh-SG, zh-CN; q=0.9, zh-Hans; q=0.8",
    "appversionid": "204",
    "appversion": "3.1.2",
    "user-agent": "iPhone"

}

$done({body: JSON.stringify(mikephie)});