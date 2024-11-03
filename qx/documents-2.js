/*        
        ➪：脚本名称: Documents （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
https://license.pdfexpert.com/api/2.0/documents/subscription/refresh url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/documents-2.js

[mitm]
hostname = *.pdfexpert.com

*************************************/


body = {
  "token": "33d3aced-fced-4c92-9971-2d42afc7c94f",
  "id": null,
  "chargingPlatform": "iOS AppStore",
  "deviceInfo": {
    "amplitudeDeviceId": null
  },
  "bundleId": "com.readdle.ReaddleDocsIPad",
  "receiptData": "MIITDAYJKoZIhvcNAQcCoIIS/"
};

$done({body: JSON.stringify(body)});