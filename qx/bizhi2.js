/*
AppRaven



[rewrite_local]


^https:\/\/leancloud\.emotionwp\.com\/1\.1\/batch\/save url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi2.js

[mitm] 

hostname = leancloud.emotionwp.com

**/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "requests" : [
    {
      "path" : "/1.1/classes/wpf_account/6559d56eb87b3b5ada6602a7",
      "method" : "PUT",
      "body" : {
        "isSVIP" : 0,
        "isVIP" : 1,
        "vipEndTimeFormat" : "2028-08-08",
        "svipEndTime" : 0,
        "vipType" : "month",
        "svipEndTimeFormat" : "1970-01-01",
        "svipType" : "none",
        "vipEndTime" : 3742767660,
        "__internalId" : "6559d56eb87b3b5ada6602a7"
      }
    }
  ]
}

$done({body : JSON.stringify(mikephie)});