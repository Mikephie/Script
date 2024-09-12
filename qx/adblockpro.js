/*        
        ➪：脚本名称: Adblock Pro （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹


[rewrite_local]
^https:\/\/api\.adblockpro\.app\/verify url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/adblockpro.js

[mitm]
hostname = api.adblockpro.app

*******************************/

let jsonObj = {
  "p": 0,
  "s": 0,
  "l": 0,
  "e": 0,
  "m": 0,
  "f": 0
};

// 修改值
jsonObj.p = 1;
jsonObj.s = 1;
jsonObj.l = 1;
jsonObj.e = 1;
jsonObj.m = 1;
jsonObj.f = 1;

// 转换为JSON字符串
let jsonString = JSON.stringify(jsonObj);
console.log(jsonString);