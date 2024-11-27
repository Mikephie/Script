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
        // 添加新的字段或数据到响应体
        obj.result = {
            ...obj.result, // 保留原有的内容
            type: "VIP",  // 添加或覆盖新的字段
            freeFlag: "YES",
            vipGroupInfos: [
                {
                    groupType: "TYPE_ONE",
                    vipType: "VIP",
                    autoPay: "YES"
                }
            ]
        };
    }

    // 转换为字符串，供响应体返回
    aFengYe = JSON.stringify(obj);
} catch (error) {
    console.log("Error parsing JSON:", error);
}

// 返回修改后的响应体
$done(aFengYe);