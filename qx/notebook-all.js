/*  notebook
     @Mike

[rewrite_local] 
^https://notebook.zoho.com/api/v1/userprofile/accounts/payment?action=get_feature_template url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebook-all.js

[MITM]
hostname = notebook.zoho.com
*/

// 创建一个通用的功能模板生成函数
function createFeature(feature_name, feature_id, supported_platforms = ["android", "ios", "macos"], limits = null, source = "PAID") {
    let feature = {
        feature_name: feature_name,
        feature_id: feature_id,
        supported_platforms: supported_platforms,
        feature_meta_data: [
            {
                end_date: 3742762088000,
                grace_period: 999160000000,
                source: source,
                type: "PRIMARY",
                start_date: 1717644792301
            }
        ]
    };
    if (limits) {
        feature.feature_meta_data[0].limits = limits;
    }
    return feature;
}

// 构造返回数据
var mikephie = {
    code: 200,
    status: "Success",
    message: "User profile fetched successfully",
    feature_template: [
        createFeature("AUDIO_CARD", "com.zoho.notebook.audiocard", ["android", "ios"], [
            { value: "60", applied_for: "NOTE", name: "DURATION", unit: "MINUTES" }
        ]),
        createFeature("OCR", "com.zoho.notebook.ocr"),
        createFeature("CHAT_WITH_US", "com.zoho.notebook.support.chat"),
        createFeature("FLIGHT_CARD", "com.zoho.notebook.flight_card"),
        createFeature("EMAIL_IN", "com.zoho.notebook.email_in"),
        createFeature("CUSTOM_RECURRING_REMINDER", "com.zoho.notebook.reminder.custom"),
        createFeature("PREMIUM_COVERS", "com.zoho.notebook.covers.premium"),
        createFeature("NOTECARD", "com.zoho.notebook.notecard", ["android", "ios", "macos"], [
            { value: "100", applied_for: "NOTE", name: "VERSIONS", unit: "RESOURCES" },
            { value: "209715200", applied_for: "NOTE", name: "MAX_SIZE", unit: "BYTES" },
            { value: "1073741824", applied_for: "NOTE", name: "MAX_FILE_SIZE", unit: "BYTES" }
        ]),
        createFeature("STORAGE", "com.zoho.notebook.storage", ["android", "ios"], [
            { value: "107374182400", name: "MAX_SIZE", unit: "BYTES", user_type: "INDIVIDUAL_USER" }
        ]),
        createFeature("PHONE_SUPPORT", "com.zoho.notebook.support.phone_call"),
        createFeature("NOTEBOOK_SHARING", "com.zoho.notebook.sharing", ["android", "ios"], [
            { value: "CO_OWNER", applied_for: "NOTEBOOK", name: "PERMISSION", unit: "STRING" },
            { value: "WRITE_DELETE", applied_for: "NOTEBOARD", name: "PERMISSION", unit: "STRING" }
        ]),
        createFeature("SCAN_TABLE", "com.zoho.notebook.table.scan"),
        createFeature("TAG_SUGGESTIONS", "com.zoho.notebook.tags.suggestions"),
        createFeature("EXPORT_AS_PDF", "com.zoho.notebook.notecard.export_as_pdf", ["android", "ios", "macos", "windows"], null, "FREE"),
        createFeature("BCR", "com.zoho.notebook.bcr", ["android", "ios"]),
        createFeature("SMART_SEARCH", "com.zoho.notebook.search.smart_search"),
        createFeature("FEATURE_X", "com.zoho.notebook.feature_x", ["ios", "macos", "windows"], null, "FREE")
    ]
};

// 输出修改后的数据
$done({ body: JSON.stringify(mikephie) });