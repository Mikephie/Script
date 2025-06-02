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
const operationName = $request?.headers?.["X-APOLLO-OPERATION-NAME"] || "";
const cooldownMs = 10 * 60 * 1000, notifyKey = "RedditVIP_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;

// 拦截广告接口请求体
if (/Ads/i.test(operationName)) {
    $done({ body: "{}" });
} else {
    let body = $response.body;
    try {
        let obj = JSON.parse(body);
        obj = removeAdsAndNsfw(obj);

        // 解锁VIP/高级功能
        body = JSON.stringify(obj)
            .replace(/"isPremiumMember":false/g, '"isPremiumMember":true')
            .replace(/"isSubscribed":false/g, '"isSubscribed":true')
            .replace(/"isEmployee":false/g, '"isEmployee":true')
            .replace(/"isAdPersonalizationAllowed":true/g, '"isAdPersonalizationAllowed":false')
            .replace(/"isThirdPartyInfoAdPersonalizationAllowed":true/g, '"isThirdPartyInfoAdPersonalizationAllowed":false')
            .replace(/"isNsfw":true/g, '"isNsfw":false')
            .replace(/"isNsfwMediaBlocked":true/g, '"isNsfwMediaBlocked":false')
            .replace(/"isNsfwContentShown":false/g, '"isNsfwContentShown":true')
            .replace(/"skus":\s*\[\]/g, `"skus":[{"kind":"Premium","subscriptionType":"Premium","name":"Premium Subscription","description":"Mobile Annual Premium Subscription","duration":{"amount":1,"unit":"YEAR"},"id":"1","quantity":"1","renewInterval":"YEAR","requiredPaymentProviders":["APPLE_INAPP","GOOGLE_INAPP"],"externalProductId":"com.reddit.premium_2","promos":[],"tags":[]}]`);

        // 注入部分"缺失"高级标志字段
        body = body.replace(/{/, `{"has_gold_subscription":true,"pref_autoplay":false,"has_subscribed_to_premium":true,"has_visited_new_profile":true,"pref_video_autoplay":false,"features":{"promoted_trend_blanks":false},"is_mod":true,"user_is_subscriber":true,"hide_ads":true,"is_gold":true,"isBrandAffiliate":true,"has_ios_subscription":true,"seen_premium_adblock_modal":true,"has_external_account":true,`);

        $done({ body });
    } catch (e) {
        console.log(`RedditVIP Error: ${e.message}`);
        $done({});
    }
}

// 高兼容递归过滤
function removeAdsAndNsfw(data) {
    if (!data || typeof data !== 'object') return data;
    // NSFW处理
    if ('isNsfw' in data && data.isNsfw === true) data.isNsfw = false;
    if ('isNsfwMediaBlocked' in data && data.isNsfwMediaBlocked === true) data.isNsfwMediaBlocked = false;
    if ('isNsfwContentShown' in data && data.isNsfwContentShown === false) data.isNsfwContentShown = true;
    if ('commentsPageAds' in data && Array.isArray(data.commentsPageAds)) data.commentsPageAds = [];
    // 处理数组
    if (Array.isArray(data)) {
        return data.filter(item => {
            if (item && item.__typename === 'AdPost') return false;
            if (item && item.node && item.node.cells && Array.isArray(item.node.cells)
                && item.node.cells.some(cell => (cell && cell.__typename === 'AdMetadataCell') || (cell && cell.isAdPost === true))) return false;
            if (item && item.node && item.node.adPayload) return false;
            return true;
        }).map(item => removeAdsAndNsfw(item));
    }
    // 递归对象属性
    const result = { ...data };
    for (const key in result) {
        if (result[key] && typeof result[key] === 'object') {
            result[key] = removeAdsAndNsfw(result[key]);
        }
    }
    return result;
}
// 主脚本函数...