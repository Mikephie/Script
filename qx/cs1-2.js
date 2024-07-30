/*        
        ➪：脚本名称: CamScanner （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]

https:\/\/api-cs\.intsig\.net\/purchase\/cs\/query_property\?app_type=CamScanner_IP_FREE&client_app=CamScanner_IP_FREE%40[^&]+&country=sg&cs_ept_d=[^&]+&first_install_version=[^&]+&language=zh-cn&property_id=cs_vip%7Cfax%7Cpoints%7Cocr_count%7CCamScanner_BookMode%7Cpdfword_count%7CCamScanner_RoadMap url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cs1-2.js

[mitm]

hostname = api-cs.intsig.net

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "ret" : "0",
  "data" : {
    "fax_balance" : "0",
    "used_points" : "0",
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
        "next_score" : 600,
        "start_score" : 1
      },
      "level_info" : {
        "level" : 1,
        "end_days" : 30,
        "days" : 14
      },
      "grade" : 4,
      "last_payment_method" : "webshop",
      "nxt_renew_tm" : 0,
      "svip" : 0,
      "expiry" : 3742762088000,
      "pending" : 0,
      "inherited_flag" : 0,
      "group2_paid" : 0
    },
    "points" : "0",
    "login_ocr_balance" : 4,
    "pdfword_balance" : "100000",
    "bookmode_balance" : 100000,
    "immt_expy_points" : "0",
    "ocr_balance" : 990,
    "no_login_ocr_balance" : 2,
    "server_time" : "1722301854",
    "CamScanner_RoadMap" : 500
  }
}

$done({body : JSON.stringify(mikephie)});