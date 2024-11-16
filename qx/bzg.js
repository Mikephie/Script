/*        
          ➪：ChatOnAI

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/billing\.chaton\.ai\/v1\/subscriptions url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/chatonai.js


[mitm]
hostname = billing.chaton.ai

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