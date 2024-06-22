/*        
        ➪：脚本名称:   ring66 更新时间 ：23 Jun 2024 at 01:04

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 
[rewrite_local]
^https?:\/\/ifttt\.com\/api\/v3\/graph url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/IFTTT.js

[MITM]
hostname = 

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "status": 1,
  "user": {
    "userid": "469132",
    "is_vip": true,
    "avatar": "https://kkyun.com/ring/image/1718938895.jpeg",
    "nickname": "****",
    "invited_count": 0,
    "vip_status": "轻松玩转铃声音视频",
    "vip_name": "开启所有高级功能",
    "invitation_code": "469132",
    "sex": 0
  }
}

$done({body : JSON.stringify(mikephie)});