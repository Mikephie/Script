/******************************

脚本名称: Drops
下载地址：商店 38.0
脚本作者：Mikephie
更新时间：2023年10月6日 20:47
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/Mike_Drops.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms" : 1696573130811,
  "request_date" : "2023-10-06T06:18:50Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-10-06T06:08:04Z",
    "original_application_version" : "38.0.7",
    "other_purchases" : {

    },
    "management_url" : "https:\/\/apps.apple.com\/account\/subscriptions",
    "subscriptions" : {
      "premium_yearly_full_price_tier_c_free_trial_7_int" : {
        "store" : "app_store",
        "purchase_date" : "2023-06-06T06:06:06Z",
        "ownership_type" : "PURCHASED",
        "original_purchase_date" : "2023-06-06T06:06:06Z",
        "expires_date" : "2088-06-06T06:06:06Z"
      }
    },
    "entitlements" : {
      "premium" : {
        "store" : "app_store",
        "purchase_date" : "2023-06-06T06:06:06Z",
        "ownership_type" : "PURCHASED",
        "original_purchase_date" : "2023-06-06T06:06:06Z",
        "product_identifier" : "premium_yearly_full_price_tier_c_free_trial_7_int",
        "expires_date" : "2088-06-06T06:06:06Z"
      }
    },
    "original_purchase_date" : "2023-10-06T06:07:45Z",
    "original_app_user_id" : "$RCAnonymousID:aad07a539e664c4e9882525365287ec7",
    "last_seen" : "2023-10-06T06:11:26Z"
  }
}

$done({body : JSON.stringify(objc)});
