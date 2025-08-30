/*
#!name= ✨ Grammarly ✨
#!desc=效率
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/grammarly.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https?:\/\/subscription\.grammarly\.com\/api\/v1\/subscription$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/grammarlypremiumcrack.js

[MITM]
hostname = subscription.grammarly.com

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ Grammarly ✨";   // ← 只改这个显示名
const ID = "grammarly";              // ← 对应键名，保持纯字母数字（无 emoji）

const EN = "n:"+ID+":e";             // 开关
const TS = "n:"+ID+":t";             // 时间戳
const CD = 600000;                   // 冷却时长：10 分钟（毫秒）

// ---- 通知函数（兼容 QX / Surge / Loon）----
function notify(t,s,b){
  if (typeof $notify==="function") $notify(t,s,b);
  else if ($notification?.post) $notification.post(t,s,b);
  else console.log("[Notify]", t, s, b);
}

// ---- 判定逻辑 ----
let enabled = (($persistentStore.read(EN) || "1") === "0");
if (enabled) {
  let now  = Date.now();
  let last = parseInt($persistentStore.read(TS) || "0",10) || 0;
  if (last===0 || now-last>CD) {
    notify(APP_NAME,"💖永久解锁 🆚 ⓿❽-⓿❽-❷⓿❽❽💗");
    $persistentStore.write(String(now), TS);
  }
}

// 主脚本函数...
var body = $response.body;
var body = JSON.parse(body);

if (!body) { $done({}); }

body = {
    "isPremium": true,
    "nextPayDate": "Oct 28, 2999 4:56:52 AM",
    "isCancelled": false,
    "isDunning": false,
    "isPaymentMethodFailed": false,
    "isFree": false,
    "canCancelPlanSwitch": false,
    "isFreebie": false,
    "isPremiumConversion": true,
    "isLegacyPayPal": false,
    "isOnTrial": false,
    "currentPlan": {
        "id": 1005,
        "regularPlanId": 1005,
        "title": "Annual",
        "description": "1-year Grammarly Subscription",
        "regularPrice": 144.0,
        "regularPriceMoney": {
            "currency": "USD",
            "value": 144.0
        },
        "price": 144.0,
        "priceMoney": {
            "currency": "USD",
            "value": 144.0
        },
        "periodMonths": 12,
        "hasTrial": false,
        "trialDays": 0,
        "firstThreeMonthsPromo": 0,
        "baseInstitutionCampaign": false
    },
    "institutionPlans": [{
        "id": 10200462,
        "regularPlanId": 10200462,
        "title": "Monthly",
        "description": "1-month Grammarly Subscription",
        "regularPrice": 25.0,
        "regularPriceMoney": {
            "currency": "USD",
            "value": 25.0
        },
        "price": 25.0,
        "priceMoney": {
            "currency": "USD",
            "value": 25.0
        },
        "periodMonths": 1,
        "hasTrial": false,
        "trialDays": 0,
        "firstThreeMonthsPromo": 0,
        "baseInstitutionCampaign": true
    }, {
        "id": 10200486,
        "regularPlanId": 10200486,
        "title": "Annual",
        "description": "1-year Grammarly Subscription",
        "regularPrice": 180.0,
        "regularPriceMoney": {
            "currency": "USD",
            "value": 180.0
        },
        "price": 180.0,
        "priceMoney": {
            "currency": "USD",
            "value": 180.0
        },
        "periodMonths": 12,
        "hasTrial": true,
        "trialDays": 7,
        "firstThreeMonthsPromo": 0,
        "baseInstitutionCampaign": true
    }],
    "pricingOptions": {
        "discountSuppressed": false,
        "taxDisplayType": "none",
        "individualSubscriptionExclusivePricingEnabled": false,
        "renewalPriceType": "INCLUSIVE"
    },
    "paymentMethodOptions": {
        "payPalDisabled": false,
        "americanExpressDisabled": false,
        "disabledCardTypes": []
    },
    "paymentMethod": "creditCard",
    "subscriptionPaymentMethods": ["creditCard"],
    "creditCard": {
        "cardType": "Visa"
    },
    "isAppleSubscription": false,
    "isGooglePlaySubscription": false,
    "isSamsungPlan": false,
    "customerSince": "Aug 27, 2020 8:11:05 PM",
    "lastSubscribedDate": "Oct 20, 2021 4:56:55 AM",
    "state": "DEFAULT"
};

$done({ body: JSON.stringify(body) });
// 主脚本函数...