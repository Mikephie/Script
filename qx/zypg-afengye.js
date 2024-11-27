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
    // 确保响应体是有效 JSON
    let obj = JSON.parse(aFengYe);

    if (/\/app\/account\/getAccountInfo/.test($request.url)) {
        obj.result.type = "VIP";
        obj.result.freeFlag = "YES";
        obj.result.vipGroupInfos = [
            {
                groupType: "TYPE_ONE",
                vipType: "VIP",
                autoPay: "YES"
            }
        ];
    }

    // 返回修改后的 JSON
    aFengYe = JSON.stringify(obj);
} catch (error) {
    console.log("Error parsing JSON:", error);
}

// 完成响应修改
$done(aFengYe);