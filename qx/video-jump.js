const $ = new Env("视频中转跳转页");

function parseQuery() {
  const query = $request.url.split("?")[1] || "";
  const params = {};
  for (const part of query.split("&")) {
    const [k, v] = part.split("=");
    params[decodeURIComponent(k)] = decodeURIComponent(v || "");
  }
  return params;
}

function handleUrl() {
  const { url } = parseQuery();

  if (!url || !/^https?:\/\/.+/.test(url)) {
    $done({ status: 400, body: "Invalid or missing video URL." });
    return;
  }

  const jumpData = {
    original_url: url,
    nplayer_url: url.replace(/^https?:\/\//, m => m === "https://" ? "nplayer-https://" : "nplayer-http://"),
    senplayer_url: `SenPlayer://x-callback-url/play?url=${url}`,
    infuse_url: `infuse://x-callback-url/play?url=${url}`,
    vlc_url: `vlc://${url}`,
    alook_url: `alook://open?url=${url}`,
    zoeplay_url: `zoeplay://${url}`,
    yybp_url: `yybp://play?url=${url}`
  };

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1">
<title>选择播放器</title>
<style>
body { font-family: -apple-system; margin: 0; padding: 20px; background: #f2f2f7; color: #333; }
.container { max-width: 720px; margin: auto; }
.player-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 20px; }
.player-btn { display: block; text-decoration: none; padding: 15px; border-radius: 8px; font-weight: bold; text-align: center; color: white; }
.safari-btn { background: #8e8e93; color: white; padding: 15px; border-radius: 8px; font-size: 16px; text-align: center; margin-top: 20px; }
.senplayer { background: #34c759; } .nplayer { background: #ff3b30; } .infuse { background: #5856d6; }
.vlc { background: #ff9500; } .alook { background: #00c7be; } .zoeplay { background: #bf5af2; } .yybp { background: #007aff; }
.info { font-size: 14px; color: #666; margin-top: 20px; }
@media (prefers-color-scheme: dark) { body { background: #1c1c1e; color: #fff; } .info { color: #aaa; } }
</style>
</head>
<body>
<div class="container">
  <a href="${jumpData.original_url}" class="safari-btn">在Safari中直接播放</a>
  <div class="player-grid">
    <a href="${jumpData.senplayer_url}" class="player-btn senplayer">SenPlayer</a>
    <a href="${jumpData.nplayer_url}" class="player-btn nplayer">nPlayer</a>
    <a href="${jumpData.infuse_url}" class="player-btn infuse">Infuse</a>
    <a href="${jumpData.vlc_url}" class="player-btn vlc">VLC</a>
    <a href="${jumpData.alook_url}" class="player-btn alook">Alook</a>
    <a href="${jumpData.zoeplay_url}" class="player-btn zoeplay">Zoeplay</a>
    <a href="${jumpData.yybp_url}" class="player-btn yybp">YYBP</a>
  </div>
  <div class="info">提示：点击按钮跳转到播放器，或Safari继续播放。</div>
</div>
</body>
</html>
`;

  $done({
    response: {
      status: 200,
      headers: { "Content-Type": "text/html;charset=utf-8" },
      body: html
    }
  });
}

handleUrl();

function Env(name) {
  this.name = name;
  return this;
}