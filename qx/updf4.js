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

    mikephie = 
  "msg": "成功",
  "data": {
    "userInfo": {
      "companyUser": false,
      "industry": "",
      "headerImg": "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
      "uid": 5513495,
      "phone": "",
      "color": "#FF8080",
      "nickName": "mike phie",
      "companyName": "",
      "role": 0,
      "account": "",
      "email": "mikephiemy@gmail.com",
      "country": "SG"
    }
  },
  "code": 200
}

$done({body : JSON.stringify(mikephie)});