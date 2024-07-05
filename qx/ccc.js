/*  ccc
     @Mike



[rewrite_local]
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/space\/list\?type=space url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ccc.js

[mitm] 
hostname = api-drive.mypikpak.com

#"expire": "2088-08-08T08:08:08+08:00",
        "type": "regional",
        "description": "区域会员",
        "surplus_day": 88888

*/


let body = JSON.parse($response.body);

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            } else {
                if (key === 'expire') {
                    obj[key] = "2088-08-08T08:08:08+08:00";
                }
                if (key === 'surplus_day') {
                    obj[key] = 88888;
                }
                if (key === 'permitted') {
                    obj[key] = true;
                }
                if (key === 'tier') {
                    obj[key] = "pro";
                }
                if (key === 'normalized_user_tier') {
                    obj[key] = "pro";
                }
            }
        }
    }
    if (obj.hasOwnProperty('user_subscriptions')) {
        obj['user_subscriptions'] = [
            {
                "expire": "2088-08-08T08:08:08+08:00",
                "id": "651718",
                "status": "active",
                "payment_type": "apple",
                "plan_id": "pro"
            }
        ];
    }
}

// 修改
modifyObject(body);

$done({ body: JSON.stringify(body) });