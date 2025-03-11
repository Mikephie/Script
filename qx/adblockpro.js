/*
📜 ✨ AdblockPro ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/api\.adblockpro\.app\/verify url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js

[Script] // Surge
AdblockPro = type=http-response, pattern=^https:\/\/api\.adblockpro\.app\/verify, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js

[Script] // Loon
http-response ^https:\/\/api\.adblockpro\.app\/verify script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js, requires-body=true, timeout=60

[MITM]
hostname = api.adblockpro.app

/********** 会话通知模块 **********/
function sNotify(app, author, message, duration = 60000) {
    const sessionKey = `${app.replace(/[^a-zA-Z]/g, '').toLowerCase()}_session`;
    const supportsPrefs = typeof $prefs !== 'undefined';
    const supportsPersistentStore = typeof $persistentStore !== 'undefined' && typeof $notify !== 'undefined';
    const lastNotification = supportsPrefs ? $prefs.valueForKey(sessionKey) : supportsPersistentStore ? $persistentStore.read(sessionKey) : null;
    
    if (lastNotification) {
        $notify(app, author, message);
    }
    
    const expiration = Date.now() + duration;
    if (supportsPrefs) {
        $prefs.setValueForKey(expiration, sessionKey);
    } else if (supportsPersistentStore) {
        $persistentStore.write(expiration, sessionKey);
    }
}

/********** 应用配置信息 **********/
const appName = "✨AdblockPro✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

// 主脚本函数...
let body;
try {
    body = JSON.parse($response.body);
} catch (e) {
    $done({ body: $response.body });
    return;
}

function modifyObject(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'number' && obj[key] === 0) {
                obj[key] = 1;
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            }
        }
    }
}

// Modify the object
modifyObject(body);

// Additional modifications as per your requirements
if (body.hasOwnProperty('v')) {
    body.v = true;
}
// 主脚本函数...

sNotify(appName, author, message, 10 * 60 * 1000);
if (typeof body === 'object') {
    $done({ body: JSON.stringify(body) });
} else {
    $done({ body });
}
