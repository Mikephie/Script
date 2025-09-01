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

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ 亲戚计算器 ✨";   // ← 只改这个显示名
const ID = "亲戚计算器";              // ← 对应键名，保持纯字母数字（无 emoji）

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