/*        
        ➪：脚本名称: PikPak （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/space\/list\?type=space url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-all
.js
^https:\/\/api-drive\.mypikpak\.com\/drive\/v1\/(about\?|about\?space=) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/pikpak-drive.js

[mitm] 
hostname = api-drive.mypikpak.com

*******************************/
"expires_at" : "2088-08-08T08:08:08+08:00",
"sub" : "ZUNcGmFMxgvtLSD8",
"expire": "2088-08-08T08:08:08+08:00",
"surplus_day": 88888
"sub_status" : true,
"vip_status" : "ok",
let body = JSON.parse($response.body);

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            } else {
                if (key === 'expires_at') {
                    obj[key] = "2088-08-08T08:08:08+08:00";
                }
                if (key === 'expire') {
                    obj[key] = "2088-08-08T08:08:08+08:00";
                }
                if (key === 'permitted') {
                    obj[key] = true;
                }
                if (key === 'surplus_day') {
                    obj[key] = 88888;
                }
                if (key === 'sub') {
                    obj[key] = "ZUNcGmFMxgvtLSD8";
                }
            }
        }
    }
    if (obj.hasOwnProperty('user_subscriptions')) {
        obj['user_subscriptions'] = [
            {
                "vip_status": "ok",
                "sub_status": "true",
                "expires_at" : "2088-08-08T08:08:08+08:00",
                "user_id": "ZUNcGmFMxgvtLSD8"
            }
        ];
    }
}

// 修改
modifyObject(body);

$done({ body: JSON.stringify(body) });