/*************************************

项目名称：Goodnotes6
下载地址：https://t.cn/A6K6ZSZS
脚本作者：mikephie
电报频道：https://t.me/mikephie
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/Mike_gd6.js
^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/Mike_gd6.js

[mitm]
hostname = isi.csan.goodnotes.com

*************************************/


const mikephie = {};
const mikephie76 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const namea = "apple_access";
const nameb = "crossplatform_access";
const jsid = "com.goodnotes.gn6_one_time_unlock_3999";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  mikephie.headers = $request.headers;
} else if (mikephie76 && mikephie76.subscriber) {
  data = {
 "Author": "mikephie",
 "Telegram" : "https://t.me/mikephie",
 "warning": "仅供学习，禁止转载或售卖",
 "purchase_date": "2022-09-09T09:09:09Z"
 };
  mikephie76.subscriber.subscriptions[(jsid)] = {
 "Author": "mikephie",
 "Telegram" : "https://t.me/mikephie",
 "warning": "仅供学习，禁止转载或售卖",
 "original_purchase_date": "2022-09-09T09:09:09Z",
 "purchase_date": "2022-09-09T09:09:09Z",
 "store" : "app_store",
 "ownership_type": "PURCHASED"
 };
  mikephie76.subscriber.entitlements[(namea)] = JSON.parse(JSON.stringify(data));
  mikephie76.subscriber.entitlements[(nameb)] = JSON.parse(JSON.stringify(data));
  mikephie76.subscriber.entitlements[(namea)].product_identifier = (jsid);
    mikephie76.subscriber.entitlements[(nameb)].product_identifier = (jsid);
  mikephie.body = JSON.stringify(mikephie76);
}

$done(mikephie);
