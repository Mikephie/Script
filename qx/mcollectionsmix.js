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
# 边框水印大师 @Rnik666
# Link = https://apps.apple.com/ng/app/photoby-batch-adding-watermark/id1673694497
# hostname = photoby.hasmash.com
^https?:\/\/photoby\.hasmash\.com\/app\/browseEvent url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/DS1.js
^https?:\/\/photoby\.hasmash\.com\/auth\/member url script-response-body https://raw.githubusercontent.com/Rnik666/666/main/DS2.js



[MITM]
hostname = kkyun.com, poster.leminet.cn, www.qimingyoufu.cn, cn.invit.vip, photoby.hasmash.com