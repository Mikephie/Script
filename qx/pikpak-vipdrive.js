/*        
        ➪：脚本名称: PikPak （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/space\/list\?type=space url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-vipdrive.js

[mitm] 
hostname = api-drive.mypikpak.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "space" : [

  ],
  "has_more" : true,
  "base" : {
    "sub_status" : true,
    "assets" : "15T",
    "upload" : {
      "assets" : 0,
      "total_assets" : 0,
      "size" : 0
    },
    "expire_time" : "2088-08-08T08:08:08+08:00",
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