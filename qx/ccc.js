/*  ccc
     @Mike



[rewrite_local]
^https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/space\/list\?type=space url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ccc.js

[mitm] 
hostname = api-drive.mypikpak.com

*/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "success" : true,
  "result" : {
    "headImg" : "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
    "dataId" : "00000000000000000000",
    "appleUserEmail" : "mikephiemy@gmail.com",
    "wordage" : 7777777,
    "mobile" : "Mikephie",
    "inviteCode" : "000000",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "NO"
      }
    ],
    "type" : "VIP", 
    "vipExpireTime" : "2088-08-08 08:08:08",
    "vipExpireDays" : 99999999,
    "registerTime" : "2022-09-09 03:20:32",
    "nickname" : "Mikephie",
    "email" : "mikephiemy@gmail.com",
    "remainTimeSeconds" : 99999,
    "realnameStatus" : "NO",
    "times" : 77777777
  },
  "returnCode" : "200",
  "timeOut" : false
}

$done({body : JSON.stringify(mikephie)});