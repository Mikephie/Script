/*
 *
 *
脚本功能：配音师-文字转语音助手
软件版本：4.1.1
下载地址：
脚本作者：
更新时间：2024年
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# >配音师-文字转语音助手 Unlock VIP+配音课
^http:\/\/(dubbing.csweimei.cn\/course\/GetCourseInfo?|music.dreamyin.cn\/Svip\/SVIP_Existence.aspx) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/peiyinshi.js


[mitm]
hostname = 

*
*
*/


var body = $response.body;
var url = $request.url;

const SVIP_PATH = "/Svip/SVIP_Existence.aspx";
const COURSE_PATH = "/course/GetCourseInfo?";

if (typeof body === "string") {
  if (url.indexOf(COURSE_PATH) !== -1) {
    body = body.replace(/"isprice":\d/g, '"isprice":0');
  }
  
  var jsonData;
  try {
    jsonData = JSON.parse(body);
    if (url.indexOf(SVIP_PATH) !== -1) {
      jsonData.Code.SVIP_ID = "One Year Vip";
      jsonData.Code.Cre_Datetime = "2024-11-11 11:11:11";
      jsonData.Code.Due_Datetime = "9999-11-11 11:11:11";
      body = JSON.stringify(jsonData);
    }
  } catch (error) {
    console.log("JSON 解析错误: " + error.message);
  }
}

$done({ body: body });