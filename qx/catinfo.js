/*        

catinfo


[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/.+\/offerings url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/catinfo.js

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