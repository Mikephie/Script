/*************************************

项目名称：Nicegram
下载地址：https://t.cn/A6ou0MCe
脚本作者：mikephie
电报频道：https://t.me/mikephie
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/restore-access\.indream\.app\/restoreAccess url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/Mike_nicegram.js

[mitm]
hostname = restore-access.indream.app

*************************************/


const isQX = typeof $task != "undefined";
const mikephie = {"data":{"premiumAccess": true}};
console.log('已操作成功🎉\n叮当猫の分享频道: https://t.me/mikephie');
$done({status: isQX ? "HTTP/1.1 200 OK" : 200, headers: $response.headers, body: JSON.stringify(mikephie)});
