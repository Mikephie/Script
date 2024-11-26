/*
哎呀漫鸭
新商店版：让我喵喵
解锁会员权益

[rewrite_local]
https://www.pdreamer.com/aymyProd/api/getUserInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/rwmm.js


[mitm] 
hostname = www.pdreamer.com
*/

var mikephie = JSON.parse($response.body);

mikephie.data = {
  ...mikephie.data,
   "purchasedVIPExpiresAt": "2088-08-08",
   "vipStatus": 1,
   "inviteNum": 99,
   "vipexpiresAt": "2088-08-08",
   "purchasedVIP": "2088-08-08",
};
 
$done({body: JSON.stringify(mikephie)});