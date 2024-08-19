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
headers.Cookie = "_vide9";
headers.Authorization = "_vide9";
headers.deviceid = "E31E20EC-2CA0-4296-A782-72618A81E3
A2
";
$done({
  "headers": headers
});