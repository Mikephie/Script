/*  ccc
     @Mike



[rewrite_local]

^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/embycrack.js

[mitm]

hostname= mb3admin.com

*/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "space": [
  ],
  "has_more": false,
  "base": {
    "sub_status": true,
    "assets": "10T",
    "upload": {
      "assets": 0,
      "total_assets": 0,
      "size": 0
    },
    "expire_time": "2024-11-29T10:58:16+08:00",
    "download": {
      "assets": 0,
      "total_assets": 0,
      "size": 0
    },
    "size": 10995116277760,
    "vip_status": "ok",
    "user_id": "ZUNcGmFMxgvtLSD8",
    "offline": {
      "assets": 0,
      "total_assets": 0,
      "size": 0
    },
    "info": ""
  }
}

$done({body : JSON.stringify(mikephie)});