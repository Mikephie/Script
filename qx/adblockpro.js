/*

📜 AdblockPro 解锁 VIP 脚本
📅 更新时间：2024年11月09日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api\.adblockpro\.app\/verify url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js

[MITM]
hostname = api.adblockpro.app

*/
 

let body = JSON.parse($response.body);

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'number' && obj[key] === 0) {
                obj[key] = 1;
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            }
        }
    }
}

// Modify the object
modifyObject(body);

// Additional modifications as per your requirements
if (body.hasOwnProperty('v')) {
    body.v = true;  // Keeping 'v' as true since it's already true in the original
}

$done({ body: JSON.stringify(body) });