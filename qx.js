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
# AVBingo获取Cookie
^https:\/\/av\.bingo\/index\.php\/.* url script-request-header https://ijs.mikephie.com/task/avbingo.js


[task_local]
# 酷我每约 12 分钟：*/12 与 0,12,24,36,48 等价；若某环境报解析错再改回显式列表
8 12 * * * https://ijs.mikephie.com/task/avbingo.js, tag=AVBingo签到, img-url=https://images.mikephie.com/APP_logo/avbingo.png


[MITM]
hostname = www.52pojie.cn, av.bingo, link00.okemby.org:8443, gy.meowfly.de, lite.cn2gias.uk, speedtestdeemby.191920.xyz, emby.hohai.eu.org, hdhive.com, *.reader.qq.com, integralapi.kuwo.cn, loginserver.kuwo.cn, *.kuwo.cn

*/
