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

    mikephie = {
  "msg" : "success",
  "data" : {
    "isEligible" : true,
    "isSubscribing" : true,
    "productId" : "subscription_year",
    "expireTime" : "4092599349000",
    "isYearlyConversion" : true
  },
  "code" : 0
}

$done({body : JSON.stringify(mikephie)});