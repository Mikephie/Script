/*  notebook
     @Mike

[rewrite_local] 
^https:\/\/notebook\.zoho\.com\/api\/v1\/payments\/feature\/consumptions url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebook-storage.js


[MITM]
hostname = notebook.zoho.com
*/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "code" : 200,
  "status" : "Success",
  "message" : "Success",
  "feature_consumptions" : [
    {
      "feature_id" : "com.zoho.notebook.storage",
      "consumptions" : [
        {
          "value" : "5268006",
          "name" : "SIZE",
          "unit" : "BYTES",
          "user_type" : "INDIVIDUAL_USER"
        }
      ],
      "source" : "PAID"
    }
  ]
}

$done({body : JSON.stringify(mikephie)});
