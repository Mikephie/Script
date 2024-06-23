/*        
        ➪：脚本名称: 边框水印大师 更新时间 ：23 Jun 2024 at 01:04

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
#^https?:\/\/photoby\.hasmash\.com\/app\/browseEvent url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/framemaster.js

[MITM]
hostname = photoby.hasmash.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "message": "成功!",
  "result": {
    "uid": "efe376d39b4f4385a45cb19ae0c8c13b",
    "phone": "18888888888",
    "memberExpire": 4092610661000
  },
  "code": "00000"
}
  

$done({body : JSON.stringify(mikephie)});