/*
#!name= ✨ Filmix PRO+ ✨
#!desc=影视编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/filmix.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/appv3\.filmix\.com\.cn\/api\/v1\/user\/user url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/filmix.js

[MITM]
hostname = appv3.filmix.com.cn

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "Filmix PRO+_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Filmix PRO+✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
let body = $response.body;
if (!body) { $done({}); }

let data = JSON.parse(body);
data.vip_level = 5;
data.is_vip = true;
data.vip_end_time = "2088-08-08T08:08:08Z";

$done({ body: JSON.stringify(data) });
// 主脚本函数...