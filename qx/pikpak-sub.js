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
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/vip\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak.js

[mitm] 
hostname = api-drive.mypikpak.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "xiaomi" : {
    "subscribed" : false,
    "status" : "",
    "product" : "",
    "purchased" : false,
    "past_due_deadline" : "",
    "pay_type" : "",
    "region" : "",
    "interval" : ""
  },
  "google" : {
    "subscribed" : false,
    "status" : "",
    "product" : "",
    "purchased" : false,
    "past_due_deadline" : "",
    "pay_type" : "",
    "region" : "",
    "interval" : ""
  },
  "stripe" : {
    "subscribed" : false,
    "status" : "",
    "product" : "",
    "purchased" : false,
    "past_due_deadline" : "",
    "pay_type" : "",
    "region" : "",
    "interval" : ""
  },
  "apple" : {
    "subscribed" : false,
    "status" : "",
    "product" : "",
    "purchased" : false,
    "past_due_deadline" : "",
    "pay_type" : "",
    "region" : "",
    "interval" : ""
  },
  "payment_service" : {
    "subscribed" : false,
    "status" : "",
    "product" : "",
    "purchased" : false,
    "past_due_deadline" : "",
    "pay_type" : "",
    "region" : "",
    "interval" : ""
  }
}

$done({body : JSON.stringify(mikephie)});