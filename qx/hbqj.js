/*
#!name= ✨ 婚贝请柬 ✨
#!desc=图像编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/hbqj.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/h5\.hunbei\.com\/m\/member\/getUserInfo\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbqj.js

[MITM]
hostname = h5.hunbei.com

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ 婚贝请柬 ✨";   // ← 只改这个显示名
const ID = "婚贝请柬";              // ← 对应键名，保持纯字母数字（无 emoji）

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
let body = $response.body;
if (!body) { $done({}); }

let data = JSON.parse(body);
data.data = {
    ...data.data,
    "vipState": true,
    "end_time": 3742762088,
    "allLifeVip": true,
    "tel": "8888888888",
    "status": 2,
    "level": 4,
    "card_count": 888,
    "card_10": {
        "count": 888,
        "amount": 888
    },
    "wx_name": "MIKEPHIE",
    "headimg": "https://i.ibb.co/wM5z10N/IMG-1287.jpg"
};

$done({ body: JSON.stringify(data) });
// 主脚本函数...
