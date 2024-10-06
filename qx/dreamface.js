/*        
        ➪：脚本名称: DreamFace

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/dreamfaceapp\.com\/df-server\/user\/save_user_login url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/dreamface.js
 
[mitm]
hostname = dreamfaceapp.com

*************************************/


var mikephie = JSON.parse($response.body);
var Data = {
  'renewal': false,
  'vip_type': 'someType',
  'vip_label': true,
  'vip_remainder_day': 88888888,
  'expires_date': 1348145488349440,
  'have_trial': false,
  'expires_date_format': 'someFormat',
  'vip_product_id': '96'
 };
}
  
$done({body : JSON.stringify(mikephie)});