/*
壁纸 4.5.3

[rewrite_local]


^https?:\/\/leancloud\.emotionwp\.com\/.+\/classes\/wpf_accoun url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/Mike_bizi.js 

[mitm] 

hostname = leancloud.emotionwp.com

**/

var mikephie = JSON.parse($response.body);

mikephie.results = [
  {
    ...mikephie.results,
    "updatedAt": "2023-11-19T09:29:18.937Z",
    "vipEndTime": 4092599349,
    "sex": "1",
    "isSVIP": 1,
    "userId": "000213.21970f036fd0454a99d29d8cebe086cd.0929",
    "loginType": 1,
    "nickName": "Mikephie",
    "isVIP": 1,
    "headImageUrl": "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png",
    "objectId": "6559d56eb87b3b5ada6602a7",
    "createdAt": "2023-11-19T09:29:18.937Z",
    "coin": 0
  }
];

$done({ body: JSON.stringify(mikephie) });