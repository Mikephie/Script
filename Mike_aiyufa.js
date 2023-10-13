/*************************************

项目名称：爱语法
下载地址：https://t.cn/A6WzglTs
脚本作者：mikephie
电报频道：https://t.me/mikephie
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/revenuecat-cn\.fastools\.cn\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/Mike_aiyufa.js
^https?:\/\/revenuecat-cn\.fastools\.cn\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/Mike_aiyufa.js 

[mitm]
hostname = revenuecat-cn.fastools.cn

*************************************/


const mikephie = {};
const mikephie76 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "pro";
const appid = "igrammar_199_1y_v1";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  mikephie.headers = $request.headers;
} else if (mikephie76 && mikephie76.subscriber) {
  mikephie76.subscriber.subscriptions = mikephie76.subscriber.subscriptions || {};
  mikephie76.subscriber.entitlements = mikephie76.subscriber.entitlements || {};
  const data = {
	"product_identifier": (appid),
	"expires_date": "2088-08-08T08:08:08Z",
	"purchase_date": "2023-08-08T08:08:08Z"
	};
  mikephie76.subscriber.entitlements[(name)] = (data);
  mikephie76.subscriber.subscriptions[(appid)] = {  ...data,	"Author": "mikephie",	"Telegram": "https://t.me/mikephie",	"warning": "仅供学习，禁止转载或售卖",	"original_purchase_date": "2023-08-08T08:08:08Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  mikephie.body = JSON.stringify(mikephie76);
}

$done(mikephie);
