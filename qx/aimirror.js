// AI Mirror Debug Script

[rewrite_local]
^https:\/\/be\.aimirror\.fun\/(draw|draw\/process|query_is_vip|users\/video_render_count|query_consumable_quota|users\/discount) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js

[mitm]
hostname = be.aimirror.fun

let body = $response.body;
let url = $request.url;

function sendNotification(title, subtitle, message) {
    if (typeof $notification !== 'undefined') {
        $notification.post(title, subtitle, message);
    } else if (typeof $notify !== 'undefined') {
        $notify(title, subtitle, message);
    }
}

// 添加调试日志
console.log(`AI Mirror Debug: Script triggered for URL: ${url}`);
console.log(`AI Mirror Debug: Original response body: ${body}`);

try {
    let obj = JSON.parse(body);
    
    if (url.includes("/query_is_vip")) {
        console.log("AI Mirror Debug: Modifying VIP status");
        obj = true;
    } else if (url.includes("/draw")) {
        console.log("AI Mirror Debug: Modifying draw response");
        if (typeof obj === 'object' && obj !== null) {
            obj.is_vip = true;
        }
    } else if (url.includes("/users/video_render_count")) {
        console.log("AI Mirror Debug: Checking video render count");
        if (obj === 0) {
            sendNotification("提示", "", "这个视频ai无法解锁，请返回上一个界面");
        }
    } else if (url.includes("/query_consumable_quota")) {
        console.log("AI Mirror Debug: Modifying consumable quota");
        if (typeof obj === 'object' && obj !== null) {
            obj.has_quota = true;
        }
    } else if (url.includes("/users/discount")) {
        console.log("AI Mirror Debug: Modifying discount status");
        if (typeof obj === 'object' && obj !== null) {
            obj.discount = true;
        }
    }
    
    body = JSON.stringify(obj);
    console.log(`AI Mirror Debug: Modified response body: ${body}`);
} catch (error) {
    console.log(`AI Mirror Debug: Error parsing or modifying response: ${error}`);
}

sendNotification("AI Mirror Debug", "脚本执行", `URL: ${url}`);

$done({ body });