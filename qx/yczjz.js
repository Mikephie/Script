/*        
        ➪：脚本名称:   yczjz 更新时间 ：2024年6月23日 17:43

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 
[rewrite_local]
^https:\/\/idp2api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/yczjz.js

[MITM]
hostname = idp2api.netpock.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "code" : 200,
  "messages" : "请求成功！",
  "data" : {
    "is_vip" : true,
    "is_bind_apple" : true,
    "vip_expiration_time" : 3742762088000,
    "not_set_pwd" : false,
    "user_id" : "1716345009064",
    "user_name" : "Mikephie",
    "is_bind_wx" : false,
    "apple_email" : "mikephiemy@gmail.com"
  },
  "count" : 0,
  "time" : "1719135564"
}

$done({body : JSON.stringify(mikephie)});