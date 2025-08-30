/*
去广告by@xream 解锁会员 by@ios151

[rewrite_local]
^https?:\/\/gql(-fed)?\.reddit\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip-qx.js

[MITM]
hostname = gql.reddit.com, gql-fed.reddit.com

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ RedditVIP ✨";   // ← 只改这个显示名
const ID = "redditvip";              // ← 对应键名，保持纯字母数字（无 emoji）

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

let body;
try {
  body = JSON.parse($response.body.replace(/"isNsfw":true/g, '"isNsfw":false'));
  
  // 去广告
  if (body.data?.children?.commentsPageAds) {
    body.data.children.commentsPageAds = [];
  } 
  for (const [k, v] of Object.entries(body.data)) {
    if (v?.elements?.edges) {
      body.data[k].elements.edges = v.elements.edges.filter(
        i =>
          !['AdPost'].includes(i?.node?.__typename) &&
          !i?.node?.cells?.some(j => j?.__typename === 'AdMetadataCell') &&
          !i?.node?.adPayload
      );
    }
  }
  
  // 解锁会员
  body = JSON.stringify(body)
    .replace(/"isPremiumMember":false/g, '"isPremiumMember":true')
    .replace(/"isSubscribed":false/g, '"isSubscribed":true')
    .replace(/"isEmployee":false/g, '"isEmployee":true')
    .replace(/"skus": \[\]/g, '"skus": [{"kind":"Premium","subscriptionType":"Premium","name":"Premium Subscription","description":"Mobile Annual Premium Subscription","duration":{"amount":1,"unit":"YEAR"},"id":"1","quantity":"1","renewInterval":"YEAR","requiredPaymentProviders":["APPLE_INAPP","GOOGLE_INAPP"],"externalProductId":"com.reddit.premium_2","promos":[],"tags":[]}]')
    .replace(
      /({)/,
      '$1"has_gold_subscription":true, "pref_autoplay":false, "has_subscribed_to_premium":true, "has_visited_new_profile":true, "pref_video_autoplay":false, "features":{"promoted_trend_blanks":false}, "is_mod":true, "user_is_subscriber":true, "hide_ads":true, "isPremiumMember":true, "is_gold":true, "isBrandAffiliate": true, "has_ios_subscription":true, "seen_premium_adblock_modal":true, "has_external_account":true,'
    );

} catch (e) {
  console.log(e);
} finally {
  $done(body ? { body: body } : {});
}