/*
📜 ✨ AdblockPRO ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/api\.adblockpro\.app\/verify url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js

[Script] // Surge
api_vip = type=http-response, pattern=^https:\/\/api\.adblockpro\.app\/verify, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js, timeout=60

[Script] // Loon
http-response ^https:\/\/api\.adblockpro\.app\/verify script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js, requires-body=true, timeout=60

[MITM]
hostname = api.adblockpro.app

/********** 会话通知模块 **********/
function sNotify(a,b,c,d=60000){const e=`${a.replace(/[^a-zA-Z]/g,'').toLowerCase()}_session`;const f=typeof $prefs!=='undefined';const g=typeof $persistentStore!=='undefined'&&typeof $notify!=='undefined';const h=typeof $persistentStore!=='undefined'&&typeof $notification!=='undefined';const i=f?$prefs:$persistentStore;const j=f?$notification:(g?$notify:$notification);if(!i||!j)return false;try{const k=f?i.valueForKey(e):i.read(e);const l=Date.now();if(!k||(l-parseInt(k)>d)){j.post(a,b,c);f?i.setValueForKey(l.toString(),e):i.write(l.toString(),e);return true;}}catch(m){console.log(`[${a}] 错误: ${m}`);}return false;}

/********** 固定模版信息 **********/
let body = $response.body;
let data;

try {
  data = JSON.parse(body);
} catch (e) {
  console.log("响应体不是 JSON，按原样返回:", e);
  $done({ body });
  return;
}

// 主脚本函数...
if (data && typeof data === 'object') {
  data.p = 1; // Premium status
  data.s = 1; // Subscription status
  data.l = 1; // License flag

  if (data.hasOwnProperty('v')) {
    data.v = true; // 保持 v 为 true
  }
}
// 主脚本函数...

/********** 应用配置信息 **********/
const appName = "✨{APP_NAME}✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 ⓿❽-⓿❽-❷⓿❽❽";

sNotify(appName, author, message, 10 * 60 * 1000);
$done({ body: JSON.stringify(data) });
} else {
  $done({ body });
}