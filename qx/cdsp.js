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
    "freeFlag" : "NO",
    "wordage" : 7777777,
    "mobile" : "Mikephie",
    "inviteCode" : "000000",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
      }
    ],
    "autoPay" : "NO",
    "type" : "VIP",
    "vipExpireTime" : "2777-07-07 07:07:07",
    "vipExpireDays" : 99999999,
    "times" : 77777777,
    "dataId" : "10171894677603377618",
    "registerTime" : "2024-06-21 13:12:56",
    "nickname" : "Mikephie",
    "remainTimeSeconds" : 99999,
    "headImg" : "https://boniuapp.rhinox.cn/common/head/1599546812784.png",
    "realnameStatus" : "NO"
  },
  "returnCode" : "200",
  "timeOut" : false
}
  

$done({body : JSON.stringify(mikephie)});