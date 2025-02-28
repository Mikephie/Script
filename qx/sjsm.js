/*

📜 试卷扫描-拍照清除笔迹 解锁 VIP 脚本
📅 更新时间：2024年06月15日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/appss.baomingding.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sjsm.js

[mitm] 
hostname = appss.baomingding.com

*/


let mikephie = JSON.parse($response.body);

if ($request.url.includes("/getAccountInfo")) {
    Object.assign(mikephie.result, {
        headImg: "https://s2.loli.net/2024/11/28/8Opsc25JQgdUNK1.png",                  // 更新或添加字段
        type: "VIP",                          // 更新或添加字段
        freeFlag: "YES",                       // 更新或添加字段
        wordage: 8888888888,                  // 更新或添加字段
        email: "888@gmail.com",              // 更新或添加字段
        vipExpireTime: "2088-08-08 08:08:08", // 更新或添加字段
        vipExpireDays: 8888888888,           // 更新或添加字段
        remainTimeSeconds: 8888888,          // 更新或添加字段
        times: 8888888888,                  // 更新或添加字段
        vipGroupInfos: [                     // 更新数组
            {
                groupType: "TYPE_ONE",
                vipType: "VIP",
                autoPay: "YES"
            }
        ]
    });
}

$done({ body: JSON.stringify(mikephie) });
