var Rnik = JSON.parse($response.body);
Rnik = {
  message: "成功!",
  result: {
    uid: "efe376d39b4f4385a45cb19ae0c8c13b",
    phone: "18888888888",
    memberExpire: 4092610661000
  },
  code: "00000"
};
$done({
  body: JSON.stringify(Rnik)
});