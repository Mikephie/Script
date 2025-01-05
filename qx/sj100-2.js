/*
试卷100解锁VIP
2024.1.12


  
[rewrite_local]
^https:\/\/paper\.zjapp\.xyz\/api\/v1\/status\/list url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sj100-2.js

[mitm]
hostname = paper.zjapp.xyz
*/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "code" : 0,
  "ts" : 1736087397415,
  "data" : {
    "user_info" : {
      "domain" : "com.paper100.scan:ios",
      "uid" : "522546324428709888",
      "status" : 0,
      "channel" : "AppStore",
      "pkgname" : "com.paper100.scan",
      "os" : "ios",
      "vername" : "1.0.55",
      "vercode" : 55,
      "create_time" : 1732718588329,
      "update_time" : 1732718588329
    },
    "user_status_infos" : [
      {
        "serial" : "",
        "uid" : "522546324428709888",
        "status" : 1,
        "expire_at" : 3742762088000,
        "extra" : "{\"products\":[{\"code\":\"paper100_svip_weekly_38\",\"trial\":true,\"subscription\":true,\"upgraded\":false,\"introductory\":true,\"order_id\":\"SJI*2025010522022601351689485\",\"create_time\":1736085746000}]}",
        "count" : 1,
        "name" : "svip"
      }
    ]
  },
  "msg" : "ok"
}
 
$done({body: JSON.stringify(mikephie)});