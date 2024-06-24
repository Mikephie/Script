/*        
        ➪：脚本名称: 边框水印大师 更新时间 ：23 Jun 2024 at 01:04

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local] 
^https?:\/\/photoby\.hasmash\.com\/app\/browseEvent url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ds1.js

[MITM]
hostname = photoby.hasmash.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
    'message': '成功!',
    'result': {
        'id': 13706739,
        'pageName': '首页',
        'elementId': '付费点击',
        'uid': 'efe376d39b4f4385a45cb19ae0c8c13b',
        'iosOrAnd': 'ios',
        'version': '1.6.8',
        'isVip': 1,
        'isCN': 1,
        'deviceId': '26242316-0D4E-4F0F-A1B2-1FE5A99E68BC',
        'deviceType': 'iPhone 15 Pro Max',
        'pageTitle': '',
        'elementPosition': '',
        'elementContent': '付费页面',
        'ip': '138.75.199.125'
        'vipTime': '2099-09-09 12:17:41'
    },
    'code': '00000'
}
  

$done({body : JSON.stringify(mikephie)});