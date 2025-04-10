/*
#!name= ✨ 亲戚计算器 ✨
#!desc=效率
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/qqjxq.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^http:\/\/chenghu\.kuaixuanwo\.com\/user\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/qqjsq.js

[mitm] 
hostname = chenghu.kuaixuanwo.com

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "亲戚计算器_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨亲戚计算器✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ❷❾-❾❾-❷❾❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
let obj = JSON.parse($response.body);

obj.data = {
   ...obj.data,
   "subscribe_expires_date" : "2088-08-08T08:08:08Z",
   "vip_type" : 1,
   "purchase_date" : 32472115200,
   "is_vip" : 1
}

$done({body: JSON.stringify(obj)});
// 主脚本函数...