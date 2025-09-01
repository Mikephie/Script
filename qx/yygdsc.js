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

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ 雅俗共赏/高定素材大师 ✨";   // ← 只改这个显示名
const ID = "雅俗共赏/高定素材大师";              // ← 对应键名，保持纯字母数字（无 emoji）

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