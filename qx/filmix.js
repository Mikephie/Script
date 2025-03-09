/*

📜 ✨ Filmix PRO+ ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/appv3\.filmix\.com\.cn\/api\/v1\/user\/user url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/filmix.js

[Script] // Surge
filmix_vip = type=http-response, pattern=^https:\/\/appv3\.filmix\.com\.cn\/api\/v1\/user\/user, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/filmix.js, timeout=60

[Script] // Loon
http-response ^https:\/\/appv3\.filmix\.com\.cn\/api\/v1\/user\/user script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/filmix.js, requires-body=true, timeout=60

[MITM]
hostname = appv3.filmix.com.cn

*/

const appName = "✨Filmix PRO+✨";
const Author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const expire = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";
const notifyEnabled = true;
const notifyKey = "filmix_session_time";
const sessionTimeout = 5 * 60 * 1000; // 5分钟（会话超时时间，单位：毫秒）

// 主逻辑：解锁 VIP
let body = $response.body;
let data = JSON.parse(body);
data.vip_level = 5;
data.is_vip = true;
data.vip_end_time = "2088-08-08T08:08:08Z";
body = JSON.stringify(data);

// 通知逻辑：每个会话弹一次，兼容 Quantumult X、Surge、Loon
if (notifyEnabled) {
    const notify = typeof $notification !== 'undefined' ? $notification : $notify;
    if (typeof notify?.post === 'function') {
        console.log("脚本运行: " + new Date().toISOString());
        
        try {
            const isQuantumultX = typeof $prefs !== 'undefined';
            const store = isQuantumultX ? $prefs : $persistentStore;
            let lastSessionTime = isQuantumultX ? store.valueForKey(notifyKey) : store.read(notifyKey);
            const currentTime = Date.now();

            // 如果没有记录或超过会话超时时间，视为新会话
            if (!lastSessionTime || (currentTime - parseInt(lastSessionTime) > sessionTimeout)) {
                notify.post(appName, Author, expire);
                console.log("新会话通知发送成功");
                isQuantumultX ? store.setValueForKey(currentTime.toString(), notifyKey) : store.write(currentTime.toString(), notifyKey);
            } else {
                console.log("同一会话内，通知跳过");
            }
        } catch (e) {
            console.log("会话管理失败: " + e.message);
            // 回退：直接发送通知
            notify.post(appName, Author, expire);
            console.log("回退通知发送成功");
        }
    } else {
        console.log("通知功能不可用");
    }
}

$done({ body });