/*  notebook
     @Mike

[rewrite_local] 
^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment url script-response-body notebookMac.js

[MITM]
hostname = notebook.zoho.com
*/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "code" : 200,
  "status" : "Success",
  "message" : "User profile fetched successfully",
  "plan_details" : [
    {
      "expiry_time" : 3742762088000,
      "purchase_source" : "notebook",
      "service_id" : "107000",
      "source" : "PAID",
      "plan_name" : "Notebook Pro",
      "payment_frequency" : 12,
      "service" : "NoteBook",
      "grace_period" : 999160000000,
      "notebook_plan_id" : "com.zoho.notebook.pro",
      "plan_description" : "Upgrade to Notebook Pro and stay more productive",
      "zoho_store_plan_id" : 107102,
      "purchase_time" : 1717644792301
    }
  ]

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
}

$done({body : JSON.stringify(mikephie)});
