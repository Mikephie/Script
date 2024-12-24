lame
//Tue Dec 24 2024 12:42:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
var _0x1e033b = $response.body;
var _0x3b8429 = $request.url;
const _0x1656b = "/Svip/SVIP_Existence.aspx";
const _0x530257 = "/course/GetCourseInfo?";
if (typeof _0x1e033b === "string") {
  if (_0x3b8429.indexOf(_0x530257) !== -1) {
    _0x1e033b = _0x1e033b.replace(/"isprice":\d/g, "\"isprice\" :0");
  }
  var _0x2843a1;
  try {
    _0x2843a1 = JSON.parse(_0x1e033b);
    if (_0x3b8429.indexOf(_0x1656b) !== -1) {
      _0x2843a1.Code.SVIP_ID = "One Year Vip";
      _0x2843a1.Code.Cre_Datetime = "2024-11-11 11:11:11";
      _0x2843a1.Code.Due_Datetime = "9999-11-11 11:11:11";
      _0x1e033b = JSON.stringify(_0x2843a1);
    }
  } catch (_0x4174f9) {
    console.log("JSON 解析错误: " + _0x4174f9.message);
  }
}
$done({
  body: _0x1e033b
});
(function (_0x253458, _0x4d4cce, _0x197973) {
  var _0x51ff9d = function () {
    var _0x110ab3 = true;
    return function (_0x6727e3, _0x290a22) {
      var _0x4270f8 = _0x110ab3 ? function () {
        {
          if (_0x290a22) {
            {
              var _0x408f68 = _0x290a22.apply(_0x6727e3, arguments);
              _0x290a22 = null;
              return _0x408f68;
            }
          }
        }
      } : function () {};
      _0x110ab3 = false;
      return _0x4270f8;
    };
  }();
  var _0x3920d5 = _0x51ff9d(this, function () {
    var _0x4aa73c = function () {};
    var _0x127ec7 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x127ec7.console) {
      _0x127ec7.console = function (_0x3d8660) {
        var _0x197973 = {};
        _0x197973.log = _0x3d8660;
        _0x197973.warn = _0x3d8660;
        _0x197973.debug = _0x3d8660;
        _0x197973.info = _0x3d8660;
        _0x197973.error = _0x3d8660;
        _0x197973.exception = _0x3d8660;
        _0x197973.trace = _0x3d8660;
        return _0x197973;
      }(_0x4aa73c);
    } else {
      _0x127ec7.console.log = _0x4aa73c;
      _0x127ec7.console.warn = _0x4aa73c;
      _0x127ec7.console.debug = _0x4aa73c;
      _0x127ec7.console.info = _0x4aa73c;
      _0x127ec7.console.error = _0x4aa73c;
      _0x127ec7.console.exception = _0x4aa73c;
      _0x127ec7.console.trace = _0x4aa73c;
    }
  });
  _0x3920d5();
  _0x197973 = "al";
  try {
    _0x197973 += "ert";
    _0x4d4cce = encode_version;
    if (!(typeof _0x4d4cce !== "undefined" && _0x4d4cce === "jsjiami.com.v5")) {
      _0x253458[_0x197973]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x5effaf) {
    _0x253458[_0x197973]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";