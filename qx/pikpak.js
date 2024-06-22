/******************************
脚本功能：试卷扫描-拍照清除笔迹，还原空白试卷，错题标记重组（永久会员）
软件版本：1.1.0 
下载地址： 
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！

*******************************

[rewrite_local]
# >试卷扫描-拍照清除笔迹，还原空白试卷，错题标记重组（永久会员）
^https?:\/\/appss.baomingding.com\/\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak.js

[mitm] 
hostname = api-drive.mypikpak.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "data" : {
    "expire" : "2088-11-29T10:58:16+08:00",
    "status" : "ok",
    "restricted" : {
      "result" : false,
      "content" : {
        "color" : "",
        "text" : "",
        "deepLink" : ""
      },
      "learnMore" : {
        "color" : "",
        "text" : "",
        "deepLink" : ""
      }
    },
    "extUserInfo" : {
      "userRegion" : "regional"
    },
    "user_id" : "ZUNcGmFMxgvtLSD8",
    "type" : "platinum",
    "fee_record" : "no_record",
    "vipItem" : [
      {
        "status" : "ok",
        "expire" : "2088-11-29T10:58:16+08:00",
        "type" : "regional",
        "description" : "区域会员",
        "surplus_day" : 88888
      }
    ]
  }
}

$done({body : JSON.stringify(mikephie)});