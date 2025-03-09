/*
📜 ✨ 边框水印大师 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https?:\/\/photoby\.hasmash\.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js

[MITM]
hostname = photoby.hasmash.com
*/

const appName = "✨边框水印大师✨";
const Author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const expire = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";
const notifyEnabled = true;

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

if (notifyEnabled && typeof $notification?.post === 'function') {
    $notification.post(appName, Author, expire);
}

$done({ body: JSON.stringify(resp) });