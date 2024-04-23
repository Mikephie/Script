/*************************************

项目名称：Revenuecat 系列解锁合集
下载地址：https://too.st/CollectionsAPP
更新日期：2024-04-03
脚本作者：mikephie76
电报频道：https://t.me/mikephie
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/revenueddmori.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/revenueddmori.js
^https?:\/\/app-measurement\.com\/config\/app url reject
^https?:\/\/firestore\.googleapis\.com url reject

[mitm]
hostname = api.revenuecat.com, app-measurement.com, firestore.googleapis.com

*************************************/


const mikephie76 = {};
const { requestBody } = $request;
const headers = $request.headers;
const mikephie = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = headers['User-Agent'] || headers['user-agent'];
const bundle_id = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'];


//排除已禁止MITM的APP
const forbid = ['Fileball', 'APTV'];

if (forbid.some(appName => (ua && ua.includes(appName)) || (requestBody && requestBody.includes(appName)))) {
  console.log('发现禁止MITM的APP，已停止运行脚本！\n叮当猫の分享频道: https://t.me/mikephie');
  $done({});
}

//识别bundle_id
const bundle = {
	'io.innerpeace.yiye': { name: 'Premium', id: 'io.innerpeace.yiye.lifetime.forYearly', cm: 'sja' },  //言外笔记
	'com.skysoft.removalfree': { name: 'Pro', id: 'com.skysoft.removalfree.subscription.newyearly', cm: 'sja' }  //图片消除
}

//识别UA
const list = {
	'ShellBoxKit': { name: 'pro', id: 'ShellBoxKit.Lifetime', cm: 'sjb' },  //CareServer-服务器监控
	'IDM': { name: 'premium', id: 'sub_yearly_idm', cm: 'sja' },  //IDM-下载
	'Whisper': { name: 'all_features', id: 'whisperai_80_y', cm: 'sja' },  //Whisper
	'Spark': { name: 'premium', id: 'spark_5999_1y_1w0', cm: 'sja' },  //Spark_Mail-邮箱管理
	'ShellBean': { name: 'Pro', id: 'com.ningle.shellbean.subscription.year' },
	'Currency': { name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.pro.crossgrade' },
};

try {
  if (typeof $response == "undefined") {
    delete headers["x-revenuecat-etag"];
    delete headers["X-RevenueCat-ETag"];
    mikephie76.headers = headers;
  } else if (mikephie && mikephie.subscriber) {
    mikephie.subscriber.subscriptions = mikephie.subscriber.subscriptions || {};
    mikephie.subscriber.entitlements = mikephie.subscriber.entitlements || {};
    let name,nameb,ids,idb,data;
    for (const src of [list, bundle]) {
     for (const i in src) {
      const test = src === list ? ua : bundle_id;
      if (new RegExp(`^${i}`, `i`).test(test)) {
        if (src[i].cm.indexOf('sja') != -1) {
          data = { "purchase_date": "2023-09-09T09:09:09Z", "expires_date": "2099-09-09T09:09:09Z" };
        } else if (src[i].cm.indexOf('sjb') != -1) {    
          data = { "purchase_date": "2023-09-09T09:09:09Z" };
        }
      ids = src[i].id;
      name = src[i].name;
      idb = src[i].idb;
      nameb = src[i].nameb;
      break;
      }
     }
    }
    if (!name || !ids) {
      data = { "purchase_date": "2023-09-09T09:09:09Z", "expires_date": "2099-09-09T09:09:09Z" };
      name = 'pro';
      ids = 'com.mikephie.pro';
    } 
    mikephie.subscriber.entitlements[name] = Object.assign({}, data, { product_identifier: ids });
    if (typeof nameb !== 'undefined' && nameb !== null) {
      mikephie.subscriber.entitlements[nameb] = Object.assign({}, data, { product_identifier: idb });
    }
    const subData = Object.assign({},data,{		"Author": "mikephie",		"Telegram": "https://t.me/mikephie",		"warning": "仅供学习，禁止转载或售卖",		"original_purchase_date": "2023-09-09T09:09:09Z",		"store_transaction_id" : "4900066666666666",		"period_type" : "trial",		"store": "app_store",		"ownership_type": "PURCHASED"	});
    mikephie.subscriber.subscriptions[ids] = subData;
    if (typeof idb !== 'undefined' && idb !== null) {
      mikephie.subscriber.subscriptions[idb] = subData;
    }
    mikephie76.body = JSON.stringify(mikephie);
    console.log('已操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/mikephie');
  } 
} catch(e) {
  //执行失败
  console.log('执行失败: '+ e.message); 
}

$done(mikephie76);