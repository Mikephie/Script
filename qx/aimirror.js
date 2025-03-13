/*
📜 ✨ AIMirror ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/be\.aimirror\.fun\/.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js

[Script] // Surge
AIMirror = type=http-response, pattern=^https:\/\/be\.aimirror\.fun\/.*, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js, timeout=60

[Script] // Loon
http-response ^https:\/\/be\.aimirror\.fun\/.* script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js, requires-body=true, timeout=60

[MITM]
hostname = be.aimirror.fun

*/

// 主脚本函数...
try {
    if (url.includes("query_is_vip")) {
        if (body === 'false') {
            body = 'true';
        } else {
            try {
                let data = JSON.parse(body);
                if (data.hasOwnProperty("is_vip")) data.is_vip = true;
                if (data.hasOwnProperty("vip")) data.vip = true;
                body = JSON.stringify(data);
            } catch (e) {
                body = body.replace(/false/g, 'true');
            }
        }
    } else if (url.includes("draw")) {
        body = body.replace(/"is_vip"\s*:\s*false/gi, '"is_vip":true');
        body = body.replace(/"vip"\s*:\s*false/gi, '"vip":true');
    } else if (url.includes("video_render_count")) {
        if (body !== '0') {
            try {
                let data = JSON.parse(body);
                if (typeof data === 'number') {
                    data = 999;
                    body = JSON.stringify(data);
                }
            } catch (e) {
                if (!isNaN(body) && parseInt(body) > 0) {
                    body = '999';
                }
            }
        }
    } else if (url.includes("consumable_quota")) {
        body = body.replace(/"has_quota"\s*:\s*false/gi, '"has_quota":true');
        body = body.replace(/"quota"\s*:\s*0/g, '"quota":999');
    } else if (url.includes("discount")) {
        body = body.replace(/"discount"\s*:\s*false/gi, '"discount":true');
    } else {
        try {
            let data = JSON.parse(body);
            if (typeof data === 'object' && data !== null) {
                const vipKeys = ['is_vip', 'vip', 'isVip', 'premium', 'isPremium'];
                vipKeys.forEach(key => {
                    if (data.hasOwnProperty(key) && data[key] === false) {
                        data[key] = true;
                    }
                });
                body = JSON.stringify(data);
            }
        } catch (e) {
            // 不做修改
        }
    }
// 主脚本函数...

/********** 应用配置信息 **********/
const appName = "✨AIMirror✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
const cooldown = 10 * 60 * 1000; // 1分钟冷却时间
const notifyKey = "lastNotifyTime";
const now = Date.now();
const lastNotifyTime = $persistentStore.read(notifyKey) || 0;
if (now - lastNotifyTime > cooldown) {
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