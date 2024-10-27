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


// 假设 body 已经有一些内容，先解析它
let body = JSON.parse($response.body);

// 添加或更新字段
body.data = {
  ...body.data,
  "isEligible": true,
  "isSubscribing": true,
  "productId": "subscription_year",
  "expireTime": "4092599349000",
  "isYearlyConversion": true
};

// 将修改后的对象转换回 JSON 格式并返回
$done({ body: JSON.stringify(body) });