/*        
        ➪：脚本名称: PikPak （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

*******************************/

# PikPak URL Rewrite Configuration

[rewrite_local]
# VIP Features
# User Information
^https:\/\/user\.mypikpak\.com\/v1\/user\/me url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-userme.js

# VIP Status Information
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/vip\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-vipinfo.js

# VIP Subscription Status
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/allSubscriptionStatus url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-sub.js

# VIP Drive Information
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/space\/list\?type=space url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-vipdrive.js

# Non-VIP Features (Currently Disabled)
# Token Handler
# ^https:\/\/(api-drive|user)\.mypikpak\.com\/(vip\/v1\/(allSubscriptionStatus|vip\/info|space\/list\?type=space)|v1\/user\/me)$ url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpaktk.js

# Standard Drive Information
^https:\/\/api-drive\.mypikpak\.com\/drive\/v1\/(about\?|about\?space=) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-drive.js

[mitm]
hostname = *.mypikpak.com