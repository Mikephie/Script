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

if (url.indexOf('get_current_plan_detail') !== -1) {
    console.log("Matched URL for current plan detail");
    try {
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
    } catch (e) {
        console.log("Error in plan detail: " + e.message);
    }
} else if (url.indexOf('feature/consumptions') !== -1) {
    console.log("Matched URL for feature consumptions");
    try {
        var obj = JSON.parse(body);
        obj.feature_consumptions = [
            {
                "feature_id": "com.zoho.notebook.storage",
                "consumptions": [
                    {
                        "value": "107374182400", // 100 GB
                        "name": "SIZE",
                        "unit": "BYTES",
                        "user_type": "INDIVIDUAL_USER"
                    }
                ],
                "source": "PAID"
            },
            {
                "feature_id": "com.zoho.notebook.storage.5gb",
                "consumptions": [
                    {
                        "value": "5368709120", // 5 GB
                        "name": "SIZE",
                        "unit": "BYTES",
                        "user_type": "INDIVIDUAL_USER"
                    }
                ],
                "source": "PAID"
            },
            {
                "feature_id": "com.zoho.notebook.storage.10gb",
                "consumptions": [
                    {
                        "value": "10737418240", // 10 GB
                        "name": "SIZE",
                        "unit": "BYTES",
                        "user_type": "INDIVIDUAL_USER"
                    }
                ],
                "source": "PAID"
            },
            {
                "feature_id": "com.zoho.notebook.storage.50gb",
                "consumptions": [
                    {
                        "value": "53687091200", // 50 GB
                        "name": "SIZE",
                        "unit": "BYTES",
                        "user_type": "INDIVIDUAL_USER"
                    }
                ],
                "source": "PAID"
            },
            {
                "feature_id": "com.zoho.notebook.meeting",
                "consumptions": [
                    {
                        "value": "999999",
                        "name": "COUNT",
                        "unit": "NUMBER",
                        "user_type": "INDIVIDUAL_USER"
                    }
                ],
                "source": "PAID"
            }
        ];
        body = JSON.stringify(obj);
    } catch (e) {
        console.log("Error in feature consumptions: " + e.message);
    }
} else if (url.indexOf('get_feature_template') !== -1) {
    console.log("Matched URL for feature template");
    try {
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
    } catch (e) {
        console.log("Error in feature template: " + e.message);
    }
} else {
    console.log("URL did not match any known patterns");
}

console.log("Final body: " + body);
$done({body});
```

这个更新后的脚本包含以下改变：

1. 在 `feature/consumptions` 部分，增加了多个存储容量选项：
   - 5 GB
   - 10 GB
   - 50 GB
   - 100 GB（原有的）
2. 每个容量选项都有自己的 `feature_id`，这样可以在应用中显示不同的容量选择。
3. 保留了原有的会议功能（`com.zoho.notebook.meeting`）。
4. 其他部分（计划详情和功能模板）保持不变。

使用这个脚本：

1. 将这个脚本上传到您的 GitHub 仓库，替换原来的 `notetest.js` 文件。
2. 在 Quantumult X 中更新重写规则（如果需要的话）。
3. 重新加载 Quantumult X 的配置。
4. 清除 Zoho Notebook 应用的缓存。
5. 重新打开 Zoho Notebook 应用，检查是否显示了多个存储容量选项。

这个版本应该能让您测试不同的存储容量选项。如果在测试过程中遇到任何问题或需要进一步的调整，请随时告诉我。