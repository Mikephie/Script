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

const autoClose = `
<script>
(function() {
  function clickElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = 'block'; // 确保可见
      element.style.opacity = '1';
      element.style.pointerEvents = 'auto'; // 允许交互
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

  function autoSkipAndClose(doc) {
    let attempts = 0;
    function tryAction() {
      let skipSuccess = clickElement.call(doc, '.skipBtn');
      let closeSuccess = clickElement.call(doc, '.whatsnew_close') || submitForm.call(doc, 'formWhatsNewClose');

      if (!(skipSuccess || closeSuccess)) {
        attempts++;
        if (attempts < 20) {
          requestAnimationFrame(tryAction); // 每帧检测
        } else {
          console.log('多次尝试仍未成功，停止执行。');
        }
      }
    }
    tryAction();
  }

  // 监听页面加载并执行
  window.addEventListener('load', function() {
    autoSkipAndClose(document);
  });

  // 监听 DOM 变化（适用于 AJAX 及部分动态跳转）
  new MutationObserver(() => autoSkipAndClose(document)).observe(document.body, { childList: true, subtree: true });

  // 监听页面跳转（单页应用）
  window.addEventListener('popstate', function() {
    autoSkipAndClose(document);
  });

})();
</script>
`;

if (body.includes('</body>')) {
  body = body.replace('</body>', autoClose + '</body>');
} else {
  body += autoClose;
}

$done({ body });