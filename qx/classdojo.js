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
    let obj = JSON.parse($response.body);
    
    if (obj.subscriber && obj.subscriber.subscriptions) {
        for (const key in obj.subscriber.subscriptions) {
            if (obj.subscriber.subscriptions.hasOwnProperty(key)) {
                obj.subscriber.subscriptions[key].expires_date = "2088-08-08T08:08:08Z";
            }
        }
    }
    
    if (obj.subscriber && obj.subscriber.entitlements) {
        for (const key in obj.subscriber.entitlements) {
            if (obj.subscriber.entitlements.hasOwnProperty(key)) {
                obj.subscriber.entitlements[key].expires_date = "2088-08-08T08:08:08Z";
            }
        }
    }
// 主脚本函数...

    /********** 应用配置信息 **********/
    const appName = "✨Classdojo✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10; 
    const cooldownMs = cooldownMinutes * 60 * 1000;
    
    const appSpecificKey = `${appName}_lastNotifyTime`;
    const now = Date.now();
    const lastNotifyTime = $persistentStore.read(appSpecificKey) || 0;
    
    if (now - lastNotifyTime > cooldownMs) {
        if (typeof $notification !== 'undefined') {
            $notification.post(appName, author, message);
        } else if (typeof $notify !== 'undefined') {
            $notify(appName, author, message);
        }
        $persistentStore.write(now.toString(), appSpecificKey);
    }

    $done({ body: JSON.stringify(obj) });
} catch (e) {
    $done({ body: $response.body });
}