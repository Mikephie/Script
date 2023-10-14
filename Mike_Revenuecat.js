/***********************************

> ScriptName        RevenueCat多合一脚本[墨鱼版]
> Author            @ddgksf2013
> ForHelp           若有屏蔽广告的需求，可公众号后台回复APP名称
> WechatID          墨鱼手记
> TgChannel         https://t.me/ddgksf2021
> Contribute        https://t.me/ddgksf2013_bot
> Feedback          📮 ddgksf2013@163.com 📮
> UpdateTime        2023-10-14
> Suitable          自行观看“# > ”注释内容，解锁是暂时的，购买也不是永久的[订阅、跑路]
> Attention         如需引用请注明出处，谢谢合作！
> ScriptURL         https://raw.githubusercontent.com/Mikephie/Script/main/Mike_Revenuecat.js 

# ========解锁列表======== #
# > 01 白云天气
https://apps.apple.com/cn/app/id1575901953
# > 02 图图记账
https://apps.apple.com/cn/app/id1546356856
# > 03 Aphrodite
https://apps.apple.com/cn/app/id1568289454
# > 04 Apollo
https://apps.apple.com/cn/app/id1616467801
# > 05 pandora
https://apps.apple.com/cn/app/id1470560916
# > 06 widgetart
https://apps.apple.com/cn/app/id1539097448
# > 07 Spark
https://apps.apple.com/cn/app/id997102246
# > 08 Pillow
https://apps.apple.com/cn/app/id878691772
# > 09 1Blocker
https://apps.apple.com/cn/app/id1365531024
# > 10 VSCO
https://apps.apple.com/cn/app/id588013838
# > 11 谜底时钟
https://apps.apple.com/cn/app/id1536358464
# > 12 谜底黑胶
https://apps.apple.com/cn/app/id1606306441
# > 13 OffScreen
https://apps.apple.com/cn/app/id1474340105
# > 14 花样文字
https://apps.apple.com/cn/app/id1438854446
# > 15 ScannerPro
https://apps.apple.com/cn/app/id333710667
# > 16 车票票
https://apps.apple.com/cn/app/id6446212291
# > 17 HTTPBot
https://apps.apple.com/us/app/id1232603544
# > 18 Audiomack
https://apps.apple.com/cn/app/id921765888
# > 19 ServerBee
https://apps.apple.com/cn/app/id6443553714
# > 20 NotBoring天气
https://apps.apple.com/cn/app/id1531063436
# > 21 NotBoring习惯
https://apps.apple.com/cn/app/id1593891243
# > 22 NotBoring计算器
https://apps.apple.com/cn/app/id1533591596
# > 23 NotBoring计时器
https://apps.apple.com/cn/app/id1531048091
# > 24 NotBoringVibes
https://apps.apple.com/cn/app/id1661440185
# > 25 倒数鸭
https://apps.apple.com/cn/app/id6457201223
# > 26 iptv-ultra
https://apps.apple.com/cn/app/id1549657742

[rewrite_local]

# ～ RevenueCat@ddgksf2013
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://raw.githubusercontent.com/Mikephie/Script/main/Mike_Revenuecat.js 
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[mitm]

hostname=api.revenuecat.com

***********************************/




//固定头部, tg频道：https://t.me/ddgksf2021

var ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
var cuttlefish = {"Attention":"恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！","request_date_ms":1662599120248,"request_date":"2022-09-08T01:05:20Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-09-08T01:04:03Z","original_application_version":"8","other_purchases":{},"management_url":"https://apps.apple.com/account/subscriptions","subscriptions":{},"entitlements":{},"original_purchase_date":"2022-09-07T13:05:43Z","original_app_user_id":"$RCAnonymousID:ddgksf2013","last_seen":"2022-09-08T01:04:03Z"}};
var ddgksf2013={"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"normal","expires_date":"2099-12-18T01:04:17Z","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"2022-09-08T01:04:18Z","purchase_date":"2022-09-08T01:04:17Z","store":"app_store"};
var ddgksf2021={"grace_period_expires_date":null,"purchase_date":"2022-09-08T01:04:17Z","product_identifier":"ddgksf2013_1y_128","expires_date":"2099-12-18T01:04:17Z"};
var obj = JSON.parse(JSON.stringify(cuttlefish));
ddgksf2021['product_identifier']="com.ddgksf2013.premium.yearly";
obj['subscriber']['subscriptions']['com.ddgksf2013.premium.yearly']=ddgksf2013;

//动态ID分配
if(ua.indexOf('%E8%BD%A6%E7%A5%A8%E7%A5%A8') != -1) {//车票票
 obj['subscriber']['entitlements']['vip+watch_vip']=ddgksf2021;
}
else if(ua.indexOf('totowallet') != -1) {//图图记账
	ddgksf2021['product_identifier']="com.ziheng.totowallet.yearly";
	obj['subscriber']['entitlements']['all']=ddgksf2021;
	obj['subscriber']['subscriptions']['com.ziheng.totowallet.yearly']=ddgksf2013;
}
else if(ua.indexOf('Aphrodite') != -1) {//Aphrodite
	obj['subscriber']['entitlements']['all']=ddgksf2021;
}
else if(ua.indexOf('apollo') != -1) {//apollo
	obj['subscriber']['entitlements']['all']=ddgksf2021;
}
else if(ua.indexOf('widget_art') != -1) {//widget_art
	obj['subscriber']['entitlements']['all']=ddgksf2021;	
}
else if(ua.indexOf('OneBox') != -1) {//pandora
  obj['subscriber']['entitlements']['all']=ddgksf2021;
}
else if(ua.indexOf('Spark') != -1) {//spark
	obj['subscriber']['entitlements']['premium']=ddgksf2021;	
}
else if(ua.indexOf('Pillow') != -1) {//pillow
	obj['subscriber']['entitlements']['premium']=ddgksf2021;
}
else if(ua.indexOf('1Blocker') != -1) {//1Blocker
	obj['subscriber']['entitlements']['premium']=ddgksf2021;
}
else if(ua.indexOf('VSCO') != -1) {//VSCO
	obj['subscriber']['entitlements']['membership']=ddgksf2021;
}
else if(ua.indexOf('UTC') != -1) {//花样文字
	obj['subscriber']['entitlements']['Entitlement.Pro']=ddgksf2021;	
}
else if(ua.indexOf('%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0') != -1) {//谜底黑胶
	obj['subscriber']['entitlements']['Entitlement.Pro']=ddgksf2021;	
}
else if(ua.indexOf('%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98') != -1) {//谜底时钟
	obj['subscriber']['entitlements']['Entitlement.Pro']=ddgksf2021;
}
else if(ua.indexOf('OffScreen') != -1) {//OffScreen
	obj['subscriber']['entitlements']['Entitlement.Pro']=ddgksf2021;	
}
else if(ua.indexOf('ScannerPro') != -1) {//Scanner Pro
	obj['subscriber']['entitlements']['plus']=ddgksf2021;
}
else if(ua.indexOf('WhiteCloud') != -1) {//WhiteCloud
	obj['subscriber']['entitlements']['allaccess']=ddgksf2021;
}
else if(ua.indexOf('HTTPBot') != -1) {//httpbot
  obj['subscriber']['entitlements']['pro']=ddgksf2021;
}
else if(ua.indexOf('audiomack') != -1) {//Audiomack
	obj['subscriber']['entitlements']['Premium1']=ddgksf2021;
}
#else if(ua.indexOf('server_bee') != -1) {//server_bee
	obj['subscriber']['entitlements']['Pro']=mikephie;
}
else if(ua.indexOf('simple-') != -1) {//NotBoring
	obj['subscriber']['entitlements']['patron']=ddgksf2021;
}
else if(ua.indexOf('streaks') != -1) {//习惯
	obj['subscriber']['entitlements']['patron']=ddgksf2021;
}
else if(ua.indexOf('andyworks-calculator') != -1) {//计算器
	obj['subscriber']['entitlements']['patron']=ddgksf2021;
}
else if(ua.indexOf('vibes') != -1) {//vibes
	obj['subscriber']['entitlements']['patron']=ddgksf2021;
}
else if(ua.indexOf('CountDuck') != -1) {//vibes
	ddgksf2021['product_identifier']="Lifetime";
	obj['subscriber']['entitlements']['premium']=ddgksf2021;
	obj['subscriber']['subscriptions']['Lifetime']=ddgksf2013;
}
else if(ua.indexOf('IPTVUltra') != -1) {//vibes
	obj['subscriber']['entitlements']['premium']=ddgksf2021;
}
else{
  obj['subscriber']['entitlements']['pro']=ddgksf2021;
}

$done({body: JSON.stringify(obj)});