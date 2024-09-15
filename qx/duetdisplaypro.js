/*
‎Duet Display 2.18
DuetAir 1.2.12

需登录

[rewrite_local]

https://rdp.duetdisplay.com/v1/users/validateReceipt url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/DuetDisplayPro.js

[mitm]
hostname = rdp.duetdisplay.com
*/


var objc = JSON.parse($response.body);

    objc = {
  "success": true,
  "products": [
    {
      "vendor": "apple",
      "product": "DuetStudioAnnual",
      "subscriptionId": 434779,
      "purchaseDate": "2024-05-27T04:25:43Z",
      "cancelled": false,
      "expiresDate": "2088-08-08T08:08:08Z",
      "inTrial": true
    }
  ],
  "hasStripeAccount": false
}

$done({body : JSON.stringify(objc)});
