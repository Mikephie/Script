/******************************
脚本功能：PikPak（永久会员）
软件版本：1.1.0 
下载地址： 
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！

*******************************

[rewrite_local]
^https:\/\/api-drive\.mypikpak\.com\/drive\/v1\/(about\?|about\?space=) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-drive.js

[mitm] 
hostname = api-drive.mypikpak.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "expires_at" : "2024-12-17T10:58:16+08:00",
  "user_type" : 2,
  "kind" : "drive#about",
  "quotas" : {
    "cloud_download" : {
      "usage_in_trash" : "0",
      "kind" : "",
      "usage" : "0",
      "is_unlimited" : true,
      "complimentary" : "2",
      "limit" : "50"
    }
  },
  "quota" : {
    "usage_in_trash" : "0",
    "kind" : "drive#quota",
    "usage" : "10248884",
    "is_unlimited" : false,
    "complimentary" : "2",
    "limit" : "10995116277760"
  }
}

$done({body : JSON.stringify(mikephie)});