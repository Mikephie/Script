
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
    // VIP 订阅
    var mikephie = JSON.parse(body);
    mikephie = {
        "code": 200,
        "status": "Success",
        "message": "User profile fetched successfully",
        "plan_details": [
            {
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
            }
        ]
    };
    body = JSON.stringify(mikephie);
} else if (url.indexOf('feature/consumptions') !== -1) {
    // 100G 空间
    var mikephie = JSON.parse(body);
    mikephie = {
        "code": 200,
        "status": "Success",
        "message": "Success",
        "feature_consumptions": [
            {
                "feature_id": "com.zoho.notebook.storage",
                "consumptions": [
                    {
                        "value": "107374182400",
                        "name": "SIZE",
                        "unit": "BYTES",
                        "user_type": "INDIVIDUAL_USER"
                    }
                ],
                "source": "PAID"
            }
        ]
    };
    body = JSON.stringify(mikephie);
} else if (url.indexOf('get_feature_template') !== -1) {
    // VIP 多项权益
    var mikephie = JSON.parse(body);
    mikephie = {
        "code": 200,
        "status": "Success",
        "message": "User profile fetched successfully",
        "feature_template": [
            {
                "feature_name": "AUDIO_CARD",
                "feature_id": "com.zoho.notebook.audio_card",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "OCR",
                "feature_id": "com.zoho.notebook.ocr",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "CHAT_WITH_US",
                "feature_id": "com.zoho.notebook.chat_with_us",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "FLIGHT_CARD",
                "feature_id": "com.zoho.notebook.flight_card",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "EMAIL_IN",
                "feature_id": "com.zoho.notebook.email_in",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "CUSTOM_RECURRING_REMINDER",
                "feature_id": "com.zoho.notebook.custom_recurring_reminder",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "PREMIUM_COVERS",
                "feature_id": "com.zoho.notebook.premium_covers",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "NOTECARD",
                "feature_id": "com.zoho.notebook.notecard",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "STORAGE",
                "feature_id": "com.zoho.notebook.storage",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "PHONE_SUPPORT",
                "feature_id": "com.zoho.notebook.phone_support",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "NOTEBOOK_SHARING",
                "feature_id": "com.zoho.notebook.notebook_sharing",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "SCAN_TABLE",
                "feature_id": "com.zoho.notebook.scan_table",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "TAG_SUGGESTIONS",
                "feature_id": "com.zoho.notebook.tag_suggestions",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "EXPORT_AS_PDF",
                "feature_id": "com.zoho.notebook.export_as_pdf",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "FREE",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "BCR",
                "feature_id": "com.zoho.notebook.bcr",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "SMART_SEARCH",
                "feature_id": "com.zoho.notebook.smart_search",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "PAID",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            },
            {
                "feature_name": "FEATURE_X",
                "feature_id": "com.zoho.notebook.feature_x",
                "feature_meta_data": [
                    {
                        "end_date": 3742762088000,
                        "source": "FREE",
                        "type": "PRIMARY",
                        "start_date": 1717644792301,
                        "grace_period": 999160000000
                    }
                ]
            }
        ]
    };
    body = JSON.stringify(mikephie);
}

console.log("Modified body: " + body);
$done({body});