/*        
        ➪：脚本名称: Perfect365Video （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/video-svr\.perfect365\.com\/video\/P365Video\/services url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/perfect365video.js

[mitm]
hostname = video-svr.perfect365.com

*******************************/


var mikephie = JSON.parse($response.body);

mikephie.data = {
  ...mikephie.data,
  "isEligible" : true,
    "isSubscribing" : true,
    "productId" : "subscription_year",
    "expireTime" : "3742762088000",
    "isYearlyConversion" : true
};
 
$done({body: JSON.stringify(mikephie)});