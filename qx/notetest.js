/******************************

脚本名称: Notebook
下载地址：商店
脚本作者：Mikephie
更新时间：2024-06-08
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
# VIP 订阅, 100G 空间, VIP 多项权益
^https:\/\/notebook\.zoho\.com\/api\/v1\/payments\/feature\/consumptions url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notetest.js


[MITM]
hostname = notebook.zoho.com
*/


var body = $response.body;
var url = $request.url;

console.log("Script started");
console.log("URL: " + url);
console.log("Original body: " + body);

if (url.indexOf('feature/consumptions') !== -1) {
  console.log("Matched URL for feature consumptions");
  try {
    var obj = JSON.parse(body);
    console.log("Original obj:", JSON.stringify(obj));
    
    obj.feature_consumptions = [{
      "feature_id": "com.zoho.notebook.storage",
      "consumptions": [{
        "value": "5268006",
        "name": "SIZE",
        "unit": "BYTES",
        "user_type": "INDIVIDUAL_USER"
      }],
      "source": "PAID"
    }];
    
    body = JSON.stringify(obj);
    console.log("Modified obj:", JSON.stringify(obj));
  } catch (e) {
    console.log("Error occurred: " + e.message);
  }
} else {
  console.log("URL did not match feature/consumptions");
}

console.log("Final body: " + body);
$done({body});