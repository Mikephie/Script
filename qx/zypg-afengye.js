/*        
        ➪：脚本名称: 作业批改 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >作业批改-家长辅导作业工具（永久会员）
作业工具（永久会员）
^https:\/\/appss\.rhinoxlab\.com\/ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/zypg-afengye.js

[mitm] 
hostname = appss.rhinoxlab.com

*******************************/

let aFengYe = $response.body;

try {
    // 确保响应体是 JSON 格式
    let obj = JSON.parse(aFengYe);

    if (/\/app\/account\/getAccountInfo/.test($request.url)) {
        // 修改或新增需要的字段
        obj.result.type = "VIP"; // 修改会员类型
        obj.result.vipExpireTime = "2088-08-08 08:08:08"; // 设置过期时间
        obj.result.vipExpireDays = 99999999; // 设置会员剩余天数
        obj.result.remainTimeSeconds = 99999; // 设置剩余秒数
        obj.result.times = 77777777; // 时间统计

        // 修改 vipGroupInfos 数组内容
        obj.result.vipGroupInfos = [
            {
                "groupType": "TYPE_ONE",
                "vipType": "VIP",
                "autoPay": "YES" // 改为自动续费
            }
        ];
    }

    // 将修改后的 JSON 转回字符串
    aFengYe = JSON.stringify(obj);
} catch (error) {
    console.log("Error parsing or modifying JSON:", error);
}

// 返回修改后的响应体
$done(aFengYe);