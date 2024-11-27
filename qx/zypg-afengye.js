/*        
        ➪：脚本名称: 作业批改 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >作业批改-家长辅导作业工具（永久会员）
作业工具（永久会员）
^https?:\/\/appss.rhinoxlab.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/zypg-afengye.js

[mitm] 
hostname = appss.rhinoxlab.com

*******************************/

let aFengYe = $response.body;

try {
    // 解析 JSON 响应体
    let obj = JSON.parse(aFengYe);

    if (/\/app\/account\/getAccountInfo/.test($request.url)) {
        // 修改字段或添加新内容
        obj.result.type = "VIP"; // 修改用户类型为 VIP
        obj.result.freeFlag = "YES"; // 修改为免费用户
        obj.result.vipExpireTime = "2088-08-08 08:08:08"; // 添加 VIP 到期时间
        obj.result.vipExpireDays = 99999999; // 添加 VIP 剩余天数
        obj.result.remainTimeSeconds = 99999; // 添加剩余时间
        obj.result.times = 77777777; // 添加使用次数统计

        // 修改 vipGroupInfos 数组
        obj.result.vipGroupInfos = [
            {
                "groupType": "TYPE_ONE",
                "vipType": "VIP",
                "autoPay": "YES"
            }
        ];
    }

    // 将修改后的对象重新转换为字符串
    aFengYe = JSON.stringify(obj);
} catch (error) {
    console.log("Error modifying JSON:", error);
}

// 返回修改后的响应体
$done(aFengYe);