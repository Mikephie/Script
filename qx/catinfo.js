/*        
        ➪：脚本名称: 彩豆视频水印宝 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >彩豆视频水印宝 – 视频加水印制作视频剪辑（永久会员）
^https?:\/\/appss.baomingding.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cdsp.js

[mitm] 
hostname = %APPEND% api.revenuecat.com

*******************************/

const url = "https://api.revenuecat.com/v1/product_entitlement_mapping";
const headers = { ...$request.headers };
console.log(headers['user-agent']);
let params = {
    url:url,
    timeout:5000,
    headers:headers,
};
$httpClient.get(params, function(errormsg,response,data) {
    if (errormsg) {
        console.log(errormsg);
    } else {
        $notification.post('revenuecat', '信息已获取', data);
        console.log(JSON.parse(data));
    }
    $done();
});