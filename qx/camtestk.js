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
headers.cookie = "_clsk=1e3ji69%7C1723606564421%7C1%7C1%7Cw.clarity.ms%2Fcollect; _ga_70F8QP140X=GS1.1.1723606552.4.1.1723606558.0.0.0; _ga=GA1.1.347029008.1723476322; _clck=8lm7fs%7C2%7Cfob%7C0%7C1685";
headers.authorization = "qq_60cabdacf608480aa95663ab8f0f1ab5__";
headers.deviceid = "902C611A-A12A-4D48-9DEF-562EF8155908";
$done({
  "headers": headers
});