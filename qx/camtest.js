/*
 *
 *
脚本功能：壁纸 - 精选高清墙纸图片和背景主题
软件版本：4.5.5
下载地址：苹果商店下载
脚本作者：
更新时间：2024年3月22日 
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 壁纸 - 精选高清墙纸图片和背景主题Vip&Svip
^https?:\/\/leancloud.emotionwp.com\/.*\/classes\/wpf_account url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/camtest.js

[mitm] 
hostname = leancloud.emotionwp.com
*
*
*/
 
var mikephie = JSON.parse($response.body);

    mikephie = {
  "results": [
    {
      "nickName": "MikephieMY",
      "isVIP": 1,
      "svipType": "month",
      "sex": "1",
      "vipEndTime": 32493852612,
      "createdAt": "2023-11-19T09:29:18.937Z",
      "favCount": 0,
      "vipType": "month",
      "svipEndTimeFormat": "1970-01-01",
      "svipEndTime": 32493852612,
      "updatedAt": "2024-07-11T12:07:39.644Z",
      "loginType": 3,
      "downloadCount": 0,
      "objectId": "6559d56eb87b3b5ada6602a7",
      "coin": 999999,
      "vipEndTimeFormat": "2088-08-08",
      "warmStartCount": 7,
      "coldStartCount": 0,
      "isSVIP": 1,
      "headImageUrl": "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
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
      "headImageUrl": "http:\/\/emotion.emotionwp.com\/profile_head.png",
      "objectId": "6559d6e271280637ee6efd63",
      "downloadCount": 0,
      "createdAt": "2023-11-19T09:35:30.531Z",
      "svipEndTime": 0,
      "coldStartCount": 0
    }
  ]
}

$done({body : JSON.stringify(mikephie)});