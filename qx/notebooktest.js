/*  notebook
     @Mike

[rewrite_local] 
^https://notebook.zoho.com/api/v1/userprofile/accounts/payment?action=get_current_plan_detail&include_(expired_plans|purchase_platform)=(true|false) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebooktest.js
^https:\/\/notebook\.zoho\.com\/api\/v1\/payments\/feature\/consumptions url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebooktest.js
^https:\/\/sdk-apptics\.zoho\.com\/sdk\/api\/apptics\/v1\/app\/bearertoken url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebooktest.js

[MITM]
hostname = notebook.zoho.com
*/

var mikephie;
var url = $request.url;

if (url.includes("api/v1/userprofile/accounts/payment?action=get_current_plan_detail")) {
    mikephie = JSON.parse($response.body);
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
} else if (url.includes("/api/v1/payments/feature/consumptions")) {
    mikephie = JSON.parse($response.body);
    mikephie = {
        "code": 200,
        "status": "Success",
        "message": "Success",
        "feature_consumptions": [
            {
                "feature_id": "com.zoho.notebook.storage",
                "consumptions": [
                    {
                        "value": "5268006",
                        "name": "SIZE",
                        "unit": "BYTES",
                        "user_type": "INDIVIDUAL_USER"
                    }
                ],
                "source": "PAID"
            }
        ]
    };
} else if (url.includes("/sdk/api/apptics/v1/app/bearertoken")) {
    mikephie = JSON.parse($response.body);
    mikephie = {
        "result": "success",
        "data": {
            "anon_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzZXNzaW9uVG9rZW4iOiJBaENKcWRmUnpVWVJwM2VFZlNmdmZ6MEV0bFlJal9ROUF1WEp0V3pqTEFHY1JpVDZNMlI3a0FnSlJGR2dLc24wY3c4S182NUZwbzdLZElldWphajdoZkFVZUVWSmxqZDFWTEtLeFI0QTFLWjdJYjdMZV94UHhFQ0xubEYtUTNpQkotQzIwN0w5MTBQMGRyb0lrWURsWWJwZmpadHZWQ2Ita213bTB0UWk5XzhPajROaHpWRDY1R2tET3IzMFIyUWJScGU3U1FkZ1RDaFNxUHE5SlZBTXBCV2ZHVy1YT3d2cnN1SHpZUFhEdnJvNVJXTDRsWEtyZEFrUE5MTWcyTG11X2U4OWtFeDRyNkRQZE9kVmtESF84M1FPM0VBUjQ5SVJJb3JvTDE3d25Ma3Q3dkRuc1V5RnVoMm5VMFQ3MWl6QjBrUDVWSGtWTG9rSVUxMGdJQV9oUGciLCJpc3MiOiJhcHB0aWNzIiwiZXhwIjoxNzE3NjYwMTQzfQ.idzajvRjSlbVTs7gGr6v3oU2Pvdkl-PUap9UWVtYz9UPq33k93-q6MFtGYjwQ4v5nhZ3NHRHWRK511j45aAhMmmi1ugBmb1fsJWTctt-KIt7S_X7vt-LX4s9NHLKltjYp3NddToVc_pH10QMg430mv27vLy9rrCrXktveZFF-3mW1wRq7qgWXpSXBdK51wX_SM-_Bq7qHY6kdP_R5nt5b7Tke5KaAE3Z0o4FPgn0PusphzQw2F6t4VU0mZaXrdLNOTDp5-aYLAcZsSZ-Fm_qPJS6KtO0GFxPxLmBgiuMWMKVM4aq4Yw-HIP7acoollO1KXDPyTBGFjXAPaDWFn04ZQ"
        }
    };
}

$done({body: JSON.stringify(mikephie)});