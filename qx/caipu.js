/*************************************

        ➪：脚本名称: 菜谱大全

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

项目名称：菜谱大全
下载地址：https://t.cn/AijzV2It
项目地址：烘焙小屋
下载地址：https://t.cn/AipIBR88
项目地址：香哈菜谱
下载地址：https://t.cn/AipUXQUl

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https?:\/\/api.*\.xiangha\.com\/.+\/([Uu]ser\/(getUserData|info)|pay\/home|dish|home\/getUser|school) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/caipu.js

[mitm]
hostname = *.xiangha.com

*************************************/

var ddm = JSON.parse($response.body);
const expireAt = "2099-09-09 09:09:09";

function calculateDaysToEnd(dateString) {
  const targetDate = new Date(dateString.replace(" ", "T"));
  const currentDate = new Date();
  const diff = targetDate - currentDate;
  return diff > 0 ? Math.ceil(diff / 86400000) : 0;
}

const daysLeft = calculateDaysToEnd(expireAt);

if (/getUserData/.test($request.url)) {
  Object.assign(ddm.data.data, {
    vip: {
      is_open_vip: 2,
      is_vip: 2,
    },
    headPortraitPath: "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png",
    buy_num: "1",
    reg_date: "2024-01-23",
    nickName: "叮当猫の分享频道",
  });
}

if (/pay\/home/.test($request.url)) {
  Object.assign(ddm.data.user, {
    expireDate: expireAt,
    img: "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png",
    nickname: "叮当猫の分享频道",
    isVip: "2",
  });
}

if (/home\/getUser/.test($request.url)) {
  ddm.data.nickName = "叮当猫の分享频道";
  ddm.data.img = "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png";
  Object.assign(ddm.data.vip, {
    first_time: "2024-01-23",
    expired_day: "0",
    isVip: 2,
    maturity_time: "2099-09-09",
    title: "我的会员",
    text: "2099-09-09到期",
    maturity_day: "" + daysLeft,
  });
}

if (/user\/info/.test($request.url)) {
  Object.assign(ddm.data, {
    nickName: "叮当猫の分享频道",
    img: "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png",
    vipInfo: {
      isVip: "2",
    },
  });
}

if (/(dish|school)/.test($request.url)) {
  const Params = {
    is_open_vip: 2,
    is_vip: 2,
    isBuy: "2",
    isCollection: 2,
    isVip: "2",
  };
  searchAndModify(ddm, Params);
}

$done({ body: JSON.stringify(ddm) });

function searchAndModify(obj, params) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      searchAndModify(obj[key], params);
    } else if (key in params) {
      obj[key] = params[key];
    }
  }
}