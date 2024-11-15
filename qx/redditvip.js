let body = JSON.parse($response.body);

console.log("Original body:", JSON.stringify(body).slice(0, 200) + "..."); // 日志原始数据

function isAd(item) {
    if (!item || typeof item !== 'object') return false;
    
    // 检查所有可能表示广告的属性
    const adIndicators = [
        item.isAd === true,
        item.isSponsored === true,
        item.__typename === 'AdPost',
        item.adPayload,
        (item.cells && item.cells.some(cell => cell.__typename === 'AdMetadataCell' || cell.isAdPost === true)),
        item.type === 'ad',
        item.isAdvertiserContent === true,
        item.promoted === true
    ];

    return adIndicators.some(indicator => indicator === true);
}

function removeAdsRecursive(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(item => !isAd(item)).map(removeAdsRecursive);
    } else if (typeof obj === 'object' && obj !== null) {
        Object.keys(obj).forEach(key => {
            if (Array.isArray(obj[key])) {
                obj[key] = obj[key].filter(item => !isAd(item)).map(removeAdsRecursive);
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                obj[key] = removeAdsRecursive(obj[key]);
            }
        });
    }
    return obj;
}

function processNSFW(obj) {
    if (typeof obj !== 'object' || obj === null) return;
    if (obj.isNsfw === true) obj.isNsfw = false;
    if (obj.isNsfwMediaBlocked === true) obj.isNsfwMediaBlocked = false;
    if (obj.isNsfwContentShown === false) obj.isNsfwContentShown = true;
    Object.values(obj).forEach(processNSFW);
}

processNSFW(body);
body = removeAdsRecursive(body);

console.log("Processed body:", JSON.stringify(body).slice(0, 200) + "..."); // 日志处理后的数据

$response.body = JSON.stringify(body);