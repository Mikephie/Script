/*        
        ➪：脚本名称: 婚礼精选 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https:\/\/www\.lovewith\.me\/golove\/v05\/profile url script-response-body


[MITM]
hostname = www.lovewith.me

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "request_date_ms": 1715290303654,
  "request_date": "2024-05-09T21:31:43Z",
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
      "rc_promo_free-sws_lifetime": {
        "original_purchase_date": "2023-10-19T10:37:33Z",
        "expires_date": "2223-09-01T10:37:33Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "7d3eac6aefd0ed38806eecaf0140dbbc",
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "normal",
        "purchase_date": "2023-10-19T10:37:33Z",
        "billing_issues_detected_at": null,
        "store": "promotional",
        "auto_resume_date": null
      },
      "spark_5999_1y_1w0": {
        "Author": "mikephie",
        "store_transaction_id": "4900066666666666",
        "period_type": "trial",
        "store": "app_store",
        "ownership_type": "PURCHASED",
        "expires_date": "2088-08-08T08:08:08Z",
        "warning": "仅供学习，禁止转载或售卖",
        "original_purchase_date": "2023-09-09T09:09:09Z",
        "purchase_date": "2023-09-09T09:09:09Z",
        "Telegram": "https:\/\/t.me\/mikephie"
      }
    },
    "entitlements": {
      "premium": {
        "expires_date": "2088-08-08T08:08:08Z",
        "product_identifier": "spark_5999_1y_1w0",
        "purchase_date": "2023-09-09T09:09:09Z"
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
    "last_seen": "2024-05-09T09:14:54Z"
  }
}

$done({body : JSON.stringify(mikephie)});