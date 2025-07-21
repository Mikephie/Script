/*
#!name= ✨ 咪咕音乐 ✨
#!desc=影视编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/filmix.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
# > 去广告
^https://app\.c\.nf.migu\.cn/strategy/listen-url/v2.5 url 302 https://app.c.nf.migu.cn/strategy/listen-url/v2.4
^https://app\.c\.nf\.migu\.cn/member/api/marketing/text url reject
^https://app\.c.nf\.migu\.cn/payment/watch-ad url reject-200

# > 咪咕音乐vip、音质
^https?:\/\/(u|c|app).(musicapp|(c|u).nf).migu.cn.+(user\/api|column\/startup|resource\/skin) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/migumusic.js
^https?:\/\/app.(c|pd).nf.migu.cn\/.*\/(listen-url|music\/batchQueryMusicPolicy|download-url).*$ url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/migumusic.js

[mitm] 
hostname = *.migu.cn

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "MiguMusic_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨MiguMusic✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
if ($request?.url?.includes("/strategy/listen-url/")) {
  let headers = $request.headers;
  headers.uid = "91414537623";
  headers.Cookie = "";
  headers.ce = "";
  headers.bversionid = "";
  $done({ headers });
}

else if ($request?.url?.includes("/music/batchQueryMusicPolicy.do")) {
  let headers = $request.headers;
  headers.uid = "91414537623";
  headers.Cookie = "";
  headers.ce = "";
  headers.bversionid = "";
  $done({ headers });
}

else if ($request?.url?.includes("user/api/my-page-header/")) {
  try {
    let obj = JSON.parse($response.body);

    if (obj?.data?.userIdentityIconItems?.[0]) {
      obj.data.userIdentityIconItems[0].iconUrl = "https://d.musicapp.migu.cn/prod/file-service/file-down/bcb5ddaf77828caee4eddc172edaa105/7cd657454195aaeaea9e3c425491a0d0/74f77a7b9a47582a559762111ac8ba9b";
      obj.data.userIdentityIconItems[0].name = "白金会员畅听版";
      obj.data.userIdentityIconItems[0].type = "baijinhuiyuanchangtingban";
    }

    if (obj?.data) {
      obj.data.location = "https://t.me/GieGie777";
    }

    if (obj?.data?.userOpNums?.[5]) {
      obj.data.userOpNums[5].desc = "999999";
      obj.data.userOpNums[5].number = 999999;
    }

    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    $done({});
  }
}

else if ($request?.url?.includes("/column/startup-pic-with-ad")) {
  try {
    let obj = JSON.parse($response.body);
    delete obj.data;
    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    $done({});
  }
}

else if ($request?.url?.includes("resource/skin/list")) {
  try {
    let obj = JSON.parse($response.body);
    if (Array.isArray(obj?.data)) {
      obj.data.forEach(item => item.isVip = "0");
    }
    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    $done({});
  }
}

else {
  $done({});
}
// 主脚本函数...