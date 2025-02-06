//2025.02.05 21.12

/*
@Name：通杀所有Emby自动观看保号
@Author：怎么肥事
使用方法：手动观看一次，提示获取成功✅即可食用|可多账号获取
获取完参数请手动关闭重写
[rewrite_local]
^https?:\/\/.+\/emby\/Sessions\/Playing\/Stopped url script-request-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/emby.js

[task_local]
35 22 15,30 * * https://raw.githubusercontent.com/Mikephie/Script/main/qx/emby.js, tag=Emby自动观看, img-url=https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/lige47/emby.png, enabled=true

[MITM]
hostname = -*.fileball.app, *.SenPlayer.app, mb3admin.com, *.mb3admin.com
*/

// ✅ 兼容 Surge / Loon / QuantumultX
const env = new Env("Emby 请求捕获");

// 🌟 确保 Surge 能识别 `$notify` 和 `$prefs`
const isSurge = typeof $persistentStore !== "undefined";
const isLoon = typeof $loon !== "undefined";
const isQuantumultX = typeof $prefs !== "undefined";

const storage = {
    write: (value, key) => {
        if (isSurge) return $persistentStore.write(value, key);
        if (isLoon) return $persistentStore.write(value, key);
        if (isQuantumultX) return $prefs.setValueForKey(value, key);
        return false;
    },
    read: (key) => {
        if (isSurge) return $persistentStore.read(key);
        if (isLoon) return $persistentStore.read(key);
        if (isQuantumultX) return $prefs.valueForKey(key);
        return null;
    },
    remove: (key) => {
        if (isSurge) return $persistentStore.remove(key);
        if (isLoon) return $persistentStore.remove(key);
        if (isQuantumultX) return $prefs.removeValueForKey(key);
        return false;
    }
};

// 📌 定义存储前缀
const STORAGE_KEY_PREFIX = "Emby_request";

// 🛠 处理请求捕获
const handleRequestCapture = () => {
    if (typeof $request === "undefined") {
        env.log("⚠️ 不是 HTTP 请求，退出执行");
        env.done();
        return;
    }

    const url = $request.url;
    const headers = JSON.stringify($request.headers);
    const body = $request.body || "";

    env.log("捕获到请求:", url);

    const storageKey = `${STORAGE_KEY_PREFIX}_${Date.now()}`;

    storage.write(JSON.stringify({ url, headers, body }), storageKey);

    env.msg("Emby 请求已捕获 ✅", "成功保存请求数据", `URL: ${url}`);
    env.log("✅ 已保存请求到:", storageKey);

    env.done();
    $done();
};

// 📌 执行逻辑
handleRequestCapture();

// ✅ Env 类封装（支持 Surge / Loon / QuantumultX）
function Env(name) {
    this.name = name;
    this.startTime = new Date().getTime();
    this.msg = (title, subtitle = "", message = "") => {
        if (isSurge || isLoon) {
            $notification.post(title, subtitle, message);
        } else if (isQuantumultX) {
            $notify(title, subtitle, message);
        } else {
            console.log(`${title}\n${subtitle}\n${message}`);
        }
    };
    this.log = (...args) => {
        console.log(`[${this.name}]`, ...args);
    };
    this.done = () => {
        const endTime = new Date().getTime();
        this.log(`脚本执行完毕 🎉 用时 ${(endTime - this.startTime) / 1000} 秒`);
    };
}