/*
AppRaven



[rewrite_local]


^https:\/\/apiv2\.vivipic\.com\/get-tx-info url script-response-body

[mitm]

hostname = apiv2.vivipic.com

**/
2024-09-02T21:56:51.000Z
2088-08-08 08:08:08.000Z
var body = $response.body;

body = body.replace(/"ai_credit":d/g, '"ai_credit":8888888888');
body = body.replace(/"next_billing_time":```regex
\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/g,'"next_billing_time":2088-08-08 08:08:08.000Z');


$done({ body });