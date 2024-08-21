/*
 *
 *
脚本功能：壁纸 - 精选高清墙纸图片和背景主题
软件版本：4.5.5
下载地址：苹果商店下载
脚本作者：
更新时间：2024年3月22日 
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/camtest.js

^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/camtestk.js

[mitm]
hostname = ap*.intsig.net
*
*
*/
 
let headers = $request.headers;
headers.x-is-token = "FA0D8D871DD849EBfL9Tg9dg";
headers.x-is-request-id = "60183A71-FA36-4B58-AC37-744D57657E21";
headers.x-is-cs-ept-d = "YgvDZ8SY8LGPoiikDxBTdw8vs13ojhJgyORVGX4X2RkOppl012e79Q8AeopjFre1";
$done({
  "headers": headers
});