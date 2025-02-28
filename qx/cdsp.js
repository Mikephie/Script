/*

📜 彩豆视频水印宝 解锁 VIP 脚本
📅 更新时间：2024年10月28日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >彩豆视频水印宝 – 视频加水印制作视频剪辑（永久会员）
^https?:\/\/appss.baomingding.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cdsp.js

[mitm] 
hostname = appss.baomingding.com

*/


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