/*        
        ➪：脚本名称: PikPak （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

*******************************/

[rewrite_local]
#TK
^https:\/\/(api-drive|user)\.mypikpak\.com\/(vip\/v1\/(allSubscriptionStatus|vip\/info|space\/list\?type=space)|v1\/user\/me)$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpaktk1.js

[mitm] 
hostname = *.mypikpak.com

