/******************************
脚本功能：试卷扫描-拍照清除笔迹，还原空白试卷，错题标记重组（永久会员）
软件版本：1.1.0 
下载地址： 
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！

*******************************

[rewrite_local]
# >试卷扫描-拍照清除笔迹，还原空白试卷，错题标记重组（永久会员）
^https?:\/\/appss.baomingding.com\/\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cdsp.js

[mitm] 
hostname = appss.baomingding.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
        "remainTimeSeconds": 100000,
        "realnameStatus": "NO",
        "wordage": 5000001,
        "mobile": "1234567890",
        "inviteCode": "VIPCODE",
        "vipGroupInfos": [{
            "groupType": "VIP",
            "vipType": "Permanent",
            "autoPay": "NO"
        }],
        "type": "VIP",
        "vipExpireTime": "2099-12-31",
        "vipExpireDays": 99999,
        "registerTime": "2024-01-01",
        "nickname": "VIP User",
        "times": 10000001,
        "headImg": "https://example.com/headimg.jpg",
        "dataId": "123456"
    },
    "returnCode": 0,
    "timeOut": false
}

$done({body : JSON.stringify(mikephie)});