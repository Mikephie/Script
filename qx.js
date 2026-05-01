globalThis.SCRIPT_NAME = "✨签到合集✨"; // auto-injected
/*
#!name=✨签到合集✨
#!desc=应用与论坛。QX: 「重写-远程」里禁止出现 [rewrite_local] 段名(会报 Invalid line)，请用下方 /qx/signall/rewrite 纯规则；勿用 Shawn 等 Parser 再转(易 404/无效)。整份配置仍用 /qx/signall
#!category=✅签到
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://img.mikephie.site/APP_logo/sign.png
#!subscription=https://js.mikephie.com/signall
#!arguments=POJIE:true,AVBINGO:true,EMBY:true,QQREAD:true,HDHIVE:true,KUWO:true
#!arguments-desc=分应用: POJIE,AVBINGO,EMBY,QQREAD,HDHIVE,KUWO。QX 重写页填 https://js.mikephie.com/qx/signall/rewrite ；定时用 /qx/signall/task ；全量含段名用 /qx/signall
# Surge:  https://js.mikephie.com/surge/signall
# Loon:   https://js.mikephie.com/loon/signall
# QX 全量:  https://js.mikephie.com/qx/signall
# QX 仅重写: https://js.mikephie.com/qx/signall/rewrite
# QX 仅任务: https://js.mikephie.com/qx/signall/task
# QX 仅 MITM: https://js.mikephie.com/qx/signall/mitm
[rewrite_local]
# 吾爱破解获取Cookie
^https:\/\/www\.52pojie\.cn\/home\.php\? url script-request-header https://ijs.mikephie.com/task/52pojie.js, enabled={{{POJIE}}}
# AVBingo获取Cookie
^https:\/\/av\.bingo\/index\.php\/.* url script-request-header https://ijs.mikephie.com/task/avbingo.js, enabled={{{AVBINGO}}}
# Emby获取Cookie
^https?:\/\/.*?\/(emby|jellyfin)\/.* url script-request-header https://ijs.mikephie.com/task/Emby_Unified.js, enabled={{{EMBY}}}
# QQ获取Cookie
^https?:\/\/iostgw\.reader\.qq\.com\/v7_6_6\/userinfo\? url script-request-header https://ijs.mikephie.com/task/qqreader.js, enabled={{{QQREAD}}}
# HDHive获取Cookie
^https:\/\/hdhive\.com\/?(\?.*)?$ url script-request-header https://ijs.mikephie.com/task/hdhive.js, enabled={{{HDHIVE}}}
# KUWO获取Cookie（与 task/kuwo_Cookies 说明一致：桌面站首页 www.kuwo.cn、H5/integralapi/loginserver 多入口）
^https?:\/\/((.*\/(newh5app\/singers\/0\?|openapi\/v1\/www\/search\/searchKey\?))|(integralapi\.kuwo\.cn\/api\/v1\/online\/sign\/v1\/earningSignIn\/)|(loginserver\.kuwo\.cn\/)|(www\.kuwo\.cn\/?(\?.*)?$)) url script-request-header https://ijs.mikephie.com/task/kuwo_Cookies.js, enabled={{{KUWO}}}

[task_local]
# 酷我每约 12 分钟：*/12 与 0,12,24,36,48 等价；若某环境报解析错再改回显式列表
0 9 * * * https://ijs.mikephie.com/task/52pojie.js, tag=吾爱破解签到, img-url=https://images.mikephie.com/APP_logo/52pojie.png, enabled={{{POJIE}}}
8 12 * * * https://ijs.mikephie.com/task/avbingo.js, tag=AVBingo签到, img-url=https://images.mikephie.com/APP_logo/avbingo.png, enabled={{{AVBINGO}}}
0 12/20 * * * https://ijs.mikephie.com/task/Emby_Unified.js, tag=Emby签到, img-url=https://images.mikephie.com/APP_logo/emby.png, enabled={{{EMBY}}}
30 7 * * * https://ijs.mikephie.com/task/qqreader.js, tag=QQ签到, img-url=https://images.mikephie.com/APP_logo/qqreader.png, enabled={{{QQREAD}}}
18 12 * * * https://ijs.mikephie.com/task/hdhive.js, tag=HDHive签到, img-url=https://images.mikephie.com/APP_logo/hdvive.png, enabled={{{HDHIVE}}}
*/12 * * * * https://ijs.mikephie.com/task/kuwo.js, tag=KUWO签到, img-url=https://images.mikephie.com/APP_logo/kuwo.png, enabled={{{KUWO}}}

[MITM]
hostname = www.52pojie.cn, av.bingo, link00.okemby.org:8443, gy.meowfly.de, lite.cn2gias.uk, speedtestdeemby.191920.xyz, emby.hohai.eu.org, hdhive.com, *.reader.qq.com, integralapi.kuwo.cn, loginserver.kuwo.cn, *.kuwo.cn

*/
