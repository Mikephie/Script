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

^https:\/\/v3\.camscanner\.com\/app\/getPrivilegeItem url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/csitems.js

[mitm]

hostname = v3.camscanner.com

*
*
*/
 
var mikephie = JSON.parse($response.body);

    mikephie = {
  "data": {
    "ret": 0,
    "err": "",
    "data": {
      "transfer": [
        {
          "balance": -1,
          "item": "CamScanner_ExcelRecoginze"
        },
        {
          "balance": 497,
          "item": "CamScanner_RoadMap"
        },
        {
          "balance": -1,
          "item": "CamScanner_Pdf2ppt"
        },
        {
          "balance": 950,
          "item": "CamScanner_CloudOCR"
        },
        {
          "balance": -1,
          "item": "CamScanner_RoadMap_Excel"
        }
      ],
      "document": [
        {
          "balance": -1,
          "item": "CamScanner_Pic2pdf"
        },
        {
          "balance": -1,
          "item": "CamScanner_PdfCompress"
        },
        {
          "balance": -1,
          "item": "CamScanner_PdfEncrypt"
        },
        {
          "balance": -1,
          "item": "CamScanner_FileMerge"
        },
        {
          "balance": -1,
          "item": "CamScanner_PdfExtract"
        },
        {
          "balance": -1,
          "item": "CamScanner_PdfWatermark"
        },
        {
          "balance": -1,
          "item": "CamScanner_PdfSign"
        },
        {
          "balance": 1000,
          "item": "CamScanner_Intellect_Erase"
        },
        {
          "balance": 800,
          "item": "CamScanner_AIImageFilter"
        }
      ],
      "other": [
        {
          "balance": 500,
          "item": "CamScanner_Translation"
        },
        {
          "balance": -1,
          "item": "CamScanner_DirNum"
        },
        {
          "balance": -1,
          "item": "CamScanner_IP_REMOVEAD"
        },
        {
          "balance": -1,
          "item": "CamScanner_PingTu"
        },
        {
          "balance": 800,
          "item": "CamScanner_Points"
        },
        {
          "balance": 800,
          "item": "CamScanner_Fax_Balance"
        }
      ],
      "scaner": [
        {
          "balance": 998,
          "item": "CamScanner_ImageRestore"
        },
        {
          "balance": -1,
          "item": "CamScanner_Patting"
        },
        {
          "balance": 1,
          "item": "CamScanner_Profile_Card_Format"
        },
        {
          "balance": -1,
          "item": "CamScanner_BookMode"
        },
        {
          "balance": -1,
          "item": "CamScanner_CertMode"
        },
        {
          "balance": -1,
          "item": "CamScanner_HDScan"
        },
        {
          "balance": 950,
          "item": "CamScanner_CloudOCR"
        }
      ],
      "pure": [
        {
          "balance": -1,
          "item": "CamScanner_IP_REMOVEAD"
        }
      ]
    }
  }
}

$done({body : JSON.stringify(mikephie)});