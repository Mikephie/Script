/*        
        ➪：脚本名称: Shellbean （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/shellbean.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/mrevenue.js

[mitm]
hostname = api.revenuecat.com

*******************************/
 
var mikephie = JSON.parse($response.body);

    mikephie = {
  "request_date_ms": 1733785212661,
  "request_date": "2024-12-09T23:00:12Z",
  "subscriber": {
    "non_subscriptions": {
      "com.ningle.shellbean.iap.forever.discount": [
        {
          "id": "96390b26b7",
          "is_sandbox": false,
          "purchase_date": "2024-11-30T16:48:50Z",
          "original_purchase_date": "2024-11-30T16:48:50Z",
          "store": "app_store",
          "store_transaction_id": "300002119104362"
        }
      ]
    },
    "first_seen": "2024-03-17T03:01:57Z",
    "original_application_version": "43",
    "other_purchases": {
      "com.ningle.shellbean.iap.forever.discount": {
        "purchase_date": "2024-11-30T16:48:50Z"
      }
    },
    "management_url": null,
    "subscriptions": {
    },
    "entitlements": {
      "pro": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-11-30T16:48:50Z",
        "product_identifier": "com.ningle.shellbean.iap.forever.discount",
        "expires_date": null
      }
    },
    "original_purchase_date": "2024-02-10T13:20:52Z",
    "original_app_user_id": "$RCAnonymousID:a934d2fe4499460f8fbc47f246056381",
    "last_seen": "2024-12-09T00:05:09Z"
  }
}

$done({body : JSON.stringify(mikephie)});