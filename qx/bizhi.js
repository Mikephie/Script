/*
#!name= ✨ Bizhi壁纸 ✨
#!desc=图像壁纸
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/bizhi.js
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/leancloud\.emotionwp\.com\/1\.1\/classes\/wpf_[a-z]+ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js

[MITM]
hostname = leancloud.emotionwp.com

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "Bizhi壁纸_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Bizhi壁纸✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
let body = JSON.parse($response.body);
const url = $request.url;

if (!body) { $done({}); }

const user = /classes\/wpf_account/;

if (user.test(url)) {
    body.results = [{
        "nickName": "MIKEPHIE",
        "headImageUrl": "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
        "coin": 88888888
    }];
}

$done({ body: JSON.stringify(body) });
// 主脚本函数...