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
  'app.imone.OneWidget': { name: 'pro', id: 'app.imone.OneWidget.Lifetime', cm: 'sjb' },  //OneWidget-小组件
  'com.skysoft.removalfree': { name: 'Pro', id: 'com.skysoft.removalfree.subscription.newyearly', cm: 'sja' }  //图片消除
  //'com.overdesigned.WorldClock': { name: 'lifetime-unlock', id: 'com.overdesigned.worldclock.removeads1', cm: 'sjb' },  //WorldClock
}

//识别UA
const list = {
  'ReelRender': { name: 'premium', id: 'reelrender.credits30', cm: 'sja' },  // World%20Clock
  'PhotoGPT': { name: 'premium', id: 'FontSnap_2999_1yr', cm: 'sja' },  // PhotoGPT
  'World%20Clock': { name: 'lifetime-unlock', id: 'com.overdesigned.worldclock.removeads1', cm: 'sjb' },  // World%20Clock
  'MorningAlarm': { name: 'morning_premium', id: 'alarmify.yearly.1', cm: 'sja' },  // MorningAlarm
  'Genius%20AI': { name: 'premium', id: 'genius_lifetime_59', cm: 'sjb' },  // Genius%20AI
  'Vocai-iOS': { name: 'AI Pro', id: 'vocabAI_900_1m', cm: 'sja' },  // Vocai
  'PixImagine': { id: 'com.efsoft.piximagine_nc_lifetime', cm: 'sjc' },  //PixImagine
  '1Blocker': { name: 'premium', id: 'blocker.ios.iap.lifetime', cm: 'sjb' },  //1Blocker
  'VidCap': { name: 'io.fadel.vidcap.pro', id: 'subs.vcp_59.99_365_3', cm: 'sja' },  //VidCap
  'PicLoom': { id: 'com.efsoft.picloom_nc_lifetime', cm: 'sjc' },  //PicLoomban
  'Color%20Widgets': { name: 'pro', id: 'cw_1999_1y_3d0', cm: 'sja' },  //ColorWidgets
  'ChatBot': { name: 'chatbot_annual', id: 'chatbot_annual', cm: 'sja' },  //ChatBot-AIChat
  'ASKAI': { name: 'pro', id: 'askai_pro', nameb: 'pro_plan', idb: 'token_pro_plan', cm: 'sjb' },  //ASKAI
  'Infltr': { name: 'com.Yooshr.infltr.subscriptionPremium', id: 'com.Yooshr.infltr.everythingForever', cm: 'sja' },  //樱飞无限滤镜
  'Darkroom': { 
  name: 'co.bergen.Darkroom.entitlement.allToolsAndFilters', 
  id: 'co.bergen.Darkroom.product.forever.everything', 
  nameb: 'co.bergen.Darkroom.entitlement.selectiveAdjustments', 
  idb: 'co.bergen.Darkroom.product.forever.everything', 
  cm: 'sja' 
},  //Darkroom
  'ShellBean': { name: 'pro', id: 'com.ningle.shellbean.iap.forever', cm: 'sja' },  //ShellBean-SSH终端服/Linux监控
  'ChatLLM': { name: 'Pro', id: 'com.curiouscreatorsco.ChatLLM.pro.lifetime.notrial.150_00', cm: 'sjb' },  //AItText
  'Photomator': { name: 'pixelmator_photo_pro_access', id: 'pixelmator_photo_lifetime_v1', cm: 'sjb' },  //Photomator
  'CountDuck': { name: 'premium', id: 'Lifetime', cm: 'sjb' },  // 倒数鸭
  'ScreenRecordCase': { name: 'Premium', id: 'me.fandong.ScreenRecordCase.Ultra', cm: 'sjb' },  // 手机壳套图
  'Currency': { name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus', cm: 'sja' },  // 汇率转换
  'Spark': { name: 'premium', id: 'spark_5999_1y_1w0', cm: 'sja' },  // 邮箱
  'ShellBoxKit': { name: 'pro', id: 'ShellBoxKit.Lifetime', cm: 'sjb' },  // 服务器监控
  'IDM': { name: 'premium', id: 'sub_yearly_idm', cm: 'sja' },  // IDM-下载
  'Whisper': { name: 'all_features', id: 'whisperai_80_y', cm: 'sja' },  // Whisper AI
  'PhotoRoom': { name: 'business', id: 'com.background.business.yearly', cm: 'sja' },  // 图像编辑
  'TouchRetouchBasic': { name: 'premium', id: 'tr5_yearlysubsc_20dlrs_1', cm: 'sja' },  // 图像移除
  'Drops': { name: 'premium', id: 'forever_unlimited_time_discounted_80_int', cm: 'sjb' },  // Drops外语
  'UTC': { name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.subscription.month', cm: 'sja' },  // 花样文字
  'EraseIt': { name: 'ProVersionLifeTime', id: 'com.uzero.cn.eraseit.premium1.fromyear', cm: 'sja' },  // Smoothrase-AI擦除照片
  'DHWaterMarkManager': { name: 'Vip', id: 'lifetimeVIP_001', cm: 'sjb' },  // 水印熊
  '%E8%B5%84%E6%BA%90%E6%90%AC%E8%BF%90%E5%A4%A7%E5%B8%88': { name: 'SaveTikYoutu_common', id: 'LifetimeSubscription', cm: 'sjb' },  // 资源搬运大师
  'Yosum': { name: 'Premium', id: 'yosum_999_1year', cm: 'sja' },  // Yosum
  'iplayTV': { name: 'com.ll.btplayer.12', id: 'com.ll.btplayer.12', cm: 'sja' },  // ntplayer
  'TQBrowser': { name: 'pro_lt', id: 'com.tk.client.lifetime', cm: 'sjb' },  // Teak浏览器
  'Python3IDE': { name: 'pro', id: 'python3ide_six_month', cm: 'sja' },  // Python3IDE
  'CallAnnie': { name: 'ai.animato.callannie.entitlement.pro0', id: 'ai.animato.callannie.proyearly1', cm: 'sja' },  // CallAnnie
  'VideoToLive': { name: 'Premium', id: 'video_to_live_premium', cm: 'sjb' },  // VideoToLive
  'Themy': { name: 'fonts_premium', id: 'lifetime', cm: 'sjb' },  // Fonts-微信字体
  'BabyCare': { name: 'pro', id: 'KiddoKeeper_38_LifeTime', cm: 'sjb' },  // 小守护
  'MenuBox': { name: 'premium', id: 'com.menubox.premium', cm: 'sja' },  // MenuBox
  'Chatme': { name: 'premium', id: 'chatme_premium_year_discount', cm: 'sja' },  //ChatMe
  'AI%C2%A0Chat': { name: 'AI Plus', id: 'ai_plus_gpt_yearly', cm: 'sja' },  // WiseMate
};

if (typeof $response == "undefined") {
  delete headers["x-revenuecat-etag"];
  delete headers["X-RevenueCat-ETag"];
  mikephie8.headers = headers;
} else if (mikephie && mikephie.subscriber) {
  mikephie.subscriber.subscriptions = mikephie.subscriber.subscriptions || {};
  mikephie.subscriber.entitlements = mikephie.subscriber.entitlements || {};
  let name, nameb, ids, idb, data;
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
        name = src[i].name;
        idb = src[i].idb;
        nameb = src[i].nameb;
        break;
      }
    }
  }
  if (!name || !ids) {
    data = { "purchase_date": "2024-04-04T04:04:04Z", "expires_date": "2088-08-08T08:08:08Z" , "grace_period_expires_date": "2088-08-08T08:08:08Z"};
    name = 'pro';
    ids = 'com.mikephie.pro';
  }
  mikephie.subscriber.entitlements[name] = Object.assign({}, data, { product_identifier: ids });
  if (typeof nameb !== 'undefined' && nameb !== null) {
    mikephie.subscriber.entitlements[nameb] = Object.assign({}, data, { product_identifier: idb });
  }
  const subData = Object.assign({}, data, { 
    "Author": "mikephie", 
    "Telegram": "https://t.me/chxm1023", 
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
  console.log('已操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/chxm1023');
}

$done(mikephie8);