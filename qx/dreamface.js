/*************************************

>「 脚本名称 」         DreamFace解锁Pro
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-09-26
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本

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
      "vip_remainder_day": 88888888,
      "expires_date": 3742762088000,
      "have_trial": false,
      "expires_date_format": "2088-08-08 08:08:08.000",
      "vip_product_id": "96"
    },
    "device_name": "iPhone17,2",
    "system_version": "18.0",
    "app_version": "4.6.1",
    "app_package_name": "DreamFace",
    "user_id": "1D71B429-E97D-4232-B94D-AA87804D9C62",
    "device_system": "iOS",
    "country_code": "my",
    "repeat_subscribe": false,
    "ip_country_code": "cn"
  },
  "status_code": "THS12140000000",
  "extend": {
  },
  "status_msg": "Success"
}
  
$done({body : JSON.stringify(mikephie)});