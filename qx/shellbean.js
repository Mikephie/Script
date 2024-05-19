/******************************

脚本名称: Shellbean
下载地址：商店
脚本作者：Mikephie
更新时间：10 May 2024 at 14:25
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/spark.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "request_date_ms" : 1716084974340,
  "request_date" : "2024-05-19T02:16:14Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-05-19T02:11:21Z",
    "original_application_version" : "79",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.ningle.shellbean.iap.forever" : {
        "original_purchase_date" : "2024-05-19T02:15:35Z",
        "expires_date" : "2088-08-08T08:08:08Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "150001791442057",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2024-05-19T02:15:34Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-05-19T02:15:34Z",
        "product_identifier" : "com.ningle.shellbean.iap.forever",
        "expires_date" : "2088-08-08T08:08:08Z"
      }
    },
    "original_purchase_date" : "2024-05-19T02:11:12Z",
    "original_app_user_id" : "$RCAnonymousID:c76c9791ce6d45c8a4af69a1f68afe3a",
    "last_seen" : "2024-05-19T02:11:21Z"
  }
}

$done({body : JSON.stringify(mikephie)});