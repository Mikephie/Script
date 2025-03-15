/*
📜 ✨ 婚贝请柬 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/h5\.hunbei\.com\/m\/member\/getUserInfo\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbqj.js

[Script] // Surge
婚贝请柬 = type=http-response, pattern=^https:\/\/h5\.hunbei\.com\/m\/member\/getUserInfo\?, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbqj.js, timeout=60

[Script] // Loon
http-response ^https:\/\/h5\.hunbei\.com\/m\/member\/getUserInfo\? script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbqj.js, requires-body=true, timeout=60

[MITM]
hostname = h5.hunbei.com

*/

// 主脚本函数...
try {
    var body = JSON.parse($response.body);

    body.data = {
      ...body.data,
      "vipState": true,
      "end_time": 3742762088,
      "allLifeVip": true,
      "status": 2,
      "level": 2,
      "wx_name": "Mikephie",
      "headimg": "https://i.ibb.co/wM5z10N/IMG-1287.jpg"
    };
// 主脚本函数...

    /********** 应用配置信息 **********/
    const appName = "✨婚贝请柬✨";
    const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
    const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
    
    const cooldownMinutes = 10;
    const cooldownMs = cooldownMinutes * 60 * 1000;
    const notifyKey = "hunbei_invitation_notify_key_v1"; // 使用英文键名，避免潜在问题
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

    $done({ body: JSON.stringify(body) });
} catch (e) {
    $done({ body: $response.body });
}