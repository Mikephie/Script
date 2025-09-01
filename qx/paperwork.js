/*

📜 视频转文字 解锁 VIP 脚本
📅 更新时间：2024年03月08日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/paperwork\.szshht\.cn\/api\/User\/(getUserInfo|getVipInfo) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/paperwork.js

[mitm] 
hostname = paperwork.szshht.cn

*/

// ===== 轻量通知 + 冷却 =====
const APP_NAME = "✨ 视频转文字 ✨";   // ← 只改这个显示名
const ID = "视频转文字";              // ← 对应键名，保持纯字母数字（无 emoji）

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

let body = JSON.parse($response.body);
let url = $request.url;

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            } else {
                // VIP interface modifications
                if (url.includes("/getVipInfo")) {
                    if (key === 'is_vip') {
                        obj[key] = 1;
                    }
                    if (key === 'enddate') {
                        obj[key] = "2088-08-08";
                    }
                    if (key === 'product_id') {
                        obj[key] = "VideoToText_158";
                    }
                }
                // User info interface modifications
                else if (url.includes("/getUserInfo")) {
                    if (key === 'nickname') {
                        obj[key] = "88888888888";
                    }
                    if (key === 'phone') {
                        obj[key] = "88888888888";
                    }
                    if (key === 'avatar') {
                        obj[key] = "https://i.ibb.co/wM5z10N/IMG-1287.jpg";
                    }
                }
            }
        }
    }
    return obj;
}

body = modifyObject(body);
$done({ body: JSON.stringify(body) });