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

function transformJSON(originalJSON) {
  // Parse the original JSON string if it's not already an object
  const original = typeof originalJSON === 'string' ? JSON.parse(originalJSON) : originalJSON;

  // Create the new object with desired modifications
  const transformed = {
    p: 1,
    a: "",
    i: 1,
    x: 1,
    b: original.b,
    r: "",
    c: original.c,
    s: 1,
    l: 1,
    t: 1,
    e: 1,
    m: 1,
    f: 1,
    v: original.v
  };

  return transformed;
}

// Example usage:
const originalData = {
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

const result = transformJSON(originalData);
console.log(JSON.stringify(result, null, 2));