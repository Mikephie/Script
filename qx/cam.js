/*
 *
 *
脚本功能：壁纸 - 精选高清墙纸图片和背景主题
软件版本：4.5.5
下载地址：苹果商店下载
脚本作者：
更新时间：2024年3月22日 
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cam.js

[mitm]
hostname = ap*.intsig.net

*
*
*/
 
var mikephie = JSON.parse($response.body);

    mikephie = {
  "ret": "0",
  "data": {
    "psnl_vip_property": {
      "group1_paid": 1,
      "ms_first_pay": 0,
      "vip_type": "svip",
      "auto_renewal": true,
      "in_trial": 0,
      "pc_vip": 0,
      "renew_type": "month",
      "renew_method": "appstore",
      "ys_first_pay": 1,
      "initial_tm": "1721815096",
      "vip_level_info": {
        "score": 160,
        "level": 1,
        "create_time": 1722968688,
        "next_score": 600,
        "start_score": 1
      },
      "google_play": "1",
      "grade": 1,
      "nxt_renew_tm": "1725647083",
      "product_id": "com.intsig.camscanner.premiums.onemonth.autorenewable.free",
      "svip": 1,
      "expiry": 1725695160,
      "pending": 0,
      "level_info": {
        "level": 1,
        "days": 11,
        "end_days": 30
      },
      "inherited_flag": 1,
      "last_payment_method": "appstore",
      "group2_paid": 0
    },
    "fax_balance": "88",
    "used_points": "0",
    "points": "8888",
    "login_ocr_balance": 8888,
    "pdfword_balance": 100004,
    "bookmode_balance": 100000,
    "immt_expy_points": "0",
    "ocr_balance": 8888,
    "no_login_ocr_balance": 8888,
    "server_time": "1722979511",
    "CamScanner_RoadMap": 500
  }
}

$done({body : JSON.stringify(mikephie)});