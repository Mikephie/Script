/*************************************
项目名称：图片转文字
更新日期：2024-09-22
脚本作者：Sheep
使用声明：⚠️仅供参考，🈲转载与售卖！
脚本说明：进入后点恢复购买，解锁会员

**************************************

[rewrite_local]
^http://api\.528529\.com/apple_product/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/tpzwz.js  
[mitm]
hostname = api.528529.com
*************************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "msg": "success",
  "data": [
    {
      "vip_type": "vip",
      "due_time": "2088-08-08 08:08:08",
      "isExpire": false,
      "isExist": true,
      "in_app": "[{\"quantity\": \"1\", \"product_id\": \"vip_1_year_auto\", \"transaction_id\": \"60002037256498\", \"original_transaction_id\": \"60002037256498\", \"purchase_date\": \"2024-09-21 18:00:50 Etc/GMT\", \"purchase_date_ms\": \"1726941650000\", \"purchase_date_pst\": \"2024-09-21 11:00:50 America/Los_Angeles\", \"original_purchase_date\": \"2024-09-21 18:00:51 Etc/GMT\", \"original_purchase_date_ms\": \"1726941651000\", \"original_purchase_date_pst\": \"2024-09-21 11:00:51 America/Los_Angeles\", \"expires_date\": \"2088-08-08 08:08:08 Etc/GMT\", \"expires_date_ms\": \"3742762088000\", \"expires_date_pst\": \"2088-08-08 08:08:08 America/Los_Angeles\", \"web_order_line_item_id\": \"60000900340093\", \"is_trial_period\": \"true\", \"is_in_intro_offer_period\": \"true\", \"in_app_ownership_type\": \"PURCHASED\"}]"
    }
  ],
  "code": 1
}

$done({body : JSON.stringify(mikephie)});