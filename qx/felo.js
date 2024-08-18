/*        
          ➪：婚贝请柬 

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >felo实时翻译-同传与语音字幕
^https?:\/\/(translator|accounts).felo.me\/api\/user.*$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/felo.js
^https?:\/\/translator.felo.me\/api\/translation\/thirdToken\?token_channel url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/felotk.js

[mitm] 
hostname = accounts.felo.me,translator.felo.me

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "status": 200,
  "data": {
    "now": "2024-08-18T11:57:20+0000",
    "type": "SUBSCRIPTION",
    "plan": {
      "app_id": "translator",
      "charge_time": "2088-08-08T11:14:50+0000",
      "subscription_id_third": "300001970562827",
      "reset_time": "2088-08-08T11:14:50+0000",
      "count": 1,
      "subscription_type": "ANNUALLY",
      "subscribe_time": "2024-08-18T11:14:50+0000",
      "product_id": "translator_pro_annual_trial",
      "subscription_channel": "IAP",
      "reset_period": "ANNUALLY",
      "subscription_id": "1825129251802910724",
      "status": "TRIAL",
      "subscriber": "1823835292198371329"
    },
    "user_product_total": [
      {
        "freeze": 0,
        "total_limit": "UNLIMITED",
        "deduction_type": "DURATIONS",
        "user_id": "1823835292198371329",
        "product_item_type": "TRANSLATOR_DURATIONS",
        "total": 5999999995,
        "balance": 5999999995,
        "user_product_total_id": "1823835294030647298"
      }
    ]
  },
  "code": "OK"
}

$done({body: JSON.stringify(mikephie)});