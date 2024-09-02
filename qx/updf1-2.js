/*        
        ➪：脚本名称: UPDF （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api\.updf\.com\/v1\/user\/planList url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/updf1-2.js

[mitm]

hostname = api.updf.com


*******************************/


var func = JSON.parse($response.body);

func = {

 "msg": "Successful",
  "data": [
    {
      "expireTime": -1,
      "canChangePlan": false,
      "planId": 440262,
      "productVersions": {
      },
      "canSubscription": false,
      "subscriptionType": "lifetime",
      "platformGoodsId": [
        "PNiOS00010004"
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
      "expireTime": 1725199724,
      "canChangePlan": true,
      "planId": 440263,
      "productVersions": {
      },
      "canSubscription": false,
      "subscriptionType": "lifetime",
      "platformGoodsId": [
        "PNiOS00010004"
      ],
      "giveawayCanUse": false,
      "nextPayTime": 0,
      "isShowNextPayTime": false,
      "giveawayExpireMonth": 0,
      "isShowExpireTime": true,
      "productIds": [
        25646,
        25643,
        25644,
        25645
      ],
      "canRenewal": true
    },
    {
      "expireTime": 1725199724,
      "canChangePlan": true,
      "planId": 440258,
      "productVersions": {
      },
      "canSubscription": false,
      "subscriptionType": "monthly",
      "platformGoodsId": [
        "MSiOS00010004"
      ],
      "giveawayCanUse": false,
      "nextPayTime": 0,
      "isShowNextPayTime": false,
      "giveawayExpireMonth": 0,
      "isShowExpireTime": true,
      "productIds": [
        25648
      ],
      "canRenewal": true
    }
  ],
  "code": 200

};

$done({body: JSON.stringify(func)});