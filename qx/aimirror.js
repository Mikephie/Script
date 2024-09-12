/*        
        ➪：脚本名称:   AIMirror 

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 
[rewrite_local]
^https:\/\/be\.aimirror\.fun\/(query_is_vip|draw|users\/video_render_count|query_consumable_quota|users\/discount) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/aimirror.js

[MITM]
hostname = be.aimirror.fun

*******************************/

let body = $response.body;
let url = $request.url;

function sendNotification(title, subtitle, message) {
    if (typeof $notification != 'undefined') {
        // Surge
        $notification.post(title, subtitle, message);
    } else if (typeof $notify != 'undefined') {
        // Quantumult X
        $notify(title, subtitle, message);
    }
}

if (url.includes("/query_is_vip")) {
    if (body === 'false') {
        body = 'true';  // Set VIP status to true
    }
} else if (url.includes("/draw")) {
    body = body.replace(/"is_vip"\s*:\s*false/g, '"is_vip":true');  // Change VIP status in draw results
} else if (url.includes("/users/video_render_count")) {
    if (body === '0') {
        body = '这个没解锁别用了';  // Inform the user that the feature is not unlocked
        sendNotification("提示", "", "这个视频ai无法解锁，请返回上一个界面");
    }
} else if (url.includes("/query_consumable_quota")) {
    body = body.replace(/"has_quota"\s*:\s*false/g, '"has_quota":true');  // Set quota to true
} else if (url.includes("/users/discount")) {
    body = body.replace(/"discount"\s*:\s*false/g, '"discount":true');  // Apply discount
}

$done({ body });