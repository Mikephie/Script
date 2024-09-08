/*************

项目名称：iTunes-系列解锁合集
更新日期：2024-09-08
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：如果脚本无效，请先排除是否脚本冲突
特别说明：此脚本可能会导致App Store无法登录ID
解决方法：关[MITM][脚本][代理工具]方法选一即可
已解锁App传送门：https://too.st/iTunes

**************

[rewrite_local]
^https?://buy.itunes.apple.com/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/iTunes.js

[mitm]
hostname = buy.itunes.apple.com

*************/

var mikephie = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const bundle_id = mikephie.receipt["bundle_id"] || mikephie.receipt["Bundle_Id"];
const yearid = `${bundle_id}.year`;
const yearlyid = `${bundle_id}.yearly`;
const yearlysubscription = `${bundle_id}.yearlysubscription`;

const list = {
  'com.iuuapp.audiomaker': [{product_id: 'com.iuuapp.audiomaker.cloud.year', ids: 'com.iuuapp.audiomaker.removeads'}],  //音频剪辑
  
};

// 更新内购数据变量
const product_id = "your_product_id"; // 根据需要提供 product_id 的值
const ids = "your_ids"; // 根据需要提供 ids 的值

const receipt = {
    "quantity": "1",
    "purchase_date_ms": "1723075688000",
    "expires_date": "2088-08-08 08:08:08 Etc/GMT",
    "expires_date_pst": "2088-08-08 08:08:08 America/Los_Angeles",
    "is_in_intro_offer_period": "false",
    "transaction_id": "888888888888888",
    "is_trial_period": "false",
    "original_transaction_id": "888888888888888",
    "purchase_date": "2024-08-08 08:08:08 Etc/GMT",
    "product_id": product_id,
    "ids": ids,
    "original_purchase_date_pst": "2024-08-08 08:08:08 America/Los_Angeles",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20431945",
    "original_purchase_date_ms": "1723075688000",
    "web_order_line_item_id": "888888888888888",
    "expires_date_ms": "3742762088000",
    "purchase_date_pst": "2024-08-08 08:08:08 America/Los_Angeles",
    "original_purchase_date": "2024-08-08 08:08:08 Etc/GMT"
};

const expirestime = { "expires_date": "2024-08-08 08:08:08 Etc/GMT", "expires_date_pst": "2024-08-08 08:08:08 America/Los_Angeles", "expires_date_ms": "3742762088000" };
let anchor = false;
let data;

// 核心内容处理
for (const i in list) {
  const regex = new RegExp(`^${i}`, `i`);
  if (regex.test(ua) || regex.test(bundle_id)) {
    const { id, ids, latest } = list[i];
    const receiptdata = Object.assign({}, receipt, { "product_id": id });

    // 处理数据
    data = [
      Object.assign({}, receiptdata, expirestime, { "product_id": ids || id })  // 使用ids，若没有则使用id
    ];

    // 处理核心收尾
    mikephie["receipt"]["in_app"] = data;
    mikephie["latest_receipt_info"] = data;
    mikephie["pending_renewal_info"] = [{ "product_id": id, "original_transaction_id": "888888888888888", "auto_renew_product_id": id, "auto_renew_status": "1" }];
    mikephie["latest_receipt"] = latest;

    anchor = true;
    console.log('恭喜您，已操作成功🎉🎉🎉n叮当猫の分享频道: https://t.me/chxm1023');
    break;
  }
}

// 如果没有匹配到 UA 或 bundle_id 使用备用方案
if (!anchor) {
  data = [Object.assign({}, receipt, expirestime)];
  mikephie["receipt"]["in_app"] = data;
  mikephie["latest_receipt_info"] = data;
  mikephie["pending_renewal_info"] = [{ "product_id": yearlyid, "original_transaction_id": "888888888888888", "auto_renew_product_id": yearlyid, "auto_renew_status": "1" }];
  mikephie["latest_receipt"] = "mikephie";
  console.log('很遗憾未能识别出UA或bundle_idn但已使用备用方案操作成功🎉🎉🎉n叮当猫の分享频道: https://t.me/mikephie');
}

mikephie["Telegram"] = "https://t.me/chxm1023";
mikephie["warning"] = "仅供学习，禁止转载或售卖";

$done({ body: JSON.stringify(mikephie) });