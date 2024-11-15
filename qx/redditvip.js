let body = JSON.parse($response.body);

function processNSFW(obj) {
  if (obj.isNsfw === true) obj.isNsfw = false;
  if (obj.isNsfwMediaBlocked === true) obj.isNsfwMediaBlocked = false;
  if (obj.isNsfwContentShown === false) obj.isNsfwContentShown = true;
}

function removeAds(obj) {
  // 清空评论页面广告
  if (Array.isArray(obj.commentsPageAds)) {
    obj.commentsPageAds = [];
  }

  // 处理 data 对象中的广告
  if (obj.data && typeof obj.data === 'object') {
    for (let key in obj.data) {
      if (obj.data[key] && obj.data[key].elements && Array.isArray(obj.data[key].elements.edges)) {
        obj.data[key].elements.edges = obj.data[key].elements.edges.filter(edge => {
          if (!edge || !edge.node) return true;
          if (edge.node.__typename === 'AdPost') return false;
          if (edge.node.adPayload) return false;
          if (Array.isArray(edge.node.cells) && edge.node.cells.some(cell => cell.__typename === 'AdMetadataCell' || cell.isAdPost === true)) return false;
          return true;
        });
      }
    }
  }
}

processNSFW(body);
removeAds(body);

$response.body = JSON.stringify(body);