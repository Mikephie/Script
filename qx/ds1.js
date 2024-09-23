/*        
        ➪：脚本名称: 边框水印大师 
        
        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https?:\/\/photoby\.hasmash\.com\/app\/clickEvent url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ds1.js

[MITM]
hostname = photoby.hasmash.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
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
}
  

$done({body : JSON.stringify(mikephie)});