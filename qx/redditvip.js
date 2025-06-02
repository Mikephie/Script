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
function processResponse() {
  let body = $response.body;
  
  try {
    let obj = JSON.parse(body);
    obj = removeAdsAndNsfw(obj);
    
    // 解锁VIP功能
    body = JSON.stringify(obj)
      .replace(/"isPremiumMember":false/g, '"isPremiumMember":true')
      .replace(/"isSubscribed":false/g, '"isSubscribed":true')
      .replace(/"isEmployee":false/g, '"isEmployee":true')
      .replace(/"skus": \[\]/g, '"skus": [{"kind":"Premium","subscriptionType":"Premium","name":"Premium Subscription","description":"Mobile Annual Premium Subscription","duration":{"amount":1,"unit":"YEAR"},"id":"1","quantity":"1","renewInterval":"YEAR","requiredPaymentProviders":["APPLE_INAPP","GOOGLE_INAPP"],"externalProductId":"com.reddit.premium_2","promos":[],"tags":[]}]')
      .replace(/({)/, '$1"has_gold_subscription":true,"pref_autoplay":false,"has_subscribed_to_premium":true,"has_visited_new_profile":true,"pref_video_autoplay":false,"features":{"promoted_trend_blanks":false},"is_mod":true,"user_is_subscriber":true,"hide_ads":true,"is_gold":true,"isBrandAffiliate":true,"has_ios_subscription":true,"seen_premium_adblock_modal":true,"has_external_account":true,');
    
    return body;
  } catch (e) {
    console.log(`Reddit脚本处理错误: ${e.message}`);
    return body;
  }
}

// 实现JQ过滤器的等效JavaScript函数
function removeAdsAndNsfw(data) {
  // 如果不是对象，直接返回
  if (!data || typeof data !== 'object') return data;
  
  // 处理NSFW相关设置
  if ('isNsfw' in data && data.isNsfw === true) {
    data.isNsfw = false;
  }
  
  if ('isNsfwMediaBlocked' in data && data.isNsfwMediaBlocked === true) {
    data.isNsfwMediaBlocked = false;
  }
  
  if ('isNsfwContentShown' in data && data.isNsfwContentShown === false) {
    data.isNsfwContentShown = true;
  }
  
  // 清空评论页广告
  if ('commentsPageAds' in data && Array.isArray(data.commentsPageAds)) {
    data.commentsPageAds = [];
  }
  
  // 处理数组
  if (Array.isArray(data)) {
    return data.filter(item => {
      // 过滤掉广告帖子
      if (item && item.__typename === 'AdPost') {
        return false;
      }
      
      // 过滤掉含有广告单元格的帖子
      if (item && item.node && 
          item.node.cells && 
          Array.isArray(item.node.cells) && 
          item.node.cells.some(cell => 
            (cell && cell.__typename === 'AdMetadataCell') || 
            (cell && cell.isAdPost === true)
          )) {
        return false;
      }
      
      // 过滤掉含有广告载荷的节点
      if (item && item.node && item.node.adPayload) {
        return false;
      }
      
      return true;
    }).map(item => removeAdsAndNsfw(item));
  }
  
  // 递归处理对象的每个属性
  const result = {...data};
  for (const key in result) {
    if (result[key] && typeof result[key] === 'object') {
      if (key === 'edges' && Array.isArray(result[key])) {
        // 特殊处理edges数组，这是Reddit GraphQL API中常见的结构
        result[key] = removeAdsAndNsfw(result[key]);
      } else {
        result[key] = removeAdsAndNsfw(result[key]);
      }
    }
  }
  
  return result;
}

// 执行脚本
const modifiedBody = processResponse();
$done({body: modifiedBody});
// 主脚本函数...