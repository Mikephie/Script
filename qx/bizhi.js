/*

📜 Bizhi壁纸 解锁 VIP 脚本
📅 更新时间：2024年10月28日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# > 壁纸 - 精选高清墙纸图片和背景主题Vip&Svip
^https?:\/\/leancloud\.emotionwp\.com\/.+\/(classes|batch\/save) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js

[mitm] 
hostname = leancloud.emotionwp.com

*/


var mikephie = JSON.parse($response.body);
const user = /classes\/wpf_account/;
const xiazai = /classes/;
const save = /batch\/save/;

if(user.test($request.url)){
  mikephie.results = [{
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
  mikephie.results.forEach(item => {
    if ('needVIP' in item && 'needSVIP' in item && 'needCoin' in item && 'score' in item) {
      item.score = 88888888;
      item.needVIP = 0;
      item.needSVIP = 0;
      item.needCoin = 0;
    }
  });
}

if(save.test($request.url)){
  mikephie = {
  "888888888888888888888888" : {
    "updatedAt" : "2024-11-11T11:11:11Z",
    "objectId" : "888888888888888888888888"
  },
  "code" : 1
  }
}

$done({body : JSON.stringify(mikephie)});