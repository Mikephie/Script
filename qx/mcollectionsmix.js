⚙ 配置 (Quantumult X)


[rewrite_local]

#************************************#
# 66铃声 解锁VIP @Rnik666
# Link = https://apps.apple.com/ng/app/66%E9%A2%86%E5%A3%B0-%E6%89%8B%E6%9C%BA%E5%BD%A9%E7%8E%B2%E5%A3%B0/id1517634537
# hostname = kkyun.com
^https?:\/\/kkyun\.com\/api\/accounts\/user? url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/66LS.js

#************************************#
# 海报制作大师 解锁VIP @Rnik666
# Link = https://apps.apple.com/ng/app/poster-maker-ai-flyer-editor/id1477780495
# hostname = poster.leminet.cn
^https?:\/\/poster\.leminet\.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/HBZZDS.js

#************************************#
# 起名有福 解锁VIP @Rnik666
# Link = https://apps.apple.com/ng/app/%E8%B5%B7%E5%90%8D%E6%9C%89%E7%A6%8F-%E5%AE%9D%E5%AE%9D%E5%8F%96%E5%90%8D%E5%AD%97%E8%BD%AF%E4%BB%B6/id1447841037
# hostname = www.qimingyoufu.cn
^https?:\/\/www\.qimingyoufu\.cn\/v01\/user-info url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/QMYF.js

#************************************#
# 电子请柬制作 解锁VIP @Rnik666
# Link = https://apps.apple.com/ng/app/invitation-maker-flyer-creator/id1354806829
# hostname = cn.invit.vip
^https?:\/\/cn\.invit\.vip\/users\/info url script-response-body https://raw.githubusercontent.com/Rnik666/YJTJS/main/DZQTZZ.js

#************************************#
# 微商海报-海报制作&搞定海报设计（永久会员） V1.3.8 @GieGie777
# Link = https://apps.apple.com/ng/app/%E5%BE%AE%E5%95%86%E6%B5%B7%E6%8A%A5-%E6%B5%B7%E6%8A%A5%E5%88%B6%E4%BD%9C-%E6%90%9E%E5%AE%9A%E6%B5%B7%E6%8A%A5%E8%AE%BE%E8%AE%A1/id1353658626
# hostname = api-poster.ycase.cn
^https?:\/\/api-poster.ycase.cn\/(web\/display\?subject|api\/user\/info|api\/User\/home) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/wshb.js

#************************************#
# 彩豆视频水印宝 – 视频加水印制作视频剪辑（永久会员） V1.1.1 @GieGie777
# Link = https://apps.apple.com/ng/app/%E5%BD%A9%E8%B1%86%E8%A7%86%E9%A2%91%E6%B0%B4%E5%8D%B0%E5%AE%9D-%E8%A7%86%E9%A2%91%E5%89%AA%E8%BE%91%E6%B0%B4%E5%8D%B0%E5%A4%84%E7%90%86%E4%B8%93%E5%AE%B6/id1670051783
# hostname = appss.baomingding.com
^https?:\/\/appss.baomingding.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/cdsp.js

#************************************#
# 作业批改-家长辅导作业工具（永久会员） V2.1.1 @GieGie777
# Link = https://apps.apple.com/ng/app/%E4%BD%9C%E4%B8%9A%E6%89%B9%E6%94%B9-%E4%BD%9C%E4%B8%9A%E6%A3%80%E6%9F%A5%E5%92%8C%E5%B0%8F%E5%AD%A6%E8%BE%85%E5%AF%BC/id1574452927
# hostname = appss.rhinoxlab.com
^https?:\/\/appss.rhinoxlab.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/zypg.js


[MITM]
hostname = kkyun.com, poster.leminet.cn, www.qimingyoufu.cn, cn.invit.vip， api-poster.ycase.cn，appss.baomingding.com， appss.rhinoxlab.com