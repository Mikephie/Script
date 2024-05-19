/******************************

脚本名称: Careserver
下载地址：商店
脚本作者：Mikephie
更新时间：10 May 2024 at 14:25
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/careserver1.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/revenueheader.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "request_date_ms" : 1716098977241,
  "request_date" : "2024-05-19T06:09:37Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2024-05-01T01:54:39Z",
    "original_application_version" : "6",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "ShellBoxKit.Lifetime" : {
        "original_purchase_date" : "2024-05-19T06:06:26Z",
        "expires_date" : "2088-08-08T08:08:08Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "150001791650125",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2024-05-19T06:06:25Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-05-19T06:06:25Z",
        "product_identifier" : "ShellBoxKit.Lifetime",
        "expires_date" : "2088-08-08T08:08:08Z"
      }
    },
    "original_purchase_date" : "2024-04-03T13:08:46Z",
    "original_app_user_id" : "$RCAnonymousID:20771c8af6754cc9b71681c91b3b00de",
    "last_seen" : "2024-05-18T16:12:06Z"
  }
}

$done({body : JSON.stringify(mikephie)});
