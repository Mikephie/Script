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


const $ = new Env('酷我音乐');
const notifyKey = `kuwo_${$.time("yyyyMM")}_notified`;
let obj = $.toObj($response.body) || {};

!(async () => {
  if ($.getdata(notifyKey) !== "true") {
    await notify();
  }
  
  if (/mobi\.s\?f=kwxs/.test($request.url)) {
    handleMobiS();
  } else if ($request.url.indexOf("music.pay?newver=3") > -1) {
    handleMusicPay();
  } else if (/vip\/enc/.test($request.url)) {
    handleVipEnc();  
  } else if (/vip\/v2\/theme/.test($request.url)) {
    handleVipTheme();
  } else if ($request.url.includes("/a.p")) {
    handleAP();
  } else if (/pay\/user\/info/.test($request.url)) {
    handlePayUserInfo();
  }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done({}));

async function notify() {
  const content = await getNotifyContent();
  $.setdata("true", notifyKey);
  const lastMonth = $.time("yyyyMM", new Date(new Date().setMonth(new Date().getMonth() - 1)));
  $.setdata(null, `kuwo_${lastMonth}_notified`);
  $.msg($.name, "脚本声明", content, {"open-url": "https://github.com/Yuheng0101/X/"});
}

async function getNotifyContent() {
  const defaultContent = [
    "本脚本仅用于学习研究，禁止用于商业用途",
    "本脚本不保证准确性、可靠性、完整性和及时性",
    "任何个人或组织均可无需经过通知而自由使用",
    "作者对任何脚本问题概不负责，包括由此产生的任何损失",
    "如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明、所有权证明，我将在收到认证文件确认后删除",
    "请勿将本脚本用于商业用途，由此引起的问题与作者无关",
    "本脚本及其更新版权归作者所有"
  ];
  try {
    const { body } = await $.http.get("https://cdn.jsdelivr.net/gh/Yuheng0101/X@main/Utils/notice.json");
    return $.toObj(body) || defaultContent;
  } catch (e) {
    $.log("获取远程声明失败, 使用本地声明");
    return defaultContent;
  }
}

