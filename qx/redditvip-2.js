/*
#!name= ✨ RedditVIP ✨
#!desc=Reddit去广告+解锁VIP
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/reddit.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local] // Quantumult X
^https:\/\/gql-fed\.reddit\.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip.js

[MITM]
hostname = gql-fed.reddit.com

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "RedditVIP_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨RedditVIP✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
function patchVip(obj) {
  Object.assign(obj, {
    isPremiumMember: true,
    isSubscribed: true,
    isEmployee: true,
    has_gold_subscription: true,
    pref_autoplay: false,
    has_subscribed_to_premium: true,
    has_visited_new_profile: true,
    pref_video_autoplay: false,
    features: { promoted_trend_blanks: false },
    is_mod: true,
    user_is_subscriber: true,
    hide_ads: true,
    is_gold: true,
    isBrandAffiliate: true,
    has_ios_subscription: true,
    seen_premium_adblock_modal: true,
    has_external_account: true,
    skus: [{
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
    }]
  });
}

function fastFilterAds(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  // 过滤典型广告节点
  if (Array.isArray(obj)) {
    return obj
      .filter(item => !(item && (
        item.__typename === 'AdPost' ||
        (item.node && (
          (item.node.cells && item.node.cells.some(cell => cell && cell.__typename === 'AdMetadataCell')) ||
          item.node.adPayload
        ))
      )))
      .map(fastFilterAds);
  }
  // 常规 edges/posts/children 递归过滤
  for (const key of ['edges', 'posts', 'items', 'children', 'commentsPageAds']) {
    if (obj[key] && Array.isArray(obj[key])) {
      obj[key] = fastFilterAds(obj[key]);
    }
    if (key === 'commentsPageAds') obj[key] = []; // 清空广告
  }
  // NSFW 处理
  if ('isNsfw' in obj) obj.isNsfw = false;
  if ('isNsfwMediaBlocked' in obj) obj.isNsfwMediaBlocked = false;
  if ('isNsfwContentShown' in obj) obj.isNsfwContentShown = true;
  return obj;
}

function processResponse() {
  let body = $response.body;
  try {
    let obj = JSON.parse(body);
    patchVip(obj);
    fastFilterAds(obj);
    return JSON.stringify(obj);
  } catch (e) {
    console.log(`Reddit脚本处理错误: ${e.message}`);
    return body;
  }
}

const modifiedBody = processResponse();
$done({body: modifiedBody});
// 主脚本函数...