// ==UserScript==
// @name        Reddit Premium Unlock
// @version     1.1
// @description Unlock Reddit Premium Features in Loon
// @match       ^https?:\/\/api\.reddit\.com
// ==/UserScript==

let body = $response.body;

// 输出原始响应体（用于调试）
console.log("Original body:", body);

// 模拟会员状态和广告占位
body = body
  .replace(/"isPremiumMember":false/g, '"isPremiumMember":true')
  .replace(/"isSubscribed":false/g, '"isSubscribed":true')
  .replace(/"isEmployee":false/g, '"isEmployee":true')
  .replace(/"commentsPageAds":\[\]/g, '"commentsPageAds":[{"ad":"placeholder"}]')
  .replace(/"skus":\[\]/g, '"skus":[{"kind":"Premium","subscriptionType":"Premium","name":"Premium Subscription","description":"Mobile Annual Premium Subscription","duration":{"amount":1,"unit":"YEAR"},"id":"1","quantity":"1","renewInterval":"YEAR","requiredPaymentProviders":["APPLE_INAPP","GOOGLE_INAPP"],"externalProductId":"com.reddit.premium_2","promos":[],"tags":[]}]')
  .replace(
    /({)/,
    '$1"has_gold_subscription":true, "pref_autoplay":false, "has_subscribed_to_premium":true, "has_visited_new_profile":true, "pref_video_autoplay":false, "features":{"promoted_trend_blanks":false}, "is_mod":true, "user_is_subscriber":true, "hide_ads":true, "isPremiumMember":true, "is_gold":true, "isBrandAffiliate": true, "has_ios_subscription":true, "seen_premium_adblock_modal":true, "has_external_account":true,'
  );

// 输出修改后的响应体（用于调试）
console.log("Modified body:", body);

// 返回修改后的响应体
$done({ body });