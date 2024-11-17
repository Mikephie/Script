/******************************

脚本名称: Notebook
下载地址：商店
脚本作者：Mikephie
更新时间：2024-06-08
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
# VIP 订阅, 100G 空间, Token
^https:\/\/(notebook\.zoho\.com\/api\/v1\/(userprofile\/accounts\/payment\?action=(get_current_plan_detail&include_(expired_plans=true|purchase_platform=false)|get_feature_template(&platform=ios)?|get_feature_template)|payments\/feature\/consumptions)|sdk-apptics\.zoho\.com\/sdk\/api\/apptics\/v1\/app\/bearertoken)$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notetest.js

# VIP 多项权益
^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment\?action=get_feature_template&platform=ios url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebook-all.js


[MITM]
hostname = notebook.zoho.com
*/

var url = $request.url;
var mikephie = JSON.parse($response.body);

// URL 常量定义
const URL1 = '/userprofile/accounts/payment?action=get_current_plan_detail&include_expired_plans=true';
const URL2 = '/userprofile/accounts/payment?action=get_current_plan_detail&include_purchase_platform=false';
const URL3 = '/payments/feature/consumptions';
const URL4 = '/userprofile/accounts/payment?action=get_feature_template&platform=ios';
const URL5 = '/userprofile/accounts/payment?action=get_feature_template';
const URL6 = '/sdk/api/apptics/v1/app/bearertoken';

// 处理第一个和第二个 URL 的函数
function handlePlanProfile() {
  mikephie.code = 200;
  mikephie.status = "Success";
  mikephie.message = "User profile fetched successfully";
  mikephie.plan_details = [
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
  ];
}

// 第一个 URL 处理
if (url.indexOf(URL1) != -1) {
  handlePlanProfile();
}

// 第二个 URL 处理
if (url.indexOf(URL2) != -1) {
  handlePlanProfile();
}

// 第三个 URL 处理
if (url.indexOf(URL3) != -1) {
  mikephie.code = 200;
  mikephie.status = "Success";
  mikeph = "Success";
  mikephie.feature_consumptions = [
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
  ];
}

// 第四个 URL 处理（保留但不请求内容）
if (url.indexOf(URL4) != -1) {
  mikephie.code = 200; // 假设正常响应
  mikephie.status = "Success"; // 假设的状态
  mikephie.message = "Feature template not requested"; // 自定义消息
  mikephie.feature_template = {
    "templates": [] // 或设为 null，如果不需要值
  };
}

// 第五个 URL 处理（保留但不请求内容）
if (url.indexOf(URL5) != -1) {
  mikephie.code = 200; // 假设正常响应
  mikephie.status = "Success"; // 假设的状态
  mikephie.message = "Basic feature template not requested"; // 自定义消息
  mikephie.feature_template_basic = {
    "templates": [] // 或设为 null，如果不需要值
  };
}

// 第六个 URL 处理
if (url.indexOf(URL6) != -1) {
  mikephie.result = "success";
  mikephie.data = {
    "anon_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzZXNzaW9uVG9rZW4iOiJBaENKcWRmUnpVWVJwM2VFZlNmdmZ6MEV0bFlJal9ROUF1WEp0V3pqTEFHY1JpVDZNMlI3a0FnSlJGR2dLc24wY3c4S182NUZwbzdLZElldWphajdoZkFVZUVWSmxqZDFWTEtLeFI0QTFLWjdJYjdMZV94UHhFQ0xubEYtUTNpQkotQzIwN0w5MTBQMGRyb0lrWURsWWJwZmpadHZWQ2Ita213bTB0UWk5XzhPajROaHpWRDY1R2tET3IzMFIyUWJScGU3U1FkZ1RDaFNxUHE5XBCV2ZHVy1YT3d2cnN1SHpZUFhEdnJvNVJXTDRsWEtyZEFrUE5MTWcyTG11X2U4OWtFeDRyNkRQZE9kVmtESF84M1FPM0VBUjQ5SVJJb3JvTDE3d25Ma3Q3dkRuc1V5RnVoMm5VMFQ3MWl6QjBrUDVWSGtWTG9rSVUxMGdJQV9oUGciLCJpc3MiOiJhcHB0aWNzIiwiZXhwIjoxNzE3NjYwMTQzfQ.idzajvRjSlbVTs7gGr6v3oU2Pvdkl-PUap9UWVtYz9UPq33k93-q6MFtGYjwQ4v5nhZ3NHRHWRK511j45aAhMmmi1ugBmb1fsJWTctt-KIt7S_X7vt-LX4s9NHLKltjYp3NddToVc_pH10QMg430mv27vLy9rrCrXktveZFF-3mW1wRq7qgWXpSXBdK51wX_SM-_Bq7qHY6kdP_R5nt5b7Tke5KaAE3Z0o4FPgn0PusphzQw2F6t4VU0mZaXrdLNOTDp5-aYLAcZsSZ-Fm_qPJS6KtO0GFxPxLmBgiuMWMKVM4aq4Yw-HIP7acoollO1KXDPyTBGFjXAPaDWFn04ZQ"
  };
}

$done({body: JSON.stringify(mikephie)});