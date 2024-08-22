/*        
          ➪：felo实时翻译-同传与语音字幕

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]

# >felo实时翻译-同传与语音字幕
#^https?:\/\/(translator|accounts).felo.me\/api\/user.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/felo.js

^https?:\/\/translator.felo.me\/api\/translation\/thirdToken\?token_channel url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/felotk.js

[mitm] 
hostname = accounts.felo.me,translator.felo.me
 
*
*
*/


let headers = $request.headers;
headers.cookie = "_ga_70F8QP140X=GS1.1.1724042084.1.1.1724043549.0.0.0;_ga=GA1.1.105923526.1724042084;_clck=4v9odi%7C2%7Cfog%7C0%7C1692";
headers.authorization = "5C_1dde26d1dd4d4311ad0f36dbb552a5fb__";
headers.deviceid = "F7051164-776A-451F-90E3-2ADF9E1AF7C9";
$done({
  "headers": headers
});