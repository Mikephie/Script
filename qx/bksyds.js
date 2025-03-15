/*
📜 ✨ 边框水印大师 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/photoby\.hasmash\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js

[Script] // Surge
边框水印大师 = type=http-response, pattern=^https:\/\/photoby\.hasmash\.com, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js, timeout=60

[Script] // Loon
http-response ^https:\/\/photoby\.hasmash\.com script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js, requires-body=true, timeout=60

[MITM]
hostname = photoby.hasmash.com

*/

// 主脚本函数...
let resp = JSON.parse($response.body || '{}');
resp.result = resp.result || {};
if ($request.url.includes("/auth/member")) {
    resp.result.memberExpire = 3742762088000;
} else if ($request.url.includes("/clickEvent")) {
    resp.result.isVip = 1;
    resp.result.vipTime = "2088-08-08 08:08:08";
} else if ($request.url.includes("/verify")) {
    resp.result.expire = 3742762088000;
}
// 主脚本函数...

    /********** 应用配置信息 **********/
    const appName = "✨边框水印大师✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10; 
    const cooldownMs = cooldownMinutes * 60 * 1000;
    
    const appSpecificKey = `${appName}_lastNotifyTime`;
    const now = Date.now();
    const lastNotifyTime = $persistentStore.read(appSpecificKey) || 0;
    
    if (now - lastNotifyTime > cooldownMs) {
        if (typeof $notification !== 'undefined') {
            $notification.post(appName, author, message);
        } else if (typeof $notify !== 'undefined') {
            $notify(appName, author, message);
        }
        $persistentStore.write(now.toString(), appSpecificKey);
    }

    $done({ body: JSON.stringify(body) });
} catch (e) {
    $done({ body: $response.body });
}