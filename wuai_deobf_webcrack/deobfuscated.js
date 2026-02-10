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
    const tmpVar1 = Object.keys(globalThis);
    switch (true) {
      case tmpVar1.includes("$task"):
        return "Quantumult X";
      case tmpVar1.includes("$loon"):
        return "Loon";
      case tmpVar1.includes("$rocket"):
        return "Shadowrocket";
      case typeof module != "undefined":
        return "Node.js";
      case tmpVar1.includes("Egern"):
        return "Egern";
      case tmpVar1.includes("$environment"):
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
    static count = (tmpVar2 = "default") => {
      switch (Logger.#e.has(tmpVar2)) {
        case true:
          Logger.#e.set(tmpVar2, Logger.#e.get(tmpVar2) + 1);
          break;
        case false:
          Logger.#e.set(tmpVar2, 0);
      }
      Logger.log(tmpVar2 + ": " + Logger.#e.get(tmpVar2));
    };
    static countReset = (tmpVar3 = "default") => {
      switch (Logger.#e.has(tmpVar3)) {
        case true:
          Logger.#e.set(tmpVar3, 0);
          Logger.log(tmpVar3 + ": " + Logger.#e.get(tmpVar3));
          break;
        case false:
          Logger.warn("Counter \"" + tmpVar3 + "\" doesn’t exist");
      }
    };
    static debug = (...tmpVar4) => {
      if (!(Logger.#o < 4)) {
        tmpVar4 = tmpVar4.map(tmpVar5 => "🅱️ " + tmpVar5);
        Logger.log(...tmpVar4);
      }
    };
    static error(...tmpVar6) {
      if (!(Logger.#o < 1)) {
        switch (runtimeEnv) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Egern":
          case "Shadowrocket":
          case "Quantumult X":
          default:
            tmpVar6 = tmpVar6.map(tmpVar7 => "❌ " + tmpVar7);
            break;
          case "Node.js":
            tmpVar6 = tmpVar6.map(tmpVar8 => "❌ " + tmpVar8.stack);
        }
        Logger.log(...tmpVar6);
      }
    }
    static exception = (...tmpVar9) => Logger.error(...tmpVar9);
    static group = tmpVar10 => Logger.#t.unshift(tmpVar10);
    static groupEnd = () => Logger.#t.shift();
    static info(...tmpVar11) {
      if (!(Logger.#o < 3)) {
        tmpVar11 = tmpVar11.map(tmpVar12 => "ℹ️ " + tmpVar12);
        Logger.log(...tmpVar11);
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
    static set logLevel(tmpVar13) {
      switch (typeof tmpVar13) {
        case "string":
          tmpVar13 = tmpVar13.toLowerCase();
          break;
        case "number":
          break;
        default:
          tmpVar13 = "warn";
      }
      switch (tmpVar13) {
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
    static log = (...tmpVar14) => {
      if (Logger.#o !== 0) {
        tmpVar14 = tmpVar14.map(tmpVar15 => {
          switch (typeof tmpVar15) {
            case "object":
              tmpVar15 = JSON.stringify(tmpVar15);
              break;
            case "bigint":
            case "number":
            case "boolean":
            case "string":
              tmpVar15 = tmpVar15.toString();
          }
          return tmpVar15;
        });
        Logger.#t.forEach(tmpVar16 => {
          tmpVar14 = tmpVar14.map(tmpVar17 => "  " + tmpVar17);
          tmpVar14.unshift("▼ " + tmpVar16 + ":");
        });
        tmpVar14 = ["", ...tmpVar14];
        console.log(tmpVar14.join("\n"));
      }
    };
    static time = (tmpVar18 = "default") => Logger.#r.set(tmpVar18, Date.now());
    static timeEnd = (tmpVar19 = "default") => Logger.#r.delete(tmpVar19);
    static timeLog = (tmpVar20 = "default") => {
      const tmpVar21 = Logger.#r.get(tmpVar20);
      if (tmpVar21) {
        Logger.log(tmpVar20 + ": " + (Date.now() - tmpVar21) + "ms");
      } else {
        Logger.warn("Timer \"" + tmpVar20 + "\" doesn’t exist");
      }
    };
    static warn(...tmpVar22) {
      if (!(Logger.#o < 2)) {
        tmpVar22 = tmpVar22.map(tmpVar23 => "⚠️ " + tmpVar23);
        Logger.log(...tmpVar22);
      }
    }
  }
  class PathUtils {
    static get(tmpVar24 = {}, tmpVar25 = "", tmpVar26 = undefined) {
      if (!Array.isArray(tmpVar25)) {
        tmpVar25 = PathUtils.toPath(tmpVar25);
      }
      const tmpVar27 = tmpVar25.reduce((tmpVar28, tmpVar29) => Object(tmpVar28)[tmpVar29], tmpVar24);
      if (tmpVar27 === undefined) {
        return tmpVar26;
      } else {
        return tmpVar27;
      }
    }
    static set(tmpVar30, tmpVar31, tmpVar32) {
      if (!Array.isArray(tmpVar31)) {
        tmpVar31 = PathUtils.toPath(tmpVar31);
      }
      tmpVar31.slice(0, -1).reduce((tmpVar33, tmpVar34, tmpVar35) => Object(tmpVar33[tmpVar34]) === tmpVar33[tmpVar34] ? tmpVar33[tmpVar34] : tmpVar33[tmpVar34] = /^\d+$/.test(tmpVar31[tmpVar35 + 1]) ? [] : {}, tmpVar30)[tmpVar31[tmpVar31.length - 1]] = tmpVar32;
      return tmpVar30;
    }
    static unset(tmpVar36 = {}, tmpVar37 = "") {
      if (!Array.isArray(tmpVar37)) {
        tmpVar37 = PathUtils.toPath(tmpVar37);
      }
      const tmpVar38 = tmpVar37.reduce((tmpVar39, tmpVar40, tmpVar41) => tmpVar41 === tmpVar37.length - 1 ? (delete tmpVar39[tmpVar40], true) : Object(tmpVar39)[tmpVar40], tmpVar36);
      return tmpVar38;
    }
    static toPath(tmpVar42) {
      return tmpVar42.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
    }
    static escape(tmpVar43) {
      const tmpVar44 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      };
      return tmpVar43.replace(/[&<>"']/g, tmpVar45 => tmpVar44[tmpVar45]);
    }
    static unescape(tmpVar46) {
      const tmpVar47 = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": "\"",
        "&#39;": "'"
      };
      return tmpVar46.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, tmpVar48 => tmpVar47[tmpVar48]);
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
  function showSystemNotification(tmpVar49 = "ℹ️ " + runtimeEnv + " 通知", tmpVar50 = "", tmpVar51 = "", tmpVar52 = {}) {
    switch (runtimeEnv) {
      case "Surge":
      case "Loon":
      case "Stash":
      case "Egern":
      case "Shadowrocket":
      default:
        $notification.post(tmpVar49, tmpVar50, tmpVar51, normalizeNotificationParams(tmpVar52));
        break;
      case "Quantumult X":
        $notify(tmpVar49, tmpVar50, tmpVar51, normalizeNotificationParams(tmpVar52));
      case "Node.js":
    }
    Logger.log("==============📣系统通知📣==============", tmpVar49, tmpVar50, tmpVar51, JSON.stringify(normalizeNotificationParams(tmpVar52), null, 2));
  }
  const normalizeNotificationParams = tmpVar53 => {
    const tmpVar54 = {};
    switch (typeof tmpVar53) {
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
            tmpVar54.url = tmpVar53;
            break;
          case "Loon":
          case "Shadowrocket":
            tmpVar54.openUrl = tmpVar53;
            break;
          case "Quantumult X":
            tmpVar54["open-url"] = tmpVar53;
          case "Node.js":
        }
        break;
      case "object":
        {
          const tmpVar55 = tmpVar53.open || tmpVar53["open-url"] || tmpVar53.url || tmpVar53.openUrl;
          const tmpVar56 = tmpVar53.copy || tmpVar53["update-pasteboard"] || tmpVar53.updatePasteboard;
          const tmpVar57 = tmpVar53.media || tmpVar53["media-url"] || tmpVar53.mediaUrl;
          switch (runtimeEnv) {
            case "Surge":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
            default:
              if (tmpVar55) {
                tmpVar54.action = "open-url";
                tmpVar54.url = tmpVar55;
              }
              if (tmpVar56) {
                tmpVar54.action = "clipboard";
                tmpVar54.text = tmpVar56;
              }
              if (tmpVar57) {
                switch (true) {
                  case tmpVar57.startsWith("http"):
                    tmpVar54["media-url"] = tmpVar57;
                    break;
                  case tmpVar57.startsWith("data:"):
                    {
                      const tmpVar58 = /^data:(?<MIME>\w+\/\w+);base64,(?<Base64>.+)/;
                      const {
                        MIME: tmpVar59,
                        Base64: tmpVar60
                      } = tmpVar57.match(tmpVar58).groups;
                      tmpVar54["media-base64"] = tmpVar60;
                      tmpVar54["media-base64-mime"] = tmpVar53.mime || tmpVar59;
                      break;
                    }
                  default:
                    tmpVar54["media-base64"] = tmpVar57;
                    switch (true) {
                      case tmpVar57.startsWith("CiVQREYt"):
                      case tmpVar57.startsWith("JVBERi0"):
                        tmpVar54["media-base64-mime"] = "application/pdf";
                        break;
                      case tmpVar57.startsWith("R0lGODdh"):
                      case tmpVar57.startsWith("R0lGODlh"):
                        tmpVar54["media-base64-mime"] = "image/gif";
                        break;
                      case tmpVar57.startsWith("iVBORw0KGgo"):
                        tmpVar54["media-base64-mime"] = "image/png";
                        break;
                      case tmpVar57.startsWith("/9j/"):
                        tmpVar54["media-base64-mime"] = "image/jpg";
                        break;
                      case tmpVar57.startsWith("Qk02U"):
                        tmpVar54["media-base64-mime"] = "image/bmp";
                    }
                }
              }
              if (tmpVar53["auto-dismiss"]) {
                tmpVar54["auto-dismiss"] = tmpVar53["auto-dismiss"];
              }
              if (tmpVar53.sound) {
                tmpVar54.sound = tmpVar53.sound;
              }
              break;
            case "Loon":
              if (tmpVar55) {
                tmpVar54.openUrl = tmpVar55;
              }
              if (tmpVar57?.startsWith("http")) {
                tmpVar54.mediaUrl = tmpVar57;
              }
              break;
            case "Quantumult X":
              if (tmpVar55) {
                tmpVar54["open-url"] = tmpVar55;
              }
              if (tmpVar57?.startsWith("http")) {
                tmpVar54["media-url"] = tmpVar57;
              }
              if (tmpVar56) {
                tmpVar54["update-pasteboard"] = tmpVar56;
              }
            case "Node.js":
          }
          break;
        }
      default:
        Logger.error("不支持的通知参数类型: " + typeof tmpVar53, "");
    }
    return tmpVar54;
  };
  async function request(tmpVar61, tmpVar62) {
    switch (tmpVar61.constructor) {
      case Object:
        tmpVar61 = {
          ...tmpVar62,
          ...tmpVar61
        };
        break;
      case String:
        tmpVar61 = {
          ...tmpVar62,
          url: tmpVar61
        };
    }
    if (!tmpVar61.method) {
      tmpVar61.method = "GET";
      if (tmpVar61.body ?? tmpVar61.bodyBytes) {
        tmpVar61.method = "POST";
      }
    }
    delete tmpVar61.headers?.Host;
    delete tmpVar61.headers?.[":authority"];
    delete tmpVar61.headers?.["Content-Length"];
    delete tmpVar61.headers?.["content-length"];
    const tmpVar63 = tmpVar61.method.toLocaleLowerCase();
    switch (runtimeEnv) {
      case "Loon":
      case "Surge":
      case "Stash":
      case "Egern":
      case "Shadowrocket":
      default:
        if (tmpVar61.timeout) {
          tmpVar61.timeout = Number.parseInt(tmpVar61.timeout, 10);
          switch (runtimeEnv) {
            case "Loon":
            case "Shadowrocket":
            case "Stash":
            case "Egern":
            default:
              tmpVar61.timeout = tmpVar61.timeout / 1000;
            case "Surge":
          }
        }
        if (tmpVar61.policy) {
          switch (runtimeEnv) {
            case "Loon":
              tmpVar61.node = tmpVar61.policy;
              break;
            case "Stash":
              PathUtils.set(tmpVar61, "headers.X-Stash-Selected-Proxy", encodeURI(tmpVar61.policy));
              break;
            case "Shadowrocket":
              PathUtils.set(tmpVar61, "headers.X-Surge-Proxy", tmpVar61.policy);
          }
        }
        if (typeof tmpVar61.redirection == "boolean") {
          tmpVar61["auto-redirect"] = tmpVar61.redirection;
        }
        if (tmpVar61.bodyBytes && !tmpVar61.body) {
          tmpVar61.body = tmpVar61.bodyBytes;
          tmpVar61.bodyBytes = undefined;
        }
        switch ((tmpVar61.headers?.Accept || tmpVar61.headers?.accept)?.split(";")?.[0]) {
          case "application/protobuf":
          case "application/x-protobuf":
          case "application/vnd.google.protobuf":
          case "application/vnd.apple.flatbuffer":
          case "application/grpc":
          case "application/grpc+proto":
          case "application/octet-stream":
            tmpVar61["binary-mode"] = true;
        }
        return await new Promise((tmpVar64, tmpVar65) => {
          $httpClient[tmpVar63](tmpVar61, (tmpVar66, tmpVar67, tmpVar68) => {
            if (tmpVar66) {
              tmpVar65(tmpVar66);
            } else {
              tmpVar67.ok = /^2\d\d$/.test(tmpVar67.status);
              tmpVar67.statusCode = tmpVar67.status;
              if (tmpVar68) {
                tmpVar67.body = tmpVar68;
                if (tmpVar61["binary-mode"] == 1) {
                  tmpVar67.bodyBytes = tmpVar68;
                }
              }
              tmpVar64(tmpVar67);
            }
          });
        });
      case "Quantumult X":
        if (tmpVar61.policy) {
          PathUtils.set(tmpVar61, "opts.policy", tmpVar61.policy);
        }
        if (typeof tmpVar61["auto-redirect"] == "boolean") {
          PathUtils.set(tmpVar61, "opts.redirection", tmpVar61["auto-redirect"]);
        }
        if (tmpVar61.body instanceof ArrayBuffer) {
          tmpVar61.bodyBytes = tmpVar61.body;
          tmpVar61.body = undefined;
        } else if (ArrayBuffer.isView(tmpVar61.body)) {
          tmpVar61.bodyBytes = tmpVar61.body.buffer.slice(tmpVar61.body.byteOffset, tmpVar61.body.byteLength + tmpVar61.body.byteOffset);
          tmpVar61.body = undefined;
        } else if (tmpVar61.body) {
          tmpVar61.bodyBytes = undefined;
        }
        return await $task.fetch(tmpVar61).then(tmpVar69 => {
          tmpVar69.ok = /^2\d\d$/.test(tmpVar69.statusCode);
          tmpVar69.status = tmpVar69.statusCode;
          switch ((tmpVar69.headers?.["Content-Type"] ?? tmpVar69.headers?.["content-type"])?.split(";")?.[0]) {
            case "application/protobuf":
            case "application/x-protobuf":
            case "application/vnd.google.protobuf":
            case "application/vnd.apple.flatbuffer":
            case "application/grpc":
            case "application/grpc+proto":
            case "application/octet-stream":
              tmpVar69.body = tmpVar69.bodyBytes;
          }
          tmpVar69.bodyBytes = undefined;
          return tmpVar69;
        }, tmpVar70 => Promise.reject(tmpVar70.error));
      case "Node.js":
        {
          const tmpVar71 = require("iconv-lite");
          const tmpVar72 = globalThis.got ? globalThis.got : require("got");
          const tmpVar73 = globalThis.cktough ? globalThis.cktough : require("tough-cookie");
          const tmpVar74 = globalThis.ckjar ? globalThis.ckjar : new tmpVar73.CookieJar();
          if (tmpVar61) {
            tmpVar61.headers = tmpVar61.headers ? tmpVar61.headers : {};
            if (tmpVar61.headers.Cookie === undefined && tmpVar61.cookieJar === undefined) {
              tmpVar61.cookieJar = tmpVar74;
            }
          }
          const {
            url: tmpVar75,
            ...tmpVar76
          } = tmpVar61;
          return await tmpVar72[tmpVar63](tmpVar75, tmpVar76).on("redirect", (tmpVar77, tmpVar78) => {
            try {
              if (tmpVar77.headers["set-cookie"]) {
                const tmpVar79 = tmpVar77.headers["set-cookie"].map(tmpVar73.Cookie.parse).toString();
                if (tmpVar79) {
                  tmpVar74.setCookieSync(tmpVar79, null);
                }
                tmpVar78.cookieJar = tmpVar74;
              }
            } catch (tmpVar80) {
              Logger.error(tmpVar80);
            }
          }).then(tmpVar81 => {
            tmpVar81.statusCode = tmpVar81.status;
            tmpVar81.body = tmpVar71.decode(tmpVar81.rawBody, "utf-8");
            tmpVar81.bodyBytes = tmpVar81.rawBody;
            tmpVar81.ok = /^2\d\d$/.test(tmpVar81.statusCode) || !tmpVar81.statusCode && tmpVar81.statusMessage === "OK";
            return tmpVar81;
          }, tmpVar82 => Promise.reject(tmpVar82.message));
        }
    }
  }
  class PersistStore {
    static data = null;
    static dataFile = "box.dat";
    static #a = /^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;
    static getItem(tmpVar83, tmpVar84 = null) {
      let tmpVar85 = tmpVar84;
      switch (tmpVar83.startsWith("@")) {
        case true:
          {
            const {
              key: tmpVar86,
              path: tmpVar87
            } = tmpVar83.match(PersistStore.#a)?.groups;
            tmpVar83 = tmpVar86;
            let tmpVar88 = PersistStore.getItem(tmpVar83, {});
            if (typeof tmpVar88 != "object") {
              tmpVar88 = {};
            }
            tmpVar85 = PathUtils.get(tmpVar88, tmpVar87);
            try {
              tmpVar85 = JSON.parse(tmpVar85);
            } catch (tmpVar89) {}
            break;
          }
        default:
          switch (runtimeEnv) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
              tmpVar85 = $persistentStore.read(tmpVar83);
              break;
            case "Quantumult X":
              tmpVar85 = $prefs.valueForKey(tmpVar83);
              break;
            case "Node.js":
              PersistStore.data = PersistStore.#n(PersistStore.dataFile);
              tmpVar85 = PersistStore.data?.[tmpVar83];
              break;
            default:
              tmpVar85 = PersistStore.data?.[tmpVar83] || null;
          }
          try {
            tmpVar85 = JSON.parse(tmpVar85);
          } catch (tmpVar90) {}
      }
      return tmpVar85 ?? tmpVar84;
    }
    static setItem(tmpVar91 = new String(), tmpVar92 = new String()) {
      let tmpVar93 = false;
      if (typeof tmpVar92 == "object") {
        tmpVar92 = JSON.stringify(tmpVar92);
      } else {
        tmpVar92 = String(tmpVar92);
      }
      switch (tmpVar91.startsWith("@")) {
        case true:
          {
            const {
              key: tmpVar94,
              path: tmpVar95
            } = tmpVar91.match(PersistStore.#a)?.groups;
            tmpVar91 = tmpVar94;
            let tmpVar96 = PersistStore.getItem(tmpVar91, {});
            if (typeof tmpVar96 != "object") {
              tmpVar96 = {};
            }
            PathUtils.set(tmpVar96, tmpVar95, tmpVar92);
            tmpVar93 = PersistStore.setItem(tmpVar91, tmpVar96);
            break;
          }
        default:
          switch (runtimeEnv) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
              tmpVar93 = $persistentStore.write(tmpVar92, tmpVar91);
              break;
            case "Quantumult X":
              tmpVar93 = $prefs.setValueForKey(tmpVar92, tmpVar91);
              break;
            case "Node.js":
              PersistStore.data = PersistStore.#n(PersistStore.dataFile);
              PersistStore.data[tmpVar91] = tmpVar92;
              PersistStore.#i(PersistStore.dataFile);
              tmpVar93 = true;
              break;
            default:
              tmpVar93 = PersistStore.data?.[tmpVar91] || null;
          }
      }
      return tmpVar93;
    }
    static removeItem(tmpVar97) {
      let tmpVar98 = false;
      switch (tmpVar97.startsWith("@")) {
        case true:
          {
            const {
              key: tmpVar99,
              path: tmpVar100
            } = tmpVar97.match(PersistStore.#a)?.groups;
            tmpVar97 = tmpVar99;
            let tmpVar101 = PersistStore.getItem(tmpVar97);
            if (typeof tmpVar101 != "object") {
              tmpVar101 = {};
            }
            keyValue = PathUtils.unset(tmpVar101, tmpVar100);
            tmpVar98 = PersistStore.setItem(tmpVar97, tmpVar101);
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
              tmpVar98 = false;
              break;
            case "Quantumult X":
              tmpVar98 = $prefs.removeValueForKey(tmpVar97);
          }
      }
      return tmpVar98;
    }
    static clear() {
      let tmpVar102 = false;
      switch (runtimeEnv) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Egern":
        case "Shadowrocket":
        case "Node.js":
        default:
          tmpVar102 = false;
          break;
        case "Quantumult X":
          tmpVar102 = $prefs.removeAllValues();
      }
      return tmpVar102;
    }
    static #n = tmpVar103 => {
      if (runtimeEnv !== "Node.js") {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("node:fs");
        this.path = this.path ? this.path : require("node:path");
        const tmpVar104 = this.path.resolve(tmpVar103);
        const tmpVar105 = this.path.resolve(process.cwd(), tmpVar103);
        const tmpVar106 = this.fs.existsSync(tmpVar104);
        const tmpVar107 = !tmpVar106 && this.fs.existsSync(tmpVar105);
        if (!tmpVar106 && !tmpVar107) {
          return {};
        }
        {
          const tmpVar108 = tmpVar106 ? tmpVar104 : tmpVar105;
          try {
            return JSON.parse(this.fs.readFileSync(tmpVar108));
          } catch (tmpVar109) {
            return {};
          }
        }
      }
    };
    static #i = (tmpVar110 = this.dataFile) => {
      if (runtimeEnv === "Node.js") {
        this.fs = this.fs ? this.fs : require("node:fs");
        this.path = this.path ? this.path : require("node:path");
        const tmpVar111 = this.path.resolve(tmpVar110);
        const tmpVar112 = this.path.resolve(process.cwd(), tmpVar110);
        const tmpVar113 = this.fs.existsSync(tmpVar111);
        const tmpVar114 = !tmpVar113 && this.fs.existsSync(tmpVar112);
        const tmpVar115 = JSON.stringify(this.data);
        if (tmpVar113) {
          this.fs.writeFileSync(tmpVar111, tmpVar115);
        } else if (tmpVar114) {
          this.fs.writeFileSync(tmpVar112, tmpVar115);
        } else {
          this.fs.writeFileSync(tmpVar111, tmpVar115);
        }
      }
    };
  }
  function _arrayWithHolesOrIterator(tmpVar116, tmpVar117) {
    return function (tmpVar118) {
      if (Array.isArray(tmpVar118)) {
        return tmpVar118;
      }
    }(tmpVar116) || function (tmpVar119, tmpVar120) {
      var tmpVar121 = tmpVar119 == null ? null : typeof Symbol != "undefined" && tmpVar119[Symbol.iterator] || tmpVar119["@@iterator"];
      if (tmpVar121 != null) {
        var tmpVar122;
        var tmpVar123;
        var tmpVar124;
        var tmpVar125;
        var tmpVar126 = [];
        var tmpVar127 = true;
        var tmpVar128 = false;
        try {
          tmpVar124 = (tmpVar121 = tmpVar121.call(tmpVar119)).next;
          if (tmpVar120 === 0) {
            if (Object(tmpVar121) !== tmpVar121) {
              return;
            }
            tmpVar127 = false;
          } else {
            for (; !(tmpVar127 = (tmpVar122 = tmpVar124.call(tmpVar121)).done) && (tmpVar126.push(tmpVar122.value), tmpVar126.length !== tmpVar120); tmpVar127 = true);
          }
        } catch (tmpVar129) {
          tmpVar128 = true;
          tmpVar123 = tmpVar129;
        } finally {
          try {
            if (!tmpVar127 && tmpVar121.return != null && (tmpVar125 = tmpVar121.return(), Object(tmpVar125) !== tmpVar125)) {
              return;
            }
          } finally {
            if (tmpVar128) {
              throw tmpVar123;
            }
          }
        }
        return tmpVar126;
      }
    }(tmpVar116, tmpVar117) || function (tmpVar130, tmpVar131) {
      if (tmpVar130) {
        if (typeof tmpVar130 == "string") {
          return _arrayLikeToArray(tmpVar130, tmpVar131);
        }
        var tmpVar132 = {}.toString.call(tmpVar130).slice(8, -1);
        if (tmpVar132 === "Object" && tmpVar130.constructor) {
          tmpVar132 = tmpVar130.constructor.name;
        }
        if (tmpVar132 === "Map" || tmpVar132 === "Set") {
          return Array.from(tmpVar130);
        } else if (tmpVar132 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(tmpVar132)) {
          return _arrayLikeToArray(tmpVar130, tmpVar131);
        } else {
          return undefined;
        }
      }
    }(tmpVar116, tmpVar117) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _arrayLikeToArray(tmpVar133, tmpVar134) {
    if (tmpVar134 == null || tmpVar134 > tmpVar133.length) {
      tmpVar134 = tmpVar133.length;
    }
    for (var tmpVar135 = 0, tmpVar136 = Array(tmpVar134); tmpVar135 < tmpVar134; tmpVar135++) {
      tmpVar136[tmpVar135] = tmpVar133[tmpVar135];
    }
    return tmpVar136;
  }
  function safeJSONStringify(tmpVar137) {
    if (typeof tmpVar137 == "string") {
      return tmpVar137;
    }
    try {
      for (var tmpVar138 = arguments.length, tmpVar139 = new Array(tmpVar138 > 1 ? tmpVar138 - 1 : 0), tmpVar140 = 1; tmpVar140 < tmpVar138; tmpVar140++) {
        tmpVar139[tmpVar140 - 1] = arguments[tmpVar140];
      }
      return JSON.stringify.apply(JSON, [tmpVar137].concat(tmpVar139));
    } catch (tmpVar141) {
      return tmpVar137;
    }
  }
  function joinUrl(tmpVar142, tmpVar143) {
    if (tmpVar143) {
      return tmpVar142.replace(/\/+$/, "") + "/" + tmpVar143.replace(/^\/+/, "");
    } else {
      return tmpVar142;
    }
  }
  function _typeofSymbolSafe(tmpVar144) {
    _typeofSymbolSafe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (tmpVar145) {
      return typeof tmpVar145;
    } : function (tmpVar146) {
      if (tmpVar146 && typeof Symbol == "function" && tmpVar146.constructor === Symbol && tmpVar146 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof tmpVar146;
      }
    };
    return _typeofSymbolSafe(tmpVar144);
  }
  function buildVerifyPayload(tmpVar147) {
    var tmpVar148 = tmpVar147.LZ;
    var tmpVar149 = tmpVar147.LJ;
    var tmpVar150 = tmpVar147.LE;
    if (tmpVar148 && tmpVar149 && tmpVar150) {
      var tmpVar151 = {
        name: "PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var tmpVar152 = {
        name: "Chrome PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var tmpVar153 = {
        name: "Chromium PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var tmpVar154 = {
        name: "Microsoft Edge PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var tmpVar155 = {
        name: "WebKit built-in PDF",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var tmpVar156 = {
        details: [tmpVar151, tmpVar152, tmpVar153, tmpVar154, tmpVar155],
        names: ["Chrome PDF Viewer", "Chromium PDF Viewer", "Microsoft Edge PDF Viewer", "PDF Viewer", "WebKit built-in PDF"],
        fp: "9772d5556d57fcc8177f76029bfd92ef"
      };
      var tmpVar157 = {
        key: "plugins",
        value: tmpVar156
      };
      var tmpVar158 = {
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
      var tmpVar159 = {
        key: "screenObject",
        value: tmpVar158
      };
      var tmpVar160 = {
        locale: "zh-CN",
        calendar: "gregory",
        numberingSystem: "latn",
        timeZone: "Asia/Shanghai",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezoneOffset: -480
      };
      var tmpVar161 = {
        key: "intlObject",
        value: tmpVar160
      };
      function helperFn1(tmpVar162, tmpVar163) {
        tmpVar162 = [tmpVar162[0] >>> 16, tmpVar162[0] & 65535, tmpVar162[1] >>> 16, tmpVar162[1] & 65535];
        tmpVar163 = [tmpVar163[0] >>> 16, tmpVar163[0] & 65535, tmpVar163[1] >>> 16, tmpVar163[1] & 65535];
        var tmpVar164 = [0, 0, 0, 0];
        tmpVar164[3] += tmpVar162[3] + tmpVar163[3];
        tmpVar164[2] += tmpVar164[3] >>> 16;
        tmpVar164[3] &= 65535;
        tmpVar164[2] += tmpVar162[2] + tmpVar163[2];
        tmpVar164[1] += tmpVar164[2] >>> 16;
        tmpVar164[2] &= 65535;
        tmpVar164[1] += tmpVar162[1] + tmpVar163[1];
        tmpVar164[0] += tmpVar164[1] >>> 16;
        tmpVar164[1] &= 65535;
        tmpVar164[0] += tmpVar162[0] + tmpVar163[0];
        tmpVar164[0] &= 65535;
        return [tmpVar164[0] << 16 | tmpVar164[1], tmpVar164[2] << 16 | tmpVar164[3]];
      }
      function helperFn2(tmpVar165, tmpVar166) {
        tmpVar165 = [tmpVar165[0] >>> 16, tmpVar165[0] & 65535, tmpVar165[1] >>> 16, tmpVar165[1] & 65535];
        tmpVar166 = [tmpVar166[0] >>> 16, tmpVar166[0] & 65535, tmpVar166[1] >>> 16, tmpVar166[1] & 65535];
        var tmpVar167 = [0, 0, 0, 0];
        tmpVar167[3] += tmpVar165[3] * tmpVar166[3];
        tmpVar167[2] += tmpVar167[3] >>> 16;
        tmpVar167[3] &= 65535;
        tmpVar167[2] += tmpVar165[2] * tmpVar166[3];
        tmpVar167[1] += tmpVar167[2] >>> 16;
        tmpVar167[2] &= 65535;
        tmpVar167[2] += tmpVar165[3] * tmpVar166[2];
        tmpVar167[1] += tmpVar167[2] >>> 16;
        tmpVar167[2] &= 65535;
        tmpVar167[1] += tmpVar165[1] * tmpVar166[3];
        tmpVar167[0] += tmpVar167[1] >>> 16;
        tmpVar167[1] &= 65535;
        tmpVar167[1] += tmpVar165[2] * tmpVar166[2];
        tmpVar167[0] += tmpVar167[1] >>> 16;
        tmpVar167[1] &= 65535;
        tmpVar167[1] += tmpVar165[3] * tmpVar166[1];
        tmpVar167[0] += tmpVar167[1] >>> 16;
        tmpVar167[1] &= 65535;
        tmpVar167[0] += tmpVar165[0] * tmpVar166[3] + tmpVar165[1] * tmpVar166[2] + tmpVar165[2] * tmpVar166[1] + tmpVar165[3] * tmpVar166[0];
        tmpVar167[0] &= 65535;
        return [tmpVar167[0] << 16 | tmpVar167[1], tmpVar167[2] << 16 | tmpVar167[3]];
      }
      function helperFn3(tmpVar168, tmpVar169) {
        if ((tmpVar169 %= 64) == 32) {
          return [tmpVar168[1], tmpVar168[0]];
        } else if (tmpVar169 < 32) {
          return [tmpVar168[0] << tmpVar169 | tmpVar168[1] >>> 32 - tmpVar169, tmpVar168[1] << tmpVar169 | tmpVar168[0] >>> 32 - tmpVar169];
        } else {
          tmpVar169 -= 32;
          return [tmpVar168[1] << tmpVar169 | tmpVar168[0] >>> 32 - tmpVar169, tmpVar168[0] << tmpVar169 | tmpVar168[1] >>> 32 - tmpVar169];
        }
      }
      function helperFn4(tmpVar170, tmpVar171) {
        if ((tmpVar171 %= 64) == 0) {
          return tmpVar170;
        } else if (tmpVar171 < 32) {
          return [tmpVar170[0] << tmpVar171 | tmpVar170[1] >>> 32 - tmpVar171, tmpVar170[1] << tmpVar171];
        } else {
          return [tmpVar170[1] << tmpVar171 - 32, 0];
        }
      }
      function helperFn5(tmpVar172, tmpVar173) {
        return [tmpVar172[0] ^ tmpVar173[0], tmpVar172[1] ^ tmpVar173[1]];
      }
      function helperFn6(tmpVar174) {
        tmpVar174 = helperFn5(tmpVar174, [0, tmpVar174[0] >>> 1]);
        tmpVar174 = helperFn2(tmpVar174, [4283543511, 3981806797]);
        tmpVar174 = helperFn5(tmpVar174, [0, tmpVar174[0] >>> 1]);
        tmpVar174 = helperFn2(tmpVar174, [3301882366, 444984403]);
        return helperFn5(tmpVar174, [0, tmpVar174[0] >>> 1]);
      }
      function helperFn7(tmpVar175, tmpVar176) {
        tmpVar176 = tmpVar176 || 0;
        var tmpVar177 = (tmpVar175 = tmpVar175 || "").length % 16;
        for (var tmpVar178 = tmpVar175.length - tmpVar177, tmpVar179 = [0, tmpVar176], tmpVar180 = [0, tmpVar176], tmpVar181 = [0, 0], tmpVar182 = [0, 0], tmpVar183 = [2277735313, 289559509], tmpVar184 = [1291169091, 658871167], tmpVar185 = 0; tmpVar185 < tmpVar178; tmpVar185 += 16) {
          tmpVar181 = [tmpVar175.charCodeAt(tmpVar185 + 4) & 255 | (tmpVar175.charCodeAt(tmpVar185 + 5) & 255) << 8 | (tmpVar175.charCodeAt(tmpVar185 + 6) & 255) << 16 | (tmpVar175.charCodeAt(tmpVar185 + 7) & 255) << 24, tmpVar175.charCodeAt(tmpVar185) & 255 | (tmpVar175.charCodeAt(tmpVar185 + 1) & 255) << 8 | (tmpVar175.charCodeAt(tmpVar185 + 2) & 255) << 16 | (tmpVar175.charCodeAt(tmpVar185 + 3) & 255) << 24];
          tmpVar182 = [tmpVar175.charCodeAt(tmpVar185 + 12) & 255 | (tmpVar175.charCodeAt(tmpVar185 + 13) & 255) << 8 | (tmpVar175.charCodeAt(tmpVar185 + 14) & 255) << 16 | (tmpVar175.charCodeAt(tmpVar185 + 15) & 255) << 24, tmpVar175.charCodeAt(tmpVar185 + 8) & 255 | (tmpVar175.charCodeAt(tmpVar185 + 9) & 255) << 8 | (tmpVar175.charCodeAt(tmpVar185 + 10) & 255) << 16 | (tmpVar175.charCodeAt(tmpVar185 + 11) & 255) << 24];
          tmpVar181 = helperFn2(tmpVar181, tmpVar183);
          tmpVar181 = helperFn3(tmpVar181, 31);
          tmpVar181 = helperFn2(tmpVar181, tmpVar184);
          tmpVar179 = helperFn5(tmpVar179, tmpVar181);
          tmpVar179 = helperFn3(tmpVar179, 27);
          tmpVar179 = helperFn1(tmpVar179, tmpVar180);
          tmpVar179 = helperFn1(helperFn2(tmpVar179, [0, 5]), [0, 1390208809]);
          tmpVar182 = helperFn2(tmpVar182, tmpVar184);
          tmpVar182 = helperFn3(tmpVar182, 33);
          tmpVar182 = helperFn2(tmpVar182, tmpVar183);
          tmpVar180 = helperFn5(tmpVar180, tmpVar182);
          tmpVar180 = helperFn3(tmpVar180, 31);
          tmpVar180 = helperFn1(tmpVar180, tmpVar179);
          tmpVar180 = helperFn1(helperFn2(tmpVar180, [0, 5]), [0, 944331445]);
        }
        tmpVar181 = [0, 0];
        tmpVar182 = [0, 0];
        switch (tmpVar177) {
          case 15:
            tmpVar182 = helperFn5(tmpVar182, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 14)], 48));
          case 14:
            tmpVar182 = helperFn5(tmpVar182, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 13)], 40));
          case 13:
            tmpVar182 = helperFn5(tmpVar182, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 12)], 32));
          case 12:
            tmpVar182 = helperFn5(tmpVar182, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 11)], 24));
          case 11:
            tmpVar182 = helperFn5(tmpVar182, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 10)], 16));
          case 10:
            tmpVar182 = helperFn5(tmpVar182, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 9)], 8));
          case 9:
            tmpVar182 = helperFn5(tmpVar182, [0, tmpVar175.charCodeAt(tmpVar185 + 8)]);
            tmpVar182 = helperFn2(tmpVar182, tmpVar184);
            tmpVar182 = helperFn3(tmpVar182, 33);
            tmpVar182 = helperFn2(tmpVar182, tmpVar183);
            tmpVar180 = helperFn5(tmpVar180, tmpVar182);
          case 8:
            tmpVar181 = helperFn5(tmpVar181, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 7)], 56));
          case 7:
            tmpVar181 = helperFn5(tmpVar181, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 6)], 48));
          case 6:
            tmpVar181 = helperFn5(tmpVar181, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 5)], 40));
          case 5:
            tmpVar181 = helperFn5(tmpVar181, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 4)], 32));
          case 4:
            tmpVar181 = helperFn5(tmpVar181, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 3)], 24));
          case 3:
            tmpVar181 = helperFn5(tmpVar181, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 2)], 16));
          case 2:
            tmpVar181 = helperFn5(tmpVar181, helperFn4([0, tmpVar175.charCodeAt(tmpVar185 + 1)], 8));
          case 1:
            tmpVar181 = helperFn5(tmpVar181, [0, tmpVar175.charCodeAt(tmpVar185)]);
            tmpVar181 = helperFn2(tmpVar181, tmpVar183);
            tmpVar181 = helperFn3(tmpVar181, 31);
            tmpVar181 = helperFn2(tmpVar181, tmpVar184);
            tmpVar179 = helperFn5(tmpVar179, tmpVar181);
        }
        tmpVar179 = helperFn5(tmpVar179, [0, tmpVar175.length]);
        tmpVar180 = helperFn5(tmpVar180, [0, tmpVar175.length]);
        tmpVar179 = helperFn1(tmpVar179, tmpVar180);
        tmpVar180 = helperFn1(tmpVar180, tmpVar179);
        tmpVar179 = helperFn6(tmpVar179);
        tmpVar180 = helperFn6(tmpVar180);
        tmpVar179 = helperFn1(tmpVar179, tmpVar180);
        tmpVar180 = helperFn1(tmpVar180, tmpVar179);
        return ("00000000" + (tmpVar179[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (tmpVar179[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (tmpVar180[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (tmpVar180[1] >>> 0).toString(16)).slice(-8);
      }
      var tmpVar186 = {
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
      var tmpVar187 = {
        fp_infos: function (tmpVar188) {
          var tmpVar189 = {
            errors: {}
          };
          for (var tmpVar190 in tmpVar188) {
            var tmpVar191 = tmpVar188[tmpVar190];
            var tmpVar192 = tmpVar191.key;
            var tmpVar193 = tmpVar191.value;
            if (typeof tmpVar193 == "string" && tmpVar193.indexOf("Error: ") != -1) {
              tmpVar189.errors[tmpVar192] = tmpVar193;
            } else {
              tmpVar189[tmpVar192] = tmpVar193;
            }
          }
          var tmpVar194 = new Date();
          tmpVar189.dateTime = {
            timestamp: tmpVar194.getTime()
          };
          tmpVar189.fp = function (tmpVar195, tmpVar196) {
            var tmpVar197 = [tmpVar195.plugins && tmpVar195.plugins.fp, tmpVar195.fonts && tmpVar195.fonts.fp, tmpVar195.screenObject.colorDepth, tmpVar195.intlObject, tmpVar195.deviceInfos, tmpVar195.touchSupport, tmpVar195.navigatorObject.platform, tmpVar195.navigatorObject.vendor, tmpVar195.storageObject, tmpVar195.functions, tmpVar195.audio, _typeofSymbolSafe(tmpVar195.webGL) == "object" ? tmpVar195.webGL.fp : undefined, _typeofSymbolSafe(tmpVar195.canvas) == "object" ? tmpVar195.canvas.fp : undefined];
            for (var tmpVar198 in tmpVar197) {
              if (tmpVar197[tmpVar198] === undefined) {
                tmpVar197[tmpVar198] = "";
              }
            }
            return tmpVar196(tmpVar197.toString(), 31);
          }(tmpVar189, helperFn7);
          tmpVar189.protocol = tmpVar186.protocol.replace(":", "");
          (function () {
            var tmpVar199 = tmpVar189.dateTime.timestamp % 10 || 10;
            for (var tmpVar200 in tmpVar189) {
              var tmpVar201 = tmpVar189[tmpVar200];
              if (_typeofSymbolSafe(tmpVar201) == "object") {
                var tmpVar202 = 0;
                for (var tmpVar203 in tmpVar201) {
                  var tmpVar204 = tmpVar201[tmpVar203];
                  tmpVar202 += typeof tmpVar204 == "number" ? parseInt(tmpVar204) : typeof tmpVar204 == "string" ? tmpVar204.length : tmpVar199;
                }
                if (tmpVar202) {
                  tmpVar189[tmpVar200].verify = tmpVar202 * tmpVar199;
                }
              }
            }
          })();
          return tmpVar189;
        }([tmpVar157, {
          key: "fonts",
          value: {
            names: ["Arial", "Arial Black", "Arial Narrow", "Calibri", "Cambria", "Cambria Math", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Georgia", "Helvetica", "Impact", "Lucida Console", "Lucida Sans Unicode", "Microsoft Sans Serif", "MS Gothic", "MS PGothic", "MS Sans Serif", "MS Serif", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Trebuchet MS", "Verdana", "Wingdings"],
            fp: "f730c0cc627b3b3d7db9f459836db692"
          }
        }, tmpVar159, tmpVar161, {
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
        }]),
        answer: function () {
          var tmpVar205 = 0;
          var tmpVar206 = 1;
          for (var tmpVar207 = 0; tmpVar207 < tmpVar148.length; tmpVar207++) {
            tmpVar205 = (tmpVar205 + tmpVar148.charCodeAt(tmpVar207)) * 2;
            tmpVar206 = (tmpVar206 + tmpVar207 + 1) * 2;
          }
          tmpVar205 *= tmpVar149;
          return "WZWS_CONFIRM_PREFIX_LABEL" + (tmpVar205 + tmpVar206);
        }(),
        hostname: tmpVar186.hostname,
        scheme: tmpVar186.protocol.replace(":", "")
      };
      return function (tmpVar208) {
        var tmpVar209;
        var tmpVar210;
        var tmpVar211;
        var tmpVar212;
        var tmpVar213;
        var tmpVar214;
        var tmpVar215 = tmpVar150;
        tmpVar211 = tmpVar208.length;
        tmpVar210 = 0;
        tmpVar209 = "";
        while (tmpVar210 < tmpVar211) {
          tmpVar212 = tmpVar208.charCodeAt(tmpVar210++) & 255;
          if (tmpVar210 == tmpVar211) {
            tmpVar209 += tmpVar215.charAt(tmpVar212 >> 2);
            tmpVar209 += tmpVar215.charAt((tmpVar212 & 3) << 4);
            tmpVar209 += "==";
            break;
          }
          tmpVar213 = tmpVar208.charCodeAt(tmpVar210++);
          if (tmpVar210 == tmpVar211) {
            tmpVar209 += tmpVar215.charAt(tmpVar212 >> 2);
            tmpVar209 += tmpVar215.charAt((tmpVar212 & 3) << 4 | (tmpVar213 & 240) >> 4);
            tmpVar209 += tmpVar215.charAt((tmpVar213 & 15) << 2);
            tmpVar209 += "=";
            break;
          }
          tmpVar214 = tmpVar208.charCodeAt(tmpVar210++);
          tmpVar209 += tmpVar215.charAt(tmpVar212 >> 2);
          tmpVar209 += tmpVar215.charAt((tmpVar212 & 3) << 4 | (tmpVar213 & 240) >> 4);
          tmpVar209 += tmpVar215.charAt((tmpVar213 & 15) << 2 | (tmpVar214 & 192) >> 6);
          tmpVar209 += tmpVar215.charAt(tmpVar214 & 63);
        }
        return tmpVar209;
      }(JSON.stringify(tmpVar187));
    }
  }
  function _typeofArgumentSafe(tmpVar216) {
    _typeofArgumentSafe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (tmpVar217) {
      return typeof tmpVar217;
    } : function (tmpVar218) {
      if (tmpVar218 && typeof Symbol == "function" && tmpVar218.constructor === Symbol && tmpVar218 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof tmpVar218;
      }
    };
    return _typeofArgumentSafe(tmpVar216);
  }
  var scriptArgs = typeof $argument != "undefined" ? (typeof $argument == "undefined" ? "undefined" : _typeofArgumentSafe($argument)) == "object" ? $argument : Object.fromEntries($argument.split("&").map(function (tmpVar219) {
    return tmpVar219.split("=");
  })) : {};
  function _typeofValueSafe(tmpVar220) {
    _typeofValueSafe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (tmpVar221) {
      return typeof tmpVar221;
    } : function (tmpVar222) {
      if (tmpVar222 && typeof Symbol == "function" && tmpVar222.constructor === Symbol && tmpVar222 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof tmpVar222;
      }
    };
    return _typeofValueSafe(tmpVar220);
  }
  function _ownKeys(tmpVar223, tmpVar224) {
    var tmpVar225 = Object.keys(tmpVar223);
    if (Object.getOwnPropertySymbols) {
      var tmpVar226 = Object.getOwnPropertySymbols(tmpVar223);
      if (tmpVar224) {
        tmpVar226 = tmpVar226.filter(function (tmpVar227) {
          return Object.getOwnPropertyDescriptor(tmpVar223, tmpVar227).enumerable;
        });
      }
      tmpVar225.push.apply(tmpVar225, tmpVar226);
    }
    return tmpVar225;
  }
  function _objectSpread(tmpVar228) {
    for (var tmpVar229 = 1; tmpVar229 < arguments.length; tmpVar229++) {
      var tmpVar230 = arguments[tmpVar229] ?? {};
      if (tmpVar229 % 2) {
        _ownKeys(Object(tmpVar230), true).forEach(function (tmpVar231) {
          _defineProperty(tmpVar228, tmpVar231, tmpVar230[tmpVar231]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(tmpVar228, Object.getOwnPropertyDescriptors(tmpVar230));
      } else {
        _ownKeys(Object(tmpVar230)).forEach(function (tmpVar232) {
          Object.defineProperty(tmpVar228, tmpVar232, Object.getOwnPropertyDescriptor(tmpVar230, tmpVar232));
        });
      }
    }
    return tmpVar228;
  }
  function _defineProperty(tmpVar233, tmpVar234, tmpVar235) {
    if ((tmpVar234 = function (tmpVar236) {
      var tmpVar237 = function (tmpVar238, tmpVar239) {
        if (_typeofValueSafe(tmpVar238) != "object" || !tmpVar238) {
          return tmpVar238;
        }
        var tmpVar240 = tmpVar238[Symbol.toPrimitive];
        if (tmpVar240 !== undefined) {
          var tmpVar241 = tmpVar240.call(tmpVar238, tmpVar239 || "default");
          if (_typeofValueSafe(tmpVar241) != "object") {
            return tmpVar241;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (tmpVar239 === "string" ? String : Number)(tmpVar238);
      }(tmpVar236, "string");
      if (_typeofValueSafe(tmpVar237) == "symbol") {
        return tmpVar237;
      } else {
        return tmpVar237 + "";
      }
    }(tmpVar234)) in tmpVar233) {
      Object.defineProperty(tmpVar233, tmpVar234, {
        value: tmpVar235,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      tmpVar233[tmpVar234] = tmpVar235;
    }
    return tmpVar233;
  }
  function _slicedToArray(tmpVar242, tmpVar243) {
    return function (tmpVar244) {
      if (Array.isArray(tmpVar244)) {
        return tmpVar244;
      }
    }(tmpVar242) || function (tmpVar245, tmpVar246) {
      var tmpVar247 = tmpVar245 == null ? null : typeof Symbol != "undefined" && tmpVar245[Symbol.iterator] || tmpVar245["@@iterator"];
      if (tmpVar247 != null) {
        var tmpVar248;
        var tmpVar249;
        var tmpVar250;
        var tmpVar251;
        var tmpVar252 = [];
        var tmpVar253 = true;
        var tmpVar254 = false;
        try {
          tmpVar250 = (tmpVar247 = tmpVar247.call(tmpVar245)).next;
          if (tmpVar246 === 0) {
            if (Object(tmpVar247) !== tmpVar247) {
              return;
            }
            tmpVar253 = false;
          } else {
            for (; !(tmpVar253 = (tmpVar248 = tmpVar250.call(tmpVar247)).done) && (tmpVar252.push(tmpVar248.value), tmpVar252.length !== tmpVar246); tmpVar253 = true);
          }
        } catch (tmpVar255) {
          tmpVar254 = true;
          tmpVar249 = tmpVar255;
        } finally {
          try {
            if (!tmpVar253 && tmpVar247.return != null && (tmpVar251 = tmpVar247.return(), Object(tmpVar251) !== tmpVar251)) {
              return;
            }
          } finally {
            if (tmpVar254) {
              throw tmpVar249;
            }
          }
        }
        return tmpVar252;
      }
    }(tmpVar242, tmpVar243) || function (tmpVar256, tmpVar257) {
      if (tmpVar256) {
        if (typeof tmpVar256 == "string") {
          return _arrayLikeToArrayLoose(tmpVar256, tmpVar257);
        }
        var tmpVar258 = {}.toString.call(tmpVar256).slice(8, -1);
        if (tmpVar258 === "Object" && tmpVar256.constructor) {
          tmpVar258 = tmpVar256.constructor.name;
        }
        if (tmpVar258 === "Map" || tmpVar258 === "Set") {
          return Array.from(tmpVar256);
        } else if (tmpVar258 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(tmpVar258)) {
          return _arrayLikeToArrayLoose(tmpVar256, tmpVar257);
        } else {
          return undefined;
        }
      }
    }(tmpVar242, tmpVar243) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _arrayLikeToArrayLoose(tmpVar259, tmpVar260) {
    if (tmpVar260 == null || tmpVar260 > tmpVar259.length) {
      tmpVar260 = tmpVar259.length;
    }
    for (var tmpVar261 = 0, tmpVar262 = Array(tmpVar260); tmpVar261 < tmpVar260; tmpVar261++) {
      tmpVar262[tmpVar261] = tmpVar259[tmpVar261];
    }
    return tmpVar262;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return tmpVar263;
    };
    var tmpVar264;
    var tmpVar263 = {};
    var tmpVar265 = Object.prototype;
    var tmpVar266 = tmpVar265.hasOwnProperty;
    var tmpVar267 = Object.defineProperty || function (tmpVar268, tmpVar269, tmpVar270) {
      tmpVar268[tmpVar269] = tmpVar270.value;
    };
    var tmpVar271 = typeof Symbol == "function" ? Symbol : {};
    var tmpVar272 = tmpVar271.iterator || "@@iterator";
    var tmpVar273 = tmpVar271.asyncIterator || "@@asyncIterator";
    var tmpVar274 = tmpVar271.toStringTag || "@@toStringTag";
    function helperFn8(tmpVar275, tmpVar276, tmpVar277) {
      var tmpVar278 = {
        value: tmpVar277,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(tmpVar275, tmpVar276, tmpVar278);
      return tmpVar275[tmpVar276];
    }
    try {
      helperFn8({}, "");
    } catch (tmpVar279) {
      helperFn8 = function (tmpVar280, tmpVar281, tmpVar282) {
        return tmpVar280[tmpVar281] = tmpVar282;
      };
    }
    function helperFn9(tmpVar283, tmpVar284, tmpVar285, tmpVar286) {
      var tmpVar287 = tmpVar284 && tmpVar284.prototype instanceof helperFn10 ? tmpVar284 : helperFn10;
      var tmpVar288 = Object.create(tmpVar287.prototype);
      var tmpVar289 = new helperFn11(tmpVar286 || []);
      tmpVar267(tmpVar288, "_invoke", {
        value: helperFn12(tmpVar283, tmpVar285, tmpVar289)
      });
      return tmpVar288;
    }
    function helperFn13(tmpVar290, tmpVar291, tmpVar292) {
      try {
        return {
          type: "normal",
          arg: tmpVar290.call(tmpVar291, tmpVar292)
        };
      } catch (tmpVar293) {
        var tmpVar294 = {
          type: "throw",
          arg: tmpVar293
        };
        return tmpVar294;
      }
    }
    tmpVar263.wrap = helperFn9;
    var tmpVar295 = "suspendedStart";
    var tmpVar296 = "suspendedYield";
    var tmpVar297 = "executing";
    var tmpVar298 = "completed";
    var tmpVar299 = {};
    function helperFn10() {}
    function helperFn14() {}
    function helperFn15() {}
    var tmpVar300 = {};
    helperFn8(tmpVar300, tmpVar272, function () {
      return this;
    });
    var tmpVar301 = Object.getPrototypeOf;
    var tmpVar302 = tmpVar301 && tmpVar301(tmpVar301(helperFn16([])));
    if (tmpVar302 && tmpVar302 !== tmpVar265 && tmpVar266.call(tmpVar302, tmpVar272)) {
      tmpVar300 = tmpVar302;
    }
    var tmpVar303 = helperFn15.prototype = helperFn10.prototype = Object.create(tmpVar300);
    function helperFn17(tmpVar304) {
      ["next", "throw", "return"].forEach(function (tmpVar305) {
        helperFn8(tmpVar304, tmpVar305, function (tmpVar306) {
          return this._invoke(tmpVar305, tmpVar306);
        });
      });
    }
    function helperFn18(tmpVar307, tmpVar308) {
      function helperFn19(tmpVar309, tmpVar310, tmpVar311, tmpVar312) {
        var tmpVar313 = helperFn13(tmpVar307[tmpVar309], tmpVar307, tmpVar310);
        if (tmpVar313.type !== "throw") {
          var tmpVar314 = tmpVar313.arg;
          var tmpVar315 = tmpVar314.value;
          if (tmpVar315 && _typeofValueSafe(tmpVar315) == "object" && tmpVar266.call(tmpVar315, "__await")) {
            return tmpVar308.resolve(tmpVar315.__await).then(function (tmpVar316) {
              helperFn19("next", tmpVar316, tmpVar311, tmpVar312);
            }, function (tmpVar317) {
              helperFn19("throw", tmpVar317, tmpVar311, tmpVar312);
            });
          } else {
            return tmpVar308.resolve(tmpVar315).then(function (tmpVar318) {
              tmpVar314.value = tmpVar318;
              tmpVar311(tmpVar314);
            }, function (tmpVar319) {
              return helperFn19("throw", tmpVar319, tmpVar311, tmpVar312);
            });
          }
        }
        tmpVar312(tmpVar313.arg);
      }
      var tmpVar320;
      tmpVar267(this, "_invoke", {
        value: function (tmpVar321, tmpVar322) {
          function helperFn20() {
            return new tmpVar308(function (tmpVar323, tmpVar324) {
              helperFn19(tmpVar321, tmpVar322, tmpVar323, tmpVar324);
            });
          }
          return tmpVar320 = tmpVar320 ? tmpVar320.then(helperFn20, helperFn20) : helperFn20();
        }
      });
    }
    function helperFn12(tmpVar325, tmpVar326, tmpVar327) {
      var tmpVar328 = tmpVar295;
      return function (tmpVar329, tmpVar330) {
        if (tmpVar328 === tmpVar297) {
          throw Error("Generator is already running");
        }
        if (tmpVar328 === tmpVar298) {
          if (tmpVar329 === "throw") {
            throw tmpVar330;
          }
          var tmpVar331 = {
            value: tmpVar264,
            done: true
          };
          return tmpVar331;
        }
        tmpVar327.method = tmpVar329;
        tmpVar327.arg = tmpVar330;
        while (true) {
          var tmpVar332 = tmpVar327.delegate;
          if (tmpVar332) {
            var tmpVar333 = helperFn21(tmpVar332, tmpVar327);
            if (tmpVar333) {
              if (tmpVar333 === tmpVar299) {
                continue;
              }
              return tmpVar333;
            }
          }
          if (tmpVar327.method === "next") {
            tmpVar327.sent = tmpVar327._sent = tmpVar327.arg;
          } else if (tmpVar327.method === "throw") {
            if (tmpVar328 === tmpVar295) {
              tmpVar328 = tmpVar298;
              throw tmpVar327.arg;
            }
            tmpVar327.dispatchException(tmpVar327.arg);
          } else if (tmpVar327.method === "return") {
            tmpVar327.abrupt("return", tmpVar327.arg);
          }
          tmpVar328 = tmpVar297;
          var tmpVar334 = helperFn13(tmpVar325, tmpVar326, tmpVar327);
          if (tmpVar334.type === "normal") {
            tmpVar328 = tmpVar327.done ? tmpVar298 : tmpVar296;
            if (tmpVar334.arg === tmpVar299) {
              continue;
            }
            var tmpVar335 = {
              value: tmpVar334.arg,
              done: tmpVar327.done
            };
            return tmpVar335;
          }
          if (tmpVar334.type === "throw") {
            tmpVar328 = tmpVar298;
            tmpVar327.method = "throw";
            tmpVar327.arg = tmpVar334.arg;
          }
        }
      };
    }
    function helperFn21(tmpVar336, tmpVar337) {
      var tmpVar338 = tmpVar337.method;
      var tmpVar339 = tmpVar336.iterator[tmpVar338];
      if (tmpVar339 === tmpVar264) {
        tmpVar337.delegate = null;
        if (tmpVar338 !== "throw" || !tmpVar336.iterator.return || !(tmpVar337.method = "return", tmpVar337.arg = tmpVar264, helperFn21(tmpVar336, tmpVar337), tmpVar337.method === "throw")) {
          if (tmpVar338 !== "return") {
            tmpVar337.method = "throw";
            tmpVar337.arg = new TypeError("The iterator does not provide a '" + tmpVar338 + "' method");
          }
        }
        return tmpVar299;
      }
      var tmpVar340 = helperFn13(tmpVar339, tmpVar336.iterator, tmpVar337.arg);
      if (tmpVar340.type === "throw") {
        tmpVar337.method = "throw";
        tmpVar337.arg = tmpVar340.arg;
        tmpVar337.delegate = null;
        return tmpVar299;
      }
      var tmpVar341 = tmpVar340.arg;
      if (tmpVar341) {
        if (tmpVar341.done) {
          tmpVar337[tmpVar336.resultName] = tmpVar341.value;
          tmpVar337.next = tmpVar336.nextLoc;
          if (tmpVar337.method !== "return") {
            tmpVar337.method = "next";
            tmpVar337.arg = tmpVar264;
          }
          tmpVar337.delegate = null;
          return tmpVar299;
        } else {
          return tmpVar341;
        }
      } else {
        tmpVar337.method = "throw";
        tmpVar337.arg = new TypeError("iterator result is not an object");
        tmpVar337.delegate = null;
        return tmpVar299;
      }
    }
    function helperFn22(tmpVar342) {
      var tmpVar343 = {
        tryLoc: tmpVar342[0]
      };
      var tmpVar344 = tmpVar343;
      if (1 in tmpVar342) {
        tmpVar344.catchLoc = tmpVar342[1];
      }
      if (2 in tmpVar342) {
        tmpVar344.finallyLoc = tmpVar342[2];
        tmpVar344.afterLoc = tmpVar342[3];
      }
      this.tryEntries.push(tmpVar344);
    }
    function helperFn23(tmpVar345) {
      var tmpVar346 = tmpVar345.completion || {};
      tmpVar346.type = "normal";
      delete tmpVar346.arg;
      tmpVar345.completion = tmpVar346;
    }
    function helperFn11(tmpVar347) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tmpVar347.forEach(helperFn22, this);
      this.reset(true);
    }
    function helperFn16(tmpVar348) {
      if (tmpVar348 || tmpVar348 === "") {
        var tmpVar349 = tmpVar348[tmpVar272];
        if (tmpVar349) {
          return tmpVar349.call(tmpVar348);
        }
        if (typeof tmpVar348.next == "function") {
          return tmpVar348;
        }
        if (!isNaN(tmpVar348.length)) {
          var tmpVar350 = -1;
          var tmpVar351 = function helperFn24() {
            while (++tmpVar350 < tmpVar348.length) {
              if (tmpVar266.call(tmpVar348, tmpVar350)) {
                helperFn24.value = tmpVar348[tmpVar350];
                helperFn24.done = false;
                return helperFn24;
              }
            }
            helperFn24.value = tmpVar264;
            helperFn24.done = true;
            return helperFn24;
          };
          return tmpVar351.next = tmpVar351;
        }
      }
      throw new TypeError(_typeofValueSafe(tmpVar348) + " is not iterable");
    }
    helperFn14.prototype = helperFn15;
    tmpVar267(tmpVar303, "constructor", {
      value: helperFn15,
      configurable: true
    });
    tmpVar267(helperFn15, "constructor", {
      value: helperFn14,
      configurable: true
    });
    helperFn14.displayName = helperFn8(helperFn15, tmpVar274, "GeneratorFunction");
    tmpVar263.isGeneratorFunction = function (tmpVar352) {
      var tmpVar353 = typeof tmpVar352 == "function" && tmpVar352.constructor;
      return !!tmpVar353 && (tmpVar353 === helperFn14 || (tmpVar353.displayName || tmpVar353.name) === "GeneratorFunction");
    };
    tmpVar263.mark = function (tmpVar354) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(tmpVar354, helperFn15);
      } else {
        tmpVar354.__proto__ = helperFn15;
        helperFn8(tmpVar354, tmpVar274, "GeneratorFunction");
      }
      tmpVar354.prototype = Object.create(tmpVar303);
      return tmpVar354;
    };
    tmpVar263.awrap = function (tmpVar355) {
      var tmpVar356 = {
        __await: tmpVar355
      };
      return tmpVar356;
    };
    helperFn17(helperFn18.prototype);
    helperFn8(helperFn18.prototype, tmpVar273, function () {
      return this;
    });
    tmpVar263.AsyncIterator = helperFn18;
    tmpVar263.async = function (tmpVar357, tmpVar358, tmpVar359, tmpVar360, tmpVar361 = Promise) {
      var tmpVar362 = new helperFn18(helperFn9(tmpVar357, tmpVar358, tmpVar359, tmpVar360), tmpVar361);
      if (tmpVar263.isGeneratorFunction(tmpVar358)) {
        return tmpVar362;
      } else {
        return tmpVar362.next().then(function (tmpVar363) {
          if (tmpVar363.done) {
            return tmpVar363.value;
          } else {
            return tmpVar362.next();
          }
        });
      }
    };
    helperFn17(tmpVar303);
    helperFn8(tmpVar303, tmpVar274, "Generator");
    helperFn8(tmpVar303, tmpVar272, function () {
      return this;
    });
    helperFn8(tmpVar303, "toString", function () {
      return "[object Generator]";
    });
    tmpVar263.keys = function (tmpVar364) {
      var tmpVar365 = Object(tmpVar364);
      var tmpVar366 = [];
      for (var tmpVar367 in tmpVar365) {
        tmpVar366.push(tmpVar367);
      }
      tmpVar366.reverse();
      return function helperFn25() {
        while (tmpVar366.length) {
          var tmpVar368 = tmpVar366.pop();
          if (tmpVar368 in tmpVar365) {
            helperFn25.value = tmpVar368;
            helperFn25.done = false;
            return helperFn25;
          }
        }
        helperFn25.done = true;
        return helperFn25;
      };
    };
    tmpVar263.values = helperFn16;
    helperFn11.prototype = {
      constructor: helperFn11,
      reset: function (tmpVar369) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = tmpVar264;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = tmpVar264;
        this.tryEntries.forEach(helperFn23);
        if (!tmpVar369) {
          for (var tmpVar370 in this) {
            if (tmpVar370.charAt(0) === "t" && tmpVar266.call(this, tmpVar370) && !isNaN(+tmpVar370.slice(1))) {
              this[tmpVar370] = tmpVar264;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var tmpVar371 = this.tryEntries[0].completion;
        if (tmpVar371.type === "throw") {
          throw tmpVar371.arg;
        }
        return this.rval;
      },
      dispatchException: function (tmpVar372) {
        if (this.done) {
          throw tmpVar372;
        }
        var tmpVar373 = this;
        function helperFn26(tmpVar374, tmpVar375) {
          tmpVar376.type = "throw";
          tmpVar376.arg = tmpVar372;
          tmpVar373.next = tmpVar374;
          if (tmpVar375) {
            tmpVar373.method = "next";
            tmpVar373.arg = tmpVar264;
          }
          return !!tmpVar375;
        }
        for (var tmpVar377 = this.tryEntries.length - 1; tmpVar377 >= 0; --tmpVar377) {
          var tmpVar378 = this.tryEntries[tmpVar377];
          var tmpVar376 = tmpVar378.completion;
          if (tmpVar378.tryLoc === "root") {
            return helperFn26("end");
          }
          if (tmpVar378.tryLoc <= this.prev) {
            var tmpVar379 = tmpVar266.call(tmpVar378, "catchLoc");
            var tmpVar380 = tmpVar266.call(tmpVar378, "finallyLoc");
            if (tmpVar379 && tmpVar380) {
              if (this.prev < tmpVar378.catchLoc) {
                return helperFn26(tmpVar378.catchLoc, true);
              }
              if (this.prev < tmpVar378.finallyLoc) {
                return helperFn26(tmpVar378.finallyLoc);
              }
            } else if (tmpVar379) {
              if (this.prev < tmpVar378.catchLoc) {
                return helperFn26(tmpVar378.catchLoc, true);
              }
            } else {
              if (!tmpVar380) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < tmpVar378.finallyLoc) {
                return helperFn26(tmpVar378.finallyLoc);
              }
            }
          }
        }
      },
      abrupt: function (tmpVar381, tmpVar382) {
        for (var tmpVar383 = this.tryEntries.length - 1; tmpVar383 >= 0; --tmpVar383) {
          var tmpVar384 = this.tryEntries[tmpVar383];
          if (tmpVar384.tryLoc <= this.prev && tmpVar266.call(tmpVar384, "finallyLoc") && this.prev < tmpVar384.finallyLoc) {
            var tmpVar385 = tmpVar384;
            break;
          }
        }
        if (tmpVar385 && (tmpVar381 === "break" || tmpVar381 === "continue") && tmpVar385.tryLoc <= tmpVar382 && tmpVar382 <= tmpVar385.finallyLoc) {
          tmpVar385 = null;
        }
        var tmpVar386 = tmpVar385 ? tmpVar385.completion : {};
        tmpVar386.type = tmpVar381;
        tmpVar386.arg = tmpVar382;
        if (tmpVar385) {
          this.method = "next";
          this.next = tmpVar385.finallyLoc;
          return tmpVar299;
        } else {
          return this.complete(tmpVar386);
        }
      },
      complete: function (tmpVar387, tmpVar388) {
        if (tmpVar387.type === "throw") {
          throw tmpVar387.arg;
        }
        if (tmpVar387.type === "break" || tmpVar387.type === "continue") {
          this.next = tmpVar387.arg;
        } else if (tmpVar387.type === "return") {
          this.rval = this.arg = tmpVar387.arg;
          this.method = "return";
          this.next = "end";
        } else if (tmpVar387.type === "normal" && tmpVar388) {
          this.next = tmpVar388;
        }
        return tmpVar299;
      },
      finish: function (tmpVar389) {
        for (var tmpVar390 = this.tryEntries.length - 1; tmpVar390 >= 0; --tmpVar390) {
          var tmpVar391 = this.tryEntries[tmpVar390];
          if (tmpVar391.finallyLoc === tmpVar389) {
            this.complete(tmpVar391.completion, tmpVar391.afterLoc);
            helperFn23(tmpVar391);
            return tmpVar299;
          }
        }
      },
      catch: function (tmpVar392) {
        for (var tmpVar393 = this.tryEntries.length - 1; tmpVar393 >= 0; --tmpVar393) {
          var tmpVar394 = this.tryEntries[tmpVar393];
          if (tmpVar394.tryLoc === tmpVar392) {
            var tmpVar395 = tmpVar394.completion;
            if (tmpVar395.type === "throw") {
              var tmpVar396 = tmpVar395.arg;
              helperFn23(tmpVar394);
            }
            return tmpVar396;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (tmpVar397, tmpVar398, tmpVar399) {
        this.delegate = {
          iterator: helperFn16(tmpVar397),
          resultName: tmpVar398,
          nextLoc: tmpVar399
        };
        if (this.method === "next") {
          this.arg = tmpVar264;
        }
        return tmpVar299;
      }
    };
    return tmpVar263;
  }
  function _asyncGeneratorStep(tmpVar400, tmpVar401, tmpVar402, tmpVar403, tmpVar404, tmpVar405, tmpVar406) {
    try {
      var tmpVar407 = tmpVar400[tmpVar405](tmpVar406);
      var tmpVar408 = tmpVar407.value;
    } catch (tmpVar409) {
      tmpVar402(tmpVar409);
      return;
    }
    if (tmpVar407.done) {
      tmpVar401(tmpVar408);
    } else {
      Promise.resolve(tmpVar408).then(tmpVar403, tmpVar404);
    }
  }
  function _asyncToGenerator(tmpVar410) {
    return function () {
      var tmpVar411 = this;
      var tmpVar412 = arguments;
      return new Promise(function (tmpVar413, tmpVar414) {
        var tmpVar415 = tmpVar410.apply(tmpVar411, tmpVar412);
        function helperFn27(tmpVar416) {
          _asyncGeneratorStep(tmpVar415, tmpVar413, tmpVar414, helperFn27, helperFn28, "next", tmpVar416);
        }
        function helperFn28(tmpVar417) {
          _asyncGeneratorStep(tmpVar415, tmpVar413, tmpVar414, helperFn27, helperFn28, "throw", tmpVar417);
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
  function runMainTask() {
    return runMainTaskAsync.apply(this, arguments);
  }
  function runMainTaskAsync() {
    runMainTaskAsync = _asyncToGenerator(_regeneratorRuntime().mark(function helperFn29() {
      var tmpVar418;
      return _regeneratorRuntime().wrap(function (tmpVar419) {
        while (true) {
          switch (tmpVar419.prev = tmpVar419.next) {
            case 0:
              if (currentCookie) {
                tmpVar419.next = 4;
                break;
              }
              tmpVar419.next = 3;
              return pushNotification(notifyTitle, "", "未填写/未获取Cookie!!");
            case 3:
            case 7:
            case 14:
            case 20:
            case 27:
              return tmpVar419.abrupt("return");
            case 4:
              if (currentCookie.includes("auth=")) {
                tmpVar419.next = 8;
                break;
              }
              tmpVar419.next = 7;
              return pushNotification(notifyTitle, "", "Cookie关键授权字段缺失, 需重新获取!!");
            case 8:
              currentCookie = normalizeCookieFields(currentCookie);
              tmpVar419.next = 11;
              return fetchUserProfile();
            case 11:
              if (PathUtils.get(globalThis, "user.id")) {
                tmpVar419.next = 15;
                break;
              }
              tmpVar419.next = 14;
              return pushNotification(notifyTitle, "❌ 获取用户信息失败", "Cookie失效 ‼️‼️");
            case 15:
              tmpVar419.next = 17;
              return fetchVerifyParams();
            case 17:
              if (globalThis.verifyBody) {
                tmpVar419.next = 21;
                break;
              }
              tmpVar419.next = 20;
              return pushNotification(notifyTitle, "❌ 获取混淆参数失败", "请等待修复!!");
            case 21:
              tmpVar419.next = 23;
              return validateVerifyPayload();
            case 23:
              tmpVar418 = tmpVar419.sent;
              if (tmpVar418) {
                tmpVar419.next = 28;
                break;
              }
              tmpVar419.next = 27;
              return pushNotification(notifyTitle, "❌ 参数校验失败", "请等待修复!!");
            case 28:
              tmpVar419.next = 30;
              return executeSignIn();
            case 30:
              tmpVar419.next = 32;
              return pushNotification(notifyTitle, `${globalThis.user.name}[${`${globalThis.user.id}`.replace(/(\d{3})\d+(\d{2})/, "$1****$2")}]`, globalThis.msgBody);
            case 32:
            case "end":
              return tmpVar419.stop();
          }
        }
      }, helperFn29);
    }));
    return runMainTaskAsync.apply(this, arguments);
  }
  function fetchUserProfile() {
    return fetchUserProfileAsync.apply(this, arguments);
  }
  function fetchUserProfileAsync() {
    fetchUserProfileAsync = _asyncToGenerator(_regeneratorRuntime().mark(function helperFn30() {
      var tmpVar420;
      var tmpVar421;
      var tmpVar422;
      var tmpVar423;
      var tmpVar424;
      var tmpVar425;
      var tmpVar426;
      return _regeneratorRuntime().wrap(function (tmpVar427) {
        while (true) {
          switch (tmpVar427.prev = tmpVar427.next) {
            case 0:
              var tmpVar428 = {
                Cookie: currentCookie
              };
              tmpVar420 = {
                url: joinUrl(siteBaseUrl, "/home.php?mod=spacecp&ac=credit&showcredit=1"),
                headers: Object.assign(defaultHeaders, tmpVar428)
              };
              tmpVar427.next = 3;
              return request(tmpVar420);
            case 3:
              tmpVar421 = tmpVar427.sent;
              if (!tmpVar421.ok) {
                tmpVar427.next = 16;
                break;
              }
              tmpVar422 = tmpVar421.body;
              if (!tmpVar422.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55|�Ҫ�ȵ�¼���ܼ�)/)) {
                tmpVar427.next = 10;
                break;
              }
              tmpVar427.next = 9;
              return pushNotification(notifyTitle, "", "Cookie失效 ‼️‼️");
            case 9:
              throw new Error("Cookie失效 ‼️‼️");
            case 10:
              tmpVar423 = /<strong[^>]*><a[^>]*href="[^"]*uid=(\d+)"[^>]*>([^<]*)<\/a><\/strong>/i.exec(tmpVar422);
              tmpVar424 = _slicedToArray(tmpVar423, 3);
              tmpVar425 = tmpVar424[1];
              tmpVar426 = tmpVar424[2];
              PathUtils.set(globalThis, "user.id", tmpVar425, "");
              PathUtils.set(globalThis, "user.name", tmpVar426, "");
              Logger.log(`用户信息: ${tmpVar425} - ${tmpVar426}`);
              tmpVar427.next = 17;
              break;
            case 16:
              Logger.error("获取个人信息失败", tmpVar421.body || "");
            case 17:
            case "end":
              return tmpVar427.stop();
          }
        }
      }, helperFn30);
    }));
    return fetchUserProfileAsync.apply(this, arguments);
  }
  function fetchVerifyParams() {
    return fetchVerifyParamsAsync.apply(this, arguments);
  }
  function fetchVerifyParamsAsync() {
    fetchVerifyParamsAsync = _asyncToGenerator(_regeneratorRuntime().mark(function helperFn31() {
      var tmpVar429;
      var tmpVar430;
      var tmpVar431;
      var tmpVar432;
      var tmpVar433;
      var tmpVar434;
      return _regeneratorRuntime().wrap(function (tmpVar435) {
        while (true) {
          switch (tmpVar435.prev = tmpVar435.next) {
            case 0:
              var tmpVar436 = {
                Cookie: currentCookie
              };
              tmpVar429 = {
                url: joinUrl(siteBaseUrl, "/home.php?mod=task&do=apply&id=2&referer=%2F"),
                headers: Object.assign(defaultHeaders, tmpVar436)
              };
              tmpVar435.next = 3;
              return request(tmpVar429);
            case 3:
              tmpVar430 = tmpVar435.sent;
              if (!tmpVar430.ok) {
                tmpVar435.next = 24;
                break;
              }
              currentCookie = mergeCookieStrings(currentCookie, extractSetCookieHeader(tmpVar430));
              Logger.debug(`[混淆接口]更新Cookie: ${currentCookie}`);
              tmpVar431 = /(?:LZ|ZL)\s*=\s*['"]([0-9]{5,6})['"]/.exec(tmpVar430.body)?.[1];
              if (tmpVar431) {
                tmpVar435.next = 10;
                break;
              }
              throw new Error("[LZ] 长度参数获取失败");
            case 10:
              tmpVar432 = /(?:LJ|ZR)\s*=\s*['"]([0-9]{5,6})['"]/.exec(tmpVar430.body)?.[1];
              if (tmpVar432) {
                tmpVar435.next = 13;
                break;
              }
              throw new Error("[LJ] 乘数因子获取失败");
            case 13:
              tmpVar433 = /(?:Zn|LE)\s*=\s*['"]([0-9a-zA-Z\/+.-]+={0,2})['"];/.exec(tmpVar430.body)?.[1];
              if (tmpVar433) {
                tmpVar435.next = 16;
                break;
              }
              throw new Error("[LE] 加密参数获取失败");
            case 16:
              var tmpVar437 = {
                LZ: tmpVar431,
                LJ: tmpVar432,
                LE: tmpVar433
              };
              tmpVar434 = tmpVar437;
              Logger.group("[请求参数]");
              Logger.debug(`[LZ] 长度参数: ${tmpVar434.LZ}`, `[LJ] 乘数因子: ${tmpVar434.LJ}`, `[LE] 加密参数: ${tmpVar434.LE}`);
              Logger.groupEnd();
              globalThis.verifyBody = buildVerifyPayload(tmpVar434);
              Logger.debug(`[verifyBody] 加密结果: ${globalThis.verifyBody}`);
              tmpVar435.next = 25;
              break;
            case 24:
              Logger.error("获取混淆参数失败", tmpVar430.body || "");
            case 25:
            case "end":
              return tmpVar435.stop();
          }
        }
      }, helperFn31);
    }));
    return fetchVerifyParamsAsync.apply(this, arguments);
  }
  function validateVerifyPayload() {
    return validateVerifyPayloadAsync.apply(this, arguments);
  }
  function validateVerifyPayloadAsync() {
    validateVerifyPayloadAsync = _asyncToGenerator(_regeneratorRuntime().mark(function helperFn32() {
      var tmpVar438;
      var tmpVar439;
      return _regeneratorRuntime().wrap(function (tmpVar440) {
        while (true) {
          switch (tmpVar440.prev = tmpVar440.next) {
            case 0:
              var tmpVar441 = {
                Cookie: currentCookie
              };
              tmpVar438 = {
                url: joinUrl(siteBaseUrl, "/waf_zw_verify"),
                headers: Object.assign(defaultHeaders, tmpVar441),
                body: globalThis.verifyBody
              };
              tmpVar440.next = 3;
              return request(tmpVar438);
            case 3:
              tmpVar439 = tmpVar440.sent;
              if (!tmpVar439.ok) {
                tmpVar440.next = 10;
                break;
              }
              currentCookie = mergeCookieStrings(currentCookie, extractSetCookieHeader(tmpVar439));
              Logger.debug("🎉 参数校验接口通过!!");
              return tmpVar440.abrupt("return", true);
            case 10:
              Logger.error("参数校验失败", tmpVar439.body || "");
            case 11:
            case "end":
              return tmpVar440.stop();
          }
        }
      }, helperFn32);
    }));
    return validateVerifyPayloadAsync.apply(this, arguments);
  }
  function executeSignIn() {
    return executeSignInAsync.apply(this, arguments);
  }
  function executeSignInAsync() {
    executeSignInAsync = _asyncToGenerator(_regeneratorRuntime().mark(function helperFn33() {
      var tmpVar442;
      var tmpVar443;
      var tmpVar444;
      var tmpVar445;
      var tmpVar446;
      return _regeneratorRuntime().wrap(function (tmpVar447) {
        while (true) {
          switch (tmpVar447.prev = tmpVar447.next) {
            case 0:
              var tmpVar448 = {
                Cookie: currentCookie
              };
              tmpVar442 = {
                url: joinUrl(siteBaseUrl, "/home.php?mod=task&do=apply&id=2&referer=%2Fforum.php"),
                headers: Object.assign(defaultHeaders, tmpVar448)
              };
              tmpVar447.next = 3;
              return request(tmpVar442);
            case 3:
              tmpVar443 = tmpVar447.sent;
              tmpVar444 = globalThis;
              tmpVar445 = tmpVar443.body;
              tmpVar446 = new Date();
              if (tmpVar445.match(/(ÒÑÍê³É|\u606d\u559c\u60a8|��̳΢�š��ᰮ�ƽ�)/)) {
                tmpVar444.msgBody = tmpVar446.getMonth() + 1 + "月" + tmpVar446.getDate() + "日, 签到成功 🎉";
              } else if (tmpVar445.match(/(ÄúÒÑ|\u4e0b\u671f\u518d\u6765|>��Ǹ������)/)) {
                tmpVar444.msgBody = tmpVar446.getMonth() + 1 + "月" + tmpVar446.getDate() + "日, 已签过 ⚠️";
              } else if (tmpVar445.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55|�Ҫ�ȵ�¼���ܼ�)/)) {
                tmpVar444.msgBody = "签到失败, Cookie失效 ‼️‼️";
              } else if (tmpVar443.statusCode == 403) {
                tmpVar444.msgBody = "服务器暂停签到 ⚠️";
              } else {
                tmpVar444.msgBody = "脚本待更新 ‼️‼️";
              }
            case 8:
            case "end":
              return tmpVar447.stop();
          }
        }
      }, helperFn33);
    }));
    return executeSignInAsync.apply(this, arguments);
  }
  function normalizeCookieFields(tmpVar449) {
    var tmpVar450;
    var tmpVar451;
    if (!tmpVar449) {
      showSystemNotification(notifyTitle, "❌ 获取Cookie失败", "Cookie为空, 不进行初始化");
      throw new Error("Cookie为空, 不进行初始化");
    }
    tmpVar449 = parseCookieToObject(tmpVar449);
    if ((tmpVar450 = tmpVar449) === null || tmpVar450 === undefined || !tmpVar450.htVC_2132_auth) {
      throw new Error("获取Cookie失败, 关键值[auth]缺失");
    }
    if ((tmpVar451 = tmpVar449) === null || tmpVar451 === undefined || !tmpVar451.htVC_2132_saltkey) {
      throw new Error("获取Cookie失败, 关键值[saltkey]缺失");
    }
    return `htVC_2132_auth=${tmpVar449.htVC_2132_auth}; htVC_2132_saltkey=${tmpVar449.htVC_2132_saltkey};`;
  }
  function parseCookieToObject(tmpVar452) {
    return tmpVar452.split(";").reduce(function (tmpVar453, tmpVar454) {
      var tmpVar455 = tmpVar454.split("=").map(function (tmpVar456) {
        return tmpVar456.trim();
      });
      var tmpVar457 = _slicedToArray(tmpVar455, 2);
      var tmpVar458 = tmpVar457[0];
      var tmpVar459 = tmpVar457[1];
      if (tmpVar458 && tmpVar459) {
        tmpVar453[tmpVar458] = tmpVar459;
      }
      return tmpVar453;
    }, {});
  }
  function captureCookieFromRequest() {
    var tmpVar460 = normalizeCookieFields($request.headers.Cookie ?? $request.headers.cookie ?? "");
    if (!tmpVar460 || !tmpVar460.includes("auth=")) {
      showSystemNotification(notifyTitle, "❌ 获取Cookie失败", "请检查Cookie是否正确");
      throw new Error("请检查Cookie是否正确");
    }
    PersistStore.setItem("wuai_cookie", tmpVar460);
    Logger.debug(`Cookie: ${tmpVar460}`);
    showSystemNotification(notifyTitle, "", "写入Cookie成功 🎉");
  }
  function pushNotification(tmpVar461, tmpVar462, tmpVar463, tmpVar464) {
    return pushNotificationAsync.apply(this, arguments);
  }
  function pushNotificationAsync() {
    pushNotificationAsync = _asyncToGenerator(_regeneratorRuntime().mark(function helperFn34(tmpVar465, tmpVar466, tmpVar467, tmpVar468) {
      return _regeneratorRuntime().wrap(function (tmpVar469) {
        while (true) {
          switch (tmpVar469.prev = tmpVar469.next) {
            case 0:
              if (!barkPushKey) {
                tmpVar469.next = 5;
                break;
              }
              tmpVar469.next = 3;
              return pushByBark(tmpVar465, tmpVar466, tmpVar467, tmpVar468);
            case 3:
              tmpVar469.next = 6;
              break;
            case 5:
              showSystemNotification(tmpVar465, tmpVar466, tmpVar467, tmpVar468);
            case 6:
            case "end":
              return tmpVar469.stop();
          }
        }
      }, helperFn34);
    }));
    return pushNotificationAsync.apply(this, arguments);
  }
  function pushByBark(tmpVar470, tmpVar471, tmpVar472) {
    return pushByBarkAsync.apply(this, arguments);
  }
  function pushByBarkAsync() {
    pushByBarkAsync = _asyncToGenerator(_regeneratorRuntime().mark(function helperFn35(tmpVar473, tmpVar474, tmpVar475) {
      var tmpVar476;
      var tmpVar477;
      var tmpVar478;
      var tmpVar479;
      var tmpVar480;
      var tmpVar481;
      var tmpVar482;
      var tmpVar483;
      var tmpVar484;
      var tmpVar485 = arguments;
      return _regeneratorRuntime().wrap(function (tmpVar486) {
        while (true) {
          switch (tmpVar486.prev = tmpVar486.next) {
            case 0:
              var tmpVar487 = {
                "content-type": "application/json; charset=utf-8"
              };
              tmpVar476 = tmpVar485.length > 3 && tmpVar485[3] !== undefined ? tmpVar485[3] : {};
              tmpVar477 = (tmpVar476 == null ? undefined : tmpVar476["open-url"]) || (tmpVar476 == null ? undefined : tmpVar476.openUrl) || (tmpVar476 == null ? undefined : tmpVar476.$open) || (tmpVar476 == null ? undefined : tmpVar476.url) || "";
              tmpVar478 = (tmpVar476 == null ? undefined : tmpVar476["update-pasteboard"]) || (tmpVar476 == null ? undefined : tmpVar476.updatePasteboard) || (tmpVar476 == null ? undefined : tmpVar476.$copy) || (tmpVar476 == null ? undefined : tmpVar476.copy) || "";
              tmpVar479 = (tmpVar476 == null ? undefined : tmpVar476["media-url"]) || (tmpVar476 == null ? undefined : tmpVar476.mediaUrl) || (tmpVar476 == null ? undefined : tmpVar476.$media) || "";
              ["open-url", "openUrl", "$open", "url", "update-pasteboard", "updatePasteboard", "$copy", "copy", "media-url", "mediaUrl", "$media"].forEach(function (tmpVar488) {
                return delete tmpVar476[tmpVar488];
              });
              if (tmpVar474) {
                tmpVar475 = tmpVar474 + "\n" + tmpVar475;
              }
              tmpVar480 = _objectSpread(_objectSpread({}, tmpVar476), {}, {
                url: tmpVar477,
                copy: tmpVar478,
                icon: tmpVar479,
                title: tmpVar473,
                body: tmpVar475
              });
              tmpVar481 = {
                url: "https://api.day.app/" + barkPushKey,
                headers: tmpVar487,
                body: safeJSONStringify(tmpVar480)
              };
              tmpVar482 = 0;
            case 9:
              if (!(tmpVar482 < 3)) {
                tmpVar486.next = 27;
                break;
              }
              Logger.info(`Bark第${tmpVar482 + 1}次推送尝试`);
              tmpVar486.next = 13;
              return request(tmpVar481);
            case 13:
              tmpVar483 = tmpVar486.sent;
              if (!tmpVar483.ok) {
                tmpVar486.next = 23;
                break;
              }
              tmpVar484 = ["=========📣推送成功📣=========", tmpVar473, tmpVar475];
              if (tmpVar477) {
                tmpVar484.push(`跳转链接: ${tmpVar477}`);
              }
              if (tmpVar478) {
                tmpVar484.push(`复制内容: ${tmpVar478}`);
              }
              if (tmpVar479) {
                tmpVar484.push(`媒体链接: ${tmpVar479}`);
              }
              Logger.log.apply(Logger, tmpVar484);
              return tmpVar486.abrupt("break", 27);
            case 23:
              Logger.warn("Bark推送失败", tmpVar483.body || "");
            case 24:
              tmpVar482++;
              tmpVar486.next = 9;
              break;
            case 27:
            case "end":
              return tmpVar486.stop();
          }
        }
      }, helperFn35);
    }));
    return pushByBarkAsync.apply(this, arguments);
  }
  function extractSetCookieHeader(tmpVar489) {
    var tmpVar490;
    var tmpVar491;
    tmpVar491 = tmpVar489.headers;
    var tmpVar492 = Object.fromEntries(Object.entries(tmpVar491).map(function (tmpVar493) {
      var tmpVar494 = _arrayWithHolesOrIterator(tmpVar493, 2);
      var tmpVar495 = tmpVar494[0];
      var tmpVar496 = tmpVar494[1];
      return [tmpVar495.toLowerCase(), tmpVar496];
    }));
    var tmpVar497 = tmpVar492["set-cookie"];
    if (Array.isArray(tmpVar497)) {
      return tmpVar497.map(function (tmpVar498) {
        return tmpVar498.split(";")[0];
      }).join(";");
    } else {
      return (tmpVar497 == null || (tmpVar490 = tmpVar497.split(",")) === null || tmpVar490 === undefined || (tmpVar490 = tmpVar490.map(function (tmpVar499) {
        return tmpVar499.split(";")[0];
      })) === null || tmpVar490 === undefined ? undefined : tmpVar490.join(";")) || tmpVar497;
    }
  }
  function mergeCookieStrings(tmpVar500, tmpVar501) {
    var tmpVar502 = parseCookieToObject(tmpVar500);
    var tmpVar503 = parseCookieToObject(tmpVar501);
    return Object.entries(Object.assign(tmpVar502, tmpVar503)).map(function (tmpVar504) {
      var tmpVar505 = _slicedToArray(tmpVar504, 2);
      var tmpVar506 = tmpVar505[0];
      var tmpVar507 = tmpVar505[1];
      return `${tmpVar506}=${tmpVar507}`;
    }).join("; ");
  }
  Logger.debug(`Cookie: ${currentCookie}`);
  _asyncToGenerator(_regeneratorRuntime().mark(function helperFn36() {
    return _regeneratorRuntime().wrap(function (tmpVar508) {
      while (true) {
        switch (tmpVar508.prev = tmpVar508.next) {
          case 0:
            if (globalThis === null || globalThis === undefined || !globalThis.$request) {
              tmpVar508.next = 4;
              break;
            }
            captureCookieFromRequest();
            tmpVar508.next = 6;
            break;
          case 4:
            tmpVar508.next = 6;
            return runMainTask();
          case 6:
          case "end":
            return tmpVar508.stop();
        }
      }
    }, helperFn36);
  }))().catch(function (tmpVar509) {
    return Logger.error(tmpVar509);
  }).finally(function (tmpVar510 = {}) {
    switch (runtimeEnv) {
      case "Surge":
        if (tmpVar510.policy) {
          PathUtils.set(tmpVar510, "headers.X-Surge-Policy", tmpVar510.policy);
        }
        Logger.log("🚩 执行结束!", "🕛 " + (new Date().getTime() / 1000 - $script.startTime) + " 秒");
        $done(tmpVar510);
        break;
      case "Loon":
        if (tmpVar510.policy) {
          tmpVar510.node = tmpVar510.policy;
        }
        Logger.log("🚩 执行结束!", "🕛 " + (new Date() - $script.startTime) / 1000 + " 秒");
        $done(tmpVar510);
        break;
      case "Stash":
        if (tmpVar510.policy) {
          PathUtils.set(tmpVar510, "headers.X-Stash-Selected-Proxy", encodeURI(tmpVar510.policy));
        }
        Logger.log("🚩 执行结束!", "🕛 " + (new Date() - $script.startTime) / 1000 + " 秒");
        $done(tmpVar510);
        break;
      case "Egern":
      case "Shadowrocket":
      default:
        Logger.log("🚩 执行结束!");
        $done(tmpVar510);
        break;
      case "Quantumult X":
        if (tmpVar510.policy) {
          PathUtils.set(tmpVar510, "opts.policy", tmpVar510.policy);
        }
        tmpVar510["auto-redirect"] = undefined;
        tmpVar510["auto-cookie"] = undefined;
        tmpVar510["binary-mode"] = undefined;
        tmpVar510.charset = undefined;
        tmpVar510.host = undefined;
        tmpVar510.insecure = undefined;
        tmpVar510.method = undefined;
        tmpVar510.ok = undefined;
        tmpVar510.opt = undefined;
        tmpVar510.path = undefined;
        tmpVar510.policy = undefined;
        tmpVar510["policy-descriptor"] = undefined;
        tmpVar510.scheme = undefined;
        tmpVar510.sessionIndex = undefined;
        tmpVar510.statusCode = undefined;
        tmpVar510.timeout = undefined;
        switch (typeof tmpVar510.status) {
          case "number":
            tmpVar510.status = HTTP_STATUS_LINES[tmpVar510.status];
            break;
          case "string":
          case "undefined":
            break;
          default:
            tmpVar510.status = undefined;
        }
        if (tmpVar510.body instanceof ArrayBuffer) {
          tmpVar510.bodyBytes = tmpVar510.body;
          tmpVar510.body = undefined;
        } else if (ArrayBuffer.isView(tmpVar510.body)) {
          tmpVar510.bodyBytes = tmpVar510.body.buffer.slice(tmpVar510.body.byteOffset, tmpVar510.body.byteLength + tmpVar510.body.byteOffset);
          tmpVar510.body = undefined;
        } else if (tmpVar510.body) {
          tmpVar510.bodyBytes = undefined;
        }
        Logger.log("🚩 执行结束!");
        $done(tmpVar510);
        break;
      case "Node.js":
        Logger.log("🚩 执行结束!");
        process.exit(1);
    }
  });
})();