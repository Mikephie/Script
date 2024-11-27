/*        
        ➪：脚本名称:   classdojo 更新时间 ：2024年6月26日 13:36

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 
[rewrite_local]
^https:\\\\payments\.classdojo\.com\/v1\\subscribers\\5dc2e328587d3dcf1bee91e0$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/classdojo.js

[mitm]
hostname = payments.classdojo.com

*******************************/

let body = JSON.parse($response.body);

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            } else {
                // 修改 expires_date 的值
                if (key === 'expires_date') {
                    obj[key] = "2088-08-08T08:08:08Z";
                }
            }
        }
    }
}

// 修改对象
modifyObject(body);
$done({ body: JSON.stringify(body) });