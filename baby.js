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

const mikephie = {};
const mikephie76 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  mikephie.headers = $request.headers;
} else if (mikephie76 && mikephie76.subscriber) {
  mikephie76.subscriber.subscriptions = mikephie76.subscriber.subscriptions || {};
  mikephie76.subscriber.entitlements = mikephie76.subscriber.entitlements || {};
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
    'FaceMa':{ name: 'Pro access', id: 'Pro_Lifetime'},//Facemo
    'MadeYu':{ name: 'pro_plus', id: 'my_549_1m_400'},//
    'clica':{ name: 'pro', id: 'clica.vip.year'},//
    'FoJiCam':{ name: 'Pro', id: 'com.uzero.cn.fojicam.life2'},//2024.4.9
    'ShellBoxKit':{ name: 'pro', id: 'ShellBoxKit.Lifetime'},//2024.4.9
    'CountDuck':{ name: 'premium', id: 'Lifetime'},,
    'Currency':{ name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.pro.crossgrade'},
    'ShellBean':{ name: 'pro', id: 'com.ningle.shellbean.iap.forever'},//2024.5.19
  };

  const data = {
    "expires_date": "2088-08-08T08:08:08Z",
    "original_purchase_date": "2024-05-19T02:15:35Z",
    "purchase_date": "2024-05-19T02:15:34Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      mikephie76.subscriber.subscriptions = {};
      mikephie76.subscriber.subscriptions[id] = data;
      mikephie76.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      mikephie76.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  mikephie.body = JSON.stringify(mikephie76);
}
$done(mikephie);
