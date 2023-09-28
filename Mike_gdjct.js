/*************************************

项目名称：滚动长截图全家桶
软件下载：https://apps.apple.com/cn/app/%E6%BB%9A%E5%8A%A8%E6%88%AA%E9%95%BF%E5%9B%BE-%E6%BB%9A%E5%8A%A8%E6%88%AA%E5%B1%8F%E5%92%8C%E9%95%BF%E5%9B%BE%E6%8B%BC%E6%8E%A5%E5%B7%A5%E5%85%B7/id1658935259

发布频道：https://t.me/iosrxwy

使用声明：⚠️仅供参考，🈲️转载与售卖！

**************************************


[rewrite_local]

^https:\/\/appss\.rhinoxlab\.com\/%0Aapp\/account\/getAccountInfo

https://raw.githubusercontent.com/Mikephie/Script/main/Mike_gdjct.js

[mitm]

hostname = appss.rhinoxlab.com

************************************/


var objc = JSON.parse($response.body);
    objc = {
  "success" : true,
  "result" : {
    "remainTimeSeconds" : 0,
    "realnameStatus" : "NO",
    "wordage" : 0,
    "mobile" : "66666666666",
    "inviteCode" : "WdSGpMQI",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "YES"
      }
    ],
    "type" : "FOREVER",
    "vipExpireTime" : "9999-10-01 14:19:09",
    "vipExpireDays" : 9999,
    "registerTime" : "2023-09-28 14:20:10",
    "nickname" : "U2309771368",
    "times" : 0,
    "headImg" : "https://boniuapp.rhinox.cn/common/head/1599546812784.png",
    "dataId" : "10169588200987938870"
  },
  "returnCode" : "200",
  "timeOut" : false
}
$done({body : JSON.stringify(objc)});
