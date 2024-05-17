/*
‎Duet Display 2.18
DuetAir 1.2.12

需登录

[rewrite_local]

https://rdp.duetdisplay.com/v1/users/validateReceipt url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/DuetDisplay.js

[mitm]
hostname = rdp.duetdisplay.com
*/


var objc = JSON.parse($response.body);

    objc = {
  "success": true,"hasStripeAccount": true,
  "products": [
    {
      "vendor": "stripe",
      "product": "duetProAnnual",
      "subscriptionId": 2193526,
      "purchaseDate": "2024-05-14T02:41:27Z",
      "cancelled": false,
      "expiresDate": "2088-05-21T02:41:27Z",
      "inTrial": true
    }
  ],
}

$done({body : JSON.stringify(objc)});
