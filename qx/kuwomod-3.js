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
const YZB = new Env('酷我音乐');
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
const YZS = YZB.toObj(YZB.getval('KuWo')) || {};
const YZT = '4.12.29';
var YZU = 'undefined' !== typeof $request ? $request.url : '';
var YZV = 'undefined' !== typeof $response ? $response.body : null;
var YZW = YZB.toObj(YZV);
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
                await YZB.http.get(p).then(q => {
                    YZV = q.body;
                    YZW = YZB.toObj(YZV);
                });
                if (h.vYpKJ(YZW.data.bitrate, n[o].br)) break;
                o++;
            }
        }
        YZS.PlayID = '';
        YZB.setval(YZB.toStr(YZS), 'KuWo');
        const j = {};
        j.body = YZV;
        YZB.done(j);
    })();
}
if (YZU.endsWith(YZE)) {
    if (YZW.hasOwnProperty('songs')) {
        const YZac = '3|2|4|1|0|5' ['split']('|');
        let YZad = 0x0;
        while (true) {
            switch (YZac[YZad++]) {
            case '0':
                YZB.setval(YZB.toStr(YZS), 'KuWo');
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
    YZV = YZB.toStr(YZW);
    const YZab = {};
    YZab.body = YZV;
    YZB.done(YZab);
}
if (YZU.match(YZF)) {
    if (YZW.hasOwnProperty('songs')) {
        for (let YZaf in YZW.songs) {
            id = YZW.songs[YZaf].id;
            if ('number' !== typeof id) id = YZV.replace(/.*?\"id\":(\d+).*/, '$1');
            if ('number' == typeof id) {
                YZS.PlayID = id;
                YZS.Song = 'book';
                YZB.setval(YZB.toStr(YZS), 'KuWo');
                break;
            }
        }
    }
    YZV = YZV.replace(/(policy|policytype)\":\d/g, '$1":0').replace(/(playright|downright|type|bought_vip|limitfree|vipType)\":\d/g, '$1":1').replace(/(end|endtime|vipExpires)\":\d+/g, '$1":4077187200');
    const YZae = {};
    YZae.body = YZV;
    YZB.done(YZae);
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
        let g = await YZB.http.get(YZU.replace(/uid=\d+/g, d.uoxGt)).then(j => j.body);
        const h = {};
        h.body = g;
        YZB.done(h);
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
            YZV = YZB.toStr(YZW);
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
            YZB.done(YZai);
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
    YZV = YZB.toStr(YZW);
    const YZaj = {};
    YZaj.body = YZV;
    YZB.done(YZaj);
}
if (YZU.indexOf(YZJ) != -0x1) {
    const YZak = '4|3|1|2|5|0' ['split']('|');
    let YZal = 0x0;
    while (true) {
        switch (YZak[YZal++]) {
        case '0':
            const YZam = {};
            YZam.body = YZV;
            YZB.done(YZam);
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
            YZV = YZB.toStr(YZW);
            continue;
        }
        break;
    }
}
if (YZU.match(YZK)) {
    YZV = 'YingZi';
    const YZan = {};
    YZan.body = YZV;
    YZB.done(YZan);
}
if (YZU.indexOf(YZL) != -0x1) {
    delete YZW.data.songListTopContext;
    YZV = YZB.toStr(YZW);
    const YZao = {};
    YZao.body = YZV;
    YZB.done(YZao);
}
if (YZU.indexOf(YZM) != -0x1) {
    delete YZW.data;
    delete YZW.dataV2;
    YZV = YZB.toStr(YZW);
    const YZap = {};
    YZap.body = YZV;
    YZB.done(YZap);
}
if (YZU.indexOf(YZN) != -0x1) {
    let YZaq = 0x0;
    while (YZW.data.child[YZaq]) {
        if (/^小焦点/ ['test'](YZW.data.child[YZaq].label)) delete YZW.data.child[YZaq].child;
        YZaq++;
    }
    YZV = YZB.toStr(YZW);
    const YZar = {};
    YZar.body = YZV;
    YZB.done(YZar);
}
if (YZU.indexOf(YZO) != -0x1) {
    if ('undefined' !== typeof YZW.data.tab.vipTypes[0x0]) {
        let YZat = 0x1;
        while (YZW.data.tab.vipTypes[0x0].topics[YZat]) {
            delete YZW.data.tab.vipTypes[0x0].topics[YZat];
            YZat++;
        }
    }
    YZV = YZB.toStr(YZW);
    const YZas = {};
    YZas.body = YZV;
    YZB.done(YZas);
}
if (YZU.indexOf(YZP) != -0x1) {
    YZW.data = [];
    YZV = YZB.toStr(YZW);
    const YZau = {};
    YZau.body = YZV;
    YZB.done(YZau);
}
if (YZU.indexOf(YZQ) != -0x1) {
    delete YZW.data.listenSomething;
    YZV = YZB.toStr(YZW);
    const YZav = {};
    YZav.body = YZV;
    YZB.done(YZav);
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
    YZV = YZB.toStr(YZW);
    const YZay = {};
    YZay.body = YZV;
    YZB.done(YZay);
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
            YZB.setval(YZB.toStr(YZS), c.JLhJK);
            continue;
        case '1':
            YZW = YZB.toObj(res);
            continue;
        case '2':
            YZS.ver = YZW.kuwo;
            continue;
        case '3':
            if (c.NBJNo(YZT, YZW.kuwo)) YZB.msg(c.hykdt);
            continue;
        case '4':
            info = info.match(/<article class=\"note-body\">([\s\S]*?)<\/article>/);
            continue;
        case '5':
            res = info[0x1].replace(/(\s|<.*?>)/g, '');
            continue;
        case '6':
            info = await YZB.http.get(YZU).then(f => f.body);
            continue;
        case '7':
            YZU = c.XERZN;
            continue;
        }
        break;
    }
}