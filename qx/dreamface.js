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

mikephie = {
  "data": {
    "rights": {
      "renewal": false,
      "vip_type": "TRY_YEAR_PACKAGE",
      "vip_label": true,
      "vip_remainder_day": 99999999,
      "expires_date": 33403938000000,
      "have_trial": false,
      "expires_date_format": "2099-09-09 00:00:00.000",
      "vip_product_id": "96"
    },
    "device_name": "iPhone17,2",
    "system_version": "18.0.1",
    "app_version": "4.6.1",
    "app_package_name": "DreamFace",
    "user_id": "1D71B429-E97D-4232-B94D-AA87804D9C62",
    "device_system": "iOS",
    "country_code": "my",
    "repeat_subscribe": false,
    "ip_country_code": "sg"
  },
  "status_code": "THS12140000000",
  "extend": {
  },
  "status_msg": "Success"
}
  
$done({body : JSON.stringify(mikephie)});