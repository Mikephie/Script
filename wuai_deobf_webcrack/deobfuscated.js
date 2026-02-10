/******************************************
 * @name 吾爱破解签到
 * @author 𝐎𝐍𝐙𝟑𝐕
 * @update 20241217
 * @version 1.1.4
 ******************************************
脚本声明:
1. 本脚本仅用于学习研究，禁止用于商业用途
2. 本脚本不保证准确性、可靠性、完整性和及时性
3. 任何个人或组织均可无需经过通知而自由使用
4. 作者对任何脚本问题概不负责，包括由此产生的任何损失
5. 如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明、所有权证明，我将在收到认证文件确认后删除
6. 请勿将本脚本用于商业用途，由此引起的问题与作者无关
7. 本脚本及其更新版权归作者所有
******************************************
脚本说明: 部分内容摘自@NobyDa(野比佬)原脚本地址: https://github.com/NobyDa/Script/blob/master/52pojie-DailyBonus/52pojie.js; 文章借鉴: https://github.com/qd-today/templates/issues/34; 

手动登录 https://www.52pojie.cn/home.php 如通知成功获取cookie, 则可以使用此签到脚本.
获取Cookie后, 请将Cookie脚本禁用并移除主机名, 以免产生不必要的MITM.
脚本将在每天上午9点执行, 您可以修改执行时间.

************************
Node.js说明: 
************************
需自行安装"got"与"iconv-lite"模块. 例: npm install got iconv-lite -g
自行填写环境变量: WUAI_COOKIE
如需开启调试模式请将环境变量(WUAI_DEBUG)设置为true
目前只支持Bark来进行消息推送 -环境变量(WUAI_BARK_KEY)

抓取Cookie说明:
浏览器打开 https://www.52pojie.cn/home.php 登录账号后, 开启抓包软件并刷新页面.
抓取该URL请求头下的Cookie字段, 填入以下cookie的单引号内即可.

BoxJs订阅地址:
    - https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/boxjs.json

******************************************
QuantumultX配置:
[mitm]
hostname = www.52pojie.cn

[rewrite_local]
# 吾爱破解获取Cookie
^https:\/\/www\.52pojie\.cn\/home\.php\? url script-request-header https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/52pojie.js

[task_local]
0 9 * * * https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/52pojie.js, tag=吾爱破解签到, img-url=https://raw.githubusercontent.com/Yuheng0101/X/main/Assets/52pojie.png, enabled=true
******************************************
Loon配置:
[MITM]
hostname = www.52pojie.cn

[Script]
http-request ^https:\/\/www\.52pojie\.cn\/home\.php\? tag=吾爱破解获取Cookie, script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/52pojie.js

cron "0 9 * * *" script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/52pojie.js, timeout=10, tag=吾爱破解签到, img-url=https://raw.githubusercontent.com/Yuheng0101/X/main/Assets/52pojie.png
******************************************
Surge配置:
[MITM]
hostname = %APPEND% www.52pojie.cn

[Script]
吾爱破解获取Cookie = type=http-request,pattern=^https:\/\/www\.52pojie\.cn\/home\.php\?, script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/52pojie.js

吾爱破解签到 = type=cron,cronexp=0 9 * * *,wake-system=1,script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Tasks/52pojie.js,timeout=60
******************************************/
(() => {
  'use strict';

  const runtimeEnv = (() => {
    const local1 = Object.keys(globalThis);
    switch (true) {
      case local1.includes("$task"):
        return "Quantumult X";
      case local1.includes("$loon"):
        return "Loon";
      case local1.includes("$rocket"):
        return "Shadowrocket";
      case typeof module != "undefined":
        return "Node.js";
      case local1.includes("Egern"):
        return "Egern";
      case local1.includes("$environment"):
        if ($environment["surge-version"]) {
          return "Surge";
        } else if ($environment["stash-version"]) {
          return "Stash";
        } else {
          return undefined;
        }
      default:
        return;
    }
  })();
  class Logger {
    static #e = new Map([]);
    static #t = [];
    static #r = new Map([]);
    static clear = () => {};
    static count = (arg1 = "default") => {
      switch (Logger.#e.has(arg1)) {
        case true:
          Logger.#e.set(arg1, Logger.#e.get(arg1) + 1);
          break;
        case false:
          Logger.#e.set(arg1, 0);
      }
      Logger.log(arg1 + ": " + Logger.#e.get(arg1));
    };
    static countReset = (arg2 = "default") => {
      switch (Logger.#e.has(arg2)) {
        case true:
          Logger.#e.set(arg2, 0);
          Logger.log(arg2 + ": " + Logger.#e.get(arg2));
          break;
        case false:
          Logger.warn("Counter \"" + arg2 + "\" doesn’t exist");
      }
    };
    static debug = (...arg3) => {
      if (!(Logger.#o < 4)) {
        arg3 = arg3.map(item1 => "🅱️ " + item1);
        Logger.log(...arg3);
      }
    };
    static error(...value1) {
      if (!(Logger.#o < 1)) {
        switch (runtimeEnv) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Egern":
          case "Shadowrocket":
          case "Quantumult X":
          default:
            value1 = value1.map(item2 => "❌ " + item2);
            break;
          case "Node.js":
            value1 = value1.map(item3 => "❌ " + item3.stack);
        }
        Logger.log(...value1);
      }
    }
    static exception = (...arg4) => Logger.error(...arg4);
    static group = item4 => Logger.#t.unshift(item4);
    static groupEnd = () => Logger.#t.shift();
    static info(...value2) {
      if (!(Logger.#o < 3)) {
        value2 = value2.map(item5 => "ℹ️ " + item5);
        Logger.log(...value2);
      }
    }
    static #o = 2;
    static get logLevel() {
      switch (Logger.#o) {
        case 0:
          return "OFF";
        case 1:
          return "ERROR";
        case 2:
        default:
          return "WARN";
        case 3:
          return "INFO";
        case 4:
          return "DEBUG";
        case 5:
          return "ALL";
      }
    }
    static set logLevel(value3) {
      switch (typeof value3) {
        case "string":
          value3 = value3.toLowerCase();
          break;
        case "number":
          break;
        default:
          value3 = "warn";
      }
      switch (value3) {
        case 0:
        case "off":
          Logger.#o = 0;
          break;
        case 1:
        case "error":
          Logger.#o = 1;
          break;
        case 2:
        case "warn":
        case "warning":
        default:
          Logger.#o = 2;
          break;
        case 3:
        case "info":
          Logger.#o = 3;
          break;
        case 4:
        case "debug":
          Logger.#o = 4;
          break;
        case 5:
        case "all":
          Logger.#o = 5;
      }
    }
    static log = (...arg5) => {
      if (Logger.#o !== 0) {
        arg5 = arg5.map(item6 => {
          switch (typeof item6) {
            case "object":
              item6 = JSON.stringify(item6);
              break;
            case "bigint":
            case "number":
            case "boolean":
            case "string":
              item6 = item6.toString();
          }
          return item6;
        });
        Logger.#t.forEach(item7 => {
          arg5 = arg5.map(item8 => "  " + item8);
          arg5.unshift("▼ " + item7 + ":");
        });
        arg5 = ["", ...arg5];
        console.log(arg5.join("\n"));
      }
    };
    static time = (arg6 = "default") => Logger.#r.set(arg6, Date.now());
    static timeEnd = (arg7 = "default") => Logger.#r.delete(arg7);
    static timeLog = (arg8 = "default") => {
      const local2 = Logger.#r.get(arg8);
      if (local2) {
        Logger.log(arg8 + ": " + (Date.now() - local2) + "ms");
      } else {
        Logger.warn("Timer \"" + arg8 + "\" doesn’t exist");
      }
    };
    static warn(...value4) {
      if (!(Logger.#o < 2)) {
        value4 = value4.map(item9 => "⚠️ " + item9);
        Logger.log(...value4);
      }
    }
  }
  class PathUtils {
    static get(value5 = {}, value6 = "", value7 = undefined) {
      if (!Array.isArray(value6)) {
        value6 = PathUtils.toPath(value6);
      }
      const local3 = value6.reduce((arg9, arg10) => Object(arg9)[arg10], value5);
      if (local3 === undefined) {
        return value7;
      } else {
        return local3;
      }
    }
    static set(value8, value9, value10) {
      if (!Array.isArray(value9)) {
        value9 = PathUtils.toPath(value9);
      }
      value9.slice(0, -1).reduce((arg11, arg12, arg13) => Object(arg11[arg12]) === arg11[arg12] ? arg11[arg12] : arg11[arg12] = /^\d+$/.test(value9[arg13 + 1]) ? [] : {}, value8)[value9[value9.length - 1]] = value10;
      return value8;
    }
    static unset(value11 = {}, value12 = "") {
      if (!Array.isArray(value12)) {
        value12 = PathUtils.toPath(value12);
      }
      const local4 = value12.reduce((arg14, arg15, arg16) => arg16 === value12.length - 1 ? (delete arg14[arg15], true) : Object(arg14)[arg15], value11);
      return local4;
    }
    static toPath(value13) {
      return value13.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
    }
    static escape(value14) {
      const local5 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      };
      return value14.replace(/[&<>"']/g, item10 => local5[item10]);
    }
    static unescape(value15) {
      const local6 = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": "\"",
        "&#39;": "'"
      };
      return value15.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, item11 => local6[item11]);
    }
  }
  const HTTP_STATUS_LINES = {
    "100": "HTTP/1.1 100 Continue",
    "101": "HTTP/1.1 101 Switching Protocols",
    "102": "HTTP/1.1 102 Processing",
    "103": "HTTP/1.1 103 Early Hints",
    "200": "HTTP/1.1 200 OK",
    "201": "HTTP/1.1 201 Created",
    "202": "HTTP/1.1 202 Accepted",
    "203": "HTTP/1.1 203 Non-Authoritative Information",
    "204": "HTTP/1.1 204 No Content",
    "205": "HTTP/1.1 205 Reset Content",
    "206": "HTTP/1.1 206 Partial Content",
    "207": "HTTP/1.1 207 Multi-Status",
    "208": "HTTP/1.1 208 Already Reported",
    "226": "HTTP/1.1 226 IM Used",
    "300": "HTTP/1.1 300 Multiple Choices",
    "301": "HTTP/1.1 301 Moved Permanently",
    "302": "HTTP/1.1 302 Found",
    "304": "HTTP/1.1 304 Not Modified",
    "307": "HTTP/1.1 307 Temporary Redirect",
    "308": "HTTP/1.1 308 Permanent Redirect",
    "400": "HTTP/1.1 400 Bad Request",
    "401": "HTTP/1.1 401 Unauthorized",
    "402": "HTTP/1.1 402 Payment Required",
    "403": "HTTP/1.1 403 Forbidden",
    "404": "HTTP/1.1 404 Not Found",
    "405": "HTTP/1.1 405 Method Not Allowed",
    "406": "HTTP/1.1 406 Not Acceptable",
    "407": "HTTP/1.1 407 Proxy Authentication Required",
    "408": "HTTP/1.1 408 Request Timeout",
    "409": "HTTP/1.1 409 Conflict",
    "410": "HTTP/1.1 410 Gone",
    "411": "HTTP/1.1 411 Length Required",
    "412": "HTTP/1.1 412 Precondition Failed",
    "413": "HTTP/1.1 413 Content Too Large",
    "414": "HTTP/1.1 414 URI Too Long",
    "415": "HTTP/1.1 415 Unsupported Media Type",
    "416": "HTTP/1.1 416 Range Not Satisfiable",
    "417": "HTTP/1.1 417 Expectation Failed",
    "418": "HTTP/1.1 418 I'm a teapot",
    "421": "HTTP/1.1 421 Misdirected Request",
    "422": "HTTP/1.1 422 Unprocessable Entity",
    "423": "HTTP/1.1 423 Locked",
    "424": "HTTP/1.1 424 Failed Dependency",
    "425": "HTTP/1.1 425 Too Early",
    "426": "HTTP/1.1 426 Upgrade Required",
    "428": "HTTP/1.1 428 Precondition Required",
    "429": "HTTP/1.1 429 Too Many Requests",
    "431": "HTTP/1.1 431 Request Header Fields Too Large",
    "451": "HTTP/1.1 451 Unavailable For Legal Reasons",
    "500": "HTTP/1.1 500 Internal Server Error",
    "501": "HTTP/1.1 501 Not Implemented",
    "502": "HTTP/1.1 502 Bad Gateway",
    "503": "HTTP/1.1 503 Service Unavailable",
    "504": "HTTP/1.1 504 Gateway Timeout",
    "505": "HTTP/1.1 505 HTTP Version Not Supported",
    "506": "HTTP/1.1 506 Variant Also Negotiates",
    "507": "HTTP/1.1 507 Insufficient Storage",
    "508": "HTTP/1.1 508 Loop Detected",
    "510": "HTTP/1.1 510 Not Extended",
    "511": "HTTP/1.1 511 Network Authentication Required"
  };
  function showSystemNotification(arg17 = "ℹ️ " + runtimeEnv + " 通知", arg18 = "", arg19 = "", arg20 = {}) {
    switch (runtimeEnv) {
      case "Surge":
      case "Loon":
      case "Stash":
      case "Egern":
      case "Shadowrocket":
      default:
        $notification.post(arg17, arg18, arg19, normalizeNotificationParams(arg20));
        break;
      case "Quantumult X":
        $notify(arg17, arg18, arg19, normalizeNotificationParams(arg20));
      case "Node.js":
    }
    Logger.log("==============📣系统通知📣==============", arg17, arg18, arg19, JSON.stringify(normalizeNotificationParams(arg20), null, 2));
  }
  const normalizeNotificationParams = item12 => {
    const local7 = {};
    switch (typeof item12) {
      case undefined:
        break;
      case "string":
      case "number":
      case "boolean":
        switch (runtimeEnv) {
          case "Surge":
          case "Stash":
          case "Egern":
          default:
            local7.url = item12;
            break;
          case "Loon":
          case "Shadowrocket":
            local7.openUrl = item12;
            break;
          case "Quantumult X":
            local7["open-url"] = item12;
          case "Node.js":
        }
        break;
      case "object":
        {
          const local8 = item12.open || item12["open-url"] || item12.url || item12.openUrl;
          const local9 = item12.copy || item12["update-pasteboard"] || item12.updatePasteboard;
          const local10 = item12.media || item12["media-url"] || item12.mediaUrl;
          switch (runtimeEnv) {
            case "Surge":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
            default:
              if (local8) {
                local7.action = "open-url";
                local7.url = local8;
              }
              if (local9) {
                local7.action = "clipboard";
                local7.text = local9;
              }
              if (local10) {
                switch (true) {
                  case local10.startsWith("http"):
                    local7["media-url"] = local10;
                    break;
                  case local10.startsWith("data:"):
                    {
                      const local11 = /^data:(?<MIME>\w+\/\w+);base64,(?<Base64>.+)/;
                      const {
                        MIME: value16,
                        Base64: value17
                      } = local10.match(local11).groups;
                      local7["media-base64"] = value17;
                      local7["media-base64-mime"] = item12.mime || value16;
                      break;
                    }
                  default:
                    local7["media-base64"] = local10;
                    switch (true) {
                      case local10.startsWith("CiVQREYt"):
                      case local10.startsWith("JVBERi0"):
                        local7["media-base64-mime"] = "application/pdf";
                        break;
                      case local10.startsWith("R0lGODdh"):
                      case local10.startsWith("R0lGODlh"):
                        local7["media-base64-mime"] = "image/gif";
                        break;
                      case local10.startsWith("iVBORw0KGgo"):
                        local7["media-base64-mime"] = "image/png";
                        break;
                      case local10.startsWith("/9j/"):
                        local7["media-base64-mime"] = "image/jpg";
                        break;
                      case local10.startsWith("Qk02U"):
                        local7["media-base64-mime"] = "image/bmp";
                    }
                }
              }
              if (item12["auto-dismiss"]) {
                local7["auto-dismiss"] = item12["auto-dismiss"];
              }
              if (item12.sound) {
                local7.sound = item12.sound;
              }
              break;
            case "Loon":
              if (local8) {
                local7.openUrl = local8;
              }
              if (local10?.startsWith("http")) {
                local7.mediaUrl = local10;
              }
              break;
            case "Quantumult X":
              if (local8) {
                local7["open-url"] = local8;
              }
              if (local10?.startsWith("http")) {
                local7["media-url"] = local10;
              }
              if (local9) {
                local7["update-pasteboard"] = local9;
              }
            case "Node.js":
          }
          break;
        }
      default:
        Logger.error("不支持的通知参数类型: " + typeof item12, "");
    }
    return local7;
  };
  async function request(arg21, arg22) {
    switch (arg21.constructor) {
      case Object:
        arg21 = {
          ...arg22,
          ...arg21
        };
        break;
      case String:
        arg21 = {
          ...arg22,
          url: arg21
        };
    }
    if (!arg21.method) {
      arg21.method = "GET";
      if (arg21.body ?? arg21.bodyBytes) {
        arg21.method = "POST";
      }
    }
    delete arg21.headers?.Host;
    delete arg21.headers?.[":authority"];
    delete arg21.headers?.["Content-Length"];
    delete arg21.headers?.["content-length"];
    const local12 = arg21.method.toLocaleLowerCase();
    switch (runtimeEnv) {
      case "Loon":
      case "Surge":
      case "Stash":
      case "Egern":
      case "Shadowrocket":
      default:
        if (arg21.timeout) {
          arg21.timeout = Number.parseInt(arg21.timeout, 10);
          switch (runtimeEnv) {
            case "Loon":
            case "Shadowrocket":
            case "Stash":
            case "Egern":
            default:
              arg21.timeout = arg21.timeout / 1000;
            case "Surge":
          }
        }
        if (arg21.policy) {
          switch (runtimeEnv) {
            case "Loon":
              arg21.node = arg21.policy;
              break;
            case "Stash":
              PathUtils.set(arg21, "headers.X-Stash-Selected-Proxy", encodeURI(arg21.policy));
              break;
            case "Shadowrocket":
              PathUtils.set(arg21, "headers.X-Surge-Proxy", arg21.policy);
          }
        }
        if (typeof arg21.redirection == "boolean") {
          arg21["auto-redirect"] = arg21.redirection;
        }
        if (arg21.bodyBytes && !arg21.body) {
          arg21.body = arg21.bodyBytes;
          arg21.bodyBytes = undefined;
        }
        switch ((arg21.headers?.Accept || arg21.headers?.accept)?.split(";")?.[0]) {
          case "application/protobuf":
          case "application/x-protobuf":
          case "application/vnd.google.protobuf":
          case "application/vnd.apple.flatbuffer":
          case "application/grpc":
          case "application/grpc+proto":
          case "application/octet-stream":
            arg21["binary-mode"] = true;
        }
        return await new Promise((arg23, arg24) => {
          $httpClient[local12](arg21, (arg25, arg26, arg27) => {
            if (arg25) {
              arg24(arg25);
            } else {
              arg26.ok = /^2\d\d$/.test(arg26.status);
              arg26.statusCode = arg26.status;
              if (arg27) {
                arg26.body = arg27;
                if (arg21["binary-mode"] == 1) {
                  arg26.bodyBytes = arg27;
                }
              }
              arg23(arg26);
            }
          });
        });
      case "Quantumult X":
        if (arg21.policy) {
          PathUtils.set(arg21, "opts.policy", arg21.policy);
        }
        if (typeof arg21["auto-redirect"] == "boolean") {
          PathUtils.set(arg21, "opts.redirection", arg21["auto-redirect"]);
        }
        if (arg21.body instanceof ArrayBuffer) {
          arg21.bodyBytes = arg21.body;
          arg21.body = undefined;
        } else if (ArrayBuffer.isView(arg21.body)) {
          arg21.bodyBytes = arg21.body.buffer.slice(arg21.body.byteOffset, arg21.body.byteLength + arg21.body.byteOffset);
          arg21.body = undefined;
        } else if (arg21.body) {
          arg21.bodyBytes = undefined;
        }
        return await $task.fetch(arg21).then(item13 => {
          item13.ok = /^2\d\d$/.test(item13.statusCode);
          item13.status = item13.statusCode;
          switch ((item13.headers?.["Content-Type"] ?? item13.headers?.["content-type"])?.split(";")?.[0]) {
            case "application/protobuf":
            case "application/x-protobuf":
            case "application/vnd.google.protobuf":
            case "application/vnd.apple.flatbuffer":
            case "application/grpc":
            case "application/grpc+proto":
            case "application/octet-stream":
              item13.body = item13.bodyBytes;
          }
          item13.bodyBytes = undefined;
          return item13;
        }, item14 => Promise.reject(item14.error));
      case "Node.js":
        {
          const local13 = require("iconv-lite");
          const local14 = globalThis.got ? globalThis.got : require("got");
          const local15 = globalThis.cktough ? globalThis.cktough : require("tough-cookie");
          const local16 = globalThis.ckjar ? globalThis.ckjar : new local15.CookieJar();
          if (arg21) {
            arg21.headers = arg21.headers ? arg21.headers : {};
            if (arg21.headers.Cookie === undefined && arg21.cookieJar === undefined) {
              arg21.cookieJar = local16;
            }
          }
          const {
            url: value18,
            ...value19
          } = arg21;
          return await local14[local12](value18, value19).on("redirect", (arg28, arg29) => {
            try {
              if (arg28.headers["set-cookie"]) {
                const local17 = arg28.headers["set-cookie"].map(local15.Cookie.parse).toString();
                if (local17) {
                  local16.setCookieSync(local17, null);
                }
                arg29.cookieJar = local16;
              }
            } catch (value20) {
              Logger.error(value20);
            }
          }).then(item15 => {
            item15.statusCode = item15.status;
            item15.body = local13.decode(item15.rawBody, "utf-8");
            item15.bodyBytes = item15.rawBody;
            item15.ok = /^2\d\d$/.test(item15.statusCode) || !item15.statusCode && item15.statusMessage === "OK";
            return item15;
          }, item16 => Promise.reject(item16.message));
        }
    }
  }
  class PersistStore {
    static data = null;
    static dataFile = "box.dat";
    static #a = /^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;
    static getItem(value21, value22 = null) {
      let local18 = value22;
      switch (value21.startsWith("@")) {
        case true:
          {
            const {
              key: value23,
              path: value24
            } = value21.match(PersistStore.#a)?.groups;
            value21 = value23;
            let local19 = PersistStore.getItem(value21, {});
            if (typeof local19 != "object") {
              local19 = {};
            }
            local18 = PathUtils.get(local19, value24);
            try {
              local18 = JSON.parse(local18);
            } catch (value25) {}
            break;
          }
        default:
          switch (runtimeEnv) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
              local18 = $persistentStore.read(value21);
              break;
            case "Quantumult X":
              local18 = $prefs.valueForKey(value21);
              break;
            case "Node.js":
              PersistStore.data = PersistStore.#n(PersistStore.dataFile);
              local18 = PersistStore.data?.[value21];
              break;
            default:
              local18 = PersistStore.data?.[value21] || null;
          }
          try {
            local18 = JSON.parse(local18);
          } catch (value26) {}
      }
      return local18 ?? value22;
    }
    static setItem(value27 = new String(), value28 = new String()) {
      let local20 = false;
      if (typeof value28 == "object") {
        value28 = JSON.stringify(value28);
      } else {
        value28 = String(value28);
      }
      switch (value27.startsWith("@")) {
        case true:
          {
            const {
              key: value29,
              path: value30
            } = value27.match(PersistStore.#a)?.groups;
            value27 = value29;
            let local21 = PersistStore.getItem(value27, {});
            if (typeof local21 != "object") {
              local21 = {};
            }
            PathUtils.set(local21, value30, value28);
            local20 = PersistStore.setItem(value27, local21);
            break;
          }
        default:
          switch (runtimeEnv) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
              local20 = $persistentStore.write(value28, value27);
              break;
            case "Quantumult X":
              local20 = $prefs.setValueForKey(value28, value27);
              break;
            case "Node.js":
              PersistStore.data = PersistStore.#n(PersistStore.dataFile);
              PersistStore.data[value27] = value28;
              PersistStore.#i(PersistStore.dataFile);
              local20 = true;
              break;
            default:
              local20 = PersistStore.data?.[value27] || null;
          }
      }
      return local20;
    }
    static removeItem(value31) {
      let local22 = false;
      switch (value31.startsWith("@")) {
        case true:
          {
            const {
              key: value32,
              path: value33
            } = value31.match(PersistStore.#a)?.groups;
            value31 = value32;
            let local23 = PersistStore.getItem(value31);
            if (typeof local23 != "object") {
              local23 = {};
            }
            keyValue = PathUtils.unset(local23, value33);
            local22 = PersistStore.setItem(value31, local23);
            break;
          }
        default:
          switch (runtimeEnv) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
            case "Node.js":
            default:
              local22 = false;
              break;
            case "Quantumult X":
              local22 = $prefs.removeValueForKey(value31);
          }
      }
      return local22;
    }
    static clear() {
      let local24 = false;
      switch (runtimeEnv) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Egern":
        case "Shadowrocket":
        case "Node.js":
        default:
          local24 = false;
          break;
        case "Quantumult X":
          local24 = $prefs.removeAllValues();
      }
      return local24;
    }
    static #n = item17 => {
      if (runtimeEnv !== "Node.js") {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("node:fs");
        this.path = this.path ? this.path : require("node:path");
        const local25 = this.path.resolve(item17);
        const local26 = this.path.resolve(process.cwd(), item17);
        const local27 = this.fs.existsSync(local25);
        const local28 = !local27 && this.fs.existsSync(local26);
        if (!local27 && !local28) {
          return {};
        }
        {
          const local29 = local27 ? local25 : local26;
          try {
            return JSON.parse(this.fs.readFileSync(local29));
          } catch (value34) {
            return {};
          }
        }
      }
    };
    static #i = (arg30 = this.dataFile) => {
      if (runtimeEnv === "Node.js") {
        this.fs = this.fs ? this.fs : require("node:fs");
        this.path = this.path ? this.path : require("node:path");
        const local30 = this.path.resolve(arg30);
        const local31 = this.path.resolve(process.cwd(), arg30);
        const local32 = this.fs.existsSync(local30);
        const local33 = !local32 && this.fs.existsSync(local31);
        const local34 = JSON.stringify(this.data);
        if (local32) {
          this.fs.writeFileSync(local30, local34);
        } else if (local33) {
          this.fs.writeFileSync(local31, local34);
        } else {
          this.fs.writeFileSync(local30, local34);
        }
      }
    };
  }
  function _arrayWithHolesOrIterator(arg31, arg32) {
    return function (value35) {
      if (Array.isArray(value35)) {
        return value35;
      }
    }(arg31) || function (value36, value37) {
      var local35 = value36 == null ? null : typeof Symbol != "undefined" && value36[Symbol.iterator] || value36["@@iterator"];
      if (local35 != null) {
        var local36;
        var local37;
        var local38;
        var local39;
        var local40 = [];
        var local41 = true;
        var local42 = false;
        try {
          local38 = (local35 = local35.call(value36)).next;
          if (value37 === 0) {
            if (Object(local35) !== local35) {
              return;
            }
            local41 = false;
          } else {
            for (; !(local41 = (local36 = local38.call(local35)).done) && (local40.push(local36.value), local40.length !== value37); local41 = true);
          }
        } catch (value38) {
          local42 = true;
          local37 = value38;
        } finally {
          try {
            if (!local41 && local35.return != null && (local39 = local35.return(), Object(local39) !== local39)) {
              return;
            }
          } finally {
            if (local42) {
              throw local37;
            }
          }
        }
        return local40;
      }
    }(arg31, arg32) || function (value39, value40) {
      if (value39) {
        if (typeof value39 == "string") {
          return _arrayLikeToArray(value39, value40);
        }
        var local43 = {}.toString.call(value39).slice(8, -1);
        if (local43 === "Object" && value39.constructor) {
          local43 = value39.constructor.name;
        }
        if (local43 === "Map" || local43 === "Set") {
          return Array.from(value39);
        } else if (local43 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(local43)) {
          return _arrayLikeToArray(value39, value40);
        } else {
          return undefined;
        }
      }
    }(arg31, arg32) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _arrayLikeToArray(arg33, arg34) {
    if (arg34 == null || arg34 > arg33.length) {
      arg34 = arg33.length;
    }
    for (var index1 = 0, value41 = Array(arg34); index1 < arg34; index1++) {
      value41[index1] = arg33[index1];
    }
    return value41;
  }
  function safeJSONStringify(arg35) {
    if (typeof arg35 == "string") {
      return arg35;
    }
    try {
      for (var index2 = arguments.length, value42 = new Array(index2 > 1 ? index2 - 1 : 0), value43 = 1; value43 < index2; value43++) {
        value42[value43 - 1] = arguments[value43];
      }
      return JSON.stringify.apply(JSON, [arg35].concat(value42));
    } catch (value44) {
      return arg35;
    }
  }
  function joinUrl(arg36, arg37) {
    if (arg37) {
      return arg36.replace(/\/+$/, "") + "/" + arg37.replace(/^\/+/, "");
    } else {
      return arg36;
    }
  }
  function _typeofSymbolSafe(arg38) {
    _typeofSymbolSafe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (value45) {
      return typeof value45;
    } : function (value46) {
      if (value46 && typeof Symbol == "function" && value46.constructor === Symbol && value46 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof value46;
      }
    };
    return _typeofSymbolSafe(arg38);
  }
  function add64(leftPair, rightPair) {
    leftPair = [leftPair[0] >>> 16, leftPair[0] & 65535, leftPair[1] >>> 16, leftPair[1] & 65535];
    rightPair = [rightPair[0] >>> 16, rightPair[0] & 65535, rightPair[1] >>> 16, rightPair[1] & 65535];
    var result = [0, 0, 0, 0];
    result[3] += leftPair[3] + rightPair[3];
    result[2] += result[3] >>> 16;
    result[3] &= 65535;
    result[2] += leftPair[2] + rightPair[2];
    result[1] += result[2] >>> 16;
    result[2] &= 65535;
    result[1] += leftPair[1] + rightPair[1];
    result[0] += result[1] >>> 16;
    result[1] &= 65535;
    result[0] += leftPair[0] + rightPair[0];
    result[0] &= 65535;
    return [result[0] << 16 | result[1], result[2] << 16 | result[3]];
  }

  function multiply64(leftPair, rightPair) {
    leftPair = [leftPair[0] >>> 16, leftPair[0] & 65535, leftPair[1] >>> 16, leftPair[1] & 65535];
    rightPair = [rightPair[0] >>> 16, rightPair[0] & 65535, rightPair[1] >>> 16, rightPair[1] & 65535];
    var result = [0, 0, 0, 0];
    result[3] += leftPair[3] * rightPair[3];
    result[2] += result[3] >>> 16;
    result[3] &= 65535;
    result[2] += leftPair[2] * rightPair[3];
    result[1] += result[2] >>> 16;
    result[2] &= 65535;
    result[2] += leftPair[3] * rightPair[2];
    result[1] += result[2] >>> 16;
    result[2] &= 65535;
    result[1] += leftPair[1] * rightPair[3];
    result[0] += result[1] >>> 16;
    result[1] &= 65535;
    result[1] += leftPair[2] * rightPair[2];
    result[0] += result[1] >>> 16;
    result[1] &= 65535;
    result[1] += leftPair[3] * rightPair[1];
    result[0] += result[1] >>> 16;
    result[1] &= 65535;
    result[0] += leftPair[0] * rightPair[3] + leftPair[1] * rightPair[2] + leftPair[2] * rightPair[1] + leftPair[3] * rightPair[0];
    result[0] &= 65535;
    return [result[0] << 16 | result[1], result[2] << 16 | result[3]];
  }

  function rotateLeft64(pair, shift) {
    if ((shift %= 64) == 32) {
      return [pair[1], pair[0]];
    } else if (shift < 32) {
      return [pair[0] << shift | pair[1] >>> 32 - shift, pair[1] << shift | pair[0] >>> 32 - shift];
    } else {
      shift -= 32;
      return [pair[1] << shift | pair[0] >>> 32 - shift, pair[0] << shift | pair[1] >>> 32 - shift];
    }
  }

  function leftShift64(pair, shift) {
    if ((shift %= 64) == 0) {
      return pair;
    } else if (shift < 32) {
      return [pair[0] << shift | pair[1] >>> 32 - shift, pair[1] << shift];
    } else {
      return [pair[1] << shift - 32, 0];
    }
  }

  function xor64(leftPair, rightPair) {
    return [leftPair[0] ^ rightPair[0], leftPair[1] ^ rightPair[1]];
  }

  function fmix64(hashPair) {
    hashPair = xor64(hashPair, [0, hashPair[0] >>> 1]);
    hashPair = multiply64(hashPair, [4283543511, 3981806797]);
    hashPair = xor64(hashPair, [0, hashPair[0] >>> 1]);
    hashPair = multiply64(hashPair, [3301882366, 444984403]);
    return xor64(hashPair, [0, hashPair[0] >>> 1]);
  }

  function murmurHash128(input, seed) {
    seed = seed || 0;
    var remainder = (input = input || "").length % 16;
    var bytes = input.length - remainder;
    var h1 = [0, seed];
    var h2 = [0, seed];
    var k1 = [0, 0];
    var k2 = [0, 0];
    var c1 = [2277735313, 289559509];
    var c2 = [1291169091, 658871167];

    for (var offset = 0; offset < bytes; offset += 16) {
      k1 = [input.charCodeAt(offset + 4) & 255 | (input.charCodeAt(offset + 5) & 255) << 8 | (input.charCodeAt(offset + 6) & 255) << 16 | (input.charCodeAt(offset + 7) & 255) << 24, input.charCodeAt(offset) & 255 | (input.charCodeAt(offset + 1) & 255) << 8 | (input.charCodeAt(offset + 2) & 255) << 16 | (input.charCodeAt(offset + 3) & 255) << 24];
      k2 = [input.charCodeAt(offset + 12) & 255 | (input.charCodeAt(offset + 13) & 255) << 8 | (input.charCodeAt(offset + 14) & 255) << 16 | (input.charCodeAt(offset + 15) & 255) << 24, input.charCodeAt(offset + 8) & 255 | (input.charCodeAt(offset + 9) & 255) << 8 | (input.charCodeAt(offset + 10) & 255) << 16 | (input.charCodeAt(offset + 11) & 255) << 24];
      k1 = multiply64(k1, c1);
      k1 = rotateLeft64(k1, 31);
      k1 = multiply64(k1, c2);
      h1 = xor64(h1, k1);
      h1 = rotateLeft64(h1, 27);
      h1 = add64(h1, h2);
      h1 = add64(multiply64(h1, [0, 5]), [0, 1390208809]);
      k2 = multiply64(k2, c2);
      k2 = rotateLeft64(k2, 33);
      k2 = multiply64(k2, c1);
      h2 = xor64(h2, k2);
      h2 = rotateLeft64(h2, 31);
      h2 = add64(h2, h1);
      h2 = add64(multiply64(h2, [0, 5]), [0, 944331445]);
    }

    k1 = [0, 0];
    k2 = [0, 0];
    switch (remainder) {
      case 15:
        k2 = xor64(k2, leftShift64([0, input.charCodeAt(offset + 14)], 48));
      case 14:
        k2 = xor64(k2, leftShift64([0, input.charCodeAt(offset + 13)], 40));
      case 13:
        k2 = xor64(k2, leftShift64([0, input.charCodeAt(offset + 12)], 32));
      case 12:
        k2 = xor64(k2, leftShift64([0, input.charCodeAt(offset + 11)], 24));
      case 11:
        k2 = xor64(k2, leftShift64([0, input.charCodeAt(offset + 10)], 16));
      case 10:
        k2 = xor64(k2, leftShift64([0, input.charCodeAt(offset + 9)], 8));
      case 9:
        k2 = xor64(k2, [0, input.charCodeAt(offset + 8)]);
        k2 = multiply64(k2, c2);
        k2 = rotateLeft64(k2, 33);
        k2 = multiply64(k2, c1);
        h2 = xor64(h2, k2);
      case 8:
        k1 = xor64(k1, leftShift64([0, input.charCodeAt(offset + 7)], 56));
      case 7:
        k1 = xor64(k1, leftShift64([0, input.charCodeAt(offset + 6)], 48));
      case 6:
        k1 = xor64(k1, leftShift64([0, input.charCodeAt(offset + 5)], 40));
      case 5:
        k1 = xor64(k1, leftShift64([0, input.charCodeAt(offset + 4)], 32));
      case 4:
        k1 = xor64(k1, leftShift64([0, input.charCodeAt(offset + 3)], 24));
      case 3:
        k1 = xor64(k1, leftShift64([0, input.charCodeAt(offset + 2)], 16));
      case 2:
        k1 = xor64(k1, leftShift64([0, input.charCodeAt(offset + 1)], 8));
      case 1:
        k1 = xor64(k1, [0, input.charCodeAt(offset)]);
        k1 = multiply64(k1, c1);
        k1 = rotateLeft64(k1, 31);
        k1 = multiply64(k1, c2);
        h1 = xor64(h1, k1);
    }

    h1 = xor64(h1, [0, input.length]);
    h2 = xor64(h2, [0, input.length]);
    h1 = add64(h1, h2);
    h2 = add64(h2, h1);
    h1 = fmix64(h1);
    h2 = fmix64(h2);
    h1 = add64(h1, h2);
    h2 = add64(h2, h1);

    return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
  }

  function encodeWithAlphabet(rawText, alphabet) {
    var length = rawText.length;
    var index = 0;
    var encoded = "";
    while (index < length) {
      var firstByte = rawText.charCodeAt(index++) & 255;
      if (index == length) {
        encoded += alphabet.charAt(firstByte >> 2);
        encoded += alphabet.charAt((firstByte & 3) << 4);
        encoded += "==";
        break;
      }
      var secondByte = rawText.charCodeAt(index++);
      if (index == length) {
        encoded += alphabet.charAt(firstByte >> 2);
        encoded += alphabet.charAt((firstByte & 3) << 4 | (secondByte & 240) >> 4);
        encoded += alphabet.charAt((secondByte & 15) << 2);
        encoded += "=";
        break;
      }
      var thirdByte = rawText.charCodeAt(index++);
      encoded += alphabet.charAt(firstByte >> 2);
      encoded += alphabet.charAt((firstByte & 3) << 4 | (secondByte & 240) >> 4);
      encoded += alphabet.charAt((secondByte & 15) << 2 | (thirdByte & 192) >> 6);
      encoded += alphabet.charAt(thirdByte & 63);
    }
    return encoded;
  }

  function calculateAnswer(lengthToken, multiplierToken) {
    var sum = 0;
    var multiplier = 1;
    for (var i = 0; i < lengthToken.length; i++) {
      sum = (sum + lengthToken.charCodeAt(i)) * 2;
      multiplier = (multiplier + i + 1) * 2;
    }
    sum *= multiplierToken;
    return "WZWS_CONFIRM_PREFIX_LABEL" + (sum + multiplier);
  }

  function collectFingerprintData() {
    const locationInfo = {
      ancestorOrigins: {},
      href: "https://www.52pojie.cn//",
      origin: "https://www.52pojie.cn",
      protocol: "https:",
      host: "www.52pojie.cn",
      hostname: "www.52pojie.cn",
      port: "",
      pathname: "//",
      search: "",
      hash: ""
    };

    const pdfViewer = {
      name: "PDF Viewer",
      description: "Portable Document Format",
      filename: "internal-pdf-viewer",
      mimetypes: [Array]
    };
    const chromePdfViewer = {
      name: "Chrome PDF Viewer",
      description: "Portable Document Format",
      filename: "internal-pdf-viewer",
      mimetypes: [Array]
    };
    const chromiumPdfViewer = {
      name: "Chromium PDF Viewer",
      description: "Portable Document Format",
      filename: "internal-pdf-viewer",
      mimetypes: [Array]
    };
    const edgePdfViewer = {
      name: "Microsoft Edge PDF Viewer",
      description: "Portable Document Format",
      filename: "internal-pdf-viewer",
      mimetypes: [Array]
    };
    const webkitPdfViewer = {
      name: "WebKit built-in PDF",
      description: "Portable Document Format",
      filename: "internal-pdf-viewer",
      mimetypes: [Array]
    };

    const plugins = {
      details: [pdfViewer, chromePdfViewer, chromiumPdfViewer, edgePdfViewer, webkitPdfViewer],
      names: ["Chrome PDF Viewer", "Chromium PDF Viewer", "Microsoft Edge PDF Viewer", "PDF Viewer", "WebKit built-in PDF"],
      fp: "9772d5556d57fcc8177f76029bfd92ef"
    };

    const screenObject = {
      screenResolution: [1707, 1067],
      availableScreenResolution: [1707, 1027],
      colorDepth: 24,
      availTop: 0,
      availLeft: 0,
      isExtended: false,
      pixelDepth: 24,
      top: undefined,
      left: undefined,
      orientation: {
        angle: 0,
        type: "landscape-primary"
      }
    };

    const intlObject = {
      locale: "zh-CN",
      calendar: "gregory",
      numberingSystem: "latn",
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      timezoneOffset: -480
    };

    const entries = [{
      key: "plugins",
      value: plugins
    }, {
      key: "fonts",
      value: {
        names: ["Arial", "Arial Black", "Arial Narrow", "Calibri", "Cambria", "Cambria Math", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Georgia", "Helvetica", "Impact", "Lucida Console", "Lucida Sans Unicode", "Microsoft Sans Serif", "MS Gothic", "MS PGothic", "MS Sans Serif", "MS Serif", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Trebuchet MS", "Verdana", "Wingdings"],
        fp: "f730c0cc627b3b3d7db9f459836db692"
      }
    }, {
      key: "screenObject",
      value: screenObject
    }, {
      key: "intlObject",
      value: intlObject
    }, {
      key: "touchSupport",
      value: [0, false, false]
    }, {
      key: "audio",
      value: "124.04347527516074"
    }, {
      key: "webdriver",
      value: false
    }, {
      key: "webGL",
      value: {
        webgl_version: "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
        webgl_vendor_and_renderer: "Google Inc. (Intel)~ANGLE (Intel, Intel(R) Iris(R) Xe Graphics (0x000046A6) Direct3D11 vs_5_0 ps_5_0, D3D11)",
        webgl_unmasked_renderer: "ANGLE (Intel, Intel(R) Iris(R) Xe Graphics (0x000046A6) Direct3D11 vs_5_0 ps_5_0, D3D11)",
        webgl_unmasked_vendor: "Google Inc. (Intel)",
        webgl_aliased_point_size_range: [1, 1024],
        webgl_fragment_shader_medium_int_precision_rangeMax: 30,
        webgl_fragment_shader_medium_int_precision_rangeMin: 31,
        fp: "d8094cf352a36fe0b99dbff3c6db2c58"
      }
    }, {
      key: "canvas",
      value: {
        canvas_winding: true,
        fp: "5fbf2146755f8f4c0e9d76a387926c42"
      }
    }, {
      key: "deviceInfos",
      value: {
        deviceMemory: 8,
        hardwareConcurrency: 16
      }
    }, {
      key: "storageObject",
      value: {
        localStorage: true,
        openDatabase: false,
        indexedDb: true,
        sessionStorage: true,
        addBehavior: false
      }
    }, {
      key: "navigatorObject",
      value: {
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
        platform: "Win32",
        vendor: "Google Inc.",
        language: "zh-CN",
        languages: ["zh-CN", "zh"],
        productSub: "20030107"
      }
    }, {
      key: "functions",
      value: {
        eval_tostring_length: 33
      }
    }];

    return {
      locationInfo,
      entries
    };
  }

  function computeFingerprint(fingerprintInfo) {
    const selectedFeatures = [fingerprintInfo.plugins && fingerprintInfo.plugins.fp, fingerprintInfo.fonts && fingerprintInfo.fonts.fp, fingerprintInfo.screenObject.colorDepth, fingerprintInfo.intlObject, fingerprintInfo.deviceInfos, fingerprintInfo.touchSupport, fingerprintInfo.navigatorObject.platform, fingerprintInfo.navigatorObject.vendor, fingerprintInfo.storageObject, fingerprintInfo.functions, fingerprintInfo.audio, typeof fingerprintInfo.webGL == "object" ? fingerprintInfo.webGL.fp : undefined, typeof fingerprintInfo.canvas == "object" ? fingerprintInfo.canvas.fp : undefined];
    for (var i in selectedFeatures) {
      if (selectedFeatures[i] === undefined) {
        selectedFeatures[i] = "";
      }
    }
    return murmurHash128(selectedFeatures.toString(), 31);
  }

  function computeFingerprintInfos(entries, locationInfo) {
    const fpInfos = {
      errors: {}
    };

    for (const item of entries) {
      const key = item.key;
      const value = item.value;
      if (typeof value == "string" && value.indexOf("Error: ") != -1) {
        fpInfos.errors[key] = value;
      } else {
        fpInfos[key] = value;
      }
    }

    const now = new Date();
    fpInfos.dateTime = {
      timestamp: now.getTime()
    };
    fpInfos.fp = computeFingerprint(fpInfos);
    fpInfos.protocol = locationInfo.protocol.replace(":", "");

    const verifySeed = fpInfos.dateTime.timestamp % 10 || 10;
    for (const sectionKey in fpInfos) {
      const sectionValue = fpInfos[sectionKey];
      if (_typeofSymbolSafe(sectionValue) == "object") {
        let sectionScore = 0;
        for (const subKey in sectionValue) {
          const subValue = sectionValue[subKey];
          sectionScore += typeof subValue == "number" ? parseInt(subValue) : typeof subValue == "string" ? subValue.length : verifySeed;
        }
        if (sectionScore) {
          fpInfos[sectionKey].verify = sectionScore * verifySeed;
        }
      }
    }

    return fpInfos;
  }

  function constructVerifyObject(lengthToken, multiplierToken, locationInfo, fpInfos) {
    return {
      fp_infos: fpInfos,
      answer: calculateAnswer(lengthToken, multiplierToken),
      hostname: locationInfo.hostname,
      scheme: locationInfo.protocol.replace(":", "")
    };
  }

  function buildVerifyPayload(verifyParams) {
    var lengthToken = verifyParams.LZ;
    var multiplierToken = verifyParams.LJ;
    var alphabet = verifyParams.LE;

    if (!(lengthToken && multiplierToken && alphabet)) {
      return;
    }

    // 1) 指纹收集
    const {
      locationInfo,
      entries
    } = collectFingerprintData();

    // 2) fp 计算
    const fpInfos = computeFingerprintInfos(entries, locationInfo);

    // 3) verify 构造
    const verifyObject = constructVerifyObject(lengthToken, multiplierToken, locationInfo, fpInfos);

    return encodeWithAlphabet(JSON.stringify(verifyObject), alphabet);
  }

  function _typeofArgumentSafe(arg39) {
    _typeofArgumentSafe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (value47) {
      return typeof value47;
    } : function (value48) {
      if (value48 && typeof Symbol == "function" && value48.constructor === Symbol && value48 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof value48;
      }
    };
    return _typeofArgumentSafe(arg39);
  }
  var scriptArgs = typeof $argument != "undefined" ? (typeof $argument == "undefined" ? "undefined" : _typeofArgumentSafe($argument)) == "object" ? $argument : Object.fromEntries($argument.split("&").map(function (value49) {
    return value49.split("=");
  })) : {};
  function _typeofValueSafe(arg40) {
    _typeofValueSafe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (value50) {
      return typeof value50;
    } : function (value51) {
      if (value51 && typeof Symbol == "function" && value51.constructor === Symbol && value51 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof value51;
      }
    };
    return _typeofValueSafe(arg40);
  }
  function _ownKeys(arg41, arg42) {
    var local44 = Object.keys(arg41);
    if (Object.getOwnPropertySymbols) {
      var local45 = Object.getOwnPropertySymbols(arg41);
      if (arg42) {
        local45 = local45.filter(function (value52) {
          return Object.getOwnPropertyDescriptor(arg41, value52).enumerable;
        });
      }
      local44.push.apply(local44, local45);
    }
    return local44;
  }
  function _objectSpread(arg43) {
    for (var index3 = 1; index3 < arguments.length; index3++) {
      var local46 = arguments[index3] ?? {};
      if (index3 % 2) {
        _ownKeys(Object(local46), true).forEach(function (value53) {
          _defineProperty(arg43, value53, local46[value53]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(arg43, Object.getOwnPropertyDescriptors(local46));
      } else {
        _ownKeys(Object(local46)).forEach(function (value54) {
          Object.defineProperty(arg43, value54, Object.getOwnPropertyDescriptor(local46, value54));
        });
      }
    }
    return arg43;
  }
  function _defineProperty(arg44, arg45, arg46) {
    if ((arg45 = function (value55) {
      var local47 = function (value56, value57) {
        if (_typeofValueSafe(value56) != "object" || !value56) {
          return value56;
        }
        var local48 = value56[Symbol.toPrimitive];
        if (local48 !== undefined) {
          var local49 = local48.call(value56, value57 || "default");
          if (_typeofValueSafe(local49) != "object") {
            return local49;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (value57 === "string" ? String : Number)(value56);
      }(value55, "string");
      if (_typeofValueSafe(local47) == "symbol") {
        return local47;
      } else {
        return local47 + "";
      }
    }(arg45)) in arg44) {
      Object.defineProperty(arg44, arg45, {
        value: arg46,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      arg44[arg45] = arg46;
    }
    return arg44;
  }
  function _slicedToArray(arg47, arg48) {
    return function (value58) {
      if (Array.isArray(value58)) {
        return value58;
      }
    }(arg47) || function (value59, value60) {
      var local50 = value59 == null ? null : typeof Symbol != "undefined" && value59[Symbol.iterator] || value59["@@iterator"];
      if (local50 != null) {
        var local51;
        var local52;
        var local53;
        var local54;
        var local55 = [];
        var local56 = true;
        var local57 = false;
        try {
          local53 = (local50 = local50.call(value59)).next;
          if (value60 === 0) {
            if (Object(local50) !== local50) {
              return;
            }
            local56 = false;
          } else {
            for (; !(local56 = (local51 = local53.call(local50)).done) && (local55.push(local51.value), local55.length !== value60); local56 = true);
          }
        } catch (value61) {
          local57 = true;
          local52 = value61;
        } finally {
          try {
            if (!local56 && local50.return != null && (local54 = local50.return(), Object(local54) !== local54)) {
              return;
            }
          } finally {
            if (local57) {
              throw local52;
            }
          }
        }
        return local55;
      }
    }(arg47, arg48) || function (value62, value63) {
      if (value62) {
        if (typeof value62 == "string") {
          return _arrayLikeToArrayLoose(value62, value63);
        }
        var local58 = {}.toString.call(value62).slice(8, -1);
        if (local58 === "Object" && value62.constructor) {
          local58 = value62.constructor.name;
        }
        if (local58 === "Map" || local58 === "Set") {
          return Array.from(value62);
        } else if (local58 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(local58)) {
          return _arrayLikeToArrayLoose(value62, value63);
        } else {
          return undefined;
        }
      }
    }(arg47, arg48) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _arrayLikeToArrayLoose(arg49, arg50) {
    if (arg50 == null || arg50 > arg49.length) {
      arg50 = arg49.length;
    }
    for (var index4 = 0, value64 = Array(arg50); index4 < arg50; index4++) {
      value64[index4] = arg49[index4];
    }
    return value64;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return local59;
    };
    var local60;
    var local59 = {};
    var local61 = Object.prototype;
    var local62 = local61.hasOwnProperty;
    var local63 = Object.defineProperty || function (value65, value66, value67) {
      value65[value66] = value67.value;
    };
    var local64 = typeof Symbol == "function" ? Symbol : {};
    var local65 = local64.iterator || "@@iterator";
    var local66 = local64.asyncIterator || "@@asyncIterator";
    var local67 = local64.toStringTag || "@@toStringTag";
    function helperFn8(arg51, arg52, arg53) {
      var local68 = {
        value: arg53,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(arg51, arg52, local68);
      return arg51[arg52];
    }
    try {
      helperFn8({}, "");
    } catch (value68) {
      helperFn8 = function (value69, value70, value71) {
        return value69[value70] = value71;
      };
    }
    function helperFn9(arg54, arg55, arg56, arg57) {
      var local69 = arg55 && arg55.prototype instanceof helperFn10 ? arg55 : helperFn10;
      var local70 = Object.create(local69.prototype);
      var local71 = new helperFn11(arg57 || []);
      local63(local70, "_invoke", {
        value: helperFn12(arg54, arg56, local71)
      });
      return local70;
    }
    function helperFn13(arg58, arg59, arg60) {
      try {
        return {
          type: "normal",
          arg: arg58.call(arg59, arg60)
        };
      } catch (value72) {
        var local72 = {
          type: "throw",
          arg: value72
        };
        return local72;
      }
    }
    local59.wrap = helperFn9;
    var local73 = "suspendedStart";
    var local74 = "suspendedYield";
    var local75 = "executing";
    var local76 = "completed";
    var local77 = {};
    function helperFn10() {}
    function helperFn14() {}
    function helperFn15() {}
    var local78 = {};
    helperFn8(local78, local65, function () {
      return this;
    });
    var local79 = Object.getPrototypeOf;
    var local80 = local79 && local79(local79(helperFn16([])));
    if (local80 && local80 !== local61 && local62.call(local80, local65)) {
      local78 = local80;
    }
    var local81 = helperFn15.prototype = helperFn10.prototype = Object.create(local78);
    function helperFn17(arg61) {
      ["next", "throw", "return"].forEach(function (value73) {
        helperFn8(arg61, value73, function (value74) {
          return this._invoke(value73, value74);
        });
      });
    }
    function helperFn18(arg62, arg63) {
      function helperFn19(arg64, arg65, arg66, arg67) {
        var local82 = helperFn13(arg62[arg64], arg62, arg65);
        if (local82.type !== "throw") {
          var local83 = local82.arg;
          var local84 = local83.value;
          if (local84 && _typeofValueSafe(local84) == "object" && local62.call(local84, "__await")) {
            return arg63.resolve(local84.__await).then(function (value75) {
              helperFn19("next", value75, arg66, arg67);
            }, function (value76) {
              helperFn19("throw", value76, arg66, arg67);
            });
          } else {
            return arg63.resolve(local84).then(function (value77) {
              local83.value = value77;
              arg66(local83);
            }, function (value78) {
              return helperFn19("throw", value78, arg66, arg67);
            });
          }
        }
        arg67(local82.arg);
      }
      var local85;
      local63(this, "_invoke", {
        value: function (value79, value80) {
          function helperFn20() {
            return new arg63(function (value81, value82) {
              helperFn19(value79, value80, value81, value82);
            });
          }
          return local85 = local85 ? local85.then(helperFn20, helperFn20) : helperFn20();
        }
      });
    }
    function helperFn12(arg68, arg69, arg70) {
      var local86 = local73;
      return function (value83, value84) {
        if (local86 === local75) {
          throw Error("Generator is already running");
        }
        if (local86 === local76) {
          if (value83 === "throw") {
            throw value84;
          }
          var local87 = {
            value: local60,
            done: true
          };
          return local87;
        }
        arg70.method = value83;
        arg70.arg = value84;
        while (true) {
          var local88 = arg70.delegate;
          if (local88) {
            var local89 = helperFn21(local88, arg70);
            if (local89) {
              if (local89 === local77) {
                continue;
              }
              return local89;
            }
          }
          if (arg70.method === "next") {
            arg70.sent = arg70._sent = arg70.arg;
          } else if (arg70.method === "throw") {
            if (local86 === local73) {
              local86 = local76;
              throw arg70.arg;
            }
            arg70.dispatchException(arg70.arg);
          } else if (arg70.method === "return") {
            arg70.abrupt("return", arg70.arg);
          }
          local86 = local75;
          var local90 = helperFn13(arg68, arg69, arg70);
          if (local90.type === "normal") {
            local86 = arg70.done ? local76 : local74;
            if (local90.arg === local77) {
              continue;
            }
            var local91 = {
              value: local90.arg,
              done: arg70.done
            };
            return local91;
          }
          if (local90.type === "throw") {
            local86 = local76;
            arg70.method = "throw";
            arg70.arg = local90.arg;
          }
        }
      };
    }
    function helperFn21(arg71, arg72) {
      var local92 = arg72.method;
      var local93 = arg71.iterator[local92];
      if (local93 === local60) {
        arg72.delegate = null;
        if (local92 !== "throw" || !arg71.iterator.return || !(arg72.method = "return", arg72.arg = local60, helperFn21(arg71, arg72), arg72.method === "throw")) {
          if (local92 !== "return") {
            arg72.method = "throw";
            arg72.arg = new TypeError("The iterator does not provide a '" + local92 + "' method");
          }
        }
        return local77;
      }
      var local94 = helperFn13(local93, arg71.iterator, arg72.arg);
      if (local94.type === "throw") {
        arg72.method = "throw";
        arg72.arg = local94.arg;
        arg72.delegate = null;
        return local77;
      }
      var local95 = local94.arg;
      if (local95) {
        if (local95.done) {
          arg72[arg71.resultName] = local95.value;
          arg72.next = arg71.nextLoc;
          if (arg72.method !== "return") {
            arg72.method = "next";
            arg72.arg = local60;
          }
          arg72.delegate = null;
          return local77;
        } else {
          return local95;
        }
      } else {
        arg72.method = "throw";
        arg72.arg = new TypeError("iterator result is not an object");
        arg72.delegate = null;
        return local77;
      }
    }
    function helperFn22(arg73) {
      var local96 = {
        tryLoc: arg73[0]
      };
      var local97 = local96;
      if (1 in arg73) {
        local97.catchLoc = arg73[1];
      }
      if (2 in arg73) {
        local97.finallyLoc = arg73[2];
        local97.afterLoc = arg73[3];
      }
      this.tryEntries.push(local97);
    }
    function helperFn23(arg74) {
      var local98 = arg74.completion || {};
      local98.type = "normal";
      delete local98.arg;
      arg74.completion = local98;
    }
    function helperFn11(arg75) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      arg75.forEach(helperFn22, this);
      this.reset(true);
    }
    function helperFn16(arg76) {
      if (arg76 || arg76 === "") {
        var local99 = arg76[local65];
        if (local99) {
          return local99.call(arg76);
        }
        if (typeof arg76.next == "function") {
          return arg76;
        }
        if (!isNaN(arg76.length)) {
          var local100 = -1;
          var local101 = function helperFn24() {
            while (++local100 < arg76.length) {
              if (local62.call(arg76, local100)) {
                helperFn24.value = arg76[local100];
                helperFn24.done = false;
                return helperFn24;
              }
            }
            helperFn24.value = local60;
            helperFn24.done = true;
            return helperFn24;
          };
          return local101.next = local101;
        }
      }
      throw new TypeError(_typeofValueSafe(arg76) + " is not iterable");
    }
    helperFn14.prototype = helperFn15;
    local63(local81, "constructor", {
      value: helperFn15,
      configurable: true
    });
    local63(helperFn15, "constructor", {
      value: helperFn14,
      configurable: true
    });
    helperFn14.displayName = helperFn8(helperFn15, local67, "GeneratorFunction");
    local59.isGeneratorFunction = function (value85) {
      var local102 = typeof value85 == "function" && value85.constructor;
      return !!local102 && (local102 === helperFn14 || (local102.displayName || local102.name) === "GeneratorFunction");
    };
    local59.mark = function (value86) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(value86, helperFn15);
      } else {
        value86.__proto__ = helperFn15;
        helperFn8(value86, local67, "GeneratorFunction");
      }
      value86.prototype = Object.create(local81);
      return value86;
    };
    local59.awrap = function (value87) {
      var local103 = {
        __await: value87
      };
      return local103;
    };
    helperFn17(helperFn18.prototype);
    helperFn8(helperFn18.prototype, local66, function () {
      return this;
    });
    local59.AsyncIterator = helperFn18;
    local59.async = function (value88, value89, value90, value91, value92 = Promise) {
      var local104 = new helperFn18(helperFn9(value88, value89, value90, value91), value92);
      if (local59.isGeneratorFunction(value89)) {
        return local104;
      } else {
        return local104.next().then(function (value93) {
          if (value93.done) {
            return value93.value;
          } else {
            return local104.next();
          }
        });
      }
    };
    helperFn17(local81);
    helperFn8(local81, local67, "Generator");
    helperFn8(local81, local65, function () {
      return this;
    });
    helperFn8(local81, "toString", function () {
      return "[object Generator]";
    });
    local59.keys = function (value94) {
      var local105 = Object(value94);
      var local106 = [];
      for (var key1 in local105) {
        local106.push(key1);
      }
      local106.reverse();
      return function helperFn25() {
        while (local106.length) {
          var local107 = local106.pop();
          if (local107 in local105) {
            helperFn25.value = local107;
            helperFn25.done = false;
            return helperFn25;
          }
        }
        helperFn25.done = true;
        return helperFn25;
      };
    };
    local59.values = helperFn16;
    helperFn11.prototype = {
      constructor: helperFn11,
      reset: function (value95) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = local60;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = local60;
        this.tryEntries.forEach(helperFn23);
        if (!value95) {
          for (var key2 in this) {
            if (key2.charAt(0) === "t" && local62.call(this, key2) && !isNaN(+key2.slice(1))) {
              this[key2] = local60;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var local108 = this.tryEntries[0].completion;
        if (local108.type === "throw") {
          throw local108.arg;
        }
        return this.rval;
      },
      dispatchException: function (value96) {
        if (this.done) {
          throw value96;
        }
        var local109 = this;
        function helperFn26(arg77, arg78) {
          local110.type = "throw";
          local110.arg = value96;
          local109.next = arg77;
          if (arg78) {
            local109.method = "next";
            local109.arg = local60;
          }
          return !!arg78;
        }
        for (var index5 = this.tryEntries.length - 1; index5 >= 0; --index5) {
          var local111 = this.tryEntries[index5];
          var local110 = local111.completion;
          if (local111.tryLoc === "root") {
            return helperFn26("end");
          }
          if (local111.tryLoc <= this.prev) {
            var local112 = local62.call(local111, "catchLoc");
            var local113 = local62.call(local111, "finallyLoc");
            if (local112 && local113) {
              if (this.prev < local111.catchLoc) {
                return helperFn26(local111.catchLoc, true);
              }
              if (this.prev < local111.finallyLoc) {
                return helperFn26(local111.finallyLoc);
              }
            } else if (local112) {
              if (this.prev < local111.catchLoc) {
                return helperFn26(local111.catchLoc, true);
              }
            } else {
              if (!local113) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < local111.finallyLoc) {
                return helperFn26(local111.finallyLoc);
              }
            }
          }
        }
      },
      abrupt: function (value97, value98) {
        for (var index6 = this.tryEntries.length - 1; index6 >= 0; --index6) {
          var local114 = this.tryEntries[index6];
          if (local114.tryLoc <= this.prev && local62.call(local114, "finallyLoc") && this.prev < local114.finallyLoc) {
            var local115 = local114;
            break;
          }
        }
        if (local115 && (value97 === "break" || value97 === "continue") && local115.tryLoc <= value98 && value98 <= local115.finallyLoc) {
          local115 = null;
        }
        var local116 = local115 ? local115.completion : {};
        local116.type = value97;
        local116.arg = value98;
        if (local115) {
          this.method = "next";
          this.next = local115.finallyLoc;
          return local77;
        } else {
          return this.complete(local116);
        }
      },
      complete: function (value99, value100) {
        if (value99.type === "throw") {
          throw value99.arg;
        }
        if (value99.type === "break" || value99.type === "continue") {
          this.next = value99.arg;
        } else if (value99.type === "return") {
          this.rval = this.arg = value99.arg;
          this.method = "return";
          this.next = "end";
        } else if (value99.type === "normal" && value100) {
          this.next = value100;
        }
        return local77;
      },
      finish: function (value101) {
        for (var index7 = this.tryEntries.length - 1; index7 >= 0; --index7) {
          var local117 = this.tryEntries[index7];
          if (local117.finallyLoc === value101) {
            this.complete(local117.completion, local117.afterLoc);
            helperFn23(local117);
            return local77;
          }
        }
      },
      catch: function (value102) {
        for (var index8 = this.tryEntries.length - 1; index8 >= 0; --index8) {
          var local118 = this.tryEntries[index8];
          if (local118.tryLoc === value102) {
            var local119 = local118.completion;
            if (local119.type === "throw") {
              var local120 = local119.arg;
              helperFn23(local118);
            }
            return local120;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (value103, value104, value105) {
        this.delegate = {
          iterator: helperFn16(value103),
          resultName: value104,
          nextLoc: value105
        };
        if (this.method === "next") {
          this.arg = local60;
        }
        return local77;
      }
    };
    return local59;
  }
  function _asyncGeneratorStep(arg79, arg80, arg81, arg82, arg83, arg84, arg85) {
    try {
      var local121 = arg79[arg84](arg85);
      var local122 = local121.value;
    } catch (value106) {
      arg81(value106);
      return;
    }
    if (local121.done) {
      arg80(local122);
    } else {
      Promise.resolve(local122).then(arg82, arg83);
    }
  }
  function _asyncToGenerator(arg86) {
    return function () {
      var local123 = this;
      var local124 = arguments;
      return new Promise(function (value107, value108) {
        var local125 = arg86.apply(local123, local124);
        function helperFn27(arg87) {
          _asyncGeneratorStep(local125, value107, value108, helperFn27, helperFn28, "next", arg87);
        }
        function helperFn28(arg88) {
          _asyncGeneratorStep(local125, value107, value108, helperFn27, helperFn28, "throw", arg88);
        }
        helperFn27(undefined);
      });
    };
  }
  var disclaimerLines;
  var notifyTitle = "52破解";
  var siteBaseUrl = "https://www.52pojie.cn";
  var defaultHeaders = {
    Host: "www.52pojie.cn",
    Connection: "keep-alive",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Microsoft Edge\";v=\"122\"",
    "sec-ch-ua-platform": "Windows",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    "Content-Type": "text/plain;charset=UTF-8",
    Accept: "*/*",
    Origin: "https://www.52pojie.cn",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    Referer: "https://www.52pojie.cn/home.php?mod=task&do=apply&id=2&referer=%2Fforum.php",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
  };
  function isNodeEnv() {
    return runtimeEnv === "Node.js";
  }
  disclaimerLines = ["本脚本仅用于学习研究，禁止用于商业用途", "本脚本不保证准确性、可靠性、完整性和及时性", "任何个人或组织均可无需经过通知而自由使用", "作者对任何脚本问题概不负责，包括由此产生的任何损失", "如有单位或个人认为本脚本侵权，请通知并提供证明，我将删除", "请勿将本脚本用于商业用途，由此引起的问题与作者无关", "本脚本及其更新版权归作者所有", "", `⌚ ${new Date().toLocaleString("zh-CN", {
    timeZone: "PRC"
  })}`];
  Logger.log.apply(Logger, ["==============📣免责声明📣=============="].concat(disclaimerLines));
  Logger.logLevel = `${isNodeEnv() ? process.env.WUAI_DEBUG : scriptArgs.debug || PersistStore.getItem("wuai_debug")}` === "true" ? "debug" : "info";
  Logger.info(`日志等级: ${Logger.logLevel}`);
  var barkPushKey = isNodeEnv() ? process.env.WUAI_BARK_KEY : PersistStore.getItem("wuai_bark_key");
  Logger.debug(barkPushKey ? "Bark密钥: " + barkPushKey : "未开启Bark推送");
  var currentCookie = isNodeEnv() ? process.env.WUAI_COOKIE : PersistStore.getItem("wuai_cookie");
  async function runMainTask() {
    if (!currentCookie) {
      await pushNotification(notifyTitle, "", "未填写/未获取Cookie!!");
      return;
    }

    if (!currentCookie.includes("auth=")) {
      await pushNotification(notifyTitle, "", "Cookie关键授权字段缺失, 需重新获取!!");
      return;
    }

    currentCookie = normalizeCookieFields(currentCookie);

    await fetchUserProfile();
    if (!PathUtils.get(globalThis, "user.id")) {
      await pushNotification(notifyTitle, "❌ 获取用户信息失败", "Cookie失效 ‼️‼️");
      return;
    }

    await fetchVerifyParams();
    if (!globalThis.verifyBody) {
      await pushNotification(notifyTitle, "❌ 获取混淆参数失败", "请等待修复!!");
      return;
    }

    const verifyPassed = await validateVerifyPayload();
    if (!verifyPassed) {
      await pushNotification(notifyTitle, "❌ 参数校验失败", "请等待修复!!");
      return;
    }

    await executeSignIn();
    await pushNotification(notifyTitle, `${globalThis.user.name}[${`${globalThis.user.id}`.replace(/(\d{3})\d+(\d{2})/, "$1****$2")}]`, globalThis.msgBody);
  }

  async function fetchUserProfile() {
    const headers = {
      Cookie: currentCookie
    };
    const requestOptions = {
      url: joinUrl(siteBaseUrl, "/home.php?mod=spacecp&ac=credit&showcredit=1"),
      headers: Object.assign(defaultHeaders, headers)
    };

    const response = await request(requestOptions);
    if (!response.ok) {
      Logger.error("获取个人信息失败", response.body || "");
      return;
    }

    const bodyText = response.body;
    if (bodyText.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55|�Ҫ�ȵ�¼���ܼ�)/)) {
      await pushNotification(notifyTitle, "", "Cookie失效 ‼️‼️");
      throw new Error("Cookie失效 ‼️‼️");
    }

    const userMatch = /<strong[^>]*><a[^>]*href="[^"]*uid=(\d+)"[^>]*>([^<]*)<\/a><\/strong>/i.exec(bodyText);
    const [, userId, userName] = _slicedToArray(userMatch, 3);

    PathUtils.set(globalThis, "user.id", userId, "");
    PathUtils.set(globalThis, "user.name", userName, "");
    Logger.log(`用户信息: ${userId} - ${userName}`);
  }

  async function fetchVerifyParams() {
    const headers = {
      Cookie: currentCookie
    };
    const requestOptions = {
      url: joinUrl(siteBaseUrl, "/home.php?mod=task&do=apply&id=2&referer=%2F"),
      headers: Object.assign(defaultHeaders, headers)
    };

    const response = await request(requestOptions);
    if (!response.ok) {
      Logger.error("获取混淆参数失败", response.body || "");
      return;
    }

    currentCookie = mergeCookieStrings(currentCookie, extractSetCookieHeader(response));
    Logger.debug(`[混淆接口]更新Cookie: ${currentCookie}`);

    const lengthToken = /(?:LZ|ZL)\s*=\s*['"]([0-9]{5,6})['"]/.exec(response.body)?.[1];
    if (!lengthToken) {
      throw new Error("[LZ] 长度参数获取失败");
    }

    const multiplierToken = /(?:LJ|ZR)\s*=\s*['"]([0-9]{5,6})['"]/.exec(response.body)?.[1];
    if (!multiplierToken) {
      throw new Error("[LJ] 乘数因子获取失败");
    }

    const alphabet = /(?:Zn|LE)\s*=\s*['"]([0-9a-zA-Z\/+.-]+={0,2})['"];/.exec(response.body)?.[1];
    if (!alphabet) {
      throw new Error("[LE] 加密参数获取失败");
    }

    const verifyParams = {
      LZ: lengthToken,
      LJ: multiplierToken,
      LE: alphabet
    };

    Logger.group("[请求参数]");
    Logger.debug(`[LZ] 长度参数: ${verifyParams.LZ}`, `[LJ] 乘数因子: ${verifyParams.LJ}`, `[LE] 加密参数: ${verifyParams.LE}`);
    Logger.groupEnd();

    globalThis.verifyBody = buildVerifyPayload(verifyParams);
    Logger.debug(`[verifyBody] 加密结果: ${globalThis.verifyBody}`);
  }

  async function validateVerifyPayload() {
    const headers = {
      Cookie: currentCookie
    };
    const requestOptions = {
      url: joinUrl(siteBaseUrl, "/waf_zw_verify"),
      headers: Object.assign(defaultHeaders, headers),
      body: globalThis.verifyBody
    };

    const response = await request(requestOptions);
    if (!response.ok) {
      Logger.error("参数校验失败", response.body || "");
      return false;
    }

    currentCookie = mergeCookieStrings(currentCookie, extractSetCookieHeader(response));
    Logger.debug("🎉 参数校验接口通过!!");
    return true;
  }

  async function executeSignIn() {
    const headers = {
      Cookie: currentCookie
    };
    const requestOptions = {
      url: joinUrl(siteBaseUrl, "/home.php?mod=task&do=apply&id=2&referer=%2Fforum.php"),
      headers: Object.assign(defaultHeaders, headers)
    };

    const response = await request(requestOptions);
    const bodyText = response.body;
    const now = new Date();

    if (bodyText.match(/(ÒÑÍê³É|\u606d\u559c\u60a8|��̳΢�š��ᰮ�ƽ�)/)) {
      globalThis.msgBody = now.getMonth() + 1 + "月" + now.getDate() + "日, 签到成功 🎉";
    } else if (bodyText.match(/(ÄúÒÑ|\u4e0b\u671f\u518d\u6765|>��Ǹ������)/)) {
      globalThis.msgBody = now.getMonth() + 1 + "月" + now.getDate() + "日, 已签过 ⚠️";
    } else if (bodyText.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55|�Ҫ�ȵ�¼���ܼ�)/)) {
      globalThis.msgBody = "签到失败, Cookie失效 ‼️‼️";
    } else if (response.statusCode == 403) {
      globalThis.msgBody = "服务器暂停签到 ⚠️";
    } else {
      globalThis.msgBody = "脚本待更新 ‼️‼️";
    }
  }

  function normalizeCookieFields(cookieString) {
    var normalizedCookie;
    var saltKeyCookie;
    if (!cookieString) {
      showSystemNotification(notifyTitle, "❌ 获取Cookie失败", "Cookie为空, 不进行初始化");
      throw new Error("Cookie为空, 不进行初始化");
    }

    cookieString = parseCookieToObject(cookieString);
    if ((normalizedCookie = cookieString) === null || normalizedCookie === undefined || !normalizedCookie.htVC_2132_auth) {
      throw new Error("获取Cookie失败, 关键值[auth]缺失");
    }
    if ((saltKeyCookie = cookieString) === null || saltKeyCookie === undefined || !saltKeyCookie.htVC_2132_saltkey) {
      throw new Error("获取Cookie失败, 关键值[saltkey]缺失");
    }

    return `htVC_2132_auth=${cookieString.htVC_2132_auth}; htVC_2132_saltkey=${cookieString.htVC_2132_saltkey};`;
  }

  function parseCookieToObject(cookieString) {
    return cookieString.split(";").reduce(function (cookieMap, cookieItem) {
      var cookiePair = cookieItem.split("=").map(function (text) {
        return text.trim();
      });
      var [cookieKey, cookieValue] = _slicedToArray(cookiePair, 2);
      if (cookieKey && cookieValue) {
        cookieMap[cookieKey] = cookieValue;
      }
      return cookieMap;
    }, {});
  }

  function captureCookieFromRequest() {
    var normalizedCookie = normalizeCookieFields($request.headers.Cookie ?? $request.headers.cookie ?? "");
    if (!normalizedCookie || !normalizedCookie.includes("auth=")) {
      showSystemNotification(notifyTitle, "❌ 获取Cookie失败", "请检查Cookie是否正确");
      throw new Error("请检查Cookie是否正确");
    }

    PersistStore.setItem("wuai_cookie", normalizedCookie);
    Logger.debug(`Cookie: ${normalizedCookie}`);
    showSystemNotification(notifyTitle, "", "写入Cookie成功 🎉");
  }

  async function pushNotification(title, subtitle, body, options) {
    if (barkPushKey) {
      await pushByBark(title, subtitle, body, options);
    } else {
      showSystemNotification(title, subtitle, body, options);
    }
  }

  async function pushByBark(title, subtitle, body, options = {}) {
    const headers = {
      "content-type": "application/json; charset=utf-8"
    };

    const openUrl = options?.["open-url"] || options?.openUrl || options?.$open || options?.url || "";
    const copyText = options?.["update-pasteboard"] || options?.updatePasteboard || options?.$copy || options?.copy || "";
    const mediaUrl = options?.["media-url"] || options?.mediaUrl || options?.$media || "";

    ["open-url", "openUrl", "$open", "url", "update-pasteboard", "updatePasteboard", "$copy", "copy", "media-url", "mediaUrl", "$media"].forEach(function (field) {
      delete options[field];
    });

    if (subtitle) {
      body = subtitle + "\n" + body;
    }

    const barkPayload = _objectSpread(_objectSpread({}, options), {}, {
      url: openUrl,
      copy: copyText,
      icon: mediaUrl,
      title,
      body
    });

    const barkRequestOptions = {
      url: "https://api.day.app/" + barkPushKey,
      headers,
      body: safeJSONStringify(barkPayload)
    };

    for (let retry = 0; retry < 3; retry++) {
      Logger.info(`Bark第${retry + 1}次推送尝试`);
      const response = await request(barkRequestOptions);
      if (!response.ok) {
        Logger.warn("Bark推送失败", response.body || "");
        continue;
      }

      const logLines = ["=========📣推送成功📣=========", title, body];
      if (openUrl) {
        logLines.push(`跳转链接: ${openUrl}`);
      }
      if (copyText) {
        logLines.push(`复制内容: ${copyText}`);
      }
      if (mediaUrl) {
        logLines.push(`媒体链接: ${mediaUrl}`);
      }
      Logger.log.apply(Logger, logLines);
      break;
    }
  }

  function extractSetCookieHeader(response) {
    var splitCookies;
    var responseHeaders;
    responseHeaders = response.headers;
    var normalizedHeaders = Object.fromEntries(Object.entries(responseHeaders).map(function (headerPair) {
      var parsedHeaderPair = _arrayWithHolesOrIterator(headerPair, 2);
      var headerName = parsedHeaderPair[0];
      var headerValue = parsedHeaderPair[1];
      return [headerName.toLowerCase(), headerValue];
    }));
    var setCookieHeader = normalizedHeaders["set-cookie"];
    if (Array.isArray(setCookieHeader)) {
      return setCookieHeader.map(function (cookieLine) {
        return cookieLine.split(";")[0];
      }).join(";");
    } else {
      return (setCookieHeader == null || (splitCookies = setCookieHeader.split(",")) === null || splitCookies === undefined || (splitCookies = splitCookies.map(function (cookieLine) {
        return cookieLine.split(";")[0];
      })) === null || splitCookies === undefined ? undefined : splitCookies.join(";")) || setCookieHeader;
    }
  }

  function mergeCookieStrings(currentCookieString, incomingCookieString) {
    var currentCookieMap = parseCookieToObject(currentCookieString);
    var incomingCookieMap = parseCookieToObject(incomingCookieString);
    return Object.entries(Object.assign(currentCookieMap, incomingCookieMap)).map(function (cookieEntry) {
      var parsedCookieEntry = _slicedToArray(cookieEntry, 2);
      var cookieKey = parsedCookieEntry[0];
      var cookieValue = parsedCookieEntry[1];
      return `${cookieKey}=${cookieValue}`;
    }).join("; ");
  }
  Logger.debug(`Cookie: ${currentCookie}`);
  (async () => {
    if (globalThis && globalThis.$request) {
      captureCookieFromRequest();
    } else {
      await runMainTask();
    }
  })().catch(function (error) {
    return Logger.error(error);
  }).finally(function (donePayload = {}) {
    switch (runtimeEnv) {
      case "Surge":
        if (donePayload.policy) {
          PathUtils.set(donePayload, "headers.X-Surge-Policy", donePayload.policy);
        }
        Logger.log("🚩 执行结束!", "🕛 " + (new Date().getTime() / 1000 - $script.startTime) + " 秒");
        $done(donePayload);
        break;
      case "Loon":
        if (donePayload.policy) {
          donePayload.node = donePayload.policy;
        }
        Logger.log("🚩 执行结束!", "🕛 " + (new Date() - $script.startTime) / 1000 + " 秒");
        $done(donePayload);
        break;
      case "Stash":
        if (donePayload.policy) {
          PathUtils.set(donePayload, "headers.X-Stash-Selected-Proxy", encodeURI(donePayload.policy));
        }
        Logger.log("🚩 执行结束!", "🕛 " + (new Date() - $script.startTime) / 1000 + " 秒");
        $done(donePayload);
        break;
      case "Egern":
      case "Shadowrocket":
      default:
        Logger.log("🚩 执行结束!");
        $done(donePayload);
        break;
      case "Quantumult X":
        if (donePayload.policy) {
          PathUtils.set(donePayload, "opts.policy", donePayload.policy);
        }
        donePayload["auto-redirect"] = undefined;
        donePayload["auto-cookie"] = undefined;
        donePayload["binary-mode"] = undefined;
        donePayload.charset = undefined;
        donePayload.host = undefined;
        donePayload.insecure = undefined;
        donePayload.method = undefined;
        donePayload.ok = undefined;
        donePayload.opt = undefined;
        donePayload.path = undefined;
        donePayload.policy = undefined;
        donePayload["policy-descriptor"] = undefined;
        donePayload.scheme = undefined;
        donePayload.sessionIndex = undefined;
        donePayload.statusCode = undefined;
        donePayload.timeout = undefined;
        switch (typeof donePayload.status) {
          case "number":
            donePayload.status = HTTP_STATUS_LINES[donePayload.status];
            break;
          case "string":
          case "undefined":
            break;
          default:
            donePayload.status = undefined;
        }
        if (donePayload.body instanceof ArrayBuffer) {
          donePayload.bodyBytes = donePayload.body;
          donePayload.body = undefined;
        } else if (ArrayBuffer.isView(donePayload.body)) {
          donePayload.bodyBytes = donePayload.body.buffer.slice(donePayload.body.byteOffset, donePayload.body.byteLength + donePayload.body.byteOffset);
          donePayload.body = undefined;
        } else if (donePayload.body) {
          donePayload.bodyBytes = undefined;
        }
        Logger.log("🚩 执行结束!");
        $done(donePayload);
        break;
      case "Node.js":
        Logger.log("🚩 执行结束!");
        process.exit(1);
    }
  });
})();