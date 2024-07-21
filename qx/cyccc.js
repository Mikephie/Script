/*        
        ➪：脚本名称:   cyccc 更新时间 ：2024年7月21日 16:38

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 
^https:\/\/ea\.blademaster\.club\/api\/log url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cyccc.js
 
[mitm]

hostname = ea.blademaster.club

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "behavior" : {
    "coin_get" : 888,
    "ad_reward_energy_times" : 0,
    "coin_consume" : 0,
    "int_ad_suc" : 0,
    "int_ad_fail" : 0,
    "coin_random_hint" : 0,
    "challenge_resurrection_times" : 0,
    "ad_reward_coin_times" : 0,
    "coin_specify_hint" : 0,
    "energy_consume" : 0,
    "no_ad_consume" : 0,
    "duration" : 32,
    "no_ad_get" : 0,
    "energy_get" : 2,
    "rv_ad_fail" : 0,
    "rv_ad_suc" : 1
  },
  "user" : {
    "id" : "1696666273297839",
    "platform" : "app",
    "model" : "iPhone16,2",
    "operating_system" : "ios 17.0.3",
    "all_duration" : 55791,
    "brand" : "apple",
    "version" : "1.0.034"
  },
  "snapshot" : {
    "energy" : 888,
    "no_ad" : 0,
    "challenge" : "000000",
    "social_id" : "apple_SRs6cqobIcN9sYrDGTX7TehyGgO2",
    "coin" : 88824640,
    "name" : "Mike Phie",
    "stage" : 525
  }
}

$done({body : JSON.stringify(mikephie)});