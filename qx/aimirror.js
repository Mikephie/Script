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

/********** 会话通知模块 **********/
function sNotify(a,b,c,d=60000){const e=`${a.replace(/[^a-zA-Z]/g,'').toLowerCase()}_session`;const f=typeof $prefs!=='undefined';const g=typeof $persistentStore!=='undefined'&&typeof $notify!=='undefined';const h=typeof $persistentStore!=='undefined'&&typeof $notification!=='undefined';const i=f?$prefs:$persistentStore;const j=f?$notification:(g?$notify:$notification);if(!i||!j)return false;try{const k=f?i.valueForKey(e):i.read(e);const l=Date.now();if(!k||(l-parseInt(k)>d)){j.post(a,b,c);f?i.setValueForKey(l.toString(),e):i.write(l.toString(),e);return true;}}catch(m){console.log(`[${a}] 错误: ${m}`);}return false;}

/********** 应用配置信息 **********/
const appName = "✨AIMirror✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

// 主脚本函数...
// 主脚本函数...

sNotify(appName, author, message, 10 * 60 * 1000);
if (typeof body === 'object') {
    $done({ body: JSON.stringify(body) });
} else {
    $done({ body });
}
