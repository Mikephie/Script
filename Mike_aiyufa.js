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
  "request_date_ms" : 1697112590937,
  "request_date" : "2023-10-12T12:09:50Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-10-12T12:09:21Z",
    "original_application_version" : null,
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {igrammar_199_1y_v1

    },
    "entitlements" : {Pro

    },
    "original_purchase_date" : null,
    "original_app_user_id" : "$RCAnonymousID:f670374782da4d8ba2b9edb07cda243c",
    "last_seen" : "2023-10-12T12:09:21Z"
  }
}

$done({body : JSON.stringify(mikephie)});
