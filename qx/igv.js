/*
#!name= ✨ iGV ✨
#!desc=电影院购票
#!category=🚫广告
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/igv.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
# Ad Image Blocking - Intercept and reject ad images
^https:\/\/media\.gv\.com\.sg\/cms\/images\/ads\/.*\.(jpg|png|gif) url reject-img

# Script - Auto-click "Skip Ad" button on ad page
^https:\/\/m\.gv\.com\.sg\/iGV2\/general\/advpage\.html url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/igv.js

# Script - Auto-click "Guest" button on login page
^https:\/\/m\.gv\.com\.sg\/iGV2\/general\/login\.html url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/igv.js

[MITM]
hostname = m.gv.com.sg, media.gv.com.sg

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "iGV_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨iGV✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ❷❾-❾❾-❷❾❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
let body = $response.body;

const autoActions = `
<script>
(function() {
  function clickElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = 'block'; // 强制可见
      element.style.opacity = '1';     // 取消透明度
      element.style.pointerEvents = 'auto'; // 确保可点击
      element.click();
      console.log('点击成功:', selector);
      return true;
    }
    console.log('未找到:', selector);
    return false;
  }

  function submitForm(formId) {
    const form = document.getElementById(formId) || document.forms[formId];
    if (form) {
      form.submit();
      console.log('表单提交成功:', formId);
      return true;
    }
    console.log('表单未找到:', formId);
    return false;
  }

  function autoSkipAndClose() {
    let attempts = 0;
    function tryAction() {
      let skipSuccess = clickElement('.skipBtn');
      let closeSuccess = clickElement('.whatsnew_close') || submitForm('formWhatsNewClose');
      
      // 自动点击 guest 按钮
      let guestSuccess = false;
      const guestBtn = document.querySelector('[ng-click="onAsGuest()"]');
      if (guestBtn) {
        guestBtn.click();
        console.log('点击成功: Guest按钮');
        guestSuccess = true;
      }

      if (!(skipSuccess || closeSuccess || guestSuccess)) {
        attempts++;
        if (attempts < 20) {
          setTimeout(tryAction, 500); // 每500ms尝试一次，直到成功或达到最大次数
        } else {
          console.log('多次尝试仍未成功，停止执行。');
        }
      }
    }
    tryAction();
  }

  // 页面加载 & DOM 变化时执行
  window.addEventListener('load', function() {
    console.log('页面加载完成，开始自动操作');
    setTimeout(autoSkipAndClose, 1000); // 页面加载后等待1秒再执行
  });
  
  // 监听DOM变化
  new MutationObserver(function(mutations) {
    console.log('DOM发生变化，尝试自动操作');
    autoSkipAndClose();
  }).observe(document.body, { childList: true, subtree: true });
})();
</script>
`;

if (body.includes('</body>')) {
  body = body.replace('</body>', autoActions + '</body>');
} else {
  body += autoActions;
}

$done({ body });
// 主脚本函数...