globalThis.SCRIPT_NAME = "✨EmbySign✨"; // auto-injected
/*
#!name= ✨EmbySign✨
#!desc=影视服保号
#!category=✅签到
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://img.mikephie.site/APP_logo/emby.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
^http-request,pattern=^https?:\/\/.*?\/(emby|jellyfin)\/.* url script-response-body https://ijs.mikephie.com/quantumultx/emby.js

[task_local]
0 20 * * * https://ijs.mikephie.com/quantumultx/emby.js, tag=EmbySign, img-url=https://ijs.mikephie.com/icon/emby.png, enabled=true


[MITM]
hostname = link00.okemby.org:8443, gy.meowfly.de, lite.cn2gias.uk, speedtestdeemby.191920.xyz, emby.hohai.eu.org

*/

// Emby Unified -- 合并版 (请求钩子 + 定时保号任务)
// 基于原 embycatch.min.js 和 embytask.min.js 合并
const $ = new Env('EmbyUnified');

// ==============================================================================
// 公共配置 (两个脚本共用)
// ==============================================================================
// 可扩展服务器列表：新增只需一行
const SERVERS = {
  OkEmby: { domain: 'link00.okemby.org', key: 'emby_OkEmby_playing', name: 'OkEmby' },
  meowfly: { domain: 'gy.meowfly.de', key: 'emby_meowfly_playing', name: 'meowfly' },
  SNTP: { domain: 'lite.cn2gias.uk', key: 'emby_sntp_playing', name: 'SNTP' },
  一之濑琴美: { domain: 'emby.191920.xyz', key: 'emby_191920_playing', name: '一之濑琴美' },
	㬋閡: { domain: 'emby.hohai.eu.org', key: 'emby_hohai_playing', name: '㬋閡' },
  占位: { domain: '占位', key: 'emby_占位_playing', name: '占位' }
};

// 判断当前运行环境是否为网络请求抓取
const isRequest = typeof $request !== 'undefined';

if (isRequest) {
  // ============================================================================
  // 请求钩子逻辑 (原 embycatch.min.js 部分)
  // ============================================================================
  console.log('🔍 检测到网络请求，运行 EmbyCatch 逻辑');
  const NOTIFY_KEY = 'emby_notify_count';

  const shouldNotify = () => {
    try {
      const c = parseInt($.getdata(NOTIFY_KEY) || '0', 10);
      if (c >= 2) return false;
      $.setdata(String(c + 1), NOTIFY_KEY);
      return true;
    } catch (e) { return false; }
  };
  // 注意：这里使用 $.msg，对应统一 Env 中的实现
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

  // Catch 主执行逻辑
  $.setdata('0', NOTIFY_KEY); // reset notify count on incoming request
  try {
    const url = $request.url || '';
    console.log('[请求]', url);
    const server = findServer(url);
    if (!server) { console.log('[跳过] 未知服务器'); $.done({}); }
    else {
        const vid = extractVideoId(url);
        if (!vid) { console.log('[跳过] 无法获取 videoId'); $.done({}); }
        else {
            save(server, { url, headers: $request.headers, body: $request.body, method: $request.method });
        }
    }
  } catch (e) { console.log('[错误]', e); }
  $.done({});

} else {
  // ============================================================================
  // 定时保号任务逻辑 (原 embytask.min.js 部分)
  // ============================================================================
  console.log('⏰ 未检测到请求，运行 EmbyTask 定时任务逻辑');

  const formatTime = ()=>{const n=new Date();return `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`};

  const postJson = (opts) => {
    // small wrapper: supports Surge/Loon/QuanX via Unified Env
    return $.http.post(opts);
  };

  const process = async (srv, stored) => {
    try {
      const req = JSON.parse(stored);
      const urlObj = new URL(req.url);
      const host = urlObj.port ? `${urlObj.hostname}:${urlObj.port}` : urlObj.hostname;
      // 尝试从 URL 中匹配常规 ID 或 md5
      const videoIdMatch = req.url.match(/videos\/([^\/]+)/) || req.url.match(/md5=([^&]+)/);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;

      const userId = (req.headers && req.headers['X-Emby-Authorization'] && req.headers['X-Emby-Authorization'].match(/UserId="([^"]+)"/)?.[1]) || '';

      if (!videoId) throw new Error('无法从存储的 URL 中提取 videoId');
      if (!userId) throw new Error('缺少 userId (未在 Header 中找到)');

      const headers = Object.assign({}, req.headers, { 'Content-Type': 'application/json' });
      // 尝试提取原有的 PlaySessionId，如果没有则让服务器生成新的
      const playSessionId = req.url.match(/PlaySessionId=([^&]+)/)?.[1] || '';

      // 1. 发送播放开始请求
      const startUrl = `${urlObj.protocol}//${host}/emby/Sessions/Playing`;
      const startBody = JSON.stringify({ ItemId: videoId, PlayMethod: 'DirectStream', PlaySessionId: playSessionId });

      console.log(`[${srv.name}] 开始请求 ${startUrl}`);
      // 设置 10 秒超时
      await Promise.race([
          postJson({ url: startUrl, headers, body: startBody }),
          new Promise((_,r)=>setTimeout(()=>r(new Error('Start timeout')), 10000))
      ]);

      // 小停顿确保服务器处理了开始请求
      await new Promise(r => setTimeout(r, 1000));

      // 2. 发送播放进度请求 (模拟播放了一段时间)
      const progressUrl = `${urlObj.protocol}//${host}/emby/Sessions/Playing/Progress`;
      // PositionTicks: 10000000 ticks = 1 second. 发送一个较小的进度值.
      const progressBody = JSON.stringify({ ItemId: videoId, PositionTicks: 30000000, IsPaused: false, PlayMethod: 'DirectStream', PlaySessionId: playSessionId, EventName: 'timeupdate' });

      console.log(`[${srv.name}] 发送进度报告...`);
      const resp = await Promise.race([
          postJson({ url: progressUrl, headers, body: progressBody }),
          new Promise((_,r)=>setTimeout(()=>r(new Error('Progress timeout')), 10000))
      ]);

      const status = (resp && resp.response && resp.response.status) || (resp && resp.status) || 0;
      console.log(`[${srv.name}] 进度响应状态码: ${status}`);

      // Emby 成功报告进度通常返回 204 No Content，有时返回 200
      return (status === 204 || status === 200) ? { success: true, host } : { success: false, host };
    } catch (e) {
      console.log(`[${srv.name}] 错误: ${e.message}`);
      let host = '-';
      try { if(stored) host = new URL(JSON.parse(stored).url).hostname; } catch(_){}
      return { success: false, host: host };
    }
  };

  // Task 主执行 IIFE
  (async ()=>{
    console.log(`[Task] 开始执行 ${formatTime()}`);
    const results = {};
    for (const key of Object.keys(SERVERS)) {
      const srv = SERVERS[key];
      // 注意：这里使用 $.persist.read，对应统一 Env 中的别名实现
      const stored = $.persist.read(srv.key);
      if (!stored) { console.log(`[${srv.name}] 无存储数据，跳过`); results[srv.name] = { success: 0, host: '-' }; continue; }
      const r = await process(srv, stored);
      results[srv.name] = { success: r.success ? 1 : 0, host: r.host || '-' };
      await new Promise(r=>setTimeout(r,500)); // 增加间隔防止请求过快
    }

    const message = Object.entries(results).map(([n,s])=>`${n} (${s.host}) ${s.success? '✅':'❌'}`).join('\n');
    const allOk = Object.values(results).length > 0 && Object.values(results).every(r=>r.success===1);
    // 注意：这里使用 $.notify，对应统一 Env 中的别名实现
    $.notify('Emby保号任务', allOk ? '全部成功 ✅' : '部分或全部失败', `${message}`);
    console.log(`[Task] 执行完毕. ${allOk ? '全部成功' : '存在失败项'}`);
    $.done({ results });
  })();
}

// ==============================================================================
// 统一兼容层 Env 实现 (合并了两个脚本的需求)
// 支持: getdata/setdata, persist.read, msg/notify, http.post, done
// ==============================================================================
function Env(name) {
  return new(function() {
    this.name = name;
    console.log(`Start: ${this.name}`);
    // 核心读写能力
    this.getdata = (k) => typeof $persistentStore !== 'undefined' ? $persistentStore.read(k) : typeof $prefs !== 'undefined' ? $prefs.valueForKey(k) : null;
    this.setdata = (v, k) => {
      if (typeof $persistentStore !== 'undefined') { return $persistentStore.write(v, k) }
      if (typeof $prefs !== 'undefined') { return $prefs.setValueForKey(v, k) }
      return false
    };
    // 核心通知能力
    this.msg = (t, s, m) => {
      if (typeof $notification !== 'undefined') $notification.post(t, s, m);
      if (typeof $notify !== 'undefined') $notify(t, s, m);
    };
    // 核心网络请求能力 (用于 Task)
    this.http = {
      post: (opts) => {
        return new Promise((res, rej) => {
          if (typeof $httpClient !== 'undefined') { // Surge/Loon
            $httpClient.post(opts, (e, r, d) => e ? rej(e) : res({ response: r, data: d }));
          } else if (typeof $task !== 'undefined') { // QuanX
            opts.method = 'POST';
            $task.fetch(opts).then(res).catch(rej);
          } else rej(new Error('当前环境不支持 http post'));
        })
      }
    };
    // 结束运行
    this.done = (v) => { console.log(`Done: ${this.name}`); if (typeof $done !== 'undefined') $done(v); };

    // *** 别名兼容 (为了不修改原有代码结构中的调用方式) ***
    // Task 脚本中使用 $.persist.read 调用读取
    this.persist = { read: this.getdata };
    // Task 脚本中使用 $.notify 调用通知
    this.notify = this.msg;
  })();
}
