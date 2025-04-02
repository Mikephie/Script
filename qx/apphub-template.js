/*
📜 Apphud 订阅模板
📅 更新时间：2025-04-02
🔓 功能：提供 Apphud 服务的订阅数据模板
*/

// 导出模板对象
module.exports = {
    // 模板元数据
    meta: {
        name: "apphud",
        version: "1.0.0",
        date: "2025-04-02"
    },
    
    // 创建订阅对象
    createSubscription: function(product) {
        const { productId, groupId } = product;
        
        return {
            "status": "trial",
            "group_id": groupId,
            "autorenew_enabled": false,
            "introductory_activated": true,
            "cancelled_at": null,
            "kind": "autorenewable",
            "id": `sub_${randomString(12)}`,
            "next_check_at": getFutureDate(),
            "product_id": productId,
            "platform": "ios",
            "environment": "production",
            "local": false,
            "retries_count": 0,
            "units_count": 7,
            "unit": "day",
            "in_retry_billing": false,
            "started_at": getCurrentDate(),
            "original_transaction_id": getTransactionId(),
            "expires_at": getFutureDate(),
            "is_consumable": null
        };
    },
    
    // 创建客户权限
    createPermission: function(product) {
        return {
            "id": `perm_${randomString(8)}`,
            "name": product.name,
            "active": true,
            "renewal_type": "premium",
            "product_ids": [product.productId],
            "group_ids": [product.groupId]
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

function randomString(length) {
    return Math.random().toString(36).substring(2, 2 + length);
}