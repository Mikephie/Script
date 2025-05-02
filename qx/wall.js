/*
#!name= ✨ Wallcraft ✨
#!desc=图像壁纸
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/wallcraft.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/billing-ios\.wallpaperscraft\.com\/v1\/(?:verify_receipt|products)\/remove_ads url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/wall.js

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
let body = JSON.parse($response.body);
const url = $request.url;

if (/\/verify_receipt\/remove_ads/i.test(url)) {
  for (const k in body.items) {
    if (typeof body.items[k] === "object") {
      body.items[k].is_active = true;
      if (body.items[k].type === "subscription") {
        body.items[k].already_used_introductory_price = false;
      }
    }
  }
}

if (/\/products\/remove_ads/i.test(url)) {
  body = {
    items: {
      nonconsumables: ["all_time"],
      subscriptions: ["com.wallpaperscraft.wallpapers.year.1.5baks"]
    }
  };
}

$done({ body: JSON.stringify(body) });
// 主脚本函数...