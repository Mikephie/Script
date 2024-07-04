/*************************************
xxx
**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/revenueddm.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/revenueddm.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const mikephie76 = {};
const headers = $request.headers;
const mikephie = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = headers['User-Agent'] || headers['user-agent'];
const bundle_id = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'];

//排除已禁止MITM的APP
const forbiddenApps = ['Fileball', 'APTV'];
const forbiddenAppFound = forbiddenApps.find(appName => (ua && ua.includes(appName)) || ($request.body && $request.body.includes(appName)));
if (forbiddenAppFound) {
  console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本！\nMikephieの分享频道: https://t.me/mikephie`);
  $done({});
}

//识别bundle_id
const bundle = {
  'io.innerpeace.yiye': { name: 'Premium', id: 'io.innerpeace.yiye.lifetime.forYearly' },  //言外笔记
  'com.skysoft.removalfree': { name: 'Pro', id: 'com.skysoft.removalfree.subscription.newyearly' }  //图片消除
}

//识别UA
const list = {
  'PwDrawingPad': { name: 'pro', id: 'com.s132.app.supaintexchange.year' },  //全能画板2
  'OneGrow': { name: 'pro', id: 'com.onenicetech.OneGrow.Lifetime' },  //OneGrow-儿童身高成长测量
  '%E6%97%B6%E9%97%B4%E8%AE%B0%E5%BD%95': { name: 'pro', id: 'com.bapaws.Hours.lifetime' },  //时间记录
  'PianoTrainer': { name: 'pro_subscription', id: 'pianotrainer.sub.yearly.pro' },  //Pianolytics-学习钢琴
  'FretTrainer': { name: 'pro_subscription', id: 'frettrainer.sub.yearly.pro' },  //Fretonomy-学习指板
  'Currency': { name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus' },  //Currency-汇率查询
};

if (typeof $response == "undefined") {
  delete headers["x-revenuecat-etag"];
  delete headers["X-RevenueCat-ETag"];
  mikephie76.headers = headers;
} else if (mikephie && mikephie.subscriber) {
  mikephie.subscriber.subscriptions = mikephie.subscriber.subscriptions || {};
  mikephie.subscriber.entitlements = mikephie.subscriber.entitlements || {};
  let name, ids, data;
  for (const src of [list, bundle]) {
    for (const i in src) {
      const test = src === list ? ua : bundle_id;
      if (new RegExp(`^${i}`, `i`).test(test)) {
        data = { "purchase_date": "2023-08-08T08:08:08Z", "expires_date": "2088-08-08T08:08:08Z" };
        ids = src[i].id;
        name = src[i].name;
        break;
      }
    }
  }
  if (!name || !ids) {
    data = { "purchase_date": "2023-08-08T08:08:08Z", "expires_date": "2088-08-08T08:08:08Z" };
    name = 'pro';
    ids = 'com.mikephie.pro';
  }
  mikephie.subscriber.entitlements[name] = Object.assign({}, data, { product_identifier: ids });
  const subData = Object.assign({}, data, {
    "Author": "mikephie",
    "Telegram": "https://t.me/mikephie",
    "warning": "仅供学习，禁止转载或售卖",
    "original_purchase_date": "2023-08-08T08:08:08Z",
    "store_transaction_id": "4900066666666666",
    "period_type": "trial",
    "store": "app_store",
    "ownership_type": "PURCHASED"
  });
  mikephie.subscriber.subscriptions[ids] = subData;
  mikephie76.body = JSON.stringify(mikephie);
  console.log('已操作成功🎉🎉🎉\nMikephieの分享频道: https://t.me/mikephie');
}

$done(mikephie76);