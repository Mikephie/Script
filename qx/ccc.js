/*  ccc
     @Mike



[rewrite_local]
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/vip\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ccc.js

[mitm] 
hostname = api-drive.mypikpak.com

*/


var mikephie = JSON.parse($response.body);

    mikephie.expire = "2088-08-08T08:08:08+08:00";
    mikephie.surplus_day = 88888
    

$done({body : JSON.stringify(mikephie)});