/*
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/camtest.js

[mitm]
hostname = ap*.intsig.net

***************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "ret" : "0",
  "data" : {
    "fax_balance" : "0",
    "expiry":"2013017600" : {
      "group1_paid" : 1,
      "ms_first_pay" : 0,
      "vip_type" : "vip",
      "auto_renewal" : true,
      "in_trial" : 1,
      "renew_type" : "year",
      "pc_vip" : 0,
      "renew_method" : "appstore",
      "ys_first_pay" : 1,
      "initial_tm" : 1720526440,
      "vip_level_info" : {
        "score" : 0,
        "level" : 0,
        "start_score" : 0,
        "create_time" : 0,
        "next_score" : 1
      },
      "level_info" : {
        "level" : 1,
        "end_days" : 30,
        "days" : 2
      },
      "nxt_renew_tm" : "2013017600",
      "last_payment_method" : "appstore",
      "product_id" : "com.intsig.camscanner.premiums.oneyear.autorenewable.free.guide",
      "svip" : 0,
      "grade" : 2,
      "expiry" : 2013017600,
      "pending" : 0,
      "inherited_flag" : 1,
      "group2_paid" : 0
    },
    "used_points" : "0",
    "points" : "0",
    "login_ocr_balance" : 4,
    "pdfword_balance" : "800000",
    "bookmode_balance" : 800000,
    "immt_expy_points" : "0",
    "no_login_ocr_balance" : 2,
    "ocr_balance" : 8888,
    "server_time" : "1720528184",
    "CamScanner_RoadMap" : 800000
  }
}

$done({body : JSON.stringify(mikephie)});