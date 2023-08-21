/*************************************

项目名称：AdGuard-Safari浏览器扩展
下载地址：https://t.cn/A6xe1oaK
脚本作者：mikephie
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]

^https:\/\/mobile-api\.adguard\.org\/api\/.+\/ios_validate_receipt\/(.*?) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/Mike_AdGuard.js

[mitm]
hostname = mobile-api.adguard.org

*************************************/


var mikephie = JSON.parse($response.body);

mikephie = {"products":[{"premium_status":"ACTIVE","product_id":"com.adguard.lifetimePurchase"}]}

$done({body : JSON.stringify(mikephie)});
