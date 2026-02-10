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

  const _0x21940b = (() => {
    const _0x33ffc6 = Object.keys(globalThis);
    switch (true) {
      case _0x33ffc6.includes("$task"):
        return "Quantumult X";
      case _0x33ffc6.includes("$loon"):
        return "Loon";
      case _0x33ffc6.includes("$rocket"):
        return "Shadowrocket";
      case typeof module != "undefined":
        return "Node.js";
      case _0x33ffc6.includes("Egern"):
        return "Egern";
      case _0x33ffc6.includes("$environment"):
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
  class _0x56c73a {
    static #e = new Map([]);
    static #t = [];
    static #r = new Map([]);
    static clear = () => {};
    static count = (_0x27f052 = "default") => {
      switch (_0x56c73a.#e.has(_0x27f052)) {
        case true:
          _0x56c73a.#e.set(_0x27f052, _0x56c73a.#e.get(_0x27f052) + 1);
          break;
        case false:
          _0x56c73a.#e.set(_0x27f052, 0);
      }
      _0x56c73a.log(_0x27f052 + ": " + _0x56c73a.#e.get(_0x27f052));
    };
    static countReset = (_0x47db29 = "default") => {
      switch (_0x56c73a.#e.has(_0x47db29)) {
        case true:
          _0x56c73a.#e.set(_0x47db29, 0);
          _0x56c73a.log(_0x47db29 + ": " + _0x56c73a.#e.get(_0x47db29));
          break;
        case false:
          _0x56c73a.warn("Counter \"" + _0x47db29 + "\" doesn’t exist");
      }
    };
    static debug = (..._0x38b7c8) => {
      if (!(_0x56c73a.#o < 4)) {
        _0x38b7c8 = _0x38b7c8.map(_0x2e9e8c => "🅱️ " + _0x2e9e8c);
        _0x56c73a.log(..._0x38b7c8);
      }
    };
    static error(..._0x4d64c6) {
      if (!(_0x56c73a.#o < 1)) {
        switch (_0x21940b) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Egern":
          case "Shadowrocket":
          case "Quantumult X":
          default:
            _0x4d64c6 = _0x4d64c6.map(_0x15a3fd => "❌ " + _0x15a3fd);
            break;
          case "Node.js":
            _0x4d64c6 = _0x4d64c6.map(_0x2a2ad1 => "❌ " + _0x2a2ad1.stack);
        }
        _0x56c73a.log(..._0x4d64c6);
      }
    }
    static exception = (..._0x57cf41) => _0x56c73a.error(..._0x57cf41);
    static group = _0x3d7687 => _0x56c73a.#t.unshift(_0x3d7687);
    static groupEnd = () => _0x56c73a.#t.shift();
    static info(..._0x512c61) {
      if (!(_0x56c73a.#o < 3)) {
        _0x512c61 = _0x512c61.map(_0x1d2228 => "ℹ️ " + _0x1d2228);
        _0x56c73a.log(..._0x512c61);
      }
    }
    static #o = 2;
    static get logLevel() {
      switch (_0x56c73a.#o) {
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
    static set logLevel(_0x3a9596) {
      switch (typeof _0x3a9596) {
        case "string":
          _0x3a9596 = _0x3a9596.toLowerCase();
          break;
        case "number":
          break;
        default:
          _0x3a9596 = "warn";
      }
      switch (_0x3a9596) {
        case 0:
        case "off":
          _0x56c73a.#o = 0;
          break;
        case 1:
        case "error":
          _0x56c73a.#o = 1;
          break;
        case 2:
        case "warn":
        case "warning":
        default:
          _0x56c73a.#o = 2;
          break;
        case 3:
        case "info":
          _0x56c73a.#o = 3;
          break;
        case 4:
        case "debug":
          _0x56c73a.#o = 4;
          break;
        case 5:
        case "all":
          _0x56c73a.#o = 5;
      }
    }
    static log = (..._0xe5a2a) => {
      if (_0x56c73a.#o !== 0) {
        _0xe5a2a = _0xe5a2a.map(_0x1a2199 => {
          switch (typeof _0x1a2199) {
            case "object":
              _0x1a2199 = JSON.stringify(_0x1a2199);
              break;
            case "bigint":
            case "number":
            case "boolean":
            case "string":
              _0x1a2199 = _0x1a2199.toString();
          }
          return _0x1a2199;
        });
        _0x56c73a.#t.forEach(_0x3c3da3 => {
          _0xe5a2a = _0xe5a2a.map(_0x1120fe => "  " + _0x1120fe);
          _0xe5a2a.unshift("▼ " + _0x3c3da3 + ":");
        });
        _0xe5a2a = ["", ..._0xe5a2a];
        console.log(_0xe5a2a.join("\n"));
      }
    };
    static time = (_0x4a280f = "default") => _0x56c73a.#r.set(_0x4a280f, Date.now());
    static timeEnd = (_0x53fb5f = "default") => _0x56c73a.#r.delete(_0x53fb5f);
    static timeLog = (_0x1da69e = "default") => {
      const _0x4295ed = _0x56c73a.#r.get(_0x1da69e);
      if (_0x4295ed) {
        _0x56c73a.log(_0x1da69e + ": " + (Date.now() - _0x4295ed) + "ms");
      } else {
        _0x56c73a.warn("Timer \"" + _0x1da69e + "\" doesn’t exist");
      }
    };
    static warn(..._0xf1c0fa) {
      if (!(_0x56c73a.#o < 2)) {
        _0xf1c0fa = _0xf1c0fa.map(_0x52db1b => "⚠️ " + _0x52db1b);
        _0x56c73a.log(..._0xf1c0fa);
      }
    }
  }
  class _0x2c098a {
    static get(_0x1a3d5b = {}, _0x5979f7 = "", _0x47497c = undefined) {
      if (!Array.isArray(_0x5979f7)) {
        _0x5979f7 = _0x2c098a.toPath(_0x5979f7);
      }
      const _0x57e98d = _0x5979f7.reduce((_0x579e52, _0x5f1f4e) => Object(_0x579e52)[_0x5f1f4e], _0x1a3d5b);
      if (_0x57e98d === undefined) {
        return _0x47497c;
      } else {
        return _0x57e98d;
      }
    }
    static set(_0x5f0900, _0x58dd1a, _0x196b72) {
      if (!Array.isArray(_0x58dd1a)) {
        _0x58dd1a = _0x2c098a.toPath(_0x58dd1a);
      }
      _0x58dd1a.slice(0, -1).reduce((_0x56a884, _0xe1363c, _0x1ff379) => Object(_0x56a884[_0xe1363c]) === _0x56a884[_0xe1363c] ? _0x56a884[_0xe1363c] : _0x56a884[_0xe1363c] = /^\d+$/.test(_0x58dd1a[_0x1ff379 + 1]) ? [] : {}, _0x5f0900)[_0x58dd1a[_0x58dd1a.length - 1]] = _0x196b72;
      return _0x5f0900;
    }
    static unset(_0xde9de2 = {}, _0x1bbc4a = "") {
      if (!Array.isArray(_0x1bbc4a)) {
        _0x1bbc4a = _0x2c098a.toPath(_0x1bbc4a);
      }
      const _0x1137b6 = _0x1bbc4a.reduce((_0x2110d2, _0x1e0229, _0x9f10d0) => _0x9f10d0 === _0x1bbc4a.length - 1 ? (delete _0x2110d2[_0x1e0229], true) : Object(_0x2110d2)[_0x1e0229], _0xde9de2);
      return _0x1137b6;
    }
    static toPath(_0x183bea) {
      return _0x183bea.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
    }
    static escape(_0xdd12f8) {
      const _0x3bdf23 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      };
      return _0xdd12f8.replace(/[&<>"']/g, _0x4a4ade => _0x3bdf23[_0x4a4ade]);
    }
    static unescape(_0x4baa22) {
      const _0x1764bf = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": "\"",
        "&#39;": "'"
      };
      return _0x4baa22.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, _0x2aba47 => _0x1764bf[_0x2aba47]);
    }
  }
  const _0x4a834b = {
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
  function _0x136460(_0x4484af = "ℹ️ " + _0x21940b + " 通知", _0x14eafe = "", _0x91d7d6 = "", _0x2476f8 = {}) {
    switch (_0x21940b) {
      case "Surge":
      case "Loon":
      case "Stash":
      case "Egern":
      case "Shadowrocket":
      default:
        $notification.post(_0x4484af, _0x14eafe, _0x91d7d6, _0x3dc115(_0x2476f8));
        break;
      case "Quantumult X":
        $notify(_0x4484af, _0x14eafe, _0x91d7d6, _0x3dc115(_0x2476f8));
      case "Node.js":
    }
    _0x56c73a.log("==============📣系统通知📣==============", _0x4484af, _0x14eafe, _0x91d7d6, JSON.stringify(_0x3dc115(_0x2476f8), null, 2));
  }
  const _0x3dc115 = _0x25b262 => {
    const _0xa7c8af = {};
    switch (typeof _0x25b262) {
      case undefined:
        break;
      case "string":
      case "number":
      case "boolean":
        switch (_0x21940b) {
          case "Surge":
          case "Stash":
          case "Egern":
          default:
            _0xa7c8af.url = _0x25b262;
            break;
          case "Loon":
          case "Shadowrocket":
            _0xa7c8af.openUrl = _0x25b262;
            break;
          case "Quantumult X":
            _0xa7c8af["open-url"] = _0x25b262;
          case "Node.js":
        }
        break;
      case "object":
        {
          const _0x259f5b = _0x25b262.open || _0x25b262["open-url"] || _0x25b262.url || _0x25b262.openUrl;
          const _0x121753 = _0x25b262.copy || _0x25b262["update-pasteboard"] || _0x25b262.updatePasteboard;
          const _0x597f01 = _0x25b262.media || _0x25b262["media-url"] || _0x25b262.mediaUrl;
          switch (_0x21940b) {
            case "Surge":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
            default:
              if (_0x259f5b) {
                _0xa7c8af.action = "open-url";
                _0xa7c8af.url = _0x259f5b;
              }
              if (_0x121753) {
                _0xa7c8af.action = "clipboard";
                _0xa7c8af.text = _0x121753;
              }
              if (_0x597f01) {
                switch (true) {
                  case _0x597f01.startsWith("http"):
                    _0xa7c8af["media-url"] = _0x597f01;
                    break;
                  case _0x597f01.startsWith("data:"):
                    {
                      const _0xdb6c2d = /^data:(?<MIME>\w+\/\w+);base64,(?<Base64>.+)/;
                      const {
                        MIME: _0x30830b,
                        Base64: _0x4611f0
                      } = _0x597f01.match(_0xdb6c2d).groups;
                      _0xa7c8af["media-base64"] = _0x4611f0;
                      _0xa7c8af["media-base64-mime"] = _0x25b262.mime || _0x30830b;
                      break;
                    }
                  default:
                    _0xa7c8af["media-base64"] = _0x597f01;
                    switch (true) {
                      case _0x597f01.startsWith("CiVQREYt"):
                      case _0x597f01.startsWith("JVBERi0"):
                        _0xa7c8af["media-base64-mime"] = "application/pdf";
                        break;
                      case _0x597f01.startsWith("R0lGODdh"):
                      case _0x597f01.startsWith("R0lGODlh"):
                        _0xa7c8af["media-base64-mime"] = "image/gif";
                        break;
                      case _0x597f01.startsWith("iVBORw0KGgo"):
                        _0xa7c8af["media-base64-mime"] = "image/png";
                        break;
                      case _0x597f01.startsWith("/9j/"):
                        _0xa7c8af["media-base64-mime"] = "image/jpg";
                        break;
                      case _0x597f01.startsWith("Qk02U"):
                        _0xa7c8af["media-base64-mime"] = "image/bmp";
                    }
                }
              }
              if (_0x25b262["auto-dismiss"]) {
                _0xa7c8af["auto-dismiss"] = _0x25b262["auto-dismiss"];
              }
              if (_0x25b262.sound) {
                _0xa7c8af.sound = _0x25b262.sound;
              }
              break;
            case "Loon":
              if (_0x259f5b) {
                _0xa7c8af.openUrl = _0x259f5b;
              }
              if (_0x597f01?.startsWith("http")) {
                _0xa7c8af.mediaUrl = _0x597f01;
              }
              break;
            case "Quantumult X":
              if (_0x259f5b) {
                _0xa7c8af["open-url"] = _0x259f5b;
              }
              if (_0x597f01?.startsWith("http")) {
                _0xa7c8af["media-url"] = _0x597f01;
              }
              if (_0x121753) {
                _0xa7c8af["update-pasteboard"] = _0x121753;
              }
            case "Node.js":
          }
          break;
        }
      default:
        _0x56c73a.error("不支持的通知参数类型: " + typeof _0x25b262, "");
    }
    return _0xa7c8af;
  };
  async function _0x517ee6(_0x47b8eb, _0x30966d) {
    switch (_0x47b8eb.constructor) {
      case Object:
        _0x47b8eb = {
          ..._0x30966d,
          ..._0x47b8eb
        };
        break;
      case String:
        _0x47b8eb = {
          ..._0x30966d,
          url: _0x47b8eb
        };
    }
    if (!_0x47b8eb.method) {
      _0x47b8eb.method = "GET";
      if (_0x47b8eb.body ?? _0x47b8eb.bodyBytes) {
        _0x47b8eb.method = "POST";
      }
    }
    delete _0x47b8eb.headers?.Host;
    delete _0x47b8eb.headers?.[":authority"];
    delete _0x47b8eb.headers?.["Content-Length"];
    delete _0x47b8eb.headers?.["content-length"];
    const _0x2652d9 = _0x47b8eb.method.toLocaleLowerCase();
    switch (_0x21940b) {
      case "Loon":
      case "Surge":
      case "Stash":
      case "Egern":
      case "Shadowrocket":
      default:
        if (_0x47b8eb.timeout) {
          _0x47b8eb.timeout = Number.parseInt(_0x47b8eb.timeout, 10);
          switch (_0x21940b) {
            case "Loon":
            case "Shadowrocket":
            case "Stash":
            case "Egern":
            default:
              _0x47b8eb.timeout = _0x47b8eb.timeout / 1000;
            case "Surge":
          }
        }
        if (_0x47b8eb.policy) {
          switch (_0x21940b) {
            case "Loon":
              _0x47b8eb.node = _0x47b8eb.policy;
              break;
            case "Stash":
              _0x2c098a.set(_0x47b8eb, "headers.X-Stash-Selected-Proxy", encodeURI(_0x47b8eb.policy));
              break;
            case "Shadowrocket":
              _0x2c098a.set(_0x47b8eb, "headers.X-Surge-Proxy", _0x47b8eb.policy);
          }
        }
        if (typeof _0x47b8eb.redirection == "boolean") {
          _0x47b8eb["auto-redirect"] = _0x47b8eb.redirection;
        }
        if (_0x47b8eb.bodyBytes && !_0x47b8eb.body) {
          _0x47b8eb.body = _0x47b8eb.bodyBytes;
          _0x47b8eb.bodyBytes = undefined;
        }
        switch ((_0x47b8eb.headers?.Accept || _0x47b8eb.headers?.accept)?.split(";")?.[0]) {
          case "application/protobuf":
          case "application/x-protobuf":
          case "application/vnd.google.protobuf":
          case "application/vnd.apple.flatbuffer":
          case "application/grpc":
          case "application/grpc+proto":
          case "application/octet-stream":
            _0x47b8eb["binary-mode"] = true;
        }
        return await new Promise((_0x1bb8c4, _0x523d7f) => {
          $httpClient[_0x2652d9](_0x47b8eb, (_0x182b8f, _0x2ae300, _0x5cbf59) => {
            if (_0x182b8f) {
              _0x523d7f(_0x182b8f);
            } else {
              _0x2ae300.ok = /^2\d\d$/.test(_0x2ae300.status);
              _0x2ae300.statusCode = _0x2ae300.status;
              if (_0x5cbf59) {
                _0x2ae300.body = _0x5cbf59;
                if (_0x47b8eb["binary-mode"] == 1) {
                  _0x2ae300.bodyBytes = _0x5cbf59;
                }
              }
              _0x1bb8c4(_0x2ae300);
            }
          });
        });
      case "Quantumult X":
        if (_0x47b8eb.policy) {
          _0x2c098a.set(_0x47b8eb, "opts.policy", _0x47b8eb.policy);
        }
        if (typeof _0x47b8eb["auto-redirect"] == "boolean") {
          _0x2c098a.set(_0x47b8eb, "opts.redirection", _0x47b8eb["auto-redirect"]);
        }
        if (_0x47b8eb.body instanceof ArrayBuffer) {
          _0x47b8eb.bodyBytes = _0x47b8eb.body;
          _0x47b8eb.body = undefined;
        } else if (ArrayBuffer.isView(_0x47b8eb.body)) {
          _0x47b8eb.bodyBytes = _0x47b8eb.body.buffer.slice(_0x47b8eb.body.byteOffset, _0x47b8eb.body.byteLength + _0x47b8eb.body.byteOffset);
          _0x47b8eb.body = undefined;
        } else if (_0x47b8eb.body) {
          _0x47b8eb.bodyBytes = undefined;
        }
        return await $task.fetch(_0x47b8eb).then(_0x7e4042 => {
          _0x7e4042.ok = /^2\d\d$/.test(_0x7e4042.statusCode);
          _0x7e4042.status = _0x7e4042.statusCode;
          switch ((_0x7e4042.headers?.["Content-Type"] ?? _0x7e4042.headers?.["content-type"])?.split(";")?.[0]) {
            case "application/protobuf":
            case "application/x-protobuf":
            case "application/vnd.google.protobuf":
            case "application/vnd.apple.flatbuffer":
            case "application/grpc":
            case "application/grpc+proto":
            case "application/octet-stream":
              _0x7e4042.body = _0x7e4042.bodyBytes;
          }
          _0x7e4042.bodyBytes = undefined;
          return _0x7e4042;
        }, _0x55294a => Promise.reject(_0x55294a.error));
      case "Node.js":
        {
          const _0xe6cc79 = require("iconv-lite");
          const _0x578fbf = globalThis.got ? globalThis.got : require("got");
          const _0x2fc0f2 = globalThis.cktough ? globalThis.cktough : require("tough-cookie");
          const _0x4ab4e9 = globalThis.ckjar ? globalThis.ckjar : new _0x2fc0f2.CookieJar();
          if (_0x47b8eb) {
            _0x47b8eb.headers = _0x47b8eb.headers ? _0x47b8eb.headers : {};
            if (_0x47b8eb.headers.Cookie === undefined && _0x47b8eb.cookieJar === undefined) {
              _0x47b8eb.cookieJar = _0x4ab4e9;
            }
          }
          const {
            url: _0x506428,
            ..._0x700560
          } = _0x47b8eb;
          return await _0x578fbf[_0x2652d9](_0x506428, _0x700560).on("redirect", (_0x177bba, _0x35f741) => {
            try {
              if (_0x177bba.headers["set-cookie"]) {
                const _0x3cb8b8 = _0x177bba.headers["set-cookie"].map(_0x2fc0f2.Cookie.parse).toString();
                if (_0x3cb8b8) {
                  _0x4ab4e9.setCookieSync(_0x3cb8b8, null);
                }
                _0x35f741.cookieJar = _0x4ab4e9;
              }
            } catch (_0x312dc1) {
              _0x56c73a.error(_0x312dc1);
            }
          }).then(_0x126736 => {
            _0x126736.statusCode = _0x126736.status;
            _0x126736.body = _0xe6cc79.decode(_0x126736.rawBody, "utf-8");
            _0x126736.bodyBytes = _0x126736.rawBody;
            _0x126736.ok = /^2\d\d$/.test(_0x126736.statusCode) || !_0x126736.statusCode && _0x126736.statusMessage === "OK";
            return _0x126736;
          }, _0x11e36b => Promise.reject(_0x11e36b.message));
        }
    }
  }
  class _0x1a6861 {
    static data = null;
    static dataFile = "box.dat";
    static #a = /^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;
    static getItem(_0x2bbd3d, _0x9d876c = null) {
      let _0x50c0c6 = _0x9d876c;
      switch (_0x2bbd3d.startsWith("@")) {
        case true:
          {
            const {
              key: _0x530ed8,
              path: _0x47b46c
            } = _0x2bbd3d.match(_0x1a6861.#a)?.groups;
            _0x2bbd3d = _0x530ed8;
            let _0x21cfde = _0x1a6861.getItem(_0x2bbd3d, {});
            if (typeof _0x21cfde != "object") {
              _0x21cfde = {};
            }
            _0x50c0c6 = _0x2c098a.get(_0x21cfde, _0x47b46c);
            try {
              _0x50c0c6 = JSON.parse(_0x50c0c6);
            } catch (_0x23266c) {}
            break;
          }
        default:
          switch (_0x21940b) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
              _0x50c0c6 = $persistentStore.read(_0x2bbd3d);
              break;
            case "Quantumult X":
              _0x50c0c6 = $prefs.valueForKey(_0x2bbd3d);
              break;
            case "Node.js":
              _0x1a6861.data = _0x1a6861.#n(_0x1a6861.dataFile);
              _0x50c0c6 = _0x1a6861.data?.[_0x2bbd3d];
              break;
            default:
              _0x50c0c6 = _0x1a6861.data?.[_0x2bbd3d] || null;
          }
          try {
            _0x50c0c6 = JSON.parse(_0x50c0c6);
          } catch (_0x50a74d) {}
      }
      return _0x50c0c6 ?? _0x9d876c;
    }
    static setItem(_0x102f01 = new String(), _0x7ebceb = new String()) {
      let _0x34a032 = false;
      if (typeof _0x7ebceb == "object") {
        _0x7ebceb = JSON.stringify(_0x7ebceb);
      } else {
        _0x7ebceb = String(_0x7ebceb);
      }
      switch (_0x102f01.startsWith("@")) {
        case true:
          {
            const {
              key: _0x233b02,
              path: _0x35c362
            } = _0x102f01.match(_0x1a6861.#a)?.groups;
            _0x102f01 = _0x233b02;
            let _0x3ecc79 = _0x1a6861.getItem(_0x102f01, {});
            if (typeof _0x3ecc79 != "object") {
              _0x3ecc79 = {};
            }
            _0x2c098a.set(_0x3ecc79, _0x35c362, _0x7ebceb);
            _0x34a032 = _0x1a6861.setItem(_0x102f01, _0x3ecc79);
            break;
          }
        default:
          switch (_0x21940b) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
              _0x34a032 = $persistentStore.write(_0x7ebceb, _0x102f01);
              break;
            case "Quantumult X":
              _0x34a032 = $prefs.setValueForKey(_0x7ebceb, _0x102f01);
              break;
            case "Node.js":
              _0x1a6861.data = _0x1a6861.#n(_0x1a6861.dataFile);
              _0x1a6861.data[_0x102f01] = _0x7ebceb;
              _0x1a6861.#i(_0x1a6861.dataFile);
              _0x34a032 = true;
              break;
            default:
              _0x34a032 = _0x1a6861.data?.[_0x102f01] || null;
          }
      }
      return _0x34a032;
    }
    static removeItem(_0x26437c) {
      let _0x1a8a2b = false;
      switch (_0x26437c.startsWith("@")) {
        case true:
          {
            const {
              key: _0x3bb08f,
              path: _0x56963d
            } = _0x26437c.match(_0x1a6861.#a)?.groups;
            _0x26437c = _0x3bb08f;
            let _0xc4ba21 = _0x1a6861.getItem(_0x26437c);
            if (typeof _0xc4ba21 != "object") {
              _0xc4ba21 = {};
            }
            keyValue = _0x2c098a.unset(_0xc4ba21, _0x56963d);
            _0x1a8a2b = _0x1a6861.setItem(_0x26437c, _0xc4ba21);
            break;
          }
        default:
          switch (_0x21940b) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Egern":
            case "Shadowrocket":
            case "Node.js":
            default:
              _0x1a8a2b = false;
              break;
            case "Quantumult X":
              _0x1a8a2b = $prefs.removeValueForKey(_0x26437c);
          }
      }
      return _0x1a8a2b;
    }
    static clear() {
      let _0xfd2a0d = false;
      switch (_0x21940b) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Egern":
        case "Shadowrocket":
        case "Node.js":
        default:
          _0xfd2a0d = false;
          break;
        case "Quantumult X":
          _0xfd2a0d = $prefs.removeAllValues();
      }
      return _0xfd2a0d;
    }
    static #n = _0x424eb0 => {
      if (_0x21940b !== "Node.js") {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("node:fs");
        this.path = this.path ? this.path : require("node:path");
        const _0x3f5a6f = this.path.resolve(_0x424eb0);
        const _0x551a61 = this.path.resolve(process.cwd(), _0x424eb0);
        const _0x1ed302 = this.fs.existsSync(_0x3f5a6f);
        const _0x54bec2 = !_0x1ed302 && this.fs.existsSync(_0x551a61);
        if (!_0x1ed302 && !_0x54bec2) {
          return {};
        }
        {
          const _0x540160 = _0x1ed302 ? _0x3f5a6f : _0x551a61;
          try {
            return JSON.parse(this.fs.readFileSync(_0x540160));
          } catch (_0x3f9887) {
            return {};
          }
        }
      }
    };
    static #i = (_0x191ebf = this.dataFile) => {
      if (_0x21940b === "Node.js") {
        this.fs = this.fs ? this.fs : require("node:fs");
        this.path = this.path ? this.path : require("node:path");
        const _0x5634b6 = this.path.resolve(_0x191ebf);
        const _0x19195e = this.path.resolve(process.cwd(), _0x191ebf);
        const _0x2bbaca = this.fs.existsSync(_0x5634b6);
        const _0x2a3158 = !_0x2bbaca && this.fs.existsSync(_0x19195e);
        const _0x29126b = JSON.stringify(this.data);
        if (_0x2bbaca) {
          this.fs.writeFileSync(_0x5634b6, _0x29126b);
        } else if (_0x2a3158) {
          this.fs.writeFileSync(_0x19195e, _0x29126b);
        } else {
          this.fs.writeFileSync(_0x5634b6, _0x29126b);
        }
      }
    };
  }
  function _0x3c056e(_0x7af867, _0x3c2229) {
    return function (_0x34acbb) {
      if (Array.isArray(_0x34acbb)) {
        return _0x34acbb;
      }
    }(_0x7af867) || function (_0x589a88, _0x36d90b) {
      var _0x1d6e44 = _0x589a88 == null ? null : typeof Symbol != "undefined" && _0x589a88[Symbol.iterator] || _0x589a88["@@iterator"];
      if (_0x1d6e44 != null) {
        var _0x2dd3ef;
        var _0x729f86;
        var _0xdf87b1;
        var _0x5975cf;
        var _0xb14d5c = [];
        var _0x26aa21 = true;
        var _0x268122 = false;
        try {
          _0xdf87b1 = (_0x1d6e44 = _0x1d6e44.call(_0x589a88)).next;
          if (_0x36d90b === 0) {
            if (Object(_0x1d6e44) !== _0x1d6e44) {
              return;
            }
            _0x26aa21 = false;
          } else {
            for (; !(_0x26aa21 = (_0x2dd3ef = _0xdf87b1.call(_0x1d6e44)).done) && (_0xb14d5c.push(_0x2dd3ef.value), _0xb14d5c.length !== _0x36d90b); _0x26aa21 = true);
          }
        } catch (_0x33af20) {
          _0x268122 = true;
          _0x729f86 = _0x33af20;
        } finally {
          try {
            if (!_0x26aa21 && _0x1d6e44.return != null && (_0x5975cf = _0x1d6e44.return(), Object(_0x5975cf) !== _0x5975cf)) {
              return;
            }
          } finally {
            if (_0x268122) {
              throw _0x729f86;
            }
          }
        }
        return _0xb14d5c;
      }
    }(_0x7af867, _0x3c2229) || function (_0x1db1fc, _0x1a0955) {
      if (_0x1db1fc) {
        if (typeof _0x1db1fc == "string") {
          return _0x5bed21(_0x1db1fc, _0x1a0955);
        }
        var _0x3a4e5e = {}.toString.call(_0x1db1fc).slice(8, -1);
        if (_0x3a4e5e === "Object" && _0x1db1fc.constructor) {
          _0x3a4e5e = _0x1db1fc.constructor.name;
        }
        if (_0x3a4e5e === "Map" || _0x3a4e5e === "Set") {
          return Array.from(_0x1db1fc);
        } else if (_0x3a4e5e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x3a4e5e)) {
          return _0x5bed21(_0x1db1fc, _0x1a0955);
        } else {
          return undefined;
        }
      }
    }(_0x7af867, _0x3c2229) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _0x5bed21(_0x159ac4, _0x14f5d2) {
    if (_0x14f5d2 == null || _0x14f5d2 > _0x159ac4.length) {
      _0x14f5d2 = _0x159ac4.length;
    }
    for (var _0x126543 = 0, _0x4eba24 = Array(_0x14f5d2); _0x126543 < _0x14f5d2; _0x126543++) {
      _0x4eba24[_0x126543] = _0x159ac4[_0x126543];
    }
    return _0x4eba24;
  }
  function _0x8489b5(_0x417119) {
    if (typeof _0x417119 == "string") {
      return _0x417119;
    }
    try {
      for (var _0xdda91a = arguments.length, _0x2dcd06 = new Array(_0xdda91a > 1 ? _0xdda91a - 1 : 0), _0x3e479b = 1; _0x3e479b < _0xdda91a; _0x3e479b++) {
        _0x2dcd06[_0x3e479b - 1] = arguments[_0x3e479b];
      }
      return JSON.stringify.apply(JSON, [_0x417119].concat(_0x2dcd06));
    } catch (_0x3494ee) {
      return _0x417119;
    }
  }
  function _0x2e4911(_0x123123, _0x49cde6) {
    if (_0x49cde6) {
      return _0x123123.replace(/\/+$/, "") + "/" + _0x49cde6.replace(/^\/+/, "");
    } else {
      return _0x123123;
    }
  }
  function _0x5b1b22(_0x2131cb) {
    _0x5b1b22 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x45c848) {
      return typeof _0x45c848;
    } : function (_0x38f3b6) {
      if (_0x38f3b6 && typeof Symbol == "function" && _0x38f3b6.constructor === Symbol && _0x38f3b6 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x38f3b6;
      }
    };
    return _0x5b1b22(_0x2131cb);
  }
  function _0x170a8d(_0x46b7e6) {
    var _0x4aa59b = _0x46b7e6.LZ;
    var _0x5ed2be = _0x46b7e6.LJ;
    var _0x45f11b = _0x46b7e6.LE;
    if (_0x4aa59b && _0x5ed2be && _0x45f11b) {
      var _0x19b696 = {
        name: "PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var _0x480b9d = {
        name: "Chrome PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var _0x32eb8e = {
        name: "Chromium PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var _0x11a25a = {
        name: "Microsoft Edge PDF Viewer",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var _0x1bf04e = {
        name: "WebKit built-in PDF",
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        mimetypes: [Array]
      };
      var _0x358c78 = {
        details: [_0x19b696, _0x480b9d, _0x32eb8e, _0x11a25a, _0x1bf04e],
        names: ["Chrome PDF Viewer", "Chromium PDF Viewer", "Microsoft Edge PDF Viewer", "PDF Viewer", "WebKit built-in PDF"],
        fp: "9772d5556d57fcc8177f76029bfd92ef"
      };
      var _0x50e9f6 = {
        key: "plugins",
        value: _0x358c78
      };
      var _0x5c231a = {
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
      var _0x45a0c7 = {
        key: "screenObject",
        value: _0x5c231a
      };
      var _0xdfe6c7 = {
        locale: "zh-CN",
        calendar: "gregory",
        numberingSystem: "latn",
        timeZone: "Asia/Shanghai",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezoneOffset: -480
      };
      var _0x6c2d8 = {
        key: "intlObject",
        value: _0xdfe6c7
      };
      function _0xe140a9(_0x3f2173, _0x400561) {
        _0x3f2173 = [_0x3f2173[0] >>> 16, _0x3f2173[0] & 65535, _0x3f2173[1] >>> 16, _0x3f2173[1] & 65535];
        _0x400561 = [_0x400561[0] >>> 16, _0x400561[0] & 65535, _0x400561[1] >>> 16, _0x400561[1] & 65535];
        var _0x3d209b = [0, 0, 0, 0];
        _0x3d209b[3] += _0x3f2173[3] + _0x400561[3];
        _0x3d209b[2] += _0x3d209b[3] >>> 16;
        _0x3d209b[3] &= 65535;
        _0x3d209b[2] += _0x3f2173[2] + _0x400561[2];
        _0x3d209b[1] += _0x3d209b[2] >>> 16;
        _0x3d209b[2] &= 65535;
        _0x3d209b[1] += _0x3f2173[1] + _0x400561[1];
        _0x3d209b[0] += _0x3d209b[1] >>> 16;
        _0x3d209b[1] &= 65535;
        _0x3d209b[0] += _0x3f2173[0] + _0x400561[0];
        _0x3d209b[0] &= 65535;
        return [_0x3d209b[0] << 16 | _0x3d209b[1], _0x3d209b[2] << 16 | _0x3d209b[3]];
      }
      function _0x580edf(_0x4aafee, _0x56055) {
        _0x4aafee = [_0x4aafee[0] >>> 16, _0x4aafee[0] & 65535, _0x4aafee[1] >>> 16, _0x4aafee[1] & 65535];
        _0x56055 = [_0x56055[0] >>> 16, _0x56055[0] & 65535, _0x56055[1] >>> 16, _0x56055[1] & 65535];
        var _0x31ed5b = [0, 0, 0, 0];
        _0x31ed5b[3] += _0x4aafee[3] * _0x56055[3];
        _0x31ed5b[2] += _0x31ed5b[3] >>> 16;
        _0x31ed5b[3] &= 65535;
        _0x31ed5b[2] += _0x4aafee[2] * _0x56055[3];
        _0x31ed5b[1] += _0x31ed5b[2] >>> 16;
        _0x31ed5b[2] &= 65535;
        _0x31ed5b[2] += _0x4aafee[3] * _0x56055[2];
        _0x31ed5b[1] += _0x31ed5b[2] >>> 16;
        _0x31ed5b[2] &= 65535;
        _0x31ed5b[1] += _0x4aafee[1] * _0x56055[3];
        _0x31ed5b[0] += _0x31ed5b[1] >>> 16;
        _0x31ed5b[1] &= 65535;
        _0x31ed5b[1] += _0x4aafee[2] * _0x56055[2];
        _0x31ed5b[0] += _0x31ed5b[1] >>> 16;
        _0x31ed5b[1] &= 65535;
        _0x31ed5b[1] += _0x4aafee[3] * _0x56055[1];
        _0x31ed5b[0] += _0x31ed5b[1] >>> 16;
        _0x31ed5b[1] &= 65535;
        _0x31ed5b[0] += _0x4aafee[0] * _0x56055[3] + _0x4aafee[1] * _0x56055[2] + _0x4aafee[2] * _0x56055[1] + _0x4aafee[3] * _0x56055[0];
        _0x31ed5b[0] &= 65535;
        return [_0x31ed5b[0] << 16 | _0x31ed5b[1], _0x31ed5b[2] << 16 | _0x31ed5b[3]];
      }
      function _0x281e26(_0x12399d, _0x314b42) {
        if ((_0x314b42 %= 64) == 32) {
          return [_0x12399d[1], _0x12399d[0]];
        } else if (_0x314b42 < 32) {
          return [_0x12399d[0] << _0x314b42 | _0x12399d[1] >>> 32 - _0x314b42, _0x12399d[1] << _0x314b42 | _0x12399d[0] >>> 32 - _0x314b42];
        } else {
          _0x314b42 -= 32;
          return [_0x12399d[1] << _0x314b42 | _0x12399d[0] >>> 32 - _0x314b42, _0x12399d[0] << _0x314b42 | _0x12399d[1] >>> 32 - _0x314b42];
        }
      }
      function _0x5a862c(_0x21febd, _0x32b5f4) {
        if ((_0x32b5f4 %= 64) == 0) {
          return _0x21febd;
        } else if (_0x32b5f4 < 32) {
          return [_0x21febd[0] << _0x32b5f4 | _0x21febd[1] >>> 32 - _0x32b5f4, _0x21febd[1] << _0x32b5f4];
        } else {
          return [_0x21febd[1] << _0x32b5f4 - 32, 0];
        }
      }
      function _0x37f737(_0x279d16, _0x5a6463) {
        return [_0x279d16[0] ^ _0x5a6463[0], _0x279d16[1] ^ _0x5a6463[1]];
      }
      function _0x5f5525(_0x132587) {
        _0x132587 = _0x37f737(_0x132587, [0, _0x132587[0] >>> 1]);
        _0x132587 = _0x580edf(_0x132587, [4283543511, 3981806797]);
        _0x132587 = _0x37f737(_0x132587, [0, _0x132587[0] >>> 1]);
        _0x132587 = _0x580edf(_0x132587, [3301882366, 444984403]);
        return _0x37f737(_0x132587, [0, _0x132587[0] >>> 1]);
      }
      function _0xe60fb9(_0x37a980, _0x277f7d) {
        _0x277f7d = _0x277f7d || 0;
        var _0x9ce8de = (_0x37a980 = _0x37a980 || "").length % 16;
        for (var _0x5d3762 = _0x37a980.length - _0x9ce8de, _0x25d387 = [0, _0x277f7d], _0x2a3d64 = [0, _0x277f7d], _0x1ad967 = [0, 0], _0x1fbb5c = [0, 0], _0x1edff5 = [2277735313, 289559509], _0x5de1e6 = [1291169091, 658871167], _0x5c92ce = 0; _0x5c92ce < _0x5d3762; _0x5c92ce += 16) {
          _0x1ad967 = [_0x37a980.charCodeAt(_0x5c92ce + 4) & 255 | (_0x37a980.charCodeAt(_0x5c92ce + 5) & 255) << 8 | (_0x37a980.charCodeAt(_0x5c92ce + 6) & 255) << 16 | (_0x37a980.charCodeAt(_0x5c92ce + 7) & 255) << 24, _0x37a980.charCodeAt(_0x5c92ce) & 255 | (_0x37a980.charCodeAt(_0x5c92ce + 1) & 255) << 8 | (_0x37a980.charCodeAt(_0x5c92ce + 2) & 255) << 16 | (_0x37a980.charCodeAt(_0x5c92ce + 3) & 255) << 24];
          _0x1fbb5c = [_0x37a980.charCodeAt(_0x5c92ce + 12) & 255 | (_0x37a980.charCodeAt(_0x5c92ce + 13) & 255) << 8 | (_0x37a980.charCodeAt(_0x5c92ce + 14) & 255) << 16 | (_0x37a980.charCodeAt(_0x5c92ce + 15) & 255) << 24, _0x37a980.charCodeAt(_0x5c92ce + 8) & 255 | (_0x37a980.charCodeAt(_0x5c92ce + 9) & 255) << 8 | (_0x37a980.charCodeAt(_0x5c92ce + 10) & 255) << 16 | (_0x37a980.charCodeAt(_0x5c92ce + 11) & 255) << 24];
          _0x1ad967 = _0x580edf(_0x1ad967, _0x1edff5);
          _0x1ad967 = _0x281e26(_0x1ad967, 31);
          _0x1ad967 = _0x580edf(_0x1ad967, _0x5de1e6);
          _0x25d387 = _0x37f737(_0x25d387, _0x1ad967);
          _0x25d387 = _0x281e26(_0x25d387, 27);
          _0x25d387 = _0xe140a9(_0x25d387, _0x2a3d64);
          _0x25d387 = _0xe140a9(_0x580edf(_0x25d387, [0, 5]), [0, 1390208809]);
          _0x1fbb5c = _0x580edf(_0x1fbb5c, _0x5de1e6);
          _0x1fbb5c = _0x281e26(_0x1fbb5c, 33);
          _0x1fbb5c = _0x580edf(_0x1fbb5c, _0x1edff5);
          _0x2a3d64 = _0x37f737(_0x2a3d64, _0x1fbb5c);
          _0x2a3d64 = _0x281e26(_0x2a3d64, 31);
          _0x2a3d64 = _0xe140a9(_0x2a3d64, _0x25d387);
          _0x2a3d64 = _0xe140a9(_0x580edf(_0x2a3d64, [0, 5]), [0, 944331445]);
        }
        _0x1ad967 = [0, 0];
        _0x1fbb5c = [0, 0];
        switch (_0x9ce8de) {
          case 15:
            _0x1fbb5c = _0x37f737(_0x1fbb5c, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 14)], 48));
          case 14:
            _0x1fbb5c = _0x37f737(_0x1fbb5c, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 13)], 40));
          case 13:
            _0x1fbb5c = _0x37f737(_0x1fbb5c, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 12)], 32));
          case 12:
            _0x1fbb5c = _0x37f737(_0x1fbb5c, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 11)], 24));
          case 11:
            _0x1fbb5c = _0x37f737(_0x1fbb5c, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 10)], 16));
          case 10:
            _0x1fbb5c = _0x37f737(_0x1fbb5c, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 9)], 8));
          case 9:
            _0x1fbb5c = _0x37f737(_0x1fbb5c, [0, _0x37a980.charCodeAt(_0x5c92ce + 8)]);
            _0x1fbb5c = _0x580edf(_0x1fbb5c, _0x5de1e6);
            _0x1fbb5c = _0x281e26(_0x1fbb5c, 33);
            _0x1fbb5c = _0x580edf(_0x1fbb5c, _0x1edff5);
            _0x2a3d64 = _0x37f737(_0x2a3d64, _0x1fbb5c);
          case 8:
            _0x1ad967 = _0x37f737(_0x1ad967, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 7)], 56));
          case 7:
            _0x1ad967 = _0x37f737(_0x1ad967, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 6)], 48));
          case 6:
            _0x1ad967 = _0x37f737(_0x1ad967, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 5)], 40));
          case 5:
            _0x1ad967 = _0x37f737(_0x1ad967, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 4)], 32));
          case 4:
            _0x1ad967 = _0x37f737(_0x1ad967, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 3)], 24));
          case 3:
            _0x1ad967 = _0x37f737(_0x1ad967, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 2)], 16));
          case 2:
            _0x1ad967 = _0x37f737(_0x1ad967, _0x5a862c([0, _0x37a980.charCodeAt(_0x5c92ce + 1)], 8));
          case 1:
            _0x1ad967 = _0x37f737(_0x1ad967, [0, _0x37a980.charCodeAt(_0x5c92ce)]);
            _0x1ad967 = _0x580edf(_0x1ad967, _0x1edff5);
            _0x1ad967 = _0x281e26(_0x1ad967, 31);
            _0x1ad967 = _0x580edf(_0x1ad967, _0x5de1e6);
            _0x25d387 = _0x37f737(_0x25d387, _0x1ad967);
        }
        _0x25d387 = _0x37f737(_0x25d387, [0, _0x37a980.length]);
        _0x2a3d64 = _0x37f737(_0x2a3d64, [0, _0x37a980.length]);
        _0x25d387 = _0xe140a9(_0x25d387, _0x2a3d64);
        _0x2a3d64 = _0xe140a9(_0x2a3d64, _0x25d387);
        _0x25d387 = _0x5f5525(_0x25d387);
        _0x2a3d64 = _0x5f5525(_0x2a3d64);
        _0x25d387 = _0xe140a9(_0x25d387, _0x2a3d64);
        _0x2a3d64 = _0xe140a9(_0x2a3d64, _0x25d387);
        return ("00000000" + (_0x25d387[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x25d387[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x2a3d64[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x2a3d64[1] >>> 0).toString(16)).slice(-8);
      }
      var _0x3ef8e9 = {
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
      var _0xeb0399 = {
        fp_infos: function (_0x54fbf8) {
          var _0x5eb307 = {
            errors: {}
          };
          for (var _0x49d1c6 in _0x54fbf8) {
            var _0x1af161 = _0x54fbf8[_0x49d1c6];
            var _0x5d1bd6 = _0x1af161.key;
            var _0x36fd3f = _0x1af161.value;
            if (typeof _0x36fd3f == "string" && _0x36fd3f.indexOf("Error: ") != -1) {
              _0x5eb307.errors[_0x5d1bd6] = _0x36fd3f;
            } else {
              _0x5eb307[_0x5d1bd6] = _0x36fd3f;
            }
          }
          var _0x946fc = new Date();
          _0x5eb307.dateTime = {
            timestamp: _0x946fc.getTime()
          };
          _0x5eb307.fp = function (_0x3f7d30, _0x39ac38) {
            var _0x80bde2 = [_0x3f7d30.plugins && _0x3f7d30.plugins.fp, _0x3f7d30.fonts && _0x3f7d30.fonts.fp, _0x3f7d30.screenObject.colorDepth, _0x3f7d30.intlObject, _0x3f7d30.deviceInfos, _0x3f7d30.touchSupport, _0x3f7d30.navigatorObject.platform, _0x3f7d30.navigatorObject.vendor, _0x3f7d30.storageObject, _0x3f7d30.functions, _0x3f7d30.audio, _0x5b1b22(_0x3f7d30.webGL) == "object" ? _0x3f7d30.webGL.fp : undefined, _0x5b1b22(_0x3f7d30.canvas) == "object" ? _0x3f7d30.canvas.fp : undefined];
            for (var _0x3aff4 in _0x80bde2) {
              if (_0x80bde2[_0x3aff4] === undefined) {
                _0x80bde2[_0x3aff4] = "";
              }
            }
            return _0x39ac38(_0x80bde2.toString(), 31);
          }(_0x5eb307, _0xe60fb9);
          _0x5eb307.protocol = _0x3ef8e9.protocol.replace(":", "");
          (function () {
            var _0x47a4c3 = _0x5eb307.dateTime.timestamp % 10 || 10;
            for (var _0x2ff932 in _0x5eb307) {
              var _0xd48855 = _0x5eb307[_0x2ff932];
              if (_0x5b1b22(_0xd48855) == "object") {
                var _0x38724f = 0;
                for (var _0x30f2d3 in _0xd48855) {
                  var _0x15f5aa = _0xd48855[_0x30f2d3];
                  _0x38724f += typeof _0x15f5aa == "number" ? parseInt(_0x15f5aa) : typeof _0x15f5aa == "string" ? _0x15f5aa.length : _0x47a4c3;
                }
                if (_0x38724f) {
                  _0x5eb307[_0x2ff932].verify = _0x38724f * _0x47a4c3;
                }
              }
            }
          })();
          return _0x5eb307;
        }([_0x50e9f6, {
          key: "fonts",
          value: {
            names: ["Arial", "Arial Black", "Arial Narrow", "Calibri", "Cambria", "Cambria Math", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Georgia", "Helvetica", "Impact", "Lucida Console", "Lucida Sans Unicode", "Microsoft Sans Serif", "MS Gothic", "MS PGothic", "MS Sans Serif", "MS Serif", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Trebuchet MS", "Verdana", "Wingdings"],
            fp: "f730c0cc627b3b3d7db9f459836db692"
          }
        }, _0x45a0c7, _0x6c2d8, {
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
          var _0x59c88d = 0;
          var _0x4ad292 = 1;
          for (var _0x52371e = 0; _0x52371e < _0x4aa59b.length; _0x52371e++) {
            _0x59c88d = (_0x59c88d + _0x4aa59b.charCodeAt(_0x52371e)) * 2;
            _0x4ad292 = (_0x4ad292 + _0x52371e + 1) * 2;
          }
          _0x59c88d *= _0x5ed2be;
          return "WZWS_CONFIRM_PREFIX_LABEL" + (_0x59c88d + _0x4ad292);
        }(),
        hostname: _0x3ef8e9.hostname,
        scheme: _0x3ef8e9.protocol.replace(":", "")
      };
      return function (_0x847268) {
        var _0x3cfea0;
        var _0x1700af;
        var _0x4aab1;
        var _0x44c87b;
        var _0x580d49;
        var _0x594a11;
        var _0x9ae7fb = _0x45f11b;
        _0x4aab1 = _0x847268.length;
        _0x1700af = 0;
        _0x3cfea0 = "";
        while (_0x1700af < _0x4aab1) {
          _0x44c87b = _0x847268.charCodeAt(_0x1700af++) & 255;
          if (_0x1700af == _0x4aab1) {
            _0x3cfea0 += _0x9ae7fb.charAt(_0x44c87b >> 2);
            _0x3cfea0 += _0x9ae7fb.charAt((_0x44c87b & 3) << 4);
            _0x3cfea0 += "==";
            break;
          }
          _0x580d49 = _0x847268.charCodeAt(_0x1700af++);
          if (_0x1700af == _0x4aab1) {
            _0x3cfea0 += _0x9ae7fb.charAt(_0x44c87b >> 2);
            _0x3cfea0 += _0x9ae7fb.charAt((_0x44c87b & 3) << 4 | (_0x580d49 & 240) >> 4);
            _0x3cfea0 += _0x9ae7fb.charAt((_0x580d49 & 15) << 2);
            _0x3cfea0 += "=";
            break;
          }
          _0x594a11 = _0x847268.charCodeAt(_0x1700af++);
          _0x3cfea0 += _0x9ae7fb.charAt(_0x44c87b >> 2);
          _0x3cfea0 += _0x9ae7fb.charAt((_0x44c87b & 3) << 4 | (_0x580d49 & 240) >> 4);
          _0x3cfea0 += _0x9ae7fb.charAt((_0x580d49 & 15) << 2 | (_0x594a11 & 192) >> 6);
          _0x3cfea0 += _0x9ae7fb.charAt(_0x594a11 & 63);
        }
        return _0x3cfea0;
      }(JSON.stringify(_0xeb0399));
    }
  }
  function _0x5a8d63(_0x1f75e0) {
    _0x5a8d63 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x2af9c5) {
      return typeof _0x2af9c5;
    } : function (_0x2bca75) {
      if (_0x2bca75 && typeof Symbol == "function" && _0x2bca75.constructor === Symbol && _0x2bca75 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x2bca75;
      }
    };
    return _0x5a8d63(_0x1f75e0);
  }
  var _0x4d8b07 = typeof $argument != "undefined" ? (typeof $argument == "undefined" ? "undefined" : _0x5a8d63($argument)) == "object" ? $argument : Object.fromEntries($argument.split("&").map(function (_0x21561a) {
    return _0x21561a.split("=");
  })) : {};
  function _0x4c2b88(_0x14fd11) {
    _0x4c2b88 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x1d821d) {
      return typeof _0x1d821d;
    } : function (_0x575c35) {
      if (_0x575c35 && typeof Symbol == "function" && _0x575c35.constructor === Symbol && _0x575c35 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x575c35;
      }
    };
    return _0x4c2b88(_0x14fd11);
  }
  function _0x49d68e(_0x4324aa, _0x3a6445) {
    var _0x36a5be = Object.keys(_0x4324aa);
    if (Object.getOwnPropertySymbols) {
      var _0x212209 = Object.getOwnPropertySymbols(_0x4324aa);
      if (_0x3a6445) {
        _0x212209 = _0x212209.filter(function (_0x17ef30) {
          return Object.getOwnPropertyDescriptor(_0x4324aa, _0x17ef30).enumerable;
        });
      }
      _0x36a5be.push.apply(_0x36a5be, _0x212209);
    }
    return _0x36a5be;
  }
  function _0x22ec9e(_0x9925ce) {
    for (var _0x5445e1 = 1; _0x5445e1 < arguments.length; _0x5445e1++) {
      var _0x458053 = arguments[_0x5445e1] ?? {};
      if (_0x5445e1 % 2) {
        _0x49d68e(Object(_0x458053), true).forEach(function (_0x46602b) {
          _0x1f3244(_0x9925ce, _0x46602b, _0x458053[_0x46602b]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(_0x9925ce, Object.getOwnPropertyDescriptors(_0x458053));
      } else {
        _0x49d68e(Object(_0x458053)).forEach(function (_0x11be2b) {
          Object.defineProperty(_0x9925ce, _0x11be2b, Object.getOwnPropertyDescriptor(_0x458053, _0x11be2b));
        });
      }
    }
    return _0x9925ce;
  }
  function _0x1f3244(_0x4b67b, _0x406078, _0x3a4a60) {
    if ((_0x406078 = function (_0x42e3ed) {
      var _0x2b36e3 = function (_0x137758, _0x3554dc) {
        if (_0x4c2b88(_0x137758) != "object" || !_0x137758) {
          return _0x137758;
        }
        var _0x331e34 = _0x137758[Symbol.toPrimitive];
        if (_0x331e34 !== undefined) {
          var _0x490b47 = _0x331e34.call(_0x137758, _0x3554dc || "default");
          if (_0x4c2b88(_0x490b47) != "object") {
            return _0x490b47;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (_0x3554dc === "string" ? String : Number)(_0x137758);
      }(_0x42e3ed, "string");
      if (_0x4c2b88(_0x2b36e3) == "symbol") {
        return _0x2b36e3;
      } else {
        return _0x2b36e3 + "";
      }
    }(_0x406078)) in _0x4b67b) {
      Object.defineProperty(_0x4b67b, _0x406078, {
        value: _0x3a4a60,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      _0x4b67b[_0x406078] = _0x3a4a60;
    }
    return _0x4b67b;
  }
  function _0x2570ae(_0x337e2a, _0x12feeb) {
    return function (_0x1592e2) {
      if (Array.isArray(_0x1592e2)) {
        return _0x1592e2;
      }
    }(_0x337e2a) || function (_0xd0d733, _0xe9779c) {
      var _0x5030b4 = _0xd0d733 == null ? null : typeof Symbol != "undefined" && _0xd0d733[Symbol.iterator] || _0xd0d733["@@iterator"];
      if (_0x5030b4 != null) {
        var _0x2ed9c6;
        var _0x302cdc;
        var _0x2c0afc;
        var _0xda6749;
        var _0x149501 = [];
        var _0x23c759 = true;
        var _0x6f1bb9 = false;
        try {
          _0x2c0afc = (_0x5030b4 = _0x5030b4.call(_0xd0d733)).next;
          if (_0xe9779c === 0) {
            if (Object(_0x5030b4) !== _0x5030b4) {
              return;
            }
            _0x23c759 = false;
          } else {
            for (; !(_0x23c759 = (_0x2ed9c6 = _0x2c0afc.call(_0x5030b4)).done) && (_0x149501.push(_0x2ed9c6.value), _0x149501.length !== _0xe9779c); _0x23c759 = true);
          }
        } catch (_0x4e94b2) {
          _0x6f1bb9 = true;
          _0x302cdc = _0x4e94b2;
        } finally {
          try {
            if (!_0x23c759 && _0x5030b4.return != null && (_0xda6749 = _0x5030b4.return(), Object(_0xda6749) !== _0xda6749)) {
              return;
            }
          } finally {
            if (_0x6f1bb9) {
              throw _0x302cdc;
            }
          }
        }
        return _0x149501;
      }
    }(_0x337e2a, _0x12feeb) || function (_0x139ca4, _0x3d8f8e) {
      if (_0x139ca4) {
        if (typeof _0x139ca4 == "string") {
          return _0x32324b(_0x139ca4, _0x3d8f8e);
        }
        var _0x57251b = {}.toString.call(_0x139ca4).slice(8, -1);
        if (_0x57251b === "Object" && _0x139ca4.constructor) {
          _0x57251b = _0x139ca4.constructor.name;
        }
        if (_0x57251b === "Map" || _0x57251b === "Set") {
          return Array.from(_0x139ca4);
        } else if (_0x57251b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x57251b)) {
          return _0x32324b(_0x139ca4, _0x3d8f8e);
        } else {
          return undefined;
        }
      }
    }(_0x337e2a, _0x12feeb) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _0x32324b(_0x5318f8, _0x262eec) {
    if (_0x262eec == null || _0x262eec > _0x5318f8.length) {
      _0x262eec = _0x5318f8.length;
    }
    for (var _0x30349c = 0, _0x4a9599 = Array(_0x262eec); _0x30349c < _0x262eec; _0x30349c++) {
      _0x4a9599[_0x30349c] = _0x5318f8[_0x30349c];
    }
    return _0x4a9599;
  }
  function _0x4ab11a() {
    _0x4ab11a = function () {
      return _0x5623eb;
    };
    var _0x4ad9a7;
    var _0x5623eb = {};
    var _0x5bf2b5 = Object.prototype;
    var _0x395f14 = _0x5bf2b5.hasOwnProperty;
    var _0xfa9370 = Object.defineProperty || function (_0x15caab, _0x370eba, _0x53ef99) {
      _0x15caab[_0x370eba] = _0x53ef99.value;
    };
    var _0x43a95c = typeof Symbol == "function" ? Symbol : {};
    var _0x360c05 = _0x43a95c.iterator || "@@iterator";
    var _0x1f8a33 = _0x43a95c.asyncIterator || "@@asyncIterator";
    var _0x513db4 = _0x43a95c.toStringTag || "@@toStringTag";
    function _0x4d9b01(_0x448c21, _0x2679d3, _0x3d3e7f) {
      var _0x3acd1f = {
        value: _0x3d3e7f,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(_0x448c21, _0x2679d3, _0x3acd1f);
      return _0x448c21[_0x2679d3];
    }
    try {
      _0x4d9b01({}, "");
    } catch (_0x2b941b) {
      _0x4d9b01 = function (_0x2c199b, _0x4f8c65, _0x293a29) {
        return _0x2c199b[_0x4f8c65] = _0x293a29;
      };
    }
    function _0x478057(_0x35f3d4, _0x156348, _0x37e853, _0xf65620) {
      var _0x1fa42a = _0x156348 && _0x156348.prototype instanceof _0x480752 ? _0x156348 : _0x480752;
      var _0x4ec85e = Object.create(_0x1fa42a.prototype);
      var _0x451cda = new _0x171cee(_0xf65620 || []);
      _0xfa9370(_0x4ec85e, "_invoke", {
        value: _0x403057(_0x35f3d4, _0x37e853, _0x451cda)
      });
      return _0x4ec85e;
    }
    function _0x43713d(_0x33a547, _0x4aaf86, _0x4895be) {
      try {
        return {
          type: "normal",
          arg: _0x33a547.call(_0x4aaf86, _0x4895be)
        };
      } catch (_0x441bb4) {
        var _0x1c0677 = {
          type: "throw",
          arg: _0x441bb4
        };
        return _0x1c0677;
      }
    }
    _0x5623eb.wrap = _0x478057;
    var _0x2b9996 = "suspendedStart";
    var _0x4f22ac = "suspendedYield";
    var _0x4c3b5d = "executing";
    var _0x427aaa = "completed";
    var _0x2f41e3 = {};
    function _0x480752() {}
    function _0x2e0426() {}
    function _0x423f29() {}
    var _0x2c8607 = {};
    _0x4d9b01(_0x2c8607, _0x360c05, function () {
      return this;
    });
    var _0x1ea908 = Object.getPrototypeOf;
    var _0x5431af = _0x1ea908 && _0x1ea908(_0x1ea908(_0x2a355a([])));
    if (_0x5431af && _0x5431af !== _0x5bf2b5 && _0x395f14.call(_0x5431af, _0x360c05)) {
      _0x2c8607 = _0x5431af;
    }
    var _0x302201 = _0x423f29.prototype = _0x480752.prototype = Object.create(_0x2c8607);
    function _0x301f58(_0xe10dfe) {
      ["next", "throw", "return"].forEach(function (_0x5aa17e) {
        _0x4d9b01(_0xe10dfe, _0x5aa17e, function (_0x44fd5a) {
          return this._invoke(_0x5aa17e, _0x44fd5a);
        });
      });
    }
    function _0x26476b(_0x4fc67c, _0x4807a1) {
      function _0x593ec3(_0x177772, _0x4a9761, _0x5898f5, _0x5c8de4) {
        var _0x34baf5 = _0x43713d(_0x4fc67c[_0x177772], _0x4fc67c, _0x4a9761);
        if (_0x34baf5.type !== "throw") {
          var _0x2fc002 = _0x34baf5.arg;
          var _0x2474ed = _0x2fc002.value;
          if (_0x2474ed && _0x4c2b88(_0x2474ed) == "object" && _0x395f14.call(_0x2474ed, "__await")) {
            return _0x4807a1.resolve(_0x2474ed.__await).then(function (_0x4c2acb) {
              _0x593ec3("next", _0x4c2acb, _0x5898f5, _0x5c8de4);
            }, function (_0x338ec5) {
              _0x593ec3("throw", _0x338ec5, _0x5898f5, _0x5c8de4);
            });
          } else {
            return _0x4807a1.resolve(_0x2474ed).then(function (_0x1d9325) {
              _0x2fc002.value = _0x1d9325;
              _0x5898f5(_0x2fc002);
            }, function (_0x4bd841) {
              return _0x593ec3("throw", _0x4bd841, _0x5898f5, _0x5c8de4);
            });
          }
        }
        _0x5c8de4(_0x34baf5.arg);
      }
      var _0x4e8072;
      _0xfa9370(this, "_invoke", {
        value: function (_0x17819b, _0x2c3375) {
          function _0x44bad6() {
            return new _0x4807a1(function (_0xb3fe76, _0x117dfc) {
              _0x593ec3(_0x17819b, _0x2c3375, _0xb3fe76, _0x117dfc);
            });
          }
          return _0x4e8072 = _0x4e8072 ? _0x4e8072.then(_0x44bad6, _0x44bad6) : _0x44bad6();
        }
      });
    }
    function _0x403057(_0x587afb, _0x780499, _0x539ff) {
      var _0x4272ad = _0x2b9996;
      return function (_0x5f780a, _0x5ee4a3) {
        if (_0x4272ad === _0x4c3b5d) {
          throw Error("Generator is already running");
        }
        if (_0x4272ad === _0x427aaa) {
          if (_0x5f780a === "throw") {
            throw _0x5ee4a3;
          }
          var _0x2b359d = {
            value: _0x4ad9a7,
            done: true
          };
          return _0x2b359d;
        }
        _0x539ff.method = _0x5f780a;
        _0x539ff.arg = _0x5ee4a3;
        while (true) {
          var _0x2cc83c = _0x539ff.delegate;
          if (_0x2cc83c) {
            var _0x12ceb3 = _0x30cb86(_0x2cc83c, _0x539ff);
            if (_0x12ceb3) {
              if (_0x12ceb3 === _0x2f41e3) {
                continue;
              }
              return _0x12ceb3;
            }
          }
          if (_0x539ff.method === "next") {
            _0x539ff.sent = _0x539ff._sent = _0x539ff.arg;
          } else if (_0x539ff.method === "throw") {
            if (_0x4272ad === _0x2b9996) {
              _0x4272ad = _0x427aaa;
              throw _0x539ff.arg;
            }
            _0x539ff.dispatchException(_0x539ff.arg);
          } else if (_0x539ff.method === "return") {
            _0x539ff.abrupt("return", _0x539ff.arg);
          }
          _0x4272ad = _0x4c3b5d;
          var _0x18c354 = _0x43713d(_0x587afb, _0x780499, _0x539ff);
          if (_0x18c354.type === "normal") {
            _0x4272ad = _0x539ff.done ? _0x427aaa : _0x4f22ac;
            if (_0x18c354.arg === _0x2f41e3) {
              continue;
            }
            var _0x5f51d9 = {
              value: _0x18c354.arg,
              done: _0x539ff.done
            };
            return _0x5f51d9;
          }
          if (_0x18c354.type === "throw") {
            _0x4272ad = _0x427aaa;
            _0x539ff.method = "throw";
            _0x539ff.arg = _0x18c354.arg;
          }
        }
      };
    }
    function _0x30cb86(_0xcba7c7, _0x4c08b9) {
      var _0x42ed4e = _0x4c08b9.method;
      var _0x3073c9 = _0xcba7c7.iterator[_0x42ed4e];
      if (_0x3073c9 === _0x4ad9a7) {
        _0x4c08b9.delegate = null;
        if (_0x42ed4e !== "throw" || !_0xcba7c7.iterator.return || !(_0x4c08b9.method = "return", _0x4c08b9.arg = _0x4ad9a7, _0x30cb86(_0xcba7c7, _0x4c08b9), _0x4c08b9.method === "throw")) {
          if (_0x42ed4e !== "return") {
            _0x4c08b9.method = "throw";
            _0x4c08b9.arg = new TypeError("The iterator does not provide a '" + _0x42ed4e + "' method");
          }
        }
        return _0x2f41e3;
      }
      var _0x4865f8 = _0x43713d(_0x3073c9, _0xcba7c7.iterator, _0x4c08b9.arg);
      if (_0x4865f8.type === "throw") {
        _0x4c08b9.method = "throw";
        _0x4c08b9.arg = _0x4865f8.arg;
        _0x4c08b9.delegate = null;
        return _0x2f41e3;
      }
      var _0x4b589e = _0x4865f8.arg;
      if (_0x4b589e) {
        if (_0x4b589e.done) {
          _0x4c08b9[_0xcba7c7.resultName] = _0x4b589e.value;
          _0x4c08b9.next = _0xcba7c7.nextLoc;
          if (_0x4c08b9.method !== "return") {
            _0x4c08b9.method = "next";
            _0x4c08b9.arg = _0x4ad9a7;
          }
          _0x4c08b9.delegate = null;
          return _0x2f41e3;
        } else {
          return _0x4b589e;
        }
      } else {
        _0x4c08b9.method = "throw";
        _0x4c08b9.arg = new TypeError("iterator result is not an object");
        _0x4c08b9.delegate = null;
        return _0x2f41e3;
      }
    }
    function _0x535c24(_0x2ee799) {
      var _0x1f5e98 = {
        tryLoc: _0x2ee799[0]
      };
      var _0x12afb8 = _0x1f5e98;
      if (1 in _0x2ee799) {
        _0x12afb8.catchLoc = _0x2ee799[1];
      }
      if (2 in _0x2ee799) {
        _0x12afb8.finallyLoc = _0x2ee799[2];
        _0x12afb8.afterLoc = _0x2ee799[3];
      }
      this.tryEntries.push(_0x12afb8);
    }
    function _0x2f848d(_0x2e47e6) {
      var _0x18edc3 = _0x2e47e6.completion || {};
      _0x18edc3.type = "normal";
      delete _0x18edc3.arg;
      _0x2e47e6.completion = _0x18edc3;
    }
    function _0x171cee(_0x2c5a3f) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      _0x2c5a3f.forEach(_0x535c24, this);
      this.reset(true);
    }
    function _0x2a355a(_0x5260dc) {
      if (_0x5260dc || _0x5260dc === "") {
        var _0x2f067a = _0x5260dc[_0x360c05];
        if (_0x2f067a) {
          return _0x2f067a.call(_0x5260dc);
        }
        if (typeof _0x5260dc.next == "function") {
          return _0x5260dc;
        }
        if (!isNaN(_0x5260dc.length)) {
          var _0x275eab = -1;
          var _0x166f84 = function _0x541a4a() {
            while (++_0x275eab < _0x5260dc.length) {
              if (_0x395f14.call(_0x5260dc, _0x275eab)) {
                _0x541a4a.value = _0x5260dc[_0x275eab];
                _0x541a4a.done = false;
                return _0x541a4a;
              }
            }
            _0x541a4a.value = _0x4ad9a7;
            _0x541a4a.done = true;
            return _0x541a4a;
          };
          return _0x166f84.next = _0x166f84;
        }
      }
      throw new TypeError(_0x4c2b88(_0x5260dc) + " is not iterable");
    }
    _0x2e0426.prototype = _0x423f29;
    _0xfa9370(_0x302201, "constructor", {
      value: _0x423f29,
      configurable: true
    });
    _0xfa9370(_0x423f29, "constructor", {
      value: _0x2e0426,
      configurable: true
    });
    _0x2e0426.displayName = _0x4d9b01(_0x423f29, _0x513db4, "GeneratorFunction");
    _0x5623eb.isGeneratorFunction = function (_0x902acc) {
      var _0x345452 = typeof _0x902acc == "function" && _0x902acc.constructor;
      return !!_0x345452 && (_0x345452 === _0x2e0426 || (_0x345452.displayName || _0x345452.name) === "GeneratorFunction");
    };
    _0x5623eb.mark = function (_0x384d7e) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(_0x384d7e, _0x423f29);
      } else {
        _0x384d7e.__proto__ = _0x423f29;
        _0x4d9b01(_0x384d7e, _0x513db4, "GeneratorFunction");
      }
      _0x384d7e.prototype = Object.create(_0x302201);
      return _0x384d7e;
    };
    _0x5623eb.awrap = function (_0x3271c1) {
      var _0x1b1dd6 = {
        __await: _0x3271c1
      };
      return _0x1b1dd6;
    };
    _0x301f58(_0x26476b.prototype);
    _0x4d9b01(_0x26476b.prototype, _0x1f8a33, function () {
      return this;
    });
    _0x5623eb.AsyncIterator = _0x26476b;
    _0x5623eb.async = function (_0x1b904d, _0x1fd780, _0x2e1592, _0x108254, _0x575372 = Promise) {
      var _0x580e20 = new _0x26476b(_0x478057(_0x1b904d, _0x1fd780, _0x2e1592, _0x108254), _0x575372);
      if (_0x5623eb.isGeneratorFunction(_0x1fd780)) {
        return _0x580e20;
      } else {
        return _0x580e20.next().then(function (_0x3ca9fd) {
          if (_0x3ca9fd.done) {
            return _0x3ca9fd.value;
          } else {
            return _0x580e20.next();
          }
        });
      }
    };
    _0x301f58(_0x302201);
    _0x4d9b01(_0x302201, _0x513db4, "Generator");
    _0x4d9b01(_0x302201, _0x360c05, function () {
      return this;
    });
    _0x4d9b01(_0x302201, "toString", function () {
      return "[object Generator]";
    });
    _0x5623eb.keys = function (_0x53d83a) {
      var _0xdb906b = Object(_0x53d83a);
      var _0x4b2779 = [];
      for (var _0x455f17 in _0xdb906b) {
        _0x4b2779.push(_0x455f17);
      }
      _0x4b2779.reverse();
      return function _0x45d70c() {
        while (_0x4b2779.length) {
          var _0x16b1b0 = _0x4b2779.pop();
          if (_0x16b1b0 in _0xdb906b) {
            _0x45d70c.value = _0x16b1b0;
            _0x45d70c.done = false;
            return _0x45d70c;
          }
        }
        _0x45d70c.done = true;
        return _0x45d70c;
      };
    };
    _0x5623eb.values = _0x2a355a;
    _0x171cee.prototype = {
      constructor: _0x171cee,
      reset: function (_0x3fbfb5) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = _0x4ad9a7;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = _0x4ad9a7;
        this.tryEntries.forEach(_0x2f848d);
        if (!_0x3fbfb5) {
          for (var _0x206800 in this) {
            if (_0x206800.charAt(0) === "t" && _0x395f14.call(this, _0x206800) && !isNaN(+_0x206800.slice(1))) {
              this[_0x206800] = _0x4ad9a7;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var _0x1a6181 = this.tryEntries[0].completion;
        if (_0x1a6181.type === "throw") {
          throw _0x1a6181.arg;
        }
        return this.rval;
      },
      dispatchException: function (_0x25b295) {
        if (this.done) {
          throw _0x25b295;
        }
        var _0x516f0c = this;
        function _0xee2256(_0x2a6aaf, _0x43d7a5) {
          _0x513461.type = "throw";
          _0x513461.arg = _0x25b295;
          _0x516f0c.next = _0x2a6aaf;
          if (_0x43d7a5) {
            _0x516f0c.method = "next";
            _0x516f0c.arg = _0x4ad9a7;
          }
          return !!_0x43d7a5;
        }
        for (var _0x48a2bf = this.tryEntries.length - 1; _0x48a2bf >= 0; --_0x48a2bf) {
          var _0x150175 = this.tryEntries[_0x48a2bf];
          var _0x513461 = _0x150175.completion;
          if (_0x150175.tryLoc === "root") {
            return _0xee2256("end");
          }
          if (_0x150175.tryLoc <= this.prev) {
            var _0x3b58f2 = _0x395f14.call(_0x150175, "catchLoc");
            var _0x518d3d = _0x395f14.call(_0x150175, "finallyLoc");
            if (_0x3b58f2 && _0x518d3d) {
              if (this.prev < _0x150175.catchLoc) {
                return _0xee2256(_0x150175.catchLoc, true);
              }
              if (this.prev < _0x150175.finallyLoc) {
                return _0xee2256(_0x150175.finallyLoc);
              }
            } else if (_0x3b58f2) {
              if (this.prev < _0x150175.catchLoc) {
                return _0xee2256(_0x150175.catchLoc, true);
              }
            } else {
              if (!_0x518d3d) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < _0x150175.finallyLoc) {
                return _0xee2256(_0x150175.finallyLoc);
              }
            }
          }
        }
      },
      abrupt: function (_0xad083e, _0x3b54e4) {
        for (var _0x31304a = this.tryEntries.length - 1; _0x31304a >= 0; --_0x31304a) {
          var _0x48b4dd = this.tryEntries[_0x31304a];
          if (_0x48b4dd.tryLoc <= this.prev && _0x395f14.call(_0x48b4dd, "finallyLoc") && this.prev < _0x48b4dd.finallyLoc) {
            var _0x2cfb64 = _0x48b4dd;
            break;
          }
        }
        if (_0x2cfb64 && (_0xad083e === "break" || _0xad083e === "continue") && _0x2cfb64.tryLoc <= _0x3b54e4 && _0x3b54e4 <= _0x2cfb64.finallyLoc) {
          _0x2cfb64 = null;
        }
        var _0x912f71 = _0x2cfb64 ? _0x2cfb64.completion : {};
        _0x912f71.type = _0xad083e;
        _0x912f71.arg = _0x3b54e4;
        if (_0x2cfb64) {
          this.method = "next";
          this.next = _0x2cfb64.finallyLoc;
          return _0x2f41e3;
        } else {
          return this.complete(_0x912f71);
        }
      },
      complete: function (_0x53f4ec, _0x1725a3) {
        if (_0x53f4ec.type === "throw") {
          throw _0x53f4ec.arg;
        }
        if (_0x53f4ec.type === "break" || _0x53f4ec.type === "continue") {
          this.next = _0x53f4ec.arg;
        } else if (_0x53f4ec.type === "return") {
          this.rval = this.arg = _0x53f4ec.arg;
          this.method = "return";
          this.next = "end";
        } else if (_0x53f4ec.type === "normal" && _0x1725a3) {
          this.next = _0x1725a3;
        }
        return _0x2f41e3;
      },
      finish: function (_0x3b10cd) {
        for (var _0x283676 = this.tryEntries.length - 1; _0x283676 >= 0; --_0x283676) {
          var _0x5876fe = this.tryEntries[_0x283676];
          if (_0x5876fe.finallyLoc === _0x3b10cd) {
            this.complete(_0x5876fe.completion, _0x5876fe.afterLoc);
            _0x2f848d(_0x5876fe);
            return _0x2f41e3;
          }
        }
      },
      catch: function (_0x5e3cc4) {
        for (var _0x285891 = this.tryEntries.length - 1; _0x285891 >= 0; --_0x285891) {
          var _0x9625d8 = this.tryEntries[_0x285891];
          if (_0x9625d8.tryLoc === _0x5e3cc4) {
            var _0x5423eb = _0x9625d8.completion;
            if (_0x5423eb.type === "throw") {
              var _0x7996c5 = _0x5423eb.arg;
              _0x2f848d(_0x9625d8);
            }
            return _0x7996c5;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (_0x3711f3, _0x4315b5, _0x4eacdc) {
        this.delegate = {
          iterator: _0x2a355a(_0x3711f3),
          resultName: _0x4315b5,
          nextLoc: _0x4eacdc
        };
        if (this.method === "next") {
          this.arg = _0x4ad9a7;
        }
        return _0x2f41e3;
      }
    };
    return _0x5623eb;
  }
  function _0x2d149a(_0x2ccb27, _0x1d757a, _0x8ac7c, _0x1373fb, _0x4bfc5e, _0x23014e, _0x261d4c) {
    try {
      var _0x2bc622 = _0x2ccb27[_0x23014e](_0x261d4c);
      var _0xba2173 = _0x2bc622.value;
    } catch (_0xefcc8e) {
      _0x8ac7c(_0xefcc8e);
      return;
    }
    if (_0x2bc622.done) {
      _0x1d757a(_0xba2173);
    } else {
      Promise.resolve(_0xba2173).then(_0x1373fb, _0x4bfc5e);
    }
  }
  function _0x44708d(_0x348083) {
    return function () {
      var _0x36513a = this;
      var _0x50814f = arguments;
      return new Promise(function (_0x386d06, _0x2792dd) {
        var _0x4a2d1f = _0x348083.apply(_0x36513a, _0x50814f);
        function _0xd26d2(_0x1bd9aa) {
          _0x2d149a(_0x4a2d1f, _0x386d06, _0x2792dd, _0xd26d2, _0x207380, "next", _0x1bd9aa);
        }
        function _0x207380(_0x117f72) {
          _0x2d149a(_0x4a2d1f, _0x386d06, _0x2792dd, _0xd26d2, _0x207380, "throw", _0x117f72);
        }
        _0xd26d2(undefined);
      });
    };
  }
  var _0x1e3570;
  var _0x4fc00b = "52破解";
  var _0x2856f1 = "https://www.52pojie.cn";
  var _0x10537a = {
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
  function _0x10f784() {
    return _0x21940b === "Node.js";
  }
  _0x1e3570 = ["本脚本仅用于学习研究，禁止用于商业用途", "本脚本不保证准确性、可靠性、完整性和及时性", "任何个人或组织均可无需经过通知而自由使用", "作者对任何脚本问题概不负责，包括由此产生的任何损失", "如有单位或个人认为本脚本侵权，请通知并提供证明，我将删除", "请勿将本脚本用于商业用途，由此引起的问题与作者无关", "本脚本及其更新版权归作者所有", "", `⌚ ${new Date().toLocaleString("zh-CN", {
    timeZone: "PRC"
  })}`];
  _0x56c73a.log.apply(_0x56c73a, ["==============📣免责声明📣=============="].concat(_0x1e3570));
  _0x56c73a.logLevel = `${_0x10f784() ? process.env.WUAI_DEBUG : _0x4d8b07.debug || _0x1a6861.getItem("wuai_debug")}` === "true" ? "debug" : "info";
  _0x56c73a.info(`日志等级: ${_0x56c73a.logLevel}`);
  var _0x5cbb5a = _0x10f784() ? process.env.WUAI_BARK_KEY : _0x1a6861.getItem("wuai_bark_key");
  _0x56c73a.debug(_0x5cbb5a ? "Bark密钥: " + _0x5cbb5a : "未开启Bark推送");
  var _0x4a7700 = _0x10f784() ? process.env.WUAI_COOKIE : _0x1a6861.getItem("wuai_cookie");
  function _0x4155c3() {
    return _0x389acc.apply(this, arguments);
  }
  function _0x389acc() {
    _0x389acc = _0x44708d(_0x4ab11a().mark(function _0x34857d() {
      var _0x1613ee;
      return _0x4ab11a().wrap(function (_0x21b43d) {
        while (true) {
          switch (_0x21b43d.prev = _0x21b43d.next) {
            case 0:
              if (_0x4a7700) {
                _0x21b43d.next = 4;
                break;
              }
              _0x21b43d.next = 3;
              return _0x579114(_0x4fc00b, "", "未填写/未获取Cookie!!");
            case 3:
            case 7:
            case 14:
            case 20:
            case 27:
              return _0x21b43d.abrupt("return");
            case 4:
              if (_0x4a7700.includes("auth=")) {
                _0x21b43d.next = 8;
                break;
              }
              _0x21b43d.next = 7;
              return _0x579114(_0x4fc00b, "", "Cookie关键授权字段缺失, 需重新获取!!");
            case 8:
              _0x4a7700 = _0x5706a9(_0x4a7700);
              _0x21b43d.next = 11;
              return _0xf6d4de();
            case 11:
              if (_0x2c098a.get(globalThis, "user.id")) {
                _0x21b43d.next = 15;
                break;
              }
              _0x21b43d.next = 14;
              return _0x579114(_0x4fc00b, "❌ 获取用户信息失败", "Cookie失效 ‼️‼️");
            case 15:
              _0x21b43d.next = 17;
              return _0x4cc923();
            case 17:
              if (verifyBody) {
                _0x21b43d.next = 21;
                break;
              }
              _0x21b43d.next = 20;
              return _0x579114(_0x4fc00b, "❌ 获取混淆参数失败", "请等待修复!!");
            case 21:
              _0x21b43d.next = 23;
              return _0x2ca2d4();
            case 23:
              _0x1613ee = _0x21b43d.sent;
              if (_0x1613ee) {
                _0x21b43d.next = 28;
                break;
              }
              _0x21b43d.next = 27;
              return _0x579114(_0x4fc00b, "❌ 参数校验失败", "请等待修复!!");
            case 28:
              _0x21b43d.next = 30;
              return _0x3c1176();
            case 30:
              _0x21b43d.next = 32;
              return _0x579114(_0x4fc00b, `${user.name}[${`${user.id}`.replace(/(\d{3})\d+(\d{2})/, "$1****$2")}]`, msgBody);
            case 32:
            case "end":
              return _0x21b43d.stop();
          }
        }
      }, _0x34857d);
    }));
    return _0x389acc.apply(this, arguments);
  }
  function _0xf6d4de() {
    return _0x130d25.apply(this, arguments);
  }
  function _0x130d25() {
    _0x130d25 = _0x44708d(_0x4ab11a().mark(function _0x18b6ba() {
      var _0x5c2c01;
      var _0x41c724;
      var _0x42b89b;
      var _0x292f62;
      var _0x3ca9d0;
      var _0x2181f5;
      var _0x484458;
      return _0x4ab11a().wrap(function (_0x1b2e49) {
        while (true) {
          switch (_0x1b2e49.prev = _0x1b2e49.next) {
            case 0:
              var _0xc19db8 = {
                Cookie: _0x4a7700
              };
              _0x5c2c01 = {
                url: _0x2e4911(_0x2856f1, "/home.php?mod=spacecp&ac=credit&showcredit=1"),
                headers: Object.assign(_0x10537a, _0xc19db8)
              };
              _0x1b2e49.next = 3;
              return _0x517ee6(_0x5c2c01);
            case 3:
              _0x41c724 = _0x1b2e49.sent;
              if (!_0x41c724.ok) {
                _0x1b2e49.next = 16;
                break;
              }
              _0x42b89b = _0x41c724.body;
              if (!_0x42b89b.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55|�Ҫ�ȵ�¼���ܼ�)/)) {
                _0x1b2e49.next = 10;
                break;
              }
              _0x1b2e49.next = 9;
              return _0x579114(_0x4fc00b, "", "Cookie失效 ‼️‼️");
            case 9:
              throw new Error("Cookie失效 ‼️‼️");
            case 10:
              _0x292f62 = /<strong[^>]*><a[^>]*href="[^"]*uid=(\d+)"[^>]*>([^<]*)<\/a><\/strong>/i.exec(_0x42b89b);
              _0x3ca9d0 = _0x2570ae(_0x292f62, 3);
              _0x2181f5 = _0x3ca9d0[1];
              _0x484458 = _0x3ca9d0[2];
              _0x2c098a.set(globalThis, "user.id", _0x2181f5, "");
              _0x2c098a.set(globalThis, "user.name", _0x484458, "");
              _0x56c73a.log(`用户信息: ${_0x2181f5} - ${_0x484458}`);
              _0x1b2e49.next = 17;
              break;
            case 16:
              _0x56c73a.error("获取个人信息失败", _0x41c724.body || "");
            case 17:
            case "end":
              return _0x1b2e49.stop();
          }
        }
      }, _0x18b6ba);
    }));
    return _0x130d25.apply(this, arguments);
  }
  function _0x4cc923() {
    return _0x1b3522.apply(this, arguments);
  }
  function _0x1b3522() {
    _0x1b3522 = _0x44708d(_0x4ab11a().mark(function _0x1f1d35() {
      var _0x268a05;
      var _0x29f874;
      var _0x39fdfa;
      var _0x4e6340;
      var _0x4d515b;
      var _0x37721e;
      return _0x4ab11a().wrap(function (_0x35b8fa) {
        while (true) {
          switch (_0x35b8fa.prev = _0x35b8fa.next) {
            case 0:
              var _0x28c378 = {
                Cookie: _0x4a7700
              };
              _0x268a05 = {
                url: _0x2e4911(_0x2856f1, "/home.php?mod=task&do=apply&id=2&referer=%2F"),
                headers: Object.assign(_0x10537a, _0x28c378)
              };
              _0x35b8fa.next = 3;
              return _0x517ee6(_0x268a05);
            case 3:
              _0x29f874 = _0x35b8fa.sent;
              if (!_0x29f874.ok) {
                _0x35b8fa.next = 24;
                break;
              }
              _0x4a7700 = _0x4b899f(_0x4a7700, _0x1a2461(_0x29f874));
              _0x56c73a.debug(`[混淆接口]更新Cookie: ${_0x4a7700}`);
              _0x39fdfa = /(?:LZ|ZL)\s*=\s*['"]([0-9]{5,6})['"]/.exec(_0x29f874.body)?.[1];
              if (_0x39fdfa) {
                _0x35b8fa.next = 10;
                break;
              }
              throw new Error("[LZ] 长度参数获取失败");
            case 10:
              _0x4e6340 = /(?:LJ|ZR)\s*=\s*['"]([0-9]{5,6})['"]/.exec(_0x29f874.body)?.[1];
              if (_0x4e6340) {
                _0x35b8fa.next = 13;
                break;
              }
              throw new Error("[LJ] 乘数因子获取失败");
            case 13:
              _0x4d515b = /(?:Zn|LE)\s*=\s*['"]([0-9a-zA-Z\/+.-]+={0,2})['"];/.exec(_0x29f874.body)?.[1];
              if (_0x4d515b) {
                _0x35b8fa.next = 16;
                break;
              }
              throw new Error("[LE] 加密参数获取失败");
            case 16:
              var _0x13e8b0 = {
                LZ: _0x39fdfa,
                LJ: _0x4e6340,
                LE: _0x4d515b
              };
              _0x37721e = _0x13e8b0;
              _0x56c73a.group("[请求参数]");
              _0x56c73a.debug(`[LZ] 长度参数: ${_0x37721e.LZ}`, `[LJ] 乘数因子: ${_0x37721e.LJ}`, `[LE] 加密参数: ${_0x37721e.LE}`);
              _0x56c73a.groupEnd();
              globalThis.verifyBody = _0x170a8d(_0x37721e);
              _0x56c73a.debug(`[verifyBody] 加密结果: ${globalThis.verifyBody}`);
              _0x35b8fa.next = 25;
              break;
            case 24:
              _0x56c73a.error("获取混淆参数失败", _0x29f874.body || "");
            case 25:
            case "end":
              return _0x35b8fa.stop();
          }
        }
      }, _0x1f1d35);
    }));
    return _0x1b3522.apply(this, arguments);
  }
  function _0x2ca2d4() {
    return _0x3a1964.apply(this, arguments);
  }
  function _0x3a1964() {
    _0x3a1964 = _0x44708d(_0x4ab11a().mark(function _0xa88a61() {
      var _0x4e76f8;
      var _0x584632;
      return _0x4ab11a().wrap(function (_0x3ff0b5) {
        while (true) {
          switch (_0x3ff0b5.prev = _0x3ff0b5.next) {
            case 0:
              var _0x489c77 = {
                Cookie: _0x4a7700
              };
              _0x4e76f8 = {
                url: _0x2e4911(_0x2856f1, "/waf_zw_verify"),
                headers: Object.assign(_0x10537a, _0x489c77),
                body: verifyBody
              };
              _0x3ff0b5.next = 3;
              return _0x517ee6(_0x4e76f8);
            case 3:
              _0x584632 = _0x3ff0b5.sent;
              if (!_0x584632.ok) {
                _0x3ff0b5.next = 10;
                break;
              }
              _0x4a7700 = _0x4b899f(_0x4a7700, _0x1a2461(_0x584632));
              _0x56c73a.debug("🎉 参数校验接口通过!!");
              return _0x3ff0b5.abrupt("return", true);
            case 10:
              _0x56c73a.error("参数校验失败", _0x584632.body || "");
            case 11:
            case "end":
              return _0x3ff0b5.stop();
          }
        }
      }, _0xa88a61);
    }));
    return _0x3a1964.apply(this, arguments);
  }
  function _0x3c1176() {
    return _0x2353d1.apply(this, arguments);
  }
  function _0x2353d1() {
    _0x2353d1 = _0x44708d(_0x4ab11a().mark(function _0x37a37e() {
      var _0x13229a;
      var _0x389c57;
      var _0x2ea368;
      var _0x2e0a86;
      var _0x4a92b9;
      return _0x4ab11a().wrap(function (_0x3bfdd3) {
        while (true) {
          switch (_0x3bfdd3.prev = _0x3bfdd3.next) {
            case 0:
              var _0x36c72f = {
                Cookie: _0x4a7700
              };
              _0x13229a = {
                url: _0x2e4911(_0x2856f1, "/home.php?mod=task&do=apply&id=2&referer=%2Fforum.php"),
                headers: Object.assign(_0x10537a, _0x36c72f)
              };
              _0x3bfdd3.next = 3;
              return _0x517ee6(_0x13229a);
            case 3:
              _0x389c57 = _0x3bfdd3.sent;
              _0x2ea368 = globalThis;
              _0x2e0a86 = _0x389c57.body;
              _0x4a92b9 = new Date();
              if (_0x2e0a86.match(/(ÒÑÍê³É|\u606d\u559c\u60a8|��̳΢�š��ᰮ�ƽ�)/)) {
                _0x2ea368.msgBody = _0x4a92b9.getMonth() + 1 + "月" + _0x4a92b9.getDate() + "日, 签到成功 🎉";
              } else if (_0x2e0a86.match(/(ÄúÒÑ|\u4e0b\u671f\u518d\u6765|>��Ǹ������)/)) {
                _0x2ea368.msgBody = _0x4a92b9.getMonth() + 1 + "月" + _0x4a92b9.getDate() + "日, 已签过 ⚠️";
              } else if (_0x2e0a86.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55|�Ҫ�ȵ�¼���ܼ�)/)) {
                _0x2ea368.msgBody = "签到失败, Cookie失效 ‼️‼️";
              } else if (_0x389c57.statusCode == 403) {
                _0x2ea368.msgBody = "服务器暂停签到 ⚠️";
              } else {
                _0x2ea368.msgBody = "脚本待更新 ‼️‼️";
              }
            case 8:
            case "end":
              return _0x3bfdd3.stop();
          }
        }
      }, _0x37a37e);
    }));
    return _0x2353d1.apply(this, arguments);
  }
  function _0x5706a9(_0x278df9) {
    var _0x495efb;
    var _0x33c658;
    if (!_0x278df9) {
      _0x136460(_0x4fc00b, "❌ 获取Cookie失败", "Cookie为空, 不进行初始化");
      throw new Error("Cookie为空, 不进行初始化");
    }
    _0x278df9 = _0x4d66d7(_0x278df9);
    if ((_0x495efb = _0x278df9) === null || _0x495efb === undefined || !_0x495efb.htVC_2132_auth) {
      throw new Error("获取Cookie失败, 关键值[auth]缺失");
    }
    if ((_0x33c658 = _0x278df9) === null || _0x33c658 === undefined || !_0x33c658.htVC_2132_saltkey) {
      throw new Error("获取Cookie失败, 关键值[saltkey]缺失");
    }
    return `htVC_2132_auth=${_0x278df9.htVC_2132_auth}; htVC_2132_saltkey=${_0x278df9.htVC_2132_saltkey};`;
  }
  function _0x4d66d7(_0x5559a8) {
    return _0x5559a8.split(";").reduce(function (_0x3c93f4, _0xf7ad96) {
      var _0x136878 = _0xf7ad96.split("=").map(function (_0x2bb587) {
        return _0x2bb587.trim();
      });
      var _0x3e0000 = _0x2570ae(_0x136878, 2);
      var _0x3e95f2 = _0x3e0000[0];
      var _0x9a2a3a = _0x3e0000[1];
      if (_0x3e95f2 && _0x9a2a3a) {
        _0x3c93f4[_0x3e95f2] = _0x9a2a3a;
      }
      return _0x3c93f4;
    }, {});
  }
  function _0x140e1c() {
    var _0x263abb = _0x5706a9($request.headers.Cookie ?? $request.headers.cookie ?? "");
    if (!_0x263abb || !_0x263abb.includes("auth=")) {
      _0x136460(_0x4fc00b, "❌ 获取Cookie失败", "请检查Cookie是否正确");
      throw new Error("请检查Cookie是否正确");
    }
    _0x1a6861.setItem("wuai_cookie", _0x263abb);
    _0x56c73a.debug(`Cookie: ${_0x263abb}`);
    _0x136460(_0x4fc00b, "", "写入Cookie成功 🎉");
  }
  function _0x579114(_0x4bddc2, _0x3128e4, _0xd4b218, _0x312d9d) {
    return _0x3260d6.apply(this, arguments);
  }
  function _0x3260d6() {
    _0x3260d6 = _0x44708d(_0x4ab11a().mark(function _0x3b5c68(_0x42dbbc, _0x506b18, _0x11eb0d, _0x301899) {
      return _0x4ab11a().wrap(function (_0x330b8b) {
        while (true) {
          switch (_0x330b8b.prev = _0x330b8b.next) {
            case 0:
              if (!_0x5cbb5a) {
                _0x330b8b.next = 5;
                break;
              }
              _0x330b8b.next = 3;
              return _0x2b25f7(_0x42dbbc, _0x506b18, _0x11eb0d, _0x301899);
            case 3:
              _0x330b8b.next = 6;
              break;
            case 5:
              _0x136460(_0x42dbbc, _0x506b18, _0x11eb0d, _0x301899);
            case 6:
            case "end":
              return _0x330b8b.stop();
          }
        }
      }, _0x3b5c68);
    }));
    return _0x3260d6.apply(this, arguments);
  }
  function _0x2b25f7(_0x36d46a, _0x2bd4bf, _0x53f0b0) {
    return _0x2dc448.apply(this, arguments);
  }
  function _0x2dc448() {
    _0x2dc448 = _0x44708d(_0x4ab11a().mark(function _0x3d4b58(_0xa80df7, _0x219be7, _0x473e12) {
      var _0xd90bdd;
      var _0x266799;
      var _0x4e6faf;
      var _0xba54cb;
      var _0x5a1183;
      var _0x2ef7cf;
      var _0x273d5a;
      var _0x4c96e8;
      var _0x16377f;
      var _0x320017 = arguments;
      return _0x4ab11a().wrap(function (_0x3bdbd8) {
        while (true) {
          switch (_0x3bdbd8.prev = _0x3bdbd8.next) {
            case 0:
              var _0x2cd493 = {
                "content-type": "application/json; charset=utf-8"
              };
              _0xd90bdd = _0x320017.length > 3 && _0x320017[3] !== undefined ? _0x320017[3] : {};
              _0x266799 = (_0xd90bdd == null ? undefined : _0xd90bdd["open-url"]) || (_0xd90bdd == null ? undefined : _0xd90bdd.openUrl) || (_0xd90bdd == null ? undefined : _0xd90bdd.$open) || (_0xd90bdd == null ? undefined : _0xd90bdd.url) || "";
              _0x4e6faf = (_0xd90bdd == null ? undefined : _0xd90bdd["update-pasteboard"]) || (_0xd90bdd == null ? undefined : _0xd90bdd.updatePasteboard) || (_0xd90bdd == null ? undefined : _0xd90bdd.$copy) || (_0xd90bdd == null ? undefined : _0xd90bdd.copy) || "";
              _0xba54cb = (_0xd90bdd == null ? undefined : _0xd90bdd["media-url"]) || (_0xd90bdd == null ? undefined : _0xd90bdd.mediaUrl) || (_0xd90bdd == null ? undefined : _0xd90bdd.$media) || "";
              ["open-url", "openUrl", "$open", "url", "update-pasteboard", "updatePasteboard", "$copy", "copy", "media-url", "mediaUrl", "$media"].forEach(function (_0x53ec5e) {
                return delete _0xd90bdd[_0x53ec5e];
              });
              if (_0x219be7) {
                _0x473e12 = _0x219be7 + "\n" + _0x473e12;
              }
              _0x5a1183 = _0x22ec9e(_0x22ec9e({}, _0xd90bdd), {}, {
                url: _0x266799,
                copy: _0x4e6faf,
                icon: _0xba54cb,
                title: _0xa80df7,
                body: _0x473e12
              });
              _0x2ef7cf = {
                url: "https://api.day.app/" + _0x5cbb5a,
                headers: _0x2cd493,
                body: _0x8489b5(_0x5a1183)
              };
              _0x273d5a = 0;
            case 9:
              if (!(_0x273d5a < 3)) {
                _0x3bdbd8.next = 27;
                break;
              }
              _0x56c73a.info(`Bark第${_0x273d5a + 1}次推送尝试`);
              _0x3bdbd8.next = 13;
              return _0x517ee6(_0x2ef7cf);
            case 13:
              _0x4c96e8 = _0x3bdbd8.sent;
              if (!_0x4c96e8.ok) {
                _0x3bdbd8.next = 23;
                break;
              }
              _0x16377f = ["=========📣推送成功📣=========", _0xa80df7, _0x473e12];
              if (_0x266799) {
                _0x16377f.push(`跳转链接: ${_0x266799}`);
              }
              if (_0x4e6faf) {
                _0x16377f.push(`复制内容: ${_0x4e6faf}`);
              }
              if (_0xba54cb) {
                _0x16377f.push(`媒体链接: ${_0xba54cb}`);
              }
              _0x56c73a.log.apply(_0x56c73a, _0x16377f);
              return _0x3bdbd8.abrupt("break", 27);
            case 23:
              _0x56c73a.warn("Bark推送失败", _0x4c96e8.body || "");
            case 24:
              _0x273d5a++;
              _0x3bdbd8.next = 9;
              break;
            case 27:
            case "end":
              return _0x3bdbd8.stop();
          }
        }
      }, _0x3d4b58);
    }));
    return _0x2dc448.apply(this, arguments);
  }
  function _0x1a2461(_0x42dfca) {
    var _0x4f43a9;
    var _0x5aeac1;
    _0x5aeac1 = _0x42dfca.headers;
    var _0x2ff6dd = Object.fromEntries(Object.entries(_0x5aeac1).map(function (_0x276787) {
      var _0x2087b3 = _0x3c056e(_0x276787, 2);
      var _0x18e0d1 = _0x2087b3[0];
      var _0x2f3c4a = _0x2087b3[1];
      return [_0x18e0d1.toLowerCase(), _0x2f3c4a];
    }));
    var _0x5c0bcb = _0x2ff6dd["set-cookie"];
    if (Array.isArray(_0x5c0bcb)) {
      return _0x5c0bcb.map(function (_0x72924c) {
        return _0x72924c.split(";")[0];
      }).join(";");
    } else {
      return (_0x5c0bcb == null || (_0x4f43a9 = _0x5c0bcb.split(",")) === null || _0x4f43a9 === undefined || (_0x4f43a9 = _0x4f43a9.map(function (_0x4ae622) {
        return _0x4ae622.split(";")[0];
      })) === null || _0x4f43a9 === undefined ? undefined : _0x4f43a9.join(";")) || _0x5c0bcb;
    }
  }
  function _0x4b899f(_0x3cf81d, _0x32bba7) {
    var _0x2d3ac6 = _0x4d66d7(_0x3cf81d);
    var _0x4d750f = _0x4d66d7(_0x32bba7);
    return Object.entries(Object.assign(_0x2d3ac6, _0x4d750f)).map(function (_0x1077d3) {
      var _0x461bc4 = _0x2570ae(_0x1077d3, 2);
      var _0x3862b9 = _0x461bc4[0];
      var _0x557c05 = _0x461bc4[1];
      return `${_0x3862b9}=${_0x557c05}`;
    }).join("; ");
  }
  _0x56c73a.debug(`Cookie: ${_0x4a7700}`);
  _0x44708d(_0x4ab11a().mark(function _0x532996() {
    return _0x4ab11a().wrap(function (_0x316bef) {
      while (true) {
        switch (_0x316bef.prev = _0x316bef.next) {
          case 0:
            if (globalThis === null || globalThis === undefined || !globalThis.$request) {
              _0x316bef.next = 4;
              break;
            }
            _0x140e1c();
            _0x316bef.next = 6;
            break;
          case 4:
            _0x316bef.next = 6;
            return _0x4155c3();
          case 6:
          case "end":
            return _0x316bef.stop();
        }
      }
    }, _0x532996);
  }))().catch(function (_0x2092b9) {
    return _0x56c73a.error(_0x2092b9);
  }).finally(function (_0x232cf = {}) {
    switch (_0x21940b) {
      case "Surge":
        if (_0x232cf.policy) {
          _0x2c098a.set(_0x232cf, "headers.X-Surge-Policy", _0x232cf.policy);
        }
        _0x56c73a.log("🚩 执行结束!", "🕛 " + (new Date().getTime() / 1000 - $script.startTime) + " 秒");
        $done(_0x232cf);
        break;
      case "Loon":
        if (_0x232cf.policy) {
          _0x232cf.node = _0x232cf.policy;
        }
        _0x56c73a.log("🚩 执行结束!", "🕛 " + (new Date() - $script.startTime) / 1000 + " 秒");
        $done(_0x232cf);
        break;
      case "Stash":
        if (_0x232cf.policy) {
          _0x2c098a.set(_0x232cf, "headers.X-Stash-Selected-Proxy", encodeURI(_0x232cf.policy));
        }
        _0x56c73a.log("🚩 执行结束!", "🕛 " + (new Date() - $script.startTime) / 1000 + " 秒");
        $done(_0x232cf);
        break;
      case "Egern":
      case "Shadowrocket":
      default:
        _0x56c73a.log("🚩 执行结束!");
        $done(_0x232cf);
        break;
      case "Quantumult X":
        if (_0x232cf.policy) {
          _0x2c098a.set(_0x232cf, "opts.policy", _0x232cf.policy);
        }
        _0x232cf["auto-redirect"] = undefined;
        _0x232cf["auto-cookie"] = undefined;
        _0x232cf["binary-mode"] = undefined;
        _0x232cf.charset = undefined;
        _0x232cf.host = undefined;
        _0x232cf.insecure = undefined;
        _0x232cf.method = undefined;
        _0x232cf.ok = undefined;
        _0x232cf.opt = undefined;
        _0x232cf.path = undefined;
        _0x232cf.policy = undefined;
        _0x232cf["policy-descriptor"] = undefined;
        _0x232cf.scheme = undefined;
        _0x232cf.sessionIndex = undefined;
        _0x232cf.statusCode = undefined;
        _0x232cf.timeout = undefined;
        switch (typeof _0x232cf.status) {
          case "number":
            _0x232cf.status = _0x4a834b[_0x232cf.status];
            break;
          case "string":
          case "undefined":
            break;
          default:
            _0x232cf.status = undefined;
        }
        if (_0x232cf.body instanceof ArrayBuffer) {
          _0x232cf.bodyBytes = _0x232cf.body;
          _0x232cf.body = undefined;
        } else if (ArrayBuffer.isView(_0x232cf.body)) {
          _0x232cf.bodyBytes = _0x232cf.body.buffer.slice(_0x232cf.body.byteOffset, _0x232cf.body.byteLength + _0x232cf.body.byteOffset);
          _0x232cf.body = undefined;
        } else if (_0x232cf.body) {
          _0x232cf.bodyBytes = undefined;
        }
        _0x56c73a.log("🚩 执行结束!");
        $done(_0x232cf);
        break;
      case "Node.js":
        _0x56c73a.log("🚩 执行结束!");
        process.exit(1);
    }
  });
})();