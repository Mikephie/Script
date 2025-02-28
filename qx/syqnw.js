/*

📜 水印全能王 解锁 VIP 脚本
📅 更新时间：2024年12月06日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/waterqnwa\.yunxiaoguo\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/syqnw.js

[mitm] 
hostname = waterqnwa.yunxiaoguo.cn

*/


var mikephie = JSON.parse($response.body);

mikephie.content = {
  ...mikephie.content,
  "qrCarVipInfo": 1,
  "isToastDevInfo": 0,
  "qimingVipInfo": 1,
  "isPurchasedSubscribe": 1,
  "isCheckRealNameAuth": 1,
  "aiPhotoIdVipInfo": 1,
  "virtualVipInfo": 1,
  "docConvertorVipInfo": 1,
  "adSpaceList": [],
  "waterVipInfo": {
    "beginTime": "2024-11-07 20:35:31",
    "firstOpenTime": "2024-11-07 20:35:31",
    "userSign": "ZlR0UKkflMM",
    "expireTime": "2088-08-08 08:08:08",
    "typeName": "永久专享VIP",
    "remainDays": 88888888,
    "sign": "VQU8Dq4YZDo",
    "createTime": "2024-11-07 20:35:30"
  },
  "user": {
    ...mikephie.content.user,
    "maskMobile": "MIKEPHIE",
    "headImg": "https://i.ibb.co/wM5z10N/IMG-1287.jpg"
  }
};

$done({body: JSON.stringify(mikephie)});