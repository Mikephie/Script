/******************************

脚本名称: watch
下载地址：商店
脚本作者：Mikephie
更新时间：12 Nov 2023 at 20:47
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://api.adapty.io/api/v1/sdk/in-apps/apple/receipt/validate/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/Mike_watch.js

[mitm] 

hostname = api.adapty.io

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "data" : {
    "type" : "adapty_inapps_apple_receipt_validation_result",
    "id" : "56f3b1e3-be6d-47d5-a94d-baf97cca4f1e",
    "attributes" : {
      "app_id" : "a78814bd-6a8c-4e87-9df4-1ef6c003db5f",
      "total_revenue_usd" : 0,
      "customer_user_id" : "8D4FF2B5-8CCE-42EC-8ED7-774E5D9D5CFB",
      "subscriptions" : {
        "com.watch.faces.ios.app.lifetime2" : {
          "vendor_transaction_id" : "90001761107620",
          "offer_id" : null,
          "billing_issue_detected_at" : null,
          "is_lifetime" : true,
          "store" : "app_store",
          "vendor_product_id" : "com.watch.faces.ios.app.lifetime2",
          "vendor_original_transaction_id" : "90001761107620",
          "will_renew" : false,
          "renewed_at" : "2023-10-25T06:55:45.000000+0000",
          "cancellation_reason" : null,
          "active_promotional_offer_id" : null,
          "active_promotional_offer_type" : null,
          "unsubscribed_at" : null,
          "is_active" : true,
          "activated_at" : "2023-10-25T06:55:45.000000+0000",
          "is_refund" : false,
          "is_in_grace_period" : false,
          "active_introductory_offer_type" : null,
          "expires_at" : null,
          "starts_at" : null,
          "is_sandbox" : false
        }
      },
      "promotional_offer_eligibility" : false,
      "custom_attributes" : {

      },
      "profile_id" : "56f3b1e3-be6d-47d5-a94d-baf97cca4f1e",
      "paid_access_levels" : {
        "premium" : {
          "id" : "premium",
          "is_lifetime" : true,
          "vendor_product_id" : "com.watch.faces.ios.app.lifetime2",
          "active_promotional_offer_type" : null,
          "cancellation_reason" : null,
          "billing_issue_detected_at" : null,
          "unsubscribed_at" : null,
          "expires_at" : null,
          "will_renew" : false,
          "is_active" : true,
          "offer_id" : null,
          "is_in_grace_period" : false,
          "activated_at" : "2023-10-25T06:55:45.000000+0000",
          "active_promotional_offer_id" : null,
          "renewed_at" : "2023-10-25T06:55:45.000000+0000",
          "is_refund" : false,
          "active_introductory_offer_type" : null,
          "store" : "app_store",
          "starts_at" : null
        }
      },
      "introductory_offer_eligibility" : true,
      "apple_validation_result" : {
        "receipt" : {
          "receipt_type" : "Production",
          "app_item_id" : 1579079858,
          "receipt_creation_date" : "2023-10-21 01:17:15 Etc/GMT",
          "bundle_id" : "com.watch.faces.ios.app",
          "original_purchase_date" : "2023-08-07 03:33:48 Etc/GMT",
          "in_app" : [

          ],
          "adam_id" : 1579079858,
          "receipt_creation_date_pst" : "2023-10-20 18:17:15 America/Los_Angeles",
          "request_date" : "2023-10-25 07:12:46 Etc/GMT",
          "request_date_pst" : "2023-10-25 00:12:46 America/Los_Angeles",
          "version_external_identifier" : 860832420,
          "request_date_ms" : "1698217966895",
          "original_purchase_date_pst" : "2023-08-06 20:33:48 America/Los_Angeles",
          "application_version" : "1",
          "original_purchase_date_ms" : "1691379228000",
          "receipt_creation_date_ms" : "1697851035000",
          "original_application_version" : "3",
          "download_id" : 502672440432896992
        },
        "environment" : "Production",
        "status" : 0,
        "latest_receipt_info" : [
          {
            "quantity" : "1",
            "purchase_date_ms" : "1698216945000",
            "transaction_id" : "90001761107620",
            "is_trial_period" : "false",
            "original_transaction_id" : "90001761107620",
            "purchase_date" : "2023-10-25 06:55:45 Etc/GMT",
            "product_id" : "com.watch.faces.ios.app.lifetime2",
            "original_purchase_date_pst" : "2023-10-24 23:55:45 America/Los_Angeles",
            "in_app_ownership_type" : "PURCHASED",
            "original_purchase_date_ms" : "1698216945000",
            "purchase_date_pst" : "2023-10-24 23:55:45 America/Los_Angeles",
            "original_purchase_date" : "2023-10-25 06:55:45 Etc/GMT"
          }
        ],
        "latest_receipt" : "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"
      },
      "non_subscriptions" : null
    }
  }
}

$done({body : JSON.stringify(mikephie)});

