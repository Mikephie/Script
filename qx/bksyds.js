/*        
        ➪：脚本名称: 边框水印大师
        
        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https?:\/\/photoby\.hasmash\.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds.js

[MITM]
hostname = photoby.hasmash.com

*******************************/

let mikephie = JSON.parse($response.body);

if ($request.url.includes("/auth/member")) {
    Object.assign(mikephie.result, {
        memberExpire: 3742762088000,      // 更新或添加字段
        uid: "f7d62252b11144ee8193f85fa95fcf0b",      // 更新或添加字段
        });
} else if ($request.url.includes("/clickEvent")) {
    Object.assign(mikephie.result, {
        isVip: 1,      // 更新或添加字段
        isVip: 1,      // 更新或添加字段
        vipTime: "2088-08-08 08:08:08"      // 更新或添加字段
        uid: "C4957375-2D67-4728-B3E1-2696A3DFA5C8",      // 更新或添加字段
        deviceId: "39B810B4-B42D-4208-90CF-2F1573394270",      // 更新或添加字段
    });
}

$done({ body: JSON.stringify(mikephie) });