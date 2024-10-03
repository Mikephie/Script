/*        
        ➪：脚本名称: 精选高清墙纸图片 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# > 壁纸 - 精选高清墙纸图片和背景主题Vip&Svip
^https?:\/\/leancloud.emotionwp.com\/.*\/classes\/wpf_account? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js

[mitm] 
hostname = leancloud.emotionwp.com

*******************************/
 
var mikephie = JSON.parse($response.body);

    mikephie = {
  "results": [
    {
      "nickName": "Mikephie",
      "svipType": "year_pro",
      "isVIP": 1,
      "sex": "1",
      "vipEndTime": 0,
      "favCount": 0,
      "createdAt": "2023-11-19T09:29:18.937Z",
      "vipType": "none",
      "svipEndTimeFormat": "2088-08-08",
      "svipEndTime": 3742761600,
      "updatedAt": "2024-08-18T01:00:30.990Z",
      "loginType": 3,
      "downloadCount": 5,
      "objectId": "6559d56eb87b3b5ada6602a7",
      "coin": 88888888,
      "vipEndTimeFormat": "1970-01-01",
      "warmStartCount": 25,
      "isSVIP": 1,
      "coldStartCount": 0,
      "headImageUrl": "http://emotion.emotionwp.com/profile_head.png",
      "userId": "000213.21970f036fd0454a99d29d8cebe086cd.0929"
    },
    {
      "coin": 0,
      "updatedAt": "2023-11-19T09:35:30.531Z",
      "vipEndTime": 0,
      "sex": "1",
      "isSVIP": 0,
      "favCount": 0,
      "warmStartCount": 0,
      "userId": "000213.21970f036fd0454a99d29d8cebe086cd.0929",
      "loginType": 3,
      "nickName": "壁纸用户",
      "isVIP": 0,
      "headImageUrl": "http://emotion.emotionwp.com/profile_head.png",
      "downloadCount": 0,
      "objectId": "6559d6e271280637ee6efd63",
      "createdAt": "2023-11-19T09:35:30.531Z",
      "svipEndTime": 0,
      "coldStartCount": 0
    }
  ]
}

$done({body : JSON.stringify(mikephie)});