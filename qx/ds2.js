/*        
        ➪：脚本名称: 边框水印大师
        
        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https?:\/\/photoby\.hasmash\.com\/auth\/member url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ds2.js

[MITM]
hostname = photoby.hasmash.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "message": "成功!",
  "result": {
    "uid": "efe376d39b4f4385a45cb19ae0c8c13b",
    "phone": "15546907888",
    "memberExpire": 3742762088000
  },
  "code": "00000"
}
  

$done({body : JSON.stringify(mikephie)});