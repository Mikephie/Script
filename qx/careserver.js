/******************************

脚本名称: Drops
下载地址：商店 38.0
脚本作者：ios151
更新时间：2023年10月5日 20:47
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/careserver.js
#清理
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/Revenuecat.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms": 1714686943375,
  "request_date": "2024-05-02T21:55:43Z",
  "subscriber": {
    "non_subscriptions": {
    },
    "first_seen": "2024-05-02T21:53:23Z",
    "original_application_version" : null,
    "other_purchases": {
    },
    "management_url": "https:\/\/apps.apple.com\/account\/subscriptions",
    "subscriptions": {
      "ShellBoxKit.Lifetime": {
        "original_purchase_date": "2024-05-02T21:53:23Z",
        "expires_date": "2099-10-12T12:43:00Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "190001746507030",
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2024-05-02T21:53:23Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "pro": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-05-02T21:53:23Z",
        "product_identifier": "ShellBoxKit.Lifetime",
        "expires_date": "2099-10-12T12:43:00Z"
      }
    },
    "original_purchase_date": "2024-05-02T21:53:23Z",
    "original_app_user_id": "$$RCAnonymousID:27e47831e5e7431fb7d9e76384938a42",
    "last_seen": "2024-05-02T21:53:23Z"
  }
}

$done({body : JSON.stringify(objc)});
