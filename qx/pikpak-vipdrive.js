/*        
        ➪：脚本名称: PikPak （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/space\/list\?type=space url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-vipdrive.js

[mitm] 
hostname = api-drive.mypikpak.com
#ZUNcGmFMxgvtLSD8
*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "space" : null,
  "has_more" : false,
  "base" : {
    "sub_status" : true,
    "assets" : "10T",
    "upload" : {
      "assets" : 0,
      "total_assets" : 0,
      "size" : 0
    },
    "expire_time" : "2025-11-29T10:58:16+08:00",
    "download" : {
      "assets" : 0,
      "total_assets" : 0,
      "size" : 0
    },
    "size" : 10995116277760,
    "vip_status" : "ok",
    "user_id" : "ZUNcGmFMxgvtLSD8",
    "offline" : {
      "assets" : 0,
      "total_assets" : 0,
      "size" : 0
    },
    "info" : ""
  }
}

$done({body : JSON.stringify(mikephie)});