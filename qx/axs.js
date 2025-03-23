/*
📜 AXS Payment
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
#!desc=去弹窗+主页广告
#!category=🚫广告
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/axs.png

[filter_local]
url-regex,^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/WebView\/MarketPlace,reject
url-regex,^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/highlight,reject

[rewrite_local]
^https?:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage\/.*$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/axs.js

[mitm]
hostname = m-station2.axs.com.sg

*/

// 主脚本函数...
let url = $request.url;

// 处理InfoPage请求
if (url.includes('/InfoPage/')) {
  console.log("[AXS拦截] 处理请求: " + url);
  
  // 创建一个简单的自动关闭HTML
  const autoCloseHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <style>
    body { margin: 0; padding: 0; background: transparent; }
  </style>
  <script>
    // 自动关闭函数
    window.onload = function() {
      // 使用与原始页面相同的关闭机制
      try {
        document.formWhatsNewClose.submit();
      } catch(e) {
        // 如果失败，尝试通过URL关闭
        window.location = 'closebutton://';
      }
    };
  </script>
</head>
<body>
  <!-- 使用与原始页面相同的关闭表单 -->
  <form id="formWhatsNewClose" name="formWhatsNewClose" action="closebutton://" method="POST"></form>
  <script>
    // 立即触发表单提交
    document.formWhatsNewClose.submit();
  </script>
</body>
</html>
`;

  // 特殊处理：完全隐藏页脚（白框来源）
  const noFooterHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <style>
    .footer_container { 
      display: none !important; 
      height: 0 !important;
      visibility: hidden !important;
    }
    
    body {
      background-color: #24bfd0 !important;
      background-image: linear-gradient(180deg, #24bfd0 70%, #2296a8 100%) !important;
    }
  </style>
  <script>
    // 自动提交关闭表单
    window.onload = function() {
      document.formWhatsNewClose.submit();
    }
  </script>
</head>
<body>
  <form id="formWhatsNewClose" name="formWhatsNewClose" action="closebutton://" method="POST"></form>
  <script>document.formWhatsNewClose.submit();</script>
</body>
</html>
`;

  // 针对whatsnew.php的处理 (主广告页面)
  if (url.includes('whatsnew.php')) {
    console.log("[AXS拦截] 处理主广告页面");
    
    // 返回修改后的HTML - 自动关闭并隐藏页脚
    $done({
      response: {
        status: 200,
        headers: {
          "Content-Type": "text/html",
          "Cache-Control": "no-store"
        },
        body: noFooterHTML
      }
    });
  }
  // 处理CSS文件 - 隐藏页脚
  else if (url.includes('css/custom.css')) {
    console.log("[AXS拦截] 修改CSS以隐藏页脚");
    
    // 添加CSS规则来隐藏footer_container
    const cssAddition = `
.footer_container {
  display: none !important;
  height: 0 !important;
  visibility: hidden !important;
  opacity: 0 !important;
}
    `;
    
    // 获取原始响应并添加我们的CSS
    const originalResponse = $response;
    if (originalResponse && originalResponse.body) {
      originalResponse.body += cssAddition;
      $done(originalResponse);
    } else {
      $done({
        response: {
          status: 200,
          headers: {
            "Content-Type": "text/css",
            "Cache-Control": "no-store"
          },
          body: cssAddition
        }
      });
    }
  }
  // 处理关闭按钮图片 - 保留以便可以点击
  else if (url.includes('close.png')) {
    console.log("[AXS拦截] 保留关闭按钮");
    // 让请求正常通过
    $done({});
  }
  // 处理其他图片资源 - 可以阻止加载
  else if (url.includes('/images/')) {
    console.log("[AXS拦截] 阻止图片加载: " + url);
    
    // 返回1x1透明像素
    const transparentPixel = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
    
    $done({
      response: {
        status: 200,
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "no-store"
        },
        body: transparentPixel
      }
    });
  }
  // InfoPageProcess.php - 控制广告流程的PHP
  else if (url.includes('InfoPageProcess.php')) {
    console.log("[AXS拦截] 返回广告已完成状态");
    
    $done({
      response: {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store"
        },
        body: JSON.stringify({
          "status": "success", 
          "viewed": true, 
          "completed": true,
          "allViewed": true
        })
      }
    });
  }
  // 其他InfoPage请求
  else {
    console.log("[AXS拦截] 处理其他InfoPage请求");
    
    $done({
      response: {
        status: 200,
        headers: {
          "Content-Type": "text/html",
          "Cache-Control": "no-store"
        },
        body: autoCloseHTML
      }
    });
  }
}
// 其他请求放行
else {
  $done({});
}