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
  "msg": "操作已成功。",
  "data": {
    "ai_reply": {
      "expireTime": 0,
      "PlanId": 0,
      "parentOrderId": 0,
      "uid": 0,
      "productType": 0,
      "subscriptionId": 0,
      "updatedAt": 0,
      "currentMonthStartTime": 0,
      "type": 0,
      "codeId": 0,
      "cancelTime": 0,
      "nextPayTime": 0,
      "used": 0,
      "orderId": 0,
      "createdAt": 0,
      "currentMonthExpireTime": 0
    },
    "ai_vip": 1,
    "unlimited_ai_vip": 1,
    "usage": {
      "file_size": 0,
      "file_nums": 0,
      "chat_nums": 0,
      "file_pages": 0
    },
    "free": {
      "file_size": 10485760,
      "file_nums": 3,
      "chat_nums": 30,
      "file_pages": 100
    },
    "pro": {
      "file_size": 2147483648,
      "file_nums": 100,
      "chat_nums": 1000,
      "file_pages": 1000
    },
    "unlimited": {
      "file_size": 2147483648,
      "file_nums": -1,
      "chat_nums": -1,
      "file_pages": 1000
    }
  },
  "code": 200
}
 
$done({body : JSON.stringify(mikephie)});