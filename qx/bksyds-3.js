/*        
        ➪：脚本名称: 边框水印大师
        
        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https?:\/\/photoby\.hasmash\.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds-3.js

[MITM]
hostname = photoby.hasmash.com

*******************************/

let mikephie = JSON.parse($response.body);

if ($request.url.includes("/auth/member")) {
    // 删除 deviceId 字段（如果存在）
    if (mikephie.result && mikephie.result.hasOwnProperty('deviceId')) {
        delete mikephie.result.deviceId;
    }
    
    Object.assign(mikephie.result, {
        memberExpire: 3742762088000,      // 更新或添加字段
    });
} else if ($request.url.includes("/clickEvent")) {
    // 删除 deviceId 字段（如果存在）
    if (mikephie.result && mikephie.result.hasOwnProperty('deviceId')) {
        delete mikephie.result.deviceId;
    }
    
    Object.assign(mikephie.result, {
        isVip: 1,      // 更新或添加字段
        vipTime: "2088-08-08 08:08:08"      // 更新或添加字段
    });
}

$done({ body: JSON.stringify(mikephie) });