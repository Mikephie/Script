/***********************************

> ScriptName        𝐑𝐞𝐯𝐞𝐧𝐮𝐞𝐂𝐚𝐭 多合一脚本[墨鱼版]
> Author            @mikephie
> ScriptURL         https://raw.githubusercontent.com/Mikephie/Script/main/qx/rc.js


# ========解锁列表======== #
https://appraven.net/collection/77299969

[rewrite_local]

# ～ RevenueCat@mikephie
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/rc.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers) url script-request-header https://raw.githubusercontent.com/ddgksf2013/Scripts/master/deleteHeader.js

[mitm]

hostname=api.revenuecat.com

***********************************/

//排除已禁止MITM的APP
const forbiddenApps = ['Fileball', 'APTV'];
const forbiddenAppFound = forbiddenApps.find(appName => (ua && ua.includes(appName)) || ($request.body && $request.body.includes(appName)));
if (forbiddenAppFound) {
  console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本！\n叮当猫の分享频道: https://t.me/chxm1023`);
  $done({});
}


// ========= 动态 ID ========= //
const mapping = {
  'CountDuck': ['premium'],
  'IDM': ['premium'],
  'Whisper': ['all_features'],
  'Airmail': ['Airmail Premium'],
  'ShellBoxKit': ['pro'],
  'PhotoRoom': ['pro'],
  'PDF%20Viewer': ['sub.pro'],
  'Drops': ['premium'],
  'UTC': ['Entitlement.Pro'],
  'Anybox': ['pro'],
  'ScannerPro': ['plus'],
  'MagicTiles3': ['VIP'],
  'ShellBean': ['pro'],
  'ScreenRecordCase': ['Premium'],
  'OneBox': ['all'],
  'Spark': ['premium'],
  


};

// =========    固定部分  ========= // 
// =========  @mikephie76 ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="恭喜你抓到元数据！由 mikephie 分享，请勿售卖或分享他人！";var mikephie={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2022-09-08T01:04:18Z",purchase_date:"2022-09-08T01:04:17Z",store:"app_store"},mikephie76={grace_period_expires_date:null,purchase_date:"2022-09-08T01:04:17Z",product_identifier:"com.mikephie.premium.yearly",expires_date:"2099-12-18T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(mikephie76.product_identifier=s,obj.subscriber.subscriptions[s]=mikephie):obj.subscriber.subscriptions["com.mikephie.premium.yearly"]=mikephie,obj.subscriber.entitlements[e]=mikephie76}else obj.subscriber.subscriptions["com.mikephie.premium.yearly"]=mikephie,obj.subscriber.entitlements.pro=mikephie76;$done({body:JSON.stringify(obj)});