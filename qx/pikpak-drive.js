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
  "expires_at" : "",
  "kind" : "drive#about",
  "quotas" : {

  },
  "quota" : {
    "limit" : "64495116277760",
    "is_unlimited" : false,
    "usage" : "1296313090663",
    "kind" : "drive#quota",
    "usage_in_trash" : "34808825695",
    "play_times_limit" : "-1",
    "play_times_usage" : "0"
  }
}

$done({body : JSON.stringify(mikephie)});