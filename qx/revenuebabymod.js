/*************************************

项目名称：revenuecat合集 （此合集只包含10.5及以后的软件）
软件版本：均适配2023.9.8最新 （每一个下载地址对应一个UAMappings）

使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
#修改
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Revenuecat.js
#清理
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/Revenuecat.js


[mitm] 
hostname = api.revenuecat.com

************************************/

const Q = {};
const Q1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Q.headers = $request.headers;
} else if (Q1 && Q1.subscriber) {
  Q1.subscriber.subscriptions = Q1.subscriber.subscriptions || {};
  Q1.subscriber.entitlements = Q1.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
    }
  }
  var UA = $request.headers['user-agent'];
  const app = '1';
  const UAMappings = {
    'PDF%20Viewer':{ name: 'sub.pro', id: 'com.pspdfkit.viewer.sub.pro.yearly'},//2024.3.21
    'Text%20Workflow':{ name: 'pro', id: 'tw_99_1m'},//2024.3.2
    'MadeYu':{ name: 'pro_plus', id: 'my_549_1m_400'},//
    'ShellBoxKit':{ name: 'pro', id: 'ShellBoxKit.Lifetime'},//2024.4.9
    'ShellBean': { name: 'pro', id: 'com.ningle.shellbean.subscription.year'}, 
    'CountDuck':{ name: 'premium', id: 'Lifetime'},
    'windiary':{ name: 'Pro', id: 'windiary_1799_lt'},
    'Liftbear':{ name: 'Pro', id: 'liftbear_2399_1y'},
    'Currency':{ name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.pro.crossgrade'},
    
    
    
    };

  const data = {
    "expires_date": "2099-12-31T12:00:00Z",
    "original_purchase_date": "2023-09-01T11:00:00Z",
    "purchase_date": "2023-09-01T11:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      Q1.subscriber.subscriptions = {};
      Q1.subscriber.subscriptions[id] = data;
      Q1.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      Q1.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  Q.body = JSON.stringify(Q1);
}
$done(Q);