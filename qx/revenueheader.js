/*************************************

项目名称：Revenuecat 系列解锁合集
下载地址：https://too.st/CollectionsAPP
更新日期：2024-05-18
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/revenueheader.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const mikephie76 = {};
const headers = $request.headers;
const mikephie = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = headers['User-Agent'] || headers['user-agent'];
const bundle_id = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'];

//排除已禁止MITM的APP
const forbiddenApps = ['Fileball', 'APTV'];
const forbiddenAppFound = forbiddenApps.find(appName => (ua && ua.includes(appName)) || ($request.body && $request.body.includes(appName)));
if (forbiddenAppFound) {
  console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本！\n叮当猫の分享频道: https://t.me/chxm1023`);
  $done({});
}

//识别UA
  var UA = $request.headers['user-agent'];
  const app = '1';
  const UAMappings = {
  'Currency': { name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus' },  //Currency-汇率查询
  'ShellBean': { name: 'pro', id: 'com.ningle.shellbean.iap.forever' },  //ShellBean-SSH终端服/Linux监控
  'ShellBoxKit': { name: 'ssh_pro', id: 'ShellBoxKit.Year' },  //CareServer-服务器监控

    };

  const data = {
    "expires_date": "2088-08-08T08:08:08Z",
    "original_purchase_date": "2024-05-19T02:15:35Z",
    "purchase_date": "2024-05-19T02:15:35Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      mikephie76.subscriber.subscriptions = {};
      mikephie76.subscriber.subscriptions[id] = data;
      mikephie76.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      mikephie76.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  mikephie.body = JSON.stringify(mikephie76);
}
$done(mikephie76)