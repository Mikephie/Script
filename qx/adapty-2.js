/*

📜 adapty-合集 解锁 VIP 脚本
📅 更新时间：2024年11月09日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/api\.adapty\.io\/api\/v\d\/sdk\/(analytics\/profiles|in-apps\/(apple\/receipt\/validate|purchase-containers)|purchase\/app-store) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/adapty.js

[mitm]
hostname = api.adapty.io

*/


let mikephie = JSON.parse($response.body);
const headers = $request.headers;
const ua = headers['User-Agent'] || headers['user-agent'];
const profileid = headers['adapty-sdk-profile-id'] || headers['ADAPTY-SDK-PROFILE-ID'];
const time = Date.now(); // 当前时间戳

const list = {
  'Flight%20Tracker': { dy: 'dypda', id: "com.iaftt.flightplusfree.49.99year", bundle_id: "com.iaftt.flightplusfree" },
  '$%7BPRODUCT_NAME%7D': { dy: 'dypda', id: "com.iaftt.flightplusfree.49.99year", bundle_id: "com.iaftt.flightplusfree" },  //FlightTracker - 飞机追踪
  'AvA': { dy: 'dypda', id: "momo_yearly_subs_pro", bundle_id: "com.scaleup.dreame" },  //Momo
  'PlantApp': { dy: 'dypda', id: "plantapp.lifetime.promoted.sub", bundle_id: "com.scaleup.plantid" },  //PlantApp-植物识别
  'KeyboardGPT': { dy: 'dypda', id: "smart.keyboard.yearly.01", bundle_id: "com.smart.keyboard" },  //AiChatbot
  'SketchAR': { dy: 'dypda', id: "tech.sketchar.subscription.yearly", bundle_id: "tech.sketchar.ios" },  //Sketchar-AR画图应用
  'universal': { dy: 'dypda', id: "remotetv.yearly.01", bundle_id: "com.universal.remotetv", },  //TVRemote万能遥控器
  'Lingvist': { dy: 'dypda', id: "com.lingvist.unlimited_12_months.v11.full_1md_ft", bundle_id: "ee.keel24.Lingvist" },  //Lingvist-学习英语
  'ChatAI': { dy: 'dypda', id: "chatai_yearly_ios", bundle_id: "com.scaleup.chatai" },  //Nova-chat机器人
  'FacePlus': { dy: 'dypda', id: "faceplus_yearly_subs_3dft_ios", bundle_id: "com.scaleup.faceplus" },  //Retouch: Al FaceEditor
  'Batched': { dy: 'dypdba', id: "com.advasoft.batched.premium_year", bundle_id: "com.advasoft.batched" }  //Batched-多量图片编辑器
};

const premiumTemplate = {"id":"premium","is_lifetime":false,"store":"app_store","starts_at":"2024-04-04T04:04:04.000000+0000","expires_at":"2088-08-08T08:08:08.000000+0000","will_renew":true,"is_active":true,"is_in_grace_period":false,"activated_at":"2024-04-04T04:04:04.000000+0000","renewed_at":"2024-04-04T04:04:04.000000+0000","is_refund":false,"vendor_transaction_id":"300002087810351","vendor_original_transaction_id":"300002087810351","is_sandbox":false,"active_introductory_offer_type":"trial"};

const receiptTemplate = {"quantity":"1","purchase_date_ms":"1712174644000","expires_date":"2088-08-08 08:08:08 Etc/GMT","expires_date_pst":"2088-08-08 08:08:08 America/Los_Angeles","is_in_intro_offer_period":"false","transaction_id":"300002087810351","is_trial_period":"true","original_transaction_id":"300002087810351","purchase_date":"2024-04-04 04:04:04 Etc/GMT","original_purchase_date_pst":"2024-04-04 04:04:04 America/Los_Angeles","in_app_ownership_type":"PURCHASED","original_purchase_date_ms":"1712174644000","web_order_line_item_id":"300002087810351","expires_date_ms":"3742762088000","purchase_date_pst":"2024-04-04T04:04:04Z America/Los_Angeles","original_purchase_date":"2024-04-04T04:04:04Z Etc/GMT"};
 
const buildSubscriptionData = function(appConfig) {
  const subscriptions = {};
  const receiptData = [];
  subscriptions[appConfig.id] = Object.assign({}, premiumTemplate, { "vendor_product_id": appConfig.id });
  receiptData.push(Object.assign({}, receiptTemplate, { "product_id": appConfig.id }));
  if (appConfig.dy === "dypdb" && appConfig.ids) {
    subscriptions[appConfig.ids] = Object.assign({}, premiumTemplate, { "vendor_product_id": appConfig.ids });
    receiptData.push(Object.assign({}, receiptTemplate, { "product_id": appConfig.ids }));
  }
  return { subscriptions, receiptData };
}

const buildResponseData = function(appConfig) {
  const { subscriptions, receiptData } = buildSubscriptionData(appConfig);
  const appleValidationResult = {"environment":"Production","receipt":{"receipt_type":"Production","app_item_id":6446992925,"bundle_id":appConfig.bundle_id,"in_app":receiptData,"original_purchase_date":"2024-04-04 04:04:04 Etc/GMT"},"status":0,"pending_renewal_info":[{"expiration_intent":"1","product_id":appConfig.id,"is_in_billing_retry_period":"0","auto_renew_product_id":appConfig.id,"auto_renew_status":"0"}],"latest_receipt_info":receiptData,"latest_receipt":"mikephie"};
  return {"data":{"type":"adapty_inapps_apple_receipt_validation_result","id":profileid,"attributes":{"app_id":"dde4cae7-fdd9-4837-92fb-70c0432b0011","profile_id":profileid,"segment_hash":"ef46db3751d8e999","subscriptions":subscriptions,"total_revenue_usd":0,"paid_access_levels":{"premium":Object.assign({},premiumTemplate,{"vendor_product_id":appConfig.id})},"apple_validation_result":appleValidationResult}}};
}

for (const appName in list) {
  if (new RegExp(`^${appName}`, 'i').test(ua)) {
    const appConfig = list[appName];
    if (/receipt\/validate|purchase-containers/.test($request.url)) {
      mikephie = buildResponseData(appConfig);
    } else if (/analytics\/profiles|purchase\/app-store/.test($request.url)) {
      mikephie.data = Object.assign({}, mikephie.data,{"type":"adapty_purchase_app_store_original_transaction_id_validation_result","id":profileid,"attributes":{"app_id":"dde4cae7-fdd9-4837-92fb-70c0432b0011","profile_id":profileid,"is_test_user":false,"segment_hash":"ef46db3751d8e999","timestamp":time,"apple_validation_result":{"environment":"Production","revision":"1731137627000_300002087810351_4","appAppleId":6446992925,"transactions":[{"productId":appConfig.id,"storefront":"US","transactionId":"300002087810351","originalTransactionId":"300002087810351","expiresDate":"2088-08-08T08:08:08Z","purchaseDate":"2024-04-04 04:04:04Z"}],"bundleId":appConfig.bundle_id},"subscriptions":buildSubscriptionData(appConfig).subscriptions,"paid_access_levels":{"premium":Object.assign({},premiumTemplate,{"vendor_product_id":appConfig.id})}}});
    }
    console.log("操作成功 🎉\nMIKEPHIE频道: https://t.me/mikephie");
    break;
  }
}

$done({ body: JSON.stringify(mikephie) });