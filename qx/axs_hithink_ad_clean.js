let body = $response.body || "";

try {
  const obj = JSON.parse(body);

  if (obj.content) {
    for (const k of Object.keys(obj.content)) {
      const item = obj.content[k];
      if (!item || typeof item !== "object") continue;

      if ("data" in item) item.data = "[]";
      if ("op" in item) item.op = "0";
      if ("timeInterval" in item) item.timeInterval = 999999;
    }
  }

  body = JSON.stringify(obj);
} catch (e) {}

$done({ body });
