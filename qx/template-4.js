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
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/template-3.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/template-3.js

[mitm]
hostname = api.revenuecat.com

*************************************/

const Mikephie = {};
const Mikephie76 = JSON.parse(typeof $response!= "undefined" && $response.body || null);

const name = "Pro";
const appid = "pro_student_0926";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Mikephie.headers = $request.headers;
} else if (Mikephie76 && Mikephie76.subscriber) {
  Mikephie76.subscriber.subscriptions = Mikephie76.subscriber.subscriptions || {};
  Mikephie76.subscriber.entitlements = Mikephie76.subscriber.entitlements || {};
  const data = {
    "product_identifier": (appid),
    "purchase_date": "2024-04-04T04:04:04Z"
  };
  Mikephie76.subscriber.entitlements[(name)] = (data);
  Mikephie76.subscriber.subscriptions[(appid)] = { ...data,  "Author": "Mikephie",  "Telegram": "https://t.me/Mikephie",  "warning": "仅供学习，禁止转载或售卖",  "original_purchase_date": "2024-04-04T04:04:04Z",  "store": "app_store",  "ownership_type": "PURCHASED" };
  Mikephie.body = JSON.stringify(Mikephie76);
}

$done(Mikephie);