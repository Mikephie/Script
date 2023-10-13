/******************************

脚本名称:   文本
下载地址：商店
脚本作者：Mikephie
更新时间：当前日期
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
> ScriptURL
https://raw.githubusercontent.com/Mikephie/Script/main/Mike_xxx.js

*******************************

[rewrite_local]

# ～ RevenueCat@mikephie
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://raw.githubusercontent.com/Mikephie/Script/main/Mike_xxx.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[mitm] 

hostname=api.revenuecat.com

***********************************/




//固定头部, tg频道：https://t.me/mikephie76

var ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
var cuttlefish = {"Attention":"恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！","request_date_ms":1662599120248,"request_date":"2022-09-08T01:05:20Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-09-08T01:04:03Z","original_application_version":"8","other_purchases":{},"management_url":"https://apps.apple.com/account/subscriptions","subscriptions":{},"entitlements":{},"original_purchase_date":"2022-09-07T13:05:43Z","original_app_user_id":"$RCAnonymousID:mikephie","last_seen":"2022-09-08T01:04:03Z"}};
var mikephie={"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"normal","expires_date":"2099-12-18T01:04:17Z","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"2022-09-08T01:04:18Z","purchase_date":"2022-09-08T01:04:17Z","store":"app_store"};
var mikephie76={"grace_period_expires_date":null,"purchase_date":"2022-09-08T01:04:17Z","product_identifier":"mikephie_1y_128","expires_date":"2099-12-18T01:04:17Z"};
var obj = JSON.parse(JSON.stringify(cuttlefish));
mikephie76['product_identifier']="com.mikephie.premium.yearly";
obj['subscriber']['subscriptions']['com.mikephie.premium.yearly']=mikephie;

//动态ID分配
if(ua.indexOf('%E8%BD%A6%E7%A5%A8%E7%A5%A8') != -1) {//车票票
 obj['subscriber']['entitlements']['vip+watch_vip']=mikephie76;
}
else if(ua.indexOf('totowallet') != -1) {//图图记账
	mikephie76['product_identifier']="com.ziheng.totowallet.yearly";
	obj['subscriber']['entitlements']['all']=mikephie76;
	obj['subscriber']['subscriptions']['com.ziheng.totowallet.yearly']=mikephie;
}
else if(ua.indexOf('Aphrodite') != -1) {//Aphrodite
	obj['subscriber']['entitlements']['all']=mikephie76;
}
else if(ua.indexOf('apollo') != -1) {//apollo
	obj['subscriber']['entitlements']['all']=mikephie76;
}
else if(ua.indexOf('widget_art') != -1) {//widget_art
	obj['subscriber']['entitlements']['all']=mikephie76;	
}
else if(ua.indexOf('OneBox') != -1) {//pandora
  obj['subscriber']['entitlements']['all']=mikephie76;
}
else if(ua.indexOf('Spark') != -1) {//spark
	obj['subscriber']['entitlements']['premium']=mikephie76;	
}
else if(ua.indexOf('Pillow') != -1) {//pillow
	obj['subscriber']['entitlements']['premium']=mikephie76;
}
else if(ua.indexOf('1Blocker') != -1) {//1Blocker
	obj['subscriber']['entitlements']['premium']=mikephie76;
}
else if(ua.indexOf('VSCO') != -1) {//VSCO
	obj['subscriber']['entitlements']['membership']=mikephie76;
}
else if(ua.indexOf('UTC') != -1) {//花样文字
	obj['subscriber']['entitlements']['Entitlement.Pro']=mikephie76;	
}
else if(ua.indexOf('%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0') != -1) {//谜底黑胶
	obj['subscriber']['entitlements']['Entitlement.Pro']=mikephie76;	
}
else if(ua.indexOf('%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98') != -1) {//谜底时钟
	obj['subscriber']['entitlements']['Entitlement.Pro']=mikephie76;
}
else if(ua.indexOf('OffScreen') != -1) {//OffScreen
	obj['subscriber']['entitlements']['Entitlement.Pro']=mikephie76;	
}
else if(ua.indexOf('ScannerPro') != -1) {//Scanner Pro
	obj['subscriber']['entitlements']['plus']=mikephie76;
}
else if(ua.indexOf('WhiteCloud') != -1) {//WhiteCloud
	obj['subscriber']['entitlements']['allaccess']=mikephie76;
}
else if(ua.indexOf('HTTPBot') != -1) {//httpbot
  obj['subscriber']['entitlements']['pro']=mikephie76;
}
else if(ua.indexOf('audiomack') != -1) {//Audiomack
	obj['subscriber']['entitlements']['Premium1']=mikephie76;
}
else if(ua.indexOf('server_bee') != -1) {//server_bee
	obj['subscriber']['entitlements']['Pro']=mikephie76;
}
else if(ua.indexOf('simple-') != -1) {//NotBoring
	obj['subscriber']['entitlements']['patron']=mikephie76;
}
else if(ua.indexOf('streaks') != -1) {//习惯
	obj['subscriber']['entitlements']['patron']=mikephie76;
}
else if(ua.indexOf('andyworks-calculator') != -1) {//计算器
	obj['subscriber']['entitlements']['patron']=mikephie76;
}
else if(ua.indexOf('vibes') != -1) {//vibes
	obj['subscriber']['entitlements']['patron']=mikephie76;
}
else if(ua.indexOf('CountDuck') != -1) {//vibes
	mikephie76['product_identifier']="Lifetime";
	obj['subscriber']['entitlements']['premium']=mikephie76;
	obj['subscriber']['subscriptions']['Lifetime']=mikephie;
}
else{
  obj['subscriber']['entitlements']['pro']=mikephie76;
}
else if(ua.indexOf('$CFBundleDisplayName') != -1) {//vibes
	mikephie76['product_identifier']="igrammar_199_1y_v1";
	obj['subscriber']['entitlements']['premium']=mikephie76;
	obj['subscriber']['subscriptions']['annual']=mikephie;
}
else{
  obj['subscriber']['entitlements']['pro']=mikephie76;
}

$done({body: JSON.stringify(obj)});
