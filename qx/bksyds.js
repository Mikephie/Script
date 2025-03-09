/*
📜 ✨ 边框水印大师 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/photoby\.hasmash\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js

[Script] // Surge
photoby_vip = type=http-response, pattern=^https:\/\/photoby\.hasmash\.com, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js, timeout=60

[Script] // Loon
http-response ^https:\/\/photoby\.hasmash\.com script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js, requires-body=true, timeout=60

[MITM]
hostname = photoby.hasmash.com

*/

/********** 会话通知函数 **********/
function sessionNotify(appName, author, message, timeout = 1 * 60 * 1000) {
    // 从应用名提取英文字母作为键名前缀
    const keyPrefix = appName.replace(/[^a-zA-Z]/g, '').toLowerCase();
    // 创建唯一的存储键名
    const storeKey = `${keyPrefix}_session_key`;
    
    const isQuanX = typeof $prefs !== 'undefined';
    const isSurge = typeof $persistentStore !== 'undefined' && typeof $notify !== 'undefined';
    const isLoon = typeof $persistentStore !== 'undefined' && typeof $notification !== 'undefined';
    
    const store = isQuanX ? $prefs : (isSurge || isLoon ? $persistentStore : null);
    const notify = isQuanX || isLoon ? $notification : (isSurge ? $notify : null);
    
    if (!store || !notify) return false;
    
    let lastTime;
    try {
        lastTime = isQuanX ? store.valueForKey(storeKey) : store.read(storeKey);
    } catch (e) {
        console.log(`[${appName}] 读取会话时间失败`);
    }
    
    const currentTime = Date.now();
    const isNewSession = !lastTime || (currentTime - parseInt(lastTime) > timeout);
    
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

/********** 主逻辑：解锁VIP **********/
const appName = "✨边框水印大师✨";
const author  = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

// 解析响应
let resp = JSON.parse($response.body || '{}');
resp.result = resp.result || {};

// 解锁会员
if ($request.url.includes("/auth/member")) {
    resp.result.memberExpire = 3742762088000;
} else if ($request.url.includes("/clickEvent")) {
    resp.result.isVip = 1;
    resp.result.vipTime = "2088-08-08 08:08:08";
} else if ($request.url.includes("/verify")) {
    resp.result.expire = 3742762088000;
}

// 发送会话通知（会话时长设为1分钟）
sessionNotify(appName, author, message, 10 * 60 * 1000);

$done({ body: JSON.stringify(resp) });