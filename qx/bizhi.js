/*
📜 ✨ Bizhi壁纸 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/leancloud\.emotionwp\.com\.+\/(classes|batch\/save) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js

[Script] // Surge
leancloud_vip = type=http-response, pattern=^https:\/\/leancloud\.emotionwp\.com\.+\/(classes|batch\/save), requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js, timeout=60

[Script] // Loon
http-response ^https:\/\/leancloud\.emotionwp\.com\.+\/(classes|batch\/save) script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js, requires-body=true, timeout=60

[MITM]
hostname = leancloud.emotionwp.com

*/

/********** 主逻辑：解锁VIP **********/
const appName = "✨Bizhi壁纸✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

// 主逻辑：解锁 VIP
var data = JSON.parse($response.body);
const user = /classes\/wpf_account/;
const xiazai = /classes/;
const save = /batch\/save/;

if(user.test($request.url)){
  data.results = [{
      "updatedAt" : "2024-11-11T11:11:11Z",
      "vipEndTime" : 3742762088,
      "vipEndTimeFormat" : "2088-08-08",
      "sex" : "1",
      "isSVIP" : 1,
      "isVIP" : 1,
      "userId" : "A88888888_B8888888888888-C88",
      "loginType" : 1,
      "nickName" : "Mikephie",
      "headImageUrl" : "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
      "objectId" : "888888888888888888888888",
      "createdAt" : "2024-11-11T11:11:11Z",
      "svipEndTime" : 3742762088,
      "svipEndTimeFormat" : "2088-08-08",
      "coin" : 88888888
  }];
}

if(xiazai.test($request.url)){
  data.results.forEach(item => {
    if ('needVIP' in item && 'needSVIP' in item && 'needCoin' in item && 'score' in item) {
      item.score = 88888888;
      item.needVIP = 0;
      item.needSVIP = 0;
      item.needCoin = 0;
    }
  });
}

if(save.test($request.url)){
  data = {
  "888888888888888888888888" : {
    "updatedAt" : "2024-11-11T11:11:11Z",
    "objectId" : "888888888888888888888888"
  },
  "code" : 1
  }
}

// 发送会话通知（会话时长设为10分钟）
sessionNotify(appName, author, message, 10 * 60 * 1000);

/*
📱 精简版会话通知模块 📱
*/

function sessionNotify(appName, author, message, timeout = 1 * 60 * 1000) {
    // 动态生成存储键名（从应用名提取字母作为前缀）
    const keyPrefix = appName.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const storeKey = `${keyPrefix}_session_key`;
    
    // 环境判断
    const isQuanX = typeof $prefs !== 'undefined';
    const isSurge = typeof $persistentStore !== 'undefined' && typeof $notify !== 'undefined';
    const isLoon = typeof $persistentStore !== 'undefined' && typeof $notification !== 'undefined';
    
    // 获取存储和通知实例
    const store = isQuanX ? $prefs : (isSurge || isLoon ? $persistentStore : null);
    const notify = isQuanX || isLoon ? $notification : (isSurge ? $notify : null);
    
    if (!store || !notify) return false;
    
    // 读取上次会话时间
    let lastTime;
    try {
        lastTime = isQuanX ? 
            store.valueForKey(storeKey) : 
            store.read(storeKey);
    } catch (e) {
        console.log(`[${appName}] 读取会话时间失败`);
    }
    
    const currentTime = Date.now();
    const isNewSession = !lastTime || (currentTime - parseInt(lastTime) > timeout);
    
    // 如果是新会话，发送通知并更新时间
    if (isNewSession) {
        try {
            notify.post(appName, author, message);
            isQuanX ? 
                store.setValueForKey(currentTime.toString(), storeKey) : 
                store.write(currentTime.toString(), storeKey);
            console.log(`[${appName}] 新会话通知已发送，键名: ${storeKey}`);
        } catch (e) {
            console.log(`[${appName}] 发送通知失败`);
        }
    } else {
        console.log(`[${appName}] 同一会话内，跳过通知，键名: ${storeKey}`);
    }
    
    return isNewSession;
}

$done({body : JSON.stringify(mikephie)});