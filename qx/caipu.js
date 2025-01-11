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
const expireAt = "2088-08-08 08:08:08";

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
    headPortraitPath: "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
    buy_num: "1",
    reg_date: "2024-01-23",
    nickName: "MIKEPHIE",
  });
}

if (/pay\/home/.test($request.url)) {
  Object.assign(ddm.data.user, {
    expireDate: expireAt,
    img: "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
    nickname: "MIKEPHIE",
    isVip: "2",
  });
}

if (/home\/getUser/.test($request.url)) {
  ddm.data.nickName = "MIKEPHIE";
  ddm.data.img = "https://i.ibb.co/wM5z10N/IMG-1287.jpg";
  Object.assign(ddm.data.vip, {
    first_time: "2024-01-23",
    expired_day: "0",
    isVip: 2,
    maturity_time: "2088-08-08",
    title: "我的会员",
    text: "2088-08-08到期",
    maturity_day: "" + daysLeft,
  });
}

if (/user\/info/.test($request.url)) {
  Object.assign(ddm.data, {
    nickName: "MIKEPHIE",
    img: "https://i.ibb.co/wM5z10N/IMG-1287.jpg",
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