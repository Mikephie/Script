/*
📜 ✨ iGV ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
# 重写规则 - 拦截广告图片
^https:\/\/media\.gv\.com\.sg\/cms\/images\/ads\/.*\.(jpg|jpeg|png|gif)$ url reject-img
# 脚本 - 自动点击跳过广告按钮
^https:\/\/m\.gv\.com\.sg\/iGV2\/general\/advpage\.html url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/igv.js

[MITM]
hostname = m.gv.com.sg, media.gv.com.sg

let body = $response.body;

// 添加自动点击脚本
const autoSkip = `
<script>
window.addEventListener('load', function() {
  // 立即尝试点击Skip按钮
  var skipBtn = document.querySelector('.skipBtn');
  if (skipBtn) skipBtn.click();
  
  // 再尝试一次（以防万一）
  setTimeout(function() {
    var skipBtn = document.querySelector('.skipBtn');
    if (skipBtn) skipBtn.click();
  }, 500);
});
</script>
`;

body = body.replace('</body>', autoSkip + '</body>');
$done({body});
