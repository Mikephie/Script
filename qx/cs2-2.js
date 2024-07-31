/*        
        ➪：脚本名称: CamScanner （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]

^https:\/\/api-cs\.intsig\.net\/purchase\/cs\/query_property\?app_type=CamScanner_IP_FREE&client_app=CamScanner_IP_FREE%40\d+\.\d+\.\d+\.\d+&country=\w+&cs_ept_d=[\w%]+&first_install_version=\d+\.\d+\.\d+&language=[\w-]+&property_id=[\w|%]+$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cs2-2.js

[mitm]

hostname = api-cs.intsig.net

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "ret" : "0",
  "data" : {
    "patting_balance" : 100000,
    "login_ocr_balance" : 4,
    "pdfword_balance" : "100000",
    "vip_imagerestore_balance" : 1000,
    "CamScanner_Erase" : 1000,
    "greetcard_list" : {
      "CamScanner_NONVIP_PayGreetCard_1" : "0",
      "greeting_card_6" : "0",
      "CamScanner_NONVIP_PayGreetCard_2" : "0",
      "greeting_card_2" : "0",
      "CamScanner_PayGreetCard_3" : "0",
      "CamScanner_NONVIP_PayGreetCard_3" : "0",
      "greeting_card_9" : "0",
      "greeting_card_5" : "0",
      "CamScanner_PayGreetCard_6" : "0",
      "CamScanner_PayGreetCard_1" : "0",
      "greeting_card_1" : "0",
      "greeting_card_10" : "0",
      "CamScanner_PayGreetCard_4" : "0",
      "greeting_card_4" : "0",
      "CamScanner_PayGreetCard_2" : "0",
      "greeting_card_3" : "0",
      "greeting_card_11" : "0",
      "CamScanner_PayGreetCard_5" : "0"
    },
    "CamScanner_RoadMap" : 499,
    "fax_balance" : "0",
    "no_login_ocr_balance" : 2,
    "psnl_vip_property" : {
      "group1_paid" : 1,
      "ms_first_pay" : 0,
      "vip_type" : "vip",
      "auto_renewal" : false,
      "in_trial" : 0,
      "pc_vip" : 0,
      "renew_method" : "appstore",
      "is_trial_guide" : "1",
      "ys_first_pay" : 1,
      "initial_tm" : "1721815096",
      "vip_level_info" : {
        "score" : 9,
        "level" : 1,
        "create_time" : 1722228783,
        "start_score" : 1,
        "next_score" : 600
      },
      "level_info" : {
        "level" : 1,
        "days" : 14,
        "end_days" : 30
      },
      "grade" : 4,
      "last_payment_method" : "webshop",
      "nxt_renew_tm" : 0,
      "svip" : 0,
      "expiry" : 1722765490,
      "pending" : 0,
      "inherited_flag" : 0,
      "group2_paid" : 0
    },
    "imagerestore_balance" : 997,
    "points" : "0",
    "upload_pdf_balance" : "100000",
    "used_points" : "0",
    "cert_mode_balance" : "200",
    "watermarks_balance" : 99929,
    "ocr_balance" : 991,
    "ai_imagefilter_balance" : "984",
    "immt_expy_points" : "0",
    "points_exchange_cfgrs" : {
      "CamScanner_ID_Card_Credit" : 500,
      "CamScanner_Pdf2ppt" : 500,
      "CamScanner_Sign" : 500,
      "CamScanner_ID_Card_Authenticity" : 500,
      "CamScanner_Excel" : 500,
      "CamScanner_CertMode" : 200,
      "CamScanner_Watermarks" : 50,
      "CamScanner_Pdf2excel" : 500,
      "CamScanner_Profile_Card_Format" : 500,
      "CamScanner_Translation" : 50,
      "CamScanner_Pdfword" : 500,
      "CamScanner_CloudOCR" : 50,
      "CamScanner_CloudCap_1G" : 1000,
      "CamScanner_AlbumImport" : 300
    },
    "trans_balance" : 500,
    "balance_recolor" : 200,
    "bookmode_balance" : 100000,
    "balance_demoire" : 1000,
    "vip_balance_recolor" : 1000,
    "dir" : {
      "edu_total_num" : 6000,
      "vip_layer_num" : 6,
      "vip_total_num" : 10000,
      "total_num" : 5008,
      "license_layer_num" : 4,
      "user_layer_num" : 6,
      "single_layer_num" : 3,
      "new_layer_num" : 4,
      "advanced_folder_num" : 100,
      "normal_vip_layer_num" : 6,
      "normal_vip_total_num" : 5010,
      "advanced_folder_layer" : 6,
      "license_total_num" : 6000,
      "user_total_num" : 500,
      "edu_layer_num" : 6
    },
    "CamScanner_Intellect_Erase" : 978,
    "excel_balance" : "500",
    "add_watermarks_balance" : "100000",
    "watchad_vip_chance" : "3",
    "watchad_vip_chance_total" : "3",
    "server_time" : "1722254827",
    "removead" : "0"
  }
}

$done({body : JSON.stringify(mikephie)});