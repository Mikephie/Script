// AI Mirror

[rewrite_local]
^(https:\/\/be\.aimirror\.fun\/(draw|draw\/process|query_is_vip|users\/video_render_count|query_consumable_quota|users\/discount)) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js

[mitm]
hostname = be.aimirror.fun

let body = $response.body;
let url = $request.url;

function sendNotification(title, subtitle, message) {
    if (typeof $notification !== 'undefined') {
        // Surge
        $notification.post(title, subtitle, message);
    } else if (typeof $notify !== 'undefined') {
        // Quantumult X
        $notify(title, subtitle, message);
    }
}

try {
    let obj = JSON.parse(body);
    
    if (url.includes("/query_is_vip")) {
        obj = true;
    } else if (url.includes("/draw")) {
        if (typeof obj === 'object' && obj !== null) {
            obj.is_vip = true;
        }
    } else if (url.includes("/users/video_render_count")) {
        if (obj === 0) {
            sendNotification("提示", "", "这个视频ai无法解锁，请返回上一个界面");
            // 保持原值为0
        }
    } else if (url.includes("/query_consumable_quota")) {
        if (typeof obj === 'object' && obj !== null) {
            obj.has_quota = true;
        }
    } else if (url.includes("/users/discount")) {
        if (typeof obj === 'object' && obj !== null) {
            obj.discount = true;
        }
    }
    
    body = JSON.stringify(obj);
} catch (error) {
    console.log('AI Mirror response parsing error:', error);
}

$done({ body });