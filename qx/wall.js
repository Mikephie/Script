/*
#!name= ✨ Wallcraft ✨
#!desc=图像壁纸
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/wallcraft.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https?:\/\/billing-ios\.wallpaperscraft\.com\/(verify_receipt|products)\/remove_ads$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/wall.js

[mitm]
hostname = billing-ios.wallpaperscraft.com

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "Wallcraft_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Wallcraft✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ❷❾-❾❾-❷❾❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
var obj = JSON.parse($response.body);
const vipa = '/verify_receipt/remove_ads';
const vipb = '/products/remove_ads';

if ($request.url.indexOf(vipa) != -1){
  obj.items["all_time"] = {
    "type" : "nonconsumable",
    "is_active" : true
  };
  obj.items["com.wallpaperscraft.wallpapers.year.1.5baks"] = {
    "type" : "subscription",
    "already_used_introductory_price" : false,
    "is_active" : true
  };
}

if ($request.url.indexOf(vipb) != -1){
  obj = {  "items" : {   "nonconsumables" : [  "all_time" ],   "subscriptions" : [  "com.wallpaperscraft.wallpapers.year.1.5baks" ]}};
}

$done({body : JSON.stringify(obj)});
// 主脚本函数...