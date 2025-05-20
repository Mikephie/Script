// 笔芯英语VIP解锁 - 增强版
// 适用于新版和旧版应用
// 保持与原始yinbiao.js相同的文件名和路径
// 更新时间: 2025-05-20

// 添加详细日志输出
console.log("笔芯英语解锁脚本开始执行");
console.log("请求URL: " + $request.url);

let body = $response.body;
let url = $request.url;

console.log("开始处理响应体");

try {
  // 尝试解析JSON格式的响应体
  let bodyObj = JSON.parse(body);
  console.log("成功解析JSON响应体");
  
  // 使用固定的未来日期时间戳 (2088年)
  const fixedFutureDate = 3742762088000;
  
  // 直接在顶层添加关键字段
  bodyObj.freeCount = 9999;
  bodyObj.vipFlag = 1;
  bodyObj.isPremium = false;
  bodyObj.isVip = true;
  bodyObj.noAds = true;
  bodyObj.vipEnd = fixedFutureDate;
  bodyObj.vipStatus = 1;
  
  // 递归函数，遍历整个JSON对象并修改匹配的字段
  function processObject(obj) {
    if (!obj || typeof obj !== 'object') return;
    
    // 处理对象中的每个属性
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        
        // 递归处理嵌套对象和数组
        if (value && typeof value === 'object') {
          processObject(value);
        }
        
        // 根据字段名称进行特定修改
        switch(key) {
          // VIP标志类字段 - 设置为1或true
          case 'isSub':
          case 'vipFlag':
          case 'xxyyVipFlag':
          case 'flippedVipFlag':
          case 'foreverVipFlag':
          case 'flippedForeverVipFlag':
          case 'xxyyVipFlag':
          case 'fzVipActive':
          case 'hasCustomSolutions':
          case 'isVip':
          case 'premiumFeatures':
          case 'invited':
          case 'hasInterest':
          case 'hasPurpose':
          case 'openPushFlag':
          case 'subcripedNoticeMobileFlag':
          case 'wxRemind':
          case 'isPurchased':
          case 'isFree':
          case 'isUnlocked':
          case 'hasVideo':
          case 'hasDetail':
            obj[key] = typeof value === 'boolean' ? true : 1;
            break;
            
          // 关闭的提醒和弹窗类字段 - 设置为0或false
          case 'appRemind':
          case 'popIndex':
          case 'reduceCoupon':
          case 'newUserFlag':
          case 'isAudit':
          case 'isTourist':
          case 'isLocked':
          case 'needPurchase':
          case 'isPremium':
            obj[key] = typeof value === 'boolean' ? false : 0;
            break;
            
          // 购买标志 - 设置为1表示已购买
          case 'buyFlag':
            obj[key] = 1;
            break;
            
          // VIP级别类字段 - 设置为高级别
          case 'vipLevel':
          case 'xxyyVipLevel':
          case 'flippedVipLevel':
          case 'fzVipLevel':
          case 'userGrade':
          case 'userLevel':
          case 'gradeName':
          case 'userIdentityType':
          case 'studyType':
            obj[key] = 5;
            break;
            
          // 数量类字段 - 设置为合理的高值
          case 'wordCount':
          case 'dubWorkCount':
          case 'noteCount':
          case 'sentenceCount':
          case 'courseCount':
          case 'subscribeProgramCount':
          case 'subCount':
          case 'freeCount':
          case 'coin':
            if (key === 'freeCount' || key === 'coin') {
              obj[key] = 9999;
            } else if (key === 'subCount') {
              obj[key] = 1;
            } else {
              obj[key] = 1000;
            }
            break;
            
          // 日期截止类字段 - 使用固定的未来日期
          case 'vipDeadline':
          case 'xxyyVipDeadline':
          case 'flippedVipDeadline':
          case 'fzVipDeadline':
          case 'zcnVipDeadline':
          case 'dpVipDeadline':
          case 'ybVipDeadline':
            obj[key] = fixedFutureDate;
            break;
            
          // 用户等级字段 - 字符串类型
          case 'flippedUserLevel':
            if (typeof value === 'string' && value.startsWith('A')) {
              obj[key] = 'A10';
            }
            break;
            
          // 身份标题类字段
          case 'identity':
          case 'subverterIdentityTitle':
          case 'subverterLevelTitle':
          case 'stage':
            obj[key] = "永久VIP会员";
            break;
            
          // 用户目的字段
          case 'userPurpose':
            obj[key] = "VIP特权";
            break;
            
          // 头像字段
          case 'headPortrait':
          case 'picUrl':
            // 仅当值包含默认头像链接时替换
            if (typeof value === 'string' && value.includes('default')) {
              obj[key] = "https://i.ibb.co/wM5z10N/IMG-1287.jpg";
            }
            break;
            
          // 清空URL和消息字段
          case 'vipUrl':
          case 'msg':
            obj[key] = "";
            break;
            
          // 特殊处理自定义解决方案数据文本
          case 'dataText':
            if (obj.hasOwnProperty('hasCustomSolutions')) {
              obj[key] = "VIP专属特权已激活";
            }
            break;
            
          // 特殊处理昵称 - 添加VIP前缀
          case 'nickName':
          case 'nickname':
            if (typeof value === 'string' && !value.includes('VIP') && !value.includes('🎖️')) {
              obj[key] = "🎖️" + value;
            }
            break;
        }
      }
    }
    
    // 处理VIP卡片数组
    if (obj.vipCards && Array.isArray(obj.vipCards)) {
      processVipCards(obj.vipCards);
    }
    
    if (obj.flippedVipCards && Array.isArray(obj.flippedVipCards)) {
      processVipCards(obj.flippedVipCards);
    }
    
    // 确保分页正常
    if (obj.hasOwnProperty('hasNext')) {
      obj.hasNext = 1;
    }
  }
  
  // 处理VIP卡片数组的函数
  function processVipCards(cards) {
    cards.forEach(card => {
      if (card && typeof card === 'object') {
        const originalPrice = parseFloat(card.vipCardOriginalPrice || "0");
        card.vipCardSellPrice = "0.01";
        card.vipCardDiscountPrice2 = (originalPrice - 0.01).toString();
        card.vipCardDisplayLable = "已购买";
      }
    });
  }
  
  // 处理整个响应体
  processObject(bodyObj);
  
  // 检查并处理特殊数组
  if (bodyObj.datas) {
    // 直接设置常用字段
    bodyObj.datas.freeCount = 9999;
    bodyObj.datas.vipUrl = "";
    bodyObj.datas.msg = "";
    bodyObj.datas.buyFlag = 1;
    bodyObj.datas.coin = 9999;
    
    // 明确设置视频相关权限
    if (bodyObj.datas.videos && Array.isArray(bodyObj.datas.videos)) {
      bodyObj.datas.videos.forEach(video => {
        if (video) {
          video.isLocked = false;
          video.isPurchased = true;
          video.needPurchase = false;
          video.isFree = true;
        }
      });
    }
    
    // 处理自定义解决方案数据
    if (bodyObj.datas.customSolutionsData) {
      bodyObj.datas.customSolutionsData.hasCustomSolutions = 1;
      bodyObj.datas.customSolutionsData.dataText = "VIP专属特权已激活";
    }
  }
  
  console.log("成功处理响应体");
  
  // 返回处理后的响应体
  body = JSON.stringify(bodyObj);
} catch (e) {
  console.log("解析JSON失败，错误: " + e.message);
  console.log("尝试检查响应体是否加密");
  
  // 如果这是加密的响应体，可以尝试一些解密或直接替换策略
  // 这里我们先只记录错误，保持原始响应不变
  console.log("保持原始响应不变");
}

console.log("笔芯英语解锁脚本执行完毕");
$done({body});