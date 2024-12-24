/*        
          ➪：felo实时翻译-同传与语音字幕

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹


[rewrite_local]

# >felo实时翻译-同传与语音字幕
#^https?:\/\/(translator|accounts).felo.me\/api\/user.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/felo.js

^https?:\/\/translator.felo.me\/api\/translation\/thirdToken\?token_channel url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/felotk-r.js

[mitm] 
hostname = accounts.felo.me,translator.felo.me
 
*
*
*/

const headers = Object.fromEntries(  Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value]));Object.assign(headers, {  authorization: "qq_60cabdacf608480aa95663ab8f0f1ab5__",  deviceid: "902C611A-A12A-4D48-9DEF-562EF8155908",  cookie: "_clsk=1e3ji69%7C1723606564421%7C1%7C1%7Cw.clarity.ms%2Fcollect; _ga_70F8QP140X=GS1.1.1723606552.4.1.1723606558.0.0.0; _ga=GA1.1.347029008.1723476322; _clck=8lm7fs%7C2%7Cfob%7C0%7C1685"});$done({ headers: headers });