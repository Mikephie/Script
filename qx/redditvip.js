/*
📜 ✨ RedditVIP ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/gql-fed\.reddit\.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip.js

[Script] // Surge
RedditVIP = type=http-response, pattern=^https:\/\/gql-fed\.reddit\.com\/, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip.js, timeout=60

[Script] // Loon
http-response ^https:\/\/gql-fed\.reddit\.com\/ script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip.js, requires-body=true, timeout=60

[MITM]
hostname = gql-fed.reddit.com

*/

try {
    // 设置应用配置信息
    const appName = "✨RedditVIP✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
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

    // 通知功能
    const cooldownMinutes = 10;
    const cooldownMs = cooldownMinutes * 60 * 1000;
    const notifyKey = "reddit_vip_notify_key_v1";
    const now = Date.now();
    let lastNotifyTime = 0;
    
    try {
        const storedTime = $persistentStore.read(notifyKey);
        if (storedTime) {
            lastNotifyTime = parseInt(storedTime);
            if (isNaN(lastNotifyTime)) lastNotifyTime = 0;
        }
    } catch (e) {
        lastNotifyTime = 0;
    }
    
    if (now - lastNotifyTime > cooldownMs) {
        if (typeof $notification !== 'undefined') {
            $notification.post(appName, author, message);
        } else if (typeof $notify !== 'undefined') {
            $notify(appName, author, message);
        }
        $persistentStore.write(now.toString(), notifyKey);
    }

    $done({ body: JSON.stringify(body) });
} catch (e) {
    $done({ body: $response.body });
}