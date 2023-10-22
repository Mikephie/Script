var myDate = new Date(); // 创建一个表示当前时间的 Date 对象
var data_time = myDate.toLocaleDateString(); // 获取当前日期的字符串表示

function sleep(d) {
  for (var t = Date.now(); Date.now() - t <= d;); // 使程序暂停执行一段时间
}

function log(message) {
  console.log(message); // 打印消息到控制台
  // TODO: 将日志写入文件
}

var tokenColumn = "A"; // 设置列号变量为 "A"
var signInColumn = "B"; // 设置列号变量为 "B"
var rewardColumn = "C"; // 设置列号变量为 "C"
var emailColumn = "F"; // 设置列号变量为 "F"
var sendEmailColumn = "G"; // 设置列号变量为 "G"
var resultColumn = "J"; // 设置列号变量为 "J"

for (let row = 2; row <= 20; row++) { // 循环遍历从第 2 行到第 20 行的数据
  var refresh_token = Application.Range(tokenColumn + row).Text; // 获取指定单元格的值
  var sflq = Application.Range(signInColumn + row).Text; // 获取指定单元格的值
  var sflqReward = Application.Range(rewardColumn + row).Text; // 获取指定单元格的值
  var jsyx = Application.Range(emailColumn + row).Text; // 获取指定单元格的值
  var sendEmail = Application.Range(sendEmailColumn + row).Text; // 获取指定单元格的值
  var customEmailResult = Application.Range(resultColumn + row).Text; // 获取指定单元格的值

  var emailConfigured = Application.Range("J1").Text; // 获取指定单元格的值
  var zdy_host = Application.Range("J2").Text; // 获取指定单元格的值
  var zdy_post = parseInt(Application.Range("J3").Text); // 获取指定单元格的值并转换为整数
  var zdy_username = Application.Range("J4").Text; // 获取指定单元格的值
  var zdy_pasd = Application.Range("J5").Text; // 获取指定单元格的值

  if (sflq == "是") { // 如果“是否签到”为“是”
    if (refresh_token != "") { // 如果刷新令牌不为空
      // 发起网络请求-获取token
      let data = HTTP.post("https://auth.aliyundrive.com/v2/account/token",
        JSON.stringify({
          "grant_type": "refresh_token",
          "refresh_token": refresh_token
        })
      );
      data = data.json(); // 将响应数据解析为 JSON 格式
      var access_token = data['access_token']; // 获取访问令牌
      var phone = data["user_name"]; // 获取用户名

      if (access_token == undefined) { // 如果访问令牌未定义
        log("单元格【" + tokenColumn + row + "】内的token值错误，程序执行失败，请重新复制正确的token值");
        continue; // 跳过当前行的后续操作
      }

      try {
        var access_token2 = 'Bearer ' + access_token; // 构建包含访问令牌的请求头
        // 签到
        let data2 = HTTP.post("https://member.aliyundrive.com/v1/activity/sign_in_list",
          JSON.stringify({ "_rx-s": "mobile" }),
          { headers: { "Authorization": access_token2 } }
        );
        data2 = data2.json(); // 将响应数据解析为 JSON 格式
        var signin_count = data2['result']['signInCount']; // 获取签到次数

        var logMessage = "账号：" + phone + " - 签到成功，本月累计签到 " + signin_count + " 天";
        var rewardMessage = "";

        if (sflqReward == "是") { // 如果“是否领取奖励”为“是”
          if (sflq == "是") { // 如果“是否签到”为“是”
            try {
              // 领取奖励
              let data3 = HTTP.post(
                "https://member.aliyundrive.com/v1/activity/sign_in_reward?_rx-s=mobile",
                JSON.stringify({ "signInDay": signin_count }),
                { headers: { "Authorization": access_token2 } }
              );
              data3 = data3.json(); // 将响应数据解析为 JSON 格式
              var rewardName = data3["result"]["name"]; // 获取奖励名称
              var rewardDescription = data3["result"]["description"]; // 获取奖励描述
              rewardMessage = " " + rewardName + " - " + rewardDescription;
            } catch (error) {
              if (error.response && error.response.data && error.response.data.error) {
                var errorMessage = error.response.data.error; // 获取错误信息
                if (errorMessage.includes(" - 今天奖励已领取")) {
                  rewardMessage = " - 今天奖励已领取";
                  log("账号：" + phone + " - " + rewardMessage);
                } else {
                  log("账号：" + phone + " - 奖励领取失败：" + errorMessage);
                }
              } else {
                log("账号：" + phone + " - 奖励领取失败");
              }
            }
          } else {
            rewardMessage = " - 奖励待领取";
          }
        } else {
          rewardMessage = " - 奖励待领取";
        }

        log(logMessage + rewardMessage);

        if (sendEmail == "是") { // 如果“是否发送邮件”为“是”
          try {
            let mailer;
            if (customEmailResult == "是") { // 如果“是否自定义邮箱”为“是”
              var customEmail = Application.Range(resultColumn + row).Text; // 获取指定单元格的值
              if (emailConfigured === "是") { // 如果配置了自定义邮箱
                mailer = SMTP.login({
                  host: zdy_host,
                  port: zdy_post,
                  username: zdy_username,
                  password: zdy_pasd,
                  secure: true
                });
                mailer.send({
                  from: "阿里云盘签到<" + zdy_username + ">",
                  to: customEmail,
                  subject: "阿里云盘签到通知 - " + data_time,
                  text: logMessage + rewardMessage
                });
              } else { // 如果未配置自定义邮箱，默认使用示例邮箱
                mailer = SMTP.login({
                  host: "smtp.163.com",
                  port: 465,
                  username: "fs8484848@163.com",
                  password: "QADSEMPKDHDAVWVD",
                  secure: true
                });
                mailer.send({
                  from: "阿里云盘签到<fs8484848@163.com>",
                  to: customEmail,
                  subject: "阿里云盘签到通知 - " + data_time,
                  text: logMessage + rewardMessage
                });
              }
              log("账号：" + phone + " - 已发送邮件至：" + customEmail);
            } else { // 如果“是否自定义邮箱”为“否”
              if (emailConfigured === "是") { // 如果配置了自定义邮箱
                mailer = SMTP.login({
                  host: zdy_host,
                  port: zdy_post,
                  username: zdy_username,
                  password: zdy_pasd,
                  secure: true
                });
                mailer.send({
                  from: "阿里云盘签到<" + zdy_username + ">",
                  to: jsyx,
                  subject: "阿里云盘签到通知 - " + data_time,
                  text: logMessage + rewardMessage
                });
              } else { // 如果未配置自定义邮箱，默认使用示例邮箱
                mailer = SMTP.login({
                  host: "smtp.163.com",
                  port: 465,
                  username: "fs8484848@163.com",
                  password: "QADSEMPKDHDAVWVD",
                  secure: true
                });
                mailer.send({
                  from: "阿里云盘签到<fs8484848@163.com>",
                  to: jsyx,
                  subject: "阿里云盘签到通知 - " + data_time,
                  text: logMessage + rewardMessage
                });
              }
              log("账号：" + phone + " - 已发送邮件至：" + jsyx);
            }
          } catch (error) {
            log("账号：" + phone + " - 发送邮件失败：" + error);
          }
        }
      } catch {
        log("单元格【" + tokenColumn + row + "】内的token签到失败");
        continue; // 跳过当前行的后续操作
      }
    } else {
      log("账号：" + phone + " 不签到");
    }
  }
}

var currentDate = new Date(); // 创建一个表示当前时间的 Date 对象
var currentDay = currentDate.getDate(); // 获取当前日期的天数
var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // 获取当月的最后一天的日期

if (currentDay === lastDayOfMonth) { // 如果当前日期是当月的最后一天
  for (let row = 2; row <= 20; row++) { // 循环遍历从第 2 行到第 20 行的数据
    var sflq = Application.Range(signInColumn + row).Text; // 获取指定单元格的值
    var sflqReward = Application.Range(rewardColumn + row).Text; // 获取指定单元格的值

    if (sflq === "是" && sflqReward === "是") { // 如果“是否签到”和“是否领取奖励”均为“是”
      var refresh_token = Application.Range(tokenColumn + row).Text; // 获取指定单元格的值
      var jsyx = Application.Range(emailColumn + row).Text; // 获取指定单元格的值
      var phone = "账号：" + phone; // 构建账号信息字符串

      if (refresh_token !== "") { // 如果刷新令牌不为空
        // 发起网络请求-获取token
        let data = HTTP.post("https://auth.aliyundrive.com/v2/account/token",
          JSON.stringify({
            "grant_type": "refresh_token",
            "refresh_token": refresh_token
          })
        );
        data = data.json(); // 将响应数据解析为 JSON 格式
        var access_token = data['access_token']; // 获取访问令牌

        if (access_token === undefined) { // 如果访问令牌未定义
          log("单元格【" + tokenColumn + row + "】内的token值错误，程序执行失败，请重新复制正确的token值");
          continue; // 跳过当前行的后续操作
        }

        try {
          var access_token2 = 'Bearer ' + access_token; // 构建包含访问令牌的请求头
          // 领取奖励
          let data4 = HTTP.post(
            "https://member.aliyundrive.com/v1/activity/sign_in_reward?_rx-s=mobile",
            JSON.stringify({ "signInDay": lastDayOfMonth }),
            { headers: { "Authorization": access_token2 } }
          );
          data4 = data4.json(); // 将响应数据解析为 JSON 格式
          var claimStatus = data4["result"]["status"]; // 获取奖励状态
          var day = lastDayOfMonth; // 获取最后一天的日期

          if (claimStatus === "CLAIMED") {
            log("账号：" + phone + " - 第 " + day + " 天奖励领取成功");
          } else {
            log("账号：" + phone + " - 第 " + day + " 天奖励领取失败");
          }
        } catch {
          log("单元格【" + tokenColumn + row + "】内的token签到失败");
          continue; // 跳过当前行的后续操作
        }
      } else {
        log("账号：" + phone + " 不签到");
      }
    }
  }

  log("自动领取未领取奖励完成。");
}