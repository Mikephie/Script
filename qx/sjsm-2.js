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
^https?:\/\/appss.baomingding.com\/\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sjsm-2.js

[mitm] 
hostname = appss.baomingding.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "result" : {
    "freeFlag" : "YES",
    "wordage" : 0,
    "mobile" : "17157858185",
    "inviteCode" : "jPnhRwiS",
    "vipGroupInfos" : [

    ],
    "autoPay" : "NO",
    "type" : "NORMAL",
    "times" : 0,
    "dataId" : "10171901002866188283",
    "registerTime" : "2024-06-22 06:47:09",
    "nickname" : "Mikephie",
    "remainTimeSeconds" : 0,
    "headImg" : "https://boniuapp.rhinox.cn/common/head/1599546812784.png",
    "realnameStatus" : "NO"
  },
  "returnCode" : "200",
  "timeOut" : false
}

$done({body : JSON.stringify(mikephie)});

