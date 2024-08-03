/*        
        ➪：脚本名称: UPDF （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/apis\.updf\.com\/v1\/ai\/chat\/usage url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/updf3.js

[mitm]

hostname = apis.updf.com
 
*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "msg": "Operation successful.",
  "data": {
    "ai_vip": 1,
    "ai_reply": {
      "expireTime": 1725199724,
      "PlanId": 440258,
      "parentOrderId": 425652,
      "productType": 0,
      "uid": 6608126,
      "subscriptionId": 5268,
      "updatedAt": 1722523884,
      "currentMonthStartTime": 1722521330,
      "type": 0,
      "codeId": 0,
      "cancelTime": 1722523884,
      "nextPayTime": 0,
      "used": 1,
      "orderId": 425652,
      "createdAt": 1722521330,
      "currentMonthExpireTime": 1725199730
    },
    "unlimited_ai_vip": 0,
    "usage": {
      "file_size": 0,
      "file_nums": 1,
      "chat_nums": 1,
      "file_pages": 0
    },
    "free": {
      "file_size": 10485760,
      "file_nums": 3,
      "chat_nums": 30,
      "file_pages": 100
    },
    "unlimited": {
      "file_size": 2147483648,
      "file_nums": -1,
      "chat_nums": -1,
      "file_pages": 1000
    },
    "pro": {
      "file_size": 2147483648,
      "file_nums": 100,
      "chat_nums": 1000,
      "file_pages": 1000
    }
  },
  "code": 200
}
 
$done({body : JSON.stringify(mikephie)});