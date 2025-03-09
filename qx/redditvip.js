/*
📜 ✨ RedditVIP ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/gql-fed\.reddit\.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip.js

[Script] // Surge
gql-fed_vip = type=http-response, pattern=^https:\/\/gql-fed\.reddit\.com\/, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip.js, timeout=60

[Script] // Loon
http-response ^https:\/\/gql-fed\.reddit\.com\/ script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip.js, requires-body=true, timeout=60

[MITM]
hostname = gql.reddit.com, gql-fed.reddit.com

*/

/********** 主逻辑：解锁VIP **********/
const appName = "✨RedditVIP✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

// 主逻辑：解锁 VIP
let body;try {  body = JSON.parse($response.body.replace(/"isNsfw":true/g, '"isNsfw":false'));  const removeAds = (obj) => {    if (typeof obj !== 'object' || obj === null) return obj;    if (Array.isArray(obj)) {      return obj.map(removeAds).filter(item =>        !(item?.node?.__typename === 'AdPost' ||          item?.node?.cells?.some(cell => cell?.__typename === 'AdMetadataCell') ||          item?.node?.adPayload)      );    }    let result = {};    for (let [key, value] of Object.entries(obj)) {      if (key === 'commentsPageAds') {        result[key] = [];      } else if (key === 'elements' && value?.edges) {        result[key] = { ...value, edges: removeAds(value.edges) };      } else {        result[key] = removeAds(value);      }    }    return result;  };  body = removeAds(body);  body = JSON.stringify(body)    .replace(/"isPremiumMember":false/g, '"isPremiumMember":true')    .replace(/"isSubscribed":false/g, '"isSubscribed":true')    .replace(/"isEmployee":false/g, '"isEmployee":true')    .replace(/"skus": \[\]/g, '"skus": [{"kind":"Premium","subscriptionType":"Premium","name":"Premium Subscription","description":"Mobile Annual Premium Subscription","duration":{"amount":1,"unit":"YEAR"},"id":"1","quantity":"1","renewInterval":"YEAR","requiredPaymentProviders":["APPLE_INAPP","GOOGLE_INAPP"],"externalProductId":"com.reddit.premium_2","promos":[],"tags":[]}]')    .replace(      /({)/,      '$1"has_gold_subscription":true, "pref_autoplay":false, "has_subscribed_to_premium":true, "has_visited_new_profile":true, "pref_video_autoplay":false, "features":{"promoted_trend_blanks":false}, "is_mod":true, "user_is_subscriber":true, "hide_ads":true, "isPremiumMember":true, "is_gold":true, "isBrandAffiliate": true, "has_ios_subscription":true, "seen_premium_adblock_modal":true, "has_external_account":true,'    );} catch (e) {  console.log(e);} finally {  $done(body ? { body } : {});}

// 发送会话通知（会话时长设为10分钟）
sessionNotify(appName, author, message, 10 * 60 * 1000);

/*
📱 精简版会话通知模块 📱
*/

function sessionNotify(appName, author, message, timeout = 1 * 60 * 1000) {
    // 动态生成存储键名（从应用名提取字母作为前缀）
    const keyPrefix = appName.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const storeKey = `${keyPrefix}_session_key`;
    
    // 环境判断
    const isQuanX = typeof $prefs !== 'undefined';
    const isSurge = typeof $persistentStore !== 'undefined' && typeof $notify !== 'undefined';
    const isLoon = typeof $persistentStore !== 'undefined' && typeof $notification !== 'undefined';
    
    // 获取存储和通知实例
    const store = isQuanX ? $prefs : (isSurge || isLoon ? $persistentStore : null);
    const notify = isQuanX || isLoon ? $notification : (isSurge ? $notify : null);
    
    if (!store || !notify) return false;
    
    // 读取上次会话时间
    let lastTime;
    try {
        lastTime = isQuanX ? 
            store.valueForKey(storeKey) : 
            store.read(storeKey);
    } catch (e) {
        console.log(`[${appName}] 读取会话时间失败`);
    }
    
    const currentTime = Date.now();
    const isNewSession = !lastTime || (currentTime - parseInt(lastTime) > timeout);
    
    // 如果是新会话，发送通知并更新时间
    if (isNewSession) {
        try {
            notify.post(appName, author, message);
            isQuanX ? 
                store.setValueForKey(currentTime.toString(), storeKey) : 
                store.write(currentTime.toString(), storeKey);
            console.log(`[${appName}] 新会话通知已发送，键名: ${storeKey}`);
        } catch (e) {
            console.log(`[${appName}] 发送通知失败`);
        }
    } else {
        console.log(`[${appName}] 同一会话内，跳过通知，键名: ${storeKey}`);
    }
    
    return isNewSession;
}

$done({ body });