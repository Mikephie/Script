/*

📜 爱看书 解锁 VIP 脚本
📅 更新时间：2024年08月15日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^http:\/\/.+\/(ios\/regOrLogin|getTotalCoin) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aks.js

[mitm]
hostname = 

*/


// Clean version with jsjiami code removed
var responseBody = $response.body;
var requestUrl = $request.url;
var jsonData = JSON.parse(responseBody);

// URL endpoints to check
const loginEndpoint = "/ios/regOrLogin";
const coinEndpoint = "/api/user-coin/getTotalCoin";

// Modify the response data if URL matches login endpoint
if (requestUrl.indexOf(loginEndpoint) != -1) {
  jsonData.data.isVip = 1;  // Set VIP status to true
  jsonData.data.user.nick_name = "MIKEPHIE";  // Change nickname
  responseBody = JSON.stringify(jsonData);
}

// Modify the response data if URL matches coin endpoint
if (requestUrl.indexOf(coinEndpoint) != -1) {
  jsonData.data.aboutRmb = 999880;  // Set currency amount
  jsonData.data.totalCoin = 999880;  // Set coin amount
  responseBody = JSON.stringify(jsonData);
}

// Return the modified response
$done({
  body: responseBody
});