/*
📜 ✨ Bizhi壁纸 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/leancloud\.emotionwp\.com\/1\.1\/classes\/wpf_[a-z]+ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js

[Script] // Surge
Bizhi壁纸 = type=http-response, pattern=^https:\/\/leancloud\.emotionwp\.com\/1\.1\/classes\/wpf_[a-z]+, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js, timeout=60

[Script] // Loon
http-response ^https:\/\/leancloud\.emotionwp\.com\/1\.1\/classes\/wpf_[a-z]+ script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js, requires-body=true, timeout=60

[MITM]
hostname = leancloud.emotionwp.com

*/

// 主脚本函数...
try {
    let body = JSON.parse($response.body);
    const url = $request.url;

    const user = /classes\/wpf_account/;
    
    if (user.test(url)) {
        body.results = [{
            "vipEndTime": 3742762088,
            "svipEndTimeFormat": "2088-08-08",
            "sex": "1",
            "isSVIP": 1,
            "isVIP": 1,
            "loginType": 1,
            "nickName": "MIKEPHIE",
            "headImageUrl": "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
            "svipEndTime": 3742762088,
            "coin": 88888888
        }];
    }
// 主脚本函数...

    /********** 应用配置信息 **********/
    const appName = "✨Bizhi壁纸✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10;
    const cooldownMs = cooldownMinutes * 60 * 1000;
    const notifyKey = "Bizhi壁纸_notify_key_v1";
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