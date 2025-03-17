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

// 自动点击广告跳过按钮的 JavaScript 代码
const autoSkip = `
<script>
window.addEventListener('load', function() {
  function clickSkipButton() {
    var skipBtn = document.querySelector('.skipBtn');
    if (skipBtn) {
      skipBtn.click();
      console.log('Skip button clicked');
    }
  }

  // 初次尝试点击
  clickSkipButton();
  
  // 延迟再尝试一次（以防按钮延迟加载）
  setTimeout(clickSkipButton, 500);
  
  // 监听 DOM 变化，自动点击新加载的 Skip 按钮
  const observer = new MutationObserver(() => clickSkipButton());
  observer.observe(document.body, { childList: true, subtree: true });
});
</script>
`;

body = body.replace('</body>', autoSkip + '</body>');
$done({ body });