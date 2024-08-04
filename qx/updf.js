/*
^https:\/\/api\.updf\.com\/v1\/user\/planList
^https:\/\/apis\.updf\.com\/v1\/ai\/chat\/usage

(api|apis).updf.com
*/




let body = JSON.parse($response.body);

function modifyObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                modifyObject(obj[key]);
            } else {
                if (key === 'expireTime') {
                    obj[key] = 3742762088000,
                }
                
            }
        }
    }
    
}


modifyObject(body);

$done({ body: JSON.stringify(body) });