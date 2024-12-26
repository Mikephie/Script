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
        phone: "15546907888",      // 更新添加
        uid: "f7d62252b11144ee8193f85fa95fcf0b",      // 更新添加
    });
} else if ($request.url.includes("/clickEvent")) {
    Object.assign(mikephie.result, {
        id: 38476625,      // 更新添加
        isVip: 1,      // 更新或添加字段
        vipTime: "2088-08-08 08:08:08",      // 更新或添加字段
        uid: "C4957375-2D67-4728-B3E1-2696A3DFA5C8",      // 更新添加
        deviceId: "39B810B4-B42D-4208-90CF-2F1573394270"      // 更新添加
    });
}

$done({ body: JSON.stringify(mikephie) });


    let headers = Object.fromEntries(
        Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value])
    );
    
    Object.assign(headers, {
        authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmN2Q2MjI1MmIxMTE0NGVlODE5M2Y4NWZhOTVmY2YwYiIsImV4cCI6MTczNzc4Mjc3M30.cb8RAuzrdFMJZZnDwDXo1D9pOIp4JechPurVA5fnFFPvXTOr95vQokAJwTAFkpBuOnGlGxyTdR8PK_aQLUmQqg"
    });
    
    $done({headers: headers});