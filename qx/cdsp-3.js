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
^https?:\/\/appss.baomingding.com\/\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cdsp-3.js

[mitm] 
hostname = appss.baomingding.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "result" : {
    "headImg" : "https://zdimg.lifeweek.com.cn/app/20230410/16811146599505136.jpg",
    "dataId" : "00000000000000000000",
    "wordage" : 7777777,
    "mobile" : "https://t.me/GieGie777",
    "inviteCode" : "000000",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "NO"
      }
    ],
    "type" : "VIP",
    "vipExpireTime" : "2777-07-07 07:07:07",
    "vipExpireDays" : 99999999,
    "registerTime" : "2022-09-09 03:20:32",
    "nickname" : "https://t.me/GieGie777",
    "remainTimeSeconds" : 99999,
    "realnameStatus" : "NO",
    "times" : 77777777
  },
  "returnCode" : "200",
  "timeOut" : false
}

$done({body : JSON.stringify(mikephie)});