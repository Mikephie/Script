/*

📜 AskAI 解锁 VIP 脚本
📅 更新时间：2024年10月28日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/purchase-verifier\.cdwapi\.com\/ios url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/askai.js

[mitm]
hostname = purchase-verifier.cdwapi.com

*/


let body = JSON.parse($response.body);

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (key === 'purchased_product_identifiers') {
                    obj[key] = ["pro.lifetime"];
                } else {
                    modifyObject(obj[key]);
                }
            } else {
                // 修改指定字段的值
                if (key === 'isActive') {
                    obj[key] = true;
                }
                if (key === 'expiresAt') {
                    obj[key] = 3742762088000;
                }
                if (key === 'expires_at') {
                    obj[key] = 3742762088000;
                }
                if (key === 'productId') {
                    obj[key] = "pro.lifetime";
                }
                if (key === 'product_id') {
                    obj[key] = "pro.lifetime";
                }
                // 新增字段的修改
                if (key === 'is_family_share') {
                    obj[key] = true;
                }
                if (key === 'auto_renew_status') {
                    obj[key] = "0";
                }
                if (key === 'is_intro_offer') {
                    obj[key] = false;
                }
                if (key === 'is_trial') {
                    obj[key] = false;
                }
            }
        }
    }
    return obj;
}

// 修改对象
body = modifyObject(body);
$done({ body: JSON.stringify(body) });