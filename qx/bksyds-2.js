/*        
        ➪：脚本名称: 边框水印大师
        
        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https?:\/\/photoby\.hasmash\.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bksyds-2.js

[MITM]
hostname = photoby.hasmash.com

*******************************/

// 判断请求类型并进行相应处理
if ($request.url.includes("/auth/member") || $request.url.includes("/clickEvent")) {
    // 处理响应体
    let mikephie = JSON.parse($response.body);

    if ($request.url.includes("/auth/member")) {
        Object.assign(mikephie.result, {
            memberExpire: 3742762088000,
            phone: "15546907888",
            uid: "f7d62252b11144ee8193f85fa95fcf0b"
        });
    } else if ($request.url.includes("/clickEvent")) {
        Object.assign(mikephie.result, {
            id: 38476625,
            isVip: 1,
            vipTime: "2088-08-08 08:08:08",
            uid: "C4957375-2D67-4728-B3E1-2696A3DFA5C8",
            deviceId: "39B810B4-B42D-4208-90CF-2F1573394270"
        });
    }
    
    $done({ body: JSON.stringify(mikephie) });
} else {
    // 处理请求头
    let headers = Object.fromEntries(
        Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value])
    );
    
    Object.assign(headers, {
        authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmN2Q2MjI1MmIxMTE0NGVlODE5M2Y4NWZhOTVmY2YwYiIsImV4cCI6MTczNzc4Mjc3M30.cb8RAuzrdFMJZZnDwDXo1D9pOIp4JechPurVA5fnFFPvXTOr95vQokAJwTAFkpBuOnGlGxyTdR8PK_aQLUmQqg"
    });
    
    $done({ headers: headers });
}