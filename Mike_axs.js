*/*************************************

项目名称：AXS-去广告
下载地址：
脚本作者：Mikephie
电报频道：
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage url reject dict
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/InfoPage url reject dict
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/highlight url reject-200
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/highlight url reject-200
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/Mike_axs.js
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/InfoPage url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/Mike_axs.js

[mitm]
hostname = m-station.axs.com.sg, m-station2.axs.com.sg

*************************************/


var body = $response.body;
var Mikephie= JSON.parse(body);

function recursiveRemoval(Mikephie) {
    for (let key in Mikephie) {
        if (typeof(Mikephie[key]) === 'object') {
            if ('layout' in Mikephie[key] && Mikephie[key]['layout'] === 'advert_self') {
                delete Mikephie[key];
            } else {
                recursiveRemoval(Mikephie[key]);
            }
        }
    }
}

recursiveRemoval(Mikephie);

body = JSON.stringify(Mikephie);
$done({body});
