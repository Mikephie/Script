/*

📜 Miraa 解锁 VIP 脚本
📅 更新时间：2024年8月15日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/(api|pay)\.myoland\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/miraa.js

[mitm]
hostname = api.myoland.com, pay.myoland.com

*/

let body = $response.body;

try {
    if (isJSON(body)) {
        let obj = JSON.parse(body);

        // 解锁逻辑
        obj.quota = 9999999999; // 无限配额
        obj.exp = "2222-02-22T22:22:22Z"; // 永久有效期

        body = JSON.stringify(obj);
    }
} catch (err) {
    console.log("❌ Miraa 脚本执行错误：", err);
}

$done({ body });

// 检查是否为 JSON 格式
function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch {
        return false;
    }
}