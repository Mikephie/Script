/*
试卷100解锁VIP
2024.1.12

[rewrite_local]
^https:\/\/paper\.zjapp\.xyz\/api\/v1\/status\/list url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sj100-4.js

[mitm]
hostname = paper.zjapp.xyz
*/

// 1. 解析原始响应
let obj = JSON.parse($response.body);

// 2. 确保 data.user_status_infos 存在，并且是数组
if (Array.isArray(obj?.data?.user_status_infos)) {
  
  // 这里只演示修改第一个 user_status_info；如果你要批量改，可遍历
  let info = obj.data.user_status_infos[0];
  if (info) {
    // 示范：设置 status=1、设置一个很晚的过期时间
    info.status = 1;
    info.expire_at = 3742762088000; // 2088-08-08 08:08:08 (示例毫秒数)

    // 再来改 extra 里的 trial 值
    try {
      // extra 里面通常是一个 JSON 字符串，需要先 JSON.parse
      let extraObj = JSON.parse(info.extra);
      if (Array.isArray(extraObj?.products)) {
        // 比如把所有产品的 trial 改成 false
        extraObj.products.forEach(p => {
          p.trial = false;
        });
      }
      // 改完再转回字符串
      info.extra = JSON.stringify(extraObj);
    } catch (e) {
      // 如果 extra 解析失败，就忽略
    }
  }
}

// 3. 返回修改后的结果
$done({ body: JSON.stringify(obj) });