/*************************************

项目名称：Filmix
下载地址：https://too.st/8Go
更新日期：2024-03-08
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/appv2\.filmix\.com\.cn\/api\/v\d\/users url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/filmix.js

[mitm]
hostname = appv2.filmix.com.cn

*************************************/


var mikephie = JSON.parse($response.body);

    mikephie = 文本

$done({body : JSON.stringify(mikephie)});