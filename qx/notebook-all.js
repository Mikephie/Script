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
  "common_feature_metadata": {
    "start_date": 1717644792301,
    "end_date": 3742762088000,
    "grace_period": 999160000000,
    "source": "PAID",
    "type": "PRIMARY"
  },
  "feature_template": [
    {
      "feature_name": "AUDIO_CARD",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" },
        {
          "limits": [
            { "value": "60", "applied_for": "NOTE", "name": "DURATION", "unit": "MINUTES" }
          ]
        }
      ]
    },
    {
      "feature_name": "OCR",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" }
      ]
    },
    {
      "feature_name": "CHAT_WITH_US",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" }
      ]
    },
    {
      "feature_name": "FLIGHT_CARD",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" }
      ]
    },
    {
      "feature_name": "EMAIL_IN",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" }
      ]
    },
    {
      "feature_name": "CUSTOM_RECURRING_REMINDER",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" }
      ]
    },
    {
      "feature_name": "PREMIUM_COVERS",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" }
      ]
    },
    {
      "feature_name": "NOTECARD",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" },
        {
          "limits": [
            { "value": "100", "applied_for": "NOTE", "name": "VERSIONS", "unit": "RESOURCES" },
            { "value": "209715200", "applied_for": "NOTE", "name": "MAX_SIZE", "unit": "BYTES" },
            { "value": "1073741824", "applied_for": "NOTE", "name": "MAX_FILE_SIZE", "unit": "BYTES" }
          ]
        }
      ]
    },
    {
      "feature_name": "STORAGE",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" },
        {
          "limits": [
            { "value": "107374182400", "name": "MAX_SIZE", "unit": "BYTES", "user_type": "INDIVIDUAL_USER" }
          ]
        }
      ]
    },
    {
      "feature_name": "PHONE_SUPPORT",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" }
      ]
    },
    {
      "feature_name": "NOTEBOOK_SHARING",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" },
        {
          "limits": [
            { "value": "CO_OWNER", "applied_for": "NOTEBOOK", "name": "PERMISSION", "unit": "STRING" },
            { "value": "CO_OWNER", "applied_for": "COLLECTION", "name": "PERMISSION", "unit": "STRING" },
            { "value": "CO_OWNER", "applied_for": "NOTECARD", "name": "PERMISSION", "unit": "STRING" },
            { "value": "WRITE_DELETE", "applied_for": "NOTEBOARD", "name": "PERMISSION", "unit": "STRING" },
            { "value": "READ_WRITE", "applied_for": "WHITEBOARD", "name": "PERMISSION", "unit": "STRING" }
          ]
        }
      ]
    },
    {
      "supported_platforms": ["android", "ios", "macos"],
      "feature_id": "com.zoho.notebook.table.scan",
      "feature_name": "SCAN_TABLE",
      "feature_meta_data": [
        { "metadata_ref": "common_feature_metadata" }
      ]
    }
  ]
}

$done({ body: JSON.stringify(mikephie) });