/*
#!name= ✨ Felo ✨
#!desc=效率
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/felo.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https?:\/\/(translator|accounts).felo.me url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/felo.js
^https?:\/\/(translator|accounts).felo.me url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/felo.js

[mitm] 
hostname = accounts.felo.me,translator.felo.me

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "Felo_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨Felo✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❾-⓿❾-❷⓿❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
let url = $request.url;
if (!url) { $done({}); }

if (url.includes("user")) {
    // 修改响应体
    let body = {
        "status": 200,
        "data": {
            "now": "2024-08-18T11:57:20+0000",
            "type": "SUBSCRIPTION",
            "plan": {
                "app_id": "translator",
                "charge_time": "2088-08-08T11:14:50+0000",
                "subscription_id_third": "300001970562827",
                "reset_time": "2088-08-08T11:14:50+0000",
                "count": 1,
                "subscription_type": "ANNUALLY",
                "subscribe_time": "2024-08-18T11:14:50+0000",
                "product_id": "translator_pro_annual_trial",
                "subscription_channel": "IAP",
                "reset_period": "ANNUALLY",
                "subscription_id": "1825129251802910724",
                "status": "TRIAL",
                "subscriber": "1823835292198371329"
            },
            "user_product_total": [
                {
                    "freeze": 0,
                    "total_limit": "UNLIMITED",
                    "deduction_type": "DURATIONS",
                    "user_id": "1823835292198371329",
                    "product_item_type": "TRANSLATOR_DURATIONS",
                    "total": 5333333328,
                    "balance": 5333333328,
                    "user_product_total_id": "1823835294030647298"
                }
            ]
        },
        "code": "OK"
    }; 

    $done({ body: JSON.stringify(body) });
    
// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "FeloToken_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨FeloToken✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❾-⓿❾-❷⓿❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------  
    
} else if (url.includes("thirdToken")) {
// 修改请求头
    let headers = Object.fromEntries(
        Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value])
    );

    Object.assign(headers, {
        authorization: "qq_60cabdacf608480aa95663ab8f0f1ab5__",
        deviceid: "902C611A-A12A-4D48-9DEF-562EF8155908",
        cookie: "_clsk=1e3ji69%7C1723606564421%7C1%7C1%7Cw.clarity.ms%2Fcollect; _ga_70F8QP140X=GS1.1.1723606552.4.1.1723606558.0.0.0; _ga=GA1.1.347029008.1723476322; _clck=8lm7fs%7C2%7Cfob%7C0%7C1685"
    });

    $done({ headers });
} else {
    $done({});
}
// 主脚本函数...