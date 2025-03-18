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
      element.style.display = 'none'; // 隐藏元素，防止 UI 阻塞
      element.style.opacity = '0';
      element.style.pointerEvents = 'none'; // 禁止交互
      element.click();
      console.log('点击成功:', selector);
      return true;
    }
    return false;
  }

  function submitForm(formId) {
    const form = document.getElementById(formId) || document.forms[formId];
    if (form) {
      form.style.display = 'none'; // 隐藏表单，防止 UI 卡顿
      form.submit();
      console.log('表单提交成功:', formId);
      return true;
    }
    return false;
  }

  function autoSkipAndClose(doc) {
    let attempts = 0;
    function tryAction() {
      let success = clickElement.call(doc, '.skipBtn') || 
                    clickElement.call(doc, '.whatsnew_close') || 
                    submitForm.call(doc, 'formWhatsNewClose');

      if (!success) {
        attempts++;
        if (attempts < 10) {
          setTimeout(tryAction, 200); // 限制执行次数，减少性能开销
        } else {
          console.log('多次尝试未成功，停止执行。');
        }
      }
    }
    tryAction();
  }

  // 页面加载时执行
  window.addEventListener('load', function() {
    setTimeout(() => autoSkipAndClose(document), 300);
  });

  // 监听 DOM 变化，但减少触发频率
  let observer = new MutationObserver(() => {
    observer.disconnect(); // 先断开监听，避免高频触发
    setTimeout(() => {
      autoSkipAndClose(document);
      observer.observe(document.body, { childList: true, subtree: true });
    }, 500);
  });
  observer.observe(document.body, { childList: true, subtree: true });

})();
</script>
`;

if (body.includes('</body>')) {
  body = body.replace('</body>', autoClose + '</body>');
} else {
  body += autoClose;
}

$done({ body });