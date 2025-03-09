/*

📜 ✨ Filmix PRO+ ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[Script]
filmix_vip = type=http-response, pattern=^https:\/\/appv3\.filmix\.com\.cn\/api\/v1\/user\/user, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/filmix.js, timeout=60

[MITM]
hostname = appv3.filmix.com.cn

*/

const appName = "✨Filmix PRO+✨";
const Author  = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const expire  = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";
const notifyEnabled = true;

let body = $response.body;
let data = JSON.parse(body);
data.vip_level = 5;
data.is_vip = true;
data.vip_end_time = "2088-08-08T08:08:08Z";
body = JSON.stringify(data);

if (notifyEnabled && $notification?.post) {
    $notification.post(`${appName}`, `${Author}`, `${expire}`);
}

$done({ body });