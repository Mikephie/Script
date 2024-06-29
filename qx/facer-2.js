/*        
        ➪：脚本名称: Facer （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/api\.facer\.io\/parse\/functions\/getStoreSections\?includeUserLists=true url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/facer.js

[mitm]
hostname = api.facer.io


*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "result" : {
    "appleId" : "000213.8fc1454c279c424b85965abf30adce0c.1143",
    "createdAt" : "2024-06-27T11:43:49.756Z",
    "updatedAt" : "2024-06-29T08:06:12.282Z",
    "file" : {
      "__type" : "File",
      "name" : "30bf8d4c173349f99b90cf4c2e579a0e_avatar.jpg",
      "url" : "https://cdn.facer.io/original/30bf8d4c173349f99b90cf4c2e579a0e_avatar.jpg"
    },
    "lastLoginType" : "apple",
    "fileName" : "IMG_1287.jpeg",
    "__type" : "Object",
    "className" : "_User",
    "rolesArray" : [
      "All Access"
    ],
    "followingCount" : 3,
    "username" : "mikephiemy@gmail.com",
    "ACL" : {
      "HMEOUskSHv" : {
        "write" : true,
        "read" : true
      }
    },
    "objectId" : "HMEOUskSHv",
    "watchfaces" : {
      "__type" : "Relation",
      "className" : "Watchface"
    },
    "email" : "mikephiemy@gmail.com",
    "displayName" : "mikephiemy",
    "ssoOnly" : true
  }
}
 
$done({body : JSON.stringify(mikephie)});