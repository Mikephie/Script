let body = $response.body;
try {
  let data = JSON.parse(body);

  // 去除广告和 NSFW 提示
  function cleanAdsAndNSFW(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;

    // 处理 NSFW 属性
    if (obj.isNsfw === true) obj.isNsfw = false;
    if (obj.isNsfwMediaBlocked === true) obj.isNsfwMediaBlocked = false;
    if (obj.isNsfwContentShown === false) obj.isNsfwContentShown = true;

    // 去除广告内容
    if (Array.isArray(obj.commentsPageAds)) obj.commentsPageAds = [];

    // 删除广告帖子
    if (obj.__typename === "AdPost") return null;
    if (obj.node?.__typename === "AdPost") return null;

    // 移除广告相关单元格
    if (Array.isArray(obj.node?.cells)) {
      obj.node.cells = obj.node.cells.filter(
        cell => cell.__typename !== "AdMetadataCell" && cell.isAdPost !== true
      );
    }

    // 清除广告负载字段
    if (obj.node?.adPayload) {
      delete obj.node.adPayload;
    }

    // 遍历并处理子对象
    for (const key in obj) {
      obj[key] = cleanAdsAndNSFW(obj[key]);
    }

    return obj;
  }

  // 应用去广告和 NSFW 清理
  data = cleanAdsAndNSFW(data);

  // 解锁会员功能
  data.isPremiumMember = true;
  data.isSubscribed = true;
  data.isEmployee = true;
  data.skus = [
    {
      kind: "Premium",
      subscriptionType: "Premium",
      name: "Premium Subscription",
      description: "Mobile Annual Premium Subscription",
      duration: { amount: 1, unit: "YEAR" },
      id: "1",
      quantity: "1",
      renewInterval: "YEAR",
      requiredPaymentProviders: ["APPLE_INAPP", "GOOGLE_INAPP"],
      externalProductId: "com.reddit.premium_2",
      promos: [],
      tags: []
    }
  ];
  data.has_gold_subscription = true;
  data.pref_autoplay = false;
  data.has_subscribed_to_premium = true;
  data.has_visited_new_profile = true;
  data.pref_video_autoplay = false;
  data.features = { promoted_trend_blanks: false };
  data.is_mod = true;
  data.user_is_subscriber = true;
  data.hide_ads = true;
  data.is_gold = true;
  data.isBrandAffiliate = true;
  data.has_ios_subscription = true;
  data.seen_premium_adblock_modal = true;
  data.has_external_account = true;

  body = JSON.stringify(data);

} catch (error) {
  console.log("Error processing response:", error);
}

$done({ body });