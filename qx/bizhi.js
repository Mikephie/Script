/*        
        ➪：脚本名称: 精选高清墙纸图片 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

let mikephie = JSON.parse($response.body);

[rewrite_local]
# > 壁纸 - 精选高清墙纸图片和背景主题Vip&Svip
^https?:\/\/leancloud.emotionwp.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/bizhi.js

[mitm] 
hostname = leancloud.emotionwp.com

*******************************/

let mikephie = JSON.parse($response.body);

if ($request.url.includes("/wpf_account?")) {
    mikephie.results.forEach(user => {
        Object.assign(user, {
            nickName: "Mikephie",          // 添加字段
            isSVIP: 1,                     // 添加字段
            svipType: "year_pro",          // 添加字段
            svipEndTime: 3742761600,       // 添加字段
            svipEndTimeFormat: "2088-08-08", // 添加字段
            loginType: 3,                  // 添加字段
            coin: 88888888,                // 添加字段
            isVIP: 1,                      // 添加字段
            vipType: "year_pro",           // 添加字段
            vipEndTime: 3742761600,        // 添加字段
            vipEndTimeFormat: "2088-08-08", // 添加字段
            headImageUrl: "https://i.ibb.co/wM5z10N/IMG-1287.jpg" // 添加字段
        });
    }); // 这里添加了缺失的右大括号
}

$done({ body: JSON.stringify(mikephie) });