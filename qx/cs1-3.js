/*        
        ➪：脚本名称: CamScanner （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]

^https:\/\/d82\.intsig\.net\/sync\/query_storage\? url script-response-body

[mitm]

hostname = d82.intsig.net

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "ret" : "0",
  "data" : {
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
    "used_points" : "0",
    "fax_balance" : "0",
    "login_ocr_balance" : 4,
    "points" : "0",
    "pdfword_balance" : "100000",
    "bookmode_balance" : 100000,
    "immt_expy_points" : "0",
    "no_login_ocr_balance" : 2,
    "ocr_balance" : 991,
    "server_time" : "1722254811",
    "CamScanner_RoadMap" : 499
  }
}

$done({body : JSON.stringify(mikephie)});