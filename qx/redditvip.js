function filterResponse(data) {
    function walk(obj) {
        if (typeof obj === 'object' && obj !== null) {
            if (obj.isNsfw === true) {
                obj.isNsfw = false;
            }
            if (obj.isNsfwMediaBlocked === true) {
                obj.isNsfwMediaBlocked = false;
            }
            if (obj.isNsfwContentShown === false) {
                obj.isNsfwContentShown = true;
            }
            if (Array.isArray(obj.commentsPageAds)) {
                obj.commentsPageAds = [];
            }
            if (obj.node && typeof obj.node === 'object') {
                if (Array.isArray(obj.node.cells)) {
                    obj.node.cells = obj.node.cells.filter(
                        cell => cell.__typename !== "AdMetadataCell" && !cell.isAdPost
                    );
                }
                if (obj.node.adPayload && typeof obj.node.adPayload === 'object') {
                    delete obj.node.adPayload;
                }
            }
            if (obj.__typename === "AdPost") {
                return null;
            }
            for (let key in obj) {
                if (obj[key] && typeof obj[key] === 'object') {
                    obj[key] = walk(obj[key]);
                }
            }
        }
        return obj;
    }
    return walk(data);
}