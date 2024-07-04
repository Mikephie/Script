/*        
        ➪：脚本名称: Mizframa （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https:\/\/api\.revenuecat\.com\/v1\/receipts url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/mizframap.js

[mitm]
hostname = api.revenuecat.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "request_date_ms" : 1719991696568,
  "request_date" : "2024-07-03T07:28:16Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-12-28T23:04:17Z",
    "original_application_version" : "14",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "mf_20_1m_0_0" : {
        "original_purchase_date" : "2024-07-02T04:40:27Z",
        "expires_date" : "2024-08-02T04:40:26Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "150001850550669",
        "unsubscribe_detected_at" : "2024-07-02T05:47:47Z",
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2024-07-02T04:40:26Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "premium" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-07-02T04:40:26Z",
        "product_identifier" : "mf_20_1m_0_0",
        "expires_date" : "2024-08-02T04:40:26Z"
      }
    },
    "original_purchase_date" : "2023-11-16T23:40:29Z",
    "original_app_user_id" : "$RCAnonymousID:f2cc84fcea87421d8455c880e00b2f30",
    "last_seen" : "2024-07-03T03:39:10Z"
  }
}

$done({body : JSON.stringify(mikephie)});