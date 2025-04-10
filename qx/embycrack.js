/*
#!name= ✨ EmbyUnlock ✨
#!desc=效率
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/emby.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/embycrack.js

[MITM]
hostname = mb3admin.com

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "EmbyUnlock_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨EmbyUnlock✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❾-⓿❾-❷⓿❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

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

$done({ status: myStatus, headers: myHeaders, body: myData });
// 主脚本函数...