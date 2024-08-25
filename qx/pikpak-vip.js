/*        
        ➪：脚本名称: PikPak （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/vip\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-vip.js

[mitm] 
hostname = api-drive.mypikpak.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "data" : {
    "expire" : "2025-11-29T10:58:16+08:00",
    "ext_type" : "",
    "status" : "ok",
    "restricted" : {
      "result" : false,
      "content" : {
        "color" : "",
        "text" : "",
        "deepLink" : ""
      },
      "learnMore" : {
        "color" : "",
        "text" : "",
        "deepLink" : ""
      }
    },
    "extUserInfo" : {
      "userRegion" : "regional"
    },
    "user_id" : "ZUNcGmFMxgvtLSD8",
    "kind" : 2,
    "fee_record" : "no_record",
    "type" : "platinum",
    "vipItem" : [
      {
        "status" : "ok",
        "expire" : "2025-11-29T10:58:16+08:00",
        "type" : "regional",
        "description" : "区域会员",
        "surplus_day" : 461
      }
    ]
  }
}

$done({body : JSON.stringify(mikephie)});