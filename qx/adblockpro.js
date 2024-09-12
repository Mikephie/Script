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
 

// Original data from the image
let originalData = {
  "p": 0,
  "a": "",
  "i": 1,
  "x": 1,
  "b": 274,
  "r": "",
  "c": "F8DABB6D",
  "s": 0,
  "l": 0,
  "t": 1,
  "e": 0,
  "m": 0,
  "f": 0,
  "v": true
};

// Start with an empty data object
let data = {};

// Loop through the original data and replace 0 values with 1
for (let key in originalData) {
  if (originalData[key] === 0) {
    data[key] = 1; // Replace 0 with 1
  } else {
    data[key] = originalData[key]; // Keep the original value
  }
}

// Log the modified data to see the result
console.log('Updated data:', data);