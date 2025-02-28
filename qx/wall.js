/*

📜 Wallcraft-动态壁纸 解锁 VIP 脚本
📅 更新时间：2024年12月06日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/billing-ios\.wallpaperscraft\.com\/(verify_receipt|products)\/remove_ads$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/wall.js

[mitm]
hostname = billing-ios.wallpaperscraft.com

*/


var chxm1023 = JSON.parse($response.body);
const vipa = '/verify_receipt/remove_ads';
const vipb = '/products/remove_ads';

if ($request.url.indexOf(vipa) != -1){
  chxm1023.items["all_time"] = {
    "type" : "nonconsumable",
    "is_active" : true
  };
  chxm1023.items["com.wallpaperscraft.wallpapers.year.1.5baks"] = {
    "type" : "subscription",
    "already_used_introductory_price" : false,
    "is_active" : true
  };
}

if ($request.url.indexOf(vipb) != -1){
  chxm1023 = {  "items" : {   "nonconsumables" : [  "all_time" ],   "subscriptions" : [  "com.wallpaperscraft.wallpapers.year.1.5baks" ]}};
}

$done({body : JSON.stringify(chxm1023)});