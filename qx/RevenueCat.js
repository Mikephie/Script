// Configuration constants with enhanced type safety and flexibility
const CONFIG = {
  DATES: {
    CURRENT: "2024-04-04T04:04:04Z",
    FUTURE: "2088-08-08T08:08:08Z"
  },
  STORE: {
    TRANSACTION_ID: "888888888888888",
    NAME: "app_store"
  },
  FORBIDDEN_APPS: ['ShellBean', 'Fileball', 'mizframa', 'chatgpt', 'APTV'],
  SUBSCRIPTION: {
    MAX_PRODUCTS: 2,
    DEFAULT_VERSION: "168",
    ANONYMOUS_ID_PREFIX: "$RCAnonymousID:MIKEPHIE"
  }
};

// Enhanced utility functions with better error handling and logging
const Utils = {
  log(...args) {
    console.log(`[${new Date().toISOString()}]`, ...args);
  },

  error(...args) {
    console.error(`[${new Date().toISOString()}] ERROR:`, ...args);
  },

  parseJSON(str, defaultValue = {}) {
    if (!str) return defaultValue;
    try {
      return JSON.parse(str);
    } catch (e) {
      this.error("JSON parse error:", e.message);
      return defaultValue;
    }
  },

  getHeader(headers, key) {
    if (!headers || typeof headers !== 'object') return "";
    const normalizedKey = key.toLowerCase();
    return headers[key] || headers[normalizedKey] || "";
  },

  sendNotification(title, subtitle, body) {
    try {
      if (typeof $notification !== "undefined" && typeof $notification.post === "function") {
        $notification.post(title, subtitle, body);
        return true;
      }
      this.log("Notification service unavailable");
      return false;
    } catch (e) {
      this.error("Notification error:", e.message);
      return false;
    }
  }
};

// Enhanced subscription model with validation and type checking
class SubscriptionModel {
  static validateType(type) {
    return ['life', 'annual', 'yearly', 'monthly', 'sub', 'non_subscription'].includes(type) ? type : 'sub';
  }

  static create(id, type) {
    const validType = this.validateType(type);
    const isLifetime = validType === "life";
    const isNonSubscription = validType === "non_subscription";
    
    if (isNonSubscription) {
      return {
        id: "96390b26b7",
        is_sandbox: false,
        purchase_date: CONFIG.DATES.CURRENT,
        original_purchase_date: CONFIG.DATES.CURRENT,
        store: CONFIG.STORE.NAME,
        store_transaction_id: CONFIG.STORE.TRANSACTION_ID
      };
    }
    
    return {
      is_sandbox: false,
      ownership_type: "PURCHASED",
      product_identifier: id,
      expires_date: isLifetime ? null : CONFIG.DATES.FUTURE,
      original_purchase_date: CONFIG.DATES.CURRENT,
      store_transaction_id: CONFIG.STORE.TRANSACTION_ID,
      purchase_date: CONFIG.DATES.CURRENT,
      store: CONFIG.STORE.NAME,
      grace_period_expires_date: isLifetime ? null : CONFIG.DATES.FUTURE,
      period_type: validType
    };
  }

  static createEntitlement(id, type) {
    const validType = this.validateType(type);
    const isLifetime = validType === "life";
    const isNonSubscription = validType === "non_subscription";
    
    return {
      expires_date: isLifetime || isNonSubscription ? null : CONFIG.DATES.FUTURE,
      purchase_date: CONFIG.DATES.CURRENT,
      product_identifier: id,
      grace_period_expires_date: isLifetime || isNonSubscription ? null : CONFIG.DATES.FUTURE
    };
  }
}

// New FallbackManager class for enhanced fallback handling
class FallbackManager {
  static async parseFallback() {
    const storedData = await this.loadFromPersistentStore();
    if (storedData?.data) {
      Utils.sendNotification(
        "持久化数据加载成功",
        "正在筛选订阅",
        `共匹配了 ${Object.keys(storedData.data).length} 项订阅`
      );
      return this.filterAndGenerateOrders(storedData.data);
    }

    Utils.log("No valid data found. Using default preset.");
    Utils.sendNotification("数据加载失败", "未找到本地存储数据", "使用默认预设值");
    return this.generateDefaultOrders();
  }

  static async loadFromPersistentStore() {
    Utils.log("Loading data from persistent storage...");
    try {
      const rawData = $persistentStore?.read("revenuecat_response_data");
      return Utils.parseJSON(rawData);
    } catch (error) {
      Utils.error("Failed to read persistent data:", error.message);
      return null;
    }
  }

  static filterAndGenerateOrders(data) {
    const subscriptions = {};
    const entitlements = {};
    const filtered = this.filterDynamicEntitlements(data);

    filtered.forEach((item) => {
      subscriptions[item.productId] = SubscriptionModel.create(item.productId, item.type);
      entitlements[item.entitlement] = SubscriptionModel.createEntitlement(item.productId, item.type);
    });

    return { subscriptions, entitlements };
  }

  static filterDynamicEntitlements(data) {
    const priority = ["life", "annual", "yearly", "monthly", "sub"];
    const uniqueEntitlements = {};

    Object.keys(data).forEach((key) => {
      const entry = data[key];
      const type = this.detectType(key);

      entry.entitlements.forEach((entitlement) => {
        if (!uniqueEntitlements[entitlement] || 
            priority.indexOf(type) < priority.indexOf(uniqueEntitlements[entitlement].type)) {
          uniqueEntitlements[entitlement] = { productId: key, entitlement, type };
        }
      });
    });

    return Object.values(uniqueEntitlements);
  }

  static detectType(productId) {
    if (productId.includes("life")) return "life";
    if (productId.includes("annual")) return "annual";
    if (productId.includes("yearly")) return "yearly";
    if (productId.includes("monthly")) return "monthly";
    return "sub";
  }

  static generateDefaultOrders() {
    Utils.sendNotification("使用默认值", "没有本地数据", "生成默认订阅和权限");
    return {
      subscriptions: {
        "com.default.pro": SubscriptionModel.create("com.default.pro", "sub"),
        "com.default.premium": SubscriptionModel.create("com.default.premium", "sub")
      },
      entitlements: {
        "pro": SubscriptionModel.createEntitlement("com.default.pro", "sub"),
        "premium": SubscriptionModel.createEntitlement("com.default.premium", "sub")
      }
    };
  }
}

// Enhanced product manager with improved caching and error handling
class ProductManager {
  static lastNotification = null;
  static notificationCache = new Set();

  static PRODUCTS = {
    UA: {
      'js_code_pad': {
        products: [
          { entitlement: 'developer', id: 'js_code_pad_developer_upgrade', type: 'life', name: 'js_code_pad代码编辑' }
        ],
        name: 'js_code_pad代码编辑'
      },
      'Art%20Generator': {
        products: [
          { entitlement: 'discount_pro', id: 'artx_yearly_option_2', type: 'sub', name: 'Art Generator' },
          { entitlement: 'DalleCredit', id: 'artx_100Credit', type: 'sub', name: 'Art Generator' }
        ],
        name: 'Art Generator'
      },
      'ASKAI': {
        products: [
          { entitlement: 'pro', id: 'askai_pro', type: 'life', name: 'ASKAI' },
          { entitlement: 'pro_plan', id: 'token_pro_plan', type: 'life', name: 'ASKAI' }
        ],
        name: 'ASKAI'
      },
      'Darkroom': {
        products: [
          { entitlement: 'co.bergen.Darkroom.entitlement.allToolsAndFilters', id: 'co.bergen.Darkroom.product.forever.everything', type: 'sub', name: 'Darkroom' },
          { entitlement: 'co.bergen.Darkroom.entitlement.selectiveAdjustments', id: 'co.bergen.Darkroom.product.forever.everything', type: 'sub', name: 'Darkroom' }
        ],
        name: 'Darkroom'
      },
      'Loopsie': {
        products: [
          { entitlement: 'premium', id: 'com.gamelounge.loopsie.ios.one_time', type: 'life', name: 'Loopsie照片编辑' }
        ],
        name: 'Loopsie照片编辑'
      },
      'photography': {
        products: [
          { entitlement: 'premium', id: 'photography_sub_yearly_1', type: 'sub', name: 'PhotoX' }
        ],
        name: 'PhotoX'
      },
      'chatbotapp': {
        products: [
          { entitlement: 'One Time Full Access', id: 'PAI_lifeTimeAccess_01', type: 'life', name: 'chatbotapp' }
        ],
        name: 'chatbotapp'
      },
      'XS%20VPN': {
        products: [
          { entitlement: 'goru_pro', id: 'xs_ios_yearly_sub_1', type: 'sub', name: 'XS VPN' }
        ],
        name: 'XS VPN'
      },
      'Goru': {
        products: [
          { entitlement: 'goru_pro', id: 'com.ahmetserdarkaradeniz.goruyearlyalternative', type: 'sub', name: 'Goru' }
        ],
        name: 'Goru'
      },
      'Remote': {
        products: [
          { entitlement: 'Pros', id: 'com.cherpake.macrc.mor', type: 'life', name: 'Remote' }
        ],
        name: 'Remote'
      },
      'ChatPub': {
        products: [
          { entitlement: 'Unlimited Access', id: 'conversationai.year', type: 'sub', name: 'ChatPub' }
        ],
        name: 'ChatPub'
      },
      'ChatGPT': {
        products: [
          { entitlement: 'premium', id: 'com.prod.gpt.1y40', type: 'sub', name: 'ChatGPT' }
        ],
        name: 'ChatGPT'
      },
      'Video%20Up!': {
        products: [
          { entitlement: 'Full_access_app', id: 'app.videoup.videoup.na.base.one_year', type: 'sub', name: 'Video Up!' }
        ],
        name: 'Video Up!'
      },
      'Jellycuts': {
        products: [
          { entitlement: 'pro', id: 'com.zlineman.Jellyfish.tier.5.pro', type: 'sub', name: 'Jellycuts' }
        ],
        name: 'Jellycuts'
      },
      'Dream': {
        products: [
          { entitlement: 'premium', id: 'artx_yearly_option_2', type: 'sub', name: 'Dream' }
        ],
        name: 'Dream'
      },
      'World%20Clock': {
        products: [
          { entitlement: 'pro', id: 'dream_yearly_jan_2024_3999', type: 'sub', name: 'World Clock' }
        ],
        name: 'World Clock'
      },
      'MorningAlarm': {
        products: [
          { entitlement: 'morning_premium', id: 'alarmify.yearly.1', type: 'sub', name: 'MorningAlarm' }
        ],
        name: 'MorningAlarm'
      },
      'Genius%20AI': {
        products: [
          { entitlement: 'premium', id: 'genius_lifetime_59', type: 'life', name: 'Genius AI' }
        ],
        name: 'Genius AI'
      },
      'Vocai-iOS': {
        products: [
          { entitlement: 'AI Pro', id: 'vocabAI_900_1m', type: 'sub', name: 'Vocai-iOS' }
        ],
        name: 'Vocai-iOS'
      },
      '1Blocker': {
        products: [
          { entitlement: 'premium', id: 'blocker.ios.iap.lifetime', type: 'life', name: '1Blocker' }
        ],
        name: '1Blocker'
      },
      'VidCap': {
        products: [
          { entitlement: 'io.fadel.vidcap.pro', id: 'subs.vcp_59.99_365_3', type: 'sub', name: 'VidCap' }
        ],
        name: 'VidCap'
      },
      'Color%20Widgets': {
        products: [
          { entitlement: 'pro', id: 'cw_1999_1y_3d0', type: 'sub', name: 'Color Widgets' }
        ],
        name: 'Color Widgets'
      },
      'ChatBot': {
        products: [
          { entitlement: 'chatbot_annual', id: 'chatbot_annual', type: 'sub', name: 'ChatBot' }
        ],
        name: 'ChatBot'
      },
      'Infltr': {
        products: [
          { entitlement: 'com.Yooshr.infltr.subscriptionPremium', id: 'com.Yooshr.infltr.everythingForever', type: 'sub', name: 'Infltr' }
        ],
        name: 'Infltr'
      },
      'Currency': {
        products: [
          { entitlement: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus', type: 'sub', name: 'Currency-汇率查询' }
        ],
        name: 'Currency-汇率查询'
      },
      'Spark': {
        products: [
          { entitlement: 'premium', id: 'spark_5999_1y_1w0', type: 'sub', name: 'Spark_Mail-邮箱管理' }
        ],
        name: 'Spark_Mail-邮箱管理'
      },
      'ChatLLM': {
        products: [
          { entitlement: 'Pro', id: 'com.curiouscreatorsco.ChatLLM.pro.lifetime.notrial.150_00', type: 'life', name: 'AItText' }
        ],
        name: 'AItText'
      },
      'Photomator': {
        products: [
          { entitlement: 'pixelmator_photo_pro_access', id: 'pixelmator_photo_lifetime_v1', type: 'life', name: 'Photomator' }
        ],
        name: 'Photomator'
      },
      'CountDuck': {
        products: [
          { entitlement: 'premium', id: 'Lifetime', type: 'life', name: '倒数鸭' }
        ],
        name: '倒数鸭'
      },
      'ScreenRecordCase': {
        products: [
          { entitlement: 'Premium', id: 'me.fandong.ScreenRecordCase.Ultra', type: 'life', name: '屏幕套壳' }
        ],
        name: '屏幕套壳'
      },
      'ShellBoxKit': {
        products: [
          { entitlement: 'ssh_pro', id: 'ShellBoxKit.Year', type: 'sub', name: 'CareServer-服务器监控' }
        ],
        name: 'CareServer-服务器监控'
      },
      'IDM': {
        products: [
          { entitlement: 'premium', id: 'sub_yearly_idm', type: 'sub', name: 'IDM-下载' }
        ],
        name: 'IDM-下载'
      },
      'Whisper': {
        products: [
          { entitlement: 'all_features', id: 'whisperai_80_y', type: 'sub', name: 'Whisper' }
        ],
        name: 'Whisper'
      },
      'PhotoRoom': {
        products: [
          { entitlement: 'business', id: 'com.background.business.yearly', type: 'sub', name: 'PhotoRoom' }
        ],
        name: 'PhotoRoom'
      },
      'TouchRetouchBasic': {
        products: [
          { entitlement: 'premium', id: 'tr5_yearlysubsc_30_and_20_dlrs', type: 'sub', name: 'TouchRetouch-水印清理' }
        ],
        name: 'TouchRetouch-水印清理'
      },
      'Drops': {
        products: [
          { entitlement: 'premium', id: 'forever_unlimited_time_discounted_80_int', type: 'life', name: 'Drops外语' }
        ],
        name: 'Drops外语'
      },
      'UTC': {
        products: [
          { entitlement: 'Entitlement.Pro', id: 'tech.miidii.MDClock.subscription.month', type: 'sub', name: '花样文字' }
        ],
        name: '花样文字'
      },
      'EraseIt': {
        products: [
          { entitlement: 'ProVersionLifeTime', id: 'com.uzero.cn.eraseit.premium1.fromyear', type: 'sub', name: 'EraseIt' }
        ],
        name: 'EraseIt'
      },
      'DHWaterMarkManager': {
        products: [
          { entitlement: 'Vip', id: 'lifetimeVIP_001', type: 'life', name: 'DHWaterMarkManager' }
        ],
        name: 'DHWaterMarkManager'
      },
      '%E8%B5%84%E6%BA%90%E6%90%AC%E8%BF%90%E5%A4%A7%E5%B8%88': {
        products: [
          { entitlement: 'SaveTikYoutu_common', id: 'LifetimeSubscription', type: 'life', name: 'SaveTikYoutu' }
        ],
        name: 'SaveTikYoutu'
      },
      'Yosum': {
        products: [
          { entitlement: 'Premium', id: 'yosum_999_1year', type: 'sub', name: 'Yosum订阅' }
        ],
        name: 'Yosum订阅'
      },
      'iplayTV': {
        products: [
          { entitlement: 'com.ll.btplayer.12', id: 'com.ll.btplayer.12', type: 'life', name: 'ntPlayer' }
        ],
        name: 'ntPlayer'
      },
      'TQBrowser': {
        products: [
          { entitlement: 'pro_lt', id: 'com.tk.client.lifetime', type: 'life', name: 'Teak浏览器' }
        ],
        name: 'Teak浏览器'
      },
      'Python3IDE': {
        products: [
          { entitlement: 'pro', id: 'python3ide_six_month', type: 'sub', name: 'Python3IDE' }
        ],
        name: 'Python3IDE'
      },
      'CallAnnie': {
        products: [
          { entitlement: 'ai.animato.callannie.entitlement.pro0', id: 'ai.animato.callannie.proyearly1', type: 'sub', name: 'CallAnnie' }
        ],
        name: 'CallAnnie'
      },
      'VideoToLive': {
        products: [
          { entitlement: 'Premium', id: 'video_to_live_premium', type: 'life', name: 'VideoToLive' }
        ],
        name: 'VideoToLive'
      },
      'Themy': {
        products: [
          { entitlement: 'fonts_premium', id: 'lifetime', type: 'life', name: 'Fonts-微信字体' }
        ],
        name: 'Fonts-微信字体'
      },
      'BabyCare': {
        products: [
          { entitlement: 'pro', id: 'KiddoKeeper_38_LifeTime', type: 'life', name: '小守护' }
        ],
        name: '小守护'
      },
      'MenuBox': {
        products: [
          { entitlement: 'premium', id: 'com.menubox.premium', type: 'sub', name: 'MenuBox' }
        ],
        name: 'MenuBox'
      },
      'Chatme': {
        products: [
          { entitlement: 'premium', id: 'chatme_premium_year_discount', type: 'sub', name: 'ChatMe' }
        ],
        name: 'ChatMe'
      },
      'AI%C2%A0Chat': {
        products: [
          { entitlement: 'AI Plus', id: 'ai_plus_gpt_yearly', type: 'sub', name: 'AIChat' }
        ],
        name: 'AIChat'
      },
      'Days': {
        products: [
          { entitlement: 'premium', id: 'net.mattdavenport.daysuntil.dayspremiumlifetime', type: 'life', name: 'Days' }
        ],
        name: 'Days'
      },
      'Journal': {
        products: [
          { entitlement: 'PRO', id: 'com.pureformstudio.diary.yearly', type: 'sub', name: 'Journal App' },
          { entitlement: 'AI+', id: 'com.pureformstudio.diarly.ai_plus_yearly', type: 'sub', name: 'Journal App' }
        ],
        name: 'Journal App'
      }

    },  // UA,BUNDLE分界线，保留此行。

    BUNDLE: {
      'com.valo.reader': {
        products: [
          { entitlement: 'com.valo.reader.vip1.forever', id: 'com.valo.reader.vip1.forever', type: 'sub', name: '读不舍手' },
          { entitlement: 'com.valo.reader.vip2.year', id: 'com.valo.reader.vip2.year', type: 'sub', name: '读不舍手' }
        ],
        name: '读不舍手'
      },
      'com.runbuddy.prod': {
        products: [
          { entitlement: 'premium', id: 'rb_9999_1y_1y7999', type: 'sub', name: 'Runna-马拉松训练' }
        ],
        name: 'Runna-马拉松训练'
      },
      'com.reku.Counter': {
        products: [
          { entitlement: 'plus', id: 'com.reku.counter.plus.lifetime', type: 'life', name: 'Counter-计步器' }
        ],
        name: 'Counter-计步器'
      },
      'TeleprompterX': {
        products: [
          { entitlement: 'Pro Upgrade', id: 'TPXOTP', type: 'life', name: 'Teleprompter' }
        ],
        name: 'Teleprompter'
      },
      'moonbox.co.il.grow': {
        products: [
          { entitlement: 'pro', id: 'moonbox.co.il.grow.lifetime.offer', type: 'life', name: '植物识别-PlantID' }
        ],
        name: '植物识别-PlantID'
      },
      'tech.miidii.MDClock': {
        products: [
          { entitlement: 'Entitlement.Pro', id: 'tech.miidii.MDClock.pro', type: 'life', name: '谜底时钟' }
        ],
        name: '谜底时钟'
      },
      'com.voicedream.Voic': {
        products: [
          { entitlement: 'standard', id: 'vd_annual_79_3daytrial', type: 'sub', name: '声之梦' }
        ],
        name: '声之梦'
      },
      'com.laser-focused.focus-ios': {
        products: [
          { entitlement: 'subscribed', id: 'iap.io.masterbuilders.focus.pro_one_year', type: 'sub', name: 'Focus-专注时间管理' }
        ],
        name: 'Focus-专注时间管理'
      },
      'com.roehl': {
        products: [
          { entitlement: 'Pro', id: 'habitkit_3499_lt', type: 'life', name: 'HabitKit/WinDiary-双件套' }
        ],
        name: 'HabitKit/WinDiary-双件套'
      },
      'net.tengl.powertimer': {
        products: [
          { entitlement: 'plus', id: 'powertimer.plus', type: 'life', name: '元气计时-PowerTimer' }
        ],
        name: '元气计时-PowerTimer'
      },
      'com.reader.book': {
        products: [
          { entitlement: 'pro', id: 'reader.lifetimeFamily.pro', type: 'sub', name: 'PureLibro' }
        ],
        name: 'PureLibro'
      },
      'app.imone.OneWidget': {
        products: [
          { entitlement: 'pro', id: 'app.imone.OneWidget.Lifetime', type: 'life', name: 'OneWidget-小组件' }
        ],
        name: 'OneWidget-小组件'
      },
      'io.innerpeace.yiye': {
        products: [
          { entitlement: 'Premium', id: 'io.innerpeace.yiye.lifetime.forYearly', type: 'sub', name: '言外笔记' }
        ],
        name: '言外笔记'
      },
      'Example2Subs': {
        products: [
          { entitlement: 'pro', id: 'co.forever.everything', type: 'sub' },
          { entitlement: 'premium', id: 'co.forever.everything', type: 'sub' }
        ],
        name: 'Example2Subs App'
      },
      'com.reku.Counter2': [
        { entitlement: 'premium', id: 'com.reku.counter.plus.lifetime', type: 'life', name: 'Counter App' }
      ]
    }
  };

  static parseArgumentChoice(choice) {
    if (!choice) return null;
    const [entitlement, type] = choice.split(':');
    return entitlement ? {
      entitlement,
      type: SubscriptionModel.validateType(type)
    } : null;
  }

  static sendNotification(mode, productName, entitlements, ids) {
    const entitlementStr = Array.isArray(entitlements) ? entitlements.join(', ') : entitlements;
    const idStr = Array.isArray(ids) ? ids.join(', ') : ids;
    const notificationContent = `${mode}-${productName}-${entitlementStr}-${idStr}`;
    
    if (this.notificationCache.has(notificationContent)) return;
    
    this.notificationCache.add(notificationContent);
    if (this.notificationCache.size > 10) {
      this.notificationCache.clear();
    }
    
    Utils.sendNotification(
      "订阅模式通知",
      `当前模式：${mode}`,
      `匹配到产品：${productName}\nEntitlements: ${entitlementStr}\nIDs: ${idStr}`
    );
  }

  static matchUA(ua) {
    for (const [key, product] of Object.entries(this.PRODUCTS.UA)) {
      if (ua.includes(key)) {
        Utils.log(`UA匹配成功: ${key}`, product);
        if (product.products) {
          return product.products;
        }
        return Array.isArray(product) ? product : [product];
      }
    }
    return null;
  }

  static matchBundle(bundleId) {
    for (const [key, config] of Object.entries(this.PRODUCTS.BUNDLE)) {
      if (bundleId.includes(key)) {
        Utils.log(`Bundle匹配成功: ${key}`, config);
        if (config.products) {
          return config.products;
        }
        return Array.isArray(config) ? config : [config];
      }
    }
    return null;
  }

  static async loadFallback() {
    if (typeof $argument === "string") {
      const argumentChoice = this.parseArgumentChoice($argument.trim());
      if (argumentChoice) {
        Utils.log(`使用参数选择: ${JSON.stringify(argumentChoice)}`);
        return {
          subscriptions: {
            [`com.argument.${argumentChoice.entitlement}`]: 
              SubscriptionModel.create(`com.argument.${argumentChoice.entitlement}`, argumentChoice.type)
          },
          entitlements: {
            [argumentChoice.entitlement]: 
              SubscriptionModel.createEntitlement(`com.argument.${argumentChoice.entitlement}`, argumentChoice.type)
          }
        };
      }
    }

    return FallbackManager.parseFallback();
  }

  static async matchProduct(ua, bundleId) {
    Utils.log("开始匹配产品...");

    const uaProducts = this.matchUA(ua);
    if (uaProducts?.length) {
      const entitlements = uaProducts.map(p => p.entitlement);
      const ids = uaProducts.map(p => p.id);
      this.sendNotification("UA 匹配", uaProducts[0].name, entitlements, ids);
      return { 
        products: uaProducts.slice(0, CONFIG.SUBSCRIPTION.MAX_PRODUCTS),
        source: "UA" 
      };
    }

    const bundleProducts = this.matchBundle(bundleId);
    if (bundleProducts?.length) {
      const entitlements = bundleProducts.map(p => p.entitlement);
      const ids = bundleProducts.map(p => p.id);
      this.sendNotification("Bundle 匹配", bundleProducts[0].name, entitlements, ids);
      return { 
        products: bundleProducts.slice(0, CONFIG.SUBSCRIPTION.MAX_PRODUCTS),
        source: "Bundle" 
      };
    }

    const fallbackData = await this.loadFallback();
    const products = Object.entries(fallbackData.entitlements).map(([entitlement, data]) => {
      const productId = fallbackData.subscriptions[Object.keys(fallbackData.subscriptions).find(key => 
        fallbackData.subscriptions[key].product_identifier === data.product_identifier
      )].product_identifier;
      
      return {
        entitlement,
        id: productId,
        type: fallbackData.subscriptions[productId].period_type
      };
    });

    this.sendNotification(
      "Fallback 匹配",
      "Fallback",
      products.map(p => p.entitlement),
      products.map(p => p.id)
    );

    return {
      products,
      source: "Fallback"
    };
  }
}

// RequestHandler class
class RequestHandler {
  static checkForbiddenApps(ua, body) {
    const forbiddenApp = CONFIG.FORBIDDEN_APPS.find(app => 
      ua.includes(app) || (body && body.includes(app))
    );
    
    if (forbiddenApp) {
      Utils.log(`检测到禁止的应用: ${forbiddenApp}`);
      Utils.log("MIKEPHIEの分享频道: https://t.me/mikephie");
      return true;
    }
    return false;
  }

  static handleRequest() {
    try {
      const headers = { ...$request.headers };
      const ua = Utils.getHeader(headers, 'User-Agent');
      const body = $request.body || "";

      if (this.checkForbiddenApps(ua, body)) {
        return $done({});
      }

      delete headers['x-revenuecat-etag'];
      delete headers['X-RevenueCat-ETag'];
      
      return $done({ headers });
    } catch (e) {
      Utils.error("Request handling error:", e.message);
      return $done({});
    }
  }

  static async handleResponse() {
    try {
      const headers = $request.headers;
      const ua = Utils.getHeader(headers, 'User-Agent');
      const bundleId = Utils.getHeader(headers, 'X-Client-Bundle-ID');
      const body = $response.body || "";

      if (this.checkForbiddenApps(ua, body)) {
        return $done({});
      }

      const responseData = Utils.parseJSON($response.body);
      const { products, source } = await ProductManager.matchProduct(ua, bundleId);

      if (!products?.length) {
        Utils.log("没有匹配到产品");
        return $done({ body: JSON.stringify(responseData) });
      }

      const subscriptions = {};
      const entitlements = {};
      const non_subscriptions = {};
      const other_purchases = {};

      products.forEach(product => {
        Utils.log(`构建订阅数据: ${JSON.stringify(product)}`);
        if (product.type === 'non_subscription') {
          non_subscriptions[product.id] = [{
            id: "96390b26b7",
            is_sandbox: false,
            purchase_date: CONFIG.DATES.CURRENT,
            original_purchase_date: CONFIG.DATES.CURRENT,
            store: CONFIG.STORE.NAME,
            store_transaction_id: CONFIG.STORE.TRANSACTION_ID
          }];
          other_purchases[product.id] = {
            purchase_date: CONFIG.DATES.CURRENT
          };
        } else {
          subscriptions[product.id] = SubscriptionModel.create(product.id, product.type);
        }
        entitlements[product.entitlement] = SubscriptionModel.createEntitlement(product.id, product.type);
      });

      responseData.subscriber = {
        last_seen: responseData?.request_date || new Date().toISOString(),
        first_seen: CONFIG.DATES.CURRENT,
        original_application_version: CONFIG.SUBSCRIPTION.DEFAULT_VERSION,
        other_purchases,
        management_url: null,
        subscriptions,
        entitlements,
        original_purchase_date: CONFIG.DATES.CURRENT,
        original_app_user_id: responseData?.subscriber?.original_app_user_id || CONFIG.SUBSCRIPTION.ANONYMOUS_ID_PREFIX,
        non_subscriptions
      };

      Utils.log(`处理完成: 通过 ${source} 匹配到 ${products.length} 个产品`);
      return $done({ body: JSON.stringify(responseData) });
    } catch (e) {
      Utils.error("Response handling error:", e.message);
      return $done({ body: $response.body });
    }
  }
}

// Main execution
try {
  typeof $response === "undefined" ? 
    RequestHandler.handleRequest() : 
    RequestHandler.handleResponse();
} catch (e) {
  Utils.error("Main execution error:", e.message);
  $done({});
}