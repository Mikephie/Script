/*
📜 ✨ AdblockPro ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/be\.aimirror\.fun\/(query_is_vip|draw|users\/video_render_count|query_consumable_quota|users\/discount) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js

[Script] // Surge
be_vip = type=http-response, pattern=^https:\/\/be\.aimirror\.fun\/(query_is_vip|draw|users\/video_render_count|query_consumable_quota|users\/discount), requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js, timeout=60

[Script] // Loon
http-response ^https:\/\/be\.aimirror\.fun\/(query_is_vip|draw|users\/video_render_count|query_consumable_quota|users\/discount) script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js, requires-body=true, timeout=60

[MITM]
hostname = be.aimirror.fun

*/

/********** 主逻辑：解锁VIP **********/
const appName = "✨AIMirror✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

// 主逻辑：解锁 VIP
let body = $response.body;
let url = $request.url;

function sendNotification(title, subtitle, message) {
    if (typeof $notification != 'undefined') {
        // Surge
        $notification.post(title, subtitle, message);
    } else if (typeof $notify != 'undefined') {
        // Quantumult X
        $notify(title, subtitle, message);
    }
}

if (url.includes("/query_is_vip")) {
    if (body === 'false') {
        body = 'true';  // Set VIP status to true
    }
} else if (url.includes("/draw")) {
    body = body.replace(/"is_vip"\s*:\s*false/g, '"is_vip":true');  // Change VIP status in draw results
} else if (url.includes("/users/video_render_count")) {
    if (body === '0') {
        body = '这个没解锁别用了';  // Inform the user that the feature is not unlocked
        sendNotification("提示", "", "这个视频ai无法解锁，请返回上一个界面");
    }
} else if (url.includes("/query_consumable_quota")) {
    body = body.replace(/"has_quota"\s*:\s*false/g, '"has_quota":true');  // Set quota to true
} else if (url.includes("/users/discount")) {
    body = body.replace(/"discount"\s*:\s*false/g, '"discount":true');  // Apply discount
}

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