/*
#!name= ✨ 婚礼精选 ✨
#!desc=图像编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/hljx.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/love\.leminet\.cn\/golove\/v05\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hljx.js

[MITM]
hostname = love.leminet.cn

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ 婚礼精选 ✨";   // ← 只改这个显示名
const ID = "婚礼精选";              // ← 对应键名，保持纯字母数字（无 emoji）

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
try {
    var body = JSON.parse($response.body);

    body = {
      "success" : true,
      "data" : {
        "id" : 1163222,
        "phone" : "",
        "balance" : 888888,
        "is_guest" : 0,
        "avatar" : "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
        "city_id" : 0,
        "group_id" : 1,
        "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjE5ODY3MjQsInN0YXR1cyI6MSwidXNlcl9pZCI6MTE2MzIyMn0.QcqjpzCLTJ3f1bP_TH1yzxqHqRTCTAOoamnsoyUuOIk",
        "username" : "MIKEPHIE",
        "is_admin" : 0,
        "email" : "888@gmail.com",
        "untried" : false,
        "vip_expire" : 3742762088000
      }
    };

    $done({ body: JSON.stringify(body) });
} catch (e) {
    $done({ body: $response.body });
}
// 主脚本函数...
