/*        
          ➪：felo实时翻译-同传与语音字幕

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹


[rewrite_local]

[rewrite_local]
# >felo实时翻译-同传与语音字幕
^https?:\/\/(translator|accounts).felo.me\/api\/user.*$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/felosubs.js
^https?:\/\/translator.felo.me\/api\/translation\/thirdToken\?token_channel url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/felotk-r.js

[mitm] 
hostname = accounts.felo.me,translator.felo.me
 
*
*
*/

let body = JSON.parse($response.body);
let url = $request.url;

// 第一个接口的响应内容
const response1 = {
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
        "total": 5333333328,
        "balance": 5333333328,
        "user_product_total_id": "1823835294030647298"
      }
    ]
  },
  "code": "OK"
}

// 第二个接口的响应内容
const headers = Object.fromEntries(  Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value]));Object.assign(headers, {  authorization: "qq_60cabdacf608480aa95663ab8f0f1ab5__",  deviceid: "902C611A-A12A-4D48-9DEF-562EF8155908",  cookie: "_clsk=1e3ji69%7C1723606564421%7C1%7C1%7Cw.clarity.ms%2Fcollect; _ga_70F8QP140X=GS1.1.1723606552.4.1.1723606558.0.0.0; _ga=GA1.1.347029008.1723476322; _clck=8lm7fs%7C2%7Cfob%7C0%7C1685"});$done({ headers: headers });

// 根据URL返回对应的响应内容
if (url.includes("user")) {
    body = response1;
} else if (url.includes("thirdToken")) {
    header = request2;
}