
/******************************

脚本名称: Notebook
下载地址：商店
脚本作者：Mikephie
更新时间：2024-06-08
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
# VIP 订阅, 多种容量选项, VIP 多项权益
^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment\?action=get_current_plan_detail&include_expired_plans=true url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notetest.js
^https:\/\/notebook\.zoho\.com\/api\/v1\/payments\/feature\/consumptions url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notetest.js
^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment\?action=get_feature_template&platform=ios url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notetest.js


[MITM]
hostname = notebook.zoho.com
*/

var body = $response.body;
var url = $request.url;

console.log("Script started");
console.log("URL: " + url);
console.log("Original body: " + body);

function modifyResponse(obj) {
    // 保留原始结构，只修改必要的字段
    if (obj.plan_details) {
        obj.plan_details.forEach(plan => {
            plan.source = "PAID";
            plan.is_active = true;
            plan.is_expired = false;
            plan.expiry_time = 3742762088000;
            plan.grace_period = 999160000000;
        });
    }
    
    if (obj.feature_consumptions) {
        obj.feature_consumptions.forEach(feature => {
            if (feature.feature_id === "com.zoho.notebook.storage") {
                feature.consumptions.forEach(consumption => {
                    if (consumption.name === "SIZE") {
                        consumption.value = "107374182400"; // 100 GB
                    }
                });
            }
        });
    }
    
    if (obj.feature_template) {
        obj.feature_template.forEach(feature => {
            feature.feature_meta_data.forEach(meta => {
                meta.source = "PAID";
                meta.end_date = 3742762088000;
                meta.grace_period = 999160000000;
            });
        });
    }
    
    return obj;
}

try {
    var obj = JSON.parse(body);
    console.log("Parsed original object:", JSON.stringify(obj));
    
    obj = modifyResponse(obj);
    
    body = JSON.stringify(obj);
    console.log("Modified body:", body);
} catch (e) {
    console.log("Error occurred: " + e.message);
}

$done({body});