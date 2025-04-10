/*
#!name= ✨ 水印宝 ✨
#!desc=影视编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/syb.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/newappapi\.fntmob\.com\/api\/v1\/qsy\/user-info(.?)+ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/syb.js

[mitm] 
hostname = newappapi.fntmob.com

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "水印宝_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨水印宝✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ❷❾-❾❾-❷❾❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
let obj =  JSON.parse($response.body);

obj.data = {
    ...obj.data,
    "avatar": "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
    "nickname": "Mikephie",
    "is_vip" : 1,
    "level_expire" : 3742762088
}

$done({body: JSON.stringify(obj)});
// 主脚本函数...