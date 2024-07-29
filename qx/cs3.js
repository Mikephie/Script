/*        
        ➪：脚本名称: CamScanner （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]

^https:\/\/api-cs\.intsig\.net\/purchase\/cs\/query_gift_log\?country url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cs3.js

[mitm]

hostname = api-cs.intsig.net

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = [
  {
    "done" : "0",
    "act_id" : "cs_storage_9",
    "each_add" : "104857600",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_10",
    "each_add" : "104857600",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_11",
    "each_add" : "52428800",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_12",
    "each_add" : "104857600",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_13",
    "each_add" : "104857600",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_14",
    "each_add" : "209715200",
    "max" : "100"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_15",
    "each_add" : "209715200",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_16",
    "each_add" : "52428800",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_web_1",
    "each_add" : "209715200",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_web_2",
    "each_add" : "104857600",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_2",
    "each_add" : "209715200",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_24",
    "each_add" : "209715200",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_25",
    "each_add" : "104857600",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_30",
    "each_add" : "104857600",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_34",
    "each_add" : "104857600",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_35",
    "each_add" : "104857600",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_36",
    "each_add" : "524288000",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_1",
    "each_add" : "1073741824",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_3",
    "each_add" : "104857600",
    "max" : "10"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_4",
    "each_add" : "104857600",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_6",
    "each_add" : "52428800",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_7",
    "each_add" : "104857600",
    "max" : "1"
  },
  {
    "done" : "0",
    "act_id" : "cs_storage_8",
    "each_add" : "104857600",
    "max" : "1"
  }
]

$done({body : JSON.stringify(mikephie)});