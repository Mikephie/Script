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
    "patting_balance": 100000,
    "greetcard_list": {
      "CamScanner_NONVIP_PayGreetCard_1": "0",
      "greeting_card_6": "0",
      "CamScanner_NONVIP_PayGreetCard_2": "0",
      "greeting_card_2": "0",
      "CamScanner_PayGreetCard_3": "0",
      "CamScanner_NONVIP_PayGreetCard_3": "0",
      "greeting_card_9": "0",
      "greeting_card_5": "0",
      "CamScanner_PayGreetCard_6": "0",
      "CamScanner_PayGreetCard_1": "0",
      "greeting_card_1": "0",
      "greeting_card_10": "0",
      "CamScanner_PayGreetCard_4": "0",
      "greeting_card_4": "0",
      "CamScanner_PayGreetCard_2": "0",
      "greeting_card_3": "0",
      "greeting_card_11": "0",
      "CamScanner_PayGreetCard_5": "0"
    },
    "pdfword_balance": 100003,
    "vip_imagerestore_balance": 1000,
    "CamScanner_Erase": 1000,
    "login_ocr_balance": 4,
    "CamScanner_RoadMap": 489,
    "fax_balance": "0",
    "no_login_ocr_balance": 2,
    "points": "8888",
    "psnl_vip_property": {
      "group1_paid": 1,
      "ms_first_pay": 0,
      "vip_type": "vip",
      "in_trial": 0,
      "auto_renewal": true,
      "renew_type": "year",
      "pc_vip": 0,
      "renew_method": "appstore",
      "is_trial_guide": "1",
      "ys_first_pay": 1,
      "initial_tm": 1721665901,
      "google_play": "1",
      "level_info": {
        "level": 1,
        "end_days": 30,
        "days": 14
      },
      "product_id": "com.intsig.camscanner.premiums.onemonth.autorenewable.free",
      "nxt_renew_tm": "2725647083",
      "vip_level_info": {
        "score": 160,
        "level": 1,
        "next_score": 600,
        "start_score": 1,
        "create_time": 1722968688
      },
      "svip": 0,
      "expiry": 2725954305,
      "pending": 0,
      "grade": 1,
      "last_payment_method": "appstore",
      "inherited_flag": 1,
      "group2_paid": 0
    },
    "upload_pdf_balance": "100000",
    "imagerestore_balance": 997,
    "used_points": "1",
    "cert_mode_balance": "200",
    "points_exchange_cfgrs": {
      "CamScanner_ID_Card_Credit": 500,
      "CamScanner_Pdf2ppt": 500,
      "CamScanner_Sign": 500,
      "CamScanner_ID_Card_Authenticity": 500,
      "CamScanner_Excel": 500,
      "CamScanner_Pdf2excel": 500,
      "CamScanner_CertMode": 200,
      "CamScanner_Watermarks": 50,
      "CamScanner_Profile_Card_Format": 500,
      "CamScanner_Pdfword": 500,
      "CamScanner_CloudCap_1G": 1000,
      "CamScanner_CloudOCR": 50,
      "CamScanner_Translation": 50,
      "CamScanner_AlbumImport": 300
    },
    "immt_expy_points": "0",
    "ai_imagefilter_balance": "949",
    "watermarks_balance": 99223,
    "ocr_balance": 888,
    "trans_balance": 500,
    "balance_recolor": 200,
    "bookmode_balance": 100000,
    "balance_demoire": 1000,
    "vip_balance_recolor": 1000,
    "dir": {
      "vip_layer_num": 6,
      "vip_total_num": 10000,
      "user_total_num": 500,
      "total_num": 5008,
      "user_layer_num": 6,
      "license_layer_num": 4,
      "single_layer_num": 3,
      "new_layer_num": 4,
      "advanced_folder_num": 100,
      "normal_vip_layer_num": 6,
      "edu_total_num": 6000,
      "license_total_num": 6000,
      "advanced_folder_layer": 6,
      "normal_vip_total_num": 5010,
      "edu_layer_num": 6
    },
    "CamScanner_Intellect_Erase": 918,
    "excel_balance": "500",
    "watchad_vip_chance_total": "3",
    "add_watermarks_balance": "100000",
    "watchad_vip_chance": "3",
    "server_time": "1724654547",
    "removead": "0"
  }
}

$done({body : JSON.stringify(mikephie)});