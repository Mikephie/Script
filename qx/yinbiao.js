/*
#!name= ✨ 英语音标 ✨
#!desc=图像壁纸
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://raw.githubusercontent.com/Mikephie/icons/main/icon/yinbiao.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local] // Quantumult X
^https:\/\/flipped\.binfenyingyu\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/yinbiao.js

[MITM]
hostname = flipped.binfenyingyu.com

*/

// -------- 通知（带冷却）逻辑开始 --------
const cooldownMs = 10 * 60 * 1000;
const notifyKey = "英语音标_notify_key";
const now = Date.now();
let lastNotifyTime = $persistentStore.read(notifyKey) ? parseInt($persistentStore.read(notifyKey)) : 0;
if (now - lastNotifyTime > cooldownMs) {
    $notification.post("✨英语音标✨", "🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ", "永久解锁或 ❷❾-❾❾-❷❾❾❾");
    $persistentStore.write(now.toString(), notifyKey);
}
// -------- 通知（带冷却）逻辑结束 --------

// 主脚本函数...
try {
    let body = JSON.parse($response.body);

    // 使用固定的未来日期时间戳
    const fixedFutureDate = 3742762088000;

    // 直接在顶层添加关键字段
    body.freeCount = 9999;
    body.vipFlag = 1;
    body.isPremium = true;
    body.isVip = true;
    body.noAds = true;
    body.vipEnd = fixedFutureDate;
    body.vipStatus = 1;

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
                        if (typeof value === 'string' && !value.includes('VIP')) {
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
    processObject(body);

    // 检查并处理特殊数组
    if (body.datas) {
        // 直接设置常用字段
        body.datas.freeCount = 9999;
        body.datas.vipUrl = "";
        body.datas.msg = "";
        body.datas.buyFlag = 1;
        body.datas.coin = 9999;
        
        // 明确设置视频相关权限
        if (body.datas.videos && Array.isArray(body.datas.videos)) {
            body.datas.videos.forEach(video => {
                if (video) {
                    video.isLocked = false;
                    video.isPurchased = true;
                    video.needPurchase = false;
                    video.isFree = true;
                }
            });
        }
    }

    $done({ body: JSON.stringify(body) });
} catch (e) {
    $done({ body: $response.body });
}
// 主脚本函数...