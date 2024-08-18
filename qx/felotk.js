/*        
          ➪：婚贝请柬 

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https:\/\/h5\.hunbei\.com\/m\/member\/getUserInfo\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hbqj.js

[MITM]
hostname = h5.hunbei.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "status": 200,
  "data": {
    "token": "eyJhbGciOiJFUzI1NiIsImtpZCI6ImtleTEiLCJ0eXAiOiJKV1QifQ.eyJyZWdpb24iOiJqYXBhbmVhc3QiLCJzdWJzY3JpcHRpb24taWQiOiI1OWVkMGQzYjY3ZTI0NzczYmM5YzViY2EyNDA1MmNmMyIsInByb2R1Y3QtaWQiOiJTcGVlY2hTZXJ2aWNlcy5TMCIsImNvZ25pdGl2ZS1zZXJ2aWNlcy1lbmRwb2ludCI6Imh0dHBzOi8vYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ludGVybmFsL3YxLjAvIiwiYXp1cmUtcmVzb3VyY2UtaWQiOiIvc3Vic2NyaXB0aW9ucy82Y2JhMWFhYi0wNTRkLTRlNzgtOWY3NS1jZjBhZWUyMjc0ZDAvcmVzb3VyY2VHcm91cHMvdHJhbnNsYXRvci9wcm92aWRlcnMvTWljcm9zb2Z0LkNvZ25pdGl2ZVNlcnZpY2VzL2FjY291bnRzL3RyYW5zbGF0b3ItcHJkIiwic2NvcGUiOiJzcGVlY2hzZXJ2aWNlcyIsImF1ZCI6InVybjptcy5zcGVlY2hzZXJ2aWNlcy5qYXBhbmVhc3QiLCJleHAiOjE3MjM5ODI4MzIsImlzcyI6InVybjptcy5jb2duaXRpdmVzZXJ2aWNlcyJ9.qx3YVEFe2f1OHr11pyJ8qX_LIwIR2tinI4unXWwDV95bzgRgzUZ8ls-658ZWNrcmbBncOCyN_gzDA21Ax8gNfw"
  },
  "code": "OK"
}
 
$done({body: JSON.stringify(mikephie)});