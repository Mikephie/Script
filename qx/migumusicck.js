//2025-07-21T05:21:10.484Z
//解密脚本在此
if ($request.url.indexOf("/strategy/listen-url/") != -1) {
  var _0x27b8b4 = $request.headers;
  _0x27b8b4.uid = "91414537623";
  _0x27b8b4.Cookie = "";
  _0x27b8b4.ce = "";
  _0x27b8b4.bversionid = "";
  $done({
    "headers": _0x27b8b4
  });
}
if ($request.url.indexOf("/music/batchQueryMusicPolicy.do") != -1) {
  var _0x5e6bfc = $request.headers;
  _0x5e6bfc.uid = "91414537623";
  _0x5e6bfc.Cookie = "";
  _0x5e6bfc.ce = "";
  _0x5e6bfc.bversionid = "";
  $done({
    "headers": _0x5e6bfc
  });
} else if ($request.url.indexOf("user/api/my-page-header/") != -1) {
  var _0x264071 = JSON.parse($response.body);
  _0x264071.data.userIdentityIconItems[0].iconUrl = "https://d.musicapp.migu.cn/prod/file-service/file-down/bcb5ddaf77828caee4eddc172edaa105/7cd657454195aaeaea9e3c425491a0d0/74f77a7b9a47582a559762111ac8ba9b";
  _0x264071.data.userIdentityIconItems[0].name = "白金会员畅听版";
  _0x264071.data.userIdentityIconItems[0].type = "baijinhuiyuanchangtingban";
  _0x264071.data.location = "https://t.me/GieGie777";
  _0x264071.data.userOpNums[5].desc = "999999";
  _0x264071.data.userOpNums[5].number = 999999;
  var _0x50ab8a = JSON.stringify(_0x264071);
  $done({
    "body": _0x50ab8a
  });
} else if ($request.url.indexOf("/column/startup-pic-with-ad") != -1) {
  var _0x33dad8 = JSON.parse($response.body);
  delete _0x33dad8.data;
  var _0x355684 = JSON.stringify(_0x33dad8);
  $done({
    "body": _0x355684
  });
} else if ($request.url.indexOf("resource/skin/list") != -1) {
  var _0x33dad8 = JSON.parse($response.body);
  _0x33dad8.data[0].isVip = "0";
  var _0x355684 = JSON.stringify(_0x33dad8);
  $done({
    "body": _0x355684
  });
} else {
  $done({});
}
encode_version = "jsjiami.com.v5";