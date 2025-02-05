//2025.02.05 21.12

/*
@Name：通杀所有Emby自动观看保号
@Author：怎么肥事
使用方法：手动观看一次，提示获取成功✅即可食用|可多账号获取
获取完参数请手动关闭重写
[rewrite_local]
^https?:\/\/.+\/emby\/Sessions\/Playing\/Stopped url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/emby.js

[task_local]
35 22 15,30 * * https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Emby.js, tag=Emby自动观看, img-url=https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/lige47/emby.png, enabled=true

[MITM]
hostname = -*.fileball.app, *

*/

// Environment detection
const isRequest = typeof $request !== "undefined";
const isLoon = typeof $loon !== "undefined";
const isSurge = typeof $notify !== "undefined" && typeof $done !== "undefined";

// Constants
const STORAGE_KEY_PREFIX = "Emby_request";

// Utility functions
const notify = (title, subtitle, message) => {
  if (isLoon) $notification.post(title, subtitle, message);
  if (isSurge) $notify(title, subtitle, message);
};

const storage = {
  write: (value, key) => {
    if (isLoon) return $persistentStore.write(value, key);
    if (isSurge) return $prefs.setValueForKey(value, key);
    return false;
  },
  
  read: (key) => {
    if (isLoon) return $persistentStore.read(key);
    if (isSurge) return $prefs.valueForKey(key);
    return null;
  },
  
  remove: (key) => {
    if (isLoon) return $persistentStore.remove(key);
    if (isSurge) return $prefs.removeValueForKey(key);
    return false;
  }
};

const getStorageKey = (base, suffix) => `${base}_${suffix}`;

const normalizeHeaders = (headers) => {
  const normalized = {};
  for (const key in headers) {
    normalized[key.toLowerCase()] = headers[key];
  }
  return normalized;
};

// Clean up duplicate Emby requests
const cleanupDuplicateRequests = () => {
  const hosts = new Set();
  let currentIndex = 1;
  let writeIndex = 1;
  
  while (true) {
    const urlKey = getStorageKey(STORAGE_KEY_PREFIX, `${currentIndex}_url`);
    const headersKey = getStorageKey(STORAGE_KEY_PREFIX, `${currentIndex}_headers`);
    const bodyKey = getStorageKey(STORAGE_KEY_PREFIX, `${currentIndex}_body`);
    
    const url = storage.read(urlKey);
    const headers = storage.read(headersKey);
    const body = storage.read(bodyKey);
    
    if (!url || !headers) break;
    
    const parsedHeaders = JSON.parse(headers);
    const host = parsedHeaders.host;
    
    if (!host || hosts.has(host)) {
      // Remove duplicate or invalid entries
      storage.remove(urlKey);
      storage.remove(headersKey);
      storage.remove(bodyKey);
    } else {
      if (currentIndex !== writeIndex) {
        // Rewrite to new index
        storage.write(url, getStorageKey(STORAGE_KEY_PREFIX, `${writeIndex}_url`));
        storage.write(headers, getStorageKey(STORAGE_KEY_PREFIX, `${writeIndex}_headers`));
        if (body) {
          storage.write(body, getStorageKey(STORAGE_KEY_PREFIX, `${writeIndex}_body`));
        } else {
          storage.remove(getStorageKey(STORAGE_KEY_PREFIX, `${writeIndex}_body`));
        }
        storage.remove(urlKey);
        storage.remove(headersKey);
        storage.remove(bodyKey);
      }
      hosts.add(host);
      writeIndex++;
    }
    currentIndex++;
  }
};

// Handle request capture
const handleRequestCapture = () => {
  const url = $request.url;
  const headers = normalizeHeaders($request.headers);
  const body = $request.body;
  const host = headers.host;

  if (!host) {
    notify("Emby捕获", "失败❌", "请求头中缺少Host");
    $done({});
    return;
  }

  let index = 1;
  while (storage.read(getStorageKey(STORAGE_KEY_PREFIX, `${index}_url`))) {
    const existingHeaders = storage.read(getStorageKey(STORAGE_KEY_PREFIX, `${index}_headers`));
    if (existingHeaders && JSON.parse(existingHeaders).host === host) {
      notify(`Emby${index}捕获`, "已存在✅", `Host: ${host}\n该Emby请求已成功获取请勿重复获取`);
      $done({});
      return;
    }
    index++;
  }

  const urlKey = getStorageKey(STORAGE_KEY_PREFIX, `${index}_url`);
  const headersKey = getStorageKey(STORAGE_KEY_PREFIX, `${index}_headers`);
  const bodyKey = getStorageKey(STORAGE_KEY_PREFIX, `${index}_body`);

  storage.write(url, urlKey);
  storage.write(JSON.stringify(headers), headersKey);
  if (body) storage.write(body, bodyKey);

  notify(`Emby${index}捕获`, "成功✅", `Host: ${host}\n多账号获取完即时手动关闭重写避免不必要的MiTM`);
  $done({});
};

// Handle request replay
const replayRequest = async (index) => {
  try {
    const urlKey = getStorageKey(STORAGE_KEY_PREFIX, `${index}_url`);
    const headersKey = getStorageKey(STORAGE_KEY_PREFIX, `${index}_headers`);
    const bodyKey = getStorageKey(STORAGE_KEY_PREFIX, `${index}_body`);
    
    const url = storage.read(urlKey);
    const headers = storage.read(headersKey);
    const body = storage.read(bodyKey);
    
    if (!url || !headers) {
      throw new Error("未找到保存的URL或请求头");
    }
    
    const parsedHeaders = JSON.parse(headers);
    const host = parsedHeaders.host;
    
    if (!host) {
      throw new Error("请求头中缺少Host");
    }
    
    const response = await new Promise((resolve, reject) => {
      const requestConfig = {
        url: url,
        headers: parsedHeaders,
        body: body
      };
      
      if (isLoon) {
        $httpClient.post(requestConfig, (error, response, data) => {
          error ? reject(error) : resolve(response);
        });
      } else if (isSurge) {
        $task.fetch({
          ...requestConfig,
          method: "POST"
        }).then(resolve, reject);
      }
    });
    
    const status = response.status || response.statusCode;
    if (status === 204) {
      notify(`Emby${index}`, "播放成功🎉", `Host: ${host}\n状态码204`);
    } else {
      notify(`Emby${index}`, "失败", `Host: ${host}\n状态码: ${status}`);
    }
  } catch (error) {
    notify(`Emby${index}`, "错误", `错误信息: ${error.message || error}`);
  }
};

// Main execution
if (isRequest) {
  handleRequestCapture();
} else {
  (async () => {
    cleanupDuplicateRequests();
    let index = 1;
    while (storage.read(getStorageKey(STORAGE_KEY_PREFIX, `${index}_url`))) {
      await replayRequest(index);
      index++;
    }
    if (index === 1) {
      notify("Emby", "错误", "未找到任何已保存的请求");
    }
    $done();
  })();
}