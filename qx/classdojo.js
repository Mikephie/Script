/*
📜 ✨ Classdojo ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0 url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js

[Script] // Surge
Classdojo = type=http-response, pattern=^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js, timeout=60

[Script] // Loon
http-response ^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0 script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js, requires-body=true, timeout=60

[MITM]
hostname = payments.classdojo.com

*/

// 主脚本函数...
let obj = JSON.parse($response.body);

obj = {
  "request_date_ms": 1719384796877,
  "request_date": "2024-06-26T06:53:16Z",
  "subscriber": {
    "entitlements": {
      "Beyond": {
        "expires_date": "2088-08-08T08:08:08Z",
        "product_identifier": "com.classdojo.storekit.afterschool.annual",
        "purchase_date": "2024-06-26T05:21:54Z"
      }
    },
    "subscriptions": {
      "com.classdojo.storekit.afterschool.annual": {
        "expires_date": "2088-08-08T08:08:08Z",
        "original_purchase_date": "2024-06-26T05:21:56Z",
        "purchase_date": "2024-06-26T05:21:54Z",
        "ownership_type": "PURCHASED",
        "store": "app_store"
      }
    }
  }
};
// 主脚本函数...

/********** 应用配置信息 **********/
const appName = "✨Classdojo✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
const cooldown = 10 * 60 * 1000;
function sNotify(a,b,c,d=60000){const e=`${a.replace(/[^a-zA-Z]/g,'').toLowerCase()}_session`;const f=typeof $prefs!=='undefined';const g=typeof $persistentStore!=='undefined'&&typeof $notify!=='undefined';const h=typeof $persistentStore!=='undefined'&&typeof $notification!=='undefined';const i=f?$prefs:$persistentStore;const j=f?$notification:(g?$notify:$notification);if(!i||!j)return false;try{const k=f?i.valueForKey(e):i.read(e);const l=Date.now();if(!k||(l-parseInt(k)>d)){j.post(a,b,c);f?i.setValueForKey(l.toString(),e):i.write(l.toString(),e);return true;}}catch(m){console.log(`[${a}] 错误: ${m}`);}return false;}
    
sNotify(appName, author, message, 10 * 60 * 1000);
  
$done({body: JSON.stringify(obj)});