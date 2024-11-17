/******************************

脚本名称: Notebook
下载地址：商店
脚本作者：Mikephie
更新时间：2024-06-08
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
# VIP 订阅, 100G 空间, Token
^https:\/\/(notebook\.zoho\.com\/api\/v1\/(userprofile\/accounts\/payment\?action=(get_current_plan_detail&include_(expired_plans=true|purchase_platform=false)|get_feature_template(&platform=ios)?|get_feature_template)|payments\/feature\/consumptions)|sdk-apptics\.zoho\.com\/sdk\/api\/apptics\/v1\/app\/bearertoken)$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notetest.js

# VIP 多项权益
^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment\?action=get_feature_template&platform=ios url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebook-all.js


[MITM]
hostname = notebook.zoho.com
*/

var url = $request.url;
var body = $response.body;

if (url.includes('get_current_plan_detail&include_expired_plans=true')) {
    // VIP 订阅逻辑
    body = handleSubscription(body);
} else if (url.includes('payments/feature/consumptions')) {
    // 100G 空间逻辑
    body = handleStorage(body);
} else if (url.includes('get_feature_template&platform=ios')) {
    // VIP 多项权益逻辑
    body = handleFeatures(body);
}

$done({ body });

function handleSubscription(body) {
    var obj = JSON.parse(body);
    obj = {
        "code": 200,
        "status": "Success",
        "message": "User profile fetched successfully",
        "plan_details": [{
            "expiry_time": 3742762088000,
            "purchase_source": "notebook",
            "service_id": "107000",
            "source": "PAID",
            "plan_name": "Notebook Pro",
            "payment_frequency": 12,
            "service": "NoteBook",
            "grace_period": 999160000000,
            "notebook_plan_id": "com.zoho.notebook.pro",
            "plan_description": "Upgrade to Notebook Pro and stay more productive",
            "zoho_store_plan_id": 107102,
            "purchase_time": 1717644792301
        }]
    };
    return JSON.stringify(obj);
}

function handleStorage(body) {
    var obj = JSON.parse(body);
    obj = {
        "code": 200,
        "status": "Success",
        "message": "Success",
        "feature_consumptions": [{
            "feature_id": "com.zoho.notebook.storage",
            "consumptions": [{
                "value": "5268006",
                "name": "SIZE",
                "unit": "BYTES",
                "user_type": "INDIVIDUAL_USER"
            }],
            "source": "PAID"
        }]
    };
    return JSON.stringify(obj);
}

function handleFeatures(body) {
    var obj = JSON.parse(body);
    obj = {
        "code": 200,
        "status": "Success",
        "message": "User profile fetched successfully",
        "feature_template": [
            "AUDIO_CARD", "OCR", "CHAT_WITH_US", "FLIGHT_CARD", "EMAIL_IN",
            "CUSTOM_RECURRING_REMINDER", "PREMIUM_COVERS", "NOTECARD", "STORAGE",
            "PHONE_SUPPORT", "NOTEBOOK_SHARING", "SCAN_TABLE", "TAG_SUGGESTIONS",
            "EXPORT_AS_PDF", "BCR", "SMART_SEARCH", "FEATURE_X"
        ].map(feature => ({
            feature_name: feature,
            feature_id: `com.zoho.notebook.${feature.toLowerCase()}`,
            feature_meta_data: [{
                end_date: 3742762088000,
                source: feature === "EXPORT_AS_PDF" || feature === "FEATURE_X" ? "FREE" : "PAID",
                type: "PRIMARY",
                start_date: 1717644792301,
                grace_period: 999160000000
            }]
        }))
    };
    return JSON.stringify(obj);
}