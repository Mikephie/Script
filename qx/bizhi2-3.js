/*
Bizhi



^https:\/\/leancloud\.emotionwp\.com\/1\.1\/classes\/wpf_account\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi2-3.js

[mitm]

hostname = leancloud.emotionwp.com

**/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "results": [
    {
      "nickName": "Mikephie",
      "svipType": "year_pro",
      "isVIP": 1,
      "sex": "1",
      "vipEndTime": 3742762088,
      "favCount": 0,
      "createdAt": "2023-11-19T09:29:18.937Z",
      "vipType": "year_pro",
      "svipEndTimeFormat": "2088-08-08",
      "svipEndTime": 3742762088,
      "updatedAt": "2024-08-11T07:23:01.886Z",
      "loginType": 3,
      "downloadCount": 3,
      "objectId": "6559d56eb87b3b5ada6602a7",
      "coin": 888888,
      "vipEndTimeFormat": "2088-08-08",
      "warmStartCount": 20,
      "isSVIP": 1,
      "coldStartCount": 0,
      "headImageUrl": "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
      "userId": "000213.21970f036fd0454a99d29d8cebe086cd.0929"
    },
    {
      "coin": 888888,
      "updatedAt": "2023-11-19T09:35:30.531Z",
      "vipEndTime": 3742762088,
      "sex": "1",
      "isSVIP": 1,
      "favCount": 0,
      "warmStartCount": 0,
      "userId": "000213.21970f036fd0454a99d29d8cebe086cd.0929",
      "loginType": 3,
      "nickName": "Mikephie",
      "isVIP": 1, 
      "headImageUrl": "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
      "downloadCount": 0,
      "objectId": "6559d6e271280637ee6efd63",
      "createdAt": "2023-11-19T09:35:30.531Z",
      "svipEndTime": 3742762088,
      "coldStartCount": 0
    }
  ]
}

$done({body : JSON.stringify(mikephie)});