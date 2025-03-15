/*
📜 作业批改|试卷扫描|错题打印机 解锁 VIP 脚本  
📅 更新时间：2024年12月06日  
🔓 功能：解锁永久 VIP  
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ  

[rewrite_local]  
^https?:\/\/appss\.(rhinoxky|baomingding|rhinoxlab)\.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/zypg.js  

[mitm]  
hostname = appss.rhinoxlab.com, appss.baomingding.com
*/

let mikephie = JSON.parse($response.body);

if ($request.url.includes("rhinoxky") || $request.url.includes("rhinoxlab")) {
    Object.assign(mikephie.result, {
        headImg: "https://i.ibb.co/f1cgnGT/IMG-1215.jpg",
        type: "VIP",
        freeFlag: "YES",
        wordage: 8888888888,
        appleUserEmail: "888@gmail.com",
        email: "888@gmail.com",
        vipExpireTime: "2088-08-08 08:08:08",
        vipExpireDays: 8888888888,
        remainTimeSeconds: 8888888,
        times: 8888888888,
        vipGroupInfos: [
            {
                groupType: "TYPE_ONE",
                vipType: "VIP",
                autoPay: "YES"
            }
        ]
    });
} 

else if ($request.url.includes("baomingding")) {
    Object.assign(mikephie.result, {
        headImg: "https://i.ibb.co/f1cgnGT/IMG-1215.jpg",
        type: "VIP",
        freeFlag: "YES",
        wordage: 8888888888,
        appleUserEmail: "888@gmail.com",
        email: "888@gmail.com",
        vipExpireTime: "2088-08-08 08:08:08",
        vipExpireDays: 8888888888,
        remainTimeSeconds: 8888888,
        times: 8888888888,
        vipGroupInfos: [
            {
                groupType: "TYPE_ONE",
                vipType: "VIP",
                autoPay: "YES"
            }
        ]
    });

    Object.assign(mikephie.data ?? {}, { // 确保 data 对象存在
        isEligible: true,
        isSubscribing: true,
        productId: "subscription_year",
        expireTime: "3742762088000",
        isYearlyConversion: true
    });
}

$done({ body: JSON.stringify(mikephie) });