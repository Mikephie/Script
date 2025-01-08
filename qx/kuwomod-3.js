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

// Surge 特定的处理函数
async function getInfo(c, d) {
    let e = 'type=' + d + '&user=' + c;
    if (!KuWo.user || c != KuWo.user || !KuWo.endTime || new Date().getTime() > KuWo.endTime || !KuWo.keys) {
        $.log('正在获取 ' + c + ' 的授权信息…');
        try {
            let response = await $httpClient.post({
                url: 'https://napi.ltd/getInfo',
                body: e
            });
            let g = JSON.parse(response.body);
            for (let h in g) {
                if (g.hasOwnProperty(h)) {
                    KuWo[h] = g[h];
                }
            }
            $.setval($.toStr(KuWo), 'KuWo');
            $.log('数据获取完成...');
            if (g.isVip) {
                let l = new Date(KuWo.endTime);
                let m = l.getFullYear() + '-' + (l.getMonth() < 0xa ? '0' + (l.getMonth() + 0x1) : l.getMonth() + 0x1) + '-' + (l.getDate() < 0xa ? '0' + l.getDate() : l.getDate());
                $.log('当前账户 ' + c + ' 已授权\x0a授权有效期至：' + m);
                $.msg('当前账户 ' + c + ' 已授权', '', '授权有效期至：' + m);
            } else {
                $.log('未能获取到当前账户 ' + c + ' 的授权信息\x0a即将再次获取你的授权信息');
                $.msg('未获取到授权信息', '', '请重启应用或点击本条通知获取授权码', {
                    'open-url': 'https://napi.ltd/authPay?action=kuwo&user=' + c,
                    'media-url': 'https://file.napi.ltd/Static/Image/KuWo.png'
                });
            }
        } catch (e) {
            $.logErr(e);
        }
    } else {
        $.log('当前账户 ' + c + ' 已授权\x0a祝使用愉快！');
    }
}

async function getVer() {
    try {
        let response = await $httpClient.get('https://sharechain.qq.com/cfa48d8b4551a20d5e6c016bdf3823ff');
        let info = response.body.match(/<article class=\"note-body\">([\s\S]*?)<\/article>/);
        let res = info[0x1].replace(/(\s|<.*?>)/g, '');
        let obj = JSON.parse(res);
        if (LocVer != obj.kuwo) $.msg('需要更新 -> 请更新你的脚本！');
        KuWo.ver = obj.kuwo;
        $.setval($.toStr(KuWo), 'KuWo');
    } catch (e) {
        $.logErr(e);
    }
}

// 处理其他URL匹配的逻辑
if (url.endsWith(KuWo_Down)) {
    if (obj.hasOwnProperty('songs')) {
        id = obj.songs[0x0].id;
        if ('number' !== typeof id) id = body.replace(/.*?\"id\":(\d+).*/, '$1');
        KuWo.PlayID = id;
        KuWo.Song = 'music';
        $.setval($.toStr(KuWo), 'KuWo');
        obj.songs[0x0].audio.forEach(a => a.st = 0x0);
    }
    let tmp = obj.songs[0x0].audio[0x0].policy;
    obj.user[0x0] = {
        'pid': obj.songs[0x0].audio[0x0].pid,
        'type': tmp,
        'name': tmp + '_1',
        'categray': tmp + '_1',
        'id': obj.songs[0x0].id,
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
        'price': obj.songs[0x0].audio[0x0].price,
        'period': 0x3e8,
        'feetype': 0x0,
        'info': obj.songs[0x0]
    };
    body = $.toStr(obj);
    $done({body});
}

// 其他URL处理逻辑保持不变，但适配 Surge 的响应方式
if (url.match(KuWo_Book)) {
    if (obj.hasOwnProperty('songs')) {
        for (let key in obj.songs) {
            id = obj.songs[key].id;
            if ('number' !== typeof id) id = body.replace(/.*?\"id\":(\d+).*/, '$1');
            if ('number' == typeof id) {
                KuWo.PlayID = id;
                KuWo.Song = 'book';
                $.setval($.toStr(KuWo), 'KuWo');
                break;
            }
        }
    }
    body = body.replace(/(policy|policytype)\":\d/g, '$1":0')
               .replace(/(playright|downright|type|bought_vip|limitfree|vipType)\":\d/g, '$1":1')
               .replace(/(end|endtime|vipExpires)\":\d+/g, '$1":4077187200');
    $done({body});
}

// 处理其他URL匹配
if (url.match(KuWo_Vip)) {
    obj.data.vipIcon = 'https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png';
    delete obj.data.iconJumpUrl;
    delete obj.data.adActUrl;
    obj.data.growthValue = '9999';
    obj.data.vipTag = 'VIP7';
    // ... (其他属性设置保持不变)
    body = $.toStr(obj);
    $done({body});
}

// ... (其他URL处理逻辑类似，都需要使用 $done({body}) 来结束)