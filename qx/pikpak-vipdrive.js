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
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/space\/list\?type=space url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-vipdrive.js

[mitm] 
hostname = api-drive.mypikpak.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "space" : [

  ],
  "has_more" : false,
  "base" : {
    "sub_status" : false,
    "assets" : "50T",
    "upload" : {
      "assets" : 0,
      "total_assets" : 0,
      "size" : 0
    },
    "expire_time" : "2088-08-08T08:08:08+08:00",
    "download" : {
      "assets" : 0,
      "total_assets" : 0,
      "size" : 0
    },
    "size" : 64424509,
    "vip_status" : "ok",
    "user_id" : "ZoaH6k53-YYvhYj7",
    "offline" : {
      "assets" : 0,
      "total_assets" : 0,
      "size" : 0
    },
    "info" : ""
  }
}

$done({body : JSON.stringify(mikephie)});