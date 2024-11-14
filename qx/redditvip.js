/*
去广告by@xream 解锁会员 by@ios151

[rewrite_local]
^https?:\/\/gql(-fed)?\.reddit\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip.js

[MITM]
hostname = gql.reddit.com, gql-fed.reddit.com

*/

// 解锁会员
try {
  // 获取响应体
  let body = $response.body;

  // 解析为 JSON 对象
  body = JSON.parse(body);

  // 修改会员状态
  body.isPremiumMember = true;
  body.isSubscribed = true;
  body.isEmployee = true;
  body.skus = [{
    "kind": "Premium",
    "subscriptionType": "    "name": "Premium Subscription",
    "description": "Mobile Annual Premium Subscription",
    "duration": {
      "amount": 1,
      "unit": "YEAR"
    },
    "id": "1",
    "quantity": "1",
    "renewInterval": "YEAR",
    "requiredPaymentProviders": ["APPLE_INAPP", "GOOGLE_INAPP"],
    "externalProductId": "com.reddit.premium_2",
    "promos": [],
    "tags": []
  }];

  // 添加其他字段
  body.has_gold_subscription = true;
  body.pref_autoplay = false;
  body.has_subscribed_to_premium = true;
  body.has_visited_new_profile = true;
  body.pref_video_autoplay = false;
.features = {"promoted_trend_blanks": false};
  body.is_mod = true;
  body.user_is_subscriber = true;
  body.hide_ads = true;
  body.is_gold = true;
  body.isBrandAffiliate = true;
  body.has_ios_subscription = true;
  body.seen_premium_adblock_modal = true;
  body.has_external_account = true;

  // 重新字符串化
  body = JSON.stringify(body);

  // 返回修改后的响应
  $done({body: body});
} catch (e) {
  console.log(e);
  // 原始响应
  $done({});
}