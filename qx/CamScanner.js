/*************************************

项目名称：扫描全能王 解锁黄金会员
下载地址：https://t.cn/A6ouHe4B
脚本作者：chxm1023
使用说明：解锁部分功能，使用前先开脚本。
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]

^https:\/\/.*\.(intsig\.net|camscanner\.com) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/CamScanner.js

[mitm]

hostname = *.camscanner.com, *.intsig.net

*************************************/


var chxm1023 = JSON.parse($response.body);
const vipa = '/purchase/cs/query_property';
const vipb = '/queryProperty';
const tqzx = '/getPrivilegeItem';
const vip = {
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
    };

if ($request.url.indexOf(vipa) != -1){
chxm1023.data["psnl_vip_property"] = (vip);
chxm1023.data["fax_balance"] = "99999";
chxm1023.data["used_points"] = "99999";
chxm1023.data["points"] = "99999";
chxm1023.data["pdfword_balance"] = "100010";
chxm1023.data["bookmode_balance"] = 100010;
chxm1023.data["immt_expy_points"] = "99999";
chxm1023.data["ocr_balance"] = 99999;
chxm1023.data["no_login_ocr_balance"] = "99999";
chxm1023.data["CamScanner_RoadMap"] = 100000;
chxm1023.data["CamScanner_ExcelRecoginze"] = 99999;
}

if ($request.url.indexOf(vipb) != -1){
chxm1023.data.ar_property["psnl_vip_property"] = (vip);
}

if ($request.url.indexOf(tqzx) != -1){
chxm1023.data.data = {
      "document" : [
        {
          "balance" : -1,
          "item" : "CamScanner_Pic2pdf"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_PdfCompress"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_PdfEncrypt"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_FileMerge"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_PdfExtract"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_PdfWatermark"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_PdfSign"
        },
        {
          "balance" : 99999,
          "item" : "CamScanner_Intellect_Erase"
        }
      ],
      "transfer" : [
        {
          "balance" : 99999,
          "item" : "CamScanner_ExcelRecoginze"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_RoadMap"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_Pdf2ppt"
        },
        {
          "balance" : 99999,
          "item" : "CamScanner_CloudOCR"
        }
      ],
      "other" : [
        {
          "balance" : 99999,
          "item" : "CamScanner_Translation"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_DirNum"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_IP_REMOVEAD"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_PingTu"
        },
        {
          "balance" : 99999,
          "item" : "CamScanner_Points"
        },
        {
          "balance" : 99999,
          "item" : "CamScanner_Fax_Balance"
        }
      ],
      "scaner" : [
        {
          "balance" : 99999,
          "item" : "CamScanner_ImageRestore"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_Patting"
        },
        {
          "balance" : 99999,
          "item" : "CamScanner_Profile_Card_Format"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_BookMode"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_CertMode"
        },
        {
          "balance" : -1,
          "item" : "CamScanner_HDScan"
        },
        {
          "balance" : 99999,
          "item" : "CamScanner_CloudOCR"
        }
      ],
      "pure" : [
        {
          "balance" : -1,
          "item" : "CamScanner_IP_REMOVEAD"
        }
      ]
    };
}

$done({body : JSON.stringify(chxm1023)});
