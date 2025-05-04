/*
#!name= ✨ FaceSwapper ✨
#!desc=图像编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https?:\/\/api-.*\.facereplacerext\.com\/api\/rest\/commerce\/integrate\/vip\/perform url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/faceswapper.js

[MITM]
hostname = be.aimirror.fun

*/

// 主脚本函数...
try {
    var body = JSON.parse($response.body);

    body.data.list = [{
      "startTime" : 1703477754000,
      "orderId" : "340001399999999",
      "isTrialPeriod" : true,
      "endTime" : 3742762088000,
      "productId" : "73_premium_normal_yearly",
      "productType" : 3,
      "orderStatus" : 1,
      "autoRenewStatus" : true,
      "originalOrderId" : "340001399999999",
      "sign" : "c5e5450b552ac10149dcd7d4625b1ad2"
    }];
// 主脚本函数...

    /********** 应用配置信息 **********/
    const appName = "✨FaceSwapper✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10; 
    const cooldownMs = cooldownMinutes * 60 * 1000;
    
    const notifyKey = "FaceSwapper_notify_key";
    const now = Date.now();
    let lastNotifyTime = 0;
    
    try {
        const storedTime = $persistentStore.read(notifyKey);
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
        $persistentStore.write(now.toString(), notifyKey);
    }

    $done({ body: JSON.stringify(body) });
} catch (e) {
    $done({ body: $response.body });
}
