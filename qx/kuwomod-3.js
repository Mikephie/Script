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
        const a = new RegExp('function *\\( *\\' + ')');
        const b = new RegExp('\\+\\+ *(?:[a-zA-' + 'Z_$][0-9a-zA-Z_$]*)', 'i');
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
const KuWo_Theme = RegExp(/vip\/v\d\/theme\?op\=gd/);
const Book_Home = RegExp(/v\d\/api\/advert\/myPage/);
const KuWo_AD = RegExp(/(v\d\/api\/advert\/(iListen|album)|openapi\/v\d\/album\/adBar|(\/EcomResource|\/(Mobile)?Ad)Serv(er|ice))/);
const KuWo_ListAD = RegExp(/vip\/v\d\/sysinfo\?op\=getRePayAndDoPayBoxNew/);
const KuWo_BookAD = RegExp(/v\d\/api\/pay\/payInfo\/kwplayer\/payMiniBar/);
const KuWo_BookPageAD = RegExp(/openapi\/v\d\/tingshu\/index\/radio/);
const KuWo_TabAD = '/kuwopay/vip-tab/setting';
const KuWo_MenuAD = RegExp(/openapi\/v\d\/app\/newMenuList\/menuListInfo/);
const KuWo_HomeAD = RegExp(/openapi\/v\d\/album\/myRec\/vipMusic/);
const KuWo_HomeTopAD = RegExp(/openapi\/v\d\/operate\/homePage/);

const KuWo = $.toObj($.getval('KuWo')) || {};
const LocVer = '5.1.5';
var url = 'undefined' !== typeof $request ? $request.url : '';
var body = 'undefined' !== typeof $response ? $response.body : null;
let obj = $.toObj(body);

// 适配 Surge 的关键修改
if (typeof $environment !== 'undefined' && $environment["surge-version"]) {
    if ($response && $response.body) {
        body = $response.body;
        try {
            obj = JSON.parse(body);
        } catch (e) {}
    }
}

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
    
    // Surge 特殊处理
    if (typeof $environment !== 'undefined' && $environment["surge-version"]) {
        !(async () => {
            await getInfo(UserID, 'kuwo');
            await getVer();
            if (KuWo.isVip && new Date().getTime() < KuWo.endTime && LocVer == Ver && rid != PlayID) {
                const g = {};
                g.br = 0xfa0;
                g.url = '4000kflac';
                const h = {};
                h.br = 0x7d0;
                h.url = '2000kflac';
                const j = {};
                j.br = 0x140;
                j.url = '320kmp3';
                let k = [g, h, j];
                let l = 0x0;
                if ('book' == Song) l = 0x2;
                while (k[l]) {
                    const m = {};
                    m.url = 'http://mobi.kuwo.cn/mobi.s?f=web&source=' + PlayUrl + ('&type=convert_url_with_sign&br' + '=') + k[l].url + '&rid=' + PlayID;
                    try {
                        let response = await $httpClient.get(m.url);
                        body = response.body;
                        obj = JSON.parse(body);
                    } catch (e) {}
                    if (obj.data.bitrate == k[l].br) break;
                    l++;
                }
            }
            KuWo.PlayID = '';
            $.setval($.toStr(KuWo), 'KuWo');
            $done({body: body});
        })();
    }
}

