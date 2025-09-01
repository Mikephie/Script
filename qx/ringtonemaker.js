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

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ Ringtonemaker ✨";   // ← 只改这个显示名
const ID = "ringtonemaker";              // ← 对应键名，保持纯字母数字（无 emoji）

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