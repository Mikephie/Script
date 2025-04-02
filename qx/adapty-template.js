/*
📜 Adapty 订阅模板
📅 更新时间：2025-04-02
🔓 功能：提供 Adapty 服务的订阅数据模板
*/

// 导出模板对象
module.exports = {
    // 模板元数据
    meta: {
        name: "adapty",
        version: "1.0.0",
        date: "2025-04-02"
    },
    
    // 创建会员信息
    createPremiumInfo: function(productId) {
        return {
            id: "premium",
            is_lifetime: false,
            store: "app_store",
            starts_at: getCurrentDate(),
            expires_at: getFutureDate(),
            will_renew: true,
            is_active: true,
            is_in_grace_period: false,
            activated_at: getCurrentDate(),
            renewed_at: getCurrentDate(),
            is_refund: false,
            vendor_transaction_id: getTransactionId(),
            vendor_original_transaction_id: getTransactionId(),
            vendor_product_id: productId,
            is_sandbox: false,
            active_introductory_offer_type: "trial"
        };
    },
    
    // 创建收据信息
    createReceiptInfo: function(productId) {
        return {
            quantity: "1",
            purchase_date_ms: Date.now().toString(),
            expires_date: "2088-08-08 08:08:08 Etc/GMT",
            is_in_intro_offer_period: "false",
            transaction_id: getTransactionId(),
            is_trial_period: "true",
            original_transaction_id: getTransactionId(),
            purchase_date: new Date().toISOString().replace('T', ' ').replace('.000Z', ' Etc/GMT'),
            product_id: productId,
            in_app_ownership_type: "PURCHASED",
            original_purchase_date_ms: Date.now().toString(),
            expires_date_ms: "3742762088000"
        };
    },
    
    // 创建分析/购买响应
    createAnalyticsResponse: function(appInfo, productId) {
        const subscriptions = {};
        subscriptions[productId] = this.createPremiumInfo(productId);
        
        return {
            data: {
                type: "adapty_purchase_app_store_original_transaction_id_validation_result",
                id: appInfo.profileId,
                attributes: {
                    profile_id: appInfo.profileId,
                    is_test_user: false,
                    segment_hash: "8245f974014fdf4c",
                    timestamp: Date.now(),
                    apple_validation_result: {
                        environment: "Production",
                        revision: `${Date.now()}_${getTransactionId()}_4`,
                        appAppleId: 1560806510,
                        transactions: [{
                            productId: productId,
                            storefront: "CHN",
                            originalTransactionId: getTransactionId(),
                            expiresDate: getFutureDate(),
                            subscriptionGroupIdentifier: "20459405",
                            purchaseDate: getCurrentDate(),
                            price: 0,
                            transactionId: getTransactionId(),
                            currency: "CNY",
                            inAppOwnershipType: "PURCHASED"
                        }],
                        hasMore: false,
                        bundleId: appInfo.bundleId
                    },
                    subscriptions: subscriptions,
                    paid_access_levels: {
                        premium: this.createPremiumInfo(productId)
                    }
                }
            }
        };
    },
    
    // 创建收据验证响应
    createReceiptResponse: function(appInfo, productId) {
        const subscriptions = {};
        subscriptions[productId] = this.createPremiumInfo(productId);
        const receiptData = [this.createReceiptInfo(productId)];
        
        return {
            data: {
                type: "adapty_inapps_apple_receipt_validation_result",
                id: appInfo.profileId,
                attributes: {
                    profile_id: appInfo.profileId,
                    apple_validation_result: {
                        environment: "Production",
                        receipt: {
                            receipt_type: "Production",
                            bundle_id: appInfo.bundleId,
                            in_app: receiptData,
                            original_purchase_date: new Date().toISOString().replace('T', ' ').replace('.000Z', ' Etc/GMT'),
                            adam_id: 1560806510,
                            request_date: new Date().toISOString().replace('T', ' ').replace('.000Z', ' Etc/GMT'),
                            request_date_ms: Date.now().toString(),
                            application_version: "1",
                            original_application_version: "1"
                        },
                        status: 0,
                        pending_renewal_info: [{
                            expiration_intent: "1",
                            product_id: productId,
                            is_in_billing_retry_period: "0",
                            auto_renew_product_id: productId,
                            original_transaction_id: getTransactionId(),
                            auto_renew_status: "0"
                        }],
                        latest_receipt_info: receiptData,
                        latest_receipt: "adapty"
                    },
                    subscriptions: subscriptions,
                    paid_access_levels: {
                        premium: this.createPremiumInfo(productId)
                    }
                }
            }
        };
    }
};

// 工具函数
function getCurrentDate() {
    return new Date().toISOString();
}

function getFutureDate() {
    return "2088-08-08T08:08:08.000Z";
}

function getTransactionId() {
    return `4900012${Math.floor(Math.random() * 10000000)}`;
}