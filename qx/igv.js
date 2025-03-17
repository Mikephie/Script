/*
📜 ✨ iGV ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X

# 重写规则 - 拦截广告图片
^https:\/\/media\.gv\.com\.sg\/cms\/images\/ads\/(CorpSales_NowAllowed_600x1200|OnlineF&BDeal)\.jpg url reject-img

# 脚本 - 自动点击跳过广告按钮
^https:\/\/m\.gv\.com\.sg\/iGV2\/general\/advpage\.html url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/igv.js

[MITM]
hostname = m.gv.com.sg, media.gv.com.sg

*/

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

      if (!(skipSuccess || closeSuccess)) {
        attempts++;
        if (attempts < 20) {
          requestAnimationFrame(tryAction); // 每一帧尝试一次，直到成功或达到最大次数
        } else {
          console.log('多次尝试仍未成功，停止执行。');
        }
      }
    }
    tryAction();
  }

  // 页面加载 & DOM 变化时执行
  window.addEventListener('load', autoSkipAndClose);
  new MutationObserver(autoSkipAndClose).observe(document.body, { childList: true, subtree: true });
})();
</script>
`;

if (body.includes('</body>')) {
  body = body.replace('</body>', autoActions + '</body>');
} else {
  body += autoActions;
}

$done({ body });