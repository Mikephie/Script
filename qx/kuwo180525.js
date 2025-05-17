//Sat May 17 2025 16:16:58 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("酷我音乐");
const {
  encrypt,
  decrypt,
  getVer,
  getInfo
} = Napi("影子");
const LocVer = "5.5.13";
const KuWo = $.toObj($.getval("KuWo")) || {};
let url = "undefined" !== typeof $request ? $request.url : "";
let body = "undefined" !== typeof $response ? $response.body : null;
let obj = $.toObj(body);
const urlHandlers = {
  playInfo: /mobi\.s\?f\=kwxs/,
  userInfo: /vip\/enc/,
  vipInfo: /vip\/v\d\/user\/vip/,
  bookVip: /(a\.p|v\d\/api\/(pay\/)?user\/info)/,
  musicInfo: /music\.pay\?newver\=\d$/,
  vipTheme: /(commercia\/)?vip\/(v\d\/theme\?op\=gd|(player\/getStyleListByModel|hanger\/wear))/,
  kwBookHome: /v\d\/api\/advert\/myPage/,
  bottomTab: /kuwo\/ui\/info$/,
  indexTopAd: /openapi\/v\d\/operate\/homePage/,
  myPageVipBox: /kuwopay\/personal\/cells/,
  bookPageAdBar: /api\/v\d\/pay\/app\/getConfigInfo/,
  bookPageAd: /openapi\/v\d\/tingshu\/index\/radio/,
  vipTabAd: /kuwopay\/vip-tab\/(setting|page\/cells)/,
  vipTabUserBox: /pay\/viptab\/index\.html/,
  bookListAd: /((openapi)?v\d\/(api\/pay\/payInfo\/kwplayer\/payMiniBar|app\/startup\/config)|basedata\.s)/,
  userInfoLabel: /mgxh\.s\?user/,
  payBox: /(sysinfo\?op\=getRePayAndDoPayBox(New)?&useNewHeadShow|openapi\/v\d\/recommend)/
};
const functions = {
  playInfo: playInfo,
  userInfo: userInfo,
  vipInfo: vipInfo,
  bookVip: bookVip,
  musicInfo: musicInfo,
  vipTheme: vipTheme,
  kwBookHome: kwBookHome,
  bottomTab: bottomTab,
  myPageVipBox: myPageVipBox,
  indexTopAd: indexTopAd,
  bookPageAdBar: bookPageAdBar,
  bookPageAd: bookPageAd,
  vipTabAd: vipTabAd,
  vipTabUserBox: vipTabUserBox,
  bookListAd: bookListAd,
  userInfoLabel: userInfoLabel,
  payBox: payBox
};
for (const [handler, regex] of Object.entries(urlHandlers)) {
  if (regex.test(url)) {
    (async () => {
      await functions[handler](handler);
    })().catch(a => {
      $.log("‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️", a.message);
    });
    break;
  }
}
async function playInfo(o) {
  try {
    {
      const {
        user,
        isVip,
        endTime,
        keys,
        PlayID,
        Song,
        ver
      } = KuWo;
      await getInfo(user, "kuwo");
      await getVer();
      if (isVip && new Date().getTime() < endTime && LocVer == ver && obj.code != 200) {
        const s = keys[Math.floor(Math.random() * keys.length)];
        const t = decrypt(s);
        const u = {
          br: 4000,
          url: "4000kflac"
        };
        const v = {
          br: 2000,
          url: "2000kflac"
        };
        const w = {
          br: 320,
          url: "320kmp3"
        };
        const x = {
          br: 192,
          url: "192kogg"
        };
        const y = {
          br: 128,
          url: "128kmp3"
        };
        const z = {
          br: 100,
          url: "100kaac"
        };
        const A = {
          br: 100,
          url: "100kogg"
        };
        const B = {
          br: 96,
          url: "96kwma"
        };
        const C = {
          br: 48,
          url: "48kaac"
        };
        let D = [u, v, w, x, y, z, A, B, C];
        let E = 0;
        if ("undefined" !== typeof $argument) {
          {
            let F;
            if ("object" === typeof $argument) {
              F = $argument.QS;
            } else {
              F = $argument;
            }
            switch (F) {
              case "无损音质":
                E = 1;
                break;
              case "超品音质":
                E = 2;
                break;
              case "高品音质":
                E = 4;
                break;
              default:
                E = 0;
            }
          }
        }
        if ("book" == Song) {
          E = 2;
        }
        D = D.slice(E).concat(D.slice(0, E));
        E = 0;
        while (D[E]) {
          const H = {
            url: "http://mobi.kuwo.cn/mobi.s?f=web&source=" + t + "&type=convert_url_with_sign&br=" + D[E].url + "&rid=" + PlayID
          };
          await $.http.get(H).then(I => {
            body = I.body;
            obj = $.toObj(body);
          });
          if (obj.data.bitrate == D[E].br) {
            break;
          }
          E++;
        }
      }
      const r = {
        body: body
      };
      $.done(r);
    }
  } catch (J) {
    throw new Error("处理" + o + "时发生错误：" + $.toStr(J));
  }
}
async function userInfo(c) {
  try {
    const g = new URL(url).searchParams;
    let h = g.get("uid");
    if ("number" !== typeof h) {
      h = url.replace(/.*?uid=(\d+).*/, "$1");
    }
    await getInfo(h, "kuwo");
    body = await $.http.get(url.replace(/uid=\d+/g, "uid=9")).then(j => j.body);
    const i = {
      body: body
    };
    $.done(i);
  } catch (j) {
    throw new Error("处理" + c + "时发生错误：" + $.toStr(j));
  }
}
async function vipInfo() {
  const g = {
    vipIcon: "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png",
    vipmIcon: "https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png",
    svipIcon: "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png",
    luxuryIcon: "https://h5s.kuwo.cn/upload/pictures/20250107/b81d9c5c7af42dc5ed6281fcbe19fcc7.png",
    growthValue: "9999",
    vipTag: "VIP7",
    openBtnText: KuWo.endTime && "超级会员" || "未授权",
    vipExpire: "" + KuWo.endTime,
    vipExpires: KuWo.endTime,
    vipmExpire: "" + KuWo.endTime,
    vip3Expire: "" + KuWo.endTime,
    vipLuxuryExpire: "" + KuWo.endTime,
    svipExpire: "" + KuWo.endTime,
    isYearUser: "2",
    biedSong: "1",
    vipmAutoPayUser: "1",
    svipAutoPayUser: "1"
  };
  Object.assign(obj.data, g);
  delete obj.data.iconJumpUrl;
  delete obj.data.adActUrl;
  body = $.toStr(obj);
  const h = {
    body: body
  };
  $.done(h);
}
async function bookVip(c) {
  try {
    if ("songs" in obj) {
      for (let i in obj.songs) {
        const j = obj.songs[i];
        const {
          id = body.replace(/.*?\"id\":(\d+).*/, "$1")
        } = j;
        if ("number" == typeof id) {
          {
            KuWo.PlayID = id;
            KuWo.Song = "book";
            $.setval($.toStr(KuWo), "KuWo");
            break;
          }
        }
      }
    }
    body = body.replace(/(policy|policytype)\":\d/g, "$1\":0").replace(/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g, "$1\":1").replace(/(end|endtime|vipExpires|bought_vip_end)\":\d+/g, "$1\":4077187200");
    const g = {
      body: body
    };
    $.done(g);
  } catch (l) {
    throw new Error("处理" + c + "时发生错误：" + $.toStr(l));
  }
}
async function musicInfo(c) {
  try {
    if ("songs" in obj && Array.isArray(obj.songs)) {
      const {
        id = body.replace(/.*?\"id\":(\d+).*/, "$1")
      } = obj.songs[0];
      KuWo.PlayID = parseInt(id);
      KuWo.Song = "music";
      $.setval($.toStr(KuWo), "KuWo");
      obj.songs[0].audio.forEach(h => {
        if (undefined !== h.opid) {
          h.st = 0;
        }
      });
    }
    body = $.toStr(obj);
    const g = {
      body: body
    };
    $.done(g);
  } catch (h) {
    {
      throw new Error("处理" + c + "时发生错误：" + $.toStr(h));
    }
  }
}
async function vipTheme() {
  if ("vipTheme" in obj.data) {
    obj.data.vipTheme.type = "free";
    delete obj.data.needBieds;
    body = $.toStr(obj);
  } else {
    if ("needBied" in obj.data) {
      const h = {
        requestUrl: "",
        btnText: null,
        rightStatus: 1,
        requestUrlType: 1
      };
      Object.assign(obj.data.needBied, h);
      body = $.toStr(obj);
    } else {
      body = body.replace(/\"(paymentType)\":\d/g, "\"$1\":0").replace(/(umpUrl)\":\".*?\"/g, "$1\":\"\"");
    }
  }
  const f = {
    body: body
  };
  $.done(f);
}
async function kwBookHome() {
  const d = {
    scheme: null,
    title: "酷我畅听",
    url: null,
    subTitle: "畅听服务由影子提供"
  };
  Object.assign(obj.data, d);
  body = $.toStr(obj);
  const e = {
    body: body
  };
  $.done(e);
}
async function bottomTab() {
  const d = {
    bottomLiveTab: "0",
    netEarn: "0"
  };
  Object.assign(obj.data.mapTestInfo.bottomTabTestForUser.mapParams, d);
  Object.assign(obj.data.mapTestInfo.bottomTabTest.mapParams, d);
  body = $.toStr(obj);
  const e = {
    body: body
  };
  $.done(e);
}
async function myPageVipBox() {
  delete obj.data.list[0].route;
  delete obj.data.list[0].description;
  obj.data.list[0].title = "我的会员";
  obj.data.list[1].title = "账户未授权";
  obj.data.list[1].description = "点击获取授权";
  obj.data.list[1].route.params.url = "https://yingzi-0gwxqpln4f7a7fda-1251393964.ap-shanghai.app.tcloudbase.com/authPay?action=kuwo&user=" + KuWo.user;
  if (KuWo.endTime) {
    obj.data.list[1].title = "授权至：";
    obj.data.list[1].description = $.time("yyyy-MM-dd", KuWo.endTime);
    obj.data.list[1].route.params.url = "https://t.me/Napi_Group";
  }
  body = $.toStr(obj);
  const e = {
    body: body
  };
  $.done(e);
}
async function indexTopAd() {
  let b = ["发现", "推荐", "听书", "看短剧"];
  let c = 0;
  while (obj.data.homeTop[c]) {
    if (!b.includes(obj.data.homeTop[c].title)) {
      delete obj.data.homeTop[c];
    }
    c++;
  }
  body = $.toStr(obj);
  const d = {
    body: body
  };
  $.done(d);
}
async function bookPageAdBar() {
  const e = h => {
    for (let i in h) {
      if (typeof h[i] === "string") {
        if (i.includes("btnText")) {
          h[i] = KuWo.endTime && "超级会员" || "未授权";
        }
        if (i.includes("icon")) {
          h[i] = "https://h5s.kuwo.cn/upload/pictures/20250107/b81d9c5c7af42dc5ed6281fcbe19fcc7.png";
        }
        if (i.includes("Url")) {
          h[i] = null;
        }
      } else {
        if (typeof h[i] === "object" && h[i] !== null) {
          e(h[i]);
        }
      }
    }
  };
  const f = (h, i = []) => {
    if (typeof i === "string") {
      i = [i];
    }
    for (let l in h) {
      if (!i.includes(l)) {
        delete h[l];
      }
    }
  };
  if ("data" in obj) {
    const h = ["subConfigType", "tsAdBarInfoV2"];
    f(obj.data, h);
    f(obj.data.tsAdBarInfoV2, "tsHomeWeex");
    e(obj.data);
  }
  body = $.toStr(obj);
  const g = {
    body: body
  };
  $.done(g);
}
async function bookPageAd() {
  let e = ["小焦点", "免费模式", "看广告"];
  let f = 0;
  while (obj.data.child[f]) {
    if (e.some(h => obj.data.child[f].label.includes(h))) {
      delete obj.data.child[f].child;
    }
    f++;
  }
  body = $.toStr(obj);
  const g = {
    body: body
  };
  $.done(g);
}
async function vipTabAd() {
  if ("tab" in obj.data) {
    obj.data.tab.vipTypes[0].topics[0].url = "https://h5app.kuwo.cn/pay/viptab/index.html";
    let f = 1;
    while (obj.data.tab.vipTypes[0].topics[f]) {
      delete obj.data.tab.vipTypes[0].topics[f];
      f++;
    }
  } else {
    if (Array.isArray(obj.data)) {
      let j = ["顶部轮播", "会员福利"];
      let k = 0;
      while (obj.data[k]) {
        if (j.some(l => obj.data[k].title.includes(l))) {
          delete obj.data[k].data;
        }
        k++;
      }
    }
  }
  body = $.toStr(obj);
  const e = {
    body: body
  };
  $.done(e);
}
async function vipTabUserBox() {
  if (body) {
    {
      body = body.replace("</body>", "<script>function startChecking(){let interval=setInterval(()=>{const elements=document.getElementsByClassName('container');if(elements&&elements.length>0){const d=elements[0];if(window.getComputedStyle(d).display!=='none'){d.style.display='none';}}},100);return interval;}let intervalId;document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){clearInterval(intervalId);}else if(document.visibilityState==='visible'){intervalId=startChecking();}});document.addEventListener('DOMContentLoaded',()=>{intervalId=startChecking();});</script></body>");
    }
  }
  const e = {
    body: body
  };
  $.done(e);
}
async function bookListAd() {
  const e = ["data", "dataV2", "child_level_info", "operational_resources"];
  e.forEach(g => {
    {
      if (g in obj) {
        {
          delete obj[g];
        }
      }
    }
  });
  body = $.toStr(obj);
  const f = {
    body: body
  };
  $.done(f);
}
async function userInfoLabel() {
  if (body) {
    body = body.replace(/<section[^>]*?><userinfolabel[^>]*?><\/userinfolabel><\/section>/, "").replace(/<section[^>]*?><ad[^>]*?><\/ad><\/section>/g, "");
  }
  const b = {
    body: body
  };
  $.done(b);
}
async function payBox(c) {
  const f = h => {
    for (let i in h) {
      if (typeof h[i] === "string") {
        h[i] = null;
      } else {
        if (typeof h[i] === "object" && h[i] !== null) {
          f(h[i]);
        }
      }
    }
  };
  if ("child" in obj) {
    {
      body = body.replace(/\"(btnTipText|jumpUrl|tipText)\":\".*?\"/g, "\"$1\":null");
    }
  } else {
    f(obj);
    body = $.toStr(obj);
  }
  const g = {
    body: body
  };
  $.done(g);
}
function Napi(e = "YingZi") {
  const k = p => {
    let s = new TextEncoder().encode(p);
    let t = new TextEncoder().encode(e);
    let u = new Uint8Array(s.length);
    for (let v = 0; v < s.length; v++) {
      {
        let x = s[v] ^ t[v % t.length];
        while (x >= 256) {
          x %= 256;
        }
        u[v] = x;
      }
    }
    return btoa(String.fromCharCode(...u));
  };
  const l = p => {
    let q = new TextEncoder().encode(e);
    let r = new Uint8Array(atob(p).split("").map(t => t.charCodeAt(0)));
    let s = new Uint8Array(r.length);
    for (let t = 0; t < r.length; t++) {
      let u = r[t] ^ q[t % q.length];
      while (u >= 256) {
        u %= 256;
      }
      s[t] = u;
    }
    return new TextDecoder().decode(s);
  };
  const m = async () => {
    let p = "https://napi.ltd/getVer";
    let q = await $.http.get(p).then(s => s.body);
    let r = $.toObj(q);
    if (LocVer != r.kuwo) {
      $.msg("需要更新 -> 请更新你的脚本！");
    }
    KuWo.ver = r.kuwo;
    $.setval($.toStr(KuWo), "KuWo");
  };
  const n = async (p, q) => {
    let s = "type=" + q + "&user=" + p;
    if (!KuWo.user || p != KuWo.user || !KuWo.endTime || new Date().getTime() > KuWo.endTime || !KuWo.keys || KuWo.ver !== LocVer) {
      $.log("正在获取 " + p + " 的授权信息…");
      const t = {
        url: "https://yingzi-0gwxqpln4f7a7fda-1251393964.ap-shanghai.app.tcloudbase.com/getInfo",
        body: s
      };
      let u = $.toObj(await $.http.post(t).then(v => v.body));
      for (let v in u) {
        if (u.hasOwnProperty(v)) {
          KuWo[v] = u[v];
        }
      }
      $.setval($.toStr(KuWo), "KuWo");
      $.log("数据获取完成...");
      if (u.isVip) {
        let w = $.time("yyyy-MM-dd HH:mm", KuWo.endTime);
        if (LocVer != KuWo.ver) {
          w += "\n需要更新 -> 请更新你的脚本！";
        }
        $.log("当前账户 " + p + " 已授权\n授权有效期至：" + w);
        $.msg("当前账户 " + p + " 已授权", "", "授权有效期至：" + w);
      } else {
        $.log("未能获取到当前账户 " + p + " 的授权信息\n即将再次获取你的授权信息");
        const y = {
          "open-url": "kwapp://open?t=27&u=https%3A%2F%2Fyingzi-0gwxqpln4f7a7fda-1251393964.ap-shanghai.app.tcloudbase.com%2FauthPay%3Faction%3Dkuwo%26user%3D" + p,
          "media-url": "https://file.napi.ltd/Static/Image/KuWo.png"
        };
        $.msg("未获取到授权信息", "", "请重启应用或点击本条通知获取授权码", y);
      }
    } else {
      $.log("当前账户 " + p + " 已授权\n祝使用愉快！");
    }
  };
  const o = {
    encrypt: k,
    decrypt: l,
    getVer: m,
    getInfo: n
  };
  return o;
}
