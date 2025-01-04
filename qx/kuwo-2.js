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

^https?:\/\/(?:musicpay|nmobi|vip1|audiobookpay|tingshu)\.kuwo\.cn\/(?:music\.pay\?newver=\d+|mobi.s\?f=kwxs|vip\/(?:enc\/user\/vip\?op=ui&uid=|v2\/theme\?op=gd)|a\.p|v2\/api\/pay\/user\/info) url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/kuwo-2.js
******************************************/


//Sat Jan 04 2025 00:10:50 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function d(q) {
    var s = {
      FPlRl: function (v, w) {
        return v === w;
      },
      qZmZO: function (v, w) {
        return v(w);
      },
      xGQkA: function (v, w, x, y, z) {
        return v(w, x, y, z);
      },
      SBrUn: "throw",
      cBxYD: function (v, w) {
        return v === w;
      },
      GVeAN: "GjXNe",
      VvFGh: function (v, w) {
        return v == w;
      },
      GdWVF: function (v, w) {
        return v === w;
      },
      AEvsX: "symbol"
    };
    {
      d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (w) {
        return typeof w;
      } : function (w) {
        {
          return w && "function" == typeof Symbol && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
        }
      };
      return d(q);
    }
  }
  function f() {
    "use strict";

    var q = {
      fRDXI: "4|0|1|5|2|3",
      PEKxn: function (ae, af, ag) {
        return ae(af, ag);
      },
      crmsS: function (ae, af) {
        return ae !== af;
      },
      uWTbh: "return",
      NvFiM: function (ae, af, ag, ah) {
        return ae(af, ag, ah);
      },
      OiUVS: "next",
      PjqZy: function (ae, af) {
        return ae !== af;
      },
      KMskP: "GLOtI",
      IwQUF: "EAWqo",
      PxTJO: "FxylJ",
      YZmjy: function (ae, af) {
        return ae in af;
      },
      GqBdB: function (ae, af) {
        return ae(af);
      },
      kkkzx: "normal",
      XkJLn: function (ae, af) {
        return ae instanceof af;
      },
      HWDVb: "_invoke",
      FDRvH: function (ae, af, ag, ah) {
        return ae(af, ag, ah);
      },
      xGsOc: function (ae, af) {
        return ae == af;
      },
      czSDT: function (ae, af) {
        return ae === af;
      },
      KKTrA: "symbol",
      VZkhT: "kTvpH",
      SLbpg: function (ae, af) {
        return ae(af);
      },
      LYCuh: "try statement without catch or finally",
      Gixcg: function (ae, af) {
        return ae(af);
      },
      fOzSn: function (ae, af) {
        return ae === af;
      },
      cNjZD: "SLDPk",
      oGNIa: function (ae, af, ag, ah) {
        return ae(af, ag, ah);
      },
      LUwMb: function (ae, af) {
        return ae === af;
      },
      YLEOE: "throw",
      RdTTf: function (ae, af) {
        return ae === af;
      },
      OxUcI: "XaTNg",
      viUFd: function (ae, af, ag, ah, ai) {
        return ae(af, ag, ah, ai);
      },
      UwnZg: "ZkIeL",
      wwlyg: "Flddz",
      nLGcU: "Oxqzp",
      RQNRx: "uuzqw",
      lKhgY: "IjHHf",
      gKHKX: function (ae, af) {
        return ae == af;
      },
      GyFcs: "object",
      VHixi: "__await",
      bCXqL: "Jifvf",
      EoSWz: function (ae, af, ag, ah, ai) {
        return ae(af, ag, ah, ai);
      },
      TWiXg: "HrZfO",
      UPUHU: function (ae, af, ag) {
        return ae(af, ag);
      },
      MJxin: function (ae, af, ag, ah, ai) {
        return ae(af, ag, ah, ai);
      },
      hJJbB: function (ae, af) {
        return ae !== af;
      },
      btRXY: "ZntNU",
      ngvzE: function (ae) {
        return ae();
      },
      iDNVf: function (ae, af) {
        return ae !== af;
      },
      KVxvs: "bvqry",
      TRBPm: function (ae, af) {
        return ae in af;
      },
      YWiWc: function (ae, af) {
        return ae == af;
      },
      EzMeW: function (ae, af) {
        return ae(af);
      },
      grYcM: "wfJaW",
      NKDUI: "Generator is already running",
      yKVWh: function (ae, af) {
        return ae === af;
      },
      cXmjw: "iSekA",
      FwAga: "ioHBS",
      MwoCh: "rrcOI",
      WCeBd: function (ae, af) {
        return ae === af;
      },
      sMqFB: "WZico",
      ormyM: "SleMG",
      mJJGw: function (ae, af) {
        return ae !== af;
      },
      HgYuN: "CMhbh",
      elVxl: function (ae, af) {
        return ae === af;
      },
      usyiO: "njoQk",
      EEXaF: function (ae, af) {
        return ae === af;
      },
      AhkkM: function (ae, af) {
        return ae === af;
      },
      EJcBb: function (ae, af) {
        return ae < af;
      },
      liGAG: function (ae, af) {
        return ae === af;
      },
      rovqz: "GLInR",
      OquUt: function (ae, af) {
        return ae in af;
      },
      KHSsW: function (ae, af) {
        return ae === af;
      },
      BRVnC: "ZCFRe",
      udZhL: "XJxmP",
      twjfe: "(((.+)+)+)+$",
      AdLgO: function (ae, af, ag, ah, ai, aj, ak, al) {
        return ae(af, ag, ah, ai, aj, ak, al);
      },
      SscDE: "zHSUI",
      XhEXI: "root",
      wfZrf: "vziWg",
      IeJKS: "break",
      bHWOY: function (ae, af) {
        return ae === af;
      },
      PVewI: function (ae, af) {
        return ae === af;
      },
      DNiyb: "end",
      ntSat: function (ae, af) {
        return ae === af;
      },
      dpfaX: function (ae, af) {
        return ae === af;
      },
      YnqKH: function (ae, af) {
        return ae === af;
      },
      mQeHK: "wobtx",
      GMEYt: function (ae, af) {
        return ae === af;
      },
      QdfUQ: "neKSl",
      yflXL: "mxwZm",
      MOkan: function (ae, af) {
        return ae === af;
      },
      MOhXV: function (ae, af) {
        return ae(af);
      },
      AOoBv: "eJIIf",
      BZJbR: "CcbXv",
      LAaVA: function (ae, af) {
        return ae(af);
      },
      QVIEM: function (ae, af, ag, ah, ai) {
        return ae(af, ag, ah, ai);
      },
      khglp: function (ae, af) {
        return ae !== af;
      },
      xEffm: "yxwuO",
      gkWGk: "[object Generator]",
      xozTN: function (ae, af) {
        return ae(af);
      },
      mvCWV: "function",
      zdQZT: " is not iterable",
      vOEBC: function (ae, af, ag, ah, ai, aj, ak, al) {
        return ae(af, ag, ah, ai, aj, ak, al);
      },
      xDzvs: "WjBQJ",
      QGihh: "OCkXJ",
      xQbPB: "NZLwC",
      IuLXd: function (ae, af) {
        return ae(af);
      },
      bNnhM: function (ae, af) {
        return ae <= af;
      },
      fTTKH: "XDQbF",
      doAed: "catchLoc",
      loYjK: "finallyLoc",
      gHFqX: function (ae, af) {
        return ae && af;
      },
      lPlsO: "ZDMKV",
      hgcEh: function (ae, af) {
        return ae < af;
      },
      dwxBD: "soShb",
      ozZES: "TQlPQ",
      ZgMDn: function (ae, af) {
        return ae < af;
      },
      xtzxo: "MGrRp",
      ntaru: function (ae, af) {
        return ae !== af;
      },
      rlQki: "xNVJv",
      RqxUh: function (ae, af) {
        return ae - af;
      },
      OBveN: function (ae, af) {
        return ae !== af;
      },
      UkImx: "xohVN",
      WHuHo: "fKhMc",
      CPTcr: function (ae, af) {
        return ae < af;
      },
      qxSNO: "poSdH",
      sUeGA: function (ae, af) {
        return ae === af;
      },
      yjvXb: "continue",
      FkWve: function (ae, af) {
        return ae <= af;
      }
    };
    f = function () {
      var ae = {
        iETEF: "4|0|1|5|2|3",
        ZMURs: function (af, ag) {
          return af === ag;
        },
        jtyWN: "throw",
        CCHwy: function (af, ag, ah) {
          return af(ag, ah);
        },
        BfZjH: function (af, ag) {
          return af !== ag;
        },
        UpAjY: "return",
        gnLQj: function (af, ag) {
          return af + ag;
        },
        Rdxwm: "' method",
        BpyvQ: function (af, ag, ah, ai) {
          return af(ag, ah, ai);
        },
        KSuNL: "next",
        gLGjt: function (af, ag) {
          return af === ag;
        }
      };
      {
        return A;
      }
    };
    var z;
    var A = {};
    var B = Object.prototype;
    var D = B.hasOwnProperty;
    var G = Object.defineProperty || function (ae, af, ag) {
      {
        ae[af] = ag.value;
      }
    };
    var H = "function" == typeof Symbol ? Symbol : {};
    var I = H.iterator || "@@iterator";
    var J = H.asyncIterator || "@@asyncIterator";
    var K = H.toStringTag || "@@toStringTag";
    function M(ae, af, ag) {
      Object.defineProperty(ae, af, {
        value: ag,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return ae[af];
    }
    try {
      {
        M({}, "");
      }
    } catch (af) {
      {
        M = function (ah, ai, aj) {
          return ah[ai] = aj;
        };
      }
    }
    function P(ah, ai, aj, ak) {
      {
        var am = ai && ai.prototype instanceof Z ? ai : Z;
        var an = Object.create(am.prototype);
        var ao = new ac(ak || []);
        G(an, "_invoke", {
          value: a8(ah, aj, ao)
        });
        return an;
      }
    }
    function Q(ah, ai, aj) {
      {
        try {
          {
            return {
              type: "normal",
              arg: ah.call(ai, aj)
            };
          }
        } catch (am) {
          return {
            type: "throw",
            arg: am
          };
        }
      }
    }
    A.wrap = P;
    var R = "suspendedStart";
    var V = "suspendedYield";
    var W = "executing";
    var X = "completed";
    var Y = {};
    function Z() {}
    function a0() {}
    function a1() {}
    var a2 = {};
    M(a2, I, function () {
      return this;
    });
    var a3 = Object.getPrototypeOf;
    var a4 = a3 && a3(a3(ad([])));
    a4 && a4 !== B && D.call(a4, I) && (a2 = a4);
    a1.prototype = Z.prototype = Object.create(a2);
    var a5 = a1.prototype;
    function a6(ah) {
      {
        ["next", "throw", "return"].forEach(function (aj) {
          {
            M(ah, aj, function (al) {
              {
                return this._invoke(aj, al);
              }
            });
          }
        });
      }
    }
    function a7(ah, ai) {
      {
        function am(an, ao, ap, aq) {
          {
            var as = Q(ah[an], ah, ao);
            if ("throw" !== as.type) {
              {
                var at = as.arg;
                var au = at.value;
                return au && "object" == d(au) && D.call(au, "__await") ? ai.resolve(au.__await).then(function (ax) {
                  {
                    am("next", ax, ap, aq);
                  }
                }, function (ax) {
                  {
                    am("throw", ax, ap, aq);
                  }
                }) : ai.resolve(au).then(function (ax) {
                  {
                    at.value = ax;
                    ap(at);
                  }
                }, function (ax) {
                  {
                    return am("throw", ax, ap, aq);
                  }
                });
              }
            }
            aq(as.arg);
          }
        }
        var ak;
        G(this, "_invoke", {
          value: function (an, ao) {
            {
              function ar() {
                {
                  return new ai(function (au, av) {
                    {
                      am(an, ao, au, av);
                    }
                  });
                }
              }
              return ak = ak ? ak.then(ar, ar) : ar();
            }
          }
        });
      }
    }
    function a8(ah, ai, aj) {
      {
        var al = R;
        return function (an, ao) {
          {
            if (al === W) {
              throw Error("Generator is already running");
            }
            if (al === X) {
              {
                if ("throw" === an) {
                  throw ao;
                }
                return {
                  value: z,
                  done: true
                };
              }
            }
            for (aj.method = an, aj.arg = ao;;) {
              {
                var aq = aj.delegate;
                if (aq) {
                  {
                    var ar = a9(aq, aj);
                    if (ar) {
                      {
                        if (ar === Y) {
                          continue;
                        }
                        return ar;
                      }
                    }
                  }
                }
                if ("next" === aj.method) {
                  aj.sent = aj._sent = aj.arg;
                } else {
                  if ("throw" === aj.method) {
                    {
                      if (al === R) {
                        throw al = X, aj.arg;
                      }
                      aj.dispatchException(aj.arg);
                    }
                  } else {
                    "return" === aj.method && aj.abrupt("return", aj.arg);
                  }
                }
                al = W;
                var as = Q(ah, ai, aj);
                if ("normal" === as.type) {
                  {
                    if (al = aj.done ? X : V, as.arg === Y) {
                      continue;
                    }
                    return {
                      value: as.arg,
                      done: aj.done
                    };
                  }
                }
                "throw" === as.type && (al = X, aj.method = "throw", aj.arg = as.arg);
              }
            }
          }
        };
      }
    }
    function a9(ah, ai) {
      {
        var aj = ai.method;
        var ak = ah.iterator[aj];
        if (ak === z) {
          ai.delegate = null;
          "throw" === aj && ah.iterator.return && (ai.method = "return", ai.arg = z, a9(ah, ai), "throw" === ai.method) || "return" !== aj && (ai.method = "throw", ai.arg = new TypeError("The iterator does not provide a '" + aj + "' method"));
          return Y;
        }
        var al = Q(ak, ah.iterator, ai.arg);
        if ("throw" === al.type) {
          ai.method = "throw";
          ai.arg = al.arg;
          ai.delegate = null;
          return Y;
        }
        var am = al.arg;
        return am ? am.done ? (ai[ah.resultName] = am.value, ai.next = ah.nextLoc, "return" !== ai.method && (ai.method = "next", ai.arg = z), ai.delegate = null, Y) : am : (ai.method = "throw", ai.arg = new TypeError("iterator result is not an object"), ai.delegate = null, Y);
      }
    }
    function aa(ah) {
      {
        var ai = {
          tryLoc: ah[0]
        };
        1 in ah && (ai.catchLoc = ah[1]);
        2 in ah && (ai.finallyLoc = ah[2], ai.afterLoc = ah[3]);
        this.tryEntries.push(ai);
      }
    }
    function ab(ah) {
      {
        var ai = ah.completion || {};
        ai.type = "normal";
        delete ai.arg;
        ah.completion = ai;
      }
    }
    function ac(ah) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      ah.forEach(aa, this);
      this.reset(true);
    }
    function ad(ah) {
      {
        if (ah || "" === ah) {
          {
            var aj = ah[I];
            if (aj) {
              return aj.call(ah);
            }
            if ("function" == typeof ah.next) {
              return ah;
            }
            if (!isNaN(ah.length)) {
              {
                var ak = -1;
                var al = function an() {
                  {
                    for (; ++ak < ah.length;) {
                      if (D.call(ah, ak)) {
                        an.value = ah[ak];
                        an.done = false;
                        return an;
                      }
                    }
                    an.value = z;
                    an.done = true;
                    return an;
                  }
                };
                return al.next = al;
              }
            }
          }
        }
        throw new TypeError(d(ah) + " is not iterable");
      }
    }
    a0.prototype = a1;
    G(a5, "constructor", {
      value: a1,
      configurable: true
    });
    G(a1, "constructor", {
      value: a0,
      configurable: true
    });
    a0.displayName = M(a1, K, "GeneratorFunction");
    A.isGeneratorFunction = function (ah) {
      {
        var aj = "function" == typeof ah && ah.constructor;
        return !!aj && (aj === a0 || "GeneratorFunction" === (aj.displayName || aj.name));
      }
    };
    A.mark = function (ah) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(ah, a1) : (ah.__proto__ = a1, M(ah, K, "GeneratorFunction"));
        ah.prototype = Object.create(a5);
        return ah;
      }
    };
    A.awrap = function (ah) {
      {
        return {
          __await: ah
        };
      }
    };
    a6(a7.prototype);
    M(a7.prototype, J, function () {
      {
        return this;
      }
    });
    A.AsyncIterator = a7;
    A.async = function (ah, ai, aj, ak, al) {
      {
        undefined === al && (al = Promise);
        var an = new a7(P(ah, ai, aj, ak), al);
        return A.isGeneratorFunction(ai) ? an : an.next().then(function (ap) {
          return ap.done ? ap.value : an.next();
        });
      }
    };
    a6(a5);
    M(a5, K, "Generator");
    M(a5, I, function () {
      {
        return this;
      }
    });
    M(a5, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    A.keys = function (ah) {
      {
        var aj = Object(ah);
        var ak = [];
        for (var al in aj) ak.push(al);
        ak.reverse();
        return function am() {
          {
            for (; ak.length;) {
              var an = ak.pop();
              if (an in aj) {
                am.value = an;
                am.done = false;
                return am;
              }
            }
            am.done = true;
            return am;
          }
        };
      }
    };
    A.values = ad;
    ac.prototype = {
      constructor: ac,
      reset: function (ah) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = z, this.done = false, this.delegate = null, this.method = "next", this.arg = z, this.tryEntries.forEach(ab), !ah) {
            for (var aj in this) "t" === aj.charAt(0) && D.call(this, aj) && !isNaN(+aj.slice(1)) && (this[aj] = z);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var ah = this.tryEntries[0].completion;
          if ("throw" === ah.type) {
            throw ah.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (ah) {
        {
          if (this.done) {
            throw ah;
          }
          var aj = this;
          function ap(aq, ar) {
            {
              am.type = "throw";
              am.arg = ah;
              aj.next = aq;
              ar && (aj.method = "next", aj.arg = z);
              return !!ar;
            }
          }
          for (var ak = this.tryEntries.length - 1; ak >= 0; --ak) {
            {
              var al = this.tryEntries[ak];
              var am = al.completion;
              if ("root" === al.tryLoc) {
                return ap("end");
              }
              if (al.tryLoc <= this.prev) {
                {
                  var an = D.call(al, "catchLoc");
                  var ao = D.call(al, "finallyLoc");
                  if (an && ao) {
                    {
                      if (this.prev < al.catchLoc) {
                        return ap(al.catchLoc, true);
                      }
                      if (this.prev < al.finallyLoc) {
                        return ap(al.finallyLoc);
                      }
                    }
                  } else {
                    if (an) {
                      {
                        if (this.prev < al.catchLoc) {
                          return ap(al.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!ao) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < al.finallyLoc) {
                          return ap(al.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (ah, ai) {
        {
          for (var aj = this.tryEntries.length - 1; aj >= 0; --aj) {
            {
              var ak = this.tryEntries[aj];
              if (ak.tryLoc <= this.prev && D.call(ak, "finallyLoc") && this.prev < ak.finallyLoc) {
                {
                  var al = ak;
                  break;
                }
              }
            }
          }
          al && ("break" === ah || "continue" === ah) && al.tryLoc <= ai && ai <= al.finallyLoc && (al = null);
          var am = al ? al.completion : {};
          am.type = ah;
          am.arg = ai;
          return al ? (this.method = "next", this.next = al.finallyLoc, Y) : this.complete(am);
        }
      },
      complete: function (ah, ai) {
        {
          if ("throw" === ah.type) {
            throw ah.arg;
          }
          "break" === ah.type || "continue" === ah.type ? this.next = ah.arg : "return" === ah.type ? (this.rval = this.arg = ah.arg, this.method = "return", this.next = "end") : "normal" === ah.type && ai && (this.next = ai);
          return Y;
        }
      },
      finish: function (ah) {
        {
          for (var ai = this.tryEntries.length - 1; ai >= 0; --ai) {
            {
              var aj = this.tryEntries[ai];
              if (aj.finallyLoc === ah) {
                this.complete(aj.completion, aj.afterLoc);
                ab(aj);
                return Y;
              }
            }
          }
        }
      },
      catch: function (ah) {
        for (var ai = this.tryEntries.length - 1; ai >= 0; --ai) {
          var aj = this.tryEntries[ai];
          if (aj.tryLoc === ah) {
            var ak = aj.completion;
            if ("throw" === ak.type) {
              var al = ak.arg;
              ab(aj);
            }
            return al;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (ah, ai, aj) {
        this.delegate = {
          iterator: ad(ah),
          resultName: ai,
          nextLoc: aj
        };
        "next" === this.method && (this.arg = z);
        return Y;
      }
    };
    return A;
  }
  function g(q, s, v, w, x, y, z) {
    try {
      var A = q[y](z);
      var B = A.value;
    } catch (C) {
      return void v(C);
    }
    A.done ? s(B) : Promise.resolve(B).then(w, x);
  }
  function h(q) {
    return function () {
      var v = this;
      var w = arguments;
      return new Promise(function (x, y) {
        var A = q.apply(v, w);
        function B(D) {
          g(A, x, y, B, C, "next", D);
        }
        function C(D) {
          g(A, x, y, B, C, "throw", D);
        }
        B(undefined);
      });
    };
  }
  var j = Env("酷我音乐");
  var k = "kuwo_".concat(j.time("yyyyMM"), "_notified");
  var l = j.toObj($response.body) || {};
  function m() {
    return p.apply(this, arguments);
  }
  function p() {
    p = h(f().mark(function q() {
      var v;
      var w;
      var x;
      var y;
      return f().wrap(function (z) {
        for (;;) {
          switch (z.prev = z.next) {
            case 0:
              v = ["本脚本仅用于技术学习，禁止非法使用。", "不得将本脚本用于任何商业或违法用途，违者后果自负。", "在中国大陆地区，严禁传播本脚本。", "开发者不对脚本的滥用承担任何责任。", "违规使用导致的后果由使用者自行承担。", "如有违反相关法规，将立即删除本脚本。", "使用者若违反声明规定，将自动视为放弃使用权。", "本声明的最终解释权归开发者所有。"];
              z.prev = 2;
              z.next = 5;
              return j.http.get("https://cdn.jsdelivr.net/gh/Yuheng0101/X@main/Utils/notice.json");
            case 5:
              w = z.sent;
              x = w.body;
              v = j.toObj(x);
              j.log("获取远程生命成功");
              z.next = 15;
              break;
            case 12:
              z.prev = 12;
              z.t0 = z.catch(2);
              j.log("获取远程生命失败, 使用本地声明");
            case 15:
              j.setdata("true", k);
              y = j.time("yyyyMM", new Date(new Date().setMonth(new Date().getMonth() - 1)));
              j.setdata(null, "kuwo_".concat(y, "_notified"));
              return z.abrupt("return", v.join("\n"));
            case 19:
            case "end":
              return z.stop();
          }
        }
      }, q, null, [[2, 12]]);
    }));
    return p.apply(this, arguments);
  }
  h(f().mark(function q() {
    var x;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    var K;
    var L;
    var M;
    return f().wrap(function (N) {
      for (;;) {
        switch (N.prev = N.next) {
          case 0:
            if ("true" != j.getdata(k)) {
              N.next = 4;
              break;
            }
            j.debug("本月已通知过，本次不再通知");
            N.next = 11;
            break;
          case 4:
            N.t0 = j;
            N.t1 = j.name;
            N.next = 8;
            return m();
          case 8:
            N.t2 = N.sent;
            N.t3 = {
              $open: "https://github.com/Yuheng0101/X/",
              $media: "https://p5.itc.cn/q_70/images03/20211108/8d0e0dc3c971431797b62371b0874c7a.png"
            };
            N.t0.msg.call(N.t0, N.t1, "脚本声明", N.t2, N.t3);
          case 11:
            if (!/mobi\.s\?f=kwxs/.test($request.url)) {
              N.next = 28;
              break;
            }
            if (z = j.getval("kuwo_free_current_id") || "", A = null === (x = l.data) || undefined === x ? undefined : x.rid, B = j.toStr(l), z === A) {
              N.next = 26;
              break;
            }
            N.prev = 16;
            N.next = 19;
            return j.http.get("https://mobi.kuwo.cn/mobi.s?f=web&source=kwplayer_ar_1.1.9_jiakong_118980_320.apk&type=convert_url_with_sign&rid=".concat(z, "&priority=bitrate&network=3G&mode=download&br=2000kflac"));
          case 19:
            C = N.sent;
            B = C.body;
            N.next = 26;
            break;
          case 23:
            N.prev = 23;
            N.t4 = N.catch(16);
            j.logErr("解锁失败~", N.t4);
          case 26:
            j.setval("", "kuwo_free_current_id");
            j.done({
              body: B
            });
          case 28:
            if ($request.url.indexOf("music.pay?newver=3") > -1) {
              for (D = l.songs[0].id, "number" == typeof D && j.setval(D + "", "kuwo_free_current_id"), E = l.songs[0].audio[0].pid, F = l.songs[0].audio[0].price, G = l.songs[0].audio[0].policy, H = G + "_1", I = l.songs[0].audio.length, J = 0; J < I; J++) {
                l.songs[0].audio[J].st = 0;
              }
              K = l.songs[0];
              l.user = [{
                pid: E,
                type: G,
                name: H,
                categray: H,
                id: D,
                order: 375787919,
                final: [],
                buy: 1657425321,
                begin: 1657425321,
                end: 4180305321,
                CurEnd: 0,
                playCnt: 0,
                playUpper: 300,
                downCnt: 0,
                downUpper: 300,
                playVideoCnt: 0,
                playVideoUpper: 3000,
                downVideoCnt: 0,
                downVideoUpper: 3000,
                price: F,
                period: 1000,
                feetype: 0,
                info: K
              }];
              j.done({
                body: j.toStr(l)
              });
            }
            /vip\/enc/.test($request.url) && j.done({
              body: "Vo4m6X2hTph/vfpPmau8PTT0sFN6JCgzxSLVH/u3sbEt7VniYsVHbRFgOgN+Uvs39rAI7R3C5HVpaSj8tr8U8dLYwYdDCjMILuUorh3z0BiQToiWxudHkcASIPHNrmZHZYC/yv3DP4b89hbzfqU5UUDUqaZpEBZr76sDF2wNPmYjUEFSVCMGyTl1F6j1DBmKJ1Tik0YuG/2UBa/Ilz12a1KneXsNs5x5EE41bXDke7EygIB3I+6SoITZXOLFAFQFZujdI0GzClNglDKtclpUxpjN3uVeJxHLU40FTwNWo3ZDNv8KSdZpYZ5BDEOCyZkifmHlf1wnocX2zTr2xRAM6JhAD2WaSSNQQVJUI5lv72QNZSN43Pj/qdzatHQP4Pp/H1YxyP36rv3qBcnnJy/55YouIczRc3eJjXExRgo54qdyTYRMYoS9GzNn/edR3hSNnMn9PnElBCfZhkL0R5kZ9JBFCM3vNOy7Cnp6RVyAG0GFHv/g2q1yqkJxibyDro5nlnnvHjhZrsOvSvTXI1BBUlQjGoRqqCTDUvHLoiNwWMoKKfxtswWQiXjoQ6mL5dazxjUsbsHzC1N8YNMVtzf8gBryr3nMWS44wyUpi1/0WhGTRW1wsCllO1DB24+ibTFH/yftWN+/apM9vbQAkc/J+aFy/01plK7rsGNwWYYKG0sr6CS8dGQzy0On6aFo07hiU+wjUEFSVCOf/wKzzX5Cn/OLMKeVa1BPDxV5tm39vCrsxIG6T29VHWx8ck93S/nXCm2dHfojuLySZKJ50B1FaN5uFIY+LA1RbO/0sL+CoSJhoNOLibzt75c5dleW+lbwxLAAdBh5AFq4Z1Uj8bPjm5mHcGWQuBAyZIO+ie8wP4yvWwQFf1ENJiNQQVJUIzwCo22cpAtoAzYZWm3XFPfSlov4G15JGaaHL2X5FG5BTeUwwbBiQfwUpcb6oT8dbIKh2SsUZCeJZW43lLI0UIo9u3y1+P4GMtOKEZ7Sx0aQ3ewknthU2tpL0gnykFtiEtKBxcfHjJEen158zVXrbxxC0W35SmaYOOwgAmEMfxwHI1BBUlQjhVUHnBabnJcnmXCICcyUBglrZkXcNLwg91p4889vKFTLlzROHTt20UzjfKWsNK3U8pYgKYXPbQtSzIuRheEEQDFhLvEhIGKaB6yDoacDLJZ0jgFRIKKFBkbK0VE4nIABi1qgQOXvq1sG4QeupjfEWYqMX8EyyqPHrsDiCltAF1wjUEFSVCNybeUusnxJF2zswj8xQtfPiwfDj3TwKWxKXCmkheqHy7/0Qpyc84xWvq+YXktsU97wUZLHrgJmARudJmQNEwAweIdHMafcwreBy731z6kGLojy5TLgTN7XSm5Ar+hgOW+1ZwkWLyrVvaCdO/8/zdYl1w/PQUCs6dw0ThIeahwjpQ=="
            });
            /vip\/v2\/theme/.test($request.url) && (l.data.needBieds = null, j.done({
              body: j.toStr(l)
            }));
            $request.url.includes("/a.p") && (B = j.toStr(l), l.hasOwnProperty("songs") && Object.keys(l.songs).length > 0 && (M = l.songs[Object.keys(l.songs)[0]].id, j.setval(M + "", "kuwo_free_current_id")), "POST" === (null === (L = $request) || undefined === L ? undefined : L.method.toUpperCase()) && (B = $response.body.replace(/"playright":\d+/g, "\"playright\":1").replace(/"downright":\d+/g, "\"downright\":1").replace(/"policytype":\d+/g, "\"policytype\":3").replace(/"policy":\d+/g, "\"policy\":5")), $request.url.includes("getvip") && (l.packs = {
              end: 32495443200,
              bought_vip: 1,
              type: 1,
              period: 31,
              bought_vip_end: 32495443200
            }, B = j.toStr(l)), j.done({
              body: B
            }));
            /pay\/user\/info/.test($request.url) && (l.data.vipExpires = 4077187200, l.data.vipType = 1, l.data.adImgUrl = "", j.done({
              body: j.toStr(l)
            }));
          case 33:
          case "end":
            return N.stop();
        }
      }
    }, q, null, [[16, 23]]);
  }))().catch(function (s) {
    return j.logErr(s);
  }).finally(function () {
    return j.done({});
  });
})();
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