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
    // 解析响应体为 JSON 对象
    let obj = JSON.parse(aFengYe);

    if (/\/app\/account\/getAccountInfo/.test($request.url)) {
        // 修改或添加字段
        obj.result.type = "VIP"; // 设置用户类型为 VIP
        obj.result.freeFlag = "YES"; // 设置为免费用户
        obj.result.vipExpireTime = "2088-08-08 08:08:08"; // 设置 VIP 到期时间
        obj.result.vipExpireDays = 99999999; // 设置 VIP 剩余天数
        obj.result.remainTimeSeconds = 99999; // 设置剩余秒数
        obj.result.times = 77777777; // 设置时间统计字段

        // 确保 vipGroupInfos 存在并添加内容
        obj.result.vipGroupInfos = [
            {
                "groupType": "TYPE_ONE",
                "vipType": "VIP",
                "autoPay": "YES"
            }
        ];
    }

    // 将修改后的 JSON 对象转换回字符串
    aFengYe = JSON.stringify(obj);
} catch (error) {
    console.log("Error modifying response:", error);
}

// 返回修改后的响应体
$done({ body: aFengYe });