/*
📜 ✨ 边框水印大师 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/photoby\.hasmash\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js

[Script] // Surge
photoby_vip = type=http-response, pattern=^https:\/\/photoby\.hasmash\.com, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js, timeout=60

[Script] // Loon
http-response ^https:\/\/photoby\.hasmash\.com script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js, requires-body=true, timeout=60

[MITM]
hostname = photoby.hasmash.com

*/

/********** 会话通知模块 **********/
function sNotify(a,b,c,d=60000){const e=`${a.replace(/[^a-zA-Z]/g,'').toLowerCase()}_session`;const f=typeof $prefs!=='undefined';const g=typeof $persistentStore!=='undefined'&&typeof $notify!=='undefined';const h=typeof $persistentStore!=='undefined'&&typeof $notification!=='undefined';const i=f?$prefs:$persistentStore;const j=f?$notification:(g?$notify:$notification);if(!i||!j)return false;try{const k=f?i.valueForKey(e):i.read(e);const l=Date.now();if(!k||(l-parseInt(k)>d)){j.post(a,b,c);f?i.setValueForKey(l.toString(),e):i.write(l.toString(),e);return true;}}catch(m){console.log(`[${a}] 错误: ${m}`);}return false;}

/********** 应用配置信息 **********/
const appName = "✨边框水印大师✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

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

sNotify(appName, author, message, 10 * 60 * 1000);
$done({ body: JSON.stringify(data) });