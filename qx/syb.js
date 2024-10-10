/*        
        ➪：脚本名称: 水印宝-解锁会员

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/newappapi\.fntmob\.com\/api\/v1\/qsy\/user-info(.?)+ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/syb.js


[mitm] 
hostname = newappapi.fntmob.com
*******************************/

let obj =  JSON.parse($response.body);

obj.data = {
    ...obj.data,
    "avatar": "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
    "nickname": "Mikephie",
    "is_vip" : 1,
    "level_expire" : 3742762088
}

$done({body: JSON.stringify(obj)});