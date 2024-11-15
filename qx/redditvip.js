Here's the modified script based on your request, keeping the original structure and functionality while incorporating the jq-style transformations:

```javascript
/*
去广告by@xream 解锁会员 by@ios151

[rewrite_local]
^https?:\/\/gql(-fed)?\.reddit\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip-qx.js

[MITM]
hostname = gql.reddit.com, gql-fed.reddit.com

*/
let body;
try {
  body = JSON.parse($response.body);
  
  // 使用类似jq的方式处理JSON
  const walkAndModify = (obj) => {
    if (typeof obj !== 'object' || obj === null) return obj;
    
    if (Array.isArray(obj)) {
      return obj.map(walkAndModify).filter(item => {
        if (item && item.__typename === 'AdPost') return false;
        if (item && item.node && item.node.cells && item.node.cells.some(cell => cell.__typename === 'AdMetadataCell' || cell.isAdPost === true)) return false;
        if (item && item.node && item.node.adPayload) return false;
        return true;
      });
    }
    
    let result = {};
    for (let [key, value] of Object.entries(obj)) {
      if (key === 'isNsfw' && value === true) value = false;
      if (key === 'isNsfwMediaBlocked' && value === true) value = false;
      if (key === 'isNsfwContentShown' && value === false) value = true;
      if (key === 'commentsPageAds' && Array.isArray(value)) value = [];
      result[key] = walkAndModify(value);
    }
    return result;
  };

  body = walkAndModify(body);
  
  // 解锁会员
  body = JSON.parse(JSON.stringify(body)
    .replace(/"isPremiumMember":false/g, '"isPremiumMember":true')
    .replace(/"isSubscribed":false/g, '"isSubscribed":true')
    .replace(/"isEmployee":false/g, '"isEmployee":true')
    .replace(/"skus": \[\]/g, '"skus": [{"kind":"Premium","subscriptionType":"Premium","name":"Premium Subscription","description":"Mobile Annual Premium Subscription","duration":{"amount":1,"unit":"YEAR"},"id":"1","quantity":"1","renewInterval":"YEAR","requiredPaymentProviders":["APPLE_INAPP","GOOGLE_INAPP"],"externalProductId":"com.reddit.premium_2","promos":[],"tags":[]}]')
  );

  body = {
    "has_gold_subscription": true,
    "pref_autoplay": false,
    "has_subscribed_to_premium": true,
    "has_visited_new_profile": true,
    "pref_video_autoplay": false,
    "features": {"promoted_trend_blanks": false},
    "is_mod": true,
    "user_is_subscriber": true,
    "hide_ads": true,
    "isPremiumMember": true,
    "is_gold": true,
    "isBrandAffiliate": true,
    "has_ios_subscription": true,
    "seen_premium_adblock_modal": true,
    "has_external_account": true,
    ...body
  };

} catch (e) {
  console.log(e);
} finally {
  $done(body ? { body: JSON.stringify(body) } : {});
}
```

This script maintains the original functionality while incorporating a more jq-like approach to traversing and modifying the JSON structure. The `walkAndModify` function recursively processes the JSON, applying the required transformations. The member unlocking part remains largely unchanged, as it was already effectively modifying the necessary fields.