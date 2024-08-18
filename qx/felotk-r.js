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

var modifiedHeaders = $response.headers;
modifiedHeaders["Authorization"] = "Bearer eyJhbGciOiJFUzI1NiIsImtpZCI6ImtleTEiLCJ0eXAiOiJKV1QifQ.eyJyZWdpb24iOiJqYXBhbmVhc3QiLCJzdWJzY3JpcHRpb24taWQiOiI1OWVkMGQzYjY3ZTI0NzczYmM5YzViY2EyNDA1MmNmMyIsInByb2R1Y3QtaWQiOiJTcGVlY2hTZXJ2aWNlcy5TMCIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIvc3Vic2NyaXB0aW9ucy82Y2JhMWFhYi0wNTRkLTRlNzgtOWY3NS1jZjBhZWUyMjc0ZDAvcmVzb3VyY2VHcm91cHMvdHJhbnNsYXRvci9wcm92aWRlcnMvTWljcm9zb2Z0LkNvZ25pdGl2ZVNlcnZpY2VzL2FjY291bnRzL3RyYW5zbGF0b3ItcHJkIiwic2NvcGUiOiJzcGVlY2hzZXJ2aWNlcyIsImF1ZCI6InVybjptcy5zcGVlY2hzZXJ2aWNlcy5qYXBhbmVhc3QiLCJleHAiOjE3MjM5ODI4MzIsImlzcyI6InVybjptcy5jb2duaXRpdmVzZXJ2aWNlcyJ9.qx3YVEFe2f1OHr11pyJ8qX_LIwIR2tinI4unXWwDV95bzgRgzUZ8ls-658ZWNrcmbBncOCyN_gzDA21Ax8gNfw";

$done({headers: modifiedHeaders});