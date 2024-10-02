/*
Bizhi



^https:\/\/leancloud\.emotionwp\.com\/1\.1\/classes\/wpf_account\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi2-3.js

[mitm]

hostname = leancloud.emotionwp.com

**/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "status": 0,
  "receipt": {
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "17277412880000",
        "expires_date": "2088-08-08 08:08:08 Etc\/GMT",
        "expires_date_pst": "2088-08-08 08:08:08 America\/Los_Angeles",
        "is_in_intro_offer_period": "false",
        "transaction_id": "300002000603223",
        "is_trial_period": "false",
        "original_transaction_id": "300002000603223",
        "purchase_date": "2024-10-01 08:08:08 Etc\/GMT",
        "product_id": "com.chowjoe.wp2free.year.pro",
        "original_purchase_date_pst": "2024-10-01 08:08:08 America\/Los_Angeles",
        "in_app_ownership_type": "PURCHASED",
        "subscription_group_identifier": "20431945",
        "original_purchase_date_ms": "17277412880000",
        "web_order_line_item_id": "300002000603223",
        "expires_date_ms": "3742762088000",
        "purchase_date_pst": "2024-10-01 08:08:08 America\/Los_Angeles",
        "original_purchase_date": "2024-10-01 08:08:08 Etc\/GMT"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "17277412880000",
      "expires_date": "2088-08-08 08:08:08 Etc\/GMT",
      "expires_date_pst": "2088-08-08 08:08:08 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "300002000603223",
      "is_trial_period": "false",
      "original_transaction_id": "300002000603223",
      "purchase_date": "2024-10-01 08:08:08 Etc\/GMT",
      "product_id": "com.chowjoe.wp2free.year.pro",
      "original_purchase_date_pst": "2024-10-01 08:08:08 America\/Los_Angeles",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20431945",
      "original_purchase_date_ms": "17277412880000",
      "web_order_line_item_id": "300002000603223",
      "expires_date_ms": "3742762088000",
      "purchase_date_pst": "2024-10-01 08:08:08 America\/Los_Angeles",
      "original_purchase_date": "2024-10-01 08:08:08 Etc\/GMT"
    }
  ],
  "latest_receipt": "mikephie",
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "com.chowjoe.wp2free.year.pro",
      "original_transaction_id": "300002000603223",
      "auto_renew_product_id": "com.chowjoe.wp2free.year.pro",
      "auto_renew_status": "1"
    }
  ],
  "warning": "仅供学习，禁止转载或售卖",
  "Telegram": "https:\/\/t.me\/mikephie"
}

$done({body : JSON.stringify(mikephie)});