/*************************************

项目名称：revenuecat合集 （此合集只包含10.5及以后的软件）
软件版本：均适配2023.9.8最新 （每一个下载地址对应一个UAMappings）
下载地址：FaceMa https://apps.apple.com/my/app/facemo-protect-facial-privacy/id6474843996
下载地址：倒数鸭  https://apps.apple.com/my/app/countduck/id6457201223
下载地址：HTTPBOT https://apps.apple.com/my/app/httpbot/id1232603544
下载地址：TouchRetouch https://apps.apple.com/my/app/touchretouch/id373311252
下载地址：Currency https://apps.apple.com/my/app/currency/id284220417
下载地址：PhotoRoom https://apps.apple.com/my/app/photoroom-ai-photo-editor/id1455009060
下载地址：mizframa https://apps.apple.com/my/app/mizframa-device-mockups/id6444951894
下载地址：Blackout https://apps.apple.com/my/app/blackout-censor-blur-redact/id1672966131
下载地址：TouchRetouch 5.1.12

使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************

[rewrite_local]
#修改
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body rvnc.js
#清理
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header rvnc.js


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
    'FaceMa':{ name: 'Pro access', id: 'Pro_Lifetime'},//Facemo
    'CountDuck':{ name: 'premium', id: 'Lifetime'},//倒数鸭
    'HTTPBot':{ name: 'Pro', id: 'httpbot_1499_1y_1w0'},//HTTPBot
    'TouchRetouchBasic':{ name: 'premium', id: 'tr5_yearlysubsc_30_and_20_dlrs'},//年底
    'Currency':{ name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.pro.crossgrade'},//Currency
    'PhotoRoom': { name: 'pro', id: 'com.background.pro.yearly'},//Photoroom
    'mizframa': { name: 'premium', id: 'mf_20_lifetime2'},//mizframa
    'Blackout': { name: 'premium', id: 'blackout_299_lt'},//Blackout
    'PhotoRoom': { name: 'business', id: 'com.background.business.yearly'},//Photoroom

    
    #ShellBean/': 'Blackout/': ['premium','blackout_299_lt'],
    
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
