/*
#!name= ✨ AXS Payment ✨
#!desc=缴费账单
#!category=🚫广告
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/axs.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# AXS e-station 动态弹窗系统，直接禁用 PopupLoader
^https:\/\/e-station\.axs\.com\.sg\/html\/wSDK\/js\/popup_(?:config|manager|loader)\.js.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/refs/heads/main/qx/axs_popup_noop.js

# AXS e-station 页面兜底：移除 PopupLoader.init + 注入隐藏规则
^https:\/\/e-station\.axs\.com\.sg\/wSDK\/.*\.(?:php|html)(?:\?.*)?$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/refs/heads/main/qx/axs_estation_clean.js

# AXS 页面底部 marketing banner
^https:\/\/e-station\.axs\.com\.sg\/wSDK\/image\/marketing_banner\/.* url reject-img

# Moovit 紫色 Moovit+ 订阅条
^https:\/\/app4\.moovitapp\.com\/services-app\/services\/Subscriptions\/GetSubscriptions.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/refs/heads/main/qx/moovit_empty_octet_list.js

# Moovit 其他广告/推送卡片
^https:\/\/app5\.moovitapp\.com\/services-app\/services\/V4\/UserNotifications\/AllValidNotifications.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/refs/heads/main/qx/moovit_empty_octet_list.js
^https:\/\/app5\.moovitapp\.com\/services-app\/services\/ads\/mediator\/getProximityTagsInfo.* url reject
^https:\/\/(?:config|logs)\.ads\.vungle\.com\/.* url reject
^https:\/\/cdn2\.inner-active\.mobi\/.* url reject
^https:\/\/skadnetworks\.fyber\.com\/.* url reject

[mitm]
hostname = e-station.axs.com.sg, app4.moovitapp.com, app5.moovitapp.com, config.ads.vungle.com, logs.ads.vungle.com, cdn2.inner-active.mobi, skadnetworks.fyber.com
axs_popup_noop.js
