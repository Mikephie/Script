/*        
             ➪：脚本名称:   updfdevicelist 
            
     ꫛꫀꪝ  ：9 Sep 2024 at 22:24

            ★：解锁永久🆅🅸🅿

           𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 

[rewrite_local]
^https:\/\/api\.weilaizhushou\.com\/base\/user\/vip\/getUserVip url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/updfdevicelist.js

[mitm]
hostname = api.weilaizhushou.com

*************************************/

let headers = $request.headers;
delete headers['Device-Id'];
$done({ headers });
