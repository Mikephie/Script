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
  "success": true,
  "products": [
    {
      "vendor": "apple",
      "product": "DuetAirAnnual",
      "subscriptionId": 391961,
      "purchaseDate": "2023-11-14T19:47:25Z",
      "cancelled": false,
      "expiresDate": "2099-11-09T19:47:22Z",
      "inTrial": true
    }
  ],
  "hasStripeAccount": false
}

$done({body : JSON.stringify(objc)});
