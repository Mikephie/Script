/*
BodyOk 4.1.9 
间歇性断食追踪
表盘商店

[rewrite_local]
^https:\/\/api\.apphud\.com\/v1\/(subscriptions|customers)$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bodyok.js

[mitm]
hostname = api.apphud.com

*/
var body = $response.body;
var url = $request.url;

function baby(obj) {
    return {
        "id": "35b17464-3ef5-46fe-9f76-ed87925488e0",
        "group_id": "d800a2af",
        "unit": "year",
        "autorenew_enabled": false,
        "expires_at": "2088-08-08T11:05:44.000Z",
        "in_retry_billing": false,
        "introductory_activated": true,
        "cancelled_at": null,
        "platform": "ios",
        "product_id": "AFYS",
        "retries_count": 0,
        "started_at": "2024-08-14T02:22:03.000Z",
        "local": false,
        "next_check_at": "2024-08-17T02:29:03.000Z",
        "kind": "autorenewable",
        "units_count": 1,
        "environment": "production",
        "status": "trial"
    };
}

var obj = JSON.parse(body);

if (url.includes('/subscriptions')) {
    if (obj.data.hasOwnProperty('subscriptions')) {
        obj.data.subscriptions = [baby(obj)];
    }
} else if (url.includes('/customers')) {
    if (obj.data.results.hasOwnProperty('subscriptions')) {
        obj.data.results.subscriptions = [baby(obj)];
    }
}

body = JSON.stringify(obj);
$done({ body, url });
