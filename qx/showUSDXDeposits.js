try {
    // 假设 $response.body 包含原始的JSON响应体
    let responseObject = JSON.parse($response.body);

    // 修改isUSDXDepositsAvailable的值为true显示入金界面
    responseObject.isUSDXDepositsAvailable = true;

    // 将修改后的响应对象转换回JSON字符串
    let modifiedResponseBody = JSON.stringify(responseObject);

    // 使用 $done 函数返回修改后的响应体
    $done({body: modifiedResponseBody});
} catch (error) {
    console.log("Error modifying response: ", error);
    // 发生异常时，返回原始响应体
    $done({});
}