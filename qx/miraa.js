/*        
          ➪：脚本名称:   Miraa 
            
     ꫛꫀꪝ  ：2024年8月15日 16:37

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 

[rewrite_local]
https:\/\/(api|pay)\.myoland\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/miraa.js

[mitm]
hostname = api.myoland.com,pay.myoland.com

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹/



let status = isJSON($response.body);
let requestUrl = $request.url;
var obj = status ?
    JSON.parse(
        removeExtraSpaces($response.body)
        .replace(/\"quota\":\w+/g, '"quota":9999999999')
        .replace(/\"exp\":\"[^\"]+\"/g, '"exp":"2222-02-22T22:22:22Z"')
    ) :
    $response.body;

$done({
    body: status ? JSON.stringify(obj) : obj
});

function isJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function removeExtraSpaces(jsonString) {
    var jsonObj = JSON.parse(jsonString);
    return JSON.stringify(jsonObj, function (key, value) {
        if (typeof value === "string") {
            return value.trim();
        }
        return value;
    });
}