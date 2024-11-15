let body = JSON.parse($response.body);

function processObject(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  if (obj.isNsfw === true) obj.isNsfw = false;
  if (obj.isNsfwMediaBlocked === true) obj.isNsfwMediaBlocked = false;
  if (obj.isNsfwContentShown === false) obj.isNsfwContentShown = true;
  
  if (Array.isArray(obj.commentsPageAds)) obj.commentsPageAds = [];
  
  if (obj.node && Array.isArray(obj.node.cells) && 
      obj.node.cells.some(cell => cell.__typename === 'AdMetadataCell' || cell.isAdPost === true)) {
    return undefined;
  }
  
  if (obj.node && typeof obj.node.adPayload === 'object') {
    return undefined;
  }
  
  if (obj.__typename === 'AdPost') {
    return undefined;
  }

  for (let key in obj) {
    obj[key] = processObject(obj[key]);
  }

  return obj;
}

body = processObject(body);

$response.body = JSON.stringify(body);