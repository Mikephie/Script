/*************************************

项目名称：Revenuecat 系列解锁合集
下载地址：https://too.st/CollectionsAPP
更新日期：2024-11-25
脚本作者：mikephie
电报频道：https://t.me/mikephie
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

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
  console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本！\n叮当猫の分享频道: https://t.me/mikephie`);
  $done({});
}

//识别bundle_id
const bundle = {
  'TeleprompterX': { name: 'Pro Upgrade', id: 'TPXOTP', cm: 'sjb' },  //Teleprompter
  'moonbox.co.il.grow': { name: 'pro', id: 'moonbox.co.il.grow.lifetime.offer', cm: 'sjb' },  //植物识别-PlantID
  'tech.miidii.MDClock': { name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.pro', cm: 'sjb' },  //谜底时钟
  'com.voicedream.Voic': { name: 'standard', id: 'vd_annual_79_3daytrial', cm: 'sja' },  //声之梦
  'com.laser-focused.focus-ios': { name: 'subscribed', id: 'iap.io.masterbuilders.focus.pro_one_year', cm: 'sja' },  //Focus-专注时间管理
  'com.roehl': { name: 'Pro', id: 'habitkit_3499_lt', cm: 'sjb' },  //HabitKit/WinDiary-双件套
  'net.tengl.powertimer': { name: 'plus', id: 'powertimer.plus', cm: 'sjb' },  //元气计时-PowerTimer
  'com.reader.book': { name: 'pro', id: 'reader.lifetimeFamily.pro', cm: 'sja' },  //PureLibro
  'app.imone.OneWidget': { name: 'pro', id: 'app.imone.OneWidget.Lifetime', cm: 'sjb' },  //OneWidget-小组件
  'io.innerpeace.yiye': { name: 'Premium', id: 'io.innerpeace.yiye.lifetime.forYearly', cm: 'sja' },  //言外笔记
  'com.valo.reader': { name: 'com.valo.reader.vip1.forever', id: 'com.valo.reader.vip1.forever', nameb: 'com.valo.reader.vip2.year', idb: 'com.valo.reader.vip2.year', cm: 'sja' },  //读不舍手
  'com.skysoft.removalfree': { name: 'Pro', id: 'com.skysoft.removalfree.subscription.newyearly', cm: 'sja' }  //图片消除
};

//识别UA
const list = {
  '%E8%90%8C%E5%AE%A2AI%E7%BB%98%E7%94%BB': { name: 'AISticker_VIP', id: 'LifetimeSubscription_Sticker', cm: 'sjb' },
  'XS%20VPN': { name: 'goru_pro', id: 'xs_ios_yearly_sub_1', cm: 'sja' },  //XS VPN
  'Goru': { name: 'goru_pro', id: 'com.ahmetserdarkaradeniz.goruyearlyalternative', cm: 'sja' },  //Goru
  'Remote': { name: 'Pros', id: 'com.cherpake.macrc.mor', cm: 'sjb' },  // Remote
  'ChatPub': { name: 'Unlimited Access', id: 'conversationai.year', cm: 'sja' },  // ChatPub
  'Art%20Generator': { name: 'discount_pro', id: 'artx_yearly_option_2', nameb: 'DalleCredit', idb: 'artx_100Credit', cm: 'sja' },  //Art Generator
  'PicLoom': { id: 'com.efsoft.picloom_nc_lifetime', cm: 'sjc' },  //PicLoom
  'ChatGPT': { name: 'premium', id: 'com.prod.gpt.1y40', cm: 'sja' },  //ChatGPT
  'Video%20Up!': { name: 'Full_access_app', id: 'app.videoup.videoup.na.base.one_year', cm: 'sja' },  //Video Up!
  '%E9%85%B7%E6%8B%8D': { name: 'Premium', id: 'com.wallpapershub.anime.premiumCategories', cm: 'sja' },
  'Jellycuts': { name: 'pro', id: 'com.zlineman.Jellyfish.tier.5.pro', cm: 'sja' },  //Jellycuts
  'Dream': { name: 'premium', id: 'artx_yearly_option_2', cm: 'sja' },  //Dream
  'World%20Clock': { name: 'pro', id: 'dream_yearly_jan_2024_3999', cm: 'sja' },  //World Clock
  'MorningAlarm': { name: 'morning_premium', id: 'alarmify.yearly.1', cm: 'sja' },  //MorningAlarm
  'Genius%20AI': { name: 'premium', id: 'genius_lifetime_59', cm: 'sjb' },  //Genius AI
  'Vocai-iOS': { name: 'AI Pro', id: 'vocabAI_900_1m', cm: 'sja' },  //Vocai-iOS
  'PixImagine': { id: 'com.efsoft.piximagine_nc_lifetime', cm: 'sjc' },  //PixImagine
  '1Blocker': { name: 'premium', id: 'blocker.ios.iap.lifetime', cm: 'sjb' },  //1Blocker
  'VidCap': { name: 'io.fadel.vidcap.pro', id: 'subs.vcp_59.99_365_3', cm: 'sja' },  //VidCap
  'Color%20Widgets': { name: 'pro', id: 'cw_1999_1y_3d0', cm: 'sja' },  //Color Widgets
  'ChatBot': { name: 'chatbot_annual', id: 'chatbot_annual', cm: 'sja' },  //ChatBot
  'ASKAI': { name: 'pro', id: 'askai_pro', nameb: 'pro_plan', idb: 'token_pro_plan', cm: 'sjb' },  //ASKAI
  'Infltr': { name: 'com.Yooshr.infltr.subscriptionPremium', id: 'com.Yooshr.infltr.everythingForever', cm: 'sja' },  //Infltr
  'Darkroom': { name: 'co.bergen.Darkroom.entitlement.allToolsAndFilters', id: 'co.bergen.Darkroom.product.forever.everything', nameb: 'co.bergen.Darkroom.entitlement.selectiveAdjustments', idb: 'co.bergen.Darkroom.product.forever.everything', cm: 'sja' },  //Spark_Mail-邮箱管理
  'Currency': { name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus', cm: 'sja' },  //Currency-汇率查询
  'Spark': { name: 'premium', id: 'spark_5999_1y_1w0', nameb: 'premium', idb: 'spark_openai_tokens_4xt', cm: 'sja' },  //Spark_Mail-邮箱管理
  'ShellBean': { name: 'pro', id: 'com.ningle.shellbean.iap.forever', cm: 'sjb' },  //ShellBean-SSH终端服/Linux监控
  'ChatLLM': { name: 'Pro', id: 'com.curiouscreatorsco.ChatLLM.pro.lifetime.notrial.150_00', cm: 'sjb' },  //AItText
  'Photomator': { name: 'pixelmator_photo_pro_access', id: 'pixelmator_photo_lifetime_v1', cm: 'sjb' },  //Photomator
  'CountDuck': { name: 'premium', id: 'Lifetime', cm: 'sjb' },  //倒数鸭
  'ScreenRecordCase': { name: 'Premium', id: 'me.fandong.ScreenRecordCase.Ultra', cm: 'sjb' },  //屏幕套壳
  'ShellBoxKit': { name: 'ssh_pro', id: 'ShellBoxKit.Year', cm: 'sja' },  //CareServer-服务器监控
  'IDM': { name: 'premium', id: 'sub_yearly_idm', cm: 'sja' },  //IDM-下载
  'Whisper': { name: 'all_features', id: 'whisperai_80_y', cm: 'sja' },  //Whisper
  'PhotoRoom': { name: 'business', id: 'com.background.business.yearly', cm: 'sja' },  //PhotoRoom
  'TouchRetouchBasic': { name: 'premium', id: 'tr5_yearlysubsc_30_and_20_dlrs', cm: 'sja' },  //TouchRetouch-水印清理
  'Drops': { name: 'premium', id: 'forever_unlimited_time_discounted_80_int', cm: 'sjb' },  //Drops外语
  'UTC': { name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.subscription.month', cm: 'sja' },  //花样文字
  'EraseIt': { name: 'ProVersionLifeTime', id: 'com.uzero.cn.eraseit.premium1.fromyear', cm: 'sja' },  //EraseIt
  'DHWaterMarkManager': { name: 'Vip', id: 'lifetimeVIP_001', cm: 'sjb' },  //DHWaterMarkManager
  '%E8%B5%84%E6%BA%90%E6%90%AC%E8%BF%90%E5%A4%A7%E5%B8%88': { name: 'SaveTikYoutu_common', id: 'LifetimeSubscription', cm: 'sjb' },  //SaveTikYoutu
  'Yosum': { name: 'Premium', id: 'yosum_999_1year', cm: 'sja' }, //Yosum订阅
  'iplayTV':{ name: 'com.ll.btplayer.12', id: 'com.ll.btplayer.12', cm: 'sjb'},//ntPlayer
  'TQBrowser': { name: 'pro_lt', id: 'com.tk.client.lifetime', cm: 'sjb' },  //Teak浏览器
  'Python3IDE': { name: 'pro', id: 'python3ide_six_month', cm: 'sja' },  //Python3IDE
  'CallAnnie': { name: 'ai.animato.callannie.entitlement.pro0', id: 'ai.animato.callannie.proyearly1', cm: 'sja' },  //CallAnnie
  'VideoToLive': { name: 'Premium', id: 'video_to_live_premium', cm: 'sjb' },  //VideoToLive
  'Themy': { name: 'fonts_premium', id: 'lifetime', cm: 'sjb' },  //Fonts-微信字体
  'BabyCare': { name: 'pro', id: 'KiddoKeeper_38_LifeTime', cm: 'sjb' },  //小守护
  'MenuBox': { name: 'premium', id: 'com.menubox.premium', cm: 'sja' },  //MenuBox
  'Chatme': { name: 'premium', id: 'chatme_premium_year_discount', cm: 'sja' },  //ChatMe
  'AI%C2%A0Chat': { name: 'AI Plus', id: 'ai_plus_gpt_yearly', cm: 'sja' },  //AIChat
  'Days': { name: 'premium', id: 'net.mattdavenport.daysuntil.dayspremiumlifetime', cm: 'sjb' },  //Days
  'Journal': { name: 'PRO', id: 'com.pureformstudio.diary.yearly_2022_promo', cm: 'sja' },  //Diarly
};

if (typeof $response == "undefined") {
  delete headers["x-revenuecat-etag"];
  delete headers["X-RevenueCat-ETag"];
  mikephie8.headers = headers;
} else if (mikephie && mikephie.subscriber) {
  mikephie.subscriber.subscriptions = mikephie.subscriber.subscriptions || {};
  mikephie.subscriber.entitlements = mikephie.subscriber.entitlements || {};
  let name,nameb,ids,idb,data;
  for (const src of [list, bundle]) {
    for (const i in src) {
      const test = src === list ? ua : bundle_id;
      if (new RegExp(`^${i}`, `i`).test(test)) {
      if (src[i].cm.indexOf('sja') != -1) { data = {  "purchase_date" : "2024-04-04T04:04:04Z",  "expires_date" : "2088-08-08T08:08:08Z" };  } else if (src[i].cm.indexOf('sjb') != -1) { data = {  "purchase_date" : "2024-04-04T04:04:04Z" }; }
      ids = src[i].id;name = src[i].name;idb = src[i].idb;nameb = src[i].nameb;
      break;
      }
    }
  }
  if (!name || !ids) {
    data = {  "purchase_date" : "2024-04-04T04:04:04Z",  "expires_date" : "2088-08-08T08:08:08Z" };
    name = 'pro';
    ids = 'com.mikephie.pro';
  }
  mikephie.subscriber.entitlements[name] = Object.assign({}, data, { product_identifier: ids });
  if (typeof nameb !== 'undefined' && nameb !== null) {
    mikephie.subscriber.entitlements[nameb] = Object.assign({}, data, { product_identifier: idb });
  }
  const subData = Object.assign({},data,{  "Author": "mikephie",  "Telegram": "https://t.me/mikephie",  "warning": "仅供学习，禁止转载或售卖",  "original_purchase_date": "2024-04-04T04:04:04Z",  "store": "app_store",  "ownership_type": "PURCHASED"  });
  mikephie.subscriber.subscriptions[ids] = subData;
  if (typeof idb !== 'undefined' && idb !== null) {
    mikephie.subscriber.subscriptions[idb] = subData;
  }
  mikephie8.body = JSON.stringify(mikephie);
  console.log('已操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/mikephie');
}

$done(mikephie8);
