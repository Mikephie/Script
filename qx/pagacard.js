/*

📜 PAGAcard 解锁 VIP 脚本
📅 更新时间：2024年03月08日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

*/

let res = $response;

// 原始数据
let data = JSON.parse(res.body);

// 检查并修改数据
data.userData.profileProgress.hasUserBVNProfile = true;

// 遍历 featureStatuses 对象，将所有 false 值改为 true
for (let key in data.featureStatuses) {
    if (data.featureStatuses[key] === false) {
        data.featureStatuses[key] = true;
    }
}

// 将修改后的数据设置为响应体
res.body = JSON.stringify(data);

// 发送修改后的响应
$done(res);