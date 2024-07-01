/*  notebook
     @Mike

[rewrite_local] 
^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment\?action=get_current_plan_detail&include_purchase_platform=false url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebookMac1.js

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
}

$done({body : JSON.stringify(mikephie)});
