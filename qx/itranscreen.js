/*
#!name= ✨ iTranscreen ✨
#!desc=效率
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/itranscreen.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local] // Quantumult X
^https?:\/\/.+.(itranscreen|tencentcs).+\/(settings|api\/v1\/user\/quota\?user_id).*$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/itranscreen.js

[MITM]
hostname = .+.(itranscreen|tencentcs).+

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "iTranscreen_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨iTranscreen✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ❷❾-❾❾-❷❾❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

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

  $done({ body });
} catch (e) {
  $done({ body: $response.body });
}
// 主脚本函数...