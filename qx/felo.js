/*        
          ➪：婚贝请柬 

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https:\/\/h5\.hunbei\.com\/m\/member\/getUserInfo\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbqj.js

[MITM]
hostname = h5.hunbei.com

*******************************/

var mikephie = JSON.parse($response.body);

mikephie.data = {
  ...mikephie.data,
  "vipState": true,
  "end_time": 3742762088,
  "allLifeVip": true,
  "status": 2,
  "level": 2,
  "wx_name": "Mikephie",
  "headimg": "https://i.ibb.co/wM5z10N/IMG-1287.jpg"
};
 
$done({body: JSON.stringify(mikephie)});