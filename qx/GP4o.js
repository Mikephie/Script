/*
📜 ✨ GP4o ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/nichousha\.sjrjyffs\.top url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/gp4o.js
^https:\/\/nichousha\.sjrjyffs\.top url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/gp4o.js

[Script] // Surge
GP4o = type=http-response, pattern=^https:\/\/nichousha\.sjrjyffs\.top, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/gp4o.js, timeout=60
GP4o = type=http-request, pattern=^https:\/\/nichousha\.sjrjyffs\.top, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/gp4o.js, timeout=60

[Script] // Loon
http-response ^https:\/\/nichousha\.sjrjyffs\.top script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/gp4o.js, requires-body=true, timeout=60
http-request ^https:\/\/nichousha\.sjrjyffs\.top script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/gp4o.js, requires-body=true, timeout=60

[MITM]
hostname = nichousha.sjrjyffs.top

*/

// 主脚本函数...
try {
    if ($request.url.includes('api/img/aiSketch') && $request.body) {
        let modifiedBody = $request.body.replace(/("taskParameter"\s*:\s*)"\d+"/, '$1"0"');
        $done({ body: modifiedBody });
    } 
    else if ($request.url.includes('api/app/user/getCurrentInfo')) {
        var mikephie = {
            "msg": "ok",
            "data": {
                "vipStatus": "1",
                "id": "1818946794591789058",
                "vipLabel": "1",
                "nickname": "尾号tAI_Mikephie",
                "imgNum": 888888,
                "avatar": "https://i.ibb.co/wM5z10N/IMG-1287.jpg"
            },
            "code": 200
        };
// 主脚本函数...

    /********** 应用配置信息 **********/
    const appName = "✨GP4o✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10; 
    const cooldownMs = cooldownMinutes * 60 * 1000;
    
    const notifyKey = "GP4o_notify_key";
    const now = Date.now();
    let lastNotifyTime = 0;
    
    try {
        const storedTime = $persistentStore.read(notifyKey);
        if (storedTime) {
            lastNotifyTime = parseInt(storedTime);
            if (isNaN(lastNotifyTime)) lastNotifyTime = 0;
        }
    } catch (e) {
        lastNotifyTime = 0;
    }
    
    if (now - lastNotifyTime > cooldownMs) {
        if (typeof $notification !== 'undefined') {
            $notification.post(appName, author, message);
        } else if (typeof $notify !== 'undefined') {
            $notify(appName, author, message);
        }
        $persistentStore.write(now.toString(), notifyKey);
    }
        
        $done({body: JSON.stringify(mikephie)});
    } 
    else {
        $done({});
    }
} catch (e) {
    // 出错时，原样返回
    if ($request && $request.body) {
        $done({body: $request.body});
    } else if ($response && $response.body) {
        $done({body: $response.body});
    } else {
        $done({});
    }
}