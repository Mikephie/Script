/*
 *
 *
脚本功能：itranscreen-屏幕翻译、游戏、漫画和视频实时翻译
软件版本：3.2.4
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >itranscreen-屏幕翻译
^https?:\/\/.+.(itranscreen|tencentcs).+\/(settings|api\/v1\/user\/quota\?user_id).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/iTranscreen.js


[mitm]
hostname = *.tencentcs.com,settings.itranscreen.com,api.itranscreen.com:8080

*
*
*/

