/*
 * Reddit Premium 解锁&去广告全兼容脚本
 * 作者：Mikephie
 
[rewrite_local]
^https?:\/\/gql(-fed)?\.reddit\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip.js

[MITM]
hostname = gql.reddit.com, gql-fed.reddit.com

 */

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ Reddit ✨";   // ← 只改这个显示名
const ID = "reddit";              // ← 对应键名，保持纯字母数字（无 emoji）

const EN = "n:"+ID+":e";             // 开关
const TS = "n:"+ID+":t";             // 时间戳
const CD = 60000000;                   // 冷却时长：10 分钟（毫秒）

// ---- 通知函数（兼容 QX / Surge / Loon）----
function notify(t,s,b){
  if (typeof $notify==="function") $notify(t,s,b);
  else if ($notification?.post) $notification.post(t,s,b);
  else console.log("[Notify]", t, s, b);
}

// ---- 判定逻辑 ----
let enabled = (($persistentStore.read(EN) || "1") === "1");
if (enabled) {
  let now  = Date.now();
  let last = parseInt($persistentStore.read(TS) || "0",10) || 0;
  if (last===0 || now-last>CD) {
    notify(APP_NAME,"💖永久解锁 🆚 ⓿❽-⓿❽-❷⓿❽❽💗");
    $persistentStore.write(String(now), TS);
  }
}

// ======= 主处理逻辑 =======

// 递归patch所有可能的会员/图标/广告/NSFW字段
function deepPatch(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj
    .filter(item => !(item && (
      item.__typename === 'AdPost' ||
      (item.node && (
        (item.node.cells && item.node.cells.some(cell => cell && cell.__typename === 'AdMetadataCell')) ||
        item.node.adPayload
      ))
    )))
    .map(deepPatch);

  for (const key in obj) {
    if (key === 'isPremiumMember' && obj[key] === false) obj[key] = true;
    if (key === 'isSubscribed' && obj[key] === false) obj[key] = true;
    if (key === 'isEmployee' && obj[key] === false) obj[key] = true;
    if (key === 'has_gold_subscription' && obj[key] === false) obj[key] = true;
    if (key === 'hasGoldSubscription' && obj[key] === false) obj[key] = true;
    if (key === 'isGold' && obj[key] === false) obj[key] = true;
    if (key === 'isGoldMember' && obj[key] === false) obj[key] = true;
    if (key === 'has_subscribed_to_premium' && obj[key] === false) obj[key] = true;
    if (key === 'isBrandAffiliate' && obj[key] === false) obj[key] = true;
    if (key === 'user_is_subscriber' && obj[key] === false) obj[key] = true;
    if (key === 'hide_ads' && obj[key] === false) obj[key] = true;
    if (key === 'has_ios_subscription' && obj[key] === false) obj[key] = true;
    if (key === 'seen_premium_adblock_modal' && obj[key] === false) obj[key] = true;
    if (key === 'has_external_account' && obj[key] === false) obj[key] = true;
    if (key === 'is_mod' && obj[key] === false) obj[key] = true;
    if (key === 'locked' && obj[key] === true) obj[key] = false; // 解锁图标
    if (key === 'commentsPageAds' && Array.isArray(obj[key])) obj[key] = []; // 清空广告
    if (key === 'isNsfw' && obj[key] === true) obj[key] = false;
    if (key === 'isNsfwMediaBlocked' && obj[key] === true) obj[key] = false;
    if (key === 'isNsfwContentShown' && obj[key] === false) obj[key] = true;

    // 自动补全skus字段（如有必要）
    if (key === 'skus' && Array.isArray(obj[key]) && obj[key].length === 0) {
      obj[key] = [{
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
      }];
    }

    // 递归
    if (typeof obj[key] === 'object') obj[key] = deepPatch(obj[key]);
  }
  return obj;
}

function processResponse() {
  let body = $response.body;
  try {
    let obj = JSON.parse(body);
    obj = deepPatch(obj);
    // 双保险：全局字符串替换，补漏
    body = JSON.stringify(obj)
      .replace(/"isPremiumMember":false/g, '"isPremiumMember":true')
      .replace(/"isSubscribed":false/g, '"isSubscribed":true')
      .replace(/"isEmployee":false/g, '"isEmployee":true')
      .replace(/"has_gold_subscription":false/g, '"has_gold_subscription":true')
      .replace(/"hasGoldSubscription":false/g, '"hasGoldSubscription":true')
      .replace(/"isGold":false/g, '"isGold":true')
      .replace(/"isGoldMember":false/g, '"isGoldMember":true')
      .replace(/"has_subscribed_to_premium":false/g, '"has_subscribed_to_premium":true')
      .replace(/"isBrandAffiliate":false/g, '"isBrandAffiliate":true')
      .replace(/"user_is_subscriber":false/g, '"user_is_subscriber":true')
      .replace(/"hide_ads":false/g, '"hide_ads":true')
      .replace(/"has_ios_subscription":false/g, '"has_ios_subscription":true')
      .replace(/"seen_premium_adblock_modal":false/g, '"seen_premium_adblock_modal":true')
      .replace(/"has_external_account":false/g, '"has_external_account":true')
      .replace(/"is_mod":false/g, '"is_mod":true')
      .replace(/"locked":true/g, '"locked":false')
      .replace(/"isNsfw":true/g, '"isNsfw":false')
      .replace(/"isNsfwMediaBlocked":true/g, '"isNsfwMediaBlocked":false')
      .replace(/"isNsfwContentShown":false/g, '"isNsfwContentShown":true');
    return body;
  } catch (e) {
    console.log(`Reddit解锁脚本处理错误: ${e.message}`);
    return body;
  }
}

const modifiedBody = processResponse();
$done({ body: modifiedBody });