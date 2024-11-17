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
} else if (url.indexOf('feature/consumptions') !== -1) {
  var obj = JSON.parse(body);
  obj.feature_consumptions = [{
    "feature_id": "com.zoho.notebook.storage",
    "consumptions": [{
      "value": "5268006",
      "name": "SIZE",
      "unit": "BYTES",
      "user_type": "INDIVIDUAL_USER"
    }],
    "source": "PAID"
  }];
  body = JSON.stringify(obj);
} else if (url.indexOf('get_feature_template') !== -1) {
  var obj = JSON.parse(body);
  obj.feature_template = [
    "AUDIO_CARD", "OCR", "CHAT_WITH_US", "FLIGHT_CARD", "EMAIL_IN",
    "CUSTOM_RECURRING_REMINDER", "PREMIUM_COVERS", "NOTECARD", "STORAGE",
    "PHONE_SUPPORT", "NOTEBOOK_SHARING", "SCAN_TABLE", "TAG_SUGGESTIONS",
    "EXPORT_AS_PDF", "BCR", "SMART_SEARCH", "FEATURE_X"
  ].map(function(feature) {
    return {
      feature_name: feature,
      feature_id: "com.zoho.notebook." + feature.toLowerCase(),
      feature_meta_data: [{
        end_date: 3742762088000,
        source: (feature === "EXPORT_AS_PDF" || feature === "FEATURE_X") ? "FREE" : "PAID",
        type: "PRIMARY",
        start_date: 1717644792301,
        grace_period: 999160000000
      }]
    };
  });
  body = JSON.stringify(obj);
}

console.log("Modified body: " + body);
$done({body});