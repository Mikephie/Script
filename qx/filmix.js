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

/********** 主逻辑：解锁VIP **********/
const appName = "✨Filmix PRO+✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

// 主逻辑：解锁 VIP
let body = $response.body;
let data = JSON.parse(body);
data.vip_level = 5;
data.is_vip = true;
data.vip_end_time = "2088-08-08T08:08:08Z";
body = JSON.stringify(data);

// 发送会话通知（会话时长设为10分钟）
sessionNotify(appName, author, message, 10 * 60 * 1000);

/*
📱 精简版会话通知模块 📱
*/

function sessionNotify(appName, author, message, timeout = 1 * 60 * 1000) {
    // 动态生成存储键名（从应用名提取字母作为前缀）
    const keyPrefix = appName.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const storeKey = `${keyPrefix}_session_key`;
    
    // 环境判断
    const isQuanX = typeof $prefs !== 'undefined';
    const isSurge = typeof $persistentStore !== 'undefined' && typeof $notify !== 'undefined';
    const isLoon = typeof $persistentStore !== 'undefined' && typeof $notification !== 'undefined';
    
    // 获取存储和通知实例
    const store = isQuanX ? $prefs : (isSurge || isLoon ? $persistentStore : null);
    const notify = isQuanX || isLoon ? $notification : (isSurge ? $notify : null);
    
    if (!store || !notify) return false;
    
    // 读取上次会话时间
    let lastTime;
    try {
        lastTime = isQuanX ? 
            store.valueForKey(storeKey) : 
            store.read(storeKey);
    } catch (e) {
        console.log(`[${appName}] 读取会话时间失败`);
    }
    
    const currentTime = Date.now();
    const isNewSession = !lastTime || (currentTime - parseInt(lastTime) > timeout);
    
    // 如果是新会话，发送通知并更新时间
    if (isNewSession) {
        try {
            notify.post(appName, author, message);
            isQuanX ? 
                store.setValueForKey(currentTime.toString(), storeKey) : 
                store.write(currentTime.toString(), storeKey);
            console.log(`[${appName}] 新会话通知已发送，键名: ${storeKey}`);
        } catch (e) {
            console.log(`[${appName}] 发送通知失败`);
        }
    } else {
        console.log(`[${appName}] 同一会话内，跳过通知，键名: ${storeKey}`);
    }
    
    return isNewSession;
}

$done({ body });