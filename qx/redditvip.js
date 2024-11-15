let body = $response.body;
try {
  let data = JSON.parse(body);

  // 去除 NSFW 提示
  JSON.stringify(data).replace(/"isNsfw":true/g, '"isNsfw":false')
                     .replace(/"isNsfwMediaBlocked":true/g, '"isNsfwMediaBlocked":false')
                     .replace(/"isNsfwContentShown":false/g, '"isNsfwContentShown":true');

  // 去广告逻辑
  if (data.data?.children?.commentsPageAds) {
    data.data.children.commentsPageAds = [];
  }
  for (const key in data.data) {
    if (data.data[key]?.elements?.edges) {
      data.data[key].elements.edges = data.data[key].elements.edges.filter(
        edge =>
          !["AdPost"].includes(edge?.node?.__typename) &&
          !(edge?.node?.cells?.some(cell => cell?.__typename === "AdMetadataCell")) &&
          !edge?.node?.adPayload
      );
    }
  }

  // 解锁会员功能
  body = JSON.stringify(data)
    .replace(/"isPremiumMember":false/g, '"isPremiumMember":true')
    .replace(/"isSubscribed":false/g, '"isSubscribed":true')
    .replace(/"isEmployee":false/g, '"isEmployee":true')
    .replace(/"skus": \[\]/g, '"skus": [{"kind":"Premium","subscriptionType":"Premium","name":"Premium Subscription","description":"Mobile Annual Premium Subscription","duration":{"amount":1,"unit":"YEAR"},"id":"1","quantity":"1","renewInterval":"YEAR","requiredPaymentProviders":["APPLE_INAPP","GOOGLE_INAPP"],"externalProductId":"com.reddit.premium_2","promos":[],"tags":[]}]')
    .replace(
      /({)/,
      '$1"has_gold_subscription":true, "pref_autoplay":false, "has_subscribed_to_premium":true, "has_visited_new_profile":true, "pref_video_autoplay":false, "features":{"promoted_trend_blanks":false}, "is_mod":true, "user_is_subscriber":true, "hide_ads":true, "isPremiumMember":true, "is_gold":true, "isBrandAffiliate": true, "has_ios_subscription":true, "seen_premium_adblock_modal":true, "has_external_account":true,'
    );

} catch (error) {
  console.log("Error parsing JSON: ", error);
}

$done({ body });