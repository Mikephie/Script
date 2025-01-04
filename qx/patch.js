/*
 * kuwomod 补丁脚本
 * 仅用于在 Surge 下覆盖/注入一些方法
 */

// 如果 Surge 下 `$httpClient` 不存在，就定义一个简单映射
if (typeof $environment !== 'undefined' && $environment["surge-version"] && typeof $httpClient == 'undefined') {
  globalThis.$httpClient = {
    get: (options, callback) => {
      $httpClient.get(options, callback);
    },
    post: (options, callback) => {
      $httpClient.post(options, callback);
    },
    // ...如果脚本需要更多方法，可以在此定义
  }
}

// 同理，如果脚本原本只写了 Loon 方式持久化 $persistentStore
// Surge 也可以使用 $persistentStore
if (typeof $persistentStore == 'undefined' && typeof $environment !== 'undefined' && $environment["surge-version"]) {
  globalThis.$persistentStore = {
    read: (key) => {/*...*/},
    write: (val, key) => {/*...*/}
  }
}

// 等等...
// 具体怎么写要看 kuwomod.js 里面用到哪些 API
// 这里只是给个示例思路