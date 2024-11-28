/******************************
脚本功能：试卷扫描-拍照清除笔迹，还原空白试卷，错题标记重组（永久会员）
软件版本：1.1.0 
下载地址： 
脚本作者：
更新时间：2024年

*******************************

[rewrite_local]
# >试卷扫描-拍照清除笔迹，还原空白试卷，错题标记重组（永久会员）
^https?:\/\/appss.baomingding.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sjsm.js

[mitm] 
hostname = appss.baomingding.com

*******************************/


let mikephie = JSON.parse($response.body);

if ($request.url.includes("/getAccountInfo")) {
    Object.assign(mikephie.result, {
        headImg: "https://s2.loli.net/2024/11/28/YNFB6W9zfoq4OCM.png",                  // 更新或添加字段
        type: "VIP",                          // 更新或添加字段
        freeFlag: "YES",                       // 更新或添加字段
        wordage: 8888888888,                  // 更新或添加字段
        email: "888@gmail.com",              // 更新或添加字段
        vipExpireTime: "2088-08-08 08:08:08", // 更新或添加字段
        vipExpireDays: 8888888888,           // 更新或添加字段
        remainTimeSeconds: 8888888,     // 更新或添加字段
        times: 8888888888,              // 更新或添加字段
        vipGroupInfos: [              // 更新数组
            {
                groupType: "TYPE_ONE",
                vipType: "VIP",
                autoPay: "YES"
            }
        ]
    });
}

$done({ body: JSON.stringify(mikephie) });
