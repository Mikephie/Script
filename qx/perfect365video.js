/*        
        ➪：脚本名称: Perfect365Video （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/video-svr\.perfect365\.com\/video\/P365Video\/services url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/perfect365video.js

[mitm]
hostname = video-svr.perfect365.com

*******************************/


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