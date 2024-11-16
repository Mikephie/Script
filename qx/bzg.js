/*        
          ➪：百转格-登陆后解锁会员功能

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^http:\/\/format-api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bzg.js


[mitm] 
hostname = format-api.netpock.com

*******************************/

var mikephie = JSON.parse($response.body);

mikephie.data = {
  ...mikephie.data,
    "is_vip" : true,
    "wps_size" : 88888888,
};
 
$done({body: JSON.stringify(mikephie)});