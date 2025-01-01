/******************************************
 * @name 酷我音乐
 * @description 解锁会员皮肤、会员音频(最高无损)、听书权限, 配合其他去广告脚本达到最佳效果
 * @channel https://t.me/yqc_123
 * @feedback https://t.me/yqc_777
 * @version 1.0.3
******************************************
脚本声明:
1. 本脚本仅用于学习研究，禁止用于商业用途
2. 本脚本不保证准确性、可靠性、完整性和及时性
3. 任何个人或组织均可无需经过通知而自由使用
4. 作者对任何脚本问题概不负责，包括由此产生的任何损失
5. 如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明、所有权证明，我将在收到认证文件确认后删除
6. 请勿将本脚本用于商业用途，由此引起的问题与作者无关
7. 本脚本及其更新版权归作者所有
******************************************
hostname = *.kuwo.cn

^https?:\/\/(?:musicpay|nmobi|vip1|audiobookpay|tingshu)\.kuwo\.cn\/(?:music\.pay\?newver=\d+|mobi.s\?f=kwxs|vip\/(?:enc\/user\/vip\?op=ui&uid=|v2\/theme\?op=gd)|a\.p|v2\/api\/pay\/user\/info) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/kuwomod-2.js
******************************************/


const isSurge = typeof $httpClient !== "undefined";
const isQuanX = typeof $task !== "undefined";
const scriptName = "酷我音乐";

const logger = (message) => {
  console.log(`[${scriptName}] ${message}`);
};

// Platform-specific fetch and done methods
const fetch = (url, options, callback) => {
  if (isSurge) {
    if (options.method === "POST") {
      $httpClient.post(url, options, callback);
    } else {
      $httpClient.get(url, callback);
    }
  } else if (isQuanX) {
    options.method = options.method || "GET";
    $task.fetch({ url, ...options }).then(
      (response) => callback(null, response, response.body),
      (error) => callback(error, null, null)
    );
  }
};

const done = (response) => {
  if (isSurge) {
    $done(response);
  } else if (isQuanX) {
    $done(response);
  }
};

// Parse and modify response
function modifyResponse() {
  const url = $request.url;
  const body = $response.body;

  let obj;
  try {
    obj = JSON.parse(body);
  } catch (e) {
    logger(`Failed to parse response: ${e.message}`);
    return done({});
  }

  // Unlock membership and premium audio
  if (/music\.pay\?newver=\d+/.test(url)) {
    if (obj && obj.songs && obj.songs[0] && obj.songs[0].audio) {
      obj.songs[0].audio.forEach((audio) => {
        audio.st = 0; // Unlock audio
      });
    }
    logger("Unlocked audio content.");
  }

  // Unlock VIP user info
  if (/v2\/api\/pay\/user\/info/.test(url)) {
    obj.data.vipExpire = "4077187200315"; // Far future timestamp
    obj.data.vipType = 1; // Set user as VIP
    obj.data.growthValue = 9999;
    obj.data.vipTag = "VIP7";
    obj.data.isYearUser = "2"; // Yearly VIP user
    logger("VIP features unlocked.");
  }

  // Unlock VIP themes
  if (/v2\/theme\?op=gd/.test(url)) {
    if (obj.data.vipTheme) {
      obj.data.vipTheme.type = "free";
    }
    logger("Unlocked VIP themes.");
  }

  // Modify mobi.s endpoint
  if (/mobi\.s\?f=kwxs/.test(url)) {
    logger("Intercepted mobi.s request, no action required.");
  }

  // Handle audiobook-related endpoints
  if (/audiobookpay|tingshu/.test(url)) {
    if (obj.data && obj.data.child) {
      obj.data.child.forEach((item) => {
        if (item.type === "ad" || item.vip === false) {
          item.vip = true; // Mark all content as VIP-unlocked
          item.ad = false; // Remove ads
        }
      });
    }
    logger("Unlocked audiobook-related content.");
  }

  // General ad removal
  if (/advert/.test(url)) {
    if (obj.data && obj.data.ads) {
      obj.data.ads = []; // Remove all ads
    }
    logger("Removed advertisements.");
  }

  done({ body: JSON.stringify(obj) });
}

// Ensure the script works in Surge
if (isSurge || isQuanX) {
  modifyResponse();
} else {
  logger("This script is optimized for Surge and Quantumult X only.");
  done({});
}