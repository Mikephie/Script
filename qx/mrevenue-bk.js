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
  '%E8%90%8C%E5%AE%A2AI%E7%BB%98%E7%94%BB': { Ent: 'AISticker_VIP', id: 'LifetimeSubscription_Sticker', cm: 'sjb' },
  'XS%20VPN': { Ent: 'goru_pro', id: 'xs_ios_yearly_sub_1', cm: 'sja' },
  'Goru': { Ent: 'goru_pro', id: 'com.ahmetserdarkaradeniz.goruyearlyalternative', cm: 'sja' },
  'Remote': { Ent: 'Pros', id: 'com.cherpake.macrc.mor', cm: 'sjb' },
  'ChatPub': { Ent: 'Unlimited Access', id: 'conversationai.year', cm: 'sja' },
  'Art%20Generator': { 
    Ent: 'discount_pro', 
    id: 'artx_yearly_option_2', 
    Entb: 'DalleCredit', 
    idb: 'artx_100Credit', 
    cm: 'sja' 
  },
  'PicLoom': { id: 'com.efsoft.picloom_nc_lifetime', cm: 'sjc' },  //PicLoom
  'ChatGPT': { Ent: 'premium', id: 'com.prod.gpt.1y40', cm: 'sja' },
  'Video%20Up!': { Ent: 'Full_access_app', id: 'app.videoup.videoup.na.base.one_year', cm: 'sja' },
  '%E9%85%B7%E6%8B%8D': { Ent: 'Premium', id: 'com.wallpapershub.anime.premiumCategories', cm: 'sja' },
  'Jellycuts': { Ent: 'pro', id: 'com.zlineman.Jellyfish.tier.5.pro', cm: 'sja' },
  'Dream': { Ent: 'premium', id: 'artx_yearly_option_2', cm: 'sja' },
  'World%20Clock': { Ent: 'pro', id: 'dream_yearly_jan_2024_3999', cm: 'sja' },
  'MorningAlarm': { Ent: 'morning_premium', id: 'alarmify.yearly.1', cm: 'sja' },
  'Genius%20AI': { Ent: 'premium', id: 'genius_lifetime_59', cm: 'sjb' },
  'Vocai-iOS': { Ent: 'AI Pro', id: 'vocabAI_900_1m', cm: 'sja' },
  'PixImagine': { id: 'com.efsoft.piximagine_nc_lifetime', cm: 'sjc' },
  '1Blocker': { Ent: 'premium', id: 'blocker.ios.iap.lifetime', cm: 'sjb' },
  'VidCap': { Ent: 'io.fadel.vidcap.pro', id: 'subs.vcp_59.99_365_3', cm: 'sja' },
  'PicLoom': { id: 'com.efsoft.picloom_nc_lifetime', cm: 'sjc' },
  'Color%20Widgets': { Ent: 'pro', id: 'cw_1999_1y_3d0', cm: 'sja' },
  'ChatBot': { Ent: 'chatbot_annual', id: 'chatbot_annual', cm: 'sja' },
  'ASKAI': { Ent: 'pro', id: 'askai_pro', Entb: 'pro_plan', idb: 'token_pro_plan', cm: 'sjb' },
  'Infltr': { Ent: 'com.Yooshr.infltr.subscriptionPremium', id: 'com.Yooshr.infltr.everythingForever', cm: 'sja' },
  'Darkroom': { 
    Ent: 'co.bergen.Darkroom.entitlement.allToolsAndFilters', 
    id: 'co.bergen.Darkroom.product.forever.everything', 
    Entb: 'co.bergen.Darkroom.entitlement.selectiveAdjustments', 
    idb: 'co.bergen.Darkroom.product.forever.everything', 
    cm: 'sja' 
  },
  'ShellBean': { Ent: 'pro', id: 'com.ningle.shellbean.iap.forever', cm: 'sja' },
  'ChatLLM': { Ent: 'Pro', id: 'com.curiouscreatorsco.ChatLLM.pro.lifetime.notrial.150_00', cm: 'sjb' },
  'Photomator': { Ent: 'pixelmator_photo_pro_access', id: 'pixelmator_photo_lifetime_v1', cm: 'sjb' },
  'CountDuck': { Ent: 'premium', id: 'Lifetime', cm: 'sjb' },
  'ScreenRecordCase': { Ent: 'Premium', id: 'me.fandong.ScreenRecordCase.Ultra', cm: 'sjb' },
  'Currency': { Ent: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus', cm: 'sja' },
  'Spark': { Ent: 'premium', id: 'spark_6999_1y_1w0', cm: 'sja' },
  'ShellBoxKit': { Ent: 'pro', id: 'ShellBoxKit.Lifetime', cm: 'sjb' },
  'IDM': { Ent: 'premium', id: 'sub_yearly_idm', cm: 'sja' },
  'Whisper': { Ent: 'all_features', id: 'whisperai_80_y', cm: 'sja' },
  'PhotoRoom': { Ent: 'business', id: 'com.background.business.yearly', cm: 'sja' },
  'TouchRetouchBasic': { Ent: 'premium', id: 'tr5_yearlysubsc_30_and_20_dlrs', cm: 'sja' },
  'Drops': { Ent: 'premium', id: 'forever_unlimited_time_discounted_80_int', cm: 'sjb' },
  'UTC': { Ent: 'Entitlement.Pro', id: 'tech.miidii.MDClock.subscription.month', cm: 'sja' },
  'EraseIt': { Ent: 'ProVersionLifeTime', id: 'com.uzero.cn.eraseit.premium1.fromyear', cm: 'sja' },
  'DHWaterMarkManager': { Ent: 'Vip', id: 'lifetimeVIP_001', cm: 'sjb' },
  '%E8%B5%84%E6%BA%90%E6%90%AC%E8%BF%90%E5%A4%A7%E5%B8%88': { Ent: 'SaveTikYoutu_common', id: 'LifetimeSubscription', cm: 'sjb' },
  'Yosum': { Ent: 'Premium', id: 'yosum_999_1year', cm: 'sja' },
  'iplayTV': { Ent: 'com.ll.btplayer.12', id: 'com.ll.btplayer.12', cm: 'sja' },
  'TQBrowser': { Ent: 'pro_lt', id: 'com.tk.client.lifetime', cm: 'sjb' },
  'Python3IDE': { Ent: 'pro', id: 'python3ide_six_month', cm: 'sja' },
  'CallAnnie': { Ent: 'ai.animato.callannie.entitlement.pro0', id: 'ai.animato.callannie.proyearly1', cm: 'sja' },
  'VideoToLive': { Ent: 'Premium', id: 'video_to_live_premium', cm: 'sjb' },
  'Themy': { Ent: 'fonts_premium', id: 'lifetime', cm: 'sjb' },
  'BabyCare': { Ent: 'pro', id: 'KiddoKeeper_38_LifeTime', cm: 'sjb' },
  'MenuBox': { Ent: 'premium', id: 'com.menubox.premium', cm: 'sja' },
  'Chatme': { Ent: 'premium', id: 'chatme_premium_year_discount', cm: 'sja' },
  'AI%C2%A0Chat': { Ent: 'AI Plus', id: 'ai_plus_gpt_yearly', cm: 'sja' },
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