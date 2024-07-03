/*        
        ➪：脚本名称:   classdojo 更新时间 ：2024年6月26日 13:36

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 
[rewrite_local]
^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0 url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo-2.js

[mitm]
hostname = payments.classdojo.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "request_date_ms" : 1719384796877,
  "request_date" : "2024-06-26T06:53:16Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2021-06-27T09:08:42Z",
    "original_application_version" : "6937",
    "subscriber_attributes" : {
      "$attConsentStatus" : {
        "updated_at_ms" : 1719379318334,
        "value" : "notDetermined"
      }
    },
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.classdojo.storekit.afterschool.annual" : {
        "store_transaction_id" : "300001899476419",
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "period_type" : "trial",
        "unsubscribe_detected_at" : "2024-06-26T05:42:54Z",
        "expires_date" : "2088-08-08T08:08:08Z",
        "refunded_at" : null,
        "original_purchase_date" : "2024-06-26T05:21:56Z",
        "auto_resume_date" : null,
        "purchase_date" : "2024-06-26T05:21:54Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "Beyond" : {
        "expires_date" : "2088-08-08T08:08:08Z",
        "product_identifier" : "com.classdojo.storekit.afterschool.annual",
        "purchase_date" : "2024-06-26T05:21:54Z"
      }
    },
    "original_purchase_date" : "2024-06-26T05:21:56Z",
    "original_app_user_id" : "5dc2e328587d3dcf1bee91e0",
    "last_seen" : "2024-06-26T05:21:59Z"
  }
}

$done({body : JSON.stringify(mikephie)});