/*
试卷100解锁VIP
2024.1.12


  
[rewrite_local]
^https:\/\/paper\.zjapp\.xyz\/api\/v1\/status\/list url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sj100-2.js

[mitm]
hostname = paper.zjapp.xyz
*/


let obj = JSON.parse($response.body);
obj.data.user_status_infos = [{
  "serial": "",
  "uid": "522546324428709888",
  "status": 1,
  "expire_at": 3742762088000,
  "extra" : "{\"products\":[{\"code\":\"paper100_svip_weekly_38\",\"trial\":true,\"subscription\":true,\"upgraded\":false,\"introductory\":true,
  "count": 1,
  "name": "svip"
}];
$done({
  "body": JSON.stringify(obj)
});
