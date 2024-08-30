/*
AppRaven



[rewrite_local]


^https:\/\/apiv2\.vivipic\.com\/get-tx-info url script-response-body

[mitm]

hostname = apiv2.vivipic.com

**/

var body = $response.body;

body = body.replace(/"ai_credit":d/g, '"ai_credit":8888888888');
body = body.replace(/"hasInAppPurchases":false/g,'"hasInAppPurchases":true');
body = body.replace(/"youOwn":false/g,
'"youOwn":true');
body = body.replace(/"arcade":false/g,
'"arcade":true');

body = body.replace(/"preorder":false/g,
'"preorder":true');

$done({ body });