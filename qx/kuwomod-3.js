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
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic)|app/newMenuList/menuListInfo|tingshu/index/radio|operate/homePage)|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://napi.ltd/script/Worker/KuWo.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png


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

