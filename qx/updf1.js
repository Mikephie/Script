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
      "platformGoodsId": "PNmacOS00040007",
      "giveawayCanUse": false,
      "nextPayTime": 0,
      "isShowNextPayTime": false,
      "giveawayExpireMonth": 0,
      "isShowExpireTime": false,
      "productIds": [
        25646,
        25645,
        25644,
        25643
      ],
      "goodsId": 65908,
      "isRecommend": 0,
      "platformGoodsType": "inapp",
      "subscriptionType": "lifetime"
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
      "platformGoodsId": "PNmacOS00040007",
      "giveawayCanUse": false,
      "nextPayTime": 0,
      "isShowNextPayTime": false,
      "giveawayExpireMonth": 0,
      "isShowExpireTime": false,
      "productIds": [
        25652
      ],
      "goodsId": 66003,
      "isRecommend": 0,
      "platformGoodsType": "sub",
      "subscriptionType": "annually"
      "canRenewal": false
    }
  ],
  "code": 200
}
 
$done({body : JSON.stringify(mikephie)});