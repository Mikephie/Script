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
  "message": "成功!",
  "result": {
    "id": 29067548,
    "pageName": "首页",
    "iosOrAnd": "ios",
    "uid": "C4957375-2D67-4728-B3E1-2696A3DFA5C8",
    "elementId": "模板Tab点击",
    "version": "1.7.3",
    "isVip": 1,
    "isCN": 0,
    "deviceId": "39B810B4-B42D-4208-90CF-2F1573394270",
    "deviceType": "",
    "pageTitle": "",
    "elementPosition": "",
    "elementContent": "WATERMARK",
    "ip": "180.129.72.45",
    "vipTime": "2088-08-08 08:08:08"
  },
  "code": "00000"
};

// 第二个接口的响应内容
const headers = Object.fromEntries(  Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value]));Object.assign(headers, {  authorization: "qq_60cabdacf608480aa95663ab8f0f1ab5__",  deviceid: "902C611A-A12A-4D48-9DEF-562EF8155908",  cookie: "_clsk=1e3ji69%7C1723606564421%7C1%7C1%7Cw.clarity.ms%2Fcollect; _ga_70F8QP140X=GS1.1.1723606552.4.1.1723606558.0.0.0; _ga=GA1.1.347029008.1723476322; _clck=8lm7fs%7C2%7Cfob%7C0%7C1685"});$done({ headers: headers });

// 根据URL返回对应的响应内容
if (url.includes("第一个接口的URL关键词")) {
    body = response1;
} else if (url.includes("第二个接口的URL关键词")) {
    body = response2;
}

$done({body: JSON.stringify(body)});

const headers = Object.fromEntries(  Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value]));Object.assign(headers, {  authorization: "qq_60cabdacf608480aa95663ab8f0f1ab5__",  deviceid: "902C611A-A12A-4D48-9DEF-562EF8155908",  cookie: "_clsk=1e3ji69%7C1723606564421%7C1%7C1%7Cw.clarity.ms%2Fcollect; _ga_70F8QP140X=GS1.1.1723606552.4.1.1723606558.0.0.0; _ga=GA1.1.347029008.1723476322; _clck=8lm7fs%7C2%7Cfob%7C0%7C1685"});$done({ headers: headers });