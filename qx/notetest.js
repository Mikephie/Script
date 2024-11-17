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
^https:\/\/notebook\.zoho\.com\/api\/v1\/(userprofile\/accounts\/payment\?action=get_(current_plan_detail&include_expired_plans=true|feature_template&platform=ios)|payments\/feature\/consumptions) url script-response-body your-script-https://raw.githubusercontent.com/Mikephie/Script/main/qx/notetest.js

# VIP 多项权益
#^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment\?action=get_feature_template&platform=ios url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebook-all.js


[MITM]
hostname = notebook.zoho.com
*/


var $ = new Env('ZohoNotebook');
var body = $response.body;
var url = $request.url;

$.log('Script started');
$.log('Request URL: ' + url);
$.log('Original response body: ' + body);

try {
  if (url.indexOf('get_current_plan_detail') !== -1) {
    $.log('Handling subscription');
    body = handleSubscription();
  } else if (url.indexOf('feature/consumptions') !== -1) {
    $.log('Handling storage');
    body = handleStorage();
  } else if (url.indexOf('get_feature_template') !== -1) {
    $.log('Handling features');
    body = handleFeatures();
  } else {
    $.log('No matching URL pattern');
  }

  $.log('Modified response body: ' + body);
} catch (e) {
  $.log('Error occurred: ' + e.stack);
}

$done({body: body});

function handleSubscription() {
  return JSON.stringify({
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
  });
}

function handleStorage() {
  return JSON.stringify({
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
  });
}

function handleFeatures() {
  var features = ["AUDIO_CARD", "OCR", "CHAT_WITH_US", "FLIGHT_CARD", "EMAIL_IN",
    "CUSTOM_RECURRING_REMINDER", "PREMIUM_COVERS", "NOTECARD", "STORAGE",
    "PHONE_SUPPORT", "NOTEBOOK_SHARING", "SCAN_TABLE", "TAG_SUGGESTIONS",
    "EXPORT_AS_PDF", "BCR", "SMART_SEARCH", "FEATURE_X"];
  
  var featureTemplate = features.map(function(feature) {
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

  return JSON.stringify({
    "code": 200,
    "status": "Success",
    "message": "User profile fetched successfully",
    "feature_template": featureTemplate
  });
}

function Env(t) {
  this.log = function(m) {
    console.log(m);
  };
}
```

这个版本做了以下改动：

1. 移除了异步操作，使用同步方式处理请求。
2. 简化了条件语句，使用 `indexOf` 替代 `includes`。
3. 将箭头函数改为普通函数声明。
4. 移除了一些可能导致问题的 ES6+ 特性。
5. 确保所有的 JSON 字符串都是有效的。

使用这个脚本时，请确保在 Quantumult X 中的重写规则如下：

```
^https:\/\/notebook\.zoho\.com\/api\/v1\/(userprofile\/accounts\/payment\?action=get_(current_plan_detail&include_expired_plans=true|feature_template&platform=ios)|payments\/feature\/consumptions) url script-response-body your-script-name.js
```

如果还是遇到 "invalid line" 错误，请尝试以下步骤：

1. 确保脚本文件以 UTF-8 编码保存，没有 BOM 头。
2. 检查脚本文件中是否有任何隐藏的特殊字符或额外的空行。
3. 尝试在文本编辑器中重新输入整个脚本，以排除可能的复制粘贴错误。

如果问题仍然存在，请提供更多关于错误的具体信息，例如：
- 错误信息中是否指出了具体的行号？
- Quantumult X 的日志中是否有更多的错误详情？

有了这些信息，我们就能更准确地定位和解决问题。