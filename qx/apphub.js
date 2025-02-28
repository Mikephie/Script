/*

📜 AppHub合集 解锁 VIP 脚本
📅 更新时间：2024年08月15日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/.*\.apphud\.com\/v\d\/(subscriptions|customers)$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/apphub.js

[mitm]
hostname = *.apphud.com

*/


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