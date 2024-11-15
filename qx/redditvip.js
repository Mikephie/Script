#!name = Reddit 🚫广告 & 解锁会员
#!desc = 去广告 & 解锁会员 - 模块
#!author = 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!category=🚫广告
#!icon = https://raw.githubusercontent.com/Mikephie/icons/main/icon/reddit.png
#appCategory = select,"✅签到","🚫广告","🔐APP","🛠️工具"

[General]

force-http-engine-hosts = %APPEND% gql.reddit.com, gql-fed.reddit.com


[MITM]

hostname = %APPEND%, gql.reddit.com, gql-fed.reddit.com


[Body Rewrite]

http-response-jq ^https?:\/\/gql(-fed)?\.reddit\.com 'walk( if type == "object" then 
  (if .isNsfw == true then .isNsfw = false else . end) 
  | (if .isNsfwMediaBlocked == true then .isNsfwMediaBlocked = false else . end) 
  | (if .isNsfwContentShown == false then .isNsfwContentShown = true else . end) 
  | (if (.commentsPageAds | type == "array") then (.commentsPageAds = []) else . end) 
  | (if ( (.node | type == "object") and (.node.cells | type == "array") and (.node.cells | any(.__typename? == "AdMetadataCell" or .isAdPost? == true)) ) then empty else . end) 
  | (if (.node | type == "object") and (.node.adPayload | type == "object") then empty else . end) 
  | (if .__typename == "AdPost" then empty else . end) 
else . end) 
| (if (.isPremiumMember == false) then .isPremiumMember = true else . end) 
| (if (.isSubscribed == false) then .isSubscribed = true else . end) 
| (if (.isEmployee == false) then .isEmployee = true else . end) 
| (if (.skus | type == "array") then .skus = [{"kind":"Premium","subscriptionType":"Premium","name":"Premium Subscription","description":"Mobile Annual Premium Subscription","duration":{"amount":1,"unit":"YEAR"},"id":"1","quantity":"1","renewInterval":"YEAR","requiredPaymentProviders":["APPLE_INAPP","GOOGLE_INAPP"],"externalProductId":"com.reddit.premium_2","promos":[],"tags":[]}] else . end) 
| . + {"has_gold_subscription":true, "pref_autoplay":false, "has_visited_new_profile":true, "pref_video_autoplay":false, "features":{"promoted_trend_blanks":false}, "is_mod":true, "user_is_subscriber":true, "hide_ads":true, "is_gold":true, "isBrandAffiliate": true, "has_ios_subscription":true, "seen_premium_adblock_modal":true, "has_external_account":true}'