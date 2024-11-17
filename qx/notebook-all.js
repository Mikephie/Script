/*  notebook
     @Mike

[rewrite_local] 
^https://notebook.zoho.com/api/v1/userprofile/accounts/payment?action=get_feature_template url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebook-all.js

[MITM]
hostname = notebook.zoho.com
*/

var mikephie = JSON.parse($response.body);

mikephie = {
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

$done({ body: JSON.stringify(mikephie) });