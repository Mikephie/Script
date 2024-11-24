/*************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/mrevenue.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/mrevenue.js

[mitm]
hostname = api.revenuecat.com

*************************************/

const mikephie8 = {};
const headers = $request.headers;
const mikephie = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = headers['User-Agent'] || headers['user-agent'];
const bundle_id = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'];

//排除已禁止MITM的APP
const forbiddenApps = ['Fileball', 'mizframa', 'APTV'];
const forbiddenAppFound = forbiddenApps.find(appName => (ua && ua.includes(appName)) || ($request.body && $request.body.includes(appName)));
if (forbiddenAppFound) {
  console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本！\n叮当猫の分享频道: https://t.me/chxm1023`);
  $done({});
}

//识别bundle_id
const bundle = {
  'app.imone.OneWidget': { Ent: 'Premium', id: 'app.imone.OneWidget.Lifetime', cm: 'sjb' },  //OneWidget-小组件
  'com.skysoft.removalfree': { Ent: 'Pro', id: 'com.skysoft.removalfree.subscription.newyearly', cm: 'sja' }  //图片消除
}

//识别UA
const list = {
  'Spark': { Ent: 'premium', id: 'spark_6999_1y_1w0', cm: 'sja' },
  'ShellBoxKit': { Ent: 'pro', id: 'ShellBoxKit.Lifetime', cm: 'sjb' },
};

if (typeof $response == "undefined") {
  delete headers["x-revenuecat-etag"];
  delete headers["X-RevenueCat-ETag"];
  mikephie8.headers = headers;
} else if (mikephie && mikephie.subscriber) {
  mikephie.subscriber.subscriptions = mikephie.subscriber.subscriptions || {};
  mikephie.subscriber.entitlements = mikephie.subscriber.entitlements || {};
  let Ent, Entb, ids, idb, data;
  for (const src of [list, bundle]) {
    for (const i in src) {
      const test = src === list ? ua : bundle_id;
      if (new RegExp(`^${i}`, `i`).test(test)) {
        if (src[i].cm.indexOf('sja') != -1) { 
          data = { "purchase_date": "2024-04-04T04:04:04Z", "expires_date": "2088-08-08T08:08:08Z", "grace_period_expires_date": "2088-08-08T08:08:08Z" };  
        } else if (src[i].cm.indexOf('sjb') != -1) { 
          data = { "purchase_date": "2024-04-04T04:04:04Z" }; 
        }
        ids = src[i].id;
        Ent = src[i].Ent;
        idb = src[i].idb;
        Entb = src[i].Entb;
        break;
      }
    }
  }
  if (!Ent || !ids) {
    data = { "purchase_date": "2024-04-04T04:04:04Z", "expires_date": "2088-08-08T08:08:08Z" , "grace_period_expires_date": "2088-08-08T08:08:08Z"};
    Ent = 'pro';
    ids = 'com.mikephie.pro';
  }
  mikephie.subscriber.entitlements[Ent] = Object.assign({}, data, { product_identifier: ids });
  if (typeof Entb !== 'undefined' && Entb !== null) {
    mikephie.subscriber.entitlements[Entb] = Object.assign({}, data, { product_identifier: idb });
  }
  const subData = Object.assign({}, data, { 
    "Author": "mikephie", 
    "Telegram": "https://t.me/mikephie", 
    "warning": "仅供学习，禁止转载或售卖", 
    "original_purchase_date": "2024-04-04T04:04:04Z", 
    "store": "app_store", 
    "ownership_type": "PURCHASED" 
  });
  mikephie.subscriber.subscriptions[ids] = subData;
  if (typeof idb !== 'undefined' && idb !== null) {
    mikephie.subscriber.subscriptions[idb] = subData;
  }
  mikephie8.body = JSON.stringify(mikephie);
  console.log('已操作成功🎉🎉🎉\nMIKEPHIEの分享频道: https://t.me/mikephie');
}

$done(mikephie8);