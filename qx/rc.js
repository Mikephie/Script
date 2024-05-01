/***********************************

> ScriptName        𝐑𝐞𝐯𝐞𝐧𝐮𝐞𝐂𝐚𝐭 多合一脚本[墨鱼版]
> Author            @mikephie
> ScriptURL         https://raw.githubusercontent.com/Mikephie/Script/main/qx/rc.js


# ========解锁列表======== #
https://appraven.net/collection/77299969

[rewrite_local]

# ～ RevenueCat@mikephie
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/rc.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers) url script-request-header https://raw.githubusercontent.com/ddgksf2013/Scripts/master/deleteHeader.js

[mitm]

hostname=api.revenuecat.com

***********************************/

//排除已禁止MITM的APP
const forbiddenApps = ['Fileball', 'APTV'];
const forbiddenAppFound = forbiddenApps.find(appName => (ua && ua.includes(appName)) || ($request.body && $request.body.includes(appName)));
if (forbiddenAppFound) {
  console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本！\n叮当猫の分享频道: https://t.me/chxm1023`);
  $done({});
}


// ========= 动态 ID ========= //
//const mapping = {
  //'CountDuck': ['premium', 'Lifetime'],
  //'CountDuck': ['premium', 'Lifetime'],  //倒数鸭
  //'IDM': ['premium'],
  //'Whisper': ['all_features'],
  //'Airmail': ['Airmail Premium'],
  //'ShellBoxKit': ['pro'],
  //'PhotoRoom': ['pro'],
  //'PDF%20Viewer': ['sub.pro'],
  //'Drops': ['premium'],
  //'UTC': ['Entitlement.Pro'],
  //'Anybox': ['pro'],
  //'ScannerPro': ['plus'],
  //'MagicTiles3': ['VIP'],
  //'ShellBean': ['pro'],
  //'ScreenRecordCase': ['Premium'],
  //'OneBox': ['all'],
  //'Spark': ['premium'],
  
  
  //以下内容来自叮当猫（@chxm1023）
const mapping = {  
  'ShellBean': ['pro'],  
  'MagicTiles3': ['VIP', 'com.pianoidols.vipsub.year.06']   //MagicTiles3-音乐游戏
  'Airmail': ['Airmail Premium', 'Airmail_iOS_Yearly_P']   //Airmail
  'ScreenRecordCase': ['Premium', 'me.fandong.ScreenRecordCase.Ultra']   //屏幕套壳
  'opusvpn': ['pro', 'yearly_discount']   //Opus-VPN
  'ip_tv_react_native': ['Single', 'opus.lifetime']   //Opus-IPTV
  'Atomic': ['pro', 'ht_lifetime1']   //Atomic
  'QingLong': ['Premium', 'qinglong_premium']   //青龙面板
  'timetrack.io': ['atimelogger-premium-plus', 'ttio_premium_plus']   //aTimeloggerPro-时间记录
  'Video%20Teleprompter': ['videoPremium', 'com.joeallenpro.videoteleprompter.upgrade.yearly_a']   //Video Teleprompter
  'FoJiCam': ['ProVersionLifeTime', 'com.uzero.cn.fojicam.life2']   //LimiCam-胶片相机
  'FruitMinder': ['Premium', 'com.bartozo.FruitMinder.lifetime']   //FruitMinder-水果提醒
  'PDF_convertor': ['VIP', 'com.pdf.convertor.forever']   //PDF转换器
  'rewritingText': ['AIGrammercheckerProAccess', 'sv.aigrammerchecker.com.lifetime']   //AI Grammar
  'ShellBoxKit': ['pro', 'ShellBoxKit.Lifetime']   //CareServer-服务器监控
  'IDM': ['premium', 'sub_yearly_idm']   //IDM-下载
  'Whisper': ['all_features', 'whisperai_80_y']   //Whisper
  'Shapy': ['premium', 'com.blake.femalefitness.subscription.yearly']   //Shapy-健身
  'Carbon-iOS': ['pro', 'carbon.unlockall']   //Carbon-碳
  '%E6%89%8B%E6%8C%81%E5%BC%B9%E5%B9%95': ['Pro access', 'com.tech.LedScreen.VIPALL']   //手持弹幕
  '%E8%AF%AD%E9%9F%B3%E8%AE%A1%E7%AE%97%E5%99%A8': ['Pro access', 'com.tech.counter.All']   //语音计算器
  '%E7%BE%8E%E5%A6%86%E6%97%A5%E5%8E%86': ['Pro access', 'com.tech.Aula.VIPALL']   //美妆日历
  'LiveWallpaper': ['Pro access', 'com.tech.LiveWallpaper.ALL']   //动态壁纸
  'Chat%E7%BB%83%E5%8F%A3%E8%AF%AD': ['Pro access', 'com.tech.AiSpeak.All']   //Chat练口语
  'Calflow': ['pro', 'kike.calflow.pro.lifetime']   //Calflow
  'dtdvibe': ['pro', 'com.dtd.aroundu.life']   //Dtd Sounds-睡眠白噪音
  'Clipboard': ['Premium', 'Premium_0_99_1M_1MFree']   //Clipboard-剪贴板
  'Hi%E8%AE%BA%E5%9D%9B/69': ['plus', 'plus_yearly']   //Hi论坛
  'AnimeArt': ['AnimeArt.Gold', 'WaifuArt.Lifetime']   //Anime Waifu-AI
  'LiveCaption': ['Plus', 'rc_0400_1m']   //iTranscreen-屏幕/游戏翻译
  'EraseIt': ['ProVersionLifeTime', 'com.uzero.cn.eraseit.premium1.fromyear']   //Smoothrase-AI擦除照片中任何物体
  'MusicPutty': ['Premium', 'mp_2999_1y']   //MusicPutty
  'SleepDown': ['Pro', 'pro_student_0926']   //StaySleep-熬夜助手
  'PhotoRoom': ['pro', 'com.background.pro.yearly']   //PhotoRoom
  'Bg%20Remover': ['Premium', 'net.kaleidoscope.cutout.premium1']   //Bg Remover+
  'Sex%20Actions': ['Premium Plus', 'ru.sexactions.subscriptionPromo1']   //情侣性爱游戏-Sex Actions
  'reader': ['vip2', 'com.valo.reader.vip2.year']   //读不舍手
  'StarFocus': ['pro', 'com.gsdyx.StarFocus.nonConsumable.forever']   //星垂专注
  'StarDiary': ['pro', 'com.gsdyx.StarDiary.nonConsumable.forever']   //星垂日记
  'CountDuck': ['premium', 'Lifetime']   //倒数鸭
  'wordswag': ['pro', 'Pro_Launch_Monthly']   //WordSwag
  'LockFlow': ['unlimited_access', 'lf_00.00_lifetime']   //LockFlow-锁屏启动
  'TextMask': ['pro', 'tm_lifetime']   //TextMask
  '%E5%96%B5%E7%BB%84%E4%BB%B6': ['pro', 'MiaoLifeTime']   //喵组件
  'Chatty': ['pro', 'chatty.yearly.1']   //Chatty.AI
  'ImagineAI': ['pro', 'artistai.yearly.1']   //ImagineAI
  'Langster': ['Premium', 'com.langster.universal.lifetime']   //Langster-学习外语
  'VoiceAI': ['Special Offer', 'voiceannualspecial']   //VoiceAI-配音
  'Rootd': ['pro', 'subscription_lifetime']   //Rootd-情绪引导
  'MusicMate': ['premium', 'mm_lifetime_68_premium']   //MusicMate-音乐
  'AIKeyboard': ['plus_keyboard', 'aiplus_keyboard_yearly']   //AIKeyboard键盘
  'SmartAIChat': ['Premium', 'sc_3999_1y']   //SmartAI
  'AIChat': ['AI Plus', 'ai_plus_yearly']   //AIChat
  'LazyReply': ['lazyReplyYearlySubscription', 'com.bokhary.lazyreply.yearlyprosubscription']   //ReplyAssistant键盘
  'LazyBoard': ['lazyboardPro', 'com.bokhary.magicboard.magicboardpro']   //LazyBoard键盘
  'PDF%20Viewer': ['sub.pro', 'com.pspdfkit.viewer.sub.pro.yearly']   //PDF Viewerr
  'Joy': ['pro', 'com.indiegoodies.Agile.lifetime2']   //Joy AI
  'AnkiPro': ['Premium', 'com.ankipro.app.lifetime']   //AnkiPro
  'SharkSMS': ['VIP', 'com.gaapp.sms.permanently']   //鲨鱼短信
  'EncryptNote': ['Pro', 'com.gaapp.2019note.noAds']   //iNotes私密备忘录
  'One4WallSwiftUI': ['lifetime', 'lifetime_key']   //One4Wall
  'Pigment': ['pro', 'com.pixite.pigment.1yearS']   //色调-Pigment
  'GradientMusic': ['Pro', 'com.gradient.vision.new.music.one.time.79']   //GradientMusic音乐
  'iBody': ['Pro', 'com.tickettothemoon.bodyfilter.one.time.purchase']   //BodyFilter
  'Persona': ['unlimited', 'com.tickettothemoon.video.persona.one.time.purchase']   //Persona-修饰脸部与相机
  'easy_chart': ['unlock all', 'qgnjs_2']   //快速图表
  'Snipd': ['premium', 'snipd_premium_1y_7199_trial_2w_v2']   //Snipd播客
  'Tide%20Guide': ['Tides+', 'TideGuidePro_Lifetime_Family_149.99']   //Tide Guide潮汐
  'Gear': ['subscription', 'com.gear.app.yearly']   //Gear浏览器
  'Aisten': ['pro', 'aisten_pro']   //Aisten-播客学英语
  'ASKAI': ['pro', 'askai_pro', nameb: 'pro_plan', idb: 'token_pro_plan']   //ASKAI
  'Subtrack': ['pro', 'com.mohitnandwani.subtrack.subtrackpro.family']   //Subtrack
  'shipian-ios': ['vipOffering', 'shipian_25_forever']   //诗片
  'My%20Time': ['Pro', 'ninja.fxc.mytime.pro.lifetime']   //我的时间
  'LUTCamera': ['ProVersionLifeTime', 'com.uzero.funforcam.lifetimepurchase']   //方弗相机
  'Heal%20Clock': ['pro', 'com.mad.HealClock.pro']   //自愈时钟
  'tiimo': ['full_access', 'lifetime.iap']   //Tiimo-可视化日程
  'IPTVUltra': ['premium', 'com.chxm1023.lifetime']   //IPTVUltra
  'Wozi': ['wozi_pro_2023', 'wozi_pro_2023']   //喔知Wozi背单词
  'Color%20Widgets': ['pro', 'cw_1999_1y_3d0']   //Color Widgets小组件
  'server_bee': ['Pro', 'pro_45_lifetime']   //serverbee终端监控管理
  'MyPianist': ['pro', 'com.collaparte.mypianist.pro.yearly']   //MyPianist乐谱
  'ProCam': ['pro', 'pro_lifetime']   //ProCam相机
  'Drops': ['premium', 'forever_unlimited_time_discounted_80_int']   //Drops外语
  'transmission_ui': ['Premium', '200002']   //Transmission服务器
  'fastdiet': ['premium', 'com.happy.fastdiet.forever']   //小熊轻断食
  'money_manager': ['premium', 'com.happy.money.forever']   //小熊记账
  'Overdue': ['Pro', '1']   //我的物品
  'Ledger': ['Pro', 'com.lifetimeFamily.pro']   //Pure账本
  'Reader': ['pro', 'reader.lifetime.pro']   //PureLibro
  'WeNote': ['pro', 'Yearly']   //Emote
  'Scelta': ['pro', 'SceltaProLifetime']   //Scelta
  '%E5%87%B9%E5%87%B8%E5%95%A6%E6%9F%A5%E5%A6%86': ['Pro access', 'com.smartitfarmer.MakeUpAssistant.UNLIMITED']   //upahead
  'PM4': ['pro', 'pm4_pro_1y_2w0']   //Obscura
  'Project%20Delta': ['rc_entitlement_obscura_ultra', 'com.benricemccarthy.obscura4.obscura_ultra_sub_annual']   //Obscura
  'Zettelbox': ['Power Pack', 'powerpack_permanent_1']   //Zettelbox
  'Packr': ['Pro', 'com.jeremieleroy.packr.premiumyearly']   //派克
  'muoyu': ['pro', 'com.metaorder.muoyu.prolifetime.12']   //摸鱼
  '%E7%BF%BB%E9%A1%B5%E6%97%B6%E9%92%9F': ['Pro access', 'com.douwan.aiclock.ALL']   //翻页时钟
  '%E7%A7%A9%E5%BA%8F%E6%97%B6%E9%92%9F': ['lifetime', 'com.metaorder.orderclocko.lifetime']   //秩序时钟
  '%E7%A7%A9%E5%BA%8F%E7%9B%AE%E6%A0%87': ['pro', 'com.metaorder.OKRTomato.vip.supremacy']   //秩序目标
  '%E4%BA%BA%E7%94%9F%E6%B8%85%E5%8D%95': ['premium', 'com.metaorder.lifelist.premium']   //人生清单
  'Vision': ['promo_3.0', 'vis_lifetime_3.0_promo']   //Vision
  'TruthOrDare': ['premium', 'truth_or_dare_premium_monthly']   //真心话大冒险
  'HurtYou': ['premium', 'hurtyou_199_1y']   //一起欺词
  '%E4%BF%A1%E6%81%AF%E8%AE%A1%E7%AE%97': ['pro', 'informaticcalculations.pro.lifetime']   //信息计算
  'Context_iOS': ['Context Pro', 'ctx_sub_1y_sspai_preorder_angel']   //Context
  'Structured': ['pro', 'today.structured.pro']   //Structured
  '%E7%9B%B8%E6%9C%BA%E5%8D%B0': ['Unlimited', 'com.dujinke.CameraMark.Unlimited']   //相机印
  'HTTPBot': ['pro', 'com.behindtechlines.HTTPBot.prounlock']   //Httpbot抓包工具
  'Counter': ['Unlimited', 'com.dujinke.Counter.Unlimited']   //计数器
  '%E7%8C%9C%E6%96%87%E5%AD%97': ['Unlimited', 'com.dujinke.Chinese.Unlimited']   //猜文字
  '%E4%BC%8A%E6%91%A9%E5%9F%BA': ['Unlimited', 'com.dujinke.Emoji.Unlimited']   //伊摩基
  '%E5%8D%85%E5%85%AD%E9%97%AE': ['Unlimited', 'com.dujinke.36Questions.Unlimited']   //卅六问
  'MinimalDiary': ['pro', 'com.mad.MinimalDiary.lifetime']   //极简日记
  'Zen%20Flip%20Clock': ['pro', 'com.mad.zenflipclock.iap.buymeacoffee']   //极简时钟
  'Transfer': ['pro', 'transfer_ios_premium_year_2022_1']   //WeTransfer
  'Collect': ['pro', 'com.revenuecat.product.yearly.ios']   //Collect收集
  'Paper': ['pro', 'com.fiftythree.paper.credit']   //Paper
  'Ape': ['pro-iOS', 'ape.lifetime']   //Sharp AI
  'Boar': ['pro-iOS', 'boar.yearly']   //Erase Objects
  'Loopsie': ['pro-iOS', 'com.reader.autoRenewableSeason']   //Loopsie
  'MySticker': ['mysticker premium', 'com.miiiao.MySticker.lifetime']   //Tico-贴抠
  'Rec': ['rec.paid', 'rec.paid.onetime']   //Rec相机
  'Photon': ['photon.paid', 'photon.paid.onetime']   //Photon相机
  'OneTodo': ['pro', 'onetodo_lifetime']   //OneTodo
  'OneFlag': ['pro', 'oneflag_lifetime']   //OneList
  'OneClear': ['pro', 'oneclear_lifetime']   //OneClear透明小组件
  'OneScreen': ['pro', 'onescreen_lifetime']   //OneScreen截图带壳
  'Photomator': ['pixelmator_photo_pro_access', 'pixelmator_photo_lifetime_v1']   //Photomator
  'Endel': ['pro', 'Lifetime']   //Endel
  'Drowsy': ['Pro', 'Drowsy_Life']   //解压动画
  'Thiro': ['pro', 'atelerix_pro_lifetime']   //Thiro
  'Stress': ['StressWatch Pro', 'stress_membership_lifetime']   //StressWatch压力自测提醒
  'Worrydolls': ['magicmode', 'magicmode']   //解忧娃娃
  'Echo': ['PLUS', 'com.LEMO.LemoFm.plus.lifetime.l3']   //LEMO FM睡眠
  'Falendar': ['Falendar+', 'falendar_68_life']   //Falendar日历
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip', 'eticket_with_watch_life_a']   //车票票
  'iRead': ['vip', 'com.vip.forever_1']   //已阅
  'MOZE': ['MOZE_PREMIUM_SUBSCRIPTION', 'MOZE_PRO_SUBSCRIPTION_YEARLY_BASIC']   //MOZE记账
  'app/112': ['Pro', 'com.wengqianshan.friends.pro']   //贴心记
  'app/38': ['Pro', 'com.wengqianshan.diet.pro']   //饭卡
  'MatrixClock': ['Premium', 'com.lishaohui.matrixclock.lifetimesharing']   //MatrixClocca-矩阵时钟
  'SalesCat': ['Premium', 'com.lishaohui.salescat.lifetime']   //SalesCat-RevenueCat客户端
  'MoneyThings': ['Premium', 'com.lishaohui.cashflow.lifetime']   //Money Things记账
  'ChatGPTApp': ['Advanced', 'com.palligroup.gpt3.yearlyyy']   //ChatAI-中文智能聊天机器人
  'Journal_iOS': ['PRO', 'com.pureformstudio.diary.yearly_2022_promo']   //Diarly日历
  'LemonKeepAccounts': ['VIP', 'lm_1_1month']   //旺财记账
  'mizframa': ['premium', 'mf_20_lifetime2']   //Mizframa
  'EasyClicker': ['pro', 'easyclicker.premium.discount2']   //自动点击器
  'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime']   //Imagex
  'image_upscaler': ['pro', 'yearly_sub_pro']   //Lens智图
  'DayPoem': ['Pro Access', 'com.uzero.poem.month1']   //西江诗词
  'Personal%20Best': ['pro', 'PersonalBestPro_Yearly']   //Personal Best-运动报告
  'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters', 'co.bergen.Darkroom.product.forever.everything']   //Darkroom-照片/视频编辑
  'CardPhoto': ['allaccess', 'CardPhoto_Pro']   //卡片馆-相框与复古胶片
  'OneWidget': ['allaccess', 'com.onewidget.vip']   //奇妙组件-轻巧桌面小组件
  'PinPaper': ['allaccess', 'Paper_Lifetime']   //InPaper-创作壁纸
  'Cookie': ['allaccess', 'app.ft.Bookkeeping.lifetime']   //Cookie-记账
  'MyThings': ['pro', 'xyz.jiaolong.MyThings.pro.infinity']   //物品指南
  '%E4%BA%8B%E7%BA%BF': ['pro', 'xyz.jiaolong.eventline.pro.lifetime']   //事线-串事成线
  'PipDoc': ['pro', 'pipdoc_pro_lifetime']   //PipDoc-画中画
  'Facebook': ['pro', 'fb_pro_lifetime']   //MetaSurf-社交网站浏览器
  'Free': ['pro', 'appspree_pro_lifetime']   //Appspree
  'Startodo': ['pro', 'pro_lifetime']   //Startodo
  'Browser': ['pro', 'pro_zoomable']   //Zoomable-桌面浏览器
  'YubePiP': ['pro', 'piptube_pro_lifetime']   //YubePiP-油管播放器
  'PrivateBrowser': ['pro', 'private_pro_lifetime']   //Brovacy-隐私浏览器
  'Photo%20Cleaner': ['premium', 'com.monocraft.photocleaner.lifetime.3']   //照片清理Photo Cleaner
  'bluredit': ['Premium', 'net.kaleidoscope.bluredit.premium1']   //bluredit-模糊视频&照片
  'TouchRetouchBasic': ['premium', 'tr5_yearlysubsc_15dlrs_2']   //TouchRetouch-水印清理
  'TimeFinder': ['pro', 'com.lukememet.TimeFinder.Premium']   //TimeFinder-提醒App
  'Alpenglow': ['newPro', 'ProLifetime']   //Alpenglow-日出日落
  'Decision': ['com.nixwang.decision.entitlements.pro', 'com.nixwang.decision.pro.annual']   //小决定-选择困难症克星
  'ElementNote': ['pro', 'com.soysaucelab.element.note.lifetime']   //ElementNote-笔记&PDF
  'Noto%20%E7%AC%94%E8%AE%B0': ['pro', 'com.lkzhao.editor.full']   //Noto-笔记
  'Tangerine': ['Premium', 'PremiumMonthly']   //Tangerine-习惯与情绪追踪
  'Email%20Me': ['premium', 'ventura.media.EmailMe.premium.lifetime']   //Email Me-给自己发邮箱
  'Brass': ['pro', 'brass.pro.annual']   //Brass-定制图标&小组件
  'Happy%3ADays': ['pro', 'happy_999_lifetime']   //Happy:Days-小组件App
  'Aphrodite': ['all', 'com.ziheng.aphrodite.onetime']   //Aphrodite-啪啪啪日历
  'apollo': ['all', 'com.ziheng.apollo.onetime']   //Apollo-记录影视
  'widget_art': ['all', 'com.ziheng.widgetart.onetime']   //WidgetArt-自定义小组件
  'audiomack-iphone': ['Premium1', 'com.audiomack.premium.2022']   //AudioMack-音乐App
  'MallocVPN': ['IOS_PRO', 'malloc_yearly_vpn']   //Malloc VPN
  'WhiteCloud': ['allaccess', 'wc_pro_1y']   //白云天气
  'Spark': ['premium', 'spark_5999_1y_1w0']   //Spark_Mail-邮箱管理
  'Grow': ['grow.pro', 'grow_lifetime']   //Grow-健康运动
  'NotePlan': ['premium', 'co.noteplan.subscription.personal.annual']   //NotePlan
  'vibes': ['patron', 'com.andyworks.vibes.yearlyPatron']   //NotBoring-Vibes个性化音乐
  'simple-weather': ['patron', 'com.andyworks.weather.yearlyPatron']   //NotBoring-天气
  'streaks': ['patron', 'com.andyworks.weather.yearlyPatron']   //NotBoring-习惯
  'andyworks-calculator': ['patron', 'com.andyworks.weather.yearlyPatron']   //NotBoring-计算器
  'simple-timer': ['patron', 'com.andyworks.weather.yearlyPatron']   //NotBoring-时间
  'Harukong': ['premium', 'com.bluesignum.harukong.lifetime.premium']   //天天豆-日记应用
  'UTC': ['Entitlement.Pro', 'tech.miidii.MDClock.subscription.month']   //花样文字
  'OffScreen': ['Entitlement.Pro', 'tech.miidii.offscreen.pro']   //OffScreen-自律番茄钟
  '%E8%B0%9C%E5%BA%95%E9%BB%91%E8%83%B6': ['Entitlement.Pro', 'tech.miidii.MDVinyl.lifetime']   //谜底黑胶
  '%E8%B0%9C%E5%BA%95%E6%97%B6%E9%92%9F': ['Entitlement.Pro', 'tech.miidii.MDClock.pro']   //目标地图
  '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': ['pro', 'com.happydogteam.relax.lifetimePro']   //
  'APTV': ['Pro', 'com.kimen.aptvpro.lifetime']   //APTV
  'Seamless': ['Seamless.Pro', 'net.shinystone.Seamless.Pro']   //Seamless同步
  'Anybox': ['pro', 'cc.anybox.Anybox.annual']   //Anybox-跨平台书签管理
  'ScannerPro': ['plus', 'com.chxm1024.premium.yearly']   //Scanner Pro-文档扫描
  'Pillow': ['premium', 'com.neybox.pillow.premium.year']   //Pillow-睡眠周期跟踪
  'Taio': ['full-version', 'taio_1651_1y_2w0_std_v2']   //Tiao
  'CPUMonitor': ['Pro', 'com.mars.cpumonitor_removeAd']   //手机硬件管家
  'totowallet': ['all', 'com.ziheng.totowallet.onetimepurchase']   //图图记账
  '1Blocker': ['premium', 'blocker.ios.iap.lifetime']   //1Blocker-广告拦截
  'VSCO': ['pro', 'vscopro_global_5999_annual_7D_free' }   //VSCO-照片与视频编辑

};
// 2099-12-18T01:04:17Z
// =========    固定部分  ========= // 
// =========  @mikephie76 ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="由 mikephie 自用！";var mikephie={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2088-08-08T08:08:08Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2022-09-08T01:04:18Z",purchase_date:"2022-09-08T01:04:17Z",store:"app_store"},mikephie76={grace_period_expires_date:null,purchase_date:"2022-09-08T01:04:17Z",product_identifier:"com.mikephie.premium.yearly",expires_date:"2088-08-08T08:08:08Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(mikephie76.product_identifier=s,obj.subscriber.subscriptions[s]=mikephie):obj.subscriber.subscriptions["com.mikephie.premium.yearly"]=mikephie,obj.subscriber.entitlements[e]=mikephie76}else obj.subscriber.subscriptions["com.mikephie.premium.yearly"]=mikephie,obj.subscriber.entitlements.pro=mikephie76;$done({body:JSON.stringify(obj)});