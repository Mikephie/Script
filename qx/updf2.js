/*        
        ➪：脚本名称: UPDF （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/apis\.updf\.com\/v1\/drive\/user\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/updf2.js

[mitm]

hostname = apis.updf.com 


*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "msg": "Operation successful.",
  "data": {
    "base_info": {
      "used_size": 2600677,
      "is_open": 1,
      "total_size": 12884901888,
      "auto_sync": 1
    }
  },
  "code": 200
}
 
$done({body : JSON.stringify(mikephie)});