/*        
        ➪：脚本名称: 作业批改 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >作业批改-家长辅导作业工具（永久会员）
https?:\/\/appss.rhinoxlab.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/zypg-afengye.js

[mitm] 
hostname = appss.rhinoxlab.com

*******************************/

var mikephie = JSON.parse($response.body);

mikephie.result = {
  ...mikephie.result,
  "headImg": "https://i.ibb.co/f1cgnGT/IMG-1215.jpg",
  "appleUserEmail": "mikephiemy@gmail.com",
  "wordage": 7777777,
  "mobile": "Mikephie",
  "vipGroupInfos": [
    {
      "groupType": "TYPE_ONE",
      "vipType": "VIP",
      "autoPay": "NO"
    }
  ],
  "type": "VIP",
  "vipExpireTime": "2088-08-08 08:08:08",
  "vipExpireDays": 88888888,
  "nickname": "Mikephie",
  "email": "888@gmail.com",
  "remainTimeSeconds": 99999,
  "times": 88888888
};

$done({body: JSON.stringify(mikephie)});