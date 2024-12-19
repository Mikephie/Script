/*        

catinfo


[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/.+\/offerings url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/catinfo.js

[mitm] 
hostname = %APPEND% api.revenuecat.com

*******************************/

const env = new Env("Revenuecat 数据捕获与保存");

// 1. 定义请求 URL 和头部
const url = "https://api.revenuecat.com/v1/product_entitlement_mapping";
const headers = { ...$request.headers }; // 继承请求头
const fullUserAgent = headers['User-Agent'] || headers['user-agent'] || "unknown-UA";

// 自动提取到第一个斜杠前的 User-Agent
const parsedUA = fullUserAgent.split("/")[0] || "unknown-UA";

env.log("发起请求，解析后的 User-Agent:", parsedUA);

// 2. 发起 GET 请求
const params = {
    url: url,
    timeout: 5000,
    headers: headers,
};

$httpClient.get(params, function (errormsg, response, data) {
    if (errormsg) {
        env.msg("请求失败 ❌", "无法获取数据", errormsg);
        env.log("请求失败，错误信息:", errormsg);
    } else {
        try {
            const jsonData = JSON.parse(data);

            // 3. 重新构建简化的数据结构
            const simplifiedData = {
                user_agent: parsedUA, // 精简后的 User-Agent
                data: jsonData.product_entitlement_mapping // 只保留产品映射数据
            };

            // 4. 输出日志和通知
            env.msg("数据捕获成功 ✅", "成功获取 Revenuecat 数据", `UA: ${parsedUA}`);
            env.log("捕获到的简化数据内容:");
            env.log(JSON.stringify(simplifiedData, null, 2));

            // 5. 保存数据到持久化存储
            const storageKey = "revenuecat_response_data";
            const saveResult = env.setdata(JSON.stringify(simplifiedData), storageKey);

            if (saveResult) {
                env.msg("数据保存成功 ✅", "数据已成功保存至本地存储", `UA: ${parsedUA}`);
                env.log("数据已成功保存至持久化存储。");
            } else {
                env.msg("数据保存失败 ❌", "无法保存数据到本地存储", "请检查工具兼容性。");
                env.log("数据保存失败，请检查存储接口。");
            }

            // 6. 立即读取持久化存储中的数据
            const storedData = env.getdata(storageKey);
            if (storedData) {
                env.msg("数据读取成功 ✅", `UA: ${parsedUA}`, storedData.substring(0, 200));
                env.log("读取到的持久化存储数据:");
                env.log(storedData);
            } else {
                env.msg("数据读取失败 ❌", "未找到存储数据", `键名: ${storageKey}`);
                env.log("未找到持久化存储中的数据，请检查写入是否成功。");
            }
        } catch (e) {
            env.msg("数据处理异常 ❌", "捕获数据时发生错误", e.message);
            env.log("捕获数据时发生异常，错误信息:", e);
        }
    }
    env.done();
    $done();
});

// Env 类封装
function Env(name) {
    this.name = name;
    this.startTime = new Date().getTime();
    this.msg = (title, subtitle = "", message = "") => {
        if (typeof $notification !== "undefined") {
            $notification.post(title, subtitle, message);
        } else {
            console.log(`${title}\n${subtitle}\n${message}`);
        }
    };
    this.log = (...args) => {
        console.log(`[${this.name}] ${args.join(" ")}`);
    };
    this.setdata = (value, key) => {
        try {
            if (typeof $persistentStore !== "undefined") {
                return $persistentStore.write(value, key); // Surge/Loon
            } else if (typeof $prefs !== "undefined") {
                return $prefs.setValueForKey(value, key); // Quantumult X
            }
        } catch (e) {
            this.log("数据存储失败:", e);
            return false;
        }
        return false;
    };
    this.getdata = (key) => {
        try {
            if (typeof $persistentStore !== "undefined") {
                return $persistentStore.read(key); // Surge/Loon
            } else if (typeof $prefs !== "undefined") {
                return $prefs.valueForKey(key); // Quantumult X
            }
        } catch (e) {
            this.log("读取本地存储失败:", e);
            return null;
        }
    };
    this.done = () => {
        const endTime = new Date().getTime();
        this.log(`脚本执行完毕 🎉 用时 ${(endTime - this.startTime) / 1000} 秒`);
    };
}