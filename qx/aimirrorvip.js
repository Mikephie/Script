/*        
             ➪：脚本名称:   aimirrorvip 
            
     ꫛꫀꪝ  ：12 Sep 2024 at 06:03

            ★：解锁永久🆅🅸🅿

           𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 

[rewrite_local]
^https:\/\/be\.aimirror\.fun\/query_is_vip\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirrorvip.js

[mitm]
hostname = be.aimirror.fun

*************************************/

let body = $response.body;

 if (body === 'false') {
        body = 'true';

$done({ body });