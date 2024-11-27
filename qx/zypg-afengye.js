/*        
        ➪：脚本名称: 作业批改 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >作业批改-家长辅导作业工具（永久会员）
作业工具（永久会员）
^https:\/\/appss\.rhinoxlab\.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/zypg-afengye.js

[mitm] 
hostname = appss.rhinoxlab.com

*******************************/

var mikephie = JSON.parse($response.body);

if ($request.url.indexOf("/app/account/getAccountInfo") != -1) {    
mikephie.result = {
  ...mikephie.result,
  "headImg": "https://i.ibb.co/f1cgnGT/IMG-1215.jpg",
  "wordage": 88888888,
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
  "remainTimeSeconds": 888888,
  "times": 88888888
};

$done({body: JSON.stringify(mikephie)});