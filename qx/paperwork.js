/*        
        ➪：脚本名称: 视频转文字 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/appss.baomingding.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cdsp.js

[mitm] 
hostname = appss.baomingding.com

*******************************/


let body = JSON.parse($response.body);
let url = $request.url;

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            } else {
                // VIP interface modifications
                if (url.includes("/getVipInfo")) {
                    if (key === 'is_vip') {
                        obj[key] = 1;
                    }
                    if (key === 'enddate') {
                        obj[key] = "2088-08-08";
                    }
                    if (key === 'product_id') {
                        obj[key] = "VideoToText_158";
                    }
                }
                // User info interface modifications
                else if (url.includes("/getUserInfo")) {
                    if (key === 'nickname') {
                        obj[key] = "88888888888";
                    }
                    if (key === 'phone') {
                        obj[key] = "88888888888";
                    }
                    if (key === 'avatar') {
                        obj[key] = "https://i.ibb.co/wM5z10N/IMG-1287.jpg";
                    }
                }
            }
        }
    }
    return obj;
}

body = modifyObject(body);
$done({ body: JSON.stringify(body) });