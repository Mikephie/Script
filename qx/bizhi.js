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

    if (body.results && Array.isArray(body.results)) {
        body.results = body.results.map(user => ({
            ...user,
            isVIP: 1,
            isSVIP: 1,
            vipEndTime: 3742762088,
            svipEndTime: 3742762088,
            vipEndTimeFormat: "2088-08-08",
            svipEndTimeFormat: "2088-08-08",
            coin: 88888888,
            email: "888@gmail.com",
            nickName: "Mikephie",
            headImageUrl: "https://i.ibb.co/wM5z10N/IMG-1287.jpg"
        }));
    }
// 主脚本函数...

/********** 应用配置信息 **********/
const appName = "✨Bizhi壁纸✨";
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