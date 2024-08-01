/*        
        ➪：脚本名称: UPDF （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api\.updf\.com\/v1\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/updf4.js

[mitm]

hostname = api.updf.com 

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "msg": "操作已成功。",
  "data": {
    "base_info": {
      "used_size": 138036,
      "is_open": 1,
      "total_size": 10737418240,
      "auto_sync": 1
    }
  },
  "code": 200
}
 
$done({body : JSON.stringify(mikephie)});