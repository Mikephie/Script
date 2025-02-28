/*

📜 Perfect365Video 解锁 VIP 脚本
📅 更新时间：2024年03月08日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/video-svr\.perfect365\.com\/video\/P365Video\/services url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/perfect365video.js

[mitm]
hostname = video-svr.perfect365.com

*/


let body = JSON.parse($response.body);

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            } else {
                // 修改指定字段的值
                if (key === 'isEligible') {
                    obj[key] = true;
                }
                if (key === 'isSubscribing') {
                    obj[key] = true;
                }
                if (key === 'productId') {
                    obj[key] = "subscription_year";
                }
                if (key === 'expireTime') {
                    obj[key] = "3742762088000";
                }
                if (key === 'isYearlyConversion') {
                    obj[key] = true;
                }
            }
        }
    }
}

// 修改对象
modifyObject(body);
$done({ body: JSON.stringify(body) });