/*
#!name= ✨ 菜谱大全/烘焙小屋/香哈菜谱 ✨
#!desc=效率
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/caipu.js
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/api.*\.xiangha\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/caipu.js

[MITM]
hostname = *.xiangha.com

*/

// 主脚本函数...
var body = $response.body;
var obj = JSON.parse(body);
const xiangha = '/user/info';
const caipu = '/apiios_dq.xiangha.com';
const info = 'xiangha.com';
const home = '/home/getUser';

// 定义一个常量头像URL
const avatarUrl = "https://i.ibb.co/wM5z10N/IMG-1287.jpg";

// 处理用户信息
if ($request.url.indexOf(xiangha) != -1) {
  obj.data.nickName = "MIKEPHIE";
  obj.data.sex = "1";
  obj.data.img = avatarUrl;  // 添加头像
  obj.data.vipInfo = {
    "isVip": "2",
    "url": "xiangha://welcome?VipWebView.app?url=https://appweb.xiangha.com/vip/myvip?payset=2&fullScreen=2&vipFrom=个人主页",
    "vipState": "2"
  };
  obj.data.isGourmet = "2";
  obj.data.isFollow = "2";
  // 添加注册日期
  if (obj.data.hasOwnProperty("reg_date")) {
    obj.data.reg_date = "2024-04-24";
  }
  body = JSON.stringify(obj);
}

// 处理菜谱相关数据
if ($request.url.indexOf(caipu) != -1) {
  body = body.replace(/\"status":\w+/g, '\"status":true');
  body = body.replace(/\"is_open_vip":\d+/g, '\"is_open_vip":1');
  body = body.replace(/\"is_vip":\d+/g, '\"is_vip":2');
  body = body.replace(/\"isCollection":\d+/g, '\"isCollection":1');
  body = body.replace(/\"sex":"\d+"/g, '\"sex":"1"');
  body = body.replace(/\"reg_date":".*?"/g, '\"reg_date":"2024-04-24"');
  body = body.replace(/\"nickName":".*?"/g, '\"nickName":"MIKEPHIE"');
  body = body.replace(/\"headPortraitPath":".*?"/g, `\"headPortraitPath":"${avatarUrl}"`);
}

// 处理其他信息
if ($request.url.indexOf(info) != -1) {
  body = body.replace(/\"isShow":"\d+"/g, '\"isShow":"2"');
  body = body.replace(/\"isVideo":"\d+"/g, '\"isVideo":"2"');
  body = body.replace(/\"isVip":"\d+"/g, '\"isVip":"2"');
  // 尝试添加头像和注册日期
  try {
    let jsonObj = JSON.parse(body);
    if (jsonObj.data && typeof jsonObj.data === 'object') {
      jsonObj.data.img = avatarUrl;
      // 检查是否有data.data结构
      if (jsonObj.data.data && typeof jsonObj.data.data === 'object') {
        jsonObj.data.data.reg_date = "2024-04-24";
      }
      body = JSON.stringify(jsonObj);
    }
  } catch (e) {
    // 忽略解析错误，保持原始替换
  }
}

// 处理首页用户数据
if ($request.url.indexOf(home) != -1) {
  obj.data.nickName = "MIKEPHIE";
  obj.data.img = avatarUrl;  // 添加头像
  // 添加注册日期
  if (obj.data.hasOwnProperty("reg_date")) {
    obj.data.reg_date = "2024-04-24";
  }
  obj.data.vip = {
    "first_time": "2024-04-24", // 也更新这里为相同日期
    "expired_day": "2",
    "subTitle": "",
    "isVip": 2,
    "vipState": "2",
    "maturity_time": "2088-08-08",
    "color": "#866100",
    "level": "2",
    "title": "VIP会员",
    "titleColor": "#866100",
    "last_time": "2024-04-24", // 也更新这里为相同日期
    "text": "2088-08-08到期",
    "subTitleColor": "",
    "xiangdou": 1,
    "maturity_day": "1"
  };
  body = JSON.stringify(obj);
}

// 直接检查当前响应体是否有特定结构，更新注册日期
try {
  let jsonObj = JSON.parse(body);
  if (jsonObj.data && jsonObj.data.data && jsonObj.data.data.reg_date) {
    jsonObj.data.data.reg_date = "2024-04-24";
    body = JSON.stringify(jsonObj);
  }
} catch (e) {
  // 忽略解析错误
}

// 添加通知功能，使用完全独立的判断逻辑
try {
  // 获取完整的URL
  const fullUrl = $request.url;
  
  // 基于特定路径来判断应用类型
  let appType = "";
  
  // 烘焙小屋特定路径
  if (fullUrl.includes("/v4/User/getUserData")) {
    appType = "hongbei";
  } 
  // 菜谱大全特定路径
  else if (fullUrl.includes("/v4/user/getVipLevel")) {
    appType = "caipu";
  }
  // 通用香哈菜谱判断
  else if (fullUrl.includes("apiios.xiangha.com") || fullUrl.includes("api.xiangha.com")) {
    appType = "xiangha";
  }
  // 默认判断
  else if (fullUrl.includes("apiios_h")) {
    appType = "hongbei";
  }
  else if (fullUrl.includes("apiios_dq")) {
    appType = "caipu";
  }
  
  // 根据应用类型设置通知配置
  let notifyConfig = {};
  
  if (appType === "caipu") {
    notifyConfig = {
      appName: "✨菜谱大全✨",
      notifyKey: "caipu_daquan_app_key_0424",
      author: "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ",
      message: "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽"
    };
  } 
  else if (appType === "hongbei") {
    notifyConfig = {
      appName: "✨烘焙小屋✨",
      notifyKey: "hongbei_xiaowu_app_key_0424",
      author: "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ",
      message: "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽"
    };
  }
  else if (appType === "xiangha") {
    notifyConfig = {
      appName: "✨香哈菜谱✨", 
      notifyKey: "xiangha_caipu_app_key_0424",
      author: "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ",
      message: "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽"
    };
  }
  else {
    // 默认配置
    notifyConfig = {
      appName: "✨菜谱应用✨",
      notifyKey: "recipe_app_key_0424", 
      author: "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ",
      message: "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽"
    };
  }
  
  // 如果识别出应用类型
  if (appType) {
    // 通知间隔设置为60分钟
    const cooldownMinutes = 10; 
    const cooldownMs = cooldownMinutes * 60 * 1000;
    
    const now = Date.now();
    let lastNotifyTime = 0;
    
    try {
      const storedTime = $persistentStore.read(notifyConfig.notifyKey);
      if (storedTime) {
        lastNotifyTime = parseInt(storedTime);
        if (isNaN(lastNotifyTime)) lastNotifyTime = 0;
      }
    } catch (e) {
      lastNotifyTime = 0;
    }
    
    if (now - lastNotifyTime > cooldownMs) {
      if (typeof $notification !== 'undefined') {
        $notification.post(notifyConfig.appName, notifyConfig.author, notifyConfig.message);
      } else if (typeof $notify !== 'undefined') {
        $notify(notifyConfig.appName, notifyConfig.author, notifyConfig.message);
      }
      $persistentStore.write(now.toString(), notifyConfig.notifyKey);
    }
  }
} catch (e) {
  // 通知功能出错不影响主要功能
}

$done({body});