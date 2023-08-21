/*************************************

项目名称：OneClear透明小组件
下载地址：https://t.cn/A6Ohf3V0
项目名称：OneTodo
下载地址：https://t.cn/A6Ohfdb8
项目名称：OneList
下载地址：https://t.cn/A6OhfePB
项目名称：OneScreen截图带壳
下载地址：https://t.cn/A6OhfB4K
脚本作者：mikephie
电报频道：https://t.me/mikephie
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/Mike_Onexilie.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/Mike_Onexilie.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const mikephie = {};
const mikephie76 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const name = "pro";
const appid = "mikephie_lifetime";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  mikephie.headers = $request.headers;
} else if (mikephie76 && mikephie76.subscriber) {
  data = {
 "Author": "mikephie",
 "Telegram" : "https://t.me/mikephie",
 "warning": "仅供学习，禁止转载或售卖",
 "original_purchase_date": "2022-09-09T09:09:09Z",
 "purchase_date": "2022-09-09T09:09:09Z",
 "store" : "app_store",
 "ownership_type": "PURCHASED"
 };
  mikephie76.subscriber.subscriptions[(appid)] = data
  mikephie76.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  mikephie76.subscriber.entitlements[(name)].product_identifier = (appid);
  mikephie.body = JSON.stringify(mikephie76);
}

$done(mikephie);
