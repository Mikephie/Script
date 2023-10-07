/******************************

脚本名称: cycc.js
下载地址：商店
脚本作者：Mikephie
更新时间：2023年10月7日 16:25
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/ea\.blademaster\.club\/api\/log url script-response-body cycc.js

[mitm] 

hostname = ea.blademaster.club

*******************************/

var mikephie = JSON.parse($response.body);

    objc = {
  "behavior" : {
    "coin_get" : 144,
    "ad_reward_energy_times" : 0,
    "coin_consume" : 0,
    "int_ad_suc" : 0,
    "int_ad_fail" : 0,
    "coin_random_hint" : 0,
    "challenge_resurrection_times" : 0,
    "ad_reward_coin_times" : 0,
    "coin_specify_hint" : 0,
    "energy_consume" : 2,
    "no_ad_consume" : 0,
    "duration" : 81,
    "no_ad_get" : 0,
    "energy_get" : 2,
    "rv_ad_fail" : 0,
    "rv_ad_suc" : 0
  },
  "user" : {
    "id" : "1696666273297839",
    "platform" : "app",
    "model" : "iPhone16,2",
    "operating_system" : "ios 17.0.3",
    "all_duration" : 81,
    "brand" : "apple",
    "version" : "1.0.027"
  },
  "snapshot" : {
    "energy" : 99925,
    "no_ad" : 1,
    "challenge" : "000000",
    "social_id" : "",
    "coin" : 999344,
    "name" : "",
    "stage" : 3
  }
}


$done({body : JSON.stringify(mikephie)});

