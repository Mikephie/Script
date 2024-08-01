/*        
        ➪：脚本名称: 婚礼精选 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https:\/\/www\.lovewith\.me\/golove\/v05\/profile url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/hljx.js


[MITM]
hostname = www.lovewith.me

*******************************/


if ($request.url.includes('api/app/user/getCurrentInfo')) {
    let body = JSON.parse($response.body);
    Object.assign(body.data, { vipStatus: "1", nickname: "Baby", vipLabel: "1", imgNum: 9999999 });
    $done({ body: JSON.stringify(body) });
} else {
    $done({});
}