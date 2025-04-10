/*
#!name= ✨ RedditVIP ✨
#!desc=效率
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
    $notification.post("✨RedditVIP✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ❷❾-❾❾-❷❾❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
try {
    // 解析和修改响应体
    let body;
    try {
        body = JSON.parse($response.body.replace(/"isNsfw":true/g, '"isNsfw":false'));
        
        const removeAds = (obj) => {
            if (!obj || typeof obj !== 'object') return obj;
            if (Array.isArray(obj)) {
                return obj.map(removeAds).filter(item => !(
                    item?.node?.__typename === 'AdPost' ||
                    item?.node?.cells?.some(cell => cell?.__typename === 'AdMetadataCell') ||
                    item?.node?.adPayload
                ));
            }
            
            return Object.fromEntries(
                Object.entries(obj).map(([key, value]) => [
                    key,
                    key === 'commentsPageAds' ? [] :
                    key === 'elements' && value?.edges ? { ...value, edges: removeAds(value.edges) } :
                    removeAds(value)
                ])
            );
        };

        body = JSON.parse(JSON.stringify(removeAds(body))
            .replace(/"isPremiumMember":false/g, '"isPremiumMember":true')
            .replace(/"isSubscribed":false/g, '"isSubscribed":true')
            .replace(/"isEmployee":false/g, '"isEmployee":true')
            .replace(/"skus": \[\]/g, '"skus": [{"kind":"Premium","subscriptionType":"Premium","name":"Premium Subscription","description":"Mobile Annual Premium Subscription","duration":{"amount":1,"unit":"YEAR"},"id":"1","quantity":"1","renewInterval":"YEAR","requiredPaymentProviders":["APPLE_INAPP","GOOGLE_INAPP"],"externalProductId":"com.reddit.premium_2","promos":[],"tags":[]}]')
            .replace(/({)/, '$1"has_gold_subscription":true,"pref_autoplay":false,"has_subscribed_to_premium":true,"has_visited_new_profile":true,"pref_video_autoplay":false,"features":{"promoted_trend_blanks":false},"is_mod":true,"user_is_subscriber":true,"hide_ads":true,"is_gold":true,"isBrandAffiliate":true,"has_ios_subscription":true,"seen_premium_adblock_modal":true,"has_external_account":true,'));
    } catch (e) {
        // 如果解析失败，保持原始响应体
        body = JSON.parse($response.body);
    }

    $done({ body: JSON.stringify(body) });
} catch (e) {
    $done({ body: $response.body });
}
// 主脚本函数...