/*************************************

// iTunes-系列解锁合集（合并版）
// 更新日期：2024-11-23


[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/iTunes.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/

// 自定义信息
const RECEIPT_DATE = {
  MS: "1731294671000",
  GMT: "2024-11-11 11:11:11 Etc/GMT",
  PST: "2024-11-11 11:11:11 America/Los_Angeles"
};

const EXPIRES_DATE = {
  MS: "3742762088000",
  GMT: "2088-08-08 08:08:08 Etc/GMT",
  PST: "2088-08-08 06:06:06 America/Los_Angeles"
};

const RECEIPT_VALUES = {
  TRANSACTION_ID: "300002066031506"
};

var mikephie = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const bundle_id = mikephie.receipt["bundle_id"] || mikephie.receipt["Bundle_Id"];
const yearid = `${bundle_id}.year`;
const yearlyid = `${bundle_id}.yearly`;
const yearlysubscription = `${bundle_id}.yearlysubscription`;
const lifetimeid = `${bundle_id}.lifetime`;

const list = {
  
// Mikephie 自用 
  '%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86%E5%99%A8': { cm: 'timea', hx: 'hxpda', id: "com.mobislet.files.yearly", latest: "mikephie" },  //文件管理器
  'com.Spin.The.Wheel.Random.Picker.decision.maker': { cm: 'timeb', hx: 'hxpda', id: "com.Spin.The.Wheel.Random.Picker.decision.maker.lifetime", latest: "mikephie" },  //RandomSpin
  'YinzhangMaster': { cm: 'timeb', hx: 'hxpda', id: "com.xiaoqi.seal.forever", latest: "mikephie" },  //印章大师
  'com.cuilingshi.flipclock': { cm: 'timeb', hx: 'hxpda', id: "FlipClockProVersion", latest: "mikephie" },  //翻页时钟
  '%E6%88%90%E8%AA%9E%E7%8C%9C%E7%8C%9C': { cm: 'timea', hx: 'hxpda', id: "com.agedstudio.word.puzzle.chengyucaicai.yearly", latest: "mikephie" },  //成语猜猜
  'Cam Translator': { cm: 'timed', hx: 'hxpda', id: "co.vulcanlabs.pictranslator.lifetime", ids: "co.vulcanlabs.pictranslator.offlinelifetime1", latest: "mikephie" },  //Cam Translator
  'VLLO': { cm: 'timea', hx: 'hxpda', id: "com.vimosoft.vllo.premium3.annually_subscription", latest: "mikephie" },  //VLLO
  'com.casttv.remotetv': { cm: 'timeb', hx: 'hxpda', id: "liftetime2", latest: "mikephie" }, //TVRemote电视遥控器
  'com.eleven.chatgpt': { cm: 'timea', hx: 'hxpda', id: "com.chatgpt.yearly", latest: "mikephie" },  //ChatAI
  'ChickAlarmClock': { cm: 'timea', hx: 'hxpda', id: "com.ChickFocus.ChickFocus.yearly_2023_promo", latest: "mikephie" },  //小鸡专注
  'iVCam': { cm: 'timeb', hx: 'hxpda', id: "ivcam.full", latest: "mikephie" },//iVCam-电脑摄像头
  'ProKnockOut': { cm: 'timeb', hx: 'hxpda', id: "com.knockout.SVIP.50off", latest: "mikephie" },  //ProKnockOut
  'Prettya': { cm: 'timeb', hx: 'hxpda', id: "com.floatcamellia.prettyup.onetimepurchase", latest: "mikephie" },  //PrettyUp视频P图
  'TWWeatherMajor': { cm: 'timeb', hx: 'hxpda', id: "com.highonemob.weather.base.w", latest: "mikephie" },  //TWWeatherMajor
  'UCamera': { cm: 'timea', hx: 'hxpda', id: "644377109928", latest: "mikephie" },  //证件照高清版-最终版解锁V1.74
  'com.pocket.photo': { cm: 'timea', hx: 'hxpda', id: "com.pocket.photo.yearly", latest: "mikephie" },  //一寸证件照
  'HashPhotos': { cm: 'timeb', hx: 'hxpda', id: "com.kobaltlab.HashPhotos.iap.allinone.free", latest: "mikephie" },  //HashPhotos
  'AllMyBatteries': { cm: 'timeb', hx: 'hxpda', id: "AllMyBatteries_Ultimate", latest: "mikephie" }, //AllMyBatteries-电池管家
  'Subscriptions': { cm: 'timea', hx: 'hxpda', id: "com.touchbits.subscriptions.iap.pro.yearly", latest: "mikephie" },  //订阅通
  'TimeCut': { cm: 'timea', hx: 'hxpda', id: "com.floatcamellia.hfrslowmotion.forevervip", latest: "mikephie" },  //TimeCut
  'imgplay': { cm: 'timea', hx: 'hxpda', id: "me.imgbase.imgplay.subscriptionYearly", latest: "mikephie" },  //imgPlay
  'intolive': { cm: 'timea', hx: 'hxpda', id: "me.imgbase.intolive.proSubYearly", latest: "mikephie" }, //intolive-实况壁纸制作器
  'PhotosSorter': { cm: 'timeb', hx: 'hxpda', id: "sorter.pro.ipa", latest: "mikephie" }, //Sorter-相册整理
  'OneExtractor': { cm: 'timeb', hx: 'hxpda', id: "com.OneExtractor.Video.Forever", latest: "mikephie" }, //视频提取器
  'Xfuse': { cm: 'timeb', hx: 'hxpda', id: "com.xfuse.ProVision", latest: "mikephie" }, //磁力宅播放器
  'Boom': { cm: 'timeb', hx: 'hxpda', id: "com.globaldelight.iBoom.LifetimeDiscountPack", latest: "mikephie" }, //Boom-感受音乐
  'com.BertonYc.ScannerOCR': { cm: 'timeb', hx: 'hxpda', id: "Scanner_Subscibe_Permanent", latest: "mikephie" }, //万能扫描王
  'darkWeb': { cm: 'timea', hx: 'hxpda', id: "dforce_unlock_all_functions", latest: "mikephie" }, //DForce-Safari扩展
  'VideoHelper': { cm: 'timeb', hx: 'hxpda', id: "vip_service", latest: "mikephie" }, //媒关系
  'WiseMate': { cm: 'timea', hx: 'hxpda', id: "wiseart.ai.ios.week.nofree", latest: "mikephie" }, //Ever Play
  'Ever%20Play': { cm: 'timea', hx: 'hxpda', id: "om.zhangchao.AudioPlayer.subscription.oneWeek", latest: "mikephie" }, //Ever Play
  'qxwp%20copy': { cm: 'timea', hx: 'hxpda', id: "com.chowjoe.wp2free.year.pro", latest: "mikephie" },  //壁纸
  'PhimCiaj': { cm: 'timeb', hx: 'hxpda', id: "com.jiancent.calligraphymaster.lifetime", latest: "mikephie" }, //练字大师
  'CodeSnippet': { cm: 'timea', hx: 'hxpda', id: "it.beatcode.codesnippetpro.annualSubscription", latest: "mikephie" }, //CodeSnippet
  'VDIT': { cm: 'timea', hx: 'hxpda', id: "me.imgbase.videoday.profeaturesYearly", latest: "mikephie" }, //VDIT-视频转换
  'com.tinymediapower.livephotowallpapers': { cm: 'timea', hx: 'hxpda', id: "livewp_group_d_year", latest: "mikephie" }, //livephotowallpapers
  'OXNotchLockPets': { cm: 'timea', hx: 'hxpda', id: "Notchweekvip", latest: "mikephie" }, //OXNotchLockPets
  'Packet': { cm: 'timeb', hx: 'hxpda', id: "com.aaaalab.nepacket.iap.full", latest: "mikephie" }, //HTTPS抓包
  'PhotoCollagePro': { cm: 'timeb', hx: 'hxpda', id: "PHOTABLE_PREMIUM", latest: "mikephie" }, //Photable-腹肌P图神器
  'iscreen': { cm: 'timeb', hx: 'hxpda', id: "com.zerone.hidesktop.forever", latest: "mikephie" }, //iscreen
  'Pollykann': { cm: 'timeb', hx: 'hxpda', id: "vip.forever.pollykann", latest: "mikephie" }, //小鹦看看
  'iClear': { cm: 'timea', hx: 'hxpda', id: "com.youthpe.retake.yearly", latest: "mikephie" }, //iClear
  'IconChange': { cm: 'timea', hx: 'hxpda', id: "iconeryearvip", latest: "mikephie" },  //iconser图标更换
  'life.journal.diary': { cm: 'timeb', hx: 'hxpda', id: "life.journal.diary.lifetime", latest: "mikephie" },  //Today日记
  'com.floatcamellia.motionninja': { cm: 'timea', hx: 'hxpda', id: "com.floatcamellia.motionninja.yearlyvip", latest: "mikephie" },  //MotionNinja
  'com.iuuapp.audiomaker': { cm: 'timed', hx: 'hxpda', id: "com.iuuapp.audiomaker.cloud.year", ids: "com.iuuapp.audiomaker.removeads", latest: "mikephie" },  //音频剪辑
  'com.alphamobiletech.bodyApp': { cm: 'timeb', hx: 'hxpda', id: "Bodyapp_Forever", latest: "mikephie" }, //Bodyapp-身材修图软件
  'com.alphamobiletech.facey': { cm: 'timeb', hx: 'hxpda', id: "Facey_Forever", latest: "mikephie" }, //Facey-专业彩妆P图神器


// 来自叮当猫
  'com.cuilingshi.flipclock': { cm: 'timeb', hx: 'hxpda', id: "FlipClockProVersion", latest: "mikephie" },  //翻页时钟
  'com.maine.aifill': { cm: 'timeb', hx: 'hxpda', id: "com.maine.aifill.unlimited", latest: "mikephie" },  //AI FILL-智能填充.换衣/换背景
  'DeviceFinder': { cm: 'timeb', hx: 'hxpda', id: "com.wonderfind.lifetime", latest: "mikephie" },  //Wonderfind-设备查找
  'Graphionica': { cm: 'timea', hx: 'hxpda', id: "premium_year", latest: "mikephie" },  //Graphionica-限时动态拼版图片
  'AIAssistant': { cm: 'timea', hx: 'hxpda', id: "AIchat_1w_7.99_trial", latest: "mikephie" },  //AIAssistant
  'MonitorPlus': { cm: 'timeb', hx: 'hxpda', id: "com.unhonin.MonitorPlus.proversion", latest: "mikephie" },  //Monitor+
  'MessageHold': { cm: 'timeb', hx: 'hxpda', id: "com.messagehold.forever", latest: "mikephie" },  //拦截盾
  'co.vulcanlabs': { cm: 'timeb', hx: 'hxpda', id: lifetimeid, latest: "mikephie" },  //vulcanlabs合集
  'WallpaperWidget': { cm: 'timea', hx: 'hxpda', id: "com.widget.theme.yearly.3dayfree", latest: "mikephie" }, //壁纸主题(需试用)
  'ProREC': { cm: 'timea', hx: 'hxpda', id: "ProAudioCamera_Annual", latest: "mikephie" }, //ProREC-相机
  'Period': { cm: 'timeb', hx: 'hxpda', id: "com.hanchongzan.book.vip", latest: "mikephie" }, //闪电记账
  'TypeOn%20Keyboard': { cm: 'timeb', hx: 'hxpda', id: "com.hanchongzan.book.vip", latest: "mikephie" }, //TypeOn
  'BookReader': { cm: 'timea', hx: 'hxpda', id: "com.reader.1year", latest: "mikephie" }, //阅读器-小说阅读器
  'BeatStation': { cm: 'timea', hx: 'hxpda', id: "BS_Pro_Yearly", latest: "mikephie" }, //BeatStation-节奏工作站
  'FastPlayer': { cm: 'timea', hx: 'hxpda', id: "VideoPlayer_ProVersion", latest: "mikephie" }, //万能播放器
  'SimpleNotation': { cm: 'timeb', hx: 'hxpda', id: "com.xinlin.notation.once", latest: "mikephie" }, //简谱大师
  'ChordMaster': { cm: 'timeb', hx: 'hxpda', id: "com.chordMaster.once", latest: "mikephie" }, //MusicTotor-识谱大师
  'HRV': { hx: 'hxpdc', id: "com.stress.test.record.yearly", latest: "mikephie" },  //解压小橘子(需试用)
  'RBrowser': { cm: 'timea', hx: 'hxpda', id: "com.mm.RBroswer.product11", latest: "mikephie" }, //R浏览器(需试用)
  'VideoLab': { cm: 'timea', hx: 'hxpda', id: "com.jellybus.VideoLab.IAP.PRO7999", latest: "mikephie" },//VideoLab
  'Filterra': { cm: 'timea', hx: 'hxpda', id: "com.filterra.wtonetimepurchase", latest: "mikephie" },//Filterra
  'MOLDIV': { cm: 'timea', hx: 'hxpda', id: "com.jellybus.Moldiv.IAP.PRO7999", latest: "mikephie" },//MOLDIV
  'PICSPLAY': { cm: 'timea', hx: 'hxpda', id: "com.jellybus.PicsPlay2.IAP.PRO5999", latest: "mikephie" },//PICSPLAY
  'Rookie': { cm: 'timea', hx: 'hxpda', id: "com.jellybus.Rookie.IAP.PRO5999", latest: "mikephie" },//RKCAM
  'MoneyWiz': { cm: 'timea', hx: 'hxpda', id: "com.moneywiz.personalfinance.1year", latest: "mikephie" }, //MoneyWiz-个人财务
  'qxzs': { cm: 'timeb', hx: 'hxpda', id: "yongjiu", latest: "mikephie" },//心率广播
  'Overdrop': { cm: 'timeb', hx: 'hxpda', id: "com.weather.overdrop.forever", latest: "mikephie" }, //Overdrop-天气预报
  'PDFReaderPro%20Free': { cm: 'timeb', hx: 'hxpda', id: "com.pdfreaderpro.free.member.all_access_pack_permanent_license.001", latest: "mikephie" }, //PDFReaderProFree
  'Digital%20Planner': { cm: 'timea', hx: 'hxpda', id: "com.softwings.DigitalPlanner.1year", latest: "mikephie" }, //电子手帐
  'SuperMandarin': { cm: 'timea', hx: 'hxpda', id: "pth_vip_year", latest: "mikephie" }, //普通话水平测试
  'SuperQuestion': { cm: 'timea', hx: 'hxpda', id: "qtzs_vip_year", latest: "mikephie" }, //真题全刷
  'SuperElves': { cm: 'timeb', hx: 'hxpda', id: "com.SuperElves.Answer.Forever", latest: "mikephie" }, //答案精灵
  'SuperDriving': { cm: 'timeb', hx: 'hxpda', id: "jiakao_vip_forever", latest: "mikephie" }, //驾考学典
  'JCCalendar': { cm: 'timeb', hx: 'hxpda', id: "com.sjc.calendar.vip.lifelong", latest: "mikephie" }, //简约日历
  'com.yanxia.ChsMedical': { cm: 'timeb', hx: 'hxpda', id: "VIPUser", latest: "mikephie" }, //中医精华
  'SuperPointer': { cm: 'timeb', hx: 'hxpda', id: "com.SuperPointer.Location.Forever", latest: "mikephie" }, //海拔指南针
  'SnakeReader': { cm: 'timeb', hx: 'hxpda', id: "com.lyran.snakescanner.premium18", latest: "mikephie" }, //开卷阅读
  'FourthPPT': { cm: 'timeb', hx: 'hxpda', id: "com.FourthPPT.Mobile.Forever", latest: "mikephie" }, //PPT制作软件
  'com.Colin.Colors': { cm: 'timea', hx: 'hxpda', id: "com.colin.colors.annualVIP", latest: "mikephie" }, //搜图
  'MyAlbum': { cm: 'timeb', hx: 'hxpda', id: "com.colin.myalbum.isUpgradeVip", latest: "mikephie" }, //Cleaner-照片管理
  'VideoEditor': { cm: 'timeb', hx: 'hxpda', id: "com.god.videohand.alwaysowner", latest: "mikephie" }, //VideoShot
  'PhotoMovie': { cm: 'timea', hx: 'hxpda', id: "com.mediaeditor.photomovie.year", latest: "mikephie" }, //PhotoMovie-照片视频
  'ShotOn': { cm: 'timeb', hx: 'hxpda', id: "com.colin.shoton.forevervip", latest: "mikephie" }, //ShotOn
  'com.floatcamellia.motiok': { cm: 'timea', hx: 'hxpda', id: "com.floatcamellia.motiok.vipforever", latest: "mikephie" },  //Hype_Text-AE特效片制作
  'POPOLockScreenWidgetable': { cm: 'timea', hx: 'hxpda', id: "com.widget.fightenegery.yearly", latest: "mikephie" },  //多彩壁纸
  'GreetingScanner': { cm: 'timea', hx: 'hxpda', id: "com.alphaplus.greetingscaner.w.b", latest: "mikephie" },  //扫描识别王
  'FancyCamPlus': { cm: 'timea', hx: 'hxpda', id: "com.alphaplus.fancycam.year.198", latest: "mikephie" },  //悦颜相机
  'Again': { cm: 'timeb', hx: 'hxpda', id: "com.owen.again.profession", latest: "mikephie" },  //Again-稍后阅读器
  'remotelg': { cm: 'timeb', hx: 'hxpda', id: "com.gqp.remotelg.lifetime", latest: "mikephie" },  //UniversalRemoteTV+ 遥控器
  'Notebook': { cm: 'timea', hx: 'hxpda', id: "com.zoho.notebook.ios.personal.yearly", latest: "mikephie" },  //Notebook
  'com.damon.dubbing': { cm: 'timea', hx: 'hxpda', id: "com.damon.dubbing.vip12", latest: "mikephie" },  //有声英语绘本
  'ZHUBEN': { cm: 'timea', hx: 'hxpda', id: "com.xiaoyu.yue", latest: "mikephie" },  //有声英语绘本
  'XIAOTangHomeParadise': { cm: 'timea', hx: 'hxpda', id: "com.yuee.mo2", latest: "mikephie" },  //鸿海幼儿启蒙
  'film': { cm: 'timea', hx: 'hxpda', id: "pro_auto_subscribe_year_ovs", latest: "mikephie" },  //胶卷相机
  'Muza': { cm: 'timea', hx: 'hxpda', id: "com.appmuza.premium_year", latest: "mikephie" },  //Muza-修图APP
  'StandbyWidget': { cm: 'timed', hx: 'hxpda', id: "com.standby.idream.year.68", ids: "standbyus.nonconsume.missingyou", latest: "mikephie" },  //StandBy_Us-情侣定位
  'Mango6Minute': { cm: 'timea', hx: 'hxpda', id: "576170870", latest: "mikephie" },  //6分钟英语
  'Photo%20Cutout': { cm: 'timea', hx: 'hxpda', id: "com.icepine.allyear", latest: "mikephie" },  //轻松扣图
  'cleanPhone': { cm: 'timea', hx: 'hxpda', id: "com.clean.year", latest: "mikephie" },  //爱机清理
  'ppt': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.pptios.yearly", latest: "mikephie" },  //手机PPT制作
  'WasteCat': { cm: 'timeb', hx: 'hxpda', id: "dev.sanjin.WasteCat.PermanentVip", latest: "mikephie" },  //垃圾贪吃猫
  'MeowTalk': { cm: 'timea', hx: 'hxpda', id: "meowtalk.month.basic.autorenewable.subscription", latest: "mikephie" },  //喵说
  'habitdot': { cm: 'timeb', hx: 'hxpda', id: "habitdots_pro_forever", latest: "mikephie" },  //习惯点点
  'stretchworkout': { cm: 'timea', hx: 'hxpda', id: "com.abishkking.premiumYearStretch", latest: "mikephie" },  //拉伸运动
  'Planist': { cm: 'timed', hx: 'hxpda', id: "org.zrey.planist.main", ids: "org.zrey.planist.lifetime", latest: "mikephie" },  //Planist
  'com.uzstudio.avenuecast.ios': { cm: 'timeb', hx: 'hxpda', id: "1001", latest: "mikephie" },  //凡视知音
  'CongZhenBaZi': { cm: 'timeb', hx: 'hxpda', id: "vip_forever_78", latest: "mikephie" },  //八字排盘-从真版
  'CongZhenQiMen': { cm: 'timea', hx: 'hxpda', id: "cn.congzhen.CongZhenQiMen.yearlyplan", latest: "mikephie" },  //奇门遁甲
  'ProFit': { cm: 'timea', hx: 'hxpda', id: "com.maxty.gofitness.yearlyplan", latest: "mikephie" },  //ProFit锻炼计划
  'FitnessBodybuildingVGFIT': { cm: 'timea', hx: 'hxpda', id: "com.vgfit.fitnessvip.yearly", latest: "mikephie" },  //fitnessvip
  'Water%20Reminder': { cm: 'timea', hx: 'hxpda', id: "com.vgfit.premiumtracker.year", latest: "mikephie" },  //WaterReminder水提醒
  '%E7%91%9C%E4%BC%BD': { cm: 'timea', hx: 'hxpda', id: "com.vgfit.yoga.yearly", latest: "mikephie" },  //瑜伽
  'GPSMaker': { cm: 'timea', hx: 'hxpda', id: "theodolite_vip_year", latest: "mikephie" },  //指南针定位
  'wrongbook': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.wrongbookios.yearly", latest: "mikephie" },  //错题宝
  'excel': { cm: 'timea', hx: 'hxpda', id: "com.gamawh.excelerios.yearly", latest: "mikephie" },  //办公文档
  'Future%20Baby': { cm: 'timea', hx: 'hxpda', id: "com.nilu.faceseer.yearly", latest: "mikephie" },  //宝宝长相预测
  'Smoke': { cm: 'timea', hx: 'hxpda', id: "smoke19870727", latest: "mikephie" },  //今日香烟
  'com.wms.hrv': { cm: 'timea', hx: 'hxpda', id: "com.wms.hrv.pro", latest: "mikephie" },  //ECG+
  'AppAlarmIOS': { cm: 'timea', hx: 'hxpda', id: "alarm.me.vip.year.tier1", latest: "mikephie" },  //Me+
  'Tinglee': { cm: 'timea', hx: 'hxpdb', id: "vip.forever.tinglee", latest: "mikephie" },  //英语听听
  'NoteKeys': { cm: 'timea', hx: 'hxpda', id: "notekeys_access_weekly", latest: "mikephie" },  //五线谱
  'SheetMusicPro': { cm: 'timea', hx: 'hxpda', id: "sheetmusicpro.yearwithtrial", latest: "mikephie" },  //乐谱吧
  'ProtractorEdge': { cm: 'timea', hx: 'hxpda', id: "ProtracatorEdge.PremiumAccess", latest: "mikephie" },  //量角器
  'Piano%20Plus': { cm: 'timea', hx: 'hxpda', id: "kn_access_weekly", latest: "mikephie" },  //Piano Plus
  'Notation%20Pad': { cm: 'timea', hx: 'hxpda', id: "np_access_weekly", latest: "mikephie" },  //Notation Pad
  'Guitar%20Notation': { cm: 'timea', hx: 'hxpda', id: "gn_access_weekly", latest: "mikephie" },  //Guitar Notation
  'Piano%20Fantasy': { cm: 'timea', hx: 'hxpda', id: "com.lotuz.PianoFantasy.weekwithtrail", latest: "mikephie" },  //钢琴幻想
  'Piano%20Rush': { cm: 'timea', hx: 'hxpda', id: "com.lotuz.PianoPro.weekwithtrail", latest: "mikephie" },  //钢琴大师
  'com.richads.saucyart': { cm: 'timea', hx: 'hxpda', id: "com.richads.saucyart.sub.quarterly_29.99", latest: "mikephie" },  //Perky
  'SurveyorPro': { cm: 'timea', hx: 'hxpda', id: "com.celiangyuan.SurveyorPro.OneYear", latest: "mikephie" },  //测量员Pro
  'com.ydatong.dingdone': { cm: 'timeb', hx: 'hxpda', id: "com.ydatong.dingdone.vip.forever", latest: "mikephie" },  //叮当代办
  'Dial': { cm: 'timea', hx: 'hxpda', id: "2104", latest: "mikephie" },  //T9拨号
  'LingLongShouZ': { cm: 'timea', hx: 'hxpda', id: "zhenwushouzhangQuarterlyPlus", latest: "mikephie" },  //Cute手帐软件
  'MediaEditor': { cm: 'timeb', hx: 'hxpda', id: "alwaysowner", latest: "mikephie" },  //剪影(需试用)
  'UniversTranslate': { cm: 'timea', hx: 'hxpda', id: "com.univers.translator.tool.year", latest: "mikephie" },  //翻译官(需试用)
  'com.gostraight.smallAccountBook': { cm: 'timeb', hx: 'hxpda', id: "ForeverVIPPayment", latest: "mikephie" },  //iCost记账(需要购买)
  'ZJTBiaoGe': { cm: 'timea', hx: 'hxpda', id: "zhangjt.biaoge.monthvip", latest: "mikephie" },  //表格手机版
  'MiniMouse': { cm: 'timea', hx: 'hxpda', id: "minimouse_vip_1year", latest: "mikephie" },  //MiniMouse
  'Paste%20Keyboard': { cm: 'timea', hx: 'hxpda', id: "com.keyboard.1yetr", latest: "mikephie" },  //复制和粘贴键盘
  'EWA': { cm: 'timea', hx: 'hxpda', id: "com.ewa.renewable.subscription.year8", latest: "mikephie" },  //EWA-学习外语
  'BuBuSZ': { cm: 'timea', hx: 'hxpda', id: "quaVersion", latest: "mikephie" },  //BuBu手帐
  'CapyMood': { cm: 'timea', hx: 'hxpda', id: "com.paha.CapyMood.year", latest: "mikephie" },  //CapyMood
  'xyz.iofree.lifenotes': { cm: 'timea', hx: 'hxpda', id: "xyz.iofree.lifelog.pro.yearly", latest: "mikephie" },  //人生笔记(需试用)
  'com.icandiapps.nightsky': { cm: 'timea', hx: 'hxpda', id: "com.icandiapps.ns4.annual", latest: "mikephie" },  //星空
  'Wallpapers': { cm: 'timea', hx: 'hxpda', id: "wallpaperworld.subscription.yearly.12.notrial", latest: "mikephie" },  //Wallpaper Tree壁纸
  'com.yumiteam.Kuki.ID': { cm: 'timea', hx: 'hxpda', id: "com.yumiteam.Kuki.ID.2", latest: "mikephie" },  //PicsLeap-美飞
  'com.quangtm193.picpro': { cm: 'timea', hx: 'hxpda', id: "com.quangtm193.picpro1year", latest: "mikephie" },  //PicPro-人工智能照片编辑器
  'Storybeat': { cm: 'timea', hx: 'hxpda', id: "yearly_1", latest: "mikephie" },  //Storybeat
  'com.smartgymapp.smartgym': { cm: 'timea', hx: 'hxpda', id: "com.smartgymapp.smartgym.premiumpersonaltraineryearly", latest: "mikephie" },  //SmartGym
  'Ptime': { cm: 'timea', hx: 'hxpda', id: "com.subscribe.pro.year", latest: "mikephie" },  //Ptime-拼图(需试用)
  'Prookie': { cm: 'timea', hx: 'hxpda', id: "prookie.month.withtrial.0615", latest: "mikephie" },  //AI灵绘
  'BodyTune': { cm: 'timea', hx: 'hxpda', id: "Bodypro1", latest: "mikephie" },  //BodyTune-瘦身相机
  'Caculator': { cm: 'timea', hx: 'hxpda', id: "calc_Unlock_1", latest: "mikephie" },  //计算器+
  'killer.sudoku.free.brain.puzzle': { cm: 'timea', hx: 'hxpda', id: "ks.i.iap.premium", latest: "mikephie" },  //杀手数独
  'sudoku.puzzle.free.game.brain': { cm: 'timea', hx: 'hxpda', id: "sudoku.i.sub.vvip.p1y", latest: "mikephie" },  //数独
  'One%20Markdown': { cm: 'timeb', hx: 'hxpda', id: "10012", latest: "mikephie" },  //One Markdown
  'MWeb%20iOS': { cm: 'timeb', hx: 'hxpda', id: "10001", latest: "mikephie" },  //MWeb-编辑器/笔记/发布
  'NYMF': { cm: 'timea', hx: 'hxpda', id: "com.nymf.app.premium_year", latest: "mikephie" },  //Nymf艺术照片
  'com.lockwidt.cn': { cm: 'timea', hx: 'hxpda', id: "com.lockwidt.cn.member", latest: "mikephie" },  //壁纸16
  'Utsuki': { cm: 'timea', hx: 'hxpda', id: "KameePro", latest: "mikephie" },  //梦见账本
  'Processing': { cm: 'timeb', hx: 'hxpda', id: "wtf.riedel.processing.lifetime", latest: "mikephie" },  //Processing-软件开发工具
  'one%20sec': { cm: 'timeb', hx: 'hxpda', id: "wtf.riedel.onesec.lifetime", latest: "mikephie" },  //onesec-番茄钟
  'com.skysoft.pencilsketch': { cm: 'timea', hx: 'hxpda', id: "com.skysoft.pencilsketch.subscription.yearly", latest: "mikephie" },  //铅笔画(需试用)
  'com.instagridpost.rsigp': { cm: 'timea', hx: 'hxpda', id: "com.GridPost.oneyearplus", latest: "mikephie" },  //九宫格切图
  'com.skysoft.picsqueen': { cm: 'timea', hx: 'hxpda', id: "com.skysoft.picsqueen.subscription.yearly", latest: "mikephie" },  //PicsQueen-AI绘图
  'com.skysoft.removalfree': { cm: 'timea', hx: 'hxpda', id: "com.skysoft.removalfree.subscription.yearly3", latest: "mikephie" },  //神奇消除笔-图片消除
  'com.skysoft.facecartoon': { cm: 'timea', hx: 'hxpda', id: "com.skysoft.facecartoon.subscription.yearly", latest: "mikephie" },  //卡通头像
  'Jennie%20AI': { cm: 'timea', hx: 'hxpda', id: "com.skysoft.text2img.vip.yearly", latest: "mikephie" },  //Jennie AI制作图片
  'MGhostLens': { cm: 'timea', hx: 'hxpda', id: "com.ghostlens.premium1month", latest: "mikephie" },  //魔鬼相机
  'Luminous': { cm: 'timea', hx: 'hxpda', id: "com.spacemushrooms.weekly", latest: "mikephie" },  //光影修图
  'RitmoVideo': { cm: 'timea', hx: 'hxpda', id: "com.zhk.hidebox.yearly", latest: "mikephie" },  //RitmoVideo
  'PerfectImage': { cm: 'timea', hx: 'hxpda', id: "Perfect_Image_VIP_Yearly", latest: "mikephie" },  //完美影像(需试用)
  'moment': { cm: 'timea', hx: 'hxpda', id: "PYJMoment2", latest: "mikephie" },  //片羽集(需试用)
  'Planner%20Plus': { cm: 'timea', hx: 'hxpda', id: "com.btgs.plannerfree.yearly", latest: "mikephie" },  //PlannerPro-日程安排
  'HiddenBox': { cm: 'timec', hx: 'hxpdb', version: "1" },//我的书橱
  'Synthesizer': { cm: 'timea', hx: 'hxpda', id: "com.qingxiu.synthesizer.mon", latest: "mikephie" },  //语音合成
  'ContractMaster': { cm: 'timea', hx: 'hxpda', id: "com.qingxiu.contracts.monthly", latest: "mikephie" },  //印象全能王
  'MyDiary': { cm: 'timea', hx: 'hxpda', id: "diary.yearly.vip.1029", latest: "mikephie" },  //我的日记
  'Translator': { cm: 'timea', hx: 'hxpda', id: "trans_sub_week", latest: "mikephie" },  //翻译家
  'ToDoList': { cm: 'timea', hx: 'hxpda', id: "todolist.subscription.yearly", latest: "mikephie" },  //ToDoList(需试用)
  'Idea': { cm: 'timea', hx: 'hxpda', id: "top.ideaapp.ideaiOS.membership.oneyear", latest: "mikephie" },  //灵感(需试用)
  'ZeroTuImg': { cm: 'timea', hx: 'hxpda', id: "ZeroTuImgPlus", latest: "mikephie" },  //Zero壁纸
  'com.traveltao.ExchangeAssistant': { cm: 'timea', hx: 'hxpda', id: "lxbyplus", latest: "mikephie" },  //极简汇率(需试用)
  'ServerKit': { cm: 'timea', hx: 'hxpda', id: "com.serverkit.subscription.year.a", latest: "mikephie" },  //服务器助手
  'RawPlus': { cm: 'timea', hx: 'hxpda', id: "com.dynamicappdesign.rawplus.yearlysubscription", latest: "mikephie" },  //Raw相机
  'OrderGenerator': { cm: 'timeb', hx: 'hxpda', id: "oder_pay_forever", latest: "mikephie" },  //订单生成
  'GenerateAllOrdersTool': { cm: 'timea', hx: 'hxpda', id: "Order_Vip_010", latest: "mikephie" },  //订单生成器(需试用)
  'MoMoShouZhang': { cm: 'timea', hx: 'hxpda', id: "shunchangshouzhangQuarterlyPlus", latest: "mikephie" },  //卡卡手账(需试用)
  'Mindkit': { cm: 'timeb', hx: 'hxpda', id: "mindkit_permanently", latest: "mikephie" },  //Mindkit
  'DailySpending': { cm: 'timea', hx: 'hxpda', id: "com.xxtstudio.dailyspending.year", latest: "mikephie" },  //Daily记账
  'Miary': { cm: 'timeb', hx: 'hxpda', id: "lifetime_sub", latest: "mikephie" },  //Miary-记录日记
  'Noted': { cm: 'timeb', hx: 'hxpda', id: "com.digitalworkroom.noted.plus.lifetime", latest: "mikephie" },  //Noted-录音笔记软件
  'BingQiTools': { cm: 'timea', hx: 'hxpda', id: "bingqi_e2", latest: "mikephie" },  //猫狗翻译
  'AnyDown': { cm: 'timeb', hx: 'hxpda', id: "com.xiaoqi.down.forever", latest: "mikephie" },  //AnyDown-下载神器
  'Reader': { cm: 'timeb', hx: 'hxpda', id: "com.xiaoqi.reader.forever", latest: "mikephie" },  //爱阅读-TXT阅读器
  'com.bestmusicvideo.formmaster': { cm: 'timea', hx: 'hxpda', id: "com.form.1yearvip", latest: "mikephie" },  //表格大师
  'ExcelSpreadSheetsWPS': { cm: 'timea', hx: 'hxpda', id: "com.turbocms.SimpleSpreadSheet.viponeyear", latest: "mikephie" },  //简易表格(需试用)
  'XinQingRiJi': { cm: 'timea', hx: 'hxpda', id: "zhiwenshouzhangQuarterlyPlus", latest: "mikephie" },  //猫咪手帐(需试用)
  'Nutrilio': { cm: 'timea', hx: 'hxpda', id: "net.nutrilio.one_year_plus", latest: "mikephie" },  //Nutrilio
  'Pixiu%E8%AE%B0%E8%B4%A6': { cm: 'timea', hx: 'hxpda', id: "com.RuoG.Pixiu.VIPYear", latest: "mikephie" },  //貔貅记账
  'AIHeader': { cm: 'timea', hx: 'hxpda', id: "com.ai.avatar.maker.month.3dayfree", latest: "mikephie" },  //AI头像馆
  'MoodTracker': { cm: 'timeb', hx: 'hxpda', id: "co.vulcanlabs.moodtracker.lifetime2", latest: "mikephie" },  //ChatSmith(美区)
  'com.dandelion.Routine': { cm: 'timeb', hx: 'hxpda', id: "membership", latest: "mikephie" },  //小日常
  'YSBrowser': { cm: 'timeb', hx: 'hxpda', id: "com.ys.pro", latest: "mikephie" },  //亚瑟浏览器
  'org.zrey.metion': { cm: 'timed', hx: 'hxpda', id: "org.zrey.metion.pro", ids: "org.zrey.metion.main", latest: "mikephie" },  //Metion-基础+Pro
  'ZenJournal': { cm: 'timea', hx: 'hxpda', id: "zen_pro", latest: "mikephie" },  //禅记
  '%E5%80%92%E6%94%BE%E6%8C%91%E6%88%98': { cm: 'timea', hx: 'hxpda', id: "com.abighead.ReverseChallenge.iap.pro.year", latest: "mikephie" },  //倒放挑战
  'com.visualmidi.app.perfectpiano.Perfect-Piano': { cm: 'timea', hx: 'hxpda', id: "auto_renew_monthly_subscription", latest: "mikephie" },  //完美钢琴
  'Straw': { cm: 'timea', hx: 'hxpda', id: "com.1year.eyedropper", latest: "mikephie" },  //吸管Pro-取色
  'vibee': { cm: 'timea', hx: 'hxpda', id: "com.vibee.year.bigchampagne", latest: "mikephie" },  //vibee-氛围歌单小组件
  'Lister': { cm: 'timea', hx: 'hxpda', id: "com.productlab.lister.yearly", latest: "mikephie" },  //Lister-计划清单
  'DrumPads': { cm: 'timeb', hx: 'hxpda', id: "com.gismart.drumpads.pro_lifetime_30", latest: "mikephie" },  //BeatMakerGo-打碟机/打击垫/DJ鼓机
  'com.photoslab.ai.writerassistant': { cm: 'timea', hx: 'hxpda', id: "com.photoslab.ai.writerassistant.year", latest: "mikephie" },  //Smart AI
  'WaterMaskCamera': { cm: 'timea', hx: 'hxpda', id: "com.camera.watermark.yearly.3dayfree", latest: "mikephie" },  //徕卡水印相机
  'ColorPaint': { cm: 'timea', hx: 'hxpda', id: "coloring.app.singingfish.year", latest: "mikephie" },  //涂色
  'SymbolKeyboard': { cm: 'timeb', hx: 'hxpda', id: "fronts.keyboard.singingfish.one", latest: "mikephie" },  //Fonts花样字体
  'com.SingingFish.SudokuGame': { cm: 'timea', hx: 'hxpda', id: "com.singingfish.sudokugame.year", latest: "mikephie" },  //数独
  'com.kuaijiezhilingdashi.appname': { cm: 'timea', hx: 'hxpda', id: "com.othermaster.yearlyvip", latest: "mikephie" },  //快捷指令库
  'LogInput': { cm: 'timea', hx: 'hxpda', id: "com.logcg.loginput", latest: "mikephie" },  //落格输入法
  'SoundLab': { cm: 'timea', hx: 'hxpda', id: "8800", latest: "mikephie" },  //合声
  'Kilonotes': { cm: 'timea', hx: 'hxpda', id: "kipa_kilonotes_quarter_subscription", latest: "mikephie" },  //千本笔记
  'YiJianKouTu': { cm: 'timea', hx: 'hxpda', id: "XiChaoYiJianKouTuPlus", latest: "mikephie" },  //一键抠图
  'FileArtifact': { cm: 'timea', hx: 'hxpda', id: "com.shengzhou.fileartifact.year", latest: "mikephie" },  //文晓生
  'Wext': { cm: 'timeb', hx: 'hxpda', id: "com.lmf.wext.life", latest: "mikephie" },  //万源阅读
  'ColorCapture': { cm: 'timeb', hx: 'hxpda', id: "10001", latest: "mikephie" },  //色采
  'xTerminal': { cm: 'timea', hx: 'hxpda', id: "xterminal.pro2", latest: "mikephie" },  //xTerminal
  'Fotoz': { cm: 'timeb', hx: 'hxpda', id: "com.kiddy.fotoz.ipa.pro", latest: "mikephie" },  //Fotoz
  'TheLastFilm': { cm: 'timea', hx: 'hxpda', id: "Filmroll_Pro_1Year", latest: "mikephie" },  //最后一卷胶片(需订阅一次)
  'Motivation': { cm: 'timea', hx: 'hxpda', id: "com.monkeytaps.motivation.premium.year3", latest: "mikephie" },  //Motivation
  'io.sumi.GridDiary2': { cm: 'timea', hx: 'hxpda', id: "io.sumi.GridDiary.pro.annually", latest: "mikephie" },  //格志
  'com.leapfitness.fasting': { cm: 'timea', hx: 'hxpda', id: "com.leapfitness.fasting.oneyear1", latest: "mikephie" },  //168轻断食
  'WidgetBox': { cm: 'timeb', hx: 'hxpda', id: "widgetlab001", latest: "mikephie" },  //小组件盒子
  'LifeTracker': { cm: 'timea', hx: 'hxpda', id: "com.dk.lifetracker.yearplan", latest: "mikephie" },  //Becord生活记录
  'WaterMinder': { cm: 'timea', hx: 'hxpda', id: "waterminder.premiumYearly", latest: "mikephie" },  //WaterMinder喝水APP
  'FileBrowser': { cm: 'timea', hx: 'hxpda', id: "com.qingcheng.filex.pro.yearly", latest: "mikephie" },  //松鼠下载
  'SilProject': { cm: 'timea', hx: 'hxpda', id: "com.sm.Alina.Pro", latest: "mikephie" },  //Alina米克锁屏--
  'com.chenxi.shanniankapian': { cm: 'timea', hx: 'hxpda', id: "com.chenxi.shannian.superNian", latest: "mikephie" },  //闪念
  'com.risingcabbage.pro.camera': { cm: 'timea', hx: 'hxpda', id: "com.risingcabbage.pro.camera.yearlysubscription", latest: "mikephie" },  //ReLens相机
  'co.bazaart.patternator': { cm: 'timea', hx: 'hxpda', id: "Patternator_Lock_Screen_Monthly", latest: "mikephie" },  //拍特内头
  '%E5%BD%95%E9%9F%B3%E4%B8%93%E4%B8%9A%E7%89%88': { cm: 'timea', hx: 'hxpda', id: "com.winat.recording.pro.yearly", latest: "mikephie" },  //录音专业版
  'cn.linfei.SimpleRecorder': { cm: 'timea', hx: 'hxpda', id: "cn.linfei.SimpleRecorder.Plus", latest: "mikephie" },  //录音机
  'com.maliquankai.appdesign': { cm: 'timec', hx: 'hxpdb', version: "1.5.8" },  //PutApp-应用收集
  'PictureScanner': { cm: 'timea', hx: 'hxpda', id: "om.picturescanner.tool.year", latest: "mikephie" },  //扫描王
  'BestColor': { cm: 'timea', hx: 'hxpda', id: "com.bestColor.tool.month", latest: "mikephie" },  //小红图
  'com.decibel.tool': { cm: 'timea', hx: 'hxpda', id: "decibel98free3", latest: "mikephie" },  //分贝测试仪
  'MeasurementTools': { cm: 'timea', hx: 'hxpda', id: "mesurementyearvip", latest: "mikephie" },  //测量工具
  'TinyPNGTool': { cm: 'timea', hx: 'hxpda', id: "com.tinypngtool.tool.weekvip", latest: "mikephie" },  //TinyPNG
  'com.biggerlens.photoretouch': { cm: 'timeb', hx: 'hxpda', id: "com.photoretouch.SVIP", latest: "mikephie" },  //PhotoRetouch消除笔P图
  'com.macpaw.iosgemini': { cm: 'timea', hx: 'hxpda', id: "com.macpaw.iosgemini.month.trial", latest: "mikephie" },  //GeminiPhotos
  'com.mematom.ios': { cm: 'timea', hx: 'hxpda', id: "MMYear", latest: "mikephie" },  //年轮3
  'com.LuoWei.aDiary': { cm: 'timea', hx: 'hxpda', id: "com.LuoWei.aDiary.yearly0", latest: "mikephie" },  //aDiary-待办日记本
  'com.zerone.hidesktop': { cm: 'timeb', hx: 'hxpda', id: "com.zerone.hidesktop.forever", latest: "mikephie" },  //iScreen-桌面小组件主题美化
  'MagicWidget': { cm: 'timea', hx: 'hxpda', id: "com.sm.widget.Pro", latest: "mikephie" },  //ColorfulWidget--小组件
  'com.tasmanic.capture': { cm: 'timea', hx: 'hxpda', id: "CTPCAPTUREYEARLY", latest: "mikephie" },  //3DScanner-绘制/测量平面图
  'com.readdle.CalendarsLite': { cm: 'timea', hx: 'hxpda', id: "com.readdle.CalendarsLite.subscription.year20trial7", latest: "mikephie" },  //Calendars-日历/计划
  'com.readdle.ReaddleDocsIPad': { cm: 'timea', hx: 'hxpda', id: "com.readdle.ReaddleDocsIPad.subscription.month10_allusers", latest: "mikephie" },  //Documents
  'com.1ps.lovetalk': { cm: 'timea', hx: 'hxpda', id: "com.1ps.lovetalk.normal.weekly", latest: "mikephie" },  //高级恋爱话术
  'tech.miidii.MDClock': { cm: 'timeb', hx: 'hxpda', id: "tech.miidii.MDClock.pro", latest: "mikephie" },  //谜底时钟
  'com.zijayrate.analogcam': { cm: 'timea', hx: 'hxpda', id: "com.zijayrate.analogcam.vipforever10", latest: "mikephie" },  //oldroll复古相机
  'WeeklyNote': { cm: 'timea', hx: 'hxpda', id: "org.zrey.weeklynote.yearly", latest: "mikephie" },  //WeeklyNote(周周记)
  'DoMemo': { cm: 'timea', hx: 'hxpda', id: "org.zrey.fastnote.yearly", latest: "mikephie" },  //DoMemo
  'CostMemo': { cm: 'timea', hx: 'hxpda', id: "org.zrey.money.yearly", latest: "mikephie" },  //CostMemo
  'iTimely': { cm: 'timea', hx: 'hxpda', id: "org.zrey.iTimely.yearly", latest: "mikephie" },  //iTimely
  'net.daylio.Daylio': { cm: 'timea', hx: 'hxpda', id: "net.daylio.one_year_pro.offer_initial", latest: "mikephie" },  //Daylio-日记
  'com.yengshine.webrecorder': { cm: 'timea', hx: 'hxpda', id: "com.yengshine.webrecorder.yearly", latest: "mikephie" },  //VlogStar-视频编辑器
  'org.skydomain.foodcamera': { cm: 'timea', hx: 'hxpda', id: "org.skydomain.foodcamera.yearly", latest: "mikephie" },  //Koloro-滤镜君
  'com.yengshine.proccd': { cm: 'timea', hx: 'hxpda', id: "com.yengshine.proccd.yearly", latest: "mikephie" },  //ProCCD相机
  'com.palmmob.pdfios': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.pdfios.168", latest: "mikephie" },  //图片PDF转换器
  'com.palmmob.scanner2ios': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.scanner2ios.396", latest: "mikephie" },  //文字扫描
  'com.palmmob.officeios': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.officeios.188", latest: "mikephie" },  //文档表格编辑
  'com.palmmob.recorder': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.recorder.198", latest: "mikephie" },  //录音转文字
  'com.7color.newclean': { cm: 'timea', hx: 'hxpda', id: "com.cleaner.salesyear", latest: "mikephie" },  //手机清理
  'Habbit': { cm: 'timea', hx: 'hxpda', id: "HabitUpYearly", latest: "mikephie" },  //习惯清单
  'com.dbmeterpro.dB-Meter-Free': { cm: 'timea', hx: 'hxpda', id: "com.dbmeterpro.premiumModeSubscriptionWithTrial", latest: "mikephie" },  //dBMeter-分贝仪(专业版)
  'com.vstudio.newpuzzle': { cm: 'timea', hx: 'hxpda', id: "com.vstudio.newpuzzle.yearlyVipFreetrail.15_99", latest: "mikephie" },  //拼图酱
  'com.jianili.Booka': { cm: 'timea', hx: 'hxpda', id: "com.jianili.Booka.pro.yearly", latest: "mikephie" },  //Booka-极简书房
  'com.ziheng.OneBox': { cm: 'timeb', hx: 'hxpda', id: "com.ziheng.OneBox", latest: "mikephie" },  //Pandora管理订阅
  'MyWorks': { cm: 'timea', hx: 'hxpda', id: "com.MyWorks.Handwritten.Year", latest: "mikephie" },  //仿手写
  'Instant%20Saver': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "mikephie" },  //InstantSocialSaver(ins下载)
  'SaveTik': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "mikephie" },  //SaveTik
  '%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86%E5%99%A8': { cm: 'timea', hx: 'hxpda', id: "com.mobislet.files.yearly", latest: "mikephie" },  //文件管理器
  'ZIP%E5%8E%8B%E7%BC%A9%E8%A7%A3%E5%8E%8B%E7%BC%A9%E5%B7%A5%E5%85%B7': { cm: 'timea', hx: 'hxpda', id: "com.mobislet.zipfile.yearly", latest: "mikephie" },  //ZIP压缩解压
  'TPTeleprompter': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "mikephie" },  //爱提词
  'com.pocket.watermark': { cm: 'timea', hx: 'hxpda', id: "com.pocket.watermark.yearly", latest: "mikephie" },  //一键水印
  'com.pocket.compress': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "mikephie" },  //压缩软件
  'com.pocket.format': { cm: 'timea', hx: 'hxpda', id: "com.pocket.format.yearly", latest: "mikephie" },  //格式转换
  'com.CalculatorForiPad.InternetRocks': { cm: 'timea', hx: 'hxpda', id: "co.airapps.calculator.year", latest: "mikephie" },  //计算器Air
  'solutions.wzp': { cm: 'timea', hx: 'hxpda', id: yearlysubscription, latest: "mikephie" },  //airapps
  'co.airapps': { cm: 'timea', hx: 'hxpda', id: yearid, latest: "mikephie" },  //airapps
  'com.internet-rocks': { cm: 'timea', hx: 'hxpda', id: yearid, latest: "mikephie" },  //airapps
  'SuperWidget': { cm: 'timea', hx: 'hxpda', id: "com.focoslive", latest: "mikephie" },  //PandaWidget小组件
  'Picsew': { cm: 'timeb', hx: 'hxpdb', id: "com.sugarmo.ScrollClip.pro"},  //Picsew截长图3.9.4版本(最新版无效)
  'vpn': { cm: 'timea', hx: 'hxpda', id: "yearautorenew", latest: "mikephie" },  //VPN-unlimited
  'TT': { cm: 'timea', hx: 'hxpda', id: "com.55panda.hicalculator.year_sub", latest: "mikephie" },  //TT_私密相册管家
  'Focos': { cm: 'timea', hx: 'hxpda', id: "com.focos.1w_t4_1w", latest: "mikephie" },  //Focos
  'com.teadoku.flashnote': { cm: 'timea', hx: 'hxpda', id: "pro_ios_ipad_mac", latest: "mikephie" },  //AnkiNote
  'com.tapuniverse.texteditor': { cm: 'timea', hx: 'hxpda', id: "com.tapuniverse.texteditor.w", latest: "mikephie" }  //TextEditor
};

//内购数据变量
const receipt = {
  "quantity": "1",
  "purchase_date_ms": RECEIPT_DATE.MS,
  "is_in_intro_offer_period": "false",
  "transaction_id": RECEIPT_VALUES.TRANSACTION_ID,
  "is_trial_period": "false",
  "original_transaction_id": RECEIPT_VALUES.TRANSACTION_ID,
  "purchase_date": RECEIPT_DATE.GMT,
  "product_id": yearlyid,
  "original_purchase_date_pst": RECEIPT_DATE.PST,
  "in_app_ownership_type": "PURCHASED",
  "original_purchase_date_ms": RECEIPT_DATE.MS,
  "web_order_line_item_id": "490000123456789",
  "purchase_date_pst": RECEIPT_DATE.PST,
  "original_purchase_date": RECEIPT_DATE.GMT
};

const expirestime = {
  "expires_date": EXPIRES_DATE.GMT,
  "expires_date_pst": EXPIRES_DATE.PST,
  "expires_date_ms": EXPIRES_DATE.MS,
};

let anchor = false;
let data;

// 核心内容处理
for (const i in list) {
  const regex = new RegExp(`^${i}`, `i`);
  if (regex.test(ua) || regex.test(bundle_id)) {
    const { cm, hx, id, ids, latest, version } = list[i];
    const receiptdata = Object.assign({}, receipt, { "product_id": id });
    //处理数据
    switch (cm) {
      case 'timea':
        data = [ Object.assign({}, receiptdata, expirestime)];
        break;
      case 'timeb':
        data = [receiptdata];
        break;
      case 'timec':
        data = [];
        break;
      case 'timed':
        data = [
          Object.assign({}, receiptdata, expirestime, { "product_id": ids }),
          Object.assign({}, receiptdata, expirestime, { "product_id": id })
        ];
        break;
    }
    //处理核心收尾
    if (hx.includes('hxpda')) {
      mikephie["receipt"]["in_app"] = data;
      mikephie["latest_receipt_info"] = data;
      mikephie["pending_renewal_info"] = [{ "product_id": id, "original_transaction_id": "300002066031506", "auto_renew_product_id": id, "auto_renew_status": "1" }];
      mikephie["latest_receipt"] = latest;
    }
    else if (hx.includes('hxpdb')) {
      mikephie["receipt"]["in_app"] = data;
    }
    else if (hx.includes('hxpdc')) {
      const xreceipt = { "expires_date_formatted" : "2088-08-08 08:08:08 Etc/GMT", "expires_date" : "3742762088000", "expires_date_formatted_pst" : "2088-08-08 06:06:06 America/Los_Angeles", "product_id" : id, };
      mikephie["receipt"] = Object.assign({}, mikephie["receipt"], xreceipt);
      mikephie["latest_receipt_info"] = Object.assign({}, mikephie["receipt"], xreceipt);
      mikephie["status"] = 0;
      mikephie["auto_renew_status"] = 1;
      mikephie["auto_renew_product_id"] = id;
      delete mikephie["latest_expired_receipt_info"];
      delete mikephie["expiration_intent"];
    }
    // 判断是否需要加入版本号
    if (version && version.trim() !== '') { mikephie["receipt"]["original_application_version"] = version; }
    anchor = true;
    console.log('恭喜您，已操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/mikephie');
    break;
  }
}

// 如果没有匹配到 UA 或 bundle_id 使用备用方案
if (!anchor) {
  data = [ Object.assign({}, receipt, expirestime)];
  mikephie["receipt"]["in_app"] = data;
  mikephie["latest_receipt_info"] = data;
  mikephie["pending_renewal_info"] = [{ "product_id": yearlyid, "original_transaction_id": "300002066031506", "auto_renew_product_id": yearlyid, "auto_renew_status": "1" }];
  mikephie["latest_receipt"] = "mikephie";
  console.log('很遗憾未能识别出UA或bundle_id\n但已使用备用方案操作成功🎉🎉🎉\nMIKEPHIEの分享频道: https://t.me/mikephie');
}

mikephie["Telegram"] = "https://t.me/mikephie";
mikephie["warning"] = "仅供学习，禁止转载或售卖";

$done({ body: JSON.stringify(mikephie) });