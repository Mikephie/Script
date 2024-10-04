/**************************************

// iTunes-系列解锁合集（合并版）
// 更新日期：2024-09-10
// 脚本作者：mikephie (重构与合并由 AI 辅助)
// 电报频道：https://t.me/mikephie

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/iTunes.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/

// 获取当前日期和时间
const now = new Date();
const PURCHASE_DATE_MS = now.getTime();  // 当前时间戳（毫秒）
const PURCHASE_DATE = now.toISOString().replace('T', ' ').split('.')[0] + " Etc/GMT";  // 当前日期，格式为 "YYYY-MM-DD HH:mm:ss Etc/GMT"

const EXPIRES_DATE_MS = "3742762088000";   // 2088-08-08 08:08:08 GMT
const EXPIRATION_DATE = "2088-08-08 08:08:08 Etc/GMT";
const TRANSACTION_ID = "300002000603223";

const appList = {
  // 应用列表
  'ScreenRecord': { method: 'v1', product_id: 'https://t.me/mikephie' },
  // 其他应用...
};

function createReceiptV1(productId) {
  return {
    "quantity": "1",
    "purchase_date_ms": PURCHASE_DATE_MS,
    "expires_date": EXPIRATION_DATE,
    "expires_date_pst": EXPIRATION_DATE.replace("Etc/GMT", "America/Los_Angeles"),
    "is_in_intro_offer_period": "false",
    "transaction_id": TRANSACTION_ID,
    "is_trial_period": "false",
    "original_transaction_id": TRANSACTION_ID,
    "purchase_date": PURCHASE_DATE,
    "product_id": productId,
    "original_purchase_date_pst": PURCHASE_DATE.replace("Etc/GMT", "America/Los_Angeles"),
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20431945",
    "original_purchase_date_ms": PURCHASE_DATE_MS,
    "web_order_line_item_id": TRANSACTION_ID,
    "expires_date_ms": EXPIRES_DATE_MS,
    "purchase_date_pst": PURCHASE_DATE.replace("Etc/GMT", "America/Los_Angeles"),
    "original_purchase_date": PURCHASE_DATE
  };
}

function main() {
  const originalResponse = JSON.parse($response.body);
  const processedResponse = {
    ...originalResponse,
    "current_time": PURCHASE_DATE,  // 当前时间
    "Telegram": "https://t.me/mikephie",
    "warning": "仅供学习，禁止转载或售卖"
  };

  $done({ body: JSON.stringify(processedResponse) });
}

main();