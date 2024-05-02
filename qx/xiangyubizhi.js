lost @dream *
香芋壁纸 自己 Unlocks vip

QuantumultX:

[rewrite_local]
https://sdk.xiangyubizhi.com/(v2/front/photo/getOne|v2/front/member/info) url script-response-body xywall.js

***********************
[mitm]
hostname = sdk.xiangyubizhi.com


*/
var body = $response.body
 .replace(/"vip":\s*\d/g, '"vip":1')
  .replace(/"vipName":\s*\w+/g, `"vipName":"永久会员"`)
  .replace(/"endTime":\s*\w+/g, '"endTime":"2099-12-12"')
  .replace(/false/g, "true");
$done({ body });！