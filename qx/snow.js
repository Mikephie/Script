/*

📜 SNOW-系列 解锁 VIP 脚本
📅 更新时间：2024年12月06日
🔓 功能：解锁永久 VIP
🔆 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/.*\.snow\.me\/v\d\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/snow.js

[mitm]
hostname = *.snow.me

*/


var mikephie = JSON.parse($response.body);
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
const times = Date.now();

const list = {
  "iphoneapp.epik": { id: "com.snowcorp.epik.subscribe.plan.oneyear" },  //Epik-AI照片&视频编辑
  "iphoneapp.snow": { id: "com.campmobile.snow.subscribe.oneyear" }  //SNOW-AI写真
};

for (const key of Object.keys(list)) {
  if (new RegExp(`^${key}`, "i").test(ua)) {
    mikephie.result = {
      "products": [
        {
          "managed": true,
          "status": "ACTIVE",
          "startDate": times,
          "productId": list[key].id,
          "expireDate": 3742762088000
        }
      ],
      "tickets": [
        {
          "managed": true,
          "status": "ACTIVE",
          "startDate": times,
          "productId": list[key].id,
          "expireDate": 3742762088000
        }
      ],
      "activated": true
    };
    console.log("已操作成功🎉🎉🎉\nMIKEPHIEの分享频道: https://t.me/mikephie");
    break;
  }
}

$done({ body: JSON.stringify(mikephie) });