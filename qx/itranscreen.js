/*

📜 iTranscreen 解锁 VIP 脚本
📅 更新时间：2024年03月08日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/.+.(itranscreen|tencentcs).+\/(settings|api\/v1\/user\/quota\?user_id).*$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/iTranscreen.js

[mitm]
hostname = *.tencentcs.com,settings.itranscreen.com,api.itranscreen.com:8080

*/


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
  console.log("JSON 解析错误: " + error.message);
}

$done({ body: body });