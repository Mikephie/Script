/*
#!name= ✨ 婚礼精选 ✨
#!desc=图像编辑
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/hljx.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/love\.leminet\.cn\/golove\/v05\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hljx.js

[MITM]
hostname = love.leminet.cn

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "婚礼精选_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨婚礼精选✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ❷❾-❾❾-❷❾❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
try {
    var body = JSON.parse($response.body);

    body = {
      "success" : true,
      "data" : {
        "id" : 1163222,
        "phone" : "",
        "balance" : 888888,
        "is_guest" : 0,
        "avatar" : "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
        "city_id" : 0,
        "group_id" : 1,
        "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjE5ODY3MjQsInN0YXR1cyI6MSwidXNlcl9pZCI6MTE2MzIyMn0.QcqjpzCLTJ3f1bP_TH1yzxqHqRTCTAOoamnsoyUuOIk",
        "username" : "MIKEPHIE",
        "is_admin" : 0,
        "email" : "888@gmail.com",
        "untried" : false,
        "vip_expire" : 3742762088000
      }
    };

    $done({ body: JSON.stringify(body) });
} catch (e) {
    $done({ body: $response.body });
}
// 主脚本函数...