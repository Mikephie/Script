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
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic)|app/newMenuList/menuListInfo|tingshu/index/radio|operate/homePage)|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/kuwomod-3.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png


[Mitm]
hostname = *.kuwo.cn

****************************/

const KuWoLf = function () {
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
const KuWoLe = KuWoLf(this, function () {
    const a = function () {
        const b = a.constructor('return /" + this + \"/')().compile('^([^ ]+( +[^ ]+' + ')+)+[^ ]}');
        return !b.test(KuWoLe);
    };
    return a();
});
KuWoLe();
const KuWoLd = function () {
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
    KuWoLd(this, function () {
        const a = new RegExp('function *\\( *\\)');
        const b = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const c = KuWoLc('init');
        if (!a.test(c + 'chain') || !b.test(c + 'input')) {
            c('0');
        } else {
            KuWoLc();
        }
    })();
}());
const $ = new Env('酷我音乐');
const NC = new NapiCode();
const Play_URL = '/mobi.s?f=kwxs';
const KuWo_Down = '/music.pay?newver=3';
const KuWo_Book = RegExp(/(a\.p|v\d\/api\/(user\/personal\/)?user\/info)/);
const KuWo_Enc = '/vip/enc';
const KuWo_Vip = RegExp(/(vip\/)?v\d\/(api(\/pay)?\/user\/info|user\/vip)/);
const KuWo = $.toObj($.getval('KuWo')) || {};
const LocVer = '5.1.5';
var url = 'undefined' !== typeof $request ? $request.url : '';
var body = 'undefined' !== typeof $response ? $response.body : null;
let obj = $.toObj(body);

if (url.indexOf(Play_URL) != -0x1) {
    let keys = KuWo.keys;
    let key = keys[Math.floor(Math.random() * keys.length)];
    let arr = [];
    key.forEach((a, b) => {
        arr[b] = NC.ntoc(a);
    });
    let UserID = KuWo.user;
    let PlayID = KuWo.PlayID;
    let PlayUrl = arr.join('_');
    let Song = KuWo.Song;
    let Ver = KuWo.ver;
    let rid = body.replace(/.*?\"rid\":(\d+).*/, '$1');
    !(async () => {
        await getInfo(UserID, 'kuwo');
        await getVer();
        if (KuWo.isVip && new Date().getTime() < KuWo.endTime && LocVer == Ver && rid != PlayID) {
            const qualities = [
                { br: 0xfa0, url: '4000kflac' },
                { br: 0x7d0, url: '2000kflac' },
                { br: 0x140, url: '320kmp3' }
            ];
            let index = Song === 'book' ? 2 : 0;
            while (qualities[index]) {
                const requestOptions = {
                    url: `http://mobi.kuwo.cn/mobi.s?f=web&source=${PlayUrl}&type=convert_url_with_sign&br=${qualities[index].url}&rid=${PlayID}`
                };
                await $.http.get(requestOptions).then(res => {
                    body = res.body;
                    obj = $.toObj(body);
                });
                if (obj.data.bitrate === qualities[index].br) break;
                index++;
            }
        }
        KuWo.PlayID = '';
        $.setval($.toStr(KuWo), 'KuWo');
        const response = { body: body };
        $.done(response);
    })();
}

if (url.match(KuWo_Vip)) {
    obj.data.vipIcon = 'https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png';
    delete obj.data.iconJumpUrl;
    delete obj.data.adActUrl;
    obj.data.growthValue = '9999';
    obj.data.vipTag = 'VIP7';
    obj.data.vipmIcon = 'https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png';
    obj.data.svipIcon = 'https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png';
    obj.data.openBtnText = '永久会员';
    obj.data.vipExpire = '4077187200315';
    obj.data.vipExpires = 0x3b54b4b753b;
    obj.data.luxuryIcon = 'https://image.kuwo.cn/fe/2fae68ff-de2d-4473-bf28-8efc29e44968vip.png';
    obj.data.vipmExpire = '4077187200315';
    obj.data.vipLuxuryExpire = '4077187200315';
    obj.data.svipExpire = '4077187200315';
    obj.data.isYearUser = '2';
    obj.data.biedSong = '1';
    obj.data.svipAutoPayUser = '1';
    body = $.toStr(obj);
    const KuWoLj = {};
    KuWoLj.body = body;
    $.done(KuWoLj);
}

if (url.match(KuWo_Book)) {
    body = body.replace(/(policy|policytype)\":\d/g, '$1":0').replace(/(playright|downright|type|bought_vip|limitfree|vipType)\":\d/g, '$1":1').replace(/(end|endtime|vipExpires)\":\d+/g, '$1":4077187200');
    const KuWoLh = {};
    KuWoLh.body = body;
    $.done(KuWoLh);
}
if (url.match(KuWo_Theme)) {
    obj.data.vipTheme.type = 'free';
    delete obj.data.needBieds;
    body = $.toStr(obj);
    const KuWoLk = {};
    KuWoLk.body = body;
    $.done(KuWoLk);
}
if (url.match(Book_Home)) {
    obj.data.scheme = null;
    obj.data.title = '酷我畅听';
    obj.data.url = null;
    obj.data.subTitle = '畅听服务由影子提供';
    body = $.toStr(obj);
    const KuWoLl = {};
    KuWoLl.body = body;
    $.done(KuWoLl);
}
if (url.match(KuWo_AD)) {
    body = 'YingZi';
    const KuWoLm = {};
    KuWoLm.body = body;
    $.done(KuWoLm);
}

async function getVer() {
    url = 'https://sharechain.qq.com/cfa48d8b4551a20d5e6c016bdf3823ff';
    const info = await $.http.get(url).then(a => a.body);
    const match = info.match(/<article class=\"note-body\">([\s\S]*?)<\/article>/);
    const res = match[1].replace(/(\s|<.*?>)/g, '');
    const obj = $.toObj(res);
    if (LocVer != obj.kuwo) $.msg('需要更新 -> 请更新你的脚本！');
    KuWo.ver = obj.kuwo;
    $.setval($.toStr(KuWo), 'KuWo');
}

async function getInfo(c, d) {
    const e = 'type=' + d + '&user=' + c;
    if (!KuWo.user || c != KuWo.user || !KuWo.endTime || new Date().getTime() > KuWo.endTime || !KuWo.keys) {
        $.log('正在获取 ' + c + ' 的授权信息…');
        const f = { url: 'https://napi.ltd/getInfo', body: e };
        const g = $.toObj(await $.http.post(f).then(h => h.body));
        Object.assign(KuWo, g);
        $.setval($.toStr(KuWo), 'KuWo');
        $.log('数据获取完成...');
    }
}
