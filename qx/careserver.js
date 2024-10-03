/*************************************

>「 脚本名称 」         DreamFace解锁Pro
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-26
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

[rewrite_local]
^https?:\/\/dreamfaceapp\.com\/df-server\/user\/save_user_login url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/DreamFace.js

[mitm]
hostname = dreamfaceapp.com

*************************************/


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
      "ShellBoxKit.Year" : {
        "original_purchase_date" : "2024-05-19T06:06:26Z",
        "expires_date" : "2088-06-02T06:06:25Z",
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
      "ssh_pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2024-05-19T06:06:25Z",
        "product_identifier" : "ShellBoxKit.Year",
        "expires_date" : "2088-06-02T06:06:25Z"
      }
    },
    "original_purchase_date" : "2024-04-03T13:08:46Z",
    "original_app_user_id" : "$RCAnonymousID:20771c8af6754cc9b71681c91b3b00de",
    "last_seen" : "2024-05-18T16:12:06Z"
  }
}

$done({body : JSON.stringify(mikephie)});
