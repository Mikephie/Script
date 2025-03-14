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
try {
    let body = JSON.parse($response.body);


    function modifyObject(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    modifyObject(obj[key]);
                } else if (key === 'expires_date') {
                    obj[key] = "2088-08-08T08:08:08Z";
                }
            }
        }
    }
    modifyObject(body);
// 主脚本函数...

/********** 应用配置信息 **********/
const appName = "✨Classdojo✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
const cooldown = 10 * 60 * 1000;
const notifyKey = "lastNotifyTime";
const now = Date.now();
const lastNotifyTime = $persistentStore.read(notifyKey) || 0;
if (now - lastNotifyTime > cooldown) {
  if (typeof $notification !== 'undefined') {
    $notification.post(appName, author, message);
  } else if (typeof $notify !== 'undefined') {
    $notify(appName, author, message);
  }
  $persistentStore.write(now.toString(), notifyKey);
}
    
    $done({ body });
} catch (e) {
    $done({ body: $response.body });
}