/*        
        ➪：脚本名称: 彩豆视频水印宝 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >作业批改-家长辅导作业工具（永久会员）
https?:\/\/appss.rhinoxlab.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cdsp-2.js

[mitm] 
hostname = appss.rhinoxlab.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "result" : {
    "headImg" : "https://zdimg.lifeweek.com.cn/app/20230410/16811146599505136.jpg",
    "dataId" : "00000000000000000000",
    "wordage" : 888,
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
    "vipExpireTime" : "2888-08-08 09:09:09",
    "vipExpireDays" : 99999999,
    "registerTime" : "2022-09-09 03:20:32",
    "nickname" : "https://t.me/GieGie777",
    "remainTimeSeconds" : 99999,
    "realnameStatus" : "NO",
    "times" : 88888
  },
  "returnCode" : "200",
  "timeOut" : false
}

$done({body : JSON.stringify(mikephie)});