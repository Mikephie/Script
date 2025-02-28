/*        
          ➪：脚本名称:   Miraa 
            
     ꫛꫀꪝ  ：2024年8月15日 16:37

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹


[rewrite_local]
^https:\/\/(api|pay)\.myoland\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/miraa.js

[mitm]
hostname = api.myoland.com, pay.myoland.com

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹/


// 主函数处理响应
try {
    let body = $response.body;
    if (isJSON(body)) {
        let obj = JSON.parse(body);
        // 解锁VIP逻辑
        obj.quota = 9999999999;
        obj.exp = "2088-08-08T08:08:08Z";
        body = JSON.stringify(obj);
    }
    $done({ body });
} catch (err) {
    console.log("❌ Miraa 脚本执行错误: " + err);
    $done({});
}

// 检查 JSON 格式
function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}