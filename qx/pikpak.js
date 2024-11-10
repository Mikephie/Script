/*        
        ➪：脚本名称: PikPak （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

*******************************/

[rewrite_local]

# VIP
#1 Userme Info
^https:\/\/user\.mypikpak\.com\/v1\/user\/me url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-userme.js
#2 VIP Info
^^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/vip\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-vipinfo.js
#3 VIP Subs
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/allSubscriptionStatus url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-sub.js
#4 VIP Drive Info
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/space\/list\?type=space url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-vipdrive.js

# Non VIP
#5 TK
#^https:\/\/(api-drive|user)\.mypikpak\.com\/(vip\/v1\/(allSubscriptionStatus|vip\/info|space\/list\?type=space)|v1\/user\/me)$ url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpaktk.js
#6 Non-VIP Drive Info
#^https:\/\/api-drive\.mypikpak\.com\/drive\/v1\/(about\?|about\?space=) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-drive.js


[mitm] 
hostname = *.mypikpak.com