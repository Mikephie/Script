/*        
        ➪：脚本名称: KKYUN 组合解锁 更新时间 ：23 Jun 2024 at 01:04

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/8PNqxsNs34SUe82 url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sparktest.js
 
[mitm]
hostname = api.revenuecat.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "request_date_ms": 1723342275278,
  "request_date": "2024-08-11T02:11:15Z",
  "subscriber": {
    "non_subscriptions": {
      "spark_openai_tokens_4xt": [
        {
          "id": "80b88cbbc5",
          "is_sandbox": false,
          "purchase_date": "2024-05-08T08:08:10Z",
          "original_purchase_date": "2024-05-08T08:08:10Z",
          "store": "app_store",
          "store_transaction_id": "150001777189185"
        }
      ]
    },
    "first_seen": "2023-10-19T10:37:33Z",
    "original_application_version": "3.9.3.303",
    "other_purchases": {
      "spark_openai_tokens_4xt": {
        "purchase_date": "2024-05-08T08:08:10Z"
      }
    },
    "management_url": null,
    "subscriptions": {
      "spark_5999_1y_1w0": {
        "store": "app_store",
        "purchase_date": "2023-08-08T08:08:08Z",
        "ownership_type": "PURCHASED",
        "original_purchase_date": "2023-08-08T08:08:08Z",
        "expires_date": "2088-08-08T08:08:08Z"
      }
    },
    "entitlements": {
      "premium": {
        "store": "app_store",
        "purchase_date": "2023-08-08T08:08:08Z",
        "ownership_type": "PURCHASED",
        "original_purchase_date": "2023-08-08T08:08:08Z",
        "product_identifier": "spark_5999_1y_1w0",
        "expires_date": "2088-08-08T08:08:08Z"
      },
      "free-sws": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-10-19T10:37:33Z",
        "product_identifier": "rc_promo_free-sws_lifetime",
        "expires_date": "2223-09-01T10:37:33Z"
      }
    },
    "original_purchase_date": "2024-04-22T13:51:50Z",
    "original_app_user_id": "8PNqxsNs34SUe82",
    "last_seen": "2024-08-10T01:38:58Z"
  }
}

$done({body : JSON.stringify(mikephie)});