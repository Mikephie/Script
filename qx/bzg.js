/*        
          ➪：百转格-登陆后解锁会员功能

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^http:\/\/format-api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bzg.js


[mitm] 
hostname = format-api.netpock.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie =  {
    subscriptions: [
        {
            id: '888888888888888888',
            provider: 'apple',
            status: 'active',
            periodEnd: 3742762088,
            createdAt: 1728922317
        }
    ]
};

$done({body : JSON.stringify(mikephie)});