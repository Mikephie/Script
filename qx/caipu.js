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

var encode_version = "jsjiami.com.v5";
if (typeof $rocket !== "undefined") {
  function getBoxJSValue(_0x2f991f) {
    try {
      if (typeof $persistentStore !== "undefined" && typeof $persistentStore.read === "function") {
        const _0x5bf0d6 = $persistentStore.read(_0x2f991f);
        console.log("🔍 成功读取 BoxJS 值（$persistentStore）：" + _0x2f991f + " = " + _0x5bf0d6);
        return _0x5bf0d6;
      } else {
        if (typeof $prefs !== "undefined" && typeof $prefs.valueForKey === "function") {
          const _0xd4e30d = $prefs.valueForKey(_0x2f991f);
          console.log("🔍 成功读取 BoxJS 值（$prefs）：" + _0x2f991f + " = " + _0xd4e30d);
          return _0xd4e30d;
        } else {
          {
            console.log("⚠️ 无法检测到可用的 BoxJS 环境！");
          }
        }
      }
    } catch (_0x5d99ef) {
      {
        console.log("⚠️ 读取 BoxJS 配置失败：" + _0x5d99ef.message);
      }
    }
    return null;
  }
  const scriptSwitch = getBoxJSValue("ddm.app_switch");
  const isScriptEnabled = scriptSwitch === "true" || scriptSwitch === true;
  console.log("BoxJS 配置读取：ddm.app_switch = " + scriptSwitch);
  if (!isScriptEnabled) {
    console.log("⛔️ BoxJS 配置禁用脚本，脚本停止运行");
    $notification.post("⚠️ 脚本异常已终止运行", "检测到脚本开关未开启", "📌 【Boxjs 配置指南】\n1️⃣ 配置地址： https://github.com/chavyleung/scripts\n2️⃣ 订阅链接： https://raw.githubusercontent.com/chxm1023/Script_X/main/ddm1023.boxjs.json\n\n📋 【使用说明】\n1️⃣ 添加订阅链接到 Boxjs\n2️⃣ 启用 [脚本开关] 并保存设置\n\n⚠️ 【注意事项】\n- 开关用于防止非法售卖脚本\n- 仅供学习体验，请勿传播或滥用\n- 建议 24 小时内删除，避免不必要问题\n\n🙏 感谢理解与支持！");
    $done();
  }
}
var ddm = JSON.parse($response.body);
const expireAt = "2099-09-09 09:09:09";
function calculateDaysToEnd(_0xc9e12e) {
  const _0x56d245 = new Date(_0xc9e12e.replace(" ", "T"));
  const _0x5a168f = new Date();
  const _0x4c9bcd = _0x56d245 - _0x5a168f;
  return _0x4c9bcd > 0 ? Math.ceil(_0x4c9bcd / 86400000) : 0;
}
const daysLeft = calculateDaysToEnd(expireAt);
if (/getUserData/.test($request.url)) {
  Object.assign(ddm.data.data, {
    vip: {
      is_open_vip: 2,
      is_vip: 2
    },
    headPortraitPath: "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png",
    buy_num: "1",
    reg_date: "2024-01-23",
    nickName: "叮当猫の分享频道"
  });
}
if (/pay\/home/.test($request.url)) {
  Object.assign(ddm.data.user, {
    expireDate: expireAt,
    img: "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png",
    nickname: "叮当猫の分享频道",
    isVip: "2"
  });
}
if (/home\/getUser/.test($request.url)) {
  ddm.data.nickName = "叮当猫の分享频道";
  ddm.data.img = "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png";
  Object.assign(ddm.data.vip, {
    first_time: "2024-01-23",
    expired_day: "0",
    subTitle: "",
    isVip: 2,
    vipState: "2",
    maturity_time: "2099-09-09",
    color: "#866100",
    level: "2",
    title: "我的会员",
    titleColor: "#866100",
    last_time: "2024-01-23",
    text: "2099-09-09到期",
    xiangdou: 9999,
    maturity_day: "" + daysLeft
  });
}
if (/user\/info/.test($request.url)) {
  Object.assign(ddm.data, {
    nickName: "叮当猫の分享频道",
    img: "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm.png",
    vipInfo: {
      isVip: "2",
      url: "xiangha://welcome?VipWebView.app?url=https://appweb.xiangha.com/vip/myvip?payset=2&fullScreen=2&vipFrom=我的页面会员续费按钮",
      vipState: "4"
    }
  });
}
if (/(dish|school)/.test($request.url)) {
  const Params = {
    is_open_vip: 2,
    is_vip: 2,
    isBuy: "2",
    isCollection: 2,
    status: true,
    isShow: "2",
    isVideo: "2",
    isVip: "2"
  };
  searchAndModify(ddm, Params);
}
$done({
  body: JSON.stringify(ddm)
});
function searchAndModify(_0x5b2f2e, _0x50ad52) {
  for (const _0x31a5fc in _0x5b2f2e) {
    if (typeof _0x5b2f2e[_0x31a5fc] === "object" && _0x5b2f2e[_0x31a5fc] !== null) {
      {
        searchAndModify(_0x5b2f2e[_0x31a5fc], _0x50ad52);
      }
    } else {
      if (_0x31a5fc in _0x50ad52) {
        _0x5b2f2e[_0x31a5fc] = _0x50ad52[_0x31a5fc];
      }
    }
  }
}
(function (_0x73f202, _0x19b20f, _0x934f8a) {
  var _0x291cb9 = function () {
    var _0x2bccf7 = true;
    return function (_0x3021b5, _0x76dfa5) {
      var _0x156753 = _0x2bccf7 ? function () {
        if (_0x76dfa5) {
          var _0x178fb3 = _0x76dfa5.apply(_0x3021b5, arguments);
          _0x76dfa5 = null;
          return _0x178fb3;
        }
      } : function () {};
      _0x2bccf7 = false;
      return _0x156753;
    };
  }();
  var _0x4121ed = _0x291cb9(this, function () {
    var _0x165ce5 = function () {
      return "dev";
    };
    var _0x1764ff = function () {
      return "window";
    };
    var _0x3739c0 = function () {
      var _0x5b7590 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !_0x5b7590.test(_0x165ce5.toString());
    };
    var _0x59c6a4 = function () {
      var _0x2908ab = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return _0x2908ab.test(_0x1764ff.toString());
    };
    var _0x26086e = function (_0x5ab44c) {
      var _0x558e75 = 0 >> 1 + NaN;
      if (_0x5ab44c.indexOf("i" === _0x558e75)) {
        _0x46b716(_0x5ab44c);
      }
    };
    var _0x46b716 = function (_0x44285a) {
      var _0xd1e5cc = 3 >> 1 + NaN;
      if (_0x44285a.indexOf("true"[3]) !== _0xd1e5cc) {
        _0x26086e(_0x44285a);
      }
    };
    if (!_0x3739c0()) {
      if (!_0x59c6a4()) {
        _0x26086e("indеxOf");
      } else {
        _0x26086e("indexOf");
      }
    } else {
      _0x26086e("indеxOf");
    }
  });
  _0x4121ed();
  _0x934f8a = "al";
  try {
    _0x934f8a += "ert";
    _0x19b20f = encode_version;
    if (!(typeof _0x19b20f !== "undefined" && _0x19b20f === "jsjiami.com.v5")) {
      {
        _0x73f202[_0x934f8a]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x4db422) {
    {
      _0x73f202[_0x934f8a]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";