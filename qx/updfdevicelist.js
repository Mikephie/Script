/*        
             ➪：脚本名称:   updfdevicelist 
            
     ꫛꫀꪝ  ：9 Sep 2024 at 22:24

            ★：解锁永久🆅🅸🅿

           𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 

[rewrite_local]
https:\/\/api\.updf\.com\/v1\/user\/(?:multiBindPersonalDevice|getPersonalDeviceList) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/updfdevicelist.js

[mitm]
hostname = *.updf.com

*************************************/

let headers = $request.headers;
delete headers['Device-Id'];
$done({ headers });
