/*
#!name= ✨ AIMirror ✨
#!desc=图像编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/be\.aimirror\.fun\/.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js

[MITM]
hostname = be.aimirror.fun

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ AIMirror ✨";   // ← 只改这个显示名
const ID = "aimirror";              // ← 对应键名，保持纯字母数字（无 emoji）

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
const url = $request.url;

if (!body) { $done({}); }

// Handle specific URL cases
if (url.includes("query_is_vip")) {
    if (body === 'false') {
        body = 'true';
    } else {
        let data = JSON.parse(body);
        if (data.hasOwnProperty("is_vip")) data.is_vip = true;
        if (data.hasOwnProperty("vip")) data.vip = true;
        body = JSON.stringify(data);
    }
} else if (url.includes("draw")) {
    body = body.replace(/"is_vip"\s*:\s*false/gi, '"is_vip":true');
    body = body.replace(/"vip"\s*:\s*false/gi, '"vip":true');
} else if (url.includes("video_render_count")) {
    if (body !== '0') {
        let data = JSON.parse(body);
        if (typeof data === 'number') {
            data = 999;
            body = JSON.stringify(data);
        } else if (!isNaN(body) && parseInt(body) > 0) {
            body = '999';
        }
    }
} else if (url.includes("consumable_quota")) {
    body = body.replace(/"has_quota"\s*:\s*false/gi, '"has_quota":true');
    body = body.replace(/"quota"\s*:\s*0/g, '"quota":999');
} else if (url.includes("discount")) {
    body = body.replace(/"discount"\s*:\s*false/gi, '"discount":true');
} else {
    let data = JSON.parse(body);
    if (typeof data === 'object' && data !== null) {
        const vipKeys = ['is_vip', 'vip', 'isVip', 'premium', 'isPremium'];
        vipKeys.forEach(key => {
            if (data.hasOwnProperty(key) && data[key] === false) {
                data[key] = true;
            }
        });
        body = JSON.stringify(data);
    }
}

$done({ body });
// 主脚本函数...
