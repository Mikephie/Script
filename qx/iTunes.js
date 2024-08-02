/*************************************

项目名称：iTunes-系列解锁合集
<<<<<<< HEAD
<<<<<<< main
更新日期：2024-6-08
=======
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：如果脚本无效，请先排除是否脚本冲突
特别说明：此脚本可能会导致App Store无法登录ID
解决方法：关[MITM][脚本][代理工具]方法选一即可

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/iTunes.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var mikephie = {};
var mikephie76 = JSON.parse(typeof $response != "undefined" && $response.body || null);
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
var uaProductMapping = {
  'ScreenRecord': {product_id: 'https://t.me/mikephie'},
  'iVCam': {product_id: 'ivcam.full'},  //iVCam
  'ChickAlarmClock': {product_id: 'Pro_M01'},  //小鸡专注
  'TWWeatherMajor': {product_id: 'com.highonemob.weather.base.w'},
  'ProKnockOut': {product_id: 'com.knockout.SVIP.50off'},  //ProKnockOut
  'Prettya': {product_id: 'com.floatcamellia.prettyup.onetimepurchase'},  //PrettyUp视频P图
  'Dial': {product_id: '2104'},  //T9拨号
  'UCamera': {product_id: '644377109922'},  //最美证件照
  'com.pocket.photo': {product_id: 'com.pocket.photo.yearly'},  //一寸证件照
  'HashPhotos': {product_id: 'com.kobaltlab.HashPhotos.iap.allinone.free'},  //HashPhotos
  'AllMyBatteries': {product_id: 'https://t.me/Guding88'},
  'Subscriptions': {product_id: 'com.touchbits.subscriptions.iap.pro.yearly'},  //订阅通
  'TimeCut': {product_id: 'com.floatcamellia.hfrslowmotion.forevervip'},  //TimeCut
  'imgplay': {product_id: 'me.imgbase.imgplay.subscriptionYearly'},  //imgPlay
  'Ever%20Play': {product_id: 'om.zhangchao.AudioPlayer.subscription.oneWeek'},  //EverPlay
  'intolive': {product_id: 'me.imgbase.intolive.proSubYearly'},  //intolive-实况壁纸制作器
  'PhotosSorter': {product_id: 'sorter.pro.ipa'},  //Sorter-相册整理
  'OneExtractor': {product_id: 'com.OneExtractor.Video.Forever'},  //视频提取器
  'Xfuse': {product_id: 'com.xfuse.ProVision'},  //磁力宅播放器
  'Boom': {product_id: 'com.globaldelight.iBoom.LifetimeDiscountPack'},  //Boom
  'FastPlayer': {product_id: 'VideoPlayer_ProVersion'},  //万能扫描王
  #'%E4%B8%87%E8%83%BD%E6%89%AB%E6%8F%8F%E7%8E%8B': {product_id: 'Scanner_Subscibe_Permanent'},  //万能扫描王

};
var receipt = {
  "quantity": "1",
  "purchase_date_ms": "1713903844000",
  "expires_date": "2088-08-08 08:08:08 Etc\/GMT",
  "expires_date_pst": "2088-08-08 08:08:08 America\/Los_Angeles",
  "is_in_intro_offer_period": "false",
  "transaction_id": "888888888888888",
  "is_trial_period": "false",
  "original_transaction_id": "888888888888888",
  "purchase_date": "2024-04-24 04:24:04 Etc\/GMT",
  "product_id": "https://t.me/mikephie",
  "original_purchase_date_pst": "2024-04-24 04:24:04 America\/Los_Angeles",
  "in_app_ownership_type": "PURCHASED",
  "subscription_group_identifier": "20431945",
  "original_purchase_date_ms": "1713903844000",
  "web_order_line_item_id": "888888888888888",
  "expires_date_ms": "3742762088000",
  "purchase_date_pst": "2024-04-24 04:24:04 America\/Los_Angeles",
  "original_purchase_date": "2024-04-24 04:24:04 Etc\/GMT"
}
var renewal = {
  "expiration_intent": "1",
  "product_id": "https://t.me/mikephie",
  "is_in_billing_retry_period": "0",
  "auto_renew_product_id": "https://t.me/mikephie",
  "original_transaction_id": "888888888888888",
  "auto_renew_status": "0"
}
for (var uaKey in uaProductMapping) {
  if (UA && UA.includes(uaKey)) {
    var productInfo = uaProductMapping[uaKey];
    var product_id = productInfo.product_id;
    receipt.product_id = product_id;
    renewal.product_id = product_id;
    renewal.auto_renew_product_id = product_id;
    mikephie76.receipt.in_app = [receipt];
    mikephie76.latest_receipt_info = [receipt];
    mikephie.pending_renewal_info = [renewal];
    break;
  }
}
mikephie = mikephie76;
$done({ body: JSON.stringify(mikephie) });
