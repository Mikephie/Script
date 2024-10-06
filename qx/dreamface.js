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
  'vip_type': 'TRY_YEAR_PACKAGE',
  'vip_label': true,
  'vip_remainder_day': 88888888,
  'expires_date': 33403938000000,
  'have_trial': false,
  'expires_date_format': '2099-09-09 00:00:00.000',
  'vip_product_id': '96'
 };
}

$done({body : JSON.stringify(mikephie)});