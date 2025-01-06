/*
试卷100解锁VIP
2025.1.06

[rewrite_local]
^https:\/\/paper\.zjapp\.xyz\/api\/v1\/product\/receipt\/verify url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sj100-5.js

[mitm]
hostname = paper.zjapp.xyz
*/

// 1. 解析原始响应
let obj = JSON.parse($response.body);

// 2. 修改 data.info.receipt.in_app
if (Array.isArray(obj?.data?.info?.receipt?.in_app)) {
  obj.data.info.receipt.in_app.forEach(item => {
    item.expires_date      = "2088-08-08 08:08:08 Etc/GMT";
    item.expires_date_pst  = "2088-08-08 08:08:08 America/Los_Angeles";
    item.expires_date_ms   = "3742762088000";
    item.is_trial_period   = "false"; 
    item.is_in_intro_offer_period = "false";
    // ... 你想改别的字段也可以在这里写
  });
}

// 3. 修改 data.info.latest_receipt_info
if (Array.isArray(obj?.data?.info?.latest_receipt_info)) {
  obj.data.info.latest_receipt_info.forEach(item => {
    item.expires_date      = "2088-08-08 08:08:08 Etc/GMT";
    item.expires_date_pst  = "2088-08-08 08:08:08 America/Los_Angeles";
    item.expires_date_ms   = "3742762088000";
    item.is_trial_period   = "false";
    item.is_in_intro_offer_period = "false";
  });
}

// 4. 可选，修改 data.info.pending_renewal_info
if (Array.isArray(obj?.data?.info?.pending_renewal_info)) {
  obj.data.info.pending_renewal_info.forEach(item => {
    // 比如想让 auto_renew_status 一直=1
    if (item.product_id === "paper100_svip_weekly_38") {
      item.auto_renew_status = "1";
    }
    // 你还可改 expiration_intent 等字段
    // ...
  });
}

// 5. 也可以改 data.info.latest_receipt 这个字符串
// if (typeof obj?.data?.info?.latest_receipt === "string") {
//   obj.data.info.latest_receipt = "xxxxxx";
// }

// 最后输出
$done({ body: JSON.stringify(obj) });