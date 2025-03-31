
/*
📜 APPHUB-动态解锁 VIP 脚本
📅 更新时间：2025-03-14
🔓 功能：自动获取应用信息并解锁永久 VIP

[rewrite_local]
^https?:\/\/.*\.apphud\.com\/v\d\/(subscriptions|customers)$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/apphud.js
 
[mitm]
hostname = *.apphud.com

*/

// ================ 配置区域 ================
const SETTINGS = {
    // 调试日志开关
    DEBUG_LOG: true,
    
    // 通知设置
    NOTIFICATION: {
        ENABLED: true,            // 通知开关
        INTERVAL: 10 * 60 * 1000, // 同一应用通知间隔(毫秒)：10分钟
    },
    
    // 订阅配置
    SUBSCRIPTION: {
        // 日期配置
        DATES: {
            CURRENT: new Date().toISOString(),
            FUTURE: "2088-08-08T08:08:08.000Z"
        },
        // 交易ID配置
        TRANSACTION: {
            ID: "490001314520000"
        }
    }
};
// ============================================

// 环境类 - 提供基础功能
class Env {
    constructor(name) {
        this.name = name;
        this.startTime = Date.now();
        
        // 初始化存储系统
        if (typeof $persistentStore !== 'undefined') {
            this.storage = $persistentStore;
        } else if (typeof $prefs !== 'undefined') {
            this.storage = $prefs;
        } else {
            this.storage = {
                read: () => null,
                write: () => false
            };
        }
    }
    
    log(...args) {
        if (SETTINGS.DEBUG_LOG) {
            console.log(`[${this.name}] ${args.join(" ")}`);
        }
    }
    
    // 读取持久化数据
    getdata(key) {
        try {
            if (typeof $persistentStore !== 'undefined') {
                return this.storage.read(key);
            } else if (typeof $prefs !== 'undefined') {
                return this.storage.valueForKey(key);
            }
            return null;
        } catch (e) {
            this.log(`读取数据失败: ${e.message}`);
            return null;
        }
    }
    
    // 写入持久化数据
    setdata(key, value) {
        try {
            if (typeof $persistentStore !== 'undefined') {
                return this.storage.write(value, key);
            } else if (typeof $prefs !== 'undefined') {
                return this.storage.setValueForKey(value, key);
            }
            return false;
        } catch (e) {
            this.log(`写入数据失败: ${e.message}`);
            return false;
        }
    }
    
    // 发送通知
    notify(title, subtitle = "", message = "", appId = "") {
        // 如果通知已关闭，仅记录日志
        if (!SETTINGS.NOTIFICATION.ENABLED) {
            this.log(`[通知已关闭] ${title}: ${subtitle} ${message}`);
            return;
        }
        
        // 检查通知间隔
        if (appId) {
            const notificationKey = `${this.name}_${appId}_lastNotify`;
            const lastNotifyTime = this.getdata(notificationKey);
            
            // 如果存在上次通知时间且未超过间隔，不发送通知
            if (lastNotifyTime) {
                const timeSince = Date.now() - parseInt(lastNotifyTime);
                if (timeSince < SETTINGS.NOTIFICATION.INTERVAL) {
                    this.log(`[通知间隔未到] ${appId}: 上次通知于 ${Math.floor(timeSince/1000/60)} 分钟前`);
                    return;
                }
            }
            
            // 更新通知时间
            this.setdata(notificationKey, Date.now().toString());
        }
        
        // 发送通知
        if (typeof $notify !== 'undefined') {
            $notify(title, subtitle, message);
        } else if (typeof $notification !== 'undefined') {
            $notification.post(title, subtitle, message);
        } else {
            // 如果不支持通知，则输出到日志
            this.log(`${title}\n${subtitle}\n${message}`);
        }
    }
    
    done(value = {}) {
        const costTime = (Date.now() - this.startTime) / 1000;
        this.log(`执行完毕，用时 ${costTime}s`);
        $done(value);
    }
}

// 创建环境实例
const env = new Env("ApphudEnhanced");

// 响应处理类
class ApphudHandler {
    constructor(response, request) {
        try {
            this.response = JSON.parse(response.body || "{}");
            this.request = request;
            this.headers = request?.headers || {};
            this.url = request?.url || "";
            
            // 解析 URL 提取有用信息
            this.urlParts = this.url.split('/');
            
            // 是否是订阅接口
            this.isSubscriptionEndpoint = this.url.includes('/subscriptions');
            this.isCustomerEndpoint = this.url.includes('/customers');
            
            env.log(`处理 Apphud 请求，URL: ${this.url}`);
            env.log(`接口类型: ${this.isSubscriptionEndpoint ? '订阅接口' : (this.isCustomerEndpoint ? '客户接口' : '未知接口')}`);
        } catch (e) {
            env.log(`初始化失败: ${e.message}`);
            throw e;
        }
    }
    
    // 获取应用信息
    getAppInfo() {
        // 从请求头提取 User-Agent
        const ua = this.headers["User-Agent"] || this.headers["user-agent"] || "";
        // 提取应用名称 - 通常是 User-Agent 的第一部分
        const appName = ua.split("/")[0].trim();
        
        // 尝试从 URL 或响应数据获取应用 ID
        let appId = this.extractAppId();
        
        // 尝试从响应数据中提取 Bundle ID
        let bundleId = this.extractBundleId();
        
        env.log(`应用名称: ${appName}`);
        env.log(`应用 ID: ${appId}`);
        env.log(`Bundle ID: ${bundleId}`);
        
        return {
            appName,
            appId,
            bundleId
        };
    }
    
    // 从 URL 或响应提取应用 ID
    extractAppId() {
        // 从 URL 提取
        // 通常 apphud URL 格式为: https://{appid}.apphud.com/v1/...
        const hostParts = this.url.split('://')[1]?.split('.apphud.com')[0];
        if (hostParts && hostParts !== 'api') {
            return hostParts;
        }
        
        // 从响应数据提取
        if (this.response.data?.results?.application?.id) {
            return this.response.data.results.application.id;
        }
        
        // 生成随机 ID 作为备选
        return `app_${Math.random().toString(36).substring(2, 10)}`;
    }
    
    // 提取 Bundle ID
    extractBundleId() {
        // 从响应数据中提取
        if (this.response.data?.results?.application?.bundle_id) {
            return this.response.data.results.application.bundle_id;
        }
        
        // 从应用 ID 生成
        const appId = this.extractAppId();
        return `com.${appId.replace(/[^a-zA-Z0-9]/g, '')}.app`;
    }
    
    // 提取产品信息
    extractProducts() {
        const products = [];
        
        // 尝试从 paywalls 提取产品信息
        if (this.response.data?.results?.paywalls) {
            for (const paywall of this.response.data.results.paywalls) {
                if (paywall.items) {
                    for (const item of paywall.items) {
                        if (item.product_id) {
                            products.push({
                                productId: item.product_id,
                                groupId: item.id || `group_${Math.random().toString(36).substring(2, 10)}`,
                                name: item.name || "Premium"
                            });
                        }
                    }
                }
            }
        }
        
        // 如果没有找到产品，创建一个默认产品
        if (products.length === 0) {
            const bundleId = this.extractBundleId();
            products.push({
                productId: `${bundleId}.premium.yearly`,
                groupId: `group_${Math.random().toString(36).substring(2, 10)}`,
                name: "Premium"
            });
        }
        
        env.log(`提取到 ${products.length} 个产品`);
        return products;
    }
    
    // 创建订阅对象
    createSubscription(product) {
        const { productId, groupId } = product;
        
        return {
            "status": "trial",
            "group_id": groupId,
            "autorenew_enabled": false,
            "introductory_activated": true,
            "cancelled_at": null,
            "kind": "autorenewable",
            "id": `sub_${Math.random().toString(36).substring(2, 15)}`,
            "next_check_at": SETTINGS.SUBSCRIPTION.DATES.FUTURE,
            "product_id": productId,
            "platform": "ios",
            "environment": "production",
            "local": false,
            "retries_count": 0,
            "units_count": 7,
            "unit": "day",
            "in_retry_billing": false,
            "started_at": SETTINGS.SUBSCRIPTION.DATES.CURRENT,
            "original_transaction_id": SETTINGS.SUBSCRIPTION.TRANSACTION.ID,
            "expires_at": SETTINGS.SUBSCRIPTION.DATES.FUTURE,
            "is_consumable": null
        };
    }
    
    // 注入订阅信息
    injectSubscriptions() {
        // 保证 data 和 results 存在
        if (!this.response.data) this.response.data = {};
        if (!this.response.data.results) this.response.data.results = {};
        
        // 清空现有订阅
        this.response.data.results.subscriptions = [];
        
        // 提取产品信息
        const products = this.extractProducts();
        
        // 为每个产品创建订阅
        for (const product of products) {
            const subscription = this.createSubscription(product);
            this.response.data.results.subscriptions.push(subscription);
            env.log(`已创建订阅: ${product.productId}`);
        }
        
        // 注入客户权限信息（如果是客户端点）
        if (this.isCustomerEndpoint) {
            this.injectCustomerPermissions(products);
        }
        
        return this.response;
    }
    
    // 注入客户权限信息
    injectCustomerPermissions(products) {
        if (!this.response.data.results.permissions) {
            this.response.data.results.permissions = {};
        }
        
        // 为每个产品创建权限
        for (const product of products) {
            this.response.data.results.permissions[product.name] = {
                "id": `perm_${Math.random().toString(36).substring(2, 10)}`,
                "name": product.name,
                "active": true,
                "renewal_type": "premium",
                "product_ids": [product.productId],
                "group_ids": [product.groupId]
            };
            env.log(`已创建权限: ${product.name}`);
        }
    }
}

// 主函数
function main() {
    try {
        env.log("开始处理 Apphud 请求");
        
        // 创建处理器
        const handler = new ApphudHandler($response, $request);
        const appInfo = handler.getAppInfo();
        
        // 注入订阅
        const modifiedResponse = handler.injectSubscriptions();
        
        // 发送通知
        if (appInfo.appName && appInfo.bundleId) {
            env.notify(
                "✨ VIP 已激活 ✨", 
                appInfo.appName, 
                `已成功注入 Apphud 订阅数据 (${appInfo.bundleId})`,
                appInfo.bundleId
            );
        }
        
        env.log("订阅注入成功");
        env.done({ body: JSON.stringify(modifiedResponse) });
    } catch (err) {
        env.log(`处理失败: ${err.message}`);
        // 返回原始响应，避免出错
        env.done({ body: $response.body });
    }
}

// 执行主函数
main();