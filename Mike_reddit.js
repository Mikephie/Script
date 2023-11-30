#Surge #模块 #Reddit 过滤推广, 关 NSFW 提示(暴力替换版 有点 bug)

let body;
try {
  if (/"(isNsfw|AdPost|AdMetadataCell|adPayload)"/.test($response.body)) {
    body = $response.body.replace(
      /(")(isNsfw|AdPost|AdMetadataCell|adPayload)(")/gi,
      '$1_$2$3'
    );
  }
} catch (e) {
  console.log(e);
} finally {
  $done(body ? { body } : {});
}
