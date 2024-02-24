/*
Nicegram
[rewrite_local]
https://nicegram.cloud/api/v6/telegram/auth|user|info url script-response-body nicegram.js

[mitm]
hostname = nicegram.cloud
*/

var body = $response.body;

body = body.replace(/"store_subscription":false/g, '"store_subscription":true');

body = body.replace(/"lifetime_subscription":false/g,'"lifetime_subscription":true');

body = body.replace(/"subscription":false/g,'"subscription":true');

$done({ body });