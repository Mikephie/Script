/*
 *
 *
脚本功能：酷雀水印管家-图片加水印-一键去消除马赛克-试卷擦除图片还原
软件版本：1.0.0
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >酷雀水印管家-图片加水印 恢复购买 
^https?:\/\/front-gw.kuque.com\/productAuthorizeService\/user\/auth\/query\/allAuthSimple url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/kuqueshuiyin.js
 
[mitm]
hostname = front-gw.kuque.com

*
*
*/


if ($request.url.includes("/productAuthorizeService/user/auth/query/allAuthSimple")) {
  let _0xe40b75 = JSON.parse($response.body);
  Object.assign(_0xe40b75.data, {
    "appCode": "75335384",
    "currentSystemTime": "1750522244510",
    "businessProductCode": "75335384",
    "strategies": [{
      "status": 4,
      "strategyName": "LuckPik_App订阅",
      "businessType": "luckpik_auth",
      "strategyCode": "ksKlVezXF",
      "expireTime": "32493834549000",
      "businessCode": "luckpik_ai_vip"
    }],
    "total": {
      "status": 4,
      "auths": [{
        "totalNumber": 0,
        "type": "device_use_number",
        "description": "同时设备登录数--同时设备使用数",
        "unit": "台"
      }, {
        "totalNumber": 168,
        "type": "effective_time",
        "description": "有效期",
        "unit": "小时"
      }],
      "businessType": "luckpik_auth",
      "expireTime": "32493834549000"
    }
  });
  $done({
    "body": JSON.stringify(_0xe40b75)
  });
}