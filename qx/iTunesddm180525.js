//Sat May 17 2025 16:22:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const ddm = JSON.parse($response.body);
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
const bundle_id = ddm.receipt.bundle_id || ddm.receipt.Bundle_Id;
const yearid = `${bundle_id}.year`;
const yearlyid = `${bundle_id}.yearly`;
const yearlysubscription = `${bundle_id}.yearlysubscription`;
const lifetimeid = `${bundle_id}.lifetime`;
const list = {
  "com.beauty.MeiTui": {
    cm: "timea",
    hx: "hxpda",
    id: "vip_member_v3_365day"
  },
  ChmReader: {
    cm: "timeb",
    hx: "hxpda",
    id: "EpubReader_ProVersion"
  },
  MediaConvert: {
    cm: "timeb",
    hx: "hxpda",
    id: "MediaConverter_ProVersion"
  },
  FDSunAlly: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.freenotes.sunally.lifetime"
  },
  Period: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.hanchongzan.time.pro"
  },
  "com.sixiaobo.MusCut": {
    cm: "timeb",
    hx: "hxpdb",
    id: "com.purecollage.pro"
  },
  FlashTransportMaster: {
    cm: "timea",
    hx: "hxpda",
    id: "com.flashtransport.fightenegery.yearly.base",
    latest: "ddm1023"
  },
  "com.ideack.ASR": {
    cm: "timeb",
    hx: "hxpda",
    id: "ASR_Permanent_Plan",
    latest: "ddm1023"
  },
  Presets: {
    cm: "timea",
    hx: "hxpda",
    id: "com.chromatech.chroma.yearlyAutoRenewable",
    latest: "ddm1023"
  },
  GoodTask: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.hahainteractive.goodtask3.pro",
    latest: "ddm1023"
  },
  "com.hanchongzan.loverlist": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.hanchongzan.loverlist.01",
    latest: "ddm1023"
  },
  "com.hanchongzan.period": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.hanchongzan.period.girl",
    latest: "ddm1023"
  },
  "com.hanchongzan.book": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.hanchongzan.book.vip",
    latest: "ddm1023"
  },
  SoundLab: {
    cm: "timeb",
    hx: "hxpda",
    id: "8001",
    latest: "ddm1023"
  },
  ECGANALYZER: {
    cm: "timea",
    hx: "hxpda",
    id: "com.wms.hrv.yearlyfamilysharing",
    latest: "ddm1023"
  },
  "com.RuoG.Pixiu": {
    cm: "timea",
    hx: "hxpda",
    id: "com.RuoG.Pixiu.VIPYear",
    latest: "ddm1023"
  },
  "com.ideack.BusinessCard": {
    cm: "timeb",
    hx: "hxpda",
    id: "BusinessCardVipPerpetual",
    latest: "ddm1023"
  },
  "com.ideack.MagicAudio": {
    cm: "timeb",
    hx: "hxpdb",
    id: "MagicAudioPermanent",
    latest: "ddm1023"
  },
  DuChuangZhe: {
    cm: "timea",
    hx: "hxpda",
    id: "org.zrey.du.main",
    latest: "ddm1023"
  },
  PhotoWhite: {
    cm: "timeb",
    hx: "hxpda",
    id: "org.zrey.photowhite.flash_lifetime",
    latest: "ddm1023"
  },
  FETreeVideoChange: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.dj.videototext.forever",
    latest: "ddm1023"
  },
  "%E5%B0%8F%E5%B0%8F%E7%9B%B8%E6%9C%BA%E5%A4%A7%E5%B8%88": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.ai.merge.forever.vip",
    latest: "ddm1023"
  },
  FoodIdentificationTool: {
    cm: "timeb",
    hx: "hxpda",
    id: "20002",
    latest: "ddm1023"
  },
  "com.qingcheng.seal.Seal": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.qingcheng.seal.Seal.premium.forever",
    latest: "ddm1023"
  },
  "com.geekapp.VoiceTranslation": {
    cm: "timeb",
    hx: "hxpda",
    id: "VoiceTranslatorPerpetual",
    latest: "ddm1023"
  },
  "com.idealityapp.VideoEditing": {
    cm: "timeb",
    hx: "hxpda",
    id: "MagicVideo_Vip_Permanent",
    latest: "ddm1023"
  },
  YinzhangMaster: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.xiaoqi.seal.forever",
    latest: "ddm1023"
  },
  "com.cuilingshi.flipclock": {
    cm: "timeb",
    hx: "hxpda",
    id: "FlipClockProVersion",
    latest: "ddm1023"
  },
  "com.maine.aifill": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.maine.aifill.unlimited",
    latest: "ddm1023"
  },
  DeviceFinder: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.wonderfind.lifetime",
    latest: "ddm1023"
  },
  Graphionica: {
    cm: "timea",
    hx: "hxpda",
    id: "premium_year",
    latest: "ddm1023"
  },
  AIAssistant: {
    cm: "timea",
    hx: "hxpda",
    id: "AIchat_1w_7.99_trial",
    latest: "ddm1023"
  },
  MonitorPlus: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.unhonin.MonitorPlus.proversion",
    latest: "ddm1023"
  },
  MessageHold: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.messagehold.forever",
    latest: "ddm1023"
  },
  "co.vulcanlabs": {
    cm: "timea",
    hx: "hxpda",
    id: lifetimeid,
    latest: "ddm1023"
  },
  "Guitar%20Gravitas": {
    cm: "timea",
    hx: "hxpda",
    id: "GuitarGravitasChordsScalesArpeggiosLessons",
    latest: "ddm1023"
  },
  "com.eleven.chatgpt": {
    cm: "timea",
    hx: "hxpda",
    id: "com.chatgpt.yearly",
    latest: "ddm1023"
  },
  "com.casttv.remotetv": {
    cm: "timeb",
    hx: "hxpda",
    id: "liftetime2",
    latest: "ddm1023"
  },
  WallpaperWidget: {
    cm: "timea",
    hx: "hxpda",
    id: "com.widget.theme.yearly.3dayfree",
    latest: "ddm1023"
  },
  ProREC: {
    cm: "timea",
    hx: "hxpda",
    id: "ProAudioCamera_Annual",
    latest: "ddm1023"
  },
  "TypeOn%20Keyboard": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.hanchongzan.book.vip",
    latest: "ddm1023"
  },
  PhotoCollagePro: {
    cm: "timeb",
    hx: "hxpda",
    id: "PHOTABLE_PREMIUM",
    latest: "ddm1023"
  },
  "com.alphamobiletech.bodyApp": {
    cm: "timeb",
    hx: "hxpda",
    id: "Bodyapp_Forever",
    latest: "ddm1023"
  },
  "com.alphamobiletech.facey": {
    cm: "timeb",
    hx: "hxpda",
    id: "Facey_Forever",
    latest: "ddm1023"
  },
  Packet: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.aaaalab.nepacket.iap.full",
    latest: "ddm1023"
  },
  AllMyBatteries: {
    cm: "timeb",
    hx: "hxpda",
    id: "AllMyBatteries_Ultimate",
    latest: "ddm1023"
  },
  VDIT: {
    cm: "timeb",
    hx: "hxpda",
    id: "me.imgbase.videoday.profeaturesLifetime",
    latest: "ddm1023"
  },
  CodeSnippet: {
    cm: "timea",
    hx: "hxpda",
    id: "it.beatcode.codesnippetpro.annualSubscription",
    latest: "ddm1023"
  },
  darkWeb: {
    cm: "timea",
    hx: "hxpda",
    id: "dforce_unlock_all_functions",
    latest: "ddm1023"
  },
  BookReader: {
    cm: "timea",
    hx: "hxpda",
    id: "com.reader.1year",
    latest: "ddm1023"
  },
  BeatStation: {
    cm: "timea",
    hx: "hxpda",
    id: "BS_Pro_Yearly",
    latest: "ddm1023"
  },
  FastPlayer: {
    cm: "timea",
    hx: "hxpda",
    id: "VideoPlayer_ProVersion",
    latest: "ddm1023"
  },
  SimpleNotation: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.xinlin.notation.once",
    latest: "ddm1023"
  },
  ChordMaster: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.chordMaster.once",
    latest: "ddm1023"
  },
  Xfuse: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.xfuse.ProVision",
    latest: "ddm1023"
  },
  "com.BertonYc.ScannerOCR": {
    cm: "timeb",
    hx: "hxpda",
    id: "Scanner_Subscibe_Permanent",
    latest: "ddm1023"
  },
  HRV: {
    hx: "hxpdc",
    id: "com.stress.test.record.yearly",
    latest: "ddm1023"
  },
  iVCam: {
    cm: "timeb",
    hx: "hxpda",
    id: "ivcam.full",
    latest: "ddm1023"
  },
  RBrowser: {
    cm: "timea",
    hx: "hxpda",
    id: "com.mm.RBroswer.product11",
    latest: "ddm1023"
  },
  Filterra: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.filterra.wtonetimepurchase",
    latest: "ddm1023"
  },
  MOLDIV: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.jellybus.Moldiv.IAP.PRO7999",
    latest: "ddm1023"
  },
  PICSPLAY: {
    cm: "timea",
    hx: "hxpda",
    id: "com.jellybus.PicsPlay2.IAP.PRO5999",
    latest: "ddm1023"
  },
  Rookie: {
    cm: "timea",
    hx: "hxpda",
    id: "com.jellybus.Rookie.IAP.PRO5999",
    latest: "ddm1023"
  },
  MoneyWiz: {
    cm: "timea",
    hx: "hxpda",
    id: "com.moneywiz.personalfinance.1year",
    latest: "ddm1023"
  },
  qxzs: {
    cm: "timeb",
    hx: "hxpda",
    id: "yongjiu",
    latest: "ddm1023"
  },
  Overdrop: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.weather.overdrop.forever",
    latest: "ddm1023"
  },
  Boom: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.globaldelight.iBoom.LifetimeDiscountPack",
    latest: "ddm1023"
  },
  "PDFReaderPro%20Free": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.pdfreaderpro.free.member.all_access_pack_permanent_license.001",
    latest: "ddm1023"
  },
  VideoHelper: {
    cm: "timeb",
    hx: "hxpda",
    id: "vip_service",
    latest: "ddm1023"
  },
  "Digital%20Planner": {
    cm: "timea",
    hx: "hxpda",
    id: "com.softwings.DigitalPlanner.1year",
    latest: "ddm1023"
  },
  SuperMandarin: {
    cm: "timea",
    hx: "hxpda",
    id: "pth_vip_year",
    latest: "ddm1023"
  },
  SuperQuestion: {
    cm: "timea",
    hx: "hxpda",
    id: "qtzs_vip_year",
    latest: "ddm1023"
  },
  SuperElves: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.SuperElves.Answer.Forever",
    latest: "ddm1023"
  },
  SuperDriving: {
    cm: "timeb",
    hx: "hxpda",
    id: "jiakao_vip_forever",
    latest: "ddm1023"
  },
  Pollykann: {
    cm: "timeb",
    hx: "hxpda",
    id: "vip.forever.pollykann",
    latest: "ddm1023"
  },
  JCCalendar: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.sjc.calendar.vip.lifelong",
    latest: "ddm1023"
  },
  "com.yanxia.ChsMedical": {
    cm: "timeb",
    hx: "hxpda",
    id: "VIPUser",
    latest: "ddm1023"
  },
  SuperPointer: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.SuperPointer.Location.Forever",
    latest: "ddm1023"
  },
  SnakeReader: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.lyran.snakescanner.premium18",
    latest: "ddm1023"
  },
  FourthPPT: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.FourthPPT.Mobile.Forever",
    latest: "ddm1023"
  },
  OneExtractor: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.OneExtractor.Video.Forever",
    latest: "ddm1023"
  },
  "com.Colin.Colors": {
    cm: "timea",
    hx: "hxpda",
    id: "com.colin.colors.annualVIP",
    latest: "ddm1023"
  },
  PhotosSorter: {
    cm: "timeb",
    hx: "hxpda",
    id: "sorter.pro.ipa",
    latest: "ddm1023"
  },
  intolive: {
    cm: "timea",
    hx: "hxpda",
    id: "me.imgbase.intolive.proSubYearly",
    latest: "ddm1023"
  },
  MyAlbum: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.colin.myalbum.isUpgradeVip",
    latest: "ddm1023"
  },
  VideoEditor: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.god.videohand.alwaysowner",
    latest: "ddm1023"
  },
  PhotoMovie: {
    cm: "timea",
    hx: "hxpda",
    id: "com.mediaeditor.photomovie.year",
    latest: "ddm1023"
  },
  ShotOn: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.colin.shoton.forevervip",
    latest: "ddm1023"
  },
  PhimCiaj: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.jiancent.calligraphymaster.lifetime",
    latest: "ddm1023"
  },
  TimeCut: {
    cm: "timea",
    hx: "hxpda",
    id: "com.floatcamellia.hfrslowmotion.forevervip",
    latest: "ddm1023"
  },
  "com.floatcamellia.motiok": {
    cm: "timea",
    hx: "hxpda",
    id: "com.floatcamellia.motiok.vipforever",
    latest: "ddm1023"
  },
  POPOLockScreenWidgetable: {
    cm: "timea",
    hx: "hxpda",
    id: "com.widget.fightenegery.yearly",
    latest: "ddm1023"
  },
  GreetingScanner: {
    cm: "timea",
    hx: "hxpda",
    id: "com.alphaplus.greetingscaner.w.b",
    latest: "ddm1023"
  },
  FancyCamPlus: {
    cm: "timea",
    hx: "hxpda",
    id: "com.alphaplus.fancycam.year.198",
    latest: "ddm1023"
  },
  Again: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.owen.again.profession",
    latest: "ddm1023"
  },
  remotelg: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.gqp.remotelg.lifetime",
    latest: "ddm1023"
  },
  Notebook: {
    cm: "timea",
    hx: "hxpda",
    id: "com.zoho.notebook.ios.personal.yearly",
    latest: "ddm1023"
  },
  "com.damon.dubbing": {
    cm: "timea",
    hx: "hxpda",
    id: "com.damon.dubbing.vip12",
    latest: "ddm1023"
  },
  ZHUBEN: {
    cm: "timea",
    hx: "hxpda",
    id: "com.xiaoyu.yue",
    latest: "ddm1023"
  },
  XIAOTangHomeParadise: {
    cm: "timea",
    hx: "hxpda",
    id: "com.yuee.mo2",
    latest: "ddm1023"
  },
  film: {
    cm: "timea",
    hx: "hxpda",
    id: "pro_auto_subscribe_year_ovs",
    latest: "ddm1023"
  },
  Muza: {
    cm: "timea",
    hx: "hxpda",
    id: "com.appmuza.premium_year",
    latest: "ddm1023"
  },
  StandbyWidget: {
    cm: "timed",
    hx: "hxpda",
    id: "com.standby.idream.year.68",
    ids: "standbyus.nonconsume.missingyou",
    latest: "ddm1023"
  },
  Mango6Minute: {
    cm: "timea",
    hx: "hxpda",
    id: "576170870",
    latest: "ddm1023"
  },
  "Photo%20Cutout": {
    cm: "timea",
    hx: "hxpda",
    id: "com.icepine.allyear",
    latest: "ddm1023"
  },
  cleanPhone: {
    cm: "timea",
    hx: "hxpda",
    id: "com.clean.year",
    latest: "ddm1023"
  },
  ppt: {
    cm: "timea",
    hx: "hxpda",
    id: "com.palmmob.pptios.yearly",
    latest: "ddm1023"
  },
  WasteCat: {
    cm: "timeb",
    hx: "hxpda",
    id: "dev.sanjin.WasteCat.PermanentVip",
    latest: "ddm1023"
  },
  MeowTalk: {
    cm: "timea",
    hx: "hxpda",
    id: "meowtalk.month.basic.autorenewable.subscription",
    latest: "ddm1023"
  },
  habitdot: {
    cm: "timeb",
    hx: "hxpda",
    id: "habitdots_pro_forever",
    latest: "ddm1023"
  },
  stretchworkout: {
    cm: "timea",
    hx: "hxpda",
    id: "com.abishkking.premiumYearStretch",
    latest: "ddm1023"
  },
  Planist: {
    cm: "timed",
    hx: "hxpda",
    id: "org.zrey.planist.main",
    ids: "org.zrey.planist.lifetime",
    latest: "ddm1023"
  },
  "com.uzstudio.avenuecast.ios": {
    cm: "timeb",
    hx: "hxpda",
    id: "1001",
    latest: "ddm1023"
  },
  CongZhenBaZi: {
    cm: "timeb",
    hx: "hxpda",
    id: "vip_forever_78",
    latest: "ddm1023"
  },
  CongZhenQiMen: {
    cm: "timea",
    hx: "hxpda",
    id: "cn.congzhen.CongZhenQiMen.yearlyplan",
    latest: "ddm1023"
  },
  ProFit: {
    cm: "timea",
    hx: "hxpda",
    id: "com.maxty.gofitness.yearlyplan",
    latest: "ddm1023"
  },
  FitnessBodybuildingVGFIT: {
    cm: "timea",
    hx: "hxpda",
    id: "com.vgfit.fitnessvip.yearly",
    latest: "ddm1023"
  },
  "Water%20Reminder": {
    cm: "timea",
    hx: "hxpda",
    id: "com.vgfit.premiumtracker.year",
    latest: "ddm1023"
  },
  "%E7%91%9C%E4%BC%BD": {
    cm: "timea",
    hx: "hxpda",
    id: "com.vgfit.yoga.yearly",
    latest: "ddm1023"
  },
  GPSMaker: {
    cm: "timea",
    hx: "hxpda",
    id: "theodolite_vip_year",
    latest: "ddm1023"
  },
  wrongbook: {
    cm: "timea",
    hx: "hxpda",
    id: "com.palmmob.wrongbookios.yearly",
    latest: "ddm1023"
  },
  excel: {
    cm: "timea",
    hx: "hxpda",
    id: "com.gamawh.excelerios.yearly",
    latest: "ddm1023"
  },
  "Future%20Baby": {
    cm: "timea",
    hx: "hxpda",
    id: "com.nilu.faceseer.yearly",
    latest: "ddm1023"
  },
  Smoke: {
    cm: "timea",
    hx: "hxpda",
    id: "smoke19870727",
    latest: "ddm1023"
  },
  AppAlarmIOS: {
    cm: "timea",
    hx: "hxpda",
    id: "alarm.me.vip.year.tier1",
    latest: "ddm1023"
  },
  Tinglee: {
    cm: "timea",
    hx: "hxpdb",
    id: "vip.forever.tinglee",
    latest: "ddm1023"
  },
  NoteKeys: {
    cm: "timea",
    hx: "hxpda",
    id: "notekeys_access_weekly",
    latest: "ddm1023"
  },
  SheetMusicPro: {
    cm: "timea",
    hx: "hxpda",
    id: "sheetmusicpro.yearwithtrial",
    latest: "ddm1023"
  },
  ProtractorEdge: {
    cm: "timea",
    hx: "hxpda",
    id: "ProtracatorEdge.PremiumAccess",
    latest: "ddm1023"
  },
  "Piano%20Plus": {
    cm: "timea",
    hx: "hxpda",
    id: "kn_access_weekly",
    latest: "ddm1023"
  },
  "Notation%20Pad": {
    cm: "timea",
    hx: "hxpda",
    id: "np_access_weekly",
    latest: "ddm1023"
  },
  "Guitar%20Notation": {
    cm: "timea",
    hx: "hxpda",
    id: "gn_access_weekly",
    latest: "ddm1023"
  },
  "Piano%20Fantasy": {
    cm: "timea",
    hx: "hxpda",
    id: "com.lotuz.PianoFantasy.weekwithtrail",
    latest: "ddm1023"
  },
  "Piano%20Rush": {
    cm: "timea",
    hx: "hxpda",
    id: "com.lotuz.PianoPro.weekwithtrail",
    latest: "ddm1023"
  },
  "com.richads.saucyart": {
    cm: "timea",
    hx: "hxpda",
    id: "com.richads.saucyart.sub.quarterly_29.99",
    latest: "ddm1023"
  },
  SurveyorPro: {
    cm: "timea",
    hx: "hxpda",
    id: "com.celiangyuan.SurveyorPro.OneYear",
    latest: "ddm1023"
  },
  "com.ydatong.dingdone": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.ydatong.dingdone.vip.forever",
    latest: "ddm1023"
  },
  Dial: {
    cm: "timea",
    hx: "hxpda",
    id: "2104",
    latest: "ddm1023"
  },
  "qxwp%20copy": {
    cm: "timed",
    hx: "hxpda",
    id: "com.chowjoe.wp2free.year.pro",
    ids: "com.chowjoe.wp2free.coin.70",
    latest: "ddm1023"
  },
  LingLongShouZ: {
    cm: "timea",
    hx: "hxpda",
    id: "zhenwushouzhangQuarterlyPlus",
    latest: "ddm1023"
  },
  MediaEditor: {
    cm: "timeb",
    hx: "hxpda",
    id: "alwaysowner",
    latest: "ddm1023"
  },
  UniversTranslate: {
    cm: "timea",
    hx: "hxpda",
    id: "com.univers.translator.tool.year",
    latest: "ddm1023"
  },
  "com.gostraight.smallAccountBook": {
    cm: "timeb",
    hx: "hxpda",
    id: "ForeverVIPPayment",
    latest: "ddm1023"
  },
  ZJTBiaoGe: {
    cm: "timea",
    hx: "hxpda",
    id: "zhangjt.biaoge.monthvip",
    latest: "ddm1023"
  },
  MiniMouse: {
    cm: "timea",
    hx: "hxpda",
    id: "minimouse_vip_1year",
    latest: "ddm1023"
  },
  "Paste%20Keyboard": {
    cm: "timea",
    hx: "hxpda",
    id: "com.keyboard.1yetr",
    latest: "ddm1023"
  },
  EWA: {
    cm: "timea",
    hx: "hxpda",
    id: "com.ewa.renewable.subscription.year8",
    latest: "ddm1023"
  },
  BuBuSZ: {
    cm: "timea",
    hx: "hxpda",
    id: "quaVersion",
    latest: "ddm1023"
  },
  CapyMood: {
    cm: "timea",
    hx: "hxpda",
    id: "com.paha.CapyMood.year",
    latest: "ddm1023"
  },
  "xyz.iofree.lifenotes": {
    cm: "timea",
    hx: "hxpda",
    id: "xyz.iofree.lifelog.pro.yearly",
    latest: "ddm1023"
  },
  "com.icandiapps.nightsky": {
    cm: "timea",
    hx: "hxpda",
    id: "com.icandiapps.ns4.annual",
    latest: "ddm1023"
  },
  Wallpapers: {
    cm: "timea",
    hx: "hxpda",
    id: "wallpaperworld.subscription.yearly.12.notrial",
    latest: "ddm1023"
  },
  "com.yumiteam.Kuki.ID": {
    cm: "timea",
    hx: "hxpda",
    id: "com.yumiteam.Kuki.ID.2",
    latest: "ddm1023"
  },
  "com.quangtm193.picpro": {
    cm: "timea",
    hx: "hxpda",
    id: "com.quangtm193.picpro1year",
    latest: "ddm1023"
  },
  Storybeat: {
    cm: "timea",
    hx: "hxpda",
    id: "yearly_1",
    latest: "ddm1023"
  },
  SmartGym: {
    cm: "timea",
    hx: "hxpda",
    id: "com.smartgymapp.smartgym.premiumuserworkoutsyearly",
    latest: "ddm1023"
  },
  Ptime: {
    cm: "timea",
    hx: "hxpda",
    id: "com.subscribe.pro.year",
    latest: "ddm1023"
  },
  Prookie: {
    cm: "timea",
    hx: "hxpda",
    id: "prookie.month.withtrial.0615",
    latest: "ddm1023"
  },
  BodyTune: {
    cm: "timea",
    hx: "hxpda",
    id: "Bodypro1",
    latest: "ddm1023"
  },
  "killer.sudoku.free.brain.puzzle": {
    cm: "timea",
    hx: "hxpda",
    id: "ks.i.iap.premium",
    latest: "ddm1023"
  },
  "sudoku.puzzle.free.game.brain": {
    cm: "timea",
    hx: "hxpda",
    id: "sudoku.i.sub.vvip.p1y",
    latest: "ddm1023"
  },
  "One%20Markdown": {
    cm: "timeb",
    hx: "hxpda",
    id: "10012",
    latest: "ddm1023"
  },
  "MWeb%20iOS": {
    cm: "timeb",
    hx: "hxpda",
    id: "10001",
    latest: "ddm1023"
  },
  NYMF: {
    cm: "timea",
    hx: "hxpda",
    id: "com.nymf.app.premium_year",
    latest: "ddm1023"
  },
  "com.lockwidt.cn": {
    cm: "timea",
    hx: "hxpda",
    id: "com.lockwidt.cn.member",
    latest: "ddm1023"
  },
  Utsuki: {
    cm: "timea",
    hx: "hxpda",
    id: "KameePro",
    latest: "ddm1023"
  },
  Processing: {
    cm: "timeb",
    hx: "hxpda",
    id: "wtf.riedel.processing.lifetime",
    latest: "ddm1023"
  },
  "one%20sec": {
    cm: "timea",
    hx: "hxpda",
    id: "wtf.riedel.one_sec.pro.annual.individual",
    latest: "ddm1023"
  },
  "com.skysoft.pencilsketch": {
    cm: "timea",
    hx: "hxpda",
    id: "com.skysoft.pencilsketch.subscription.yearly",
    latest: "ddm1023"
  },
  "com.instagridpost.rsigp": {
    cm: "timea",
    hx: "hxpda",
    id: "com.GridPost.oneyearplus",
    latest: "ddm1023"
  },
  "com.skysoft.picsqueen": {
    cm: "timea",
    hx: "hxpda",
    id: "com.skysoft.picsqueen.subscription.yearly",
    latest: "ddm1023"
  },
  "com.skysoft.removalfree": {
    cm: "timea",
    hx: "hxpda",
    id: "com.skysoft.removalfree.discount.unlimitedaccess",
    latest: "ddm1023"
  },
  "com.skysoft.facecartoon": {
    cm: "timea",
    hx: "hxpda",
    id: "com.skysoft.facecartoon.subscription.yearly",
    latest: "ddm1023"
  },
  "Jennie%20AI": {
    cm: "timea",
    hx: "hxpda",
    id: "com.skysoft.text2img.vip.yearly",
    latest: "ddm1023"
  },
  MGhostLens: {
    cm: "timea",
    hx: "hxpda",
    id: "com.ghostlens.premium1month",
    latest: "ddm1023"
  },
  Luminous: {
    cm: "timea",
    hx: "hxpda",
    id: "com.spacemushrooms.weekly",
    latest: "ddm1023"
  },
  RitmoVideo: {
    cm: "timea",
    hx: "hxpda",
    id: "com.zhk.hidebox.yearly",
    latest: "ddm1023"
  },
  PerfectImage: {
    cm: "timea",
    hx: "hxpda",
    id: "Perfect_Image_VIP_Yearly",
    latest: "ddm1023"
  },
  moment: {
    cm: "timea",
    hx: "hxpda",
    id: "PYJMoment2",
    latest: "ddm1023"
  },
  "Planner%20Plus": {
    cm: "timea",
    hx: "hxpda",
    id: "com.btgs.plannerfree.yearly",
    latest: "ddm1023"
  },
  HiddenBox: {
    cm: "timec",
    hx: "hxpdb",
    version: "1"
  },
  Synthesizer: {
    cm: "timea",
    hx: "hxpda",
    id: "com.qingxiu.synthesizer.mon",
    latest: "ddm1023"
  },
  ContractMaster: {
    cm: "timea",
    hx: "hxpda",
    id: "com.qingxiu.contracts.monthly",
    latest: "ddm1023"
  },
  MyDiary: {
    cm: "timea",
    hx: "hxpda",
    id: "diary.yearly.vip.1029",
    latest: "ddm1023"
  },
  Translator: {
    cm: "timea",
    hx: "hxpda",
    id: "trans_sub_week",
    latest: "ddm1023"
  },
  ToDoList: {
    cm: "timea",
    hx: "hxpda",
    id: "todolist.subscription.yearly",
    latest: "ddm1023"
  },
  Idea: {
    cm: "timea",
    hx: "hxpda",
    id: "top.ideaapp.ideaiOS.membership.oneyear",
    latest: "ddm1023"
  },
  ZeroTuImg: {
    cm: "timea",
    hx: "hxpda",
    id: "ZeroTuImgPlus",
    latest: "ddm1023"
  },
  "com.traveltao.ExchangeAssistant": {
    cm: "timea",
    hx: "hxpda",
    id: "lxbyplus",
    latest: "ddm1023"
  },
  ServerKit: {
    cm: "timea",
    hx: "hxpda",
    id: "com.serverkit.subscription.year.a",
    latest: "ddm1023"
  },
  RawPlus: {
    cm: "timea",
    hx: "hxpda",
    id: "com.dynamicappdesign.rawplus.yearlysubscription",
    latest: "ddm1023"
  },
  OrderGenerator: {
    cm: "timeb",
    hx: "hxpda",
    id: "oder_pay_forever",
    latest: "ddm1023"
  },
  GenerateAllOrdersTool: {
    cm: "timea",
    hx: "hxpda",
    id: "Order_Vip_010",
    latest: "ddm1023"
  },
  MoMoShouZhang: {
    cm: "timea",
    hx: "hxpda",
    id: "shunchangshouzhangQuarterlyPlus",
    latest: "ddm1023"
  },
  Mindkit: {
    cm: "timeb",
    hx: "hxpda",
    id: "mindkit_permanently",
    latest: "ddm1023"
  },
  DailySpending: {
    cm: "timea",
    hx: "hxpda",
    id: "com.xxtstudio.dailyspending.year",
    latest: "ddm1023"
  },
  Miary: {
    cm: "timeb",
    hx: "hxpda",
    id: "lifetime_sub",
    latest: "ddm1023"
  },
  Noted: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.digitalworkroom.noted.plus.lifetime",
    latest: "ddm1023"
  },
  BingQiTools: {
    cm: "timea",
    hx: "hxpda",
    id: "bingqi_e2",
    latest: "ddm1023"
  },
  AnyDown: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.xiaoqi.down.forever",
    latest: "ddm1023"
  },
  Reader: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.xiaoqi.reader.forever",
    latest: "ddm1023"
  },
  "com.bestmusicvideo.formmaster": {
    cm: "timea",
    hx: "hxpda",
    id: "com.form.1yearvip",
    latest: "ddm1023"
  },
  ExcelSpreadSheetsWPS: {
    cm: "timea",
    hx: "hxpda",
    id: "com.turbocms.SimpleSpreadSheet.viponeyear",
    latest: "ddm1023"
  },
  XinQingRiJi: {
    cm: "timea",
    hx: "hxpda",
    id: "zhiwenshouzhangQuarterlyPlus",
    latest: "ddm1023"
  },
  Nutrilio: {
    cm: "timea",
    hx: "hxpda",
    id: "net.nutrilio.one_year_plus",
    latest: "ddm1023"
  },
  AIHeader: {
    cm: "timea",
    hx: "hxpda",
    id: "com.ai.avatar.maker.month.3dayfree",
    latest: "ddm1023"
  },
  MoodTracker: {
    cm: "timeb",
    hx: "hxpda",
    id: "co.vulcanlabs.moodtracker.lifetime2",
    latest: "ddm1023"
  },
  "com.dandelion.Routine": {
    cm: "timeb",
    hx: "hxpda",
    id: "membership",
    latest: "ddm1023"
  },
  YSBrowser: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.ys.pro",
    latest: "ddm1023"
  },
  "org.zrey.metion": {
    cm: "timed",
    hx: "hxpda",
    id: "org.zrey.metion.pro",
    ids: "org.zrey.metion.main",
    latest: "ddm1023"
  },
  ZenJournal: {
    cm: "timea",
    hx: "hxpda",
    id: "zen_pro",
    latest: "ddm1023"
  },
  "%E5%80%92%E6%94%BE%E6%8C%91%E6%88%98": {
    cm: "timea",
    hx: "hxpda",
    id: "com.abighead.ReverseChallenge.iap.pro.year",
    latest: "ddm1023"
  },
  "com.visualmidi.app.perfectpiano.Perfect-Piano": {
    cm: "timea",
    hx: "hxpda",
    id: "auto_renew_monthly_subscription",
    latest: "ddm1023"
  },
  Straw: {
    cm: "timea",
    hx: "hxpda",
    id: "com.1year.eyedropper",
    latest: "ddm1023"
  },
  vibee: {
    cm: "timea",
    hx: "hxpda",
    id: "com.vibee.year.bigchampagne",
    latest: "ddm1023"
  },
  Lister: {
    cm: "timea",
    hx: "hxpda",
    id: "com.productlab.lister.yearly",
    latest: "ddm1023"
  },
  DrumPads: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.gismart.drumpads.pro_lifetime_30",
    latest: "ddm1023"
  },
  "com.photoslab.ai.writerassistant": {
    cm: "timea",
    hx: "hxpda",
    id: "com.photoslab.ai.writerassistant.year",
    latest: "ddm1023"
  },
  WaterMaskCamera: {
    cm: "timea",
    hx: "hxpda",
    id: "com.camera.watermark.yearly.3dayfree",
    latest: "ddm1023"
  },
  ColorPaint: {
    cm: "timea",
    hx: "hxpda",
    id: "coloring.app.singingfish.year",
    latest: "ddm1023"
  },
  SymbolKeyboard: {
    cm: "timeb",
    hx: "hxpda",
    id: "fronts.keyboard.singingfish.one",
    latest: "ddm1023"
  },
  "com.SingingFish.SudokuGame": {
    cm: "timea",
    hx: "hxpda",
    id: "com.singingfish.sudokugame.year",
    latest: "ddm1023"
  },
  "com.kuaijiezhilingdashi.appname": {
    cm: "timea",
    hx: "hxpda",
    id: "com.othermaster.yearlyvip",
    latest: "ddm1023"
  },
  LogInput: {
    cm: "timea",
    hx: "hxpda",
    id: "com.logcg.loginput",
    latest: "ddm1023"
  },
  HandNote: {
    cm: "timeb",
    hx: "hxpda",
    id: "permanent_membership",
    latest: "ddm1023"
  },
  Kilonotes: {
    cm: "timea",
    hx: "hxpda",
    id: "kipa_kilonotes_quarter_subscription",
    latest: "ddm1023"
  },
  YiJianKouTu: {
    cm: "timea",
    hx: "hxpda",
    id: "XiChaoYiJianKouTuPlus",
    latest: "ddm1023"
  },
  FileArtifact: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.shengzhou.fileartifact.permanent",
    latest: "ddm1023"
  },
  Wext: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.lmf.wext.life",
    latest: "ddm1023"
  },
  ColorCapture: {
    cm: "timeb",
    hx: "hxpda",
    id: "10001",
    latest: "ddm1023"
  },
  xTerminal: {
    cm: "timea",
    hx: "hxpda",
    id: "xterminal.pro2",
    latest: "ddm1023"
  },
  Fotoz: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.kiddy.fotoz.ipa.pro",
    latest: "ddm1023"
  },
  TheLastFilm: {
    cm: "timea",
    hx: "hxpda",
    id: "Filmroll_Pro_1Year",
    latest: "ddm1023"
  },
  Motivation: {
    cm: "timea",
    hx: "hxpda",
    id: "com.monkeytaps.motivation.premium.year3",
    latest: "ddm1023"
  },
  "io.sumi.GridDiary2": {
    cm: "timea",
    hx: "hxpda",
    id: "io.sumi.GridDiary.pro.annually",
    latest: "ddm1023"
  },
  Subscriptions: {
    cm: "timea",
    hx: "hxpda",
    id: "com.touchbits.subscriptions.iap.pro.yearly",
    latest: "ddm1023"
  },
  "com.leapfitness.fasting": {
    cm: "timea",
    hx: "hxpda",
    id: "com.leapfitness.fasting.oneyear1",
    latest: "ddm1023"
  },
  WidgetBox: {
    cm: "timeb",
    hx: "hxpda",
    id: "widgetlab001",
    latest: "ddm1023"
  },
  LifeTracker: {
    cm: "timea",
    hx: "hxpda",
    id: "com.dk.lifetracker.yearplan",
    latest: "ddm1023"
  },
  imgplay: {
    cm: "timea",
    hx: "hxpda",
    id: "me.imgbase.imgplay.subscriptionYearly",
    latest: "ddm1023"
  },
  WaterMinder: {
    cm: "timea",
    hx: "hxpda",
    id: "waterminder.premiumYearly",
    latest: "ddm1023"
  },
  HashPhotos: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.kobaltlab.HashPhotos.iap.allinone.free",
    latest: "ddm1023"
  },
  FileBrowser: {
    cm: "timea",
    hx: "hxpda",
    id: "com.qingcheng.filex.pro.yearly",
    latest: "ddm1023"
  },
  SilProject: {
    cm: "timea",
    hx: "hxpda",
    id: "com.sm.Alina.Pro",
    latest: "ddm1023"
  },
  "com.chenxi.shanniankapian": {
    cm: "timea",
    hx: "hxpda",
    id: "com.chenxi.shannian.superNian",
    latest: "ddm1023"
  },
  "com.risingcabbage.pro.camera": {
    cm: "timea",
    hx: "hxpda",
    id: "com.risingcabbage.pro.camera.yearlysubscription",
    latest: "ddm1023"
  },
  "co.bazaart.patternator": {
    cm: "timea",
    hx: "hxpda",
    id: "Patternator_Lock_Screen_Monthly",
    latest: "ddm1023"
  },
  "%E5%BD%95%E9%9F%B3%E4%B8%93%E4%B8%9A%E7%89%88": {
    cm: "timea",
    hx: "hxpda",
    id: "com.winat.recording.pro.yearly",
    latest: "ddm1023"
  },
  "cn.linfei.SimpleRecorder": {
    cm: "timea",
    hx: "hxpda",
    id: "cn.linfei.SimpleRecorder.Plus",
    latest: "ddm1023"
  },
  "com.maliquankai.appdesign": {
    cm: "timec",
    hx: "hxpdb",
    version: "1.5.8"
  },
  PictureScanner: {
    cm: "timea",
    hx: "hxpda",
    id: "om.picturescanner.tool.year",
    latest: "ddm1023"
  },
  BestColor: {
    cm: "timea",
    hx: "hxpda",
    id: "com.bestColor.tool.month",
    latest: "ddm1023"
  },
  "com.decibel.tool": {
    cm: "timea",
    hx: "hxpda",
    id: "decibel98free3",
    latest: "ddm1023"
  },
  MeasurementTools: {
    cm: "timea",
    hx: "hxpda",
    id: "mesurementyearvip",
    latest: "ddm1023"
  },
  TinyPNGTool: {
    cm: "timea",
    hx: "hxpda",
    id: "com.tinypngtool.tool.weekvip",
    latest: "ddm1023"
  },
  IconChange: {
    cm: "timea",
    hx: "hxpda",
    id: "iconeryearvip",
    latest: "ddm1023"
  },
  "life.journal.diary": {
    cm: "timeb",
    hx: "hxpda",
    id: "life.journal.diary.lifetime",
    latest: "ddm1023"
  },
  "com.floatcamellia.motionninja": {
    cm: "timea",
    hx: "hxpda",
    id: "com.floatcamellia.motionninja.yearlyvip",
    latest: "ddm1023"
  },
  "com.iuuapp.audiomaker": {
    cm: "timed",
    hx: "hxpda",
    id: "com.iuuapp.audiomaker.cloud.year",
    ids: "com.iuuapp.audiomaker.removeads",
    latest: "ddm1023"
  },
  "com.biggerlens.photoretouch": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.photoretouch.SVIP",
    latest: "ddm1023"
  },
  "com.macpaw.iosgemini": {
    cm: "timea",
    hx: "hxpda",
    id: "com.macpaw.iosgemini.month.trial",
    latest: "ddm1023"
  },
  "com.mematom.ios": {
    cm: "timea",
    hx: "hxpda",
    id: "MMYear",
    latest: "ddm1023"
  },
  "com.LuoWei.aDiary": {
    cm: "timea",
    hx: "hxpda",
    id: "com.LuoWei.aDiary.yearly0",
    latest: "ddm1023"
  },
  "com.zerone.hidesktop": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.zerone.hidesktop.forever",
    latest: "ddm1023"
  },
  MagicWidget: {
    cm: "timeb",
    hx: "hxpda",
    id: "cf__forever_0_4.7.1",
    latest: "ddm1023"
  },
  "com.tasmanic.capture": {
    cm: "timea",
    hx: "hxpda",
    id: "CTPCAPTUREYEARLY",
    latest: "ddm1023"
  },
  "com.readdle.CalendarsLite": {
    cm: "timea",
    hx: "hxpda",
    id: "com.readdle.CalendarsLite.subscription.year20trial7",
    latest: "ddm1023"
  },
  "com.readdle.ReaddleDocsIPad": {
    cm: "timea",
    hx: "hxpda",
    id: "com.readdle.ReaddleDocsIPad.subscription.month10_allusers",
    latest: "ddm1023"
  },
  "com.1ps.lovetalk": {
    cm: "timea",
    hx: "hxpda",
    id: "com.1ps.lovetalk.normal.weekly",
    latest: "ddm1023"
  },
  "tech.miidii.MDClock": {
    cm: "timeb",
    hx: "hxpda",
    id: "tech.miidii.MDClock.pro",
    latest: "ddm1023"
  },
  "com.floatcamellia.prettyup": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.floatcamellia.prettyup.onetimepurchase",
    latest: "ddm1023"
  },
  "com.zijayrate.analogcam": {
    cm: "timea",
    hx: "hxpda",
    id: "com.zijayrate.analogcam.vipforever10",
    latest: "ddm1023"
  },
  WeeklyNote: {
    cm: "timeb",
    hx: "hxpda",
    id: "org.zrey.weeklynote.lifetime",
    latest: "ddm1023"
  },
  DoMemo: {
    cm: "timea",
    hx: "hxpda",
    id: "org.zrey.fastnote.lifetime",
    latest: "ddm1023"
  },
  CostMemo: {
    cm: "timea",
    hx: "hxpda",
    id: "org.zrey.money.lifetime",
    latest: "ddm1023"
  },
  iTimely: {
    cm: "timeb",
    hx: "hxpda",
    id: "org.zrey.iTimely.lifetime",
    latest: "ddm1023"
  },
  "net.daylio.Daylio": {
    cm: "timea",
    hx: "hxpda",
    id: "net.daylio.one_year_pro.offer_initial",
    latest: "ddm1023"
  },
  "com.yengshine.webrecorder": {
    cm: "timea",
    hx: "hxpda",
    id: "com.yengshine.webrecorder.yearly",
    latest: "ddm1023"
  },
  "org.skydomain.foodcamera": {
    cm: "timea",
    hx: "hxpda",
    id: "org.skydomain.foodcamera.yearly",
    latest: "ddm1023"
  },
  "com.yengshine.proccd": {
    cm: "timea",
    hx: "hxpda",
    id: "com.yengshine.proccd.yearly",
    latest: "ddm1023"
  },
  "com.palmmob.pdfios": {
    cm: "timea",
    hx: "hxpda",
    id: "com.palmmob.pdfios.168",
    latest: "ddm1023"
  },
  "com.palmmob.scanner2ios": {
    cm: "timea",
    hx: "hxpda",
    id: "com.palmmob.scanner2ios.396",
    latest: "ddm1023"
  },
  "com.palmmob.officeios": {
    cm: "timea",
    hx: "hxpda",
    id: "com.palmmob.officeios.188",
    latest: "ddm1023"
  },
  "com.palmmob.recorder": {
    cm: "timea",
    hx: "hxpda",
    id: "com.palmmob.recorder.198",
    latest: "ddm1023"
  },
  "com.7color.newclean": {
    cm: "timea",
    hx: "hxpda",
    id: "com.cleaner.salesyear",
    latest: "ddm1023"
  },
  Habbit: {
    cm: "timea",
    hx: "hxpda",
    id: "HabitUpYearly",
    latest: "ddm1023"
  },
  "com.dbmeterpro.dB-Meter-Free": {
    cm: "timea",
    hx: "hxpda",
    id: "com.dbmeterpro.premiumModeSubscriptionWithTrial",
    latest: "ddm1023"
  },
  "com.vstudio.newpuzzle": {
    cm: "timea",
    hx: "hxpda",
    id: "com.vstudio.newpuzzle.yearlyVipFreetrail.15_99",
    latest: "ddm1023"
  },
  "com.jianili.Booka": {
    cm: "timea",
    hx: "hxpda",
    id: "com.jianili.Booka.pro.yearly",
    latest: "ddm1023"
  },
  "com.ziheng.OneBox": {
    cm: "timeb",
    hx: "hxpda",
    id: "com.ziheng.OneBox",
    latest: "ddm1023"
  },
  ChickAlarmClock: {
    cm: "timea",
    hx: "hxpda",
    id: "com.ChickFocus.ChickFocus.yearly_2023_promo",
    latest: "ddm1023"
  },
  MyWorks: {
    cm: "timea",
    hx: "hxpda",
    id: "com.MyWorks.Handwritten.Year",
    latest: "ddm1023"
  },
  "Instant%20Saver": {
    cm: "timea",
    hx: "hxpda",
    id: "com.pocket.compress.yearly",
    latest: "ddm1023"
  },
  SaveTik: {
    cm: "timea",
    hx: "hxpda",
    id: "com.pocket.compress.yearly",
    latest: "ddm1023"
  },
  "%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86%E5%99%A8": {
    cm: "timea",
    hx: "hxpda",
    id: "com.mobislet.files.yearly",
    latest: "ddm1023"
  },
  "ZIP%E5%8E%8B%E7%BC%A9%E8%A7%A3%E5%8E%8B%E7%BC%A9%E5%B7%A5%E5%85%B7": {
    cm: "timea",
    hx: "hxpda",
    id: "com.mobislet.zipfile.yearly",
    latest: "ddm1023"
  },
  TPTeleprompter: {
    cm: "timea",
    hx: "hxpda",
    id: "com.pocket.compress.yearly",
    latest: "ddm1023"
  },
  "com.pocket.photo": {
    cm: "timea",
    hx: "hxpda",
    id: "com.pocket.photo.yearly",
    latest: "ddm1023"
  },
  "com.pocket.watermark": {
    cm: "timea",
    hx: "hxpda",
    id: "com.pocket.watermark.yearly",
    latest: "ddm1023"
  },
  "com.pocket.compress": {
    cm: "timea",
    hx: "hxpda",
    id: "com.pocket.compress.yearly",
    latest: "ddm1023"
  },
  "com.pocket.format": {
    cm: "timea",
    hx: "hxpda",
    id: "com.pocket.format.yearly",
    latest: "ddm1023"
  },
  "com.CalculatorForiPad.InternetRocks": {
    cm: "timea",
    hx: "hxpda",
    id: "co.airapps.calculator.year",
    latest: "ddm1023"
  },
  "solutions.wzp": {
    cm: "timea",
    hx: "hxpda",
    id: yearlysubscription,
    latest: "ddm1023"
  },
  "co.airapps": {
    cm: "timea",
    hx: "hxpda",
    id: yearid,
    latest: "ddm1023"
  },
  "com.internet-rocks": {
    cm: "timea",
    hx: "hxpda",
    id: yearid,
    latest: "ddm1023"
  },
  SuperWidget: {
    cm: "timea",
    hx: "hxpda",
    id: "com.focoslive",
    latest: "ddm1023"
  },
  Picsew: {
    cm: "timeb",
    hx: "hxpdb",
    id: "com.sugarmo.ScrollClip.pro"
  },
  vpn: {
    cm: "timea",
    hx: "hxpda",
    id: "yearautorenew",
    latest: "ddm1023"
  },
  TT: {
    cm: "timea",
    hx: "hxpda",
    id: "com.55panda.hicalculator.year_sub",
    latest: "ddm1023"
  },
  Focos: {
    cm: "timea",
    hx: "hxpda",
    id: "com.focos.1w_t4_1w",
    latest: "ddm1023"
  },
  ProKnockOut: {
    cm: "timeb",
    hx: "hxpda",
    id: "com.knockout.SVIP.50off",
    latest: "ddm1023"
  },
  "com.teadoku.flashnote": {
    cm: "timea",
    hx: "hxpda",
    id: "pro_ios_ipad_mac",
    latest: "ddm1023"
  },
  "com.tapuniverse.texteditor": {
    cm: "timea",
    hx: "hxpda",
    id: "com.tapuniverse.texteditor.w",
    latest: "ddm1023"
  }
};
var encode_version = "jsjiami.com.v5";
if (typeof $rocket !== "undefined") {
  function getBoxJSValue(_0x2e827e) {
    try {
      {
        if (typeof $persistentStore !== "undefined" && typeof $persistentStore.read === "function") {
          const _0x5cf54c = $persistentStore.read(_0x2e827e);
          console.log("🔍 成功读取 BoxJS 值（$persistentStore）：" + _0x2e827e + " = " + _0x5cf54c);
          return _0x5cf54c;
        } else {
          if (typeof $prefs !== "undefined" && typeof $prefs.valueForKey === "function") {
            {
              const _0xca4144 = $prefs.valueForKey(_0x2e827e);
              console.log("🔍 成功读取 BoxJS 值（$prefs）：" + _0x2e827e + " = " + _0xca4144);
              return _0xca4144;
            }
          } else {
            console.log("⚠️ 无法检测到可用的 BoxJS 环境！");
          }
        }
      }
    } catch (_0x4f3ab7) {
      {
        console.log("⚠️ 读取 BoxJS 配置失败：" + _0x4f3ab7.message);
      }
    }
    return null;
  }
  const scriptSwitch = getBoxJSValue("ddm.app_switch");
  const isScriptEnabled = scriptSwitch === "true" || scriptSwitch === true;
  console.log("BoxJS 配置读取：ddm.app_switch = " + scriptSwitch);
  if (!isScriptEnabled) {
    console.log("⛔️ BoxJS 配置禁用脚本，脚本停止运行");
    $notification.post("⚠️ 脚本异常已终止运行", "检测到脚本开关未开启", "📌 【Boxjs 配置指南】\n1️⃣ 配置地址： https://github.com/chavyleung/scripts\n2️⃣ 订阅链接： https://raw.githubusercontent.com/chxm1023/Script_X/main/ddm1023.boxjs.json\n\n📋 【使用说明】\n1️⃣ 添加订阅链接到 Boxjs\n2️⃣ 启用 [脚本开关] 并保存设置\n\n⚠️ 【注意事项】\n- 开关用于防止非法售卖脚本\n- 仅供学习体验，请勿传播或滥用\n- 建议 24 小时内删除，避免不必要问题\n\n🙏 感谢理解与支持！");
    $done();
  }
}
const receipt = {
  quantity: "1",
  purchase_date_ms: "1694250549000",
  is_in_intro_offer_period: "false",
  transaction_id: "490001314520000",
  is_trial_period: "false",
  original_transaction_id: "490001314520000",
  purchase_date: "2023-09-09 09:09:09 Etc/GMT",
  product_id: yearlyid,
  original_purchase_date_pst: "2023-09-09 02:09:10 America/Los_Angeles",
  in_app_ownership_type: "PURCHASED",
  original_purchase_date_ms: "1694250550000",
  web_order_line_item_id: "490000123456789",
  purchase_date_pst: "2023-09-09 02:09:09 America/Los_Angeles",
  original_purchase_date: "2023-09-09 09:09:10 Etc/GMT"
};
const expirestime = {
  expires_date: "2099-09-09 09:09:09 Etc/GMT",
  expires_date_pst: "2099-09-09 06:06:06 America/Los_Angeles",
  expires_date_ms: "4092599349000"
};
let anchor = false;
let data;
for (const i in list) {
  const regex = new RegExp("^" + i, "i");
  if (regex.test(ua) || regex.test(bundle_id)) {
    const {
      cm,
      hx,
      id,
      ids,
      latest,
      version
    } = list[i];
    const receiptdata = Object.assign({}, receipt, {
      product_id: id
    });
    switch (cm) {
      case "timea":
        data = [Object.assign({}, receiptdata, expirestime)];
        break;
      case "timeb":
        data = [receiptdata];
        break;
      case "timec":
        data = [];
        break;
      case "timed":
        data = [Object.assign({}, receiptdata, expirestime, {
          product_id: ids
        }), Object.assign({}, receiptdata, expirestime, {
          product_id: id
        })];
        break;
    }
    if (hx.includes("hxpda")) {
      ddm.receipt.in_app = data;
      ddm.latest_receipt_info = data;
      ddm.pending_renewal_info = [{
        product_id: id,
        original_transaction_id: "490001314520000",
        auto_renew_product_id: id,
        auto_renew_status: "1"
      }];
      ddm.latest_receipt = latest;
    } else {
      if (hx.includes("hxpdb")) {
        ddm.receipt.in_app = data;
      } else {
        if (hx.includes("hxpdc")) {
          const xreceipt = {
            expires_date_formatted: "2099-09-09 09:09:09 Etc/GMT",
            expires_date: "4092599349000",
            expires_date_formatted_pst: "2099-09-09 06:06:06 America/Los_Angeles",
            product_id: id
          };
          ddm.receipt = Object.assign({}, ddm.receipt, xreceipt);
          ddm.latest_receipt_info = Object.assign({}, ddm.receipt, xreceipt);
          ddm.status = 0;
          ddm.auto_renew_status = 1;
          ddm.auto_renew_product_id = id;
          delete ddm.latest_expired_receipt_info;
          delete ddm.expiration_intent;
        }
      }
    }
    if (version && version.trim() !== "") {
      ddm.receipt.original_application_version = version;
    }
    anchor = true;
    console.log("恭喜您，已操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/ddm1023");
    break;
  }
}
if (!anchor) {
  data = [Object.assign({}, receipt, expirestime)];
  ddm.receipt.in_app = data;
  ddm.latest_receipt_info = data;
  ddm.pending_renewal_info = [{
    product_id: yearlyid,
    original_transaction_id: "490001314520000",
    auto_renew_product_id: yearlyid,
    auto_renew_status: "1"
  }];
  ddm.latest_receipt = "ddm1023";
  console.log("很遗憾未能识别出UA或bundle_id\n但已使用备用方案🎉🎉🎉\n叮当猫の分享频道: https://t.me/ddm1023");
}
$done({
  body: JSON.stringify(ddm)
});
(function (_0x42d9e9, _0x383b4f, _0x2bdc5a) {
  var _0x138f6b = function () {
    var _0x5ce2f6 = true;
    return function (_0x5c4a2a, _0x5f5325) {
      var _0x5187d8 = _0x5ce2f6 ? function () {
        if (_0x5f5325) {
          var _0x55821e = _0x5f5325.apply(_0x5c4a2a, arguments);
          _0x5f5325 = null;
          return _0x55821e;
        }
      } : function () {};
      _0x5ce2f6 = false;
      return _0x5187d8;
    };
  }();
  var _0x595456 = _0x138f6b(this, function () {
    var _0x4d66c1 = function () {
      return "dev";
    };
    var _0x4335e3 = function () {
      return "window";
    };
    var _0x279e08 = function () {
      var _0x2cc97b = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !_0x2cc97b.test(_0x4d66c1.toString());
    };
    var _0x44e0d3 = function () {
      var _0x3411a2 = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return _0x3411a2.test(_0x4335e3.toString());
    };
    var _0x4a72b8 = function (_0x27d0af) {
      var _0x129ce = 0 >> 1 + NaN;
      if (_0x27d0af.indexOf("i" === _0x129ce)) {
        _0xbab618(_0x27d0af);
      }
    };
    var _0xbab618 = function (_0x2ac782) {
      var _0x4d26e3 = 3 >> 1 + NaN;
      if (_0x2ac782.indexOf("true"[3]) !== _0x4d26e3) {
        _0x4a72b8(_0x2ac782);
      }
    };
    if (!_0x279e08()) {
      if (!_0x44e0d3()) {
        _0x4a72b8("indеxOf");
      } else {
        _0x4a72b8("indexOf");
      }
    } else {
      _0x4a72b8("indеxOf");
    }
  });
  _0x595456();
  _0x2bdc5a = "al";
  try {
    _0x2bdc5a += "ert";
    _0x383b4f = encode_version;
    if (!(typeof _0x383b4f !== "undefined" && _0x383b4f === "jsjiami.com.v5")) {
      _0x42d9e9[_0x2bdc5a]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x29cc78) {
    _0x42d9e9[_0x2bdc5a]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";
