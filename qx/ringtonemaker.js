/*
#!name= ✨ Ringtonemaker ✨
#!desc=娱乐
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/ringtonemaker.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^http:\/\/clip\.tto321\.cn\/v1\/api\/query\/userInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ringtonemaker.js

[mitm] 
hostname = clip.tto321.cn

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "Ringtonemaker_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Ringtonemaker✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ❷❾-❾❾-❷❾❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
var obj = JSON.parse($response.body);

    obj = {
  "msg" : "OK",
  "data" : {
    "uid" : 88888888,
    "userName" : "Mikephie",
    "wordRemain" : 88888,
    "payType" : 1,
    "inviteNums" : 0,
    "paintRemain" : 88888,
    "isVip" : 1,
    "expireTime" : "2088-08-08 08:08:08",
    "isTourst" : 0,
    "inviteCode" : "000000"
  },
  "code" : 200
}

$done({body : JSON.stringify(obj)});
// 主脚本函数...