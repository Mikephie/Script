/*
📜 ✨ DuetDisplayPro ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

需登录

[rewrite_local] // Quantumult X
^https:\/\/rdp\.duetdisplay\.com\/v1\/users\/validateReceipt url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/duetdisplaypro.js

[Script] // Surge
DuetDisplayPro = type=http-response, pattern=^https:\/\/rdp\.duetdisplay\.com\/v1\/users\/validateReceipt, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/duetdisplaypro.js, timeout=60

[Script] // Loon
http-response ^https:\/\/rdp\.duetdisplay\.com\/v1\/users\/validateReceipt script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/duetdisplaypro.js, requires-body=true, timeout=60

[MITM]
hostname = rdp.duetdisplay.com

*/

// 主脚本函数...
try {
    var obj = JSON.parse($response.body);

    obj = {
      "success": true,
      "products": [
        {
          "vendor": "apple",
          "product": "DuetStudioAnnual",
          "subscriptionId": 434779,
          "purchaseDate": "2024-05-27T04:25:43Z",
          "cancelled": false,
          "expiresDate": "2088-08-08T08:08:08Z",
          "inTrial": true
        }
      ],
      "hasStripeAccount": false
    };
// 主脚本函数...

    /********** 应用配置信息 **********/
    const appName = "✨DuetDisplayPro✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10; 
    const cooldownMs = cooldownMinutes * 60 * 1000;
    
    const appSpecificKey = `duet_display_pro_notify_key`;
    const now = Date.now();
    let lastNotifyTime = 0;
    
    try {
        const storedTime = $persistentStore.read(appSpecificKey);
        if (storedTime) {
            lastNotifyTime = parseInt(storedTime);
            if (isNaN(lastNotifyTime)) lastNotifyTime = 0;
        }
    } catch (e) {
        lastNotifyTime = 0;
    }
    
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