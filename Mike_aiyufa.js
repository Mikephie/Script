/*************************************

项目名称：爱语法
下载地址：https://t.cn/A6WzglTs
脚本作者：mikephie
电报频道：https://t.me/mikephie
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]

^https?:\/\/revenuecat-cn\.fastools\.cn\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/Mike_aiyufa.js 

[mitm]
hostname = revenuecat-cn.fastools.cn

*************************************/


var mikephie = JSON.parse($response.body);

    objc = {
  "request_date_ms" : 1697167014903,
  "request_date" : "2023-10-13T03:16:54Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-10-13T01:26:39Z",
    "original_application_version" : "1",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "igrammar_199_1y_v1" : {
        "store" : "app_store",
        "purchase_date" : "2023-06-06T06:06:06Z",
        "ownership_type" : "PURCHASED",
        "original_purchase_date" : "2023-06-06T06:06:06Z",
        "expires_date" : "6666-06-06T06:06:06Z"
      }
    },
    "entitlements" : {
      "pro" : {
        "store" : "app_store",
        "purchase_date" : "2023-06-06T06:06:06Z",
        "ownership_type" : "PURCHASED",
        "original_purchase_date" : "2023-06-06T06:06:06Z",
        "platform_product_identifier" : "igrammar_199_1y_v1",
          "identifier" : "$rc_annual",
        "expires_date" : "6666-06-06T06:06:06Z"
      }
    },
    "original_purchase_date" : "2023-10-13T01:23:38Z",
    "original_app_user_id" : "$RCAnonymousID: f670374782da4d8ba2b9edb07cda243c",
    "last_seen" : "2023-10-13T01:26:39Z"
  }
}

$done({body : JSON.stringify(mikephie)});
