/*        
        ➪：脚本名称: GP4o （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
https://nichousha.sjrjyffs.top/api/img/aiSketch url script-request-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/GTP4ohd.js
https://nichousha.sjrjyffs.top/api/app/user/getCurrentInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/GP4o.js

[mitm]
hostname = nichousha.sjrjyffs.top

*******************************/


if ($request.url.includes('api/app/user/getCurrentInfo')) {
    let body = JSON.parse($response.body);
    Object.assign(body.data, { vipStatus: "1", nickname: "Baby", vipLabel: "1", imgNum: 9999999 });
    $done({ body: JSON.stringify(body) });
} else {
    $done({});
}