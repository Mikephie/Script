let body = $response.body || "";

try {
  let obj = JSON.parse(body);

  if (obj.content) {
    for (const key of Object.keys(obj.content)) {
      const item = obj.content[key];

      if (item && typeof item === "object") {
        if ("data" in item) item.data = "[]";
        if ("op" in item) item.op = "0";
        if ("timeInterval" in item) item.timeInterval = 999999;
      }
    }
  }

  body = JSON.stringify(obj);
} catch (e) {}

$done({ body });
