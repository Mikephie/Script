/*

📜 KKyun 解锁 VIP 脚本
📅 更新时间：2024年03月08日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/kkyun.com\/api\/(accounts\/user|apps/start_task).*$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/kkyun.js

[mitm] 
hostname = kkyun.com

*/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "status" : 1,
  "user" : {
    "userid" : "469132",
    "avatar" : "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
    "is_vip" : true,
    "nickname" : "Mikephie🎖",
    "invited_count" : 0,
    "vip_name" : "永久VIP",
    "vip_status" : "2088-08-08",
    "invitation_code" : "469132",
    "sex" : 0
  },
  "splash_flow" : [
    "bu",
    "kk"
  ],
  "is_trial" : true,
  "apple_id" : "1594114573",
  "message" : "正常启动",
  "ad_show" : true,
  "need_upgrade" : false,
  "show_extracting_video" : true,
  "banner_ad_show" : false,
  "is_review" : false,
  "flow" : [
    "bu",
    "gad"
  ],
  "wechat_number" : "q952180288",
  "status" : "1",
  "current_build" : "11"
  
}


$done({body : JSON.stringify(mikephie)});