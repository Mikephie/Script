/*
📜 ✨ iGV ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
# 重写规则 - 拦截广告图片
^https:\/\/media\.gv\.com\.sg\/cms\/images\/ads\/.*\.(jpg|jpeg|png|gif)$ url reject-img
# 脚本 - 自动点击跳过广告按钮
^https:\/\/m\.gv\.com\.sg\/iGV2\/general\/advpage\.html url script-response-body gv_skip_ad.js

[MITM]
hostname = m.gv.com.sg, media.gv.com.sg
