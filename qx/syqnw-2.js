/*        
        ➪：脚本名称: 水印全能王 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/waterqnwa\.yunxiaoguo\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/syqnw-2.js

[mitm] 
hostname = waterqnwa.yunxiaoguo.cn

*******************************/


var mikephie = JSON.parse($response.body);

mikephie = {
  "code": "10000",
  "content": {
    "qrCarVipInfo": null,
    "isToastDevInfo": 1,
    "qimingVipInfo": 1,
    "isPurchasedSubscribe": 1,
    "isCheckRealNameAuth": 1,
    "aiPhotoIdVipInfo": 1,
    "virtualVipInfo": 1,
    "docConvertorVipInfo": 1,
    "adSpaceList": [
    ],
    "waterVipInfo": {
      "beginTime": "2024-11-07 20:35:31",
      "firstOpenTime": "2024-11-07 20:35:31",
      "userSign": "ZlR0UKkflMM",
      "expireTime": "2088-08-08 08:08:08",
      "typeName": "新客专享",
      "remainDays": 88888,
      "sign": "VQU8Dq4YZDo",
      "createTime": "2024-11-07 20:35:30"
    },
    "user": {
      "idNumber": "",
      "maskRealityName": "",
      "registerChannel": "appStore",
      "pwd": "",
      "parentMobile": "",
      "realityName": "",
      "appType": "app",
      "maskIdNumber": "",
      "promoteCode": "gKKnG9J4",
      "registerClientBrand": "",
      "appId": "water-qnw",
      "appName": "水印全能王",
      "parentRealityName": "",
      "balanceStr": "0.00",
      "regional": "",
      "registerClientId": "7A8ED72D-D398-4AA1-BF8B-BCFC6A0D24F0",
      "registerIp": "27.148.249.11",
      "email": "",
      "parentSign": "Tll50EH69Cs",
      "name": "15546907888",
      "mobile": "15546907888",
      "registerClientVersion": "18.1",
      "maskMobile": "155****7888",
      "sign": "ZlR0UKkflMM",
      "promoteQrCode": "",
      "createTime": "2024-11-07 19:43:19",
      "openid": "",
      "registerClientModel": "Unknown",
      "appCode": "water-qnw",
      "balance": 0,
      "wxMpPromoteUrl": "",
      "pidStr": ",10050,",
      "headImg": "https:\/\/i.ibb.co\/wM5z10N\/IMG-1287.jpg",
      "pid": 10050,
      "registerClientType": "ios"
    }
  },
  "accessToken": "PPYzz3yk9chmg9swQXm1hXnq8Av2eGCQ5LKWHl3D03zqBFuoNW14Co0M3QLdYLZ0",
  "msg": "成功!",
  "timestamp": 1730983165409
}
 
$done({body: JSON.stringify(mikephie)});