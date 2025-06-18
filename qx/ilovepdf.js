/*
#!name= ✨ ILovePDF ✨
#!desc=效率 - 需试用
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/ilovepdf.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/service\.ilovepdf\.com\/v1\/user url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ilovepdf.js

[MITM]
hostname = service.ilovepdf.com

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "ILovePDF_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨ILovePDF✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
let body = JSON.parse($response.body);

// 设置基础会员信息
body.valid_until = "2088-08-08 23:59:59";
body.premium = true;
body.can_trial = false;
body.active = 1;
body.results = {
  "status": 1,
  "vipType": 1,
  "expiredTime": 3742762088000,
  "isVip": true
};

// 替换头像（可选）
//body.avatar = "https:\/\/service.ilovepdf.com\/avatar\/3fefaacc5c278e83ca8fb462ba07c334\/ZKrTylPxWVEYANrF1urwvO3RKD58Cz78?s=300";

// 强制设置 limits 为最大
if (body.limits) {
  for (const key in body.limits) {
    if (body.limits[key]) {
      body.limits[key].mb = 99999;
      body.limits[key].files = 9999;
      if ('pages' in body.limits[key]) {
        body.limits[key].pages = 1000;
      }
      if ('pxsize' in body.limits[key]) {
        body.limits[key].pxsize = 2073600;
      }
    }
  }
}

$done({ body: JSON.stringify(body) });
// 主脚本函数...