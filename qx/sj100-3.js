/*
试卷100解锁VIP
2024.1.12


  
[rewrite_local]
^https:\/\/paper\.zjapp\.xyz\/api\/v1\/status\/list url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sj100-2.js

[mitm]
hostname = paper.zjapp.xyz
*/


let mikephie = JSON.parse($response.body);

if ($request.url.includes("/auth/member")) {
    Object.assign(mikephie.data.user_status_infos, {
        serial: "",
        uid: "522546324428709888",      // 更新添加
        status: 1,
        expire_at: 3742762088000,
        extra: "{\"products\":[{\"code\":\"paper100_svip_weekly_38\",\"trial\":true,\"subscription\":true,\"upgraded\":false,\"introductory\":true,\"order_id\":\"SJI*2025010522022601351689485\",\"create_time\":1736085746000}]}",
        "count" : 1,
        "name" : "svip"
    });
} else if ($request.url.includes("/clickEvent")) {
    Object.assign(mikephie.data.receipt., {
        id: 38476625,      // 更新添加
        isVip: 1,      // 更新或添加字段
        vipTime: "2088-08-08 08:08:08",      // 更新或添加字段
        uid: "C4957375-2D67-4728-B3E1-2696A3DFA5C8",      // 更新添加
        deviceId: "39B810B4-B42D-4208-90CF-2F1573394270"      // 更新添加
    });
}

$done({ body: JSON.stringify(mikephie) });
 
let obj = JSON.parse($response.body);
obj.data.user_status_infos = [{
  "serial": "",
  "uid": "406280149991055360",
  "status": 1,
  "expire_at": 4092595200000,
  "extra": "{\"products\":[{\"code\":\"premium_lifetime_prime_398\",\"trial\":false,\"subscription\":true,\"upgraded\":false,\"introductory\":false}]}",
  "count": 1,
  "name": "vip"
}];
$done({
  "body": JSON.stringify(obj)
});