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

//修改范例
{
  "success": true,
  "result": {
    "wechatNickname": "Mikephie SG",
    "freeFlag": "NO",
    "wordage": 0,
    "inviteCode": "qre9r7LB",
    "vipGroupInfos": [
    ],
    "type": "NORMAL",
    "times": 0,
    "dataId": "10173268592619634970",
    "registerTime": "2024-11-27 13:38:46",
    "nickname": "Mikephie SG",
    "remainTimeSeconds": 0,
    "headImg": "https:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/Q3auHgzwzM4Y04QRGLYMe8YjJgWlUQmQNtfv2AkETFQevfHtw0xQUJSAGoXFCVkgMWsSI11woPQQXFffibAnS8W5SzjgAI976\/132",
    "realnameStatus": "NO"
  },
  "returnCode": "200",
  "timeOut": false
}

//

let mikephie = $response.body;

try {
    // 解析响应体为 JSON 对象
    let obj = JSON.parse(mikephie);

    if (/\/app\/account\/getAccountInfo/.test($request.url)) {
        // 修改或添加字段
        obj.result.type = "VIP"; // 设置用户类型为 VIP
        obj.result.freeFlag = "YES"; // 设置为免费用户
        obj.result.vipExpireTime = "2088-08-08 08:08:08"; // 设置 VIP 到期时间
        obj.result.vipExpireDays = 88888888; // 设置 VIP 剩余天数
        obj.result.remainTimeSeconds = 88888; // 设置剩余秒数
        obj.result.times = 88888888; // 设置时间统计字段

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
    mikephie = JSON.stringify(obj);
} catch (error) {
    console.log("Error modifying response:", error);
}

// 返回修改后的响应体
$done({ body: mikephie });