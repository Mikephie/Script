/*
📜 ✨ IFTTT ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https?:\/\/ifttt\.com\/api\/v\d\/graph url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ifttt.js

[Script] // Surge
IFTTT = type=http-response, pattern=^https?:\/\/ifttt\.com\/api\/v\d\/graph, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/ifttt.js, timeout=60

[Script] // Loon
http-response ^https?:\/\/ifttt\.com\/api\/v\d\/graph script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/ifttt.js, requires-body=true, timeout=60

[MITM]
hostname = ifttt.com

*/

// 主脚本函数...
var body = JSON.parse($response.body);

const data = {"normalized_user_tier":"pro","applet_quota_slots_total":20,"user_subscriptions":[{"expires_at":"2088-08-08 08:08:08 -0700","id":"777777","status":"active","payment_type":"apple","plan_id":"pro"}],"permissions":{"multi_action":{"minimum_tier":"intermediate_pro","permitted":true},"multi_service_account":{"minimum_tier":"pro","permitted":true},"queries":{"minimum_tier":"pro","permitted":true},"filter_code":{"minimum_tier":"pro","permitted":true}},"applet_quota_slots_remaining":20,"tier":"pro"};

const updateUserSubscription = (target) => {
  if (target.user_subscriptions) {
    Object.assign(target, data);
  }
};

if (body.data.sessionSignInSso?.user) {
  updateUserSubscription(body.data.sessionSignInSso.user);
}

if (body.data.me) {
  updateUserSubscription(body.data.me);
}
// 主脚本函数...

    /********** 应用配置信息 **********/
    const appName = "✨IFTTT✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10;
    const cooldownMs = cooldownMinutes * 60 * 1000;
    const notifyKey = "IFTTT_notify_key_v1";
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
