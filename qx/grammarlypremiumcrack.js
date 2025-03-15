/*
📜 ✨ Grammarly ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https?:\/\/subscription\.grammarly\.com\/api\/v1\/subscription$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/grammarlypremiumcrack.js

[Script] // Surge
Grammarly = type=http-response, pattern=^https?:\/\/subscription\.grammarly\.com\/api\/v1\/subscription$, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/grammarlypremiumcrack.js, timeout=60

[Script] // Loon
http-response ^https?:\/\/subscription\.grammarly\.com\/api\/v1\/subscription$ script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/grammarlypremiumcrack.js, requires-body=true, timeout=60

[MITM]
hostname = subscription.grammarly.com

*/

// 主脚本函数...
try {
    var body = $response.body;
    var body = JSON.parse(body);

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
// 主脚本函数...

    // 添加通知功能
    const appName = "✨Grammarly✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10;
    const cooldownMs = cooldownMinutes * 60 * 1000;
    
    const notifyKey = "grammarly_notify_key_v3";
    const now = Date.now();
    let lastNotifyTime = 0;
    
    try {
        const storedTime = $persistentStore.read(notifyKey);
        if (storedTime) {
            lastNotifyTime = parseInt(storedTime);
            if (isNaN(lastNotifyTime)) lastNotifyTime = 0;
        }
    } catch (e) {
        lastNotifyTime = 0;
    }
    
    if (now - lastNotifyTime > cooldownMs) {
        if (typeof $notification !== 'undefined') {
            $notification.post(appName, author, message);
        } else if (typeof $notify !== 'undefined') {
            $notify(appName, author, message);
        }
        $persistentStore.write(now.toString(), notifyKey);
    }

    body = JSON.stringify(body);
    $done({ body });
} catch (e) {
    $done({ body: $response.body });
}