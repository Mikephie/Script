/******************************

脚本名称: ringtonemaker 解锁VIP
下载地址：商店
脚本作者：Mikephie
更新时间：2024年6月15日 15:56
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^http:\/\/clip\.tto321\.cn\/v1\/api\/query\/userInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ringtonemaker.js

[mitm] 
hostname = clip.tto321.cn

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "msg" : "OK",
  "data" : {
    "uid" : 1001229,
    "userName" : "Mikephie",
    "wordRemain" : 88888,
    "payType" : 1,
    "inviteNums" : 0,
    "paintRemain" : 88888,
    "isVip" : 1,
    "expireTime" : "2088-08-08 08:08:08",
    "isTourst" : 0,
    "inviteCode" : "000000"
  },
  "code" : 200
}
  

$done({body : JSON.stringify(mikephie)});