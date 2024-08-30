/*
AppRaven



[rewrite_local]


^https:\/\/apiv2\.vivipic\.com\/get-tx-info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/genpix.js

[mitm] 
hostname = apiv2.vivipic.com

**/

var body = $response.body;

body = body.replace(/"ai_credit":29988/g, '"ai_credit":8888888888');
body = body.replace(/"next_billing_time":```regex
\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/g,'"next_billing_time":2088-08-08 08:08:08.000Z');


$done({ body });