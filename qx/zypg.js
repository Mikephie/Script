/*
#!name= ✨ 作业批改|试卷扫描|错题打印机 ✨
#!desc=效率
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/zypg.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local] // Quantumult X
^https?:\/\/appss\.(rhinoxky|baomingding|rhinoxlab)\.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/zypg.js

[MITM]
hostname = appss.rhinoxlab.com, appss.baomingding.com

*/

// 主脚本函数...
try {
    let mikephie = JSON.parse($response.body);
    const avatarUrl = "https://i.ibb.co/f1cgnGT/IMG-1215.jpg";
    if ($request.url.includes("rhinoxky") || $request.url.includes("rhinoxlab")) {
        if (mikephie.result) {
            mikephie.result.headImg = avatarUrl;
            mikephie.result.type = "VIP";
            mikephie.result.freeFlag = "YES";
            mikephie.result.wordage = 8888888888;
            mikephie.result.appleUserEmail = "888@gmail.com";
            mikephie.result.email = "888@gmail.com";
            mikephie.result.vipExpireTime = "2088-08-08 08:08:08";
            mikephie.result.vipExpireDays = 8888888888;
            mikephie.result.remainTimeSeconds = 8888888;
            mikephie.result.times = 8888888888;
            mikephie.result.nickname = "Mikephie";
            mikephie.result.vipGroupInfos = [{
                groupType: "TYPE_ONE",
                vipType: "VIP",
                autoPay: "YES"
            }];
        }
    } 
    else if ($request.url.includes("baomingding")) {
        if (mikephie.result) {
            mikephie.result.headImg = avatarUrl;
            mikephie.result.type = "VIP";
            mikephie.result.freeFlag = "YES";
            mikephie.result.wordage = 8888888888;
            mikephie.result.appleUserEmail = "888@gmail.com";
            mikephie.result.email = "888@gmail.com";
            mikephie.result.vipExpireTime = "2088-08-08 08:08:08";
            mikephie.result.vipExpireDays = 8888888888;
            mikephie.result.remainTimeSeconds = 8888888;
            mikephie.result.times = 8888888888;
            mikephie.result.nickname = "Mikephie";
            mikephie.result.vipGroupInfos = [{
                groupType: "TYPE_ONE",
                vipType: "VIP",
                autoPay: "YES"
            }];
        }

        if (!mikephie.data) mikephie.data = {};
        mikephie.data.isEligible = true;
        mikephie.data.isSubscribing = true;
        mikephie.data.productId = "subscription_year";
        mikephie.data.expireTime = "3742762088000";
        mikephie.data.isYearlyConversion = true;
    }

    // 添加通知功能
    try {
        let appType = "";
        let appName = "";
        
        if ($request.url.includes("rhinoxlab")) {
            appType = "rhinoxlab";
            appName = "✨作业批改✨";
        } 
        else if ($request.url.includes("rhinoxky")) {
            appType = "rhinoxky";
            appName = "✨错题打印机✨";
        }
        else if ($request.url.includes("baomingding")) {
            appType = "baomingding";
            appName = "✨试卷扫描✨";
        }
        else {
            appType = "unknown";
            appName = "✨学习工具✨";
        }

        const notifyConfig = {
            appName: appName,
            notifyKey: `scan_app_${appType}_0428_v5`,
            author: "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ",
            message: "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽"
        };
        
        const cooldownMinutes = 10; 
        const cooldownMs = cooldownMinutes * 60 * 1000;
        
        const now = Date.now();
        let lastNotifyTime = 0;
        
        try {
            const storedTime = $persistentStore.read(notifyConfig.notifyKey);
            if (storedTime) {
                lastNotifyTime = parseInt(storedTime);
                if (isNaN(lastNotifyTime)) lastNotifyTime = 0;
            }
        } catch (e) {
            lastNotifyTime = 0;
        }
        
        if (now - lastNotifyTime > cooldownMs) {
            if (typeof $notification !== 'undefined') {
                $notification.post(notifyConfig.appName, notifyConfig.author, notifyConfig.message);
            } else if (typeof $notify !== 'undefined') {
                $notify(notifyConfig.appName, notifyConfig.author, notifyConfig.message);
            }
            $persistentStore.write(now.toString(), notifyConfig.notifyKey);
        }
    } catch (e) {
        // 通知功能出错不影响主要功能
    }

    $done({ body: JSON.stringify(mikephie) });
} catch (e) {
    $done({ body: $response.body });
}
// 主脚本函数...