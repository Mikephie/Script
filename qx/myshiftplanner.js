/*
#!name= ✨ MyShiftPlanner ✨
#!desc=工作排期 - 需试用
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/myshiftplanner.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https:\/\/myshiftplannercloud-live\.azurewebsites\.net\/api\/Purchase\/(validatereceipt|Get)\/?.* url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/myshiftplanner.js

[MITM]
hostname = myshiftplannercloud-live.azurewebsites.net

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "MyShiftPlanner_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨MyShiftPlanner✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ⓿❽-⓿❽-❷⓿❽❽");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
let body = JSON.parse($response.body);

// 统一配置值
const fakeDateStr = "2088-08-08 08:08:08";
const fakeDateIso = "2088-08-08T08:08:08";
const fakeDateMs = 3742762088000;

// 尝试处理 Purchases 数组
if (body?.Purchases?.length > 0) {
  for (let item of body.Purchases) {
    // 通用字段修改
    item.expires_date = `${fakeDateStr} Etc/GMT`;
    item.expires_date_pst = `${fakeDateStr} America/Los_Angeles`;
    item.expires_date_ms = String(fakeDateMs);

    // 针对 Get 接口的字段
    item.ExpiryDate = fakeDateIso;
    item.LastExtendDate = fakeDateIso;

    // 统一试用标记为 false
    item.is_trial_period = "false";
    item.IsInTrial = false;
  }
}

$done({ body: JSON.stringify(body) });
// 主脚本函数...