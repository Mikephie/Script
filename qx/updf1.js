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


var func = JSON.parse($response.body);

func = {
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
      "canRenewal": false
    },
    {
      "expireTime": 3742762088,
      "canChangePlan": true,
      "planId": 451411,
      "productVersions": {
      },
      "canSubscription": false,
      "subscriptionType": "monthly",
      "platformGoodsId": [
        "UMiOS00010001"
      ],
      "giveawayCanUse": false,
      "nextPayTime": 3742762088,
      "isShowNextPayTime": true,
      "giveawayExpireMonth": 0,
      "isShowExpireTime": false,
      "productIds": [
        25652
      ],
      "canRenewal": false
    }
  ],
  "code": 200

};

$done({body: JSON.stringify(func)});