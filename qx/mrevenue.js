/*
Revenuecat 解锁合集

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/mrevenue.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/mrevenue.js

[mitm]
hostname = api.revenuecat.com
*/

const mikephie = {};
const mikephie76 = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  // Remove headers in a way that works for both Surge and Loon
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  
  // Save request headers for later
  mikephie.headers = $request.headers;

} else if (mikephie76 && mikephie76.subscriber) {
  // Ensure subscriptions and entitlements are initialized
  mikephie76.subscriber.subscriptions = mikephie76.subscriber.subscriptions || {};
  mikephie76.subscriber.entitlements = mikephie76.subscriber.entitlements || {};

  // Get the user-agent header
  var UA = $request.headers['user-agent'] || $request.headers['User-Agent'];

  // List of apps to bypass (match by User-Agent)
  const appsToBypass = ['Shellbean', 'APTV', 'mizframa', 'Fileball'];

  // Check if the current app should be bypassed
  let bypassApp = appsToBypass.some(app => UA.includes(app));

  // Only modify if the app is not in the bypass list
  if (!bypassApp) {
    const UAMappings = {
      'ShellBean': { name: 'pro', id: 'com.ningle.shellbean.iap.forever' },
      'CountDuck': { name: 'premium', id: 'Lifetime' },
      'ScreenRecordCase': { name: 'Premium', id: 'me.fandong.ScreenRecordCase.Ultra' },
      'Currency': { name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus' },
      'Spark': { name: 'premium', id: 'spark_5999_1y_1w0' },
      'ShellBoxKit': { name: 'pro', id: 'ShellBoxKit.Lifetime' },
      'IDM': { name: 'premium', id: 'sub_yearly_idm' },
      'Whisper': { name: 'all_features', id: 'whisperai_80_y' },
      'PhotoRoom': { name: 'business', id: 'com.background.business.yearly' },
      'TouchRetouchBasic': { name: 'premium', id: 'tr5_yearlysubsc_20dlrs_1' },
      'Drops': { name: 'premium', id: 'forever_unlimited_time_discounted_80_int' },
      'UTC': { name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.subscription.month' },
      'EraseIt': { name: 'ProVersionLifeTime', id: 'com.uzero.cn.eraseit.premium1.fromyear' },
      'DHWaterMarkManager': { name: 'Vip', id: 'lifetimeVIP_001' },
      '%E8%B5%84%E6%BA%90%E6%90%AC%E8%BF%90%E5%A4%A7%E5%B8%88': { name: 'SaveTikYoutu_common', id: 'LifetimeSubscription' },
      'Yosum': { name: 'Premium', id: 'yosum_999_1year' },
      'iplayTV': { name: 'com.ll.btplayer.12', id: 'com.ll.btplayer.12' },
      'TQBrowser': { name: 'pro_lt', id: 'com.tk.client.lifetime' },
      'Python3IDE': { name: 'pro', id: 'python3ide_six_month' },
      'CallAnnie': { name: 'ai.animato.callannie.entitlement.pro0', id: 'ai.animato.callannie.proyearly1' },
      'VideoToLive': { name: 'Premium', id: 'video_to_live_premium' },
      'Themy': { name: 'fonts_premium', id: 'lifetime' },
      'BabyCare': { name: 'pro', id: 'KiddoKeeper_38_LifeTime' },
      'MenuBox': { name: 'premium', id: 'com.menubox.premium' },
    };

    // Create fake subscription data
    const data = {
      "expires_date": "2088-08-08T08:08:08Z",
      "original_purchase_date": "2023-08-08T08:08:08Z",
      "purchase_date": "2023-08-08T08:08:08Z",
      "ownership_type": "PURCHASED",
      "store": "app_store"
    };

    // Match the current app's User-Agent and apply fake subscription
    for (const i in UAMappings) {
      if (new RegExp(`^${i}`, 'i').test(UA)) {
        const { name, id } = UAMappings[i];
        mikephie76.subscriber.subscriptions[id] = data;
        mikephie76.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
        mikephie76.subscriber.entitlements[name].product_identifier = id;
        break;
      }
    }
  }

  // Stringify the modified subscriber object
  mikephie.body = JSON.stringify(mikephie76);
}

$done(mikephie);