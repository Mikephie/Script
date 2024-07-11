/*
AppRaven



[rewrite_local]


https://appraven.net/appraven/graphql url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/AppRaven.js
[mitm] 

hostname = appraven.net

**/

var body = $response.body;

body = body.replace(/"isSVIP" : 0, '"isSVIP" : 1');
body = body.replace(/"isVIP" : 0, '"isVIP" : 1');
body = body.replace(/"youOwn":false/g,
'"youOwn":true');
body = body.replace(/"arcade":false/g,
'"arcade":true');

body = body.replace(/"preorder":false/g,
'"preorder":true');

$done({ body });