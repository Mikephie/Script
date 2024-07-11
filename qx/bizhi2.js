/*
AppRaven



[rewrite_local]


^https:\/\/leancloud\.emotionwp\.com\/1\.1\/batch\/save url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi2.js

[mitm] 

hostname = leancloud.emotionwp.com

**/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "results" : [
    {
      "nickName" : "壁纸用户",
      "isVIP" : 1,
      "svipType" : "none",
      "sex" : "1",
      "vipEndTime" : 3742767660,
      "createdAt" : "2023-11-19T09:29:18.937Z",
      "favCount" : 0,
      "vipType" : "month",
      "svipEndTimeFormat" : "1970-01-01",
      "svipEndTime" : 0,
      "updatedAt" : "2024-07-11T11:15:33.004Z",
      "loginType" : 3,
      "downloadCount" : 0,
      "objectId" : "6559d56eb87b3b5ada6602a7",
      "coin" : 88888888,
      "vipEndTimeFormat" : "2088-08-08",
      "warmStartCount" : 5,
      "coldStartCount" : 0,
      "isSVIP" : 0,
      "headImageUrl" : "http://emotion.emotionwp.com/profile_head.png",
      "userId" : "000213.21970f036fd0454a99d29d8cebe086cd.0929"
    },
    {
      "coin" : 0,
      "updatedAt" : "2023-11-19T09:35:30.531Z",
      "vipEndTime" : 0,
      "sex" : "1",
      "isSVIP" : 0,
      "favCount" : 0,
      "warmStartCount" : 0,
      "userId" : "000213.21970f036fd0454a99d29d8cebe086cd.0929",
      "loginType" : 3,
      "nickName" : "壁纸用户",
      "isVIP" : 0,
      "headImageUrl" : "http://emotion.emotionwp.com/profile_head.png",
      "objectId" : "6559d6e271280637ee6efd63",
      "downloadCount" : 0,
      "createdAt" : "2023-11-19T09:35:30.531Z",
      "svipEndTime" : 0,
      "coldStartCount" : 0
    }
  ]
}

$done({body : JSON.stringify(mikephie)});