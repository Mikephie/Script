/*

📜 PosterMaker 解锁 VIP 脚本
📅 更新时间：2024年03月08日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/dcdnposter\.leminet\.cn\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/postermaker.js

[mitm] 
hostname = dcdnposter.leminet.cn

*/


var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe); 

if($request.url.indexOf("/v01/login") != -1 || $request.url.indexOf("/v02/user/endpoint") != -1 || $request.url.indexOf("/v01/profile") != -1) {
    obj.data.vip = true;
    obj.data.vip_expire = 32472115200;
}


aFengYe = JSON.stringify(obj);
$done(aFengYe);