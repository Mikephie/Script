/*        
        ➪：脚本名称: 边框水印大师 更新时间 ：23 Jun 2024 at 01:04

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
#^https?:\/\/photoby\.hasmash\.com\/app\/browseEvent url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/名.js

[MITM]
hostname = photoby.hasmash.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "status" : 1,
  "user" : {
    "userid" : "469132",
    "avatar" : "https://kkyun.com/ring/image/1718938895.jpeg",
    "is_vip" : true,
    "nickname" : "Mikephie🎖",
    "invited_count" : 0,
    "vip_name" : "永久VIP",
    "vip_status" : "已解锁",
    "invitation_code" : "Mikephie",
    "sex" : 0
  }
}
  

$done({body : JSON.stringify(mikephie)});