/*  notebook
     @Mike

[rewrite_local] 
^https://notebook.zoho.com/api/v1/userprofile/accounts/payment?action=get_current_plan_detail&include_(expired_plans|purchase_platform)=(true|false) url script-response-body notebook.js

[MITM]
hostname = notebook.zoho.com
*/

// 解析原始响应
let response = JSON.parse($response.body);

// 检查并修改 plan_details 的内容
if (response.plan_details && response.plan_details.length > 0) {
    let plan = response.plan_details[0]; // 取第一个 plan
    plan.expiry_time = 3742762088000;
    plan.purchase_source = "notebook";
    plan.service_id = "107000";
    plan.source = "PAID";
    plan.plan_name = "Notebook Pro";
    plan.payment_frequency = 12;
    plan.grace_period = 999160000000;
    plan.notebook_plan_id = "com.zoho.notebook.pro";
    plan.plan_description = "Upgrade to Notebook Pro and stay more productive";
    plan.zoho_store_plan_id = 107102;
    plan.purchase_time = 1717644792301;
}

// 输出修改后的响应
$done({ body: JSON.stringify(response) });