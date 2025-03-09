/*
📜 ✨ Bizhi壁纸 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/leancloud\.emotionwp\.com\/1\.1\/classes\/wpf_account? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js

[Script] // Surge
leancloud_vip = type=http-response, pattern=^https:\/\/leancloud\.emotionwp\.com\/1\.1\/classes\/wpf_account?, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js, timeout=60

[Script] // Loon
http-response ^https:\/\/leancloud\.emotionwp\.com\/1\.1\/classes\/wpf_account? script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js, requires-body=true, timeout=60

[MITM]
hostname = leancloud.emotionwp.com

*/

/********** 主逻辑：解锁VIP **********/
const appName = "✨Bizhi壁纸✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

// 解析响应体
let body = $response.body;
let data = JSON.parse(body);

// 解锁 VIP
data.results = data.results.map(user => {
  return Object.assign(user, {
    isVIP: 1,
    isSVIP: 1,
    vipEndTime: 3742762088,
    svipEndTime: 3742762088,
    vipEndTimeFormat: "2088-08-08",
    svipEndTimeFormat: "2088-08-08",
    coin: 88888888,
    email: "888@gmail.com",
    nickName: "Mikephie",
    headImageUrl: "https://i.ibb.co/wM5z10N/IMG-1287.jpg"
  });
});

// 会话通知
sessionNotify(appName, author, message, 10 * 60 * 1000);

/********** 会话通知模块 **********/
function sessionNotify(appName, author, message, timeout = 1 * 60 * 1000) {
  const keyPrefix = appName.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const storeKey = `${keyPrefix}_session_key`;

  const isQuanX = typeof $prefs !== 'undefined';
  const isSurge = typeof $persistentStore !== 'undefined' && typeof $notify !== 'undefined';
  const isLoon = typeof $persistentStore !== 'undefined' && typeof $notification !== 'undefined';

  const store = isQuanX ? $prefs : (isSurge || isLoon ? $persistentStore : null);
  const notify = isQuanX || isLoon ? $notification : (isSurge ? $notify : null);

  if (!store || !notify) return false;

  let lastTime = store[isQuanX ? 'valueForKey' : 'read'](storeKey);
  const currentTime = Date.now();
  const isNewSession = !lastTime || (currentTime - parseInt(lastTime) > timeout);

  if (isNewSession) {
    notify.post(appName, author, message);
    store[isQuanX ? 'setValueForKey' : 'write'](currentTime.toString(), storeKey);
    console.log(`[${appName}] 新会话通知已发送，键名: ${storeKey}`);
  } else {
    console.log(`[${appName}] 同一会话内，跳过通知，键名: ${storeKey}`);
  }

  return isNewSession;
}

$done({ body: JSON.stringify(data) });