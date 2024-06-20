/******************************

脚本名称: itunestest
下载地址：商店
脚本作者：Mikephie
更新时间：2024年6月15日 15:56
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/everplay.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "status" : 1,
  "user" : {
    "userid" : "468807",
    "avatar" : "https://avatar.account.idaddy.cn/avatar/inner4/image/240514/c33ac566.jpg",
    "is_vip" : true,
    "nickname" : "Mikephie🎖",
    "invited_count" : 0,
    "vip_name" : "永久VIP",
    "vip_status" : "已解锁",
    "invitation_code" : "Rnik666",
    "sex" : 0
  }
}
  

$done({body : JSON.stringify(mikephie)});