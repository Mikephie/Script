/******************************************
 * @name 酷我音乐
 * @description 解锁会员皮肤、会员音频(最高无损)、听书权限, 配合其他去广告脚本达到最佳效果
 * @channel https://t.me/yqc_123
 * @feedback https://t.me/yqc_777
 * @version 1.0.3
******************************************
脚本声明:
1. 本脚本仅用于学习研究，禁止用于商业用途
2. 本脚本不保证准确性、可靠性、完整性和及时性
3. 任何个人或组织均可无需经过通知而自由使用
4. 作者对任何脚本问题概不负责，包括由此产生的任何损失
5. 如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明、所有权证明，我将在收到认证文件确认后删除
6. 请勿将本脚本用于商业用途，由此引起的问题与作者无关
7. 本脚本及其更新版权归作者所有
******************************************
hostname = *.kuwo.cn

^https?:\/\/(?:musicpay|nmobi|vip1|audiobookpay|tingshu)\.kuwo\.cn\/(?:music\.pay\?newver=\d+|mobi.s\?f=kwxs|vip\/(?:enc\/user\/vip\?op=ui&uid=|v2\/theme\?op=gd)|a\.p|v2\/api\/pay\/user\/info) url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/kuwomod.js
******************************************/


(() => {
  const j = Env("酷我音乐");
  const currentMonthKey = `kuwo_${j.time("yyyyMM")}_notified`;

  function getNotice() {
    return new Promise((resolve, reject) => {
      const defaultNotice = [
        "本脚本仅用于技术学习，禁止非法使用。",
        "不得将本脚本用于任何商业或违法用途，违者后果自负。",
        "在中国大陆地区，严禁传播本脚本。",
        "开发者不对脚本的滥用承担任何责任。",
        "违规使用导致的后果由使用者自行承担。",
        "如有违反相关法规，将立即删除本脚本。",
        "使用者若违反声明规定，将自动视为放弃使用权。",
        "本声明的最终解释权归开发者所有。",
      ];
      j.http
        .get("https://cdn.jsdelivr.net/gh/Yuheng0101/X@main/Utils/notice.json")
        .then((response) => {
          const data = j.toObj(response.body);
          resolve(data.join("\n"));
        })
        .catch(() => {
          j.log("获取远程声明失败，使用本地声明");
          resolve(defaultNotice.join("\n"));
        });
    });
  }

  function unlockKuwo(response) {
    const data = j.toObj(response.body);
    if (/music\.pay/.test($request.url)) {
      data.songs.forEach((song) => {
        song.audio.forEach((audio) => {
          audio.st = 0;
        });
      });
      response.body = j.toStr(data);
    }
    if (/pay\/user\/info/.test($request.url)) {
      data.data.vipExpires = 4077187200; // 设置为永久 VIP
      data.data.vipType = 1;
      data.data.adImgUrl = "";
      response.body = j.toStr(data);
    }
    j.done({ body: response.body });
  }

  function main() {
    if (j.getdata(currentMonthKey) !== "true") {
      getNotice()
        .then((notice) => {
          j.msg(j.name, "脚本声明", notice, {
            $open: "https://github.com/Yuheng0101/X/",
          });
          j.setdata("true", currentMonthKey);
        })
        .catch((err) => j.logErr(err));
    }

    if ($request.url.includes("kuwo")) {
      unlockKuwo($response);
    } else {
      j.done();
    }
  }

  main();

  function Env(t, e) {
    return new (class {
      constructor(t) {
        this.name = t;
        this.startTime = new Date().getTime();
        this.data = {};
        this.logs = [];
      }
      log(...args) {
        console.log(args.join(" "));
        this.logs.push(args.join(" "));
      }
      logErr(err) {
        console.error(`[ERROR] ${err}`);
      }
      done(data = {}) {
        const elapsed = (new Date().getTime() - this.startTime) / 1000;
        console.log(`🔔${this.name}, 结束! 🕛 ${elapsed} 秒`);
        $done(data);
      }
      http = {
        get: (url) =>
          new Promise((resolve, reject) =>
            $httpClient.get({ url }, (err, resp, body) =>
              err ? reject(err) : resolve({ body })
            )
          ),
      };
      toObj(str) {
        try {
          return JSON.parse(str);
        } catch {
          return {};
        }
      }
      toStr(obj) {
        try {
          return JSON.stringify(obj);
        } catch {
          return "";
        }
      }
      getdata(key) {
        return $prefs.valueForKey(key);
      }
      setdata(value, key) {
        return $prefs.setValueForKey(value, key);
      }
      time(fmt) {
        const date = new Date();
        const o = {
          "M+": date.getMonth() + 1,
          "d+": date.getDate(),
          "H+": date.getHours(),
          "m+": date.getMinutes(),
          "s+": date.getSeconds(),
        };
        for (const k in o) {
          if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length === 1
                ? o[k]
                : `00${o[k]}`.substr(`${o[k]}`.length)
            );
          }
        }
        return fmt.replace(/y+/, date.getFullYear());
      }
      msg(title, subtitle, content, options) {
        const msgOptions = typeof options === "string" ? { url: options } : options;
        if (!this.isMute) {
          $notification.post(title, subtitle, content, msgOptions);
        }
      }
    })();
  }
})();