/*        
          ➪：ChatOnAI

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^https?:\/\/billing\.chaton\.ai\/v1\/subscriptions url script-response-body https://raw.githubusercontent.com/Mike-offers/Rewrite/refs/heads/master/QuantumultX/ChatOnAI.js

[mitm]
hostname = billing.chaton.ai

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie =  {
    subscriptions: [
        {
            id: 'your_subscription_id',
            provider: 'apple',
            status: 'active',
            periodEnd: 0xf4865700,
            createdAt: 0x670d42cd
        }
    ]
};

$done({body : JSON.stringify(mikephie)});