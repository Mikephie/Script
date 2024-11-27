/*        
        ➪：脚本名称: 作业批改 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >作业批改-家长辅导作业工具（永久会员）
https?:\/\/appss.rhinoxlab.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/zypg-afengye.js

[mitm] 
hostname = appss.rhinoxlab.com

*******************************/



var mikephie = $response.body;
var obj = JSON.parse(mikephie);

if ($request.url.indexOf("/app/account/getAccountInfo") != -1) {
    obj.result.headImg = "https://i.ibb.co/f1cgnGT/IMG-1215.jpg";
    obj.result.dataId = "00000000000000000000";
    obj.result.appleUserEmail = "mikephiemy@gmail.com";
    obj.result.wordage = 7777777;
    obj.result.mobile = "Mikephie";
    obj.result.inviteCode = "000000";
    obj.result.vipGroupInfos = [
        {
            "groupType": "TYPE_ONE",
            "vipType": "VIP",
            "autoPay": "NO"
        }
    ];
    obj.result.type = "VIP";
    obj.result.vipExpireTime = "2088-08-08 08:08:08";
    obj.result.vipExpireDays = 99999999;
    obj.result.registerTime = "2022-09-09 03:20:32";
    obj.result.nickname = "Mikephie";
    obj.result.email = "mikephiemy@gmail.com";
    obj.result.remainTimeSeconds = 99999;
    obj.result.realnameStatus = "NO";
    obj.result.times = 77777777;
}

mikephie = JSON.stringify(obj);
$done(mikephie);