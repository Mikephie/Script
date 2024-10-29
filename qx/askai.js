/*        
          ➪：脚本名称:   Ask AI 
            
     ꫛꫀꪝ  ：2024年10月28日 16:37

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 

[rewrite_local]
^https:\/\/purchase-verifier\.cdwapi\.com\/ios url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/askai.js

[mitm]
hostname = purchase-verifier.cdwapi.com

*************************************/


let body = JSON.parse($response.body);

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (key === 'purchased_product_identifiers') {
                    obj[key] = ["pro.lifetime"];  // 直接赋值数组
                } else {
                    modifyObject(obj[key]);
                }
            } else {
                // 修改指定字段的值
                if (key === 'isActive') {
                    obj[key] = true;
                }
                if (key === 'expiresAt') {
                    obj[key] = 3742762088000;
                }
                if (key === 'expires_at') {
                    obj[key] = 3742762088000;
                }
                if (key === 'product_id') {
                    obj[key] = "pro.lifetime";
                }
            }
        }
    }
    return obj;
}

// 修改对象
body = modifyObject(body);
$done({ body: JSON.stringify(body) });