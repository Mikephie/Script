/*
📜 ✨ 婚贝请柬 ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/h5\.hunbei\.com\/m\/member\/getUserInfo\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbqj.js

[MITM]
hostname = h5.hunbei.com

*/

// 主脚本函数...
let body = $response.body;
if (!body) { $done({}); }

let data = JSON.parse(body);
data.data = {
    ...data.data,
    "vipState": true,
    "end_time": 3742762088,
    "allLifeVip": true,
    "tel": "8888888888",
    "status": 2,
    "level": 4,
    "card_count": 888,
    "card_10": {
        "count": 888,
        "amount": 888
    },
    "wx_name": "MIKEPHIE",
    "headimg": "https://i.ibb.co/wM5z10N/IMG-1287.jpg"
};
// 主脚本函数...

/********** 应用配置信息 **********/
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "婚贝请柬_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨婚贝请柬✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}

$done({ body: JSON.stringify(data) });