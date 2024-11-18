/*        
        ➪：脚本名称: PDFExpert （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/pdfexpert6\/subscription\/refresh url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pdfexpert1.js
^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/pdfexpert6\/subscription\/refresh url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pdfexpert2.js

[mitm]
hostname = license.pdfexpert.com


*/


Body = {
  "originalTransactionId" : 30001521230668,
  "inAppStates" : [
    {
      "productId" : "com.readdle.PDFExpert5.subscription.year50BMI",
      "isInGracePeriod" : false,
      "subscriptionExpirationDate" : "02:17 16/03/2025",
      "subscriptionExpirationTimestamp" : 1742091445,
      "originalTransactionId" : 30001521230668,
      "productName" : "subscription",
      "isEligibleForIntroPeriod" : true,
      "isInBillingRetryPeriod" : false,
      "type" : "subscription",
      "purchaseDate" : "02:17 16/03/2024",
      "entitlements" : [
        "ios.pe.ai-features",
        "ios.pe.subscription.pdf-features"
      ],
      "transactionId" : "30001956396811",
      "subscriptionGroupId" : "20537380",
      "subscriptionState" : "active",
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "originalPurchaseDate" : "09:23 08/02/2023"
    },
    {
      "productId" : "com.readdle.PDFExpert5.subscription.month10",
      "isInGracePeriod" : false,
      "subscriptionExpirationDate" : "01:40 16/03/2023",
      "subscriptionExpirationTimestamp" : 1678930812,
      "originalTransactionId" : 30001521230668,
      "productName" : "subscription",
      "isEligibleForIntroPeriod" : true,
      "isInBillingRetryPeriod" : false,
      "type" : "subscription",
      "purchaseDate" : "02:40 16/02/2023",
      "entitlements" : [
        "ios.pe.ai-features",
        "ios.pe.subscription.pdf-features"
      ],
      "transactionId" : "30001529433342",
      "subscriptionGroupId" : "20537380",
      "subscriptionState" : "lapsed",
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "originalPurchaseDate" : "09:23 08/02/2023"
    },
    {
      "productId" : "com.readdle.PDFExpert5.subscription.year80",
      "isInGracePeriod" : false,
      "subscriptionExpirationDate" : "09:23 15/02/2023",
      "subscriptionExpirationTimestamp" : 1676453033,
      "originalTransactionId" : 30001521230668,
      "productName" : "subscription",
      "isEligibleForIntroPeriod" : false,
      "isInBillingRetryPeriod" : false,
      "type" : "subscription",
      "purchaseDate" : "09:23 08/02/2023",
      "entitlements" : [
        "ios.pe.ai-features",
        "ios.pe.subscription.pdf-features",
        "macos.pe.subscription.pdf-features",
        "macos.pe.ai-features"
      ],
      "transactionId" : "30001521230668",
      "subscriptionGroupId" : "20537380",
      "subscriptionState" : "lapsed",
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "originalPurchaseDate" : "09:23 08/02/2023"
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.PDFExpert5.subscription.year50BMI",
  "receiptId" : 1675847933000,
  "statisticsInfo" : {
    "events" : [

    ]
  },
  "externalId" : "67c642be-e86d-43d2-a67a-5ae71c93d0cd"
}

$done({'body':JSON['stringify'](body)});