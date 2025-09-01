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

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ Wallcraft ✨";   // ← 只改这个显示名
const ID = "wallcraft";              // ← 对应键名，保持纯字母数字（无 emoji）

const EN = "n:"+ID+":e";             // 开关
const TS = "n:"+ID+":t";             // 时间戳
const CD = 600000;                   // 冷却时长：10 分钟（毫秒）

// ---- 通知函数（兼容 QX / Surge / Loon）----
function notify(t,s,b){
  if (typeof $notify==="function") $notify(t,s,b);
  else if ($notification?.post) $notification.post(t,s,b);
  else console.log("[Notify]", t, s, b);
}

// ---- 判定逻辑 ----
let enabled = (($persistentStore.read(EN) || "1") === "1");
if (enabled) {
  let now  = Date.now();
  let last = parseInt($persistentStore.read(TS) || "0",10) || 0;
  if (last===0 || now-last>CD) {
    notify(APP_NAME,"💖永久解锁 🆚 ⓿❽-⓿❽-❷⓿❽❽💗");
    $persistentStore.write(String(now), TS);
  }
}

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