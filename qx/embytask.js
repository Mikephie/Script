// embytask.min.js -- 精简版（定时保号任务）
const $ = new Env('EmbyTask');
const SERVERS = {
  OkEmby: { domain: 'link00.okemby.org', key: 'emby_OkEmby_playing', name: 'OkEmby' },
  meowfly: { domain: 'gy.meowfly.de', key: 'emby_meowfly_playing', name: 'meowfly' },
  SNTP: { domain: 'lite.cn2gias.uk', key: 'emby_sntp_playing', name: 'SNTP' },
  一之濑琴美: { domain: 'emby.191920.xyz', key: 'emby_191920_playing', name: '一之濑琴美' },
	㬋閡: { domain: 'emby.hohai.eu.org', key: 'emby_hohai_playing', name: '㬋閡' },
  占位: { domain: '占位', key: 'emby_占位_playing', name: '占位' }
};

const formatTime = ()=>{const n=new Date();return `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`};

const postJson = (opts) => {
  // small wrapper: supports Surge/Loon/QuanX
  return $.http.post(opts);
};

const process = async (srv, stored) => {
  try {
    const req = JSON.parse(stored);
    const urlObj = new URL(req.url);
    const host = urlObj.port ? `${urlObj.hostname}:${urlObj.port}` : urlObj.hostname;
    const videoId = req.url.match(/videos\/([^\/]+)/)?.[1] || req.url.match(/md5=([^&]+)/)?.[1];
    const userId = (req.headers && req.headers['X-Emby-Authorization'] && req.headers['X-Emby-Authorization'].match(/UserId="([^"]+)"/)?.[1]) || '';
    if (!videoId || !userId) throw new Error('缺少 videoId 或 userId');

    const headers = Object.assign({}, req.headers, { 'Content-Type': 'application/json' });
    const playSessionId = req.url.match(/PlaySessionId=([^&]+)/)?.[1] || '';

    const startUrl = `${urlObj.protocol}//${host}/emby/Sessions/Playing`;
    const startBody = JSON.stringify({ ItemId: videoId, PlayMethod: 'DirectStream', PlaySessionId: playSessionId });

    console.log(`[${srv.name}] 开始请求 ${startUrl}`);
    await Promise.race([postJson({ url: startUrl, headers, body: startBody }), new Promise((_,r)=>setTimeout(()=>r(new Error('timeout')),5000))]);

    const progressUrl = `${urlObj.protocol}//${host}/emby/Sessions/Playing/Progress`;
    const progressBody = JSON.stringify({ ItemId: videoId, PositionTicks: 10000000, IsPaused: false, PlayMethod: 'DirectStream', PlaySessionId: playSessionId });

    const resp = await Promise.race([postJson({ url: progressUrl, headers, body: progressBody }), new Promise((_,r)=>setTimeout(()=>r(new Error('timeout')),5000))]);
    const status = (resp && resp.response && resp.response.status) || (resp && resp.status) || 0;

    console.log(`[${srv.name}] 进度响应: ${status}`);
    return status === 204 || status === 200 ? { success: true, host } : { success: false, host };
  } catch (e) {
    console.log(`[${srv.name}] 错误: ${e.message}`);
    return { success: false, host: (stored && JSON.parse(stored).url ? new URL(JSON.parse(stored).url).hostname : '-') };
  }
};

(async ()=>{
  console.log(`[Task] 开始执行 ${formatTime()}`);
  const results = {};
  for (const key of Object.keys(SERVERS)) {
    const srv = SERVERS[key];
    const stored = $.persist.read(srv.key);
    if (!stored) { console.log(`[${srv.name}] 无存储数据`); results[srv.name] = { success: 0, host: '-' }; continue; }
    const r = await process(srv, stored);
    results[srv.name] = { success: r.success ? 1 : 0, host: r.host || '-' };
    await new Promise(r=>setTimeout(r,200)); // 小间隔
  }

  const message = Object.entries(results).map(([n,s])=>`${n} (${s.host}) ${s.success? '✅':'❌'}`).join('\n');
  const allOk = Object.values(results).every(r=>r.success===1);
  $.notify('Emby保号任务', allOk ? '全部成功 ✅' : '部分/全部失败', `${message}`);
  $.done({ results });
})();
 
/* 简易 Env：请替换为你的执行环境中已有的 Env 实现（或把上面的 Env 合并复用） */
function Env(name){ /* 同上：保留平台兼容的 http.post、persist.read、notify、done */ return new (function(){this.name=name;this.http={post:(opts)=>{return new Promise((res,rej)=>{if(typeof $httpClient!=='undefined'){$httpClient.post(opts,(e,r,d)=>e?rej(e):res({response:r,data:d}));}else if(typeof $task!=='undefined'){opts.method='POST';$task.fetch(opts).then(res).catch(rej);}else rej(new Error('No http'))})}};this.persist={read:(k)=>{if(typeof $persistentStore!=='undefined')return $persistentStore.read(k); if(typeof $prefs!=='undefined')return $prefs.valueForKey(k); return null}};this.notify=(t,s,m)=>{if(typeof $notification!=='undefined')$notification.post(t,s,m); if(typeof $notify!=='undefined')$notify(t,s,m)};this.done=(v)=>{if(typeof $done!=='undefined')$done(v)} })();
}