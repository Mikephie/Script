/*

TG频道：https://t.me/Guding88
TG群组：https://t.me/GudingChat

Revenuecat解锁合集，已解锁APP及下载地址请见说明：https://github.com/Guding88/Script/blob/main/Readme.md

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body miketest.js
//^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header miketest.js

[MITM]
hostname = api.revenuecat.com


*/
const mikephie = {};
const mikephie76 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = headers['User-Agent'] || headers['user-agent'];
const bundle_id = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'];

//排除已禁止MITM的APP
const forbiddenApps = ['Fileball', 'APTV'];
const forbiddenAppFound = forbiddenApps.find(appName => (ua && ua.includes(appName)) || ($request.body && $request.body.includes(appName)));
if (forbiddenAppFound) {
  console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本！\n叮当猫の分享频道: https://t.me/chxm1023`);
  $done({});
}

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
  const app = 'gd';
  const UAMappings = {
    'ShellBean':{ name: 'pro', id: 'com.ningle.shellbean.iap.forever'},  //服务器监控
    'CountDuck':{ name: 'premium', id: 'Lifetime'},  //倒数鸭
    'ScreenRecordCase':{ name: 'Premium', id: 'me.fandong.ScreenRecordCase.Ultra'},  //手机壳套图
    'Currency':{ name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus'},  //汇率转换
    'Spark':{ name: 'premium', id: 'spark_5999_1y_1w0'},  //邮箱
    'ShellBoxKit':{ name: 'pro', id: 'ShellBoxKit.Lifetime'},  //服务器监控
    'IDM':{ name: 'premium', id: 'sub_yearly_idm'},  //IDM-下载
    'Whisper':{ name: 'all_features', id: 'whisperai_80_y'},  //Whisper AI
		'PhotoRoom': { name: 'business', id: 'com.background.business.yearly' },  //图像编辑
		'Drops':{ name: 'premium', id: 'forever_unlimited_time_discounted_80_int'},  //Drops外语
		'UTC':{ name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.subscription.month'},  //花样文字
    
  };
  const data = {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-06-06T06:06:06Z",
    "purchase_date": "2023-06-06T06:06:06Z",
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