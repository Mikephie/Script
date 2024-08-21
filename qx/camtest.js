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
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/camtest.js

^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/camtestk.js

[mitm]
hostname = ap*.intsig.net
*
*
*/
 
var mikephie = JSON.parse($response.body);

    mikephie = {
  "ret": "0",
  "data": {
    "fax_balance": "0",
    "used_points": "1",
    "psnl_vip_property": {
      "group1_paid": 1,
      "ms_first_pay": 0,
      "vip_type": "vip",
      "in_trial": 0,
      "auto_renewal": true,
      "pc_vip": 0,
      "renew_type": "month",
      "renew_method": "appstore",
      "ys_first_pay": 1,
      "is_trial_guide": "1",
      "google_play": "1",
      "vip_level_info": {
        "score": 160,
        "level": 1,
        "next_score": 600,
        "start_score": 1,
        "create_time": 1722968688
      },
      "grade": 1,
      "level_info": {
        "days": 10,
        "end_days": 30,
        "level": 1
      },
      "last_payment_method": "appstore",
      "nxt_renew_tm": "1725647083",
      "svip": 0,
      "expiry": 1725954305,
      "pending": 0,
      "initial_tm": 1721665901,
      "inherited_flag": 1,
      "product_id": "com.intsig.camscanner.premiums.onemonth.autorenewable.free",
      "group2_paid": 0
    },
    "login_ocr_balance": 4,
    "points": "1000",
    "pdfword_balance": 100003,
    "bookmode_balance": 100000,
    "immt_expy_points": "0",
    "ocr_balance": 891,
    "no_login_ocr_balance": 2,
    "server_time": "1724247268",
    "CamScanner_RoadMap": 499
  }
}

$done({body : JSON.stringify(mikephie)});