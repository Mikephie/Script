/****************************

#!name = 酷我音乐 & 酷我畅听
#!desc = 〔 酷我音乐&酷我畅听 〕全功能破解
#!author = 影子[https://www.napi.ltd]
#!homepage = https://napi.ltd
#!openUrl = https://napi.ltd
#!tag = 会员
#!loon_version = 3.2.3(762)
#!icon = https://static.napi.ltd/Image/KuWo.png
#!date = 2025-01-05


[Rule]
USER-AGENT,KWPlayer*,🇨🇳回国策略
HOST-SUFFIX,kuwo.cn,🇨🇳回国策略


[Script]
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic)|app/newMenuList/menuListInfo|tingshu/index/radio|operate/homePage)|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/kuwomod.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png


[Mitm]
hostname = *.kuwo.cn

****************************/


const $ = new Env("酷我音乐");
const NC = new NapiCode();
const Play_URL = "/mobi.s?f=kwxs";
const KuWo_Down = "/music.pay?newver=3";
const KuWo_Book = RegExp(/(a\.p|v\d\/api\/(user\/personal\/)?user\/info)/);
const KuWo_Enc = "/vip/enc";
const KuWo_Vip = RegExp(/(vip\/)?v\d\/(api(\/pay)?\/user\/info|user\/vip)/);
const KuWo_Theme = RegExp(/vip\/v\d\/theme\?op\=gd/);
const Book_Home = RegExp(/v\d\/api\/advert\/myPage/);
const KuWo_AD = RegExp(/(v\d\/api\/advert\/(iListen|album)|openapi\/v\d\/album\/adBar|(\/EcomResource|\/(Mobile)?Ad)Serv(er|ice))/);
const KuWo_ListAD = RegExp(/vip\/v\d\/sysinfo\?op\=getRePayAndDoPayBoxNew/);
const KuWo_BookAD = RegExp(/v\d\/api\/pay\/payInfo\/kwplayer\/payMiniBar/);
const KuWo_BookPageAD = RegExp(/openapi\/v\d\/tingshu\/index\/radio/);
const KuWo_TabAD = "/kuwopay/vip-tab/setting";
const KuWo_MenuAD = RegExp(/openapi\/v\d\/app\/newMenuList\/menuListInfo/);
const KuWo_HomeAD = RegExp(/openapi\/v\d\/album\/myRec\/vipMusic/);
const KuWo_HomeTopAD = RegExp(/openapi\/v\d\/operate\/homePage/);
const KuWo = $.toObj($.getval("KuWo")) || {};
const LocVer = "5.1.6";
var url = "undefined" !== typeof $request ? $request.url : "";
var body = "undefined" !== typeof $response ? $response.body : null;
let obj = $.toObj(body);
if (url.indexOf(Play_URL) != -1) {
  let keys = KuWo.keys;
  let key = keys[Math.floor(Math.random() * keys.length)];
  let arr = [];
  key.forEach((a, b) => {
    arr[b] = NC.ntoc(a);
  });
  let UserID = KuWo.user;
  let PlayID = KuWo.PlayID;
  let PlayUrl = arr.join("_");
  let Song = KuWo.Song;
  let Ver = KuWo.ver;
  let rid = body.replace(/.*?\"rid\":(\d+).*/, "$1");
  !(async () => {
    await getInfo(UserID, "kuwo");
    await getVer();
    if (KuWo.isVip && new Date().getTime() < KuWo.endTime && LocVer == Ver && rid != PlayID) {
      const g = {
        br: 4000,
        url: "4000kflac"
      };
      const h = {
        br: 2000,
        url: "2000kflac"
      };
      const j = {
        br: 320,
        url: "320kmp3"
      };
      let k = [g, h, j];
      let l = 0;
      if ("book" == Song) {
        l = 2;
      }
      while (k[l]) {
        const m = {
          url: "http://mobi.kuwo.cn/mobi.s?f=web&source=" + PlayUrl + "&type=convert_url_with_sign&br=" + k[l].url + "&rid=" + PlayID
        };
        await $.http.get(m).then(n => {
          body = n.body;
          obj = $.toObj(body);
        });
        if (obj.data.bitrate == k[l].br) {
          break;
        }
        l++;
      }
    }
    KuWo.PlayID = "";
    $.setval($.toStr(KuWo), "KuWo");
    const f = {
      body: body
    };
    $.done(f);
  })();
}
if (url.endsWith(KuWo_Down)) {
  if (obj.hasOwnProperty("songs")) {
    id = obj.songs[0].id;
    if ("number" !== typeof id) {
      id = body.replace(/.*?\"id\":(\d+).*/, "$1");
    }
    KuWo.PlayID = id;
    KuWo.Song = "music";
    $.setval($.toStr(KuWo), "KuWo");
    obj.songs[0].audio.forEach(a => a.st = 0);
  }
  let tmp = obj.songs[0].audio[0].policy;
  obj.user[0] = {
    pid: obj.songs[0].audio[0].pid,
    type: tmp,
    name: tmp + "_1",
    categray: tmp + "_1",
    id: obj.songs[0].id,
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
    price: obj.songs[0].audio[0].price,
    period: 1000,
    feetype: 0,
    info: obj.songs[0]
  };
  body = $.toStr(obj);
  const KuWoLg = {
    body: body
  };
  $.done(KuWoLg);
}
if (url.match(KuWo_Book)) {
  if (obj.hasOwnProperty("songs")) {
    for (let key in obj.songs) {
      id = obj.songs[key].id;
      if ("number" !== typeof id) {
        id = body.replace(/.*?\"id\":(\d+).*/, "$1");
      }
      if ("number" == typeof id) {
        KuWo.PlayID = id;
        KuWo.Song = "book";
        $.setval($.toStr(KuWo), "KuWo");
        break;
      }
    }
  }
  body = body.replace(/(policy|policytype)\":\d/g, "$1\":0").replace(/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g, "$1\":1").replace(/(end|endtime|vipExpires)\":\d+/g, "$1\":4077187200");
  const KuWoLh = {
    body: body
  };
  $.done(KuWoLh);
}
if (url.indexOf(KuWo_Enc) != -1) {
  !(async () => {
    let b = new URL(url).searchParams;
    let c = b.get("uid");
    if ("number" !== typeof c) {
      c = url.replace(/.*?uid=(\d+).*/, "$1");
    }
    await getInfo(c, "kuwo");
    let d = await $.http.get(url.replace(/uid=\d+/g, "uid=238581279")).then(f => f.body);
    const e = {
      body: d
    };
    $.done(e);
  })();
}
if (url.match(KuWo_Vip)) {
  obj.data.vipIcon = "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png";
  delete obj.data.iconJumpUrl;
  delete obj.data.adActUrl;
  obj.data.growthValue = "9999";
  obj.data.vipTag = "VIP7";
  obj.data.vipmIcon = "https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png";
  obj.data.svipIcon = "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png";
  obj.data.openBtnText = "永久会员";
  obj.data.vipExpire = "4077187200315";
  obj.data.vipExpires = 4077187200315;
  obj.data.luxuryIcon = "https://image.kuwo.cn/fe/2fae68ff-de2d-4473-bf28-8efc29e44968vip.png";
  obj.data.vipmExpire = "4077187200315";
  obj.data.vipLuxuryExpire = "4077187200315";
  obj.data.svipExpire = "4077187200315";
  obj.data.isYearUser = "2";
  obj.data.biedSong = "1";
  obj.data.svipAutoPayUser = "1";
  body = $.toStr(obj);
  const KuWoLj = {
    body: body
  };
  $.done(KuWoLj);
}
if (url.match(KuWo_Theme)) {
  obj.data.vipTheme.type = "free";
  delete obj.data.needBieds;
  body = $.toStr(obj);
  const KuWoLk = {
    body: body
  };
  $.done(KuWoLk);
}
if (url.match(Book_Home)) {
  obj.data.scheme = null;
  obj.data.title = "酷我畅听";
  obj.data.url = null;
  obj.data.subTitle = "畅听服务由影子提供";
  body = $.toStr(obj);
  const KuWoLl = {
    body: body
  };
  $.done(KuWoLl);
}
if (url.match(KuWo_AD)) {
  body = "YingZi";
  const KuWoLm = {
    body: body
  };
  $.done(KuWoLm);
}
if (url.match(KuWo_ListAD)) {
  delete obj.data.songListTopContext;
  body = $.toStr(obj);
  const KuWoLn = {
    body: body
  };
  $.done(KuWoLn);
}
if (url.match(KuWo_BookAD)) {
  delete obj.data;
  delete obj.dataV2;
  body = $.toStr(obj);
  const KuWoLo = {
    body: body
  };
  $.done(KuWoLo);
}
if (url.match(KuWo_BookPageAD)) {
  let i = 0;
  while (obj.data.child[i]) {
    if (/^小焦点/.test(obj.data.child[i].label)) {
      delete obj.data.child[i].child;
    }
    i++;
  }
  body = $.toStr(obj);
  const KuWoLp = {
    body: body
  };
  $.done(KuWoLp);
}
if (url.indexOf(KuWo_TabAD) != -1) {
  if ("undefined" !== typeof obj.data.tab.vipTypes[0]) {
    let i = 1;
    while (obj.data.tab.vipTypes[0].topics[i]) {
      delete obj.data.tab.vipTypes[0].topics[i];
      i++;
    }
  }
  body = $.toStr(obj);
  const KuWoLq = {
    body: body
  };
  $.done(KuWoLq);
}
if (url.match(KuWo_MenuAD)) {
  if (obj.hasOwnProperty("data")) {
    delete obj.data;
  }
  body = $.toStr(obj);
  const KuWoLr = {
    body: body
  };
  $.done(KuWoLr);
}
if (url.match(KuWo_HomeAD)) {
  delete obj.data.listenSomething;
  body = $.toStr(obj);
  const KuWoLs = {
    body: body
  };
  $.done(KuWoLs);
}
if (url.match(KuWo_HomeTopAD)) {
  let Tops = ["发现", "推荐", "听书", "看短剧"];
  let i = 0;
  while (obj.data.homeTop[i]) {
    if (!Tops.includes(obj.data.homeTop[i].title)) {
      delete obj.data.homeTop[i];
    }
    i++;
  }
  body = $.toStr(obj);
  const KuWoLt = {
    body: body
  };
  $.done(KuWoLt);
}
async function getVer() {
  url = "https://sharechain.qq.com/cfa48d8b4551a20d5e6c016bdf3823ff";
  info = await $.http.get(url).then(a => a.body);
  info = info.match(/<article class=\"note-body\">([\s\S]*?)<\/article>/);
  res = info[1].replace(/(\s|<.*?>)/g, "");
  obj = $.toObj(res);
  if (LocVer != obj.kuwo) {
    $.msg("需要更新 -> 请更新你的脚本！");
  }
  KuWo.ver = obj.kuwo;
  $.setval($.toStr(KuWo), "KuWo");
}
async function getInfo(c, d) {
  let e = "type=" + d + "&user=" + c;
  if (!KuWo.user || c != KuWo.user || !KuWo.endTime || new Date().getTime() > KuWo.endTime || !KuWo.keys) {
    $.log("正在获取 " + c + " 的授权信息…");
    const f = {
      url: "https://napi.ltd/getInfo",
      body: e
    };
    let g = $.toObj(await $.http.post(f).then(h => h.body));
    for (let h in g) {
      if (g.hasOwnProperty(h)) {
        KuWo[h] = g[h];
      }
    }
    $.setval($.toStr(KuWo), "KuWo");
    $.log("数据获取完成...");
    if (g.isVip) {
      let j = new Date(KuWo.endTime);
      let k = j.getFullYear() + "-" + (j.getMonth() < 10 ? "0" + (j.getMonth() + 1) : j.getMonth() + 1) + "-" + (j.getDate() < 10 ? "0" + j.getDate() : j.getDate());
      $.log("当前账户 " + c + " 已授权\n授权有效期至：" + k);
      $.msg("当前账户 " + c + " 已授权", "", "授权有效期至：" + k);
    } else {
      $.log("未能获取到当前账户 " + c + " 的授权信息\n即将再次获取你的授权信息");
      const l = {
        "open-url": "https://napi.ltd/authPay?action=kuwo&user=" + c,
        "media-url": "https://file.napi.ltd/Static/Image/KuWo.png"
      };
      $.msg("未获取到授权信息", "", "请重启应用或点击本条通知获取授权码", l);
    }
  } else {
    $.log("当前账户 " + c + " 已授权\n祝使用愉快！");
  }
}
function NapiCode() {
  let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  this.encode = function (c) {
    var d = "";
    var e;
    var f;
    var g;
    var h;
    var j;
    var k;
    var l;
    var m = 0;
    c = _utf8_encode(c);
    while (m < c.length) {
      e = c.charCodeAt(m++);
      f = c.charCodeAt(m++);
      g = c.charCodeAt(m++);
      h = e >> 2;
      j = (e & 3) << 4 | f >> 4;
      k = (f & 15) << 2 | g >> 6;
      l = g & 63;
      if (isNaN(f)) {
        k = l = 64;
      } else {
        if (isNaN(g)) {
          l = 64;
        }
      }
      d = d + a.charAt(h) + a.charAt(j) + a.charAt(k) + a.charAt(l);
    }
    return d;
  };
  this.decode = function (c) {
    var d = "";
    var e;
    var f;
    var g;
    var h;
    var j;
    var k;
    var l;
    var m = 0;
    c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (m < c.length) {
      h = a.indexOf(c.charAt(m++));
      j = a.indexOf(c.charAt(m++));
      k = a.indexOf(c.charAt(m++));
      l = a.indexOf(c.charAt(m++));
      e = h << 2 | j >> 4;
      f = (j & 15) << 4 | k >> 2;
      g = (k & 3) << 6 | l;
      d = d + String.fromCharCode(e);
      if (k != 64) {
        d = d + String.fromCharCode(f);
      }
      if (l != 64) {
        d = d + String.fromCharCode(g);
      }
    }
    d = _utf8_decode(d);
    return d;
  };
  this.ntoc = function (c) {
    radix = b.length;
    qutient = +c;
    arr = [];
    do {
      mod = qutient % radix;
      qutient = (qutient - mod) / radix;
      arr.unshift(a[mod]);
    } while (qutient);
    return arr.join("");
  };
  this.cton = function (c) {
    radix = b.length;
    c = String(c);
    len = c.length;
    i = 0;
    origin_number = 0;
    while (i < len) {
      origin_number += Math.pow(radix, i++) * a.indexOf(c.charAt(len - i) || 0);
    }
    return origin_number;
  };
  this.randStr = function (c) {
    let d = "";
    for (let e = 0; e < c; e++) {
      let f = Math.floor(Math.random() * b.length);
      d += b[f];
    }
    return d;
  };
 