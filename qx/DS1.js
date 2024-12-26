var Rnik = JSON.parse($response.body);
Rnik = {
  message: "成功!",
  result: {
    id: 13752115,
    pageName: "付费页面",
    elementId: "付费点击",
    uid: "A9A675B1-3999-4DF2-81BA-08F23623CD92",
    iosOrAnd: "ios",
    version: "1.6.7",
    isVip: 1,
    isCN: 1,
    deviceId: "26242316-0D4E-4F0F-A1B2-1FE5A99E68BC",
    deviceType: "iPhone 11",
    pageTitle: "首页我们的故事",
    elementPosition: "",
    elementContent: "付费页面",
    ip: "101.84.134.133"
  },
  code: "00000"
};
$done({
  body: JSON.stringify(Rnik)
});