var body = $response.body; // 获取响应体
try {
    var obj = JSON.parse(body); // 将响应体解析为JSON对象
    obj.identityVerification.verificationSteps.liveness.status = "NOT_STARTED";
    body = JSON.stringify(obj); // 将修改后的JSON对象转换回字符串
    $done({body}); // 返回修改后的响应体
} catch (e) {
    $done();
}
