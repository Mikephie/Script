/*        
        ➪：脚本名称: PosterMaker （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ


[rewrite_local]
^https:\/\/dcdnposter\.leminet\.cn\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/haibao.js


[mitm] 
hostname = dcdnposter.leminet.cn

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
*/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe); 

if($request.url.indexOf("/v01/login") != -1 || $request.url.indexOf("/v02/user/endpoint") != -1 || $request.url.indexOf("/v01/profile") != -1) {
    obj.data.vip = true;
    obj.data.vip_expire = 32472115200;
}


aFengYe = JSON.stringify(obj);
$done(aFengYe);