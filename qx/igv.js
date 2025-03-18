/*
📜 ✨ iGV ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X

# 重寫規則 - 攔截廣告圖片
^https:\/\/media\.gv\.com\.sg\/cms\/images\/ads\/(CorpSales_NowAllowed_600x1200|OnlineF&BDeal)\.jpg url reject-img

# 腳本 - 自動點擊跳過廣告按鈕
^https:\/\/m\.gv\.com\.sg\/iGV2\/general\/advpage\.html url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/igv.js

[MITM]
hostname = m.gv.com.sg, media.gv.com.sg

*/

let body = $response.body;

// 自動點擊廣告跳過按鈕的 JavaScript 代碼
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

  // 初次嘗試點擊
  clickSkipButton();
  
  // 延遲再嘗試一次（以防按鈕延遲加載）
  setTimeout(clickSkipButton, 500);
  
  // 監聽 DOM 變化，自動點擊新加載的 Skip 按鈕
  const observer = new MutationObserver(() => clickSkipButton());
  observer.observe(document.body, { childList: true, subtree: true });
});
</script>
`;

body = body.replace('</body>', autoSkip + '</body>');
$done({ body });