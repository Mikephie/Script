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

// 改进的自动点击广告跳过按钮的 JavaScript 代码 - 适用于同域名下的所有页面
const autoSkip = `
<script>
(function() {
  // 存储脚本已经运行的标记（防止重复初始化）
  if (window.__skipButtonInitialized) return;
  window.__skipButtonInitialized = true;
  
  // 主函数：尝试点击跳过按钮
  function clickSkipButton() {
    const skipBtns = document.querySelectorAll('.skipBtn, .skip-btn, .ad-skip, [class*="skip"], [id*="skip"]');
    
    // 尝试多种可能的跳过按钮选择器
    if (skipBtns.length > 0) {
      skipBtns.forEach(btn => {
        try {
          btn.click();
          console.log('Skip button clicked:', btn);
        } catch (e) {
          console.log('Error clicking button:', e);
        }
      });
      return true;
    }
    
    // 如果没有找到明确的跳过按钮，尝试查找包含"跳过"文本的按钮
    const allButtons = document.querySelectorAll('button, a, div[role="button"], span[role="button"]');
    for (const btn of allButtons) {
      if (btn.textContent && (
          btn.textContent.toLowerCase().includes('skip') || 
          btn.textContent.includes('跳过') || 
          btn.textContent.includes('关闭')
        )) {
        try {
          btn.click();
          console.log('Text-based skip button clicked:', btn.textContent);
          return true;
        } catch (e) {
          console.log('Error clicking text button:', e);
        }
      }
    }
    
    return false;
  }

  // 初始化跳过按钮检测和点击
  function initSkip() {
    console.log('Initializing skip button detection on: ' + window.location.href);
    
    // 立即尝试点击
    let clicked = clickSkipButton();
    
    // 如果没找到，设置一个多次尝试的机制（有些按钮可能会延迟出现）
    if (!clicked) {
      const attemptTimes = [500, 1000, 2000, 3000, 5000]; // 多次尝试的时间间隔
      attemptTimes.forEach(time => {
        setTimeout(clickSkipButton, time);
      });
    }
    
    // 设置DOM观察器，检测新元素
    const observer = new MutationObserver((mutations) => {
      // 只在有新节点添加时尝试点击
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          clickSkipButton();
          break;
        }
      }
    });
    
    // 观察整个文档体
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,  // 观察属性变化（某些按钮可能在样式变化后才可见）
      attributeFilter: ['style', 'class'] // 只关注样式和类属性变化
    });
    
    // 处理iframe中可能的广告按钮
    try {
      const frames = document.querySelectorAll('iframe');
      frames.forEach(frame => {
        try {
          // 尝试访问iframe内容（这可能会因同源策略而失败）
          const frameDoc = frame.contentDocument || frame.contentWindow.document;
          const frameObserver = new MutationObserver(() => {
            try {
              const frameSkipBtns = frameDoc.querySelectorAll('.skipBtn, .skip-btn, .ad-skip');
              frameSkipBtns.forEach(btn => btn.click());
            } catch(e) { /* 忽略错误 */ }
          });
          frameObserver.observe(frameDoc.body, { childList: true, subtree: true });
        } catch(e) { /* 忽略同源策略错误 */ }
      });
    } catch(e) { /* 忽略错误 */ }
  }

  // 在不同阶段尝试初始化，确保在各种场景下都能运行
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initSkip);
  } else {
    initSkip();
  }
  
  // 处理通过 History API 的导航
  const originalPushState = history.pushState;
  history.pushState = function() {
    originalPushState.apply(this, arguments);
    setTimeout(initSkip, 500); // 页面状态改变后初始化
  };
  
  const originalReplaceState = history.replaceState;
  history.replaceState = function() {
    originalReplaceState.apply(this, arguments);
    setTimeout(initSkip, 500);
  };
  
  // 处理浏览器前进/后退导航
  window.addEventListener('popstate', function() {
    setTimeout(initSkip, 500);
  });
  
  // 处理URL哈希变化（单页应用常用）
  window.addEventListener('hashchange', function() {
    setTimeout(initSkip, 500);
  });
  
  // 确保页面完全加载后也执行一次
  window.addEventListener('load', function() {
    setTimeout(initSkip, 1000);
  });
  
  // 每10秒重新检查一次（用于处理延迟加载的广告）
  setInterval(clickSkipButton, 10000);
  
  console.log('Skip button handler installed successfully');
})();
</script>
`;

body = body.replace('</body>', autoSkip + '</body>');
$done({ body });