/*
📜 ✨ iTranscreen ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https?:\/\/.+.(itranscreen|tencentcs).+\/(settings|api\/v1\/user\/quota\?user_id).*$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/itranscreen.js

[Script] // Surge
iTranscreen = type=http-response, pattern=^https?:\/\/.+.(itranscreen|tencentcs).+\/(settings|api\/v1\/user\/quota\?user_id).*$, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/itranscreen.js, timeout=60

[Script] // Loon
http-response ^https?:\/\/.+.(itranscreen|tencentcs).+\/(settings|api\/v1\/user\/quota\?user_id).*$ script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/itranscreen.js, requires-body=true, timeout=60

[MITM]
hostname = .+.(itranscreen|tencentcs).+

*/

// 主脚本函数...
try {
  var body = $response.body;
  var url = $request.url;

  const USER_QUOTA_PATH = "/api/v1/user/quota?user_id";
  const SETTINGS_PATH = "/settings.itranscreen.com/settings.json";

  var jsonData;

  try {
    jsonData = JSON.parse(body);

    if (url.indexOf(USER_QUOTA_PATH) !== -1) {
      jsonData.data.coins = 999880;
      jsonData.data.gift = 999880;
      jsonData.data.subscribed = 1;
      jsonData.status_code = 0;
      body = JSON.stringify(jsonData);
    }

    if (url.indexOf(SETTINGS_PATH) !== -1) {
      jsonData.cost.token.zhipu = "免费99";
      jsonData.cost.request.baidu_pic = "免费999";
      jsonData.cost.request.youdao_pic = "免费999";
      jsonData.cost.char.google = "免费999";
      jsonData.cost.char.baidu = "免费999";
      body = JSON.stringify(jsonData);
    }
  } catch (error) {
    // JSON 解析错误，静默处理
  }
// 主脚本函数...

  /********** 应用配置信息 **********/
  const appName = "✨iTranscreen✨";
  const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
  const message = "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽";
  
  const cooldownMinutes = 10;
  const cooldownMs = cooldownMinutes * 60 * 1000;
  const notifyKey = "itranscreen_notify_key_v1";
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

  $done({ body });
} catch (e) {
  $done({ body: $response.body });
}