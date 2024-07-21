/*

Revenuecat解锁合集

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/mrevenue.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/mrevenue.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const mikephie = {};
const mikephie76 = JSON.parse(typeof $response != "undefined" && $response.body || null);

// Forbidden apps check
const forbiddenApps = ['Fileball', 'APTV', 'ShellBean'];
const ua = $request.headers['User-Agent'] || '';
const body = $request.body || '';
const forbiddenAppFound = forbiddenApps.some(appName => ua.includes(appName) || body.includes(appName));

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
    'ShellBean': { name: 'pro', id: 'com.ningle.shellbean.iap.forever' },  // 服务器监控
    'CountDuck': { name: 'premium', id: 'Lifetime' },  // 倒数鸭
    'ScreenRecordCase': { name: 'Premium', id: 'me.fandong.ScreenRecordCase.Ultra' },  // 手机壳套图
    'Currency': { name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus' },  // 汇率转换
    'Spark': { name: 'premium', id: 'spark_5999_1y_1w0' },  // 邮箱
    'ShellBoxKit': { name: 'pro', id: 'ShellBoxKit.Lifetime' },  // 服务器监控
    'IDM': { name: 'premium', id: 'sub_yearly_idm' },  // IDM-下载
    'Whisper': { name: 'all_features', id: 'whisperai_80_y' },  // Whisper AI
    'PhotoRoom': { name: 'business', id: 'com.background.business.yearly' },  // 图像编辑
    'TouchRetouchBasic': { name: 'premium', id: 'tr5_yearlysubsc_20dlrs_1' },  // 图像移除
    'Drops': { name: 'premium', id: 'forever_unlimited_time_discounted_80_int' },  // Drops外语
    'UTC': { name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.subscription.month' },  // 花样文字
    'EraseIt': { name: 'ProVersionLifeTime', id: 'com.uzero.cn.eraseit.premium1.fromyear' },  // Smoothrase-AI擦除照片
    'DHWaterMarkManager': { name: 'Vip', id: 'lifetimeVIP_001' },  // 水印熊
    '%E8%B5%84%E6%BA%90%E6%90%AC%E8%BF%90%E5%A4%A7%E5%B8%88': { name: 'SaveTikYoutu_common', id: 'LifetimeSubscription' },  // 资源搬运大师
    'Yosum': { name: 'Premium', id: 'yosum_999_1year' },  // Yosum
    'iplayTV': { name: 'com.ll.btplayer.12', id: 'com.ll.btplayer.12' },  // ntplayer
    'TQBrowser': { name: 'pro_lt', id: 'com.tk.client.lifetime' },  // Teak浏览器
    'mizframa': { name: 'premium', id: 'mf_20_1m_0_0' },  // Mizframe
    'Python3IDE': { name: 'pro', id: 'python3ide_six_month' },  // Python3IDE
    'CallAnnie': { name: 'ai.animato.callannie.entitlement.pro0', id: 'ai.animato.callannie.proyearly1' },  //CallAnnie
  };
  const data = {
    "expires_date": "2088-08-08T08:08:08Z",
    "original_purchase_date": "2023-08-08T08:08:08Z",
    "purchase_date": "2023-08-08T08:08:08Z",
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
