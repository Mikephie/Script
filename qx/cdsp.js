/******************************

脚本名称: 彩豆视频水印宝 解锁VIP
下载地址：商店
脚本作者：Mikephie
更新时间：2024年6月15日 15:56
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^https?:\/\/appss.baomingding.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cdsp.js

[MITM]
hostname = appss.baomingding.com

var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "result" : {
    "dataId" : "10171672668831233491",
    "remainTimeSeconds" : 888888,
    "realnameStatus" : "NO",
    "appleUserEmail" : "mikephiemy@gmail.com",
    "wordage" : 88888888,
    "freeFlag" : "YES",
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
    "vipExpireTime" : "2028-08-08 08:08:08",
    "vipExpireDays" : 888888,
    "registerTime" : "2024-05-26 20:31:28",
    "nickname" : "Mikephie",
    "email" : "mikephiemy@gmail.com",
    "headImg" : "https://boniuapp.rhinox.cn/common/head/1599546812784.png",
    "times" : 88888
  },
  "returnCode" : "200",
  "timeOut" : false
}
  

$done({body : JSON.stringify(mikephie)});