/*        
        ➪：脚本名称: Mizframa （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/nom\.telemetrydeck\.com\/api\/v1\/apps\/206A447E-7A67-4C16-80B9-99D67E802625\/signals\/multiple\/ url script-request-body  https://raw.githubusercontent.com/Mikephie/Script/main/qx/mizframanom.js

[mitm]
hostname = nom.telemetrydeck.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "request_date_ms" : 1720058680102,
  "request_date" : "2024-07-04T02:04:40Z",
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
      },
      "mf_20_lifetime2" : {
        "Author" : "chxm1023",
        "store_transaction_id" : "4900066666666666",
        "period_type" : "trial",
        "store" : "app_store",
        "ownership_type" : "PURCHASED",
        "warning" : "仅供学习，禁止转载或售卖",
        "original_purchase_date" : "2023-09-09T09:09:09Z",
        "purchase_date" : "2023-09-09T09:09:09Z",
        "Telegram" : "https://t.me/chxm1023"
      }
    },
    "entitlements" : {
      "premium" : {
        "product_identifier" : "mf_20_lifetime2",
        "purchase_date" : "2023-09-09T09:09:09Z"
      }
    },
    "original_purchase_date" : "2023-11-16T23:40:29Z",
    "original_app_user_id" : "$RCAnonymousID:f2cc84fcea87421d8455c880e00b2f30",
    "last_seen" : "2024-07-03T03:39:10Z"
  }
}

$done({body : JSON.stringify(mikephie)});