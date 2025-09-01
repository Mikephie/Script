/*
#!name= ✨ 水印宝 ✨
#!desc=影视编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/syb.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/newappapi\.fntmob\.com\/api\/v1\/qsy\/user-info(.?)+ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/syb.js

[mitm] 
hostname = newappapi.fntmob.com

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ 水印宝 ✨";   // ← 只改这个显示名
const ID = "水印宝";              // ← 对应键名，保持纯字母数字（无 emoji）

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
let obj =  JSON.parse($response.body);

obj.data = {
    ...obj.data,
    "avatar": "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
    "nickname": "Mikephie",
    "is_vip" : 1,
    "level_expire" : 3742762088
}

$done({body: JSON.stringify(obj)});
// 主脚本函数...