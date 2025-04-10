/*
#!name= ✨ 雅俗共赏/高定素材大师 ✨
#!desc=影像编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/scds.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
# >雅俗共赏/高定素材大师（永久会员）需要登录！
^https?:\/\/apps-api\.(lianaishouce|lingege)\.cn\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/yygdsc.js

[mitm] 
hostname = apps-api.lianaishouce.cn, apps-api.lingege.cn

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "雅俗共赏/高定素材大师_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨雅俗共赏/高定素材大师✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ❷❾-❾❾-❷❾❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
var obj = JSON.parse($response.body);

    obj = {
  "msg" : "操作成功",
  "data" : {
    "memberExpireTimeStr" : "2088-08-08 08:08:08",
    "accountSourceTypeEnumStr" : "苹果",
    "memberExpireTime" : 3742762088000,
    "statusStr" : "正常",
    "sex" : 0,
    "memberStatusStr" : "已开通",
    "remainNum" : 8888,
    "vipLevel" : 4,
    "userId" : "88888888",
    "memberStatus" : 1,
    "accountSourceType" : 3,
    "avatar" : "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
    "sexStr" : "未知",
    "isForeverVip" : true,
    "registerTime" : "2024-06-29 01:42:26",
    "nickname" : "Mikephie",
    "email" : "mikephiemy@gmail.com",
    "status" : 0
  },
  "code" : 0
}

$done({body : JSON.stringify(obj)});
// 主脚本函数...