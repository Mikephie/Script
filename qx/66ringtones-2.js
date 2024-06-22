/******************************

脚本名称: Ever Play 解锁VIP
下载地址：商店
脚本作者：Mikephie
更新时间：2024年6月15日 15:56
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]^https:\/\/msg\.umengcloud\.com\/tag\/add url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/66ringtones-2.js

[mitm] 
hostname = msg.umengcloud.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "header" : {
    "sdk_version" : "4.0.2",
    "is_pirated" : "NO",
    "language" : "zh-Hans-SG",
    "country" : "SG",
    "app_version" : "0",
    "sdk_type" : "iOS",
    "oid" : "142823e6fabeac37d23d675e90b97f9ae0c10437",
    "channel" : "App Store",
    "resolution" : "2796*1290",
    "app_store_version" : "5.1.10",
    "os" : "iOS",
    "short_version" : "5.1.10",
    "package_name" : "com.zhangchao.AudioPlayer",
    "req_time" : "1719061634.475868",
    "access" : "WiFi",
    "carrier" : "--",
    "idfv" : "5F866B54-5E88-48A0-855A-7F1C00123221",
    "timezone" : "8",
    "os_version" : "17.5.1",
    "device_model" : "iPhone16,2",
    "is_jailbroken" : "NO",
    "display_name" : "",
    "push_switch" : "true",
    "appkey" : "5a325412f29d984dba000167",
    "umid" : "f73a7447a887db8df5106f342aac52"
  },
  "tags" : "subscribed_purchased",
  "device_token" : "40a757d4bb3a05201b4bfb3781ebe8878c30a727ea9ea4039e9d8e3a94d310b8"
}


$done({body : JSON.stringify(mikephie)});