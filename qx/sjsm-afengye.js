/******************************
脚本功能：试卷扫描-拍照清除笔迹，还原空白试卷，错题标记重组（永久会员）
软件版本：1.1.0 
下载地址： 
脚本作者：
更新时间：2024年

*******************************

[rewrite_local]
# >试卷扫描-拍照清除笔迹，还原空白试卷，错题标记重组（永久会员）
^https?:\/\/appss.baomingding.com\/\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sjsm.js

[mitm] 
hostname = appss.baomingding.com

*******************************/


var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.result.type = "VIP";
obj.result.freeFlag = "YES";
obj.result.vipExpireDays = 99999999999;
obj.result.vipExpireTime = "2999-01-01 00:00:00";
obj.result.vipGroupInfos = [
   {
    "groupType" : "TYPE_ONE",
    "vipType" : "VIP",
    "autoPay" : "YES"
  }
];

aFengYe = JSON.stringify(obj);
$done(aFengYe);