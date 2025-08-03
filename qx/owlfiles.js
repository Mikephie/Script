/*
#!name= ✨ Owlfiles ✨
#!desc=FTP
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/owlfiles.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/www\.skyjos\.com:58080\/ws\/(validate|loadaccountinfo) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/owlfiles.js

[MITM]
hostname = skyjos.com:58080

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "Owlfiles_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Owlfiles✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
try {
  let obj = JSON.parse($response.body);

  obj.memberLevel = 3;
  obj.expireAt = 2754094349450;

  $done({ body: JSON.stringify(obj) });
} catch (err) {
  console.log("Skyjos 解锁失败: " + err);
  $done({});
}
// 主脚本函数...
