// embycatch.min.js -- 精简版（用于请求钩子）
const $ = new Env('EmbyCatch');
const NOTIFY_KEY = 'emby_notify_count';

// 可扩展服务器列表：新增只需一行
const SERVERS = {
  OkEmby: { domain: 'link00.okemby.org', key: 'emby_OkEmby_playing', name: 'OkEmby' },
  meowfly: { domain: 'gy.meowfly.de', key: 'emby_meowfly_playing', name: 'meowfly' },
  SNTP: { domain: 'lite.cn2gias.uk', key: 'emby_sntp_playing', name: 'SNTP' },
  一之濑琴美: { domain: 'emby.191920.xyz', key: 'emby_191920_playing', name: '一之濑琴美' },
	㬋閡: { domain: 'emby.hohai.eu.org', key: 'emby_hohai_playing', name: '㬋閡' },
  占位: { domain: '占位', key: 'emby_占位_playing', name: '占位' }
};

const isRequest = typeof $request !== 'undefined';
const shouldNotify = () => {
  try {
    const c = parseInt($.getdata(NOTIFY_KEY) || '0', 10);
    if (c >= 2) return false;
    $.setdata(String(c + 1), NOTIFY_KEY);
    return true;
  } catch (e) { return false; }
};
const notify = (t, s, m) => shouldNotify() && $.msg(t, s, m);

const findServer = (url) => {
  try {
    const host = (new URL(url)).hostname;
    return Object.values(SERVERS).find(s => host.includes(s.domain)) || null;
  } catch (e) { return null; }
};

const extractVideoId = (url) => {
  if (!url) return '';
  if (url.includes('newplay.emby.moe')) return (url.match(/md5=([^&]+)/) || [])[1] || '';
  return (url.match(/\/emby\/videos\/([^\/]+)\/(?:original|stream)/) || [])[1] || '';
};

const save = (server, req) => {
  try {
    const payload = {
      url: req.url,
      headers: req.headers,
      body: req.body || null,
      method: req.method,
      ts: Date.now()
    };
    const ok = $.setdata(JSON.stringify(payload), server.key);
    if (ok) notify('Emby播放记录', `已记录 ${server.name} ✅`, `VideoId: ${extractVideoId(req.url)}`);
    console.log(`[保存${server.name}] ${ok ? '成功' : '失败'} ${server.domain}`);
    return ok;
  } catch (e) {
    console.log('保存失败', e);
    return false;
  }
};

if (isRequest) {
  $.setdata('0', NOTIFY_KEY); // reset notify count on incoming request
  try {
    const url = $request.url || '';
    console.log('[请求]', url);
    const server = findServer(url);
    if (!server) { console.log('[跳过] 未知服务器'); $done({}); }
    const vid = extractVideoId(url);
    if (!vid) { console.log('[跳过] 无法获取 videoId'); $done({}); }
    save(server, { url, headers: $request.headers, body: $request.body, method: $request.method });
  } catch (e) { console.log('[错误]', e); }
  $done({});
} else {
  $done({});
}

/* Env 简化：保留原有兼容层（Loon/Surge/QuanX/Node） */
function Env(name){/* 请复制你运行环境中原有的 Env 实现或使用你的工具链内置 Env */ return new (function(){this.name=name;this.getdata=(k)=>typeof $persistentStore!=='undefined'?$persistentStore.read(k):typeof $prefs!=='undefined'?$prefs.valueForKey(k):null;this.setdata=(v,k)=>{if(typeof $persistentStore!=='undefined'){return $persistentStore.write(v,k)} if(typeof $prefs!=='undefined'){return $prefs.setValueForKey(v,k)} return false};this.msg=(t,s,m)=>{if(typeof $notification!=='undefined')$notification.post(t,s,m);if(typeof $notify!=='undefined')$notify(t,s,m)} })();
}