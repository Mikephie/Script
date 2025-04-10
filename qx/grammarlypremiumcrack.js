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

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "Grammarly_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Grammarly✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ❷❾-❾❾-❷❾❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

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