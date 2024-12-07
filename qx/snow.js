/*************************************

项目名称：SNOW-系列解锁
更新日期：2024-12-06
脚本作者：mikephie
电报频道：https://t.me/mikephie
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/.*\.snow\.me\/v\d\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/snow.js

[mitm]
hostname = *.snow.me

*************************************/


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