/*************************************

Revenuecat解锁合集

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
	'io.innerpeace.yiye': { name: 'Premium', id: 'io.innerpeace.yiye.lifetime.forYearly', cm: 'sja' },  //言外笔记
	'com.skysoft.removalfree': { name: 'Pro', id: 'com.skysoft.removalfree.subscription.newyearly', cm: 'sja' }  //图片消除
}

//识别UA
const list = {
    'ShellBean': { name: 'pro', id: 'com.ningle.shellbean.iap.forever' },  //服务器监控
    'CountDuck': { name: 'premium', id: 'Lifetime' },  //倒数鸭
    'ScreenRecordCase': { name: 'Premium', id: 'me.fandong.ScreenRecordCase.Ultra' },  //手机壳套图
    'Currency': { name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus' },  //汇率转换
    'Spark': { name: 'premium', id: 'spark_5999_1y_1w0' },  //邮箱
    'ShellBoxKit': { name: 'pro', id: 'ShellBoxKit.Lifetime' },  //服务器监控
    'IDM': { name: 'premium', id: 'sub_yearly_idm' },  //IDM-下载
    'Whisper': { name: 'all_features', id: 'whisperai_80_y' },  //Whisper AI
    'PhotoRoom': { name: 'business', id: 'com.background.business.yearly' },  //图像编辑
    'TouchRetouchBasic': { name: 'premium', id: 'tr5_yearlysubsc_20dlrs_1' },  //图像移除
    'Drops': { name: 'premium', id: 'forever_unlimited_time_discounted_80_int' },  //Drops外语
    'UTC': { name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.subscription.month' },  //花样文字
    'EraseIt': { name: 'ProVersionLifeTime', id: 'com.uzero.cn.eraseit.premium1.fromyear' },  //Smoothrase-AI擦除照片 
    'DHWaterMarkManager': { name: 'Vip', id: 'lifetimeVIP_001' },  //水印熊
    '%E8%B5%84%E6%BA%90%E6%90%AC%E8%BF%90%E5%A4%A7%E5%B8%88': { name: 'SaveTikYoutu_common', id: 'LifetimeSubscription' },  //资源搬运大师
    'Yosum': { name: 'Premium', id: 'yosum_999_1year' },  //Yosum
    'iplayTV': { name: 'com.ll.btplayer.12', id: 'com.ll.btplayer.12' },  //ntplayer
    'TQBrowser': { name: 'pro_lt', id: 'com.tk.client.lifetime' },  //Teak浏览器
    'mizframa': { name: 'premium', id: 'mf_20_1m_0_0' },  //Mizframe
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
    "store_transaction_id": "150001850550669",
    "period_type": "trial",
    "store": "app_store",
    "ownership_type": "PURCHASED"
  });
  mikephie.subscriber.subscriptions[ids] = subData;
  mikephie76.body = JSON.stringify(mikephie);
  console.log('已操作成功🎉🎉🎉\nMikephieの分享频道: https://t.me/mikephie');
}

$done(mikephie76);