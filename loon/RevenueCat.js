#!name = RevenueCat🔐APP解锁
#!desc = RevenueCat解锁系列 - 插件
#!author = 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon = https://raw.githubusercontent.com/Loon0x00/Loon0x00.github.io/main/static/img/loon.png

[Argument]
appName = input,"RevenueCat🔐APP解锁",tag=app的名字,desc=填写app的用户名，用于提交app的相关信息
appCategory = select,"🔐APP","✅签到","🚫广告","🛠️工具",tag=app的分类
isSupportChinese = switch,true,tag=是否支持中文,desc=选择app是否支持中文


[Script]
http-response ^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/iTunes.js, tag=RevenueCat🔐APP解锁, argument=[{appName},{appCategory},{isSupportChinese}],enable = {cookieScriptEnable}
http-request ^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) script-path= https://raw.githubusercontent.com/Mikephie/Script/main/qx/mrevenue.js, tag=RevenueCatHeader🔐APP解锁

[MITM]
hostname = api.revenuecat.com