/*
 * NB实验室
 * 解锁会员
 * 
[rewrite_local]
^https?:\/\/www\.nobook\.com\/passport\/v5\/login\/(check|phone) url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/acgplayer.js

[mitm]
hostname = www.nobook.com
*/


  function b(e) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (h) {
      return typeof h;
    } : function (h) {
      {
        return h && "function" == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
      }
    };
    return b(e);
  }
  var c = $response.body;
  var d = JSON.parse(c);
  !function e(f) {
    {
      if ("object" === b(f) && null !== f) {
        for (var h in f) "vip" === h ? f[h] = 1 : "vip_endtime" === h || "school_vip_endtime" === h ? f[h] = 9199999999 : e(f[h]);
      }
    }
  }(d);
  $done({
    body: JSON.stringify(d)
  });
})();