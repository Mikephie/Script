/******************************
脚本功能：作业批改-家长辅导作业工具（永久会员）
软件版本：2.1.1
下载地址：
脚本作者：
更新时间：2024年

*******************************

[rewrite_local]
# >试卷扫描-拍照清除笔迹，还原空白试卷，错题标记重组（永久会员）
^https:\/\/appss\.rhinoxlab\.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/zypg.js

[mitm] 
hostname = appss.rhinoxlab.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "result" : {
    "headImg" : "https://zdimg.lifeweek.com.cn/app/20230410/16811146599505136.jpg",
    "dataId" : "00000000000000000000",
    "wordage" : 88888888,
    "appleUserEmail" : "mikephiemy@gmail.com",
    "mobile" : "88888888",
    "inviteCode" : "000000",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "NO"
      }
    ],
    "type" : "VIP",
    "vipExpireTime" : "2088-08-08 08:08:08",
    "vipExpireDays" : 88888888,
    "registerTime" : "2022-09-09 03:20:32",
    "nickname" : "Mikephie",
    "remainTimeSeconds" : 99999,
    "realnameStatus" : "NO",
    "times" : 88888
  },
  "returnCode" : "200",
  "timeOut" : false
}

$done({body : JSON.stringify(mikephie)});

