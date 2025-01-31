/*************************************

项目名称：apphud多合一
下载地址：https://t.cn/A6m7WeMH
下载地址：https://t.cn/A6WlGNDi
更新日期：2024-11-24
脚本作者：mikephie
电报频道：https://t.me/mikephie
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/.*\.apphud\.com\/v\d\/(subscriptions|customers)$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/apphub.js

[mitm]
hostname = *.apphud.com

*************************************/


const mikephie = JSON.parse(typeof $response != "undefined" && $response.body || "{}");

const list = [
  "1year7days80",  //Bright
  "com.movavi.clips.lifetime",  //Movavi
  "ok.annual.sub",  //BodyOK
  "AFMS",  //WatchFace表盘商店
  "com.tm.replica.lifetime",  //Replica
  "Plant_1w_7.99_3d",  //PlantMe
  "one.time.premium"
];

const createSubscription = (productId = "one.time.prremium") => {
  return {
    "status": "regular",
    "group_id": "1a2b3c4d",
    "autorenew_enabled": false,
    "introductory_activated": false,
    "cancelled_at": null,
    "kind": "autorenewable",
    "id": "a1234567-b123-c123-d123-e12345678910",
    "next_check_at": "2024-11-11T11:11:11.000Z",
    "product_id": productId,
    "platform": "ios",
    "environment": "production",
    "local": false,
    "retries_count": 0,
    "units_count": 1,
    "unit": "day",
    "in_retry_billing": false,
    "started_at": "2024-11-11T11:11:11.000Z",
    "original_transaction_id": "490001314520000",
    "expires_at": "2088-08-08T08:08:08.000Z",
    "is_consumable": null
  };
};

const processPaywalls = (paywalls) => {
  const subscriptions = [];
  if (!Array.isArray(paywalls)) return subscriptions;
  for (const paywall of paywalls) {
    if (paywall.items) {
      for (const item of paywall.items) {
        const productId = item.product_id || "one.time.prremium";
        subscriptions.push(createSubscription(productId));
      }
    } else {
      subscriptions.push(createSubscription());
    }
  }
  return subscriptions;
};

if (!mikephie.data) mikephie.data = {};
if (!mikephie.data.results) mikephie.data.results = {};
if (!Array.isArray(mikephie.data.results.subscriptions)) {
  mikephie.data.results.subscriptions = [];
}

if (mikephie.data.results.paywalls) {
  const subscriptions = processPaywalls(mikephie.data.results.paywalls);
  if (subscriptions.length > 0) {
    mikephie.data.results.subscriptions.push(...subscriptions);
  }
}

for (const productId of list) {
  mikephie.data.results.subscriptions.push(createSubscription(productId));
}

$done({ body: JSON.stringify(mikephie) });