/*
📜 ✨ EmbyCrack ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/embycrack.js

[Script] // Surge
EmbyCrack = type=http-response, pattern=^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey), requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/embycrack.js, timeout=60

[Script] // Loon
http-response ^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/embycrack.js, requires-body=true, timeout=60

[MITM]
hostname = mb3admin.com

*/

// 主脚本函数...
try {
    var url = $request.url;
    var obj = {};

    const myStatus = "HTTP/1.1 200 OK";
    const myHeaders = {
        "Crack": "KS", 
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "*", 
        "Access-Control-Allow-Method": "*", 
        "Access-Control-Allow-Credentials": "true"
    };

    if (url.indexOf('/admin/service/registration/validateDevice') != -1) {
        obj = {
            "cacheExpirationDays": 365,
            "message": "Device Valid",
            "resultCode": "GOOD"
        };
    } else if (url.indexOf('/admin/service/appstore/register') != -1) {
        obj = {
            "featId":"",
            "registered":true,
            "expDate":"2099-09-09",
            "key":""
        };
    } else if (url.indexOf('/admin/service/registration/validate') != -1) {
        obj = {
            "featId":"",
            "registered":true,
            "expDate":"2099-09-09",
            "key":""
        };
    } else if (url.indexOf('/admin/service/registration/getStatus') != -1){
        obj = {
            "planType":"Cracked",
            "deviceStatus":"",
            "subscriptions":[]
        };
    } else if (url.indexOf('/admin/service/supporter/retrievekey') != -1){
        obj = {
            "Success":false,
            "ErrorMessage":"Supporter not found"
        };
    }

    myData = JSON.stringify(obj);
// 主脚本函数...    

    // 添加通知功能
    const appName = "✨EmbyCrack✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10; 
    const cooldownMs = cooldownMinutes * 60 * 1000;
    
    const notifyKey = "EmbyCrack_notify_key";
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

    // 构建响应对象并返回
    const myResponse = {
        status: myStatus,
        headers: myHeaders,
        body: myData
    };

    $done(myResponse);
    
} catch (e) {
    // 出错时返回原始响应
    $done({});
}