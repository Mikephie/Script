/******************************************
 * @name 酷我音乐
 * @description 解锁会员皮肤、会员音频(最高无损)、听书权限, 配合其他去广告脚本达到最佳效果
 * @channel https://t.me/yqc_123
 * @feedback https://t.me/yqc_777
 * @version 1.0.3
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
hostname = *.kuwo.cn

^https?:\/\/(?:musicpay|nmobi|vip1|audiobookpay|tingshu)\.kuwo\.cn\/(?:music\.pay\?newver=\d+|mobi.s\?f=kwxs|vip\/(?:enc\/user\/vip\?op=ui&uid=|v2\/theme\?op=gd)|a\.p|v2\/api\/pay\/user\/info) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/kuwomod-2.js
******************************************/


const isSurge = typeof $httpClient !== "undefined";
const isQuanX = typeof $task !== "undefined";

const surgeCompatibleFetch = (options, callback) => {
  if (isSurge) {
    if (options.method === "POST") {
      $httpClient.post(options, callback);
    } else {
      $httpClient.get(options, callback);
    }
  } else {
    $task.fetch(options).then(
      (response) => callback(null, response, response.body),
      (error) => callback(error, null, null)
    );
  }
};

const surgeCompatibleDone = (response) => {
  if (isSurge) {
    $done(response);
  } else {
    $done(response);
  }
};

const YZz = function () {
  let a = true;
  return function (b, c) {
    const d = a
      ? function () {
          if (c) {
            const e = c.apply(b, arguments);
            c = null;
            return e;
          }
        }
      : function () {};
    a = false;
    return d;
  };
}();

const YZA = YZz(this, function () {
  const c = {
    ZMRMv: function (g, h) {
      return g < h;
    },
    uWtxl: function (g, h) {
      return g > h;
    },
    fOInu: function (g, h) {
      return g + h;
    },
    JQIIk: function (g, h) {
      return g << h;
    },
    kayhb: function (g, h) {
      return g & h;
    },
    LhJQC: function (g, h) {
      return g | h;
    },
    PPbuL: function (g, h) {
      return g & h;
    },
    mPKKQ: function (g, h) {
      return g & h;
    },
    ROpKG: function (g, h) {
      return g === h;
    },
    HvkKN: function (g, h) {
      return g(h);
    },
    GaDTO: function (g, h) {
      return g + h;
    },
    PMFcL: "{}.constructor(\"return this\")( )",
    pfMnJ: function (g) {
      return g();
    },
  };

  const d = function () {};
  let f;

  try {
    const g = Function("return (function() {}.constructor(\"return this\")( ));");
    f = g();
  } catch (h) {
    f = window;
  }

  if (!f.console) {
    f.console = function (j) {
      const k = {
        log: j,
        warn: j,
        debug: j,
        info: j,
        error: j,
        exception: j,
        table: j,
        trace: j,
      };
      return k;
    }(d);
  } else {
    f.console.log = d;
    f.console.warn = d;
    f.console.debug = d;
    f.console.info = d;
    f.console.error = d;
    f.console.exception = d;
    f.console.table = d;
    f.console.trace = d;
  }
});

YZA();

/* The rest of the original script remains unmodified. */

if (isSurge || isQuanX) {
  // Invoke the appropriate function from the original script.
  // You can add the compatibility code wherever necessary.
}

const YZB = new Env("酷我音乐");
const YZC = new YZZ();
const YZD = "/mobi.s?f=kwxs";
const YZE = "/music.pay?newver=3";
const YZF = RegExp(/(a\.p|v2\/api\/(user\/personal\/)?user\/info)/);
const YZG = "/vip/enc";
const YZH = RegExp(/(vip\/)?v2\/(api(\/pay)?\/user\/info|user\/vip)/);
const YZI = "/vip/v2/theme?op=gd";
const YZJ = "/v2/api/advert/myPage";
const YZK = RegExp(/(v2\/api\/advert\/(iListen|album)|openapi\/v1\/album\/adBar|(\/EcomResource|\/(Mobile)?Ad)Serv(er|ice))/);
const YZL = "/vip/v2/sysinfo?op=getRePayAndDoPayBoxNew";
const YZM = "/v2/api/pay/payInfo/kwplayer/payMiniBar";
const YZN = "/openapi/v1/tingshu/index/radio";
const YZO = "/kuwopay/vip-tab/setting";
const YZP = "/openapi/v1/app/newMenuList/menuListInfo";
const YZQ = "/openapi/v1/album/myRec/vipMusic";
const YZR = "/openapi/v1/operate/homePage";
const YZS = YZB.toObj(YZB.getval("KuWo")) || {};
const YZT = "4.12.29";
var YZU = "undefined" !== typeof $request ? $request.url : "";
var YZV = "undefined" !== typeof $response ? $response.body : null;
var YZW = YZB.toObj(YZV);
if (YZU.indexOf(YZD) != -1) {
  let YZa1 = YZS.keys;
  let YZa2 = YZa1[Math.floor(Math.random() * YZa1.length)];
  let YZa3 = [];
  YZa2.forEach((a, b) => {
    YZa3[b] = YZC.ntoc(a);
  });
  let YZa4 = YZS.user;
  let YZa5 = YZS.PlayID;
  let YZa6 = YZa3.join("_");
  let YZa7 = YZS.Song;
  let YZa8 = YZS.ver;
  let YZa9 = YZV.replace(/.*?\"rid\":(\d+).*/, "$1");
  !(async () => {
    await YZY(YZa4, "kuwo");
    await YZX();
    if (YZS.isVip && new Date().getTime() < YZS.endTime && YZT == YZa8 && YZa9 != YZa5) {
      const k = {
        br: 4000,
        url: "4000kflac"
      };
      const l = {
        br: 2000,
        url: "2000kflac"
      };
      const m = {
        br: 320,
        url: "320kmp3"
      };
      let n = [k, l, m];
      let o = 0;
      if ("book" == YZa7) {
        o = 2;
      }
      while (n[o]) {
        const p = {
          url: "http://mobi.kuwo.cn/mobi.s?f=web&source=" + YZa6 + "&type=convert_url_with_sign&br=" + n[o].url + "&rid=" + YZa5
        };
        await YZB.http.get(p).then(q => {
          YZV = q.body;
          YZW = YZB.toObj(YZV);
        });
        if (YZW.data.bitrate == n[o].br) {
          break;
        }
        o++;
      }
    }
    YZS.PlayID = "";
    YZB.setval(YZB.toStr(YZS), "KuWo");
    const j = {
      body: YZV
    };
    YZB.done(j);
  })();
}
if (YZU.endsWith(YZE)) {
  if (YZW.hasOwnProperty("songs")) {
    id = YZW.songs[0].id;
    if ("number" !== typeof id) {
      id = YZV.replace(/.*?\"id\":(\d+).*/, "$1");
    }
    YZS.PlayID = id;
    YZS.Song = "music";
    YZB.setval(YZB.toStr(YZS), "KuWo");
    YZW.songs[0].audio.forEach(a => a.st = 0);
  }
  let YZaa = YZW.songs[0].audio[0].policy;
  YZW.user[0] = {
    pid: YZW.songs[0].audio[0].pid,
    type: YZaa,
    name: YZaa + "_1",
    categray: YZaa + "_1",
    id: YZW.songs[0].id,
    order: 375787919,
    final: [],
    buy: 1657425321,
    begin: 1657425321,
    end: 4077187200,
    CurEnd: 0,
    playCnt: 0,
    playUpper: 300,
    downCnt: 0,
    downUpper: 300,
    playVideoCnt: 0,
    playVideoUpper: 3000,
    downVideoCnt: 0,
    downVideoUpper: 3000,
    price: YZW.songs[0].audio[0].price,
    period: 1000,
    feetype: 0,
    info: YZW.songs[0]
  };
  YZV = YZB.toStr(YZW);
  const YZab = {
    body: YZV
  };
  YZB.done(YZab);
}
if (YZU.match(YZF)) {
  if (YZW.hasOwnProperty("songs")) {
    for (let YZaf in YZW.songs) {
      id = YZW.songs[YZaf].id;
      if ("number" !== typeof id) {
        id = YZV.replace(/.*?\"id\":(\d+).*/, "$1");
      }
      if ("number" == typeof id) {
        YZS.PlayID = id;
        YZS.Song = "book";
        YZB.setval(YZB.toStr(YZS), "KuWo");
        break;
      }
    }
  }
  YZV = YZV.replace(/(policy|policytype)\":\d/g, "$1\":0").replace(/(playright|downright|type|bought_vip|limitfree|vipType)\":\d/g, "$1\":1").replace(/(end|endtime|vipExpires)\":\d+/g, "$1\":4077187200");
  const YZae = {
    body: YZV
  };
  YZB.done(YZae);
}
if (YZU.indexOf(YZG) != -1) {
  !(async () => {
    let e = new URL(YZU).searchParams;
    let f = e.get("uid");
    if ("number" !== typeof f) {
      f = YZU.replace(/.*?uid=(\d+).*/, "$1");
    }
    await YZY(f, "kuwo");
    let g = await YZB.http.get(YZU.replace(/uid=\d+/g, "uid=238581279")).then(j => j.body);
    const h = {
      body: g
    };
    YZB.done(h);
  })();
}
if (YZU.match(YZH)) {
  YZW.data.vipIcon = "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png";
  delete YZW.data.iconJumpUrl;
  delete YZW.data.adActUrl;
  YZW.data.growthValue = "9999";
  YZW.data.vipTag = "VIP7";
  YZW.data.vipmIcon = "https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png";
  YZW.data.svipIcon = "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png";
  YZW.data.openBtnText = "永久会员";
  YZW.data.vipExpire = "4077187200315";
  YZW.data.vipExpires = 4077187200315;
  YZW.data.luxuryIcon = "https://image.kuwo.cn/fe/2fae68ff-de2d-4473-bf28-8efc29e44968vip.png";
  YZW.data.vipmExpire = "4077187200315";
  YZW.data.vipLuxuryExpire = "4077187200315";
  YZW.data.svipExpire = "4077187200315";
  YZW.data.isYearUser = "2";
  YZW.data.biedSong = "1";
  YZW.data.svipAutoPayUser = "1";
  YZV = YZB.toStr(YZW);
  const YZai = {
    body: YZV
  };
  YZB.done(YZai);
}
if (YZU.indexOf(YZI) != -1) {
  YZW.data.vipTheme.type = "free";
  delete YZW.data.needBieds;
  YZV = YZB.toStr(YZW);
  const YZaj = {
    body: YZV
  };
  YZB.done(YZaj);
}
if (YZU.indexOf(YZJ) != -1) {
  YZW.data.scheme = null;
  YZW.data.title = "酷我畅听";
  YZW.data.url = null;
  YZW.data.subTitle = "畅听服务由影子提供";
  YZV = YZB.toStr(YZW);
  const YZam = {
    body: YZV
  };
  YZB.done(YZam);
}
if (YZU.match(YZK)) {
  YZV = "YingZi";
  const YZan = {
    body: YZV
  };
  YZB.done(YZan);
}
if (YZU.indexOf(YZL) != -1) {
  delete YZW.data.songListTopContext;
  YZV = YZB.toStr(YZW);
  const YZao = {
    body: YZV
  };
  YZB.done(YZao);
}
if (YZU.indexOf(YZM) != -1) {
  delete YZW.data;
  delete YZW.dataV2;
  YZV = YZB.toStr(YZW);
  const YZap = {
    body: YZV
  };
  YZB.done(YZap);
}
if (YZU.indexOf(YZN) != -1) {
  let YZaq = 0;
  while (YZW.data.child[YZaq]) {
    if (/^小焦点/.test(YZW.data.child[YZaq].label)) {
      delete YZW.data.child[YZaq].child;
    }
    YZaq++;
  }
  YZV = YZB.toStr(YZW);
  const YZar = {
    body: YZV
  };
  YZB.done(YZar);
}
if (YZU.indexOf(YZO) != -1) {
  if ("undefined" !== typeof YZW.data.tab.vipTypes[0]) {
    let YZat = 1;
    while (YZW.data.tab.vipTypes[0].topics[YZat]) {
      delete YZW.data.tab.vipTypes[0].topics[YZat];
      YZat++;
    }
  }
  YZV = YZB.toStr(YZW);
  const YZas = {
    body: YZV
  };
  YZB.done(YZas);
}
if (YZU.indexOf(YZP) != -1) {
  YZW.data = [];
  YZV = YZB.toStr(YZW);
  const YZau = {
    body: YZV
  };
  YZB.done(YZau);
}
if (YZU.indexOf(YZQ) != -1) {
  delete YZW.data.listenSomething;
  YZV = YZB.toStr(YZW);
  const YZav = {
    body: YZV
  };
  YZB.done(YZav);
}
if (YZU.indexOf(YZR) != -1) {
  let YZaw = ["发现", "推荐", "听书"];
  let YZax = 0;
  while (YZW.data.homeTop[YZax]) {
    if (!YZaw.includes(YZW.data.homeTop[YZax].title)) {
      delete YZW.data.homeTop[YZax];
    }
    YZax++;
  }
  YZV = YZB.toStr(YZW);
  const YZay = {
    body: YZV
  };
  YZB.done(YZay);
}
async function YZX() {
  YZU = "https://sharechain.qq.com/cfa48d8b4551a20d5e6c016bdf3823ff";
  info = await YZB.http.get(YZU).then(f => f.body);
  info = info.match(/<article class=\"note-body\">([\s\S]*?)<\/article>/);
  res = info[1].replace(/(\s|<.*?>)/g, "");
  YZW = YZB.toObj(res);
  if (YZT != YZW.kuwo) {
    YZB.msg("需要更新 -> 请更新你的脚本！");
  }
  YZS.ver = YZW.kuwo;
  YZB.setval(YZB.toStr(YZS), "KuWo");
}
async function YZY(c, d) {
  let g = "type=" + d + "&user=" + c;
  if (!YZS.user || c != YZS.user || !YZS.endTime || new Date().getTime() > YZS.endTime || !YZS.keys) {
    YZB.log("正在获取 " + c + " 的授权信息…");
    const h = {
      url: "https://napi.ltd/getInfo",
      body: g
    };
    let j = YZB.toObj(await YZB.http.post(h).then(k => k.body));
    for (let k in j) {
      if (j.hasOwnProperty(k)) {
        {
          YZS[k] = j[k];
        }
      }
    }
    YZB.setval(YZB.toStr(YZS), "KuWo");
    YZB.log("数据获取完成...");
    if (j.isVip) {
      let m = new Date(YZS.endTime);
      let n = m.getFullYear() + "-" + (m.getMonth() < 10 ? "0" + (m.getMonth() + 1) : m.getMonth() + 1) + "-" + (m.getDate() < 10 ? "0" + m.getDate() : m.getDate());
      YZB.log("当前账户 " + c + " 已授权\n授权有效期至：" + n);
      YZB.msg("当前账户 " + c + " 已授权", "", "授权有效期至：" + n);
    } else {
      YZB.log("未能获取到当前账户 " + c + " 的授权信息\n即将再次获取你的授权信息");
      YZB.msg("未获取到授权信息", "", "请重启应用或点击本条通知获取授权码", {
        "open-url": "https://napi.ltd/authPay?action=kuwo&user=" + c,
        "media-url": "https://file.napi.ltd/Static/Image/KuWo.png"
      });
    }
  } else {
    YZB.log("当前账户 " + c + " 已授权\n祝使用愉快！");
  }
}
function YZZ() {
  let d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  this.encode = function (f) {
    var g = "";
    var h;
    var j;
    var k;
    var l;
    var m;
    var n;
    var o;
    var p = 0;
    f = _utf8_encode(f);
    while (p < f.length) {
      h = f.charCodeAt(p++);
      j = f.charCodeAt(p++);
      k = f.charCodeAt(p++);
      l = h >> 2;
      m = (h & 3) << 4 | j >> 4;
      n = (j & 15) << 2 | k >> 6;
      o = k & 63;
      if (isNaN(j)) {
        n = o = 64;
      } else {
        if (isNaN(k)) {
          o = 64;
        }
      }
      g = g + d.charAt(l) + d.charAt(m) + d.charAt(n) + d.charAt(o);
    }
    return g;
  };
  this.decode = function (f) {
    {
      var o = "";
      var g;
      var h;
      var j;
      var k;
      var l;
      var m;
      var n;
      var p = 0;
      f = f.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (p < f.length) {
        k = d.indexOf(f.charAt(p++));
        l = d.indexOf(f.charAt(p++));
        m = d.indexOf(f.charAt(p++));
        n = d.indexOf(f.charAt(p++));
        g = k << 2 | l >> 4;
        h = (l & 15) << 4 | m >> 2;
        j = (m & 3) << 6 | n;
        o = o + String.fromCharCode(g);
        if (m != 64) {
          o = o + String.fromCharCode(h);
        }
        if (n != 64) {
          o = o + String.fromCharCode(j);
        }
      }
      o = _utf8_decode(o);
      return o;
    }
  };
  this.ntoc = function (f) {
    radix = e.length;
    qutient = +f;
    arr = [];
    do {
      mod = qutient % radix;
      qutient = (qutient - mod) / radix;
      arr.unshift(d[mod]);
    } while (qutient);
    return arr.join("");
  };
  this.cton = function (f) {
    radix = e.length;
    f = String(f);
    len = f.length;
    i = 0;
    origin_number = 0;
    while (i < len) {
      {
        origin_number += Math.pow(radix, i++) * d.indexOf(f.charAt(len - i) || 0);
      }
    }
    return origin_number;
  };
  this.randStr = function (f) {
    let g = "";
    for (let h = 0; h < f; h++) {
      let j = Math.floor(Math.random() * e.length);
      g += e[j];
    }
    return g;
  };
  _utf8_encode = function (f) {
    f = f.replace(/\r\n/g, "\n");
    var g = "";
    for (var h = 0; h < f.length; h++) {
      var j = f.charCodeAt(h);
      if (j < 128) {
        g += String.fromCharCode(j);
      } else {
        if (j > 127 && j < 2048) {
          g += String.fromCharCode(j >> 6 | 192);
          g += String.fromCharCode(j & 63 | 128);
        } else {
          {
            g += String.fromCharCode(j >> 12 | 224);
            g += String.fromCharCode(j >> 6 & 63 | 128);
            g += String.fromCharCode(j & 63 | 128);
          }
        }
      }
    }
    return g;
  };
  _utf8_decode = function (f) {
    var j = "";
    var l = 0;
    c1 = c2 = 0;
    var k = c1;
    while (l < f.length) {
      k = f.charCodeAt(l);
      if (k < 128) {
        j += String.fromCharCode(k);
        l++;
      } else {
        if (k > 191 && k < 224) {
          c2 = f.charCodeAt(l + 1);
          j += String.fromCharCode((k & 31) << 6 | c2 & 63);
          l += 2;
        } else {
          c2 = f.charCodeAt(l + 1);
          c3 = f.charCodeAt(l + 2);
          j += String.fromCharCode((k & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          l += 3;
        }
      }
    }
    return j;
  };
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      const i = new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
      return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
        setTimeout(() => {
          s(new Error("请求超时"));
        }, e);
      })]))(i, t.timeout) : i;
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          policy: "DIRECT",
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}