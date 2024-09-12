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
 

// Start with an empty data object
let data = {};

// Loop through the original data and check for 0 values
for (let key in originalData) {
  if (originalData[key] === 0) {
    data[key] = 1; // Replace 0 with 1
  } else {
    data[key] = originalData[key]; // Keep the original value
  }
}

// Log the modified data to see the result
console.log('Updated data:', data);