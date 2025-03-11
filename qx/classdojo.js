/*
📜 ✨ Classdojo ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0 url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js

[Script] // Surge
payments_vip = type=http-response, pattern=^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js, timeout=60

[Script] // Loon
http-response ^https:\/\/payments\.classdojo\.com\/v1\/subscribers\/5dc2e328587d3dcf1bee91e0 script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js, requires-body=true, timeout=60

[MITM]
hostname = payments.classdojo.com



/********** 主逻辑：解锁VIP **********/
const appName = "✨Classdojo✨";
const author  = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

// 主脚本函数...
let body = JSON.parse($response.body);

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            } else {
                // 修改 expires_date 的值
                if (key === 'expires_date') {
                    obj[key] = "2088-08-08T08:08:08Z";
                }
            }
        }
    }
}
modifyObject(body);
// 主脚本函数...

sNotify(appName, author, message, 10 * 60 * 1000);
if (typeof body === 'object') {
    $done({ body: JSON.stringify(body) });
} else {
    $done({ body });
}
