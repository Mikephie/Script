/*
#!name= ✨ Owlfiles ✨
#!desc=FTP
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/owlfiles.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https?:\/\/www\.skyjos\.com(?::58080)?\/ws\/(?:validate|loadaccountinfo)\b url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/owlfiles.js

[mitm]
hostname = www.skyjos.com

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
var mikephie = JSON.parse($response.body);

    mikephie = {
  "accountRegistTime" : 0,
  "connectedWeixin" : false,
  "externalUid" : "",
  "uid" : 122617,
  "expireAt" : 2754094349450,
  "avatarName" : "",
  "memberLevel" : 3,
  "connectedGoogle" : false,
  "dispName" : "mikephiemy@gmail.com",
  "errorMessage" : "",
  "connectedApple" : true,
  "errorCode" : 0,
  "withoutPasswd" : true,
  "email" : "000213.691bca3f41474ad18bcd31c191282cbd.1408",
  "succ" : true,
  "lastPasswordModifiedTime" : 1754143713794

$done({body : JSON.stringify(mikephie)});
// 主脚本函数...
