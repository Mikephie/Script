/*************************************

项目名称：壁纸
下载地址：https://t.cn/A6WmzYvC
更新日期：2023-11-18
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/leancloud\.emotionwp\.com\/.+\/classes\/wpf_account url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/bizi.js

[mitm]
hostname = leancloud.emotionwp.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.results = [ {...chxm1023.results,
   "updatedAt" : "2023-11-17T23:52:58.783Z",
   "vipEndTime" : 4092599349,
   "sex" : "1",
   "isSVIP" : 1,
   "userId" : "A66666666_B6666666666666-C66",
   "loginType" : 1,
   "nickName" : "Mikephie",
   "isVIP" : 1,
   "headImageUrl" : "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png",
   "objectId" : "6666fcda5a17e66bd666c666",
   "createdAt" : "2023-11-17T23:52:58.783Z",
   "coin" : 0
 }
];

$done({body : JSON.stringify(chxm1023)});