/*        
             ➪：脚本名称:   aloha 
            
     ꫛꫀꪝ  ：2024年8月15日 16:37

            ★：解锁永久🆅🅸🅿

           𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 

[rewrite_local]
^https:\/\/api\.alohaprofile\.com\/v1\/profile_info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aloha.js

[mitm]
hostname = api.alohaprofile.com

*************************************/

var mikephie = JSON.parse($response.body);

mikephie.data = {
    "end_of_premium": 3742762088000,
    "is_premium": true,
    "_end_of_premium": "2088-08-08 08:08:08",
};

$done({body : JSON.stringify(mikephie)});