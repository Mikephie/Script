/*
AppRaven



[rewrite_local]


^https:\/\/apiv2\.vivipic\.com\/get-tx-info url script-response-body

[mitm]

hostname = apiv2.vivipic.com

**/

var body = $response.body;

body = body.replace(/"ai_credit":d/g, '"ai_credit":8888888888');
body = body.replace(/"next_billing_time":```regex
\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/g,'"next_billing_time":true');
body = body.replace(/"youOwn":false/g,
'"youOwn":true');
body = body.replace(/"arcade":false/g,
'"arcade":true');

body = body.replace(/"preorder":false/g,
'"preorder":true');

$done({ body });