globalThis.SCRIPT_NAME = "✨签到合集✨ · 无参数"; // auto-injected
/*
#!name=✨签到合集✨ · 无参数（QX）
#!desc=与 signall 规则一致，无 #!arguments、无 enabled={{{…}}} 占位，减轻 QX 重写校验异常；按 App 关闭请自行注释行或改用 signall.js。QX「重写-远程」勿含段名请用 /qx/signall_noargs/rewrite（部署后）；勿用 Parser 再转
#!category=✅签到
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://img.mikephie.site/APP_logo/sign.png
#!subscription=https://js.mikephie.com/signall_noargs
# Surge/Loon 请继续用 signall（本文件仅 QX）。QX：
# QX 全量: https://js.mikephie.com/qx/signall_noargs
# QX 仅重写: https://js.mikephie.com/qx/signall_noargs/rewrite
# QX 仅任务: https://js.mikephie.com/qx/signall_noargs/task
# QX 仅 MITM: https://js.mikephie.com/qx/signall_noargs/mitm
[rewrite_local]
# 吾爱破解获取Cookie
^https:\/\/www\.52pojie\.cn\/home\.php\? url script-request-header https://ijs.mikephie.com/task/52pojie.js
# AVBingo获取Cookie
^https:\/\/av\.bingo\/index\.php\/.* url script-request-header https://ijs.mikephie.com/task/avbingo.js
# Emby获取Cookie
^https?:\/\/.*?\/(emby|jellyfin)\/.* url script-request-header https://ijs.mikephie.com/task/Emby_Unified.js
# QQ获取Cookie
^https?:\/\/iostgw\.reader\.qq\.com\/v7_6_6\/userinfo\? url script-request-header https://ijs.mikephie.com/task/qqreader.js
# HDHive获取Cookie
^https:\/\/hdhive\.com\/?(\?.*)?$ url script-request-header https://ijs.mikephie.com/task/hdhive.js
# KUWO获取Cookie（与 task/kuwo_Cookies 说明一致：桌面站首页 www.kuwo.cn、H5/integralapi/loginserver 多入口）
^https?:\/\/((.*\/(newh5app\/singers\/0\?|openapi\/v1\/www\/search\/searchKey\?))|(integralapi\.kuwo\.cn\/api\/v1\/online\/sign\/v1\/earningSignIn\/)|(loginserver\.kuwo\.cn\/)|(www\.kuwo\.cn\/?(\?.*)?$)) url script-request-header https://ijs.mikephie.com/task/kuwo_Cookies.js

[task_local]
# 酷我每约 12 分钟：*/12 与 0,12,24,36,48 等价；若某环境报解析错再改回显式列表
0 9 * * * https://ijs.mikephie.com/task/52pojie.js, tag=吾爱破解签到, img-url=https://images.mikephie.com/APP_logo/52pojie.png
8 12 * * * https://ijs.mikephie.com/task/avbingo.js, tag=AVBingo签到, img-url=https://images.mikephie.com/APP_logo/avbingo.png
0 12/20 * * * https://ijs.mikephie.com/task/Emby_Unified.js, tag=Emby签到, img-url=https://images.mikephie.com/APP_logo/emby.png
30 7 * * * https://ijs.mikephie.com/task/qqreader.js, tag=QQ签到, img-url=https://images.mikephie.com/APP_logo/qqreader.png
18 12 * * * https://ijs.mikephie.com/task/hdhive.js, tag=HDHive签到, img-url=https://images.mikephie.com/APP_logo/hdvive.png
*/12 * * * * https://ijs.mikephie.com/task/kuwo.js, tag=KUWO签到, img-url=https://images.mikephie.com/APP_logo/kuwo.png

[MITM]
hostname = www.52pojie.cn, av.bingo, link00.okemby.org:8443, gy.meowfly.de, lite.cn2gias.uk, speedtestdeemby.191920.xyz, emby.hohai.eu.org, hdhive.com, *.reader.qq.com, integralapi.kuwo.cn, loginserver.kuwo.cn, *.kuwo.cn

*/
