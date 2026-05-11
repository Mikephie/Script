/*
#!name= ✨ AXS Payment ✨
#!desc=缴费账单
#!category=🚫广告
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/axs.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹


[rewrite_local]
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/(?:InfoPage|MessageBoardWeb)\/.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/refs/heads/main/qx/axs_popup_silent_close.js

[mitm]
hostname = m-station.axs.com.sg
