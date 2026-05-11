/*
#!name= ✨ AXS Payment ✨
#!desc=缴费账单
#!category=🚫广告
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/axs.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# AXS 上游首页广告 banner，必须先清
^https:\/\/prod-smarket\.hithink\.sg\/hexinifs\/rs\/cms\/ad\/overseaHomePage.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/refs/heads/main/qx/axs_hithink_ad_clean.js

# AXS InfoPage 漏网弹窗：HTML 注入静默关闭
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/InfoPage\/[^\/]+\/whatsnew\.php.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/refs/heads/main/qx/axs_whatsnew_silent.js

# AXS InfoPage CSS 兜底：加载前先隐藏，防闪
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/InfoPage\/general_display\.css.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/refs/heads/main/qx/axs_infopage_hide_css.js

# AXS 弹窗图，兜底透明化
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/InfoPage\/[^\/]+\/images\/.* url reject-img

# AXS 首页广告背景图，按 HAR 命中
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/CT_include\/CT153_src\/banner_image\/.* url reject-img

# Moovit 首页提示/横幅卡片，HAR 里有 Tip! Use Live Directions
^https:\/\/app5\.moovitapp\.com\/services-app\/services\/V4\/UserNotifications\/AllValidNotifications.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/refs/heads/main/qx/moovit_empty_octet_list.js

# Moovit 广告 SDK
^https:\/\/app5\.moovitapp\.com\/services-app\/services\/ads\/mediator\/getProximityTagsInfo.* url reject
^https:\/\/(?:config|logs)\.ads\.vungle\.com\/.* url reject
^https:\/\/cdn2\.inner-active\.mobi\/.* url reject
^https:\/\/skadnetworks\.fyber\.com\/.* url reject

[mitm]
hostname = prod-smarket.hithink.sg, m-station.axs.com.sg, app5.moovitapp.com, config.ads.vungle.com, logs.ads.vungle.com, cdn2.inner-active.mobi, skadnetworks.fyber.com

