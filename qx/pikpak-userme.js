/*        
        ➪：脚本名称: PikPak （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/user\.mypikpak\.com\/v1\/user\/me url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-user.js

[mitm] 
hostname = user.mypikpak.com

*******************************/ 

var mikephie = JSON.parse($response.body);

    mikephie = {
  "status" : "ACTIVE",
  "password" : "SET",
  "sub" : "ZUNcGmFMxgvtLSD8",
  "created_at" : "2023-11-02T08:21:46.572570191Z",
  "picture" : "https://static.mypikpak.com/avatar/pikpak_scale_01.png",
  "email" : "4pbhqkfbzx@privaterelay.appleid.com",
  "providers" : [
    {
      "id" : "apple.com",
      "provider_user_id" : "000213.d5b3683911654463854ae0ebab8c11fa.0821",
      "name" : "MikephieMY"
    },
    {
      "id" : "telegram.com",
      "provider_user_id" : "812526739",
      "name" : "ⓂⓘⓚⓔⓅⓗⓘⓔ"
    }
  ],
  "phone_number" : "+6587***88",
  "name" : "MikephieMY",
  "password_updated_at" : "2023-11-23T06:50:56.310544839Z"
}

$done({body : JSON.stringify(mikephie)});