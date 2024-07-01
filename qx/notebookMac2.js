/*  notebook
     @Mike

[rewrite_local] 
^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment\?action=get_feature_template url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebookMac2.js

[MITM]
hostname = notebook.zoho.com
*/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "code" : 200,
  "status" : "Success",
  "message" : "User profile fetched successfully",
  "feature_template" : [
    {
      "feature_name" : "AUDIO_CARD",
      "feature_id" : "com.zoho.notebook.audiocard",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "limits" : [
            {
              "value" : "60",
              "applied_for" : "NOTE",
              "name" : "DURATION",
              "unit" : "MINUTES"
            }
          ],
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301,
          "grace_period" : 999160000000
        }
      ]
    },
    {
      "feature_name" : "OCR",
      "feature_id" : "com.zoho.notebook.ocr",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "feature_name" : "CHAT_WITH_US",
      "feature_id" : "com.zoho.notebook.support.chat",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "feature_name" : "FLIGHT_CARD",
      "feature_id" : "com.zoho.notebook.flight_card",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "feature_name" : "EMAIL_IN",
      "feature_id" : "com.zoho.notebook.email_in",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "feature_name" : "CUSTOM_RECURRING_REMINDER",
      "feature_id" : "com.zoho.notebook.reminder.custom",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "feature_name" : "PREMIUM_COVERS",
      "feature_id" : "com.zoho.notebook.covers.premium",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "feature_name" : "NOTECARD",
      "feature_id" : "com.zoho.notebook.notecard",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "limits" : [
            {
              "value" : "100",
              "applied_for" : "NOTE",
              "name" : "VERSIONS",
              "unit" : "RESOURCES"
            },
            {
              "value" : "209715200",
              "applied_for" : "NOTE",
              "name" : "MAX_SIZE",
              "unit" : "BYTES"
            },
            {
              "value" : "1073741824",
              "applied_for" : "NOTE",
              "name" : "MAX_FILE_SIZE",
              "unit" : "BYTES"
            }
          ],
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301,
          "grace_period" : 999160000000
        }
      ]
    },
    {
      "feature_name" : "STORAGE",
      "feature_id" : "com.zoho.notebook.storage",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "limits" : [
            {
              "value" : "107374182400",
              "name" : "MAX_SIZE",
              "unit" : "BYTES",
              "user_type" : "INDIVIDUAL_USER"
            }
          ],
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301,
          "grace_period" : 999160000000
        }
      ]
    },
    {
      "feature_name" : "PHONE_SUPPORT",
      "feature_id" : "com.zoho.notebook.support.phone_call",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "feature_name" : "NOTEBOOK_SHARING",
      "feature_id" : "com.zoho.notebook.sharing",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "limits" : [
            {
              "value" : "CO_OWNER",
              "applied_for" : "NOTEBOOK",
              "name" : "PERMISSION",
              "unit" : "STRING"
            },
            {
              "value" : "CO_OWNER",
              "applied_for" : "COLLECTION",
              "name" : "PERMISSION",
              "unit" : "STRING"
            },
            {
              "value" : "CO_OWNER",
              "applied_for" : "NOTECARD",
              "name" : "PERMISSION",
              "unit" : "STRING"
            },
            {
              "value" : "WRITE_DELETE",
              "applied_for" : "NOTEBOARD",
              "name" : "PERMISSION",
              "unit" : "STRING"
            },
            {
              "value" : "READ_WRITE",
              "applied_for" : "WHITEBOARD",
              "name" : "PERMISSION",
              "unit" : "STRING"
            }
          ],
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301,
          "grace_period" : 999160000000
        }
      ]
    },
    {
      "supported_platforms" : [
        "android",
        "ios",
        "macos"
      ],
      "feature_id" : "com.zoho.notebook.table.scan",
      "feature_name" : "SCAN_TABLE",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "feature_name" : "TAG_SUGGESTIONS",
      "feature_id" : "com.zoho.notebook.tags.suggestions",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "supported_platforms" : [
        "android",
        "ios",
        "macos",
        "windows"
      ],
      "feature_id" : "com.zoho.notebook.notecard.export_as_pdf",
      "feature_name" : "EXPORT_AS_PDF",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "FREE",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "supported_platforms" : [
        "android",
        "ios"
      ],
      "feature_id" : "com.zoho.notebook.bcr",
      "feature_name" : "BCR",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "supported_platforms" : [
        "android",
        "ios",
        "macos"
      ],
      "feature_id" : "com.zoho.notebook.search.smart_search",
      "feature_name" : "SMART_SEARCH",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "supported_platforms" : [
        "ios",
        "macos",
        "android"
      ],
      "feature_id" : "com.zoho.notebook.notecard.widget",
      "feature_name" : "Add Note as Widget",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "FREE",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "feature_name" : "WHITEBOARD",
      "feature_id" : "com.zoho.notebook.whiteboard",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "grace_period" : 999160000000,
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301
        }
      ]
    },
    {
      "feature_name" : "VIDEO_CARD",
      "feature_id" : "com.zoho.notebook.videocard",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "limits" : [
            {
              "value" : "1800",
              "applied_for" : "NOTE",
              "name" : "DURATION",
              "unit" : "SECONDS"
            }
          ],
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301,
          "grace_period" : 999160000000
        }
      ]
    },
    {
      "feature_name" : "NESTED_COLLECTION",
      "feature_id" : "com.zoho.notebook.nested_collection",
      "feature_meta_data" : [
        {
          "end_date" : 3742762088000,
          "limits" : [
            {
              "value" : "5",
              "applied_for" : "COLLECTION",
              "name" : "MAX_DEPTH",
              "unit" : "INTEGER"
            }
          ],
          "source" : "PAID",
          "type" : "PRIMARY",
          "start_date" : 1717644792301,
          "grace_period" : 999160000000
        }
      ]
    }
  ]
}

$done({body : JSON.stringify(mikephie)});
