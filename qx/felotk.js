/*        
          ➪：felo实时翻译-同传与语音字幕

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >felo实时翻译-同传与语音字幕
^https?:\/\/translator.felo.me\/api\/translation\/thirdToken\?token_channel url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/felotk.js
 
[mitm] 
hostname = accounts.felo.me,translator.felo.me

*******************************/

let headers = $request.headers;
headers.Cookie = "_c1sk=18n2vvp%7C1724042597250%7C3%7C
1%7Cx. clarity.ms%2Fcollect; _ga=GA1.1.113889
7123.1724042524; _ga_70F8QP140X=GS1.1.172404
2523.1.1.1724042596.0.0.0; _clck=1wv7x8j%7C2
%7Cfog%7C0%7C1692";
headers.Authorization = "zY_62d59a0966a40b58c88318b appVersion: ";
headers.deviceid = "E31E20EC-2CA0-4296-A782-72618A81E3
A2
";
$done({
  "headers": headers
});