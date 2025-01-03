/****************************

#!name = 酷我音乐 & 酷我畅听
#!desc = 〔 酷我音乐&酷我畅听 〕全功能破解
#!author = 影子[https://www.napi.ltd]
#!homepage = https://napi.ltd
#!openUrl = https://napi.ltd
#!tag = 会员
#!loon_version = 3.2.3(762)
#!icon = https://static.napi.ltd/Image/KuWo.png
#!date = 2024-12-29



[Script]
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic)|app/newMenuList/menuListInfo|tingshu/index/radio|operate/homePage)|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/kuwomod-3.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png


[Mitm]
hostname = *.kuwo.cn

****************************/


const YZw = function () {
    const b = {};
    b.iUUlH = function (e, f) {
        return e === f;
    };
    const c = b;
    let d = true;
    return function (e, f) {
        if (c.iUUlH('rcnJU', 'fdMMb')) {
            if (f) {
                const h = f.apply(e, arguments);
                f = null;
                return h;
            }
        } else {
            const h = d ? function () {
                if (f) {
                    const j = f.apply(e, arguments);
                    f = null;
                    return j;
                }
            } : function () {};
            d = false;
            return h;
        }
    };
}();
const YZx = YZw(this, function () {
    const b = {};
    b.EbCas = '^([^ ]+( +[^ ]+' + ')+)+[^ ]}';
    b.Nvxjx = function (e) {
        return e();
    };
    const c = b;
    const d = function () {
        const e = d.constructor('return /" + this + "/')().compile(c.EbCas);
        return !e.test(YZx);
    };
    return c.Nvxjx(d);
});
YZx();
const YZy = function () {
    let a = true;
    return function (b, c) {
        const d = a ? function () {
            if (c) {
                const e = c.apply(b, arguments);
                c = null;
                return e;
            }
        } : function () {};
        a = false;
        return d;
    };
}();
(function () {
    const b = {};
    b.dkdaV = function (d, e) {
        return d === e;
    };
    b.vgqXy = 'kyNAw';
    b.TBwmu = '\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)';
    b.djevc = 'init';
    b.wUXqx = function (d, e) {
        return d + e;
    };
    b.GIGAM = function (d, e) {
        return d + e;
    };
    b.qjTei = function (d) {
        return d();
    };
    const c = b;
    YZy(this, function () {
        const d = {};
        d.DYavo = 'free';
        const e = d;
        if (c.dkdaV('kyNAw', c.vgqXy)) {
            const f = new RegExp('function *\\( *\\' + ')');
            const g = new RegExp(c.TBwmu, 'i');
            const h = YZa0(c.djevc);
            if (!f.test(c.wUXqx(h, 'chain')) || !g.test(c.GIGAM(h, 'input'))) {
                h('0');
            } else {
                c.qjTei(YZa0);
            }
        } else {
            YZW.data.vipTheme.type = e.DYavo;
            delete YZW.data.needBieds;
            YZV = YZB.toStr(YZW);
            const k = {};
            k.body = YZV;
            YZB.done(k);
        }
    })();
}());
const YZz = function () {
    let a = true;
    return function (b, c) {
        const d = a ? function () {
            if (c) {
                const e = c.apply(b, arguments);
                c = null;
                return e;
            }
        } : function () {};
        a = false;
        return d;
    };
}();
const YZA = YZz(this, function () {
    const b = {};
    b.ZMRMv = function (g, h) {
        return g < h;
    };
    b.uWtxl = function (g, h) {
        return g > h;
    };
    b.fOInu = function (g, h) {
        return g + h;
    };
    b.JQIIk = function (g, h) {
        return g << h;
    };
    b.kayhb = function (g, h) {
        return g & h;
    };
    b.LhJQC = function (g, h) {
        return g | h;
    };
    b.PPbuL = function (g, h) {
        return g & h;
    };
    b.mPKKQ = function (g, h) {
        return g & h;
    };
    b.ROpKG = function (g, h) {
        return g === h;
    };
    b.HvkKN = function (g, h) {
        return g(h);
    };
    b.GaDTO = function (g, h) {
        return g + h;
    };
    b.PMFcL = '{}.constructor(' + '"return this")(' + ' )';
    b.pfMnJ = function (g) {
        return g();
    };
    const c = b;
    const d = function () {};
    let f;
    try {
        const g = c.HvkKN(Function, c.GaDTO(c.GaDTO('return (function() ', c.PMFcL), ');'));
        f = c.pfMnJ(g);
    } catch (h) {
        f = window;
    }
    if (!f.console) {
        f.console = function (j) {
            if (c.ROpKG('zGETI', 'zGETI')) {
                const k = {};
                k.log = j;
                k.warn = j;
                k.debug = j;
                k.info = j;
                k.error = j;
                k.exception = j;
                k.table = j;
                k.trace = j;
                return k;
            } else {
                c = utftext.charCodeAt(i);
                if (c.ZMRMv(c, 0x80)) {
                    string += String.fromCharCode(c);
                    i++;
                } else if (c.uWtxl(c, 0xbf) && c.ZMRMv(c, 0xe0)) {
                    c2 = utftext.charCodeAt(c.fOInu(i, 0x1));
                    string += String.fromCharCode(c.JQIIk(c.kayhb(c, 0x1f), 0x6) | c.kayhb(c2, 0x3f));
                    i += 0x2;
                } else {
                    c2 = utftext.charCodeAt(i + 0x1);
                    c3 = utftext.charCodeAt(c.fOInu(i, 0x2));
                    string += String.fromCharCode(c.LhJQC(c.JQIIk(c.PPbuL(c, 0xf), 0xc), c.JQIIk(c.mPKKQ(c2, 0x3f), 0x6)) | c.mPKKQ(c3, 0x3f));
                    i += 0x3;
                }
            }
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
const $ = new Env('酷我音乐');
const YZC = new YZZ();
const YZD = '/mobi.s?f=kwxs';
const YZE = '/music.pay?newver=3';
const YZF = RegExp(/(a\.p|v2\/api\/(user\/personal\/)?user\/info)/);
const YZG = '/vip/enc';
const YZH = RegExp(/(vip\/)?v2\/(api(\/pay)?\/user\/info|user\/vip)/);
const YZI = '/vip/v2/theme?op=gd';
const YZJ = '/v2/api/advert/' + 'myPage';
const YZK = RegExp(/(v2\/api\/advert\/(iListen|album)|openapi\/v1\/album\/adBar|(\/EcomResource|\/(Mobile)?Ad)Serv(er|ice))/);
const YZL = '/vip/v2/sysinfo' + '?op=getRePayAndDoPayBoxNew';
const YZM = '/v2/api/pay/payInfo/kwplayer/payMiniBar';
const YZN = '/openapi/v1/tingshu/index/radio';
const YZO = '/kuwopay/vip-tab/setting';
const YZP = '/openapi/v1/app' + '/newMenuList/menuListInfo';
const YZQ = '/openapi/v1/album/myRec/vipMusic';
const YZR = '/openapi/v1/operate/homePage';
const YZS = $.toObj($.getval('KuWo')) || {};
const YZT = '4.12.29';

// 添加兼容性检查
const isQuanX = typeof $task !== 'undefined';
const isSurge = typeof $httpClient !== 'undefined' && typeof $loon === 'undefined';
const isLoon = typeof $loon !== 'undefined';

// 统一请求对象
var YZU = isQuanX ? $request.url : $request.url;
var YZV = isQuanX ? $response.body : $response.body;
var YZW = $.toObj(YZV);

if (YZU.indexOf(YZD) != -0x1) {
    let YZa1 = YZS.keys;
    let YZa2 = YZa1[Math.floor(Math.random() * YZa1.length)];
    let YZa3 = [];
    YZa2.forEach((a, b) => {
        YZa3[b] = YZC.ntoc(a);
    });
    let YZa4 = YZS.user;
    let YZa5 = YZS.PlayID;
    let YZa6 = YZa3.join('_');
    let YZa7 = YZS.Song;
    let YZa8 = YZS.ver;
    let YZa9 = YZV.replace(/.*?\"rid\":(\d+).*/, '$1');
    !(async () => {
        const g = {};
        g.DPVFL = function (k, l, m) {
            return k(l, m);
        };
        g.mBwru = 'kuwo';
        g.RtKos = function (k) {
            return k();
        };
        g.DxgMA = function (k, l) {
            return k == l;
        };
        g.nYpiA = function (k, l) {
            return k != l;
        };
        g.oohdw = '2000kflac';
        g.LwzYH = '320kmp3';
        g.vYpKJ = function (k, l) {
            return k == l;
        };
        g.QBKQo = 'book';
        g.STGXY = function (k, l) {
            return k + l;
        };
        g.yOpgy = function (k, l) {
            return k + l;
        };
        g.OgosE = function (k, l) {
            return k + l;
        };
        g.gbmSU = function (k, l) {
            return k + l;
        };
        g.Ddtiy = '&type=convert_url_with_sign&br' + '=';
        g.tZXTl = 'url';
        g.PXjde = '&rid=';
        const h = g;
        await h.DPVFL(YZY, YZa4, h.mBwru);
        await h.RtKos(YZX);
        if (YZS.isVip && new Date().getTime() < YZS.endTime && h.DxgMA(YZT, YZa8) && h.nYpiA(YZa9, YZa5)) {
            const k = {};
            k.br = 0xfa0;
            k.url = '4000kflac';
            const l = {};
            l.br = 0x7d0;
            l.url = h.oohdw;
            const m = {};
            m.br = 0x140;
            m.url = h.LwzYH;
            let n = [k, l, m];
            let o = 0x0;
            if (h.vYpKJ(h.QBKQo, YZa7)) o = 0x2;
            while (n[o]) {
                const p = {};
                p.url = h.STGXY(h.yOpgy(h.OgosE(h.gbmSU('http://mobi.kuwo.cn/mobi.s?f=web&source=', YZa6), h.Ddtiy), n[o][h.tZXTl]) + h.PXjde, YZa5);
                await $.http.get(p).then(q => {
                    YZV = q.body;
                    YZW = $.toObj(YZV);
                });
                if (h.vYpKJ(YZW.data.bitrate, n[o].br)) break;
                o++;
            }
        }
        YZS.PlayID = '';
        $.setval($.toStr(YZS), 'KuWo');
        const j = {};
        j.body = YZV;
        $.done(j);
    })();
}
if (YZU.endsWith(YZE)) {
    if (YZW.hasOwnProperty('songs')) {
        const YZac = '3|2|4|1|0|5' ['split']('|');
        let YZad = 0x0;
        while (true) {
            switch (YZac[YZad++]) {
            case '0':
                $.setval($.toStr(YZS), 'KuWo');
                continue;
            case '1':
                YZS.Song = 'music';
                continue;
            case '2':
                if ('number' !== typeof id) id = YZV.replace(/.*?\"id\":(\d+).*/, '$1');
                continue;
            case '3':
                id = YZW.songs[0x0].id;
                continue;
            case '4':
                YZS.PlayID = id;
                continue;
            case '5':
                YZW.songs[0x0].audio.forEach(a => a.st = 0x0);
                continue;
            }
            break;
        }
    }
    let YZaa = YZW.songs[0x0].audio[0x0].policy;
    YZW.user[0x0] = {
        'pid': YZW.songs[0x0].audio[0x0].pid,
        'type': YZaa,
        'name': YZaa + '_1',
        'categray': YZaa + '_1',
        'id': YZW.songs[0x0].id,
        'order': 0x1666118f,
        'final': [],
        'buy': 0x62ca4da9,
        'begin': 0x62ca4da9,
        'end': 0xf304f080,
        'CurEnd': 0x0,
        'playCnt': 0x0,
        'playUpper': 0x12c,
        'downCnt': 0x0,
        'downUpper': 0x12c,
        'playVideoCnt': 0x0,
        'playVideoUpper': 0xbb8,
        'downVideoCnt': 0x0,
        'downVideoUpper': 0xbb8,
        'price': YZW.songs[0x0].audio[0x0].price,
        'period': 0x3e8,
        'feetype': 0x0,
        'info': YZW.songs[0x0]
    };
    YZV = $.toStr(YZW);
    const YZab = {};
    YZab.body = YZV;
    $.done(YZab);
}
if (YZU.match(YZF)) {
    if (YZW.hasOwnProperty('songs')) {
        for (let YZaf in YZW.songs) {
            id = YZW.songs[YZaf].id;
            if ('number' !== typeof id) id = YZV.replace(/.*?\"id\":(\d+).*/, '$1');
            if ('number' == typeof id) {
                YZS.PlayID = id;
                YZS.Song = 'book';
                $.setval($.toStr(YZS), 'KuWo');
                break;
            }
        }
    }
    YZV = YZV.replace(/(policy|policytype)\":\d/g, '$1":0').replace(/(playright|downright|type|bought_vip|limitfree|vipType)\":\d/g, '$1":1').replace(/(end|endtime|vipExpires)\":\d+/g, '$1":4077187200');
    const YZae = {};
    YZae.body = YZV;
    $.done(YZae);
}
if (YZU.indexOf(YZG) != -0x1) {
    !(async () => {
        const c = {};
        c.gRzxq = function (j, k) {
            return j !== k;
        };
        c.cbwdn = 'number';
        c.DHIdg = function (j, k, l) {
            return j(k, l);
        };
        c.uoxGt = 'uid=238581279';
        const d = c;
        let e = new URL(YZU).searchParams;
        let f = e.get('uid');
        if (d.gRzxq(d.cbwdn, typeof f)) f = YZU.replace(/.*?uid=(\d+).*/, '$1');
        await d.DHIdg(YZY, f, 'kuwo');
        let g = await $.http.get(YZU.replace(/uid=\d+/g, d.uoxGt)).then(j => j.body);
        const h = {};
        h.body = g;
        $.done(h);
    })();
}
if (YZU.match(YZH)) {
    const YZag = ('6|8|12|7|4|0|16' + '|1|17|18|5|11|10|3|13|2|14|9|15').split('|');
    let YZah = 0x0;
    while (true) {
        switch (YZag[YZah++]) {
        case '0':
            YZW.data.vipmIcon = 'https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png';
            continue;
        case '1':
            YZW.data.openBtnText = '永久会员';
            continue;
        case '2':
            YZW.data.biedSong = '1';
            continue;
        case '3':
            YZW.data.svipExpire = '4077187200315';
            continue;
        case '4':
            YZW.data.vipTag = 'VIP7';
            continue;
        case '5':
            YZW.data.luxuryIcon = 'https://image.kuwo.cn/fe/2fae68ff-de2d-4473-bf28-8efc29e44968vip.png';
            continue;
        case '6':
            YZW.data.vipIcon = 'https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png';
            continue;
        case '7':
            YZW.data.growthValue = '9999';
            continue;
        case '8':
            delete YZW.data.iconJumpUrl;
            continue;
        case '9':
            YZV = $.toStr(YZW);
            continue;
        case '10':
            YZW.data.vipLuxuryExpire = '4077187200315';
            continue;
        case '11':
            YZW.data.vipmExpire = '4077187200315';
            continue;
        case '12':
            delete YZW.data.adActUrl;
            continue;
        case '13':
            YZW.data.isYearUser = '2';
            continue;
        case '14':
            YZW.data.svipAutoPayUser = '1';
            continue;
        case '15':
            const YZai = {};
            YZai.body = YZV;
            $.done(YZai);
            continue;
        case '16':
            YZW.data.svipIcon = 'https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png';
            continue;
        case '17':
            YZW.data.vipExpire = '4077187200315';
            continue;
        case '18':
            YZW.data.vipExpires = 0x3b54b4b753b;
            continue;
        }
        break;
    }
}
if (YZU.indexOf(YZI) != -0x1) {
    YZW.data.vipTheme.type = 'free';
    delete YZW.data.needBieds;
    YZV = $.toStr(YZW);
    const YZaj = {};
    YZaj.body = YZV;
    $.done(YZaj);
}
if (YZU.indexOf(YZJ) != -0x1) {
    const YZak = '4|3|1|2|5|0' ['split']('|');
    let YZal = 0x0;
    while (true) {
        switch (YZak[YZal++]) {
        case '0':
            const YZam = {};
            YZam.body = YZV;
            $.done(YZam);
            continue;
        case '1':
            YZW.data.url = null;
            continue;
        case '2':
            YZW.data.subTitle = '畅听服务由影子提供';
            continue;
        case '3':
            YZW.data.title = '酷我畅听';
            continue;
        case '4':
            YZW.data.scheme = null;
            continue;
        case '5':
            YZV = $.toStr(YZW);
            continue;
        }
        break;
    }
}
if (YZU.match(YZK)) {
    YZV = 'YingZi';
    const YZan = {};
    YZan.body = YZV;
    $.done(YZan);
}
if (YZU.indexOf(YZL) != -0x1) {
    delete YZW.data.songListTopContext;
    YZV = $.toStr(YZW);
    const YZao = {};
    YZao.body = YZV;
    $.done(YZao);
}
if (YZU.indexOf(YZM) != -0x1) {
    delete YZW.data;
    delete YZW.dataV2;
    YZV = $.toStr(YZW);
    const YZap = {};
    YZap.body = YZV;
    $.done(YZap);
}
if (YZU.indexOf(YZN) != -0x1) {
    let YZaq = 0x0;
    while (YZW.data.child[YZaq]) {
        if (/^小焦点/ ['test'](YZW.data.child[YZaq].label)) delete YZW.data.child[YZaq].child;
        YZaq++;
    }
    YZV = $.toStr(YZW);
    const YZar = {};
    YZar.body = YZV;
    $.done(YZar);
}
if (YZU.indexOf(YZO) != -0x1) {
    if ('undefined' !== typeof YZW.data.tab.vipTypes[0x0]) {
        let YZat = 0x1;
        while (YZW.data.tab.vipTypes[0x0].topics[YZat]) {
            delete YZW.data.tab.vipTypes[0x0].topics[YZat];
            YZat++;
        }
    }
    YZV = $.toStr(YZW);
    const YZas = {};
    YZas.body = YZV;
    $.done(YZas);
}
if (YZU.indexOf(YZP) != -0x1) {
    YZW.data = [];
    YZV = $.toStr(YZW);
    const YZau = {};
    YZau.body = YZV;
    $.done(YZau);
}
if (YZU.indexOf(YZQ) != -0x1) {
    delete YZW.data.listenSomething;
    YZV = $.toStr(YZW);
    const YZav = {};
    YZav.body = YZV;
    $.done(YZav);
}
if (YZU.indexOf(YZR) != -0x1) {
    let YZaw = ['发现', '推荐', '听书'];
    let YZax = 0x0;
    while (YZW.data.homeTop[YZax]) {
        if (!YZaw.includes(YZW.data.homeTop[YZax].title)) {
            delete YZW.data.homeTop[YZax];
        }
        YZax++;
    }
    YZV = $.toStr(YZW);
    const YZay = {};
    YZay.body = YZV;
    $.done(YZay);
}

async function YZX() {
    const b = {};
    b.FGUeC = '7|6|4|5|1|3|2|0';
    b.JLhJK = 'KuWo';
    b.NBJNo = function (f, g) {
        return f != g;
    };
    b.hykdt = '需要更新 -> 请更新你的脚本！';
    b.XERZN = 'https://sharechain.qq.com/cfa48d8b4551a20d5e6c016bdf3823ff';
    const c = b;
    const d = c.FGUeC.split('|');
    let e = 0x0;
    while (true) {
        switch (d[e++]) {
        case '0':
            $.setval($.toStr(YZS), c.JLhJK);
            continue;
        case '1':
            YZW = $.toObj(res);
            continue;
        case '2':
            YZS.ver = YZW.kuwo;
            continue;
        case '3':
            if (c.NBJNo(YZT, YZW.kuwo)) $.msg(c.hykdt);
            continue;
        case '4':
            info = info.match(/<article class=\"note-body\">([\s\S]*?)<\/article>/);
            continue;
        case '5':
            res = info[0x1].replace(/(\s|<.*?>)/g, '');
            continue;
        case '6':
            info = await $.http.get(YZU).then(f => f.body);
            continue;
        case '7':
            YZU = c.XERZN;
            continue;
        }
        break;
    }
}
async function YZY(c, d) {
    const e = {};
    e.cwfDF = 'function *\\( *\\' + ')';
    e.aQtAI = 'init';
    e.tCqYu = function (h, j) {
        return h + j;
    };
    e.fjgCd = 'input';
    e.CrWpv = function (h, j) {
        return h(j);
    };
    e.iRcLc = function (h) {
        return h();
    };
    e.UhDjx = function (h, j, k) {
        return h(j, k);
    };
    e.BIhel = 'type=';
    e.hVBeY = function (h, j) {
        return h != j;
    };
    e.aSMxr = '正在获取 ';
    e.XtVpB = ' 的授权信息…';
    e.BTxdF = 'https://napi.ltd/getInfo';
    e.HQLMU = function (h, j) {
        return h !== j;
    };
    e.WOcgQ = 'QIZNN';
    e.anrmT = 'KuWo';
    e.JiJjK = '数据获取完成...';
    e.BTAzw = function (h, j) {
        return h + j;
    };
    e.DxjHz = function (h, j) {
        return h < j;
    };
    e.zctEq = function (h, j) {
        return h + j;
    };
    e.wYBlv = '当前账户 ';
    e.ZXeBk = ` 已授权\
授权有效期至：`;
    e.pVNhx = function (h, j) {
        return h + j;
    };
    e.wjjVq = ' 已授权';
    e.afPkp = function (h, j) {
        return h + j;
    };
    e.nwPZZ = '授权有效期至：';
    e.wPLNb = '未获取到授权信息';
    e.CYuTp = '请重启应用或点击本条通知获取授权码';
    e.JYSar = function (h, j) {
        return h + j;
    };
    e.IDzdJ = 'https://file.napi.ltd/Static/Image/KuWo.png';
    e.LbMbR = function (h, j) {
        return h + j;
    };
    e.bcASV = function (h, j) {
        return h + j;
    };
    e.nfrak = ` 已授权\
祝使用愉快！`;
    const f = e;
    let g = f.tCqYu(f.BIhel, d) + '&user=' + c;
    if (!YZS.user || f.hVBeY(c, YZS.user) || !YZS.endTime || new Date().getTime() > YZS.endTime || !YZS.keys) {
        YZB.log(f.tCqYu(f.aSMxr, c) + f.XtVpB);
        const h = {};
        h.url = f.BTxdF;
        h.body = g;
        let j = YZB.toObj(await YZB.http.post(h).then(k => k.body));
        for (let k in j) {
            if (j.hasOwnProperty(k)) {
                if (f.HQLMU(f.WOcgQ, f.WOcgQ)) {
                    gxIobP.UhDjx(YZy, this, function () {
                        const m = new RegExp(gxIobP.cwfDF);
                        const n = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                        const o = YZa0(gxIobP.aQtAI);
                        if (!m.test(o + 'chain') || !n.test(gxIobP.tCqYu(o, gxIobP.fjgCd))) {
                            gxIobP.CrWpv(o, '0');
                        } else {
                            gxIobP.iRcLc(YZa0);
                        }
                    })();
                } else {
                    YZS[k] = j[k];
                }
            }
        }
        YZB.setval(YZB.toStr(YZS), f.anrmT);
        YZB.log(f.JiJjK);
        if (j.isVip) {
            let m = new Date(YZS.endTime);
            let n = f.tCqYu(m.getFullYear() + '-' + (m.getMonth() < 0xa ? f.tCqYu('0', m.getMonth() + 0x1) : f.BTAzw(m.getMonth(), 0x1)) + '-', f.DxjHz(m.getDate(), 0xa) ? '0' + m.getDate() : m.getDate());
            YZB.log(f.BTAzw(f.zctEq(f.zctEq(f.wYBlv, c), f.ZXeBk), n));
            YZB.msg(f.zctEq(f.pVNhx(f.wYBlv, c), f.wjjVq), '', f.afPkp(f.nwPZZ, n));
        } else {
            YZB.log(f.afPkp('未能获取到当前账户 ', c) + (` 的授权信息\
即将再次获取你的` + '授权信息'));
            YZB.msg(f.wPLNb, '', f.CYuTp, {
                'open-url': f.JYSar('https://napi.ltd/authPay?action=kuwo&user=', c),
                'media-url': f.IDzdJ
            });
        }
    } else {
        YZB.log(f.LbMbR(f.bcASV(f.wYBlv, c), f.nfrak));
    }
}

function YZZ() {
    const b = {};
    b.wKdaB = function (f, g) {
        return f(g);
    };
    b.sldwz = function (f, g) {
        return f < g;
    };
    b.ZzbmC = '2|0|7|8|6|5|1|3' + '|4';
    b.DgsmT = function (f, g) {
        return f(g);
    };
    b.KpHrX = function (f, g) {
        return f + g;
    };
    b.wNvxF = function (f, g) {
        return f << g;
    };
    b.ZcCGp = function (f, g) {
        return f & g;
    };
    b.GBEpl = function (f, g) {
        return f | g;
    };
    b.UcPTF = function (f, g) {
        return f << g;
    };
    b.rmdRk = function (f, g) {
        return f >> g;
    };
    b.JOuyq = 'return /" + this + "/';
    b.MlvUl = '^([^ ]+( +[^ ]+' + ')+)+[^ ]}';
    b.Tgunn = function (f, g) {
        return f === g;
    };
    b.kbvdf = 'DKQSl';
    b.bWErv = '5|2|3|6|1|7|0|4';
    b.TmLAm = function (f, g) {
        return f < g;
    };
    b.VoxKr = '8|4|9|0|2|7|6|1' + '|5|3';
    b.YspTf = function (f, g) {
        return f + g;
    };
    b.Teqbg = function (f, g) {
        return f | g;
    };
    b.DfUPS = function (f, g) {
        return f << g;
    };
    b.FmvOO = function (f, g) {
        return f != g;
    };
    b.FjfpM = function (f, g) {
        return f & g;
    };
    b.QAIhW = function (f, g) {
        return f % g;
    };
    b.ymmSB = function (f, g) {
        return f / g;
    };
    b.iRwbv = function (f, g) {
        return f - g;
    };
    b.uStaK = function (f, g) {
        return f + g;
    };
    b.WDUao = 'debu';
    b.icRtA = 'gger';
    b.shRPd = function (f, g) {
        return f !== g;
    };
    b.avryw = 'DlMzX';
    b.jCVhD = function (f, g) {
        return f * g;
    };
    b.tGgKw = 'vipTypes';
    b.QwTPf = 'topics';
    b.Gsbxq = 'tab';
    b.BcSJS = function (f, g) {
        return f < g;
    };
    b.ymSTt = function (f, g) {
        return f > g;
    };
    b.wQwHc = function (f, g) {
        return f | g;
    };
    b.lxSXP = function (f, g) {
        return f >> g;
    };
    b.xRmTo = function (f, g) {
        return f === g;
    };
    b.UDKMJ = 'TvYcy';
    b.hYvrK = function (f, g) {
        return f >> g;
    };
    b.qQrAY = '1|3|2|4|0';
    b.ZlTJR = function (f, g) {
        return f < g;
    };
    b.AxxOc = function (f, g) {
        return f + g;
    };
    b.YpbsT = function (f, g) {
        return f | g;
    };
    b.euNJu = function (f, g) {
        return f & g;
    };
    b.AVQvW = function (f, g) {
        return f + g;
    };
    b.ABrIU = function (f, g) {
        return f | g;
    };
    b.zDfmB = function (f, g) {
        return f << g;
    };
    b.NjDAj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const c = b;
    let d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let e = c.NjDAj;
    this.encode = function (f) {
        var g = '';
        var h, j, k, l, m, n, o;
        var p = 0x0;
        f = c.wKdaB(_utf8_encode, f);
        while (c.sldwz(p, f.length)) {
            const q = c.ZzbmC.split('|');
            let r = 0x0;
            while (true) {
                switch (q[r++]) {
                case '0':
                    j = f.charCodeAt(p++);
                    continue;
                case '1':
                    o = k & 0x3f;
                    continue;
                case '2':
                    h = f.charCodeAt(p++);
                    continue;
                case '3':
                    if (c.DgsmT(isNaN, j)) {
                        n = o = 0x40;
                    } else if (isNaN(k)) {
                        o = 0x40;
                    }
                    continue;
                case '4':
                    g = c.KpHrX(c.KpHrX(c.KpHrX(g, d.charAt(l)), d.charAt(m)) + d.charAt(n), d.charAt(o));
                    continue;
                case '5':
                    n = c.wNvxF(c.ZcCGp(j, 0xf), 0x2) | k >> 0x6;
                    continue;
                case '6':
                    m = c.GBEpl(c.UcPTF(h & 0x3, 0x4), c.rmdRk(j, 0x4));
                    continue;
                case '7':
                    k = f.charCodeAt(p++);
                    continue;
                case '8':
                    l = c.rmdRk(h, 0x2);
                    continue;
                }
                break;
            }
        }
        return g;
    };
    this.decode = function (f) {
        if (c.Tgunn('DKQSl', c.kbvdf)) {
            const q = c.bWErv.split('|');
            let r = 0x0;
            while (true) {
                switch (q[r++]) {
                case '0':
                    o = c.DgsmT(_utf8_decode, o);
                    continue;
                case '1':
                    f = f.replace(/[^A-Za-z0-9\+\/\=]/g, '');
                    continue;
                case '2':
                    var g, h, j;
                    continue;
                case '3':
                    var k, l, m, n;
                    continue;
                case '4':
                    return o;
                case '5':
                    var o = '';
                    continue;
                case '6':
                    var p = 0x0;
                    continue;
                case '7':
                    while (c.TmLAm(p, f.length)) {
                        const s = c.VoxKr.split('|');
                        let t = 0x0;
                        while (true) {
                            switch (s[t++]) {
                            case '0':
                                n = d.indexOf(f.charAt(p++));
                                continue;
                            case '1':
                                o = c.YspTf(o, String.fromCharCode(g));
                                continue;
                            case '2':
                                g = c.Teqbg(c.DfUPS(k, 0x2), l >> 0x4);
                                continue;
                            case '3':
                                if (c.FmvOO(n, 0x40)) {
                                    o = c.YspTf(o, String.fromCharCode(j));
                                }
                                continue;
                            case '4':
                                l = d.indexOf(f.charAt(p++));
                                continue;
                            case '5':
                                if (c.FmvOO(m, 0x40)) {
                                    o = o + String.fromCharCode(h);
                                }
                                continue;
                            case '6':
                                j = c.Teqbg(c.DfUPS(m & 0x3, 0x6), n);
                                continue;
                            case '7':
                                h = c.DfUPS(c.FjfpM(l, 0xf), 0x4) | c.rmdRk(m, 0x2);
                                continue;
                            case '8':
                                k = d.indexOf(f.charAt(p++));
                                continue;
                            case '9':
                                m = d.indexOf(f.charAt(p++));
                                continue;
                            }
                            break;
                        }
                    }
                    continue;
                }
                break;
            }
        } else {
            const v = test.constructor(cAXOIG.JOuyq)().compile(cAXOIG.MlvUl);
            return !v.test(YZx);
        }
    };
    this.ntoc = function (f) {
        radix = e.length, qutient = +f, arr = [];
        do {
            mod = c.QAIhW(qutient, radix);
            qutient = c.ymmSB(c.iRwbv(qutient, mod), radix);
            arr.unshift(d[mod]);
        } while (qutient);
        return arr.join('');
    };
    this.cton = function (f) {
        radix = e.length, f = c.DgsmT(String, f), len = f.length, i = 0x0, origin_number = 0x0;
        while (c.TmLAm(i, len)) {
            if (c.shRPd('DlMzX', c.avryw)) {
                (function () {
                    return false;
                } ['constructor'](cAXOIG.uStaK(cAXOIG.WDUao, cAXOIG.icRtA)).apply('stateObject'));
            } else {
                origin_number += c.jCVhD(Math.pow(radix, i++), d.indexOf(f.charAt(len - i) || 0x0));
            }
        }
        return origin_number;
    };
    this.randStr = function (f) {
        let g = '';
        for (let h = 0x0; h < f; h++) {
            let j = Math.floor(c.jCVhD(Math.random(), e.length));
            g += e[j];
        }
        return g;
    };
    _utf8_encode = function (f) {
        f = f.replace(/\r\n/g, '\x0a');
        var g = '';
        for (var h = 0x0; h < f.length; h++) {
            var j = f.charCodeAt(h);
            if (c.BcSJS(j, 0x80)) {
                g += String.fromCharCode(j);
            } else if (c.ymSTt(j, 0x7f) && j < 0x800) {
                g += String.fromCharCode(c.wQwHc(c.lxSXP(j, 0x6), 0xc0));
                g += String.fromCharCode(c.wQwHc(j & 0x3f, 0x80));
            } else {
                if (c.xRmTo(c.UDKMJ, c.UDKMJ)) {
                    g += String.fromCharCode(c.wQwHc(c.lxSXP(j, 0xc), 0xe0));
                    g += String.fromCharCode(c.wQwHc(c.FjfpM(c.hYvrK(j, 0x6), 0x3f), 0x80));
                    g += String.fromCharCode(c.wQwHc(j & 0x3f, 0x80));
                } else {
                    let l = 0x1;
                    while (YZW.data.tab[c.tGgKw][0x0][c.QwTPf][l]) {
                        delete YZW.data[c.Gsbxq][c.tGgKw][0x0][c.QwTPf][l];
                        l++;
                    }
                }
            }
        }
        return g;
    };
    _utf8_decode = function (f) {
        const g = c.qQrAY.split('|');
        let h = 0x0;
        while (true) {
            switch (g[h++]) {
            case '0':
                return j;
            case '1':
                var j = '';
                continue;
            case '2':
                var k = c1 = c2 = 0x0;
                continue;
            case '3':
                var l = 0x0;
                continue;
            case '4':
                while (l < f.length) {
                    k = f.charCodeAt(l);
                    if (c.BcSJS(k, 0x80)) {
                        j += String.fromCharCode(k);
                        l++;
                    } else if (k > 0xbf && c.ZlTJR(k, 0xe0)) {
                        c2 = f.charCodeAt(c.AxxOc(l, 0x1));
                        j += String.fromCharCode(c.YpbsT(c.DfUPS(k & 0x1f, 0x6), c.euNJu(c2, 0x3f)));
                        l += 0x2;
                    } else {
                        c2 = f.charCodeAt(c.AVQvW(l, 0x1));
                        c3 = f.charCodeAt(l + 0x2);
                        j += String.fromCharCode(c.YpbsT(c.ABrIU(c.zDfmB(c.euNJu(k, 0xf), 0xc), c.euNJu(c2, 0x3f) << 0x6), c.euNJu(c3, 0x3f)));
                        l += 0x3;
                    }
                }
                continue;
            }
            break;
        }
    };
}

function YZa0(b) {
    const c = {};
    c.HEMvf = 'ngGXG';
    c.JAOzi = function (f, g) {
        return f === g;
    };
    c.EzsGc = 'string';
    c.qZBtO = 'while (true) {}';
    c.fPeBa = 'counter';
    c.jVdxB = function (f, g) {
        return f !== g;
    };
    c.XPcdI = function (f, g) {
        return f + g;
    };
    c.bLkvo = function (f, g) {
        return f / g;
    };
    c.mvyoV = 'length';
    c.BKXHm = function (f, g) {
        return f % g;
    };
    c.dMuth = function (f, g) {
        return f + g;
    };
    c.UUOoN = 'debu';
    c.sPhCZ = 'gger';
    c.oBKtE = 'action';
    c.BqBmf = function (f, g) {
        return f + g;
    };
    c.JpCon = 'stateObject';
    c.NbCNL = function (f, g) {
        return f(g);
    };
    c.fmPCs = function (f, g) {
        return f === g;
    };
    c.fHten = 'txGdv';
    c.VfuEf = function (f, g) {
        return f(g);
    };
    const d = c;

    function e(f) {
        const g = {};
        g.noXLB = function (j, k) {
            return j === k;
        };
        g.iNNwm = d.HEMvf;
        const h = g;
        if (d.JAOzi(typeof f, d.EzsGc)) {
            return function (j) {} ['constructor'](d.qZBtO).apply(d.fPeBa);
        } else {
            if (d.jVdxB(d.XPcdI('', d.bLkvo(f, f))[d.mvyoV], 0x1) || d.BKXHm(f, 0x14) === 0x0) {
                (function () {
                    return true;
                } ['constructor'](d.dMuth(d.UUOoN, d.sPhCZ)).call(d.oBKtE));
            } else {
                (function () {
                    if (h.noXLB(h.iNNwm, h.iNNwm)) {
                        return false;
                    } else {
                        arr[i] = YZC.ntoc(item);
                    }
                } ['constructor'](d.BqBmf('debu', d.sPhCZ)).apply(d.JpCon));
            }
        }
        d.NbCNL(e, ++f);
    }
    try {
        if (b) {
            return e;
        } else {
            if (d.fmPCs(d.fHten, 'txGdv')) {
                d.VfuEf(e, 0x0);
            } else {
                YZS[key] = auth[key];
            }
        }
    } catch (g) {}
}


function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            "POST" === e && (s = this.post);
            const i = new Promise(((e, i) => {
                s.call(this, t, ((t, s, o) => {
                    t ? i(t) : e(s)
                }))
            }));
            return t.timeout ? ((t, e = 1e3) => Promise.race([t, new Promise(((t, s) => {
                setTimeout((() => {
                    s(new Error("请求超时"))
                }), e)
            }))]))(i, t.timeout) : i
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.logLevels = {
                debug: 0,
                info: 1,
                warn: 2,
                error: 3
            }, this.logLevelPrefixs = {
                debug: "[DEBUG] ",
                info: "[INFO] ",
                warn: "[WARN] ",
                error: "[ERROR] "
            }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        getEnv() {
            return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0
        }
        isNode() {
            return "Node.js" === this.getEnv()
        }
        isQuanX() {
            return "Quantumult X" === this.getEnv()
        }
        isSurge() {
            return "Surge" === this.getEnv()
        }
        isLoon() {
            return "Loon" === this.getEnv()
        }
        isShadowrocket() {
            return "Shadowrocket" === this.getEnv()
        }
        isStash() {
            return "Stash" === this.getEnv()
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null, ...s) {
            try {
                return JSON.stringify(t, ...s)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            if (this.getdata(t)) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return false
            }
        }
        getScript(t) {
            return new Promise((e => {
                this.get({
                    url: t
                }, ((t, s, i) => e(i)))
            }))
        }
        runScript(t, e) {
            return new Promise((s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                o = o ? 1 * o : 20, o = e && e.timeout ? e.timeout : o;
                const [r, a] = i.split("@"), n = {
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
                this.post(n, ((t, e, i) => s(i)))
            })).catch((t => this.logErr(t)))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    o = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let o = t;
            for (const t of i)
                if (o = Object(o)[t], void 0 === o) return s;
            return o
        }
        lodash_set(t, e, s) {
            return Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce(((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}), t)[e[e.length - 1]] = s), t
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), o = s ? this.getval(s) : "";
                if (o) try {
                    const t = JSON.parse(o);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = false;
            if (/^@/.test(e)) {
                const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e), r = this.getval(i), a = i ? "null" === r ? null : r || "{}" : "{}";
                try {
                    const e = JSON.parse(a);
                    this.lodash_set(e, o, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const r = {};
                    this.lodash_set(r, o, t), s = this.setval(JSON.stringify(r), i)
                }
            } else s = this.setval(t, e);
            return s
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
                return this.data = this.loaddata(), this.data[t];
            default:
                return this.data && this.data[t] || null
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
                return this.data = this.loaddata(), this.data[e] = t, this.writedata(), true;
            default:
                return this.data && this.data[e] || null
            }
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)))
        }
        get(t, e = (() => {})) {
            switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
                redirection: false
            })), this.getEnv()) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Shadowrocket":
            default:
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": false
                })), $httpClient.get(t, ((t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i)
                }));
                break;
            case "Quantumult X":
                this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: false
                })), $task.fetch(t).then((t => {
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
                    }, r, a)
                }), (t => e(t && t.error || "UndefinedError")));
                break;
            case "Node.js":
                let s = require("iconv-lite");
                this.initGotEnv(t), this.got(t).on("redirect", ((t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                })).then((t => {
                    const {
                        statusCode: i,
                        statusCode: o,
                        headers: r,
                        rawBody: a
                    } = t, n = s.decode(a, this.encoding);
                    e(null, {
                        status: i,
                        statusCode: o,
                        headers: r,
                        rawBody: a,
                        body: n
                    }, n)
                }), (t => {
                    const {
                        message: i,
                        response: o
                    } = t;
                    e(i, o, o && s.decode(o.rawBody, this.encoding))
                }));
                break
            }
        }
        post(t, e = (() => {})) {
            const s = t.method ? t.method.toLocaleLowerCase() : "post";
            switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
                redirection: false
            })), this.getEnv()) {
            case "Surge":
            case "Loon":
            case "Stash":
            case "Shadowrocket":
            default:
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": false
                })), $httpClient[s](t, ((t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i)
                }));
                break;
            case "Quantumult X":
                t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: false
                })), $task.fetch(t).then((t => {
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
                    }, r, a)
                }), (t => e(t && t.error || "UndefinedError")));
                break;
            case "Node.js":
                let i = require("iconv-lite");
                this.initGotEnv(t);
                const {
                    url: o, ...r
                } = t;
                this.got[s](o, r).then((t => {
                    const {
                        statusCode: s,
                        statusCode: o,
                        headers: r,
                        rawBody: a
                    } = t, n = i.decode(a, this.encoding);
                    e(null, {
                        status: s,
                        statusCode: o,
                        headers: r,
                        rawBody: a,
                        body: n
                    }, n)
                }), (t => {
                    const {
                        message: s,
                        response: o
                    } = t;
                    e(s, o, o && i.decode(o.rawBody, this.encoding))
                }));
                break
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
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
            return t
        }
        queryStr(t) {
            let e = "";
            for (const s in t) {
                let i = t[s];
                null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`)
            }
            return e = e.substring(0, e.length - 1), e
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
                case void 0:
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
                        return
                    }
                    case "object":
                        switch (this.getEnv()) {
                        case "Surge":
                        case "Stash":
                        case "Shadowrocket":
                        default: {
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
                                let t, e, s;
                                if (i.startsWith("http")) t = i;
                                else if (i.startsWith("data:")) {
                                    const [t] = i.split(";"), [, o] = i.split(",");
                                    e = o, s = t.replace("data:", "")
                                } else {
                                    e = i, s = (t => {
                                        const e = {
                                            JVBERi0: "application/pdf",
                                            R0lGODdh: "image/gif",
                                            R0lGODlh: "image/gif",
                                            iVBORw0KGgo: "image/png",
                                            "/9j/": "image/jpg"
                                        };
                                        for (var s in e)
                                            if (0 === t.indexOf(s)) return e[s];
                                        return null
                                    })(i)
                                }
                                Object.assign(r, {
                                    "media-url": t,
                                    "media-base64": e,
                                    "media-base64-mime": o ?? s
                                })
                            }
                            return Object.assign(r, {
                                "auto-dismiss": t["auto-dismiss"],
                                sound: t.sound
                            }), r
                        }
                        case "Loon": {
                            const s = {};
                            let o = t.openUrl || t.url || t["open-url"] || e;
                            o && Object.assign(s, {
                                openUrl: o
                            });
                            let r = t.mediaUrl || t["media-url"];
                            return i?.startsWith("http") && (r = i), r && Object.assign(s, {
                                mediaUrl: r
                            }), console.log(JSON.stringify(s)), s
                        }
                        case "Quantumult X": {
                            const o = {};
                            let r = t["open-url"] || t.url || t.openUrl || e;
                            r && Object.assign(o, {
                                "open-url": r
                            });
                            let a = t["media-url"] || t.mediaUrl;
                            i?.startsWith("http") && (a = i), a && Object.assign(o, {
                                "media-url": a
                            });
                            let n = t["update-pasteboard"] || t.updatePasteboard || s;
                            return n && Object.assign(o, {
                                "update-pasteboard": n
                            }), console.log(JSON.stringify(o)), o
                        }
                        case "Node.js":
                            return
                        }
                        default:
                            return
                }
            };
            if (!this.isMute) switch (this.getEnv()) {
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
                break
            }
            if (!this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        debug(...t) {
            this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map((t=>t??String(t))).join(this.logSeparator)}`))
        }
        info(...t) {
            this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map((t=>t??String(t))).join(this.logSeparator)}`))
        }
        warn(...t) {
            this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map((t=>t??String(t))).join(this.logSeparator)}`))
        }
        error(...t) {
            this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map((t=>t??String(t))).join(this.logSeparator)}`))
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.map((t => t ?? String(t))).join(this.logSeparator))
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
                this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
                break
            }
        }
        wait(t) {
            return new Promise((e => setTimeout(e, t)))
        }
        done(t = {}) {
            const e = ((new Date).getTime() - this.startTime) / 1e3;
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
                process.exit(1)
            }
        }
    }(t, e)
}
if (typeof $done === 'function') {    $done({ body: YZV });} else {    $.done({ body: YZV });}
