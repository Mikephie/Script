/*
#!name= ✨ AXS Payment ✨
#!desc=缴费账单
#!category=🚫广告
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/axs.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[filter_local]
url-regex,^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/WebView\/MarketPlace,reject
url-regex,^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/highlight,reject

[rewrite_local]
^https?:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage\/.*$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/axs.js

[mitm]
hostname = m-station2.axs.com.sg

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "AXS_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨AXS✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
// 广告关闭专用脚本
let url = $request.url;

// 检测URL是否是广告页面
if (url.includes("/InfoPage/") && url.includes("whatsnew.php")) {
  // 创建一个只包含关闭按钮的页面
  const closeButtonPage = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: transparent;
    }
    .close-button {
      position: fixed;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      background-color: rgba(0,0,0,0.5);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 24px;
      line-height: 1;
      text-decoration: none;
      z-index: 9999;
    }
  </style>
</head>
<body>
  <form id="formWhatsNewClose" name="formWhatsNewClose" action="closebutton://" method="POST"></form>
  <a href="javascript:document.formWhatsNewClose.submit();" class="close-button">×</a>
  <script>
    // 3秒后自动关闭
    setTimeout(() => {
      document.formWhatsNewClose.submit();
    }, 3000);
  </script>
</body>
</html>`;
  
  $done({
    response: {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "no-store"
      },
      body: closeButtonPage
    }
  });
} else {
  $done({});
}
// 主脚本函数...