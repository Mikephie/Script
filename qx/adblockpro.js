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

// Assuming the response body contains a JSON string
let obj = JSON.parse($response.body);

// Modify the values of certain fields
obj['p'] = 1;
obj['s'] = 1;
obj['l'] = 1;
obj['t'] = 1;
obj['e'] = 1;
obj['m'] = 1;
obj['f'] = 1;

// Finalize the response with the modified body
$done({body: JSON.stringify(obj)});