/*************************************

项目名称：扫描全能王 解锁黄金会员
下载地址：https://t.cn/A6ouHe4B
脚本作者：chxm1023
使用说明：解锁部分功能，使用前先开脚本。
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]

^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/id77/QuantumultX/master/Script/camscanner.js

[mitm]

hostname = *.camscanner.com, *.intsig.net

*************************************/