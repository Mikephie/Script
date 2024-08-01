/*        
        ➪：脚本名称: UPDF （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api\.updf\.com\/v1\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/updf4.js

[mitm]

hostname = api.updf.com 

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "msg": "成功",
  "data": {
    "userInfo": {
      "companyUser": false,
      "industry": "",
      "headerImg": "https:\/\/lh3.googleusercontent.com\/a\/AAcHTtegVjNAu9ti_apfI4T3Vg2SSsBUGDJK4nYFhF8_3dVUiX0u=s96-c",
      "uid": 8888888,
      "phone": "",
      "color": "#FF8080",
      "nickName": "mike phie",
      "companyName": "",
      "role": 0,
      "account": "",
      "email": "mikephie@gmail.com",
      "country": "SG"
    }
  },
  "code": 200
}

$done({body : JSON.stringify(mikephie)});