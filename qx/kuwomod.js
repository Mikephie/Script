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

function handleMobiS() {
  const currentId = $.getval("kuwo_free_current_id") || "";
  const newId = obj.data?.rid;
  let body = $.toStr(obj);
  
  if (currentId !== newId) {
    try {
      const { body: newBody } = await $.http.get(`https://mobi.kuwo.cn/mobi.s?f=web&source=kwplayer_ar_1.1.9_jiakong_118980_320.apk&type=convert_url_with_sign&rid=${currentId}&priority=bitrate&network=3G&mode=download&br=2000kflac`);
      body = newBody;
    } catch (e) {
      $.logErr("解锁失败~", e);
    }
  }
  
  $.setval("", "kuwo_free_current_id");
  $.done({ body });
}

function handleMusicPay() {
  const songId = obj.songs[0].id;
  if (typeof songId === "number") {
    $.setval(songId.toString(), "kuwo_free_current_id");
  }
  
  const pid = obj.songs[0].audio[0].pid;
  const price = obj.songs[0].audio[0].price;
  const policy = obj.songs[0].audio[0].policy;
  const policyName = `${policy}_1`;
  
  for (let i = 0; i < obj.songs[0].audio.length; i++) {
    obj.songs[0].audio[i].st = 0;
  }
  
  const songInfo = obj.songs[0];
  obj.user = [{
    pid, type: policy, name: policyName, categray: policyName,
    id: songId, order: 375787919, final: [], buy: 1657425321,
    begin: 1657425321, end: 4180305321, CurEnd: 0, playCnt: 0,
    playUpper: 300, downCnt: 0, downUpper: 300, playVideoCnt: 0,
    playVideoUpper: 3000, downVideoCnt: 0, downVideoUpper: 3000,
    price, period: 1000, feetype: 0, info: songInfo
  }];
  
  $.done({ body: $.toStr(obj) });
}

function handleVipEnc() {
  $.done({ body: "Vo4m6X2hTph/vfpPmau8PTT0sFN6JCgzxSLVH/u3sbEt7VniYsVHbRFgOgN+Uvs39rAI7R3C5HVpaSj8tr8U8dLYwYdDCjMILuUorh3z0BiQToiWxudHkcASIPHNrmZHZYC/yv3DP4b89hbzfqU5UUDUqaZpEBZr76sDF2wNPmYjUEFSVCMGyTl1F6j1DBmKJ1Tik0YuG/2UBa/Ilz12a1KneXsNs5x5EE41bXDke7EygIB3I+6SoITZXOLFAFQFZujdI0GzClNglDKtclpUxpjN3uVeJxHLU40FTwNWo3ZDNv8KSdZpYZ5BDEOCyZkifmHlf1wnocX2zTr2xRAM6JhAD2WaSSN
  

function handleVipTheme() {
  obj.data.needBieds = null;
  $.done({ body: $.toStr(obj) });
}

function handleAP() {
  let body = $.toStr(obj);
  if (obj.hasOwnProperty("songs") && Object.keys(obj.songs).length > 0) {
    const songId = obj.songs[Object.keys(obj.songs)[0]].id;
    $.setval(songId.toString(), "kuwo_free_current_id");
  }
  if ($request?.method.toUpperCase() === "POST") {
    body = $response.body.replace(/"playright":\d+/g, '"playright":1')
                         .replace(/"downright":\d+/g, '"downright":1')
                         .replace(/"policytype":\d+/g, '"policytype":3')
                         .replace(/"policy":\d+/g, '"policy":5');
  }
  if ($request.url.includes("getvip")) {
    obj.packs = {
      end: 32495443200,
      bought_vip: 1,
      type: 1,
      period: 31,
      bought_vip_end: 32495443200
    };
    body = $.toStr(obj);
  }
  $.done({ body });
}

function handlePayUserInfo() {
  obj.data.vipExpires = 4077187200;
  obj.data.vipType = 1;
  obj.data.adImgUrl = "";
  $.done({ body: $.toStr(obj) });
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}isStash(){return"undefined"!=typeof $environment&&$environment["stash-version"]}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,n]=i.split("@"),a={url:`http://${n}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),n=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(n);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this 