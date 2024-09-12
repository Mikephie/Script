/*        
        ➪：脚本名称: Adblock Pro （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹


[rewrite_local]
^https:\/\/api\.adblockpro\.app\/verify url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js

[mitm]
hostname = api.adblockpro.app

*******************************/

let body = $response.body;
let parsedBody = JSON.parse(body);

// Iterate through the object and change all values of 0 to 1
for (let key in parsedBody) {
    if (parsedBody[key] === 0) {
        parsedBody[key] = 1;
    }
}

body = JSON.stringify(parsedBody);
$done(body);