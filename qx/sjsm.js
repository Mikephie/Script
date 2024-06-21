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
^https?:\/\/appss.baomingding.com\/\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sjsm.js

[mitm] 
hostname = appss.baomingding.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "result" : {
    "dataId" : "10171672668831233491",
    "remainTimeSeconds" : 88888,
    "realnameStatus" : "NO",
    "appleUserEmail" : "mikephiemy@gmail.com",
    "wordage" : 88888888,
    "freeFlag" : "NO",
    "inviteCode" : "QPHMUFX8",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "NO"
      }
    ],
    "autoPay" : "NO",
    "type" : "VIP",
    "vipExpireTime" : "2088-08-08 08:08:08",
    "vipExpireDays" : 88888888,
    "registerTime" : "2024-05-26 20:31:28",
    "nickname" : "Mikephie",
    "email" : "mikephiemy@gmail.com",
    "headImg" : "https://boniuapp.rhinox.cn/common/head/1599546812784.png",
    "times" : 88888888
  },
  "returnCode" : "200",
  "timeOut" : false
}

$done({body : JSON.stringify(mikephie)});

