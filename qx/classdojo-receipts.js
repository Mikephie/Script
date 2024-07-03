/*        
        ➪：脚本名称:   classdojo 更新时间 ：2024年6月26日 13:36

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 
[rewrite_local]
^https:\/\/payments\.classdojo\.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js

[mitm]
hostname = payments.classdojo.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "request_date_ms" : 1719379319127,
  "request_date" : "2024-06-26T05:21:59Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2021-06-27T09:08:42Z",
    "original_application_version" : "6937",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.classdojo.storekit.afterschool.annual" : {
        "original_purchase_date" : "2024-06-26T05:21:56Z",
        "expires_date" : "2088-08-08T08:08:08Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "300001899476419",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2024-06-26T05:21:54Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "Beyond" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-06-26T05:21:54Z",
        "product_identifier" : "com.classdojo.storekit.afterschool.annual",
        "expires_date" : "2088-08-08T08:08:08Z"
      }
    },
    "original_purchase_date" : "2024-06-26T05:21:56Z",
    "original_app_user_id" : "5dc2e328587d3dcf1bee91e0",
    "last_seen" : "2022-07-11T15:02:58Z"
  }
}

$done({body : JSON.stringify(mikephie)});