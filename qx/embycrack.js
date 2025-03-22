/*
📜 ✨ EmbyUnlock ✨
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
var obj = {};
const url = $request.url;

if (!url) { $done({}); }

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
        "featId": "",
        "registered": true,
        "expDate": "2088-08-08",
        "key": ""
    };
} else if (url.indexOf('/admin/service/registration/validate') != -1) {
    obj = {
        "featId": "",
        "registered": true,
        "expDate": "2088-08-08",
        "key": ""
    };
} else if (url.indexOf('/admin/service/registration/getStatus') != -1) {
    obj = {
        "planType": "Cracked",
        "deviceStatus": "",
        "subscriptions": []
    };
} else if (url.indexOf('/admin/service/supporter/retrievekey') != -1) {
    obj = {
        "Success": false,
        "ErrorMessage": "Supporter not found"
    };
}

var myData = JSON.stringify(obj);
// 主脚本函数...

/********** 应用配置信息 **********/
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "EmbyUnlock_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;

if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨EmbyUnlock✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❾-⓿❾-❷⓿❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}

$done({ status: myStatus, headers: myHeaders, body: myData });