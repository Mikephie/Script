/******************************

脚本名称:   cycc
下载地址：商店
脚本作者：Mikephie
更新时间：2023年10月8日 18:40
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/cycc.js
[mitm] 

hostname = buy.itunes.apple.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1618185567,
    "app_item_id": 1618185567,
    "bundle_id": "com.agedstudio.word.puzzle.chengyucaicai",
    "application_version": "1.0",
    "download_id": 502845682460838640,
    "version_external_identifier": 859171021,
    "receipt_creation_date": "2023-10-07 08:10:02 Etc/GMT",
    "receipt_creation_date_ms": "1696666202000",
    "receipt_creation_date_pst": "2023-10-07 01:10:02 America/Los_Angeles",
    "request_date": "2023-10-08 10:24:21 Etc/GMT",
    "request_date_ms": "1696760661478",
    "request_date_pst": "2023-10-08 03:24:21 America/Los_Angeles",
    "original_purchase_date": "2023-10-07 08:09:54 Etc/GMT",
    "original_purchase_date_ms": "1696666194000",
    "original_purchase_date_pst": "2023-10-07 01:09:54 America/Los_Angeles",
    "original_application_version": "1.0",
    "in_app": [3]
  },
  "environment": "Production",
  "status": 0
}

$done({ body: JSON.stringify(mikephie) });