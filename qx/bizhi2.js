/*
AppRaven



[rewrite_local]


^https:\/\/leancloud\.emotionwp\.com\/1\.1\/batch\/save url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi2.js

[mitm] 

hostname = leancloud.emotionwp.com

**/

var body = $response.body;

body = body.replace(/"isSVIP" : 0, '"isSVIP" : 1');
body = body.replace(/"isVIP" : 0, '"isVIP" : 1');
body = body.replace(/"vipEndTimeFormat" : "2024-08-11",
'"vipEndTimeFormat" : "2088-08-08",');
body = body.replace(/"vipEndTime" : 1723374820,
'"vipEndTime" : 3742767660,');

body = body.replace(/"preorder":false/g,
'"preorder":true');

$done({ body });