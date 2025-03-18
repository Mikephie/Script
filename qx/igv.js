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

(function() {
  function trySkipAd() {
    console.log("正在查找 'Skip Ad' 按钮...");
    const skipBtn = document.querySelector('.skipBtn, .whatsnew_close'); // 可能的按钮类名
    if (skipBtn) {
      console.log("找到 'Skip Ad' 按钮，尝试点击...");
      skipBtn.click();
    } else {
      console.log("未找到 'Skip Ad' 按钮，稍后再试...");
      setTimeout(trySkipAd, 500); // 持续检测
    }
  }

  window.addEventListener('load', function() {
    console.log("页面加载完成，开始自动跳过广告...");
    setTimeout(trySkipAd, 500); // 延迟执行，确保按钮加载
  });
})();