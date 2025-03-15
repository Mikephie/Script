/*

📜 Felo 解锁 VIP 脚本
📅 更新时间：2024年07月19日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https?:\/\/(translator|accounts).felo.me url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/felo.js

[Script] // Surge
Felo = type=http-response, pattern=^https?:\/\/(translator|accounts).felo.me, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/felo.js, timeout=60

[Script] // Loon
http-response ^https?:\/\/(translator|accounts).felo.me script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/felo.js, requires-body=true, timeout=60

[mitm] 
hostname = accounts.felo.me,translator.felo.me

*/

// 主脚本函数...
let url = $request.url;
try {
    let url = $request.url;
    let notifyExecuted = false;

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

        // 添加通知
        sendNotification();
        notifyExecuted = true;
        
        $done({body: JSON.stringify(body)});
    } 
    else if (url.includes("thirdToken")) {
        // 修改请求头
        let headers = Object.fromEntries(
            Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value])
        );
        
        Object.assign(headers, {
            authorization: "qq_60cabdacf608480aa95663ab8f0f1ab5__",
            deviceid: "902C611A-A12A-4D48-9DEF-562EF8155908",
            cookie: "_clsk=1e3ji69%7C1723606564421%7C1%7C1%7Cw.clarity.ms%2Fcollect; _ga_70F8QP140X=GS1.1.1723606552.4.1.1723606558.0.0.0; _ga=GA1.1.347029008.1723476322; _clck=8lm7fs%7C2%7Cfob%7C0%7C1685"
        });
        
        // 添加通知
        if (!notifyExecuted) {
            sendNotification();
        }
        
        $done({headers: headers});
    }
    else {
        $done({});
    }
    
    // 通知函数
    function sendNotification() {
        const appName = "✨Felo实时翻译✨";
        const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
        const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
        
        const cooldownMinutes = 10;
        const cooldownMs = cooldownMinutes * 60 * 1000;
        
        const notifyKey = "felo_translator_notify_key";
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
    }
} catch (e) {
    $done({});
}
// 主脚本函数...