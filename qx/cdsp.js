/*        
        ➪：脚本名称: 彩豆视频水印宝 （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
# >彩豆视频水印宝 – 视频加水印制作视频剪辑（永久会员）
^https?:\/\/appss.baomingding.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/cdsp.js

[mitm] 
hostname = appss.baomingding.com

*******************************/


var mikephie = JSON.parse($response.body);

mikephie.data = {
  ...mikephie.data,
  "vipState": true,
  "end_time": 3742762088,
  "allLifeVip": true,
  "status": 2,
  "level": 2,
  "is_select": 1,
  "notice": "卡券：5张",
  "title1": "终身VIP会员特权",
  "remark": "gerenzhongshen",
  "cat": "geren",
  "show": 200,
  "wx_name": "Mikephie",
  "headimg": "https://i.ibb.co/wM5z10N/IMG-1287.jpg"
};
 
$done({body: JSON.stringify(mikephie)});