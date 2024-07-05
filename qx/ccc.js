/*  ccc
     @Mike



[rewrite_local]
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/vip\/info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ccc.js

[mitm] 
hostname = api-drive.mypikpak.com

*/


let body = JSON.parse($response.body);

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            } else {
                if (key === 'minimum_tier') {
                    obj[key] = "pro";
                }
                if (key === 'is_promotions_subscriber') {
                    obj[key] = false;
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
                "expires_at": "2099-09-29 23:23:02 -0700",
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