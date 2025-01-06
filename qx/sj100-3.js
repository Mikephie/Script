/*
合并脚本：试卷100解锁VIP
示例日期：2025.1.07

[rewrite_local]
^https:\/\/paper\.zjapp\.xyz\/api\/v1\/status\/list url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sj100-3.js
^https:\/\/paper\.zjapp\.xyz\/api\/v1\/product\/receipt\/verify url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sj100-3.js

[mitm]
hostname = paper.zjapp.xyz
*/

let obj = JSON.parse($response.body);

if ($request.url.includes("/status/list")) {
  // ---- 1. 处理 /status/list 接口 ----
  if (Array.isArray(obj?.data?.user_status_infos)) {
    let info = obj.data.user_status_infos[0];
    if (info) {
      // 设置 status=1，假设过期时间改成 2088-08-08
      info.status = 1;
      info.expire_at = 3742762088000; // 2088-08-08 08:08:08 => 毫秒

      // 修改 extra 里的 trial => false
      try {
        let extraObj = JSON.parse(info.extra);
        if (Array.isArray(extraObj?.products)) {
          extraObj.products.forEach(p => {
            p.trial = false; 
          });
        }
        info.extra = JSON.stringify(extraObj);
      } catch (e) {
        // 解析异常就不处理
      }
    }
  }

} else if ($request.url.includes("/product/receipt/verify")) {
  // ---- 2. 处理 /product/receipt/verify 接口 ----

  // 修改 data.info.receipt.in_app
  if (Array.isArray(obj?.data?.info?.receipt?.in_app)) {
    obj.data.info.receipt.in_app.forEach(item => {
      item.expires_date      = "2088-08-08 08:08:08 Etc/GMT";
      item.expires_date_pst  = "2088-08-08 08:08:08 America/Los_Angeles";
      item.expires_date_ms   = "3742762088000";
      item.is_trial_period   = "false"; 
      item.is_in_intro_offer_period = "false";
    });
  }

  // 修改 data.info.latest_receipt_info
  if (Array.isArray(obj?.data?.info?.latest_receipt_info)) {
    obj.data.info.latest_receipt_info.forEach(item => {
      item.expires_date      = "2088-08-08 08:08:08 Etc/GMT";
      item.expires_date_pst  = "2088-08-08 08:08:08 America/Los_Angeles";
      item.expires_date_ms   = "3742762088000";
      item.is_trial_period   = "false";
      item.is_in_intro_offer_period = "false";
    });
  }

  // （可选）如果想改 pending_renewal_info，类似这样：
  // if (Array.isArray(obj?.data?.info?.pending_renewal_info)) {
  //   obj.data.info.pending_renewal_info.forEach(item => {
  //     item.auto_renew_status = "1";
  //   });
  // }
}

// 输出修改后的结果
$done({ body: JSON.stringify(obj) });