/*
📜 ✨ AppRaven ✨
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] // Quantumult X
^https:\/\/appraven\.net\/appraven\/graphql url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/AppRaven.js

[Script] // Surge
appraven_vip = type=http-response, pattern=^https:\/\/appraven\.net\/appraven\/graphql, requires-body=true, max-size=0, script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/AppRaven.js

[Script] // Loon
http-response ^https:\/\/appraven\.net\/appraven\/graphql script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/AppRaven.js, requires-body=true, timeout=60

[MITM]
hostname = appraven.net
*/

/********** Main Logic: Unlock VIP **********/
const appName = "✨AppRaven✨";
const author = "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ";
const message = "会员解锁至 0️⃣8️⃣0️⃣8️⃣2️⃣0️⃣8️⃣8️⃣";

// Unlock VIP Logic
let body = $response.body;

const replacements = [
  { pattern: /"premium":false/g, replacement: '"premium":true' },
  { pattern: /"hasInAppPurchases":false/g, replacement: '"hasInAppPurchases":true' },
  { pattern: /"youOwn":false/g, replacement: '"youOwn":true' },
  { pattern: /"arcade":false/g, replacement: '"arcade":true' },
  { pattern: /"preorder":false/g, replacement: '"preorder":true' }
];

replacements.forEach(({ pattern, replacement }) => {
  body = body.replace(pattern, replacement);
});

// Send a session notification (session duration set to 10 minutes)
sessionNotify(appName, author, message, 10 * 60 * 1000);

/*
📱 Simplified Session Notification Module 📱
*/
function sessionNotify(appName, author, message, timeout = 1 * 60 * 1000) {
  const keyPrefix = appName.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const storeKey = `${keyPrefix}_session_key`;

  const isQuanX = typeof $prefs !== 'undefined';
  const isSurge = typeof $persistentStore !== 'undefined' && typeof $notify !== 'undefined';
  const isLoon = typeof $persistentStore !== 'undefined' && typeof $notification !== 'undefined';

  const store = isQuanX ? $prefs : (isSurge || isLoon ? $persistentStore : null);
  const notify = isQuanX || isLoon ? $notification : (isSurge ? $notify : null);

  if (!store || !notify) return false;

  let lastTime;
  try {
    lastTime = isQuanX ? store.valueForKey(storeKey) : store.read(storeKey);
  } catch (e) {
    console.log(`[${appName}] Failed to read session time`);
  }

  const currentTime = Date.now();
  const isNewSession = !lastTime || (currentTime - parseInt(lastTime) > timeout);

  if (isNewSession) {
    try {
      notify.post(appName, author, message);
      const currentTimeStr = currentTime.toString();
      isQuanX ? store.setValueForKey(currentTimeStr, storeKey) : store.write(currentTimeStr, storeKey);
      console.log(`[${appName}] New session notification sent, key: ${storeKey}`);
    } catch (e) {
      console.log(`[${appName}] Failed to send notification`);
    }
  } else {
    console.log(`[${appName}] Skipping notification within the same session, key: ${storeKey}`);
  }

  return isNewSession;
}

$done({ body });
```

### Improvements:
1. Used an array of objects to store the pattern-replacement pairs for better readability and maintainability.
2. Optimized the session notification function by extracting common logic and improving comments.
3. Enhanced variable naming for better understanding of the code.
