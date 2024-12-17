/******************************************
 * @name 酷我音乐
 * @description 解锁会员皮肤、会员音频(最高无损)、听书权限, 配合其他去广告脚本达到最佳效果
 * @channel https://t.me/yqc_123
 * @feedback https://t.me/yqc_777
 * @version 1.0.2
******************************************
脚本声明:
1. 本脚本仅用于学习研究，禁止用于商业用途
2. 本脚本不保证准确性、可靠性、完整性和及时性
3. 任何个人或组织均可无需经过通知而自由使用
4. 作者对任何脚本问题概不负责，包括由此产生的任何损失
5. 如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明、所有权证明，我将在收到认证文件确认后删除
6. 请勿将本脚本用于商业用途，由此引起的问题与作者无关
7. 本脚本及其更新版权归作者所有
******************************************
hostname = *.kuwo.cn

^https?:\/\/(?:musicpay|nmobi|vip1|audiobookpay|tingshu)\.kuwo\.cn\/(?:music\.pay\?newver=\d+|mobi.s\?f=kwxs|vip\/(?:enc\/user\/vip\?op=ui&uid=|v2\/theme\?op=gd)|a\.p|v2\/api\/pay\/user\/info) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/kuwo-old.js
******************************************/
 

let obj = JSON.parse($response.body || "{}");
const url = $request.url;

if (url.includes("mobi.s?f=kwxs")) {
    let data = JSON.parse(obj.data);
    obj.data = JSON.stringify(data);
}

if (url.includes("vip/enc")) {
    obj = {
        "result": 0,
        "serverDuration": 16,
        "data": {
            "uid": "1",
            "vipstatus": 1,
            "expiration": "4030910885",
            "vipType": 3,
            "isyearvip": 1
        }
    };
}

if (url.includes("vip/v2/theme")) {
    obj.data.vipTheme = null;
}

if (url.includes("playright") || url.includes("downright") || url.includes("policytype")) {
    let body = $response.body;
    body = body.replace(/"playright":\d+/g, '"playright":1');
    body = body.replace(/"downright":\d+/g, '"downright":1');
    body = body.replace(/"policytype":\d+/g, '"policytype":3');
    body = body.replace(/"policy":\d+/g, '"policy":5');
    obj = JSON.parse(body);
}

if (url.includes("pay/user/info")) {
    obj.data = {
        "end": 4030910885,
        "bought_vip": 1,
        "type": 1,
        "period": 31,
        "bought_vip_end": 4030910885
    };
}

$done({body: JSON.stringify(obj)});