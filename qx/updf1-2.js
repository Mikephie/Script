/*        
        ➪：脚本名称: UPDF （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api\.updf\.com\/v1\/user\/planList url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/updf1.js

[mitm]

hostname = api.updf.com


*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "msg": "成功",
  "data": [
    {
      "expireTime": -1,
      "canChangePlan": false,
      "planId": 309476,
      "productVersions": {
      },
      "canSubscription": false,
      "subscriptionType": "lifetime",
      "platformGoodsId": [
      ],
      "giveawayCanUse": false,
      "nextPayTime": 0,
      "isShowNextPayTime": false,
      "giveawayExpireMonth": 0,
      "isShowExpireTime": false,
      "productIds": [
        25646,
        25643,
        25644,
        25645
      ],
      "canRenewal": false
    },
    {
      "expireTime": -1,
      "canChangePlan": false,
      "planId": 309477,
      "productVersions": {
      },
      "canSubscription": false,
      "subscriptionType": "lifetime",
      "platformGoodsId": [
      ],
      "giveawayCanUse": false,
      "nextPayTime": 0,
      "isShowNextPayTime": false,
      "giveawayExpireMonth": 0,
      "isShowExpireTime": false,
      "productIds": [
        25647
      ],
      "canRenewal" : false
    },
    {
      "expireTime" : 3742762088000,
      "canChangePlan" : true,
      "planId" : 440258,
      "productVersions" : {

      },
      "canSubscription" : false,
      "subscriptionType" : "annually",
      "platformGoodsId" : [
        "ASiOS000100012"
      ],
      "giveawayCanUse" : false,
      "nextPayTime" : 3742762088000,
      "isShowNextPayTime" : true,
      "giveawayExpireMonth" : 0,
      "isShowExpireTime" : false,
      "productIds" : [
        25648
      ],
      "canRenewal" : false
    }
  ],
  "code" : 200
}
 
$done({body : JSON.stringify(mikephie)});