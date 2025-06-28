/*
#!name= ✨ Bizhi壁纸 ✨
#!desc=图像壁纸
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/bizhi.png
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
        "headImageUrl": "https://raw.githubusercontent.com/Mikephie/icons/main/icon/mike.jpg",
        "svipType" : "year_pro",
        "coin": 88888888,
        "isVIP": 0,
        "isSVIP": 1,
        "vipType": 0,
        "svipType": "season_pro",
        "vipEndTime": 3742762088000,
        "svipEndTime": 3742762088000,
        "vipEndTimeFormat": "2088-08-08T08:08:08Z",
        "svipEndTimeFormat": "2088-08-08T08:08:08Z",
        "vipEndTimeByAdmin": 0,
        "svipEndTimeByAdmin": 0,
        "isVIPByAdmin": 0,
        "isSVIPByAdmin": 0,
        "sex": "1",
        "appVersion": "4.8.7",
        "systemVersion": "18.5",
        "createdAt": "2023-11-19T09:29:18.937Z",
        "updatedAt": "2025-05-22T07:35:33.274Z",
        "loginType": 1,
        "downloadCount": 24,
        "favCount": 0,
        "warmStartCount": 90,
        "coldStartCount": 259,
        "cost": 680.79999999999995,
        "objectId": "6559d56eb87b3b5ada6602a7",
        "userId": "000213.21970f036fd0454a99d29d8cebe086cd.0929"
    }];
}

$done({ body: JSON.stringify(body) });
// 主脚本函数...