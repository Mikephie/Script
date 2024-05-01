/*************************************

项目名称：Anime Waifu-AI画画
下载地址：https://t.cn/A6YiXEQi
版本支持：1.6
更新日期：2024-02-16
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/template-5.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/template-5.js

[mitm]
hostname = api.revenuecat.com

*************************************/

const mikephie = {};
const mikephie8 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "pro";
const appid = "ShellBoxKit.Lifetime";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  mikephie.headers = $request.headers;
} else if (mikephie8 && mikephie8.subscriber) {
  mikephie8.subscriber.subscriptions = mikephie8.subscriber.subscriptions || {};
  mikephie8.subscriber.entitlements = mikephie8.subscriber.entitlements || {};
  const data = {
    "product_identifier": appid,
    "purchase_date": "2022-09-09T09:09:09Z"
  };
  mikephie8.subscriber.entitlements[name] = data;
  mikephie8.subscriber.subscriptions[appid] = {  
    ...data,
    "Author": "mikephie",
    "Telegram": "https://t.me/mikephie",
    "warning": "仅供学习，禁止转载或售卖",
    "original_purchase_date": "2022-09-09T09:09:09Z",
    "store": "app_store",
    "ownership_type": "PURCHASED"
  };
  mikephie.body = JSON.stringify(mikephie8);
}

$done(mikephie);