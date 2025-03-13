/*
📜 ✨ AdblockPRO ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/api\.adblockpro\.app\/verify url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js

[Script] // Surge
AdblockPRO = type=http-response, paAdblockPRO = type=http-response, pattern=^https:\/\/api\.adblockpro\.app\/verify, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js, timeout=60
>>>>>>>+main
=^https:AdblockPro = type=http-response, pattern=^https:\/\/api\.adblockpro\.app\/verify, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js, timeout=60
>>>>>>>+origin/main
adblockpro\.app\/verify script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js, requires-body=true, timeout=60

[MITM]
hostname = api.adblockpro.app

/********** 会话通知模块 **********/
function sNotify(a,b,c,d=60000){const e=`${a.replace(/[^a-zA-Z]/g,'').toLowerCase()}_session`;const f=typeof $prefs!=='undefined';const g=typeof $persistentStore!=='undefined'&&typeof $notify!=='undefined';const h=typeof $persistentStore!=='undefined'&&typeof $notification!=='undefined';const i=f?$prefs:$persistentStore;const j=f?$notification:(g?$notify:$notification);if(!i||!j)return false;try{const k=f?i.valueForKey(e):i.read(e);const l=Date.now();if(!k||(l-parseInt(k)>d)){j.post(a,b,c);f?i.setValueForKey(l.toString(),e):i.write(l.toString(),e);return true;}}catch(m){console.log(`[${a}] 错误: ${m}`);}return false;}

/********** 应用配置信息 **********/
const appName = "✨AdblockPRO✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 ⓿❽-⓿❽-❷⓿❽❽";

<<<<<<< main
// 主脚本函数...
/********** 通用响应体修改模板 **********/

let body = $response.body;
let data;

try {
  data = JSON.parse(body); // 尝试解析 JSON
} catch (e) {
  console.log("响应体不是 JSON:", e);
}

// 修改逻辑
if (data && typeof data === 'object') {
  // 解锁相关字段
  data.p = 1; // Premium status
  data.s = 1; // Subscription status
  data.l = 1; // License flag

  if (data.hasOwnProperty('v')) {
    data.v = true; // 保持 v 为 true
  }
// 主脚本函数...
// 解析 $response.body 并确保安全访问
let body = typeof $response !== 'undefined' && $response.body ? JSON.parse($response.body) : {};
let data = typeof data !== 'undefined' ? data : null;

// 解锁会员逻辑
if (body && typeof body === 'object') {
    body.p = 1;  // Premium status
    body.s = 1;  // Subscription status
    body.l = 1;  // License flag
    if (body.hasOwnProperty('v')) {
        body.v = true;  // 保留 v 为 true
    }
}

// 发送通知
sNotify(appName, author, message, 10 * 60 * 1000);
  // 返回修改后的 JSON
  $done({ body: JSON.stringify(data) });
} else {
  // 不是 JSON，按原样返回
  $done({ body });

// 根据条件选择返回方式
if (body && data && typeof body === 'object' && typeof data === 'object') {
    $done({ body: JSON.stringify(body), data: JSON.stringify(data) });
} else if (body && typeof body === 'object') {
    $done({ body: JSON.stringify(body), data: data || '' });
} else if (data && typeof data === 'object') {
    $done({ body: body || '', data: JSON.stringify(data) });
} else {
    $done({ body: body || '', data: data || '' });
}