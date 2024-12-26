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
        authorization: "qq_60cabdacf608480aa95663ab8f0f1ab5__",
        deviceid: "902C611A-A12A-4D48-9DEF-562EF8155908",
        cookie: "_clsk=1e3ji69%7C1723606564421%7C1%7C1%7Cw.clarity.ms%2Fcollect; _ga_70F8QP140X=GS1.1.1723606552.4.1.1723606558.0.0.0; _ga=GA1.1.347029008.1723476322; _clck=8lm7fs%7C2%7Cfob%7C0%7C1685"
    });
    
    $done({headers: headers});