/*
📜 ✨ Aloha ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/api\.alohaprofile\.com\/v1\/profile_info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aloha.js

[Script] // Surge
Aloha = type=http-response, pattern=^https:\/\/api\.alohaprofile\.com\/v1\/profile_info, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aloha.js, timeout=60

[Script] // Loon
http-response ^https:\/\/api\.alohaprofile\.com\/v1\/profile_info script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aloha.js, requires-body=true, timeout=60

[MITM]
hostname = api.alohaprofile.com

*/

// 主脚本函数...
try {    
    let body = JSON.parse($response.body);

    if (body.hasOwnProperty('profile')) {
        body.profile.is_premium = true;
        body.profile.end_of_premium = 3742762088;
        body.profile.email = "888@gmail.com";
        body.profile._end_of_premium = "2088-08-08 08:08:08.000";
    }
// 主脚本函数...

/********** 应用配置信息 **********/
const appName = "✨Aloha✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
const cooldown = 10 * 60 * 1000; // 1分钟冷却时间
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

    $done({ body: JSON.stringify(body) });
} catch (e) {
    $done({ body: $response.body });
}