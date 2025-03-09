/*
📜 ✨ 边框水印大师 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https?:\/\/photoby\.hasmash\.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js

[MITM]
hostname = photoby.hasmash.com
*/

const appName = "✨边框水印大师✨";
const Author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const expire = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";
const notifyEnabled = true;
const notifyKey = "bksyds_session_time";
const sessionTimeout = 5 * 60 * 1000; // 5分钟（会话超时时间，单位：毫秒）

// 主逻辑：解锁 VIP
let resp = JSON.parse($response.body || '{}');
resp.result = resp.result || {};

if ($request.url.includes("/auth/member")) {
    resp.result.memberExpire = 3742762088000;
} else if ($request.url.includes("/clickEvent")) {
    resp.result.isVip = 1;
    resp.result.vipTime = "2088-08-08 08:08:08";
} else if ($request.url.includes("/verify")) {
    resp.result.expire = 3742762088000;
}

if (notifyEnabled && typeof $notification?.post === 'function') {
    $notification.post(appName, Author, expire);
}

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


$done({ body: JSON.stringify(resp) });