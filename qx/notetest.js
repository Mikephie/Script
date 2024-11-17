/******************************

脚本名称: Notebook
下载地址：商店
脚本作者：Mikephie
更新时间：2024-06-08
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
# VIP 订阅, 100G 空间, VIP 多项权益
^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment\?action=get_current_plan_detail&include_expired_plans=true url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notetest.js


[MITM]
hostname = notebook.zoho.com
*/


var body = $response.body;
var url = $request.url;

if (url.indexOf('get_current_plan_detail') !== -1) {
  var obj = JSON.parse(body);
  obj.plan_details = [{
    "expiry_time": 3742762088000,
    "purchase_source": "notebook",
    "service_id": "107000",
    "source": "PAID",
    "plan_name": "Notebook Pro",
    "payment_frequency": 12,
    "service": "NoteBook",
    "grace_period": 999160000000,
    "notebook_plan_id": "com.zoho.notebook.pro",
    "plan_description": "Upgraded to Notebook Pro",
    "zoho_store_plan_id": 107102,
    "purchase_time": 1717644792301
  }];
  body = JSON.stringify(obj);
}

$done({body});