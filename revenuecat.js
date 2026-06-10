globalThis.SCRIPT_NAME = "✨RevenueCat✨"; // auto-injected
/*
#!name= ✨RevenueCat✨
#!desc=【完全版】动态 product_entitlement_mapping 捕获与自动注入。已添加 PhotoRoom、ChatGPT、Gemini 屏蔽。
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon = https://img.mikephie.site/APP_logo/revenuecat.png

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
# RevenueCat 通用逻辑 — QX 源格式，动作流自动转出 Loon / Surge
# ETag 清除
^https:\/\/api\.(revenuecat|rc-backup)\.com\/ header-del x-revenuecat-etag
^https:\/\/api\.(revenuecat|rc-backup)\.com\/ header-del X-RevenueCat-ETag
^https:\/\/api\.(revenuecat|rc-backup)\.com\/ header-del if-none-match
^https:\/\/api\.(revenuecat|rc-backup)\.com\/ header-del If-None-Match
# 请求：subscribers/receipts（QX script-request-header；Surge 须 requires-body=0，见 surge/revenuecat.sgmodule）
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://ijs.mikephie.com/quantumultx/revenuecat.js
# 响应：注入 + 缓存 mapping/offerings
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts$|subscribers\/?(.*?)*$|product_entitlement_mapping$|offerings$) url script-response-body https://ijs.mikephie.com/quantumultx/revenuecat.js

[mitm]
hostname = api.revenuecat.com, api.rc-backup.com
*/

// 通知模块（批量修改时只改 NOTIFY 配置）
const NOTIFY = { MSG: "💎 Unlimited Privileges\n📅 Valid Until: 2088-08-08", APPS: [{ pattern: /revenuecat\.com|rc-backup\.com/, name: "RevenueCat" }] };

// ================ 1. 重要配置区域 — 须位于顶部通知 IIFE 之前，否则「禁止应用通知」不生效 ================
const SETTINGS = {
    NOTIFICATION_ENABLED: true,
    NOTIFICATION: { INTERVAL: 6 * 60 * 60 * 1000 },
    INJECT: { DEBUG_LOG: false },
    DATES: { CURRENT: "2024-04-04T04:04:04Z", FUTURE: "2088-08-08T08:08:08Z" },
    STORE: { TRANSACTION_ID: "888888888888888", NAME: "app_store" },
    FORBIDDEN_APPS: ["ShellBean", "Filebar", "PXCEditor", "com.seawardhyacinth.pokecut", "mizframa", "Perplexity", "PhotoRoom", "ChatGPT", "chatgpt", "Spark", "APTV", "Gemini"],
    DISABLE_NOTIFY_BUNDLEIDS: ["com.mikephie.blockapp", "com.xiaobingkj.QingLong", "Morning Alarm-com.danigil.alarm", "Spark-com.readdle.smartemail"],
    DISABLE_NOTIFY_UAS: ["Spark", "Currency", "PhotoRoom", "ChatGPT", "chatgpt", "Submind", "Notion", "MOZE-SwiftUI", "QingLong", "Radddio", "MorningAlarm", "Morning Alarm", "Gemini"],
};

const MAPPING_URLS = [
    "https://api.rc-backup.com/v1/product_entitlement_mapping",
    "https://api.revenuecat.com/v1/product_entitlement_mapping",
];

const isSurge = typeof $loon === "undefined" && typeof $task === "undefined" && typeof $httpClient !== "undefined";
const isLoon = typeof $loon !== "undefined";
const isQuanX = typeof $task !== "undefined";

function getIdentifiers() {
    const headers = $request.headers || {};
    const ua = (headers["User-Agent"] || headers["user-agent"] || "unknown-UA").split("/")[0];
    const bundleId = headers["x-client-bundle-id"] || headers["X-Client-Bundle-ID"] || headers["X-Platform-Bundle-ID"] || "";
    const notificationKey = bundleId ? `${ua}-${bundleId}` : ua;
    const key = notificationKey;
    return { ua, bundleId, key, notificationKey, headers };
}

function isForbiddenApp(iden) {
    return (SETTINGS.FORBIDDEN_APPS || []).some((appName) => {
        const lowerName = appName.toLowerCase();
        return (
            (iden.ua && iden.ua.toLowerCase().includes(lowerName)) ||
            (iden.bundleId && iden.bundleId.toLowerCase().includes(lowerName))
        );
    });
}

function isNotifySuppressedForIdentifiers(iden) {
    if (!SETTINGS.NOTIFICATION_ENABLED) return true;
    if (isForbiddenApp(iden)) return true;
    const bi = (iden.bundleId && String(iden.bundleId)) || "";
    const inBundleList = (SETTINGS.DISABLE_NOTIFY_BUNDLEIDS || []).some(
        (x) => bi && (bi === x || bi.includes(x) || x.includes(bi))
    );
    const ua = (iden.ua || "").toLowerCase();
    const inUaList = (SETTINGS.DISABLE_NOTIFY_UAS || []).some((b) => ua.includes(String(b).toLowerCase()));
    return inBundleList || inUaList;
}

function isNotifySuppressedBySettings() {
    return isNotifySuppressedForIdentifiers(getIdentifiers());
}

(function () { const u = ($request && $request.url) || "", z = "\u200B"; let n = "RevenueCat", s = z; for (let i = 0; i < (NOTIFY.APPS && NOTIFY.APPS.length) || 0; i++) { if (NOTIFY.APPS[i].pattern.test(u)) { n = NOTIFY.APPS[i].name || n; s = z.repeat(i + 1); break; } } if (typeof globalThis !== "undefined") { globalThis.SCRIPT_NAME = "✨" + n + "✨" + s; globalThis.SCRIPT_MSG = NOTIFY.MSG || "💖永久解锁成功，到期时间：2088-08-08"; } })();
(function () { try { if (typeof $response === "undefined" || !$response || $response.status < 200 || $response.status >= 300) return; if (isNotifySuppressedBySettings()) return; const N = (typeof globalThis !== "undefined" && typeof globalThis.SCRIPT_NAME === "string" && globalThis.SCRIPT_NAME.trim()) || "脚本通知", M = (typeof globalThis !== "undefined" && typeof globalThis.SCRIPT_MSG === "string" && globalThis.SCRIPT_MSG.trim()) || "💎 Lifetime License Granted\n📅 Valid Until: 2088-08-08", C = 360, B = N.replace(/[^\w]/g, "_").slice(0, 40), K = "n_" + (/[a-zA-Z0-9]/.test(B) ? B : Math.abs(N.split("").reduce((h, c) => ((h << 5) - h) + c.charCodeAt(0) | 0, 0)).toString(36)), R = (k) => { try { return typeof $prefs !== "undefined" ? $prefs.valueForKey(k) : $persistentStore.read(k); } catch (e) { return null; } }, l = parseInt(R(K) || "0", 10); if (Date.now() - l < C * 6e4) return; if (typeof $notify === "function") $notify(N, "✅ 成功", M); else if (typeof $notification !== "undefined" && $notification.post) $notification.post(N, "✅ 成功", M); try { typeof $prefs !== "undefined" ? $prefs.setValueForKey(String(Date.now()), K) : $persistentStore.write(String(Date.now()), K); } catch (e) { } } catch (e) { } })();

// ================ 2. 动态 mapping 与注入（QX / Loon / Surge 三端） ================

function readStore(k) {
    try {
        if (typeof $persistentStore !== "undefined") return $persistentStore.read(k);
        if (typeof $prefs !== "undefined") return $prefs.valueForKey(k);
    } catch (e) {}
    return null;
}

function writeStore(k, v) {
    try {
        if (typeof $persistentStore !== "undefined") return $persistentStore.write(v, k);
        if (typeof $prefs !== "undefined") return $prefs.setValueForKey(v, k);
    } catch (e) {}
    return false;
}

function loadMapping(key) {
    try {
        const raw = readStore(`rc_map_${key}`);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        return parsed && Object.keys(parsed).length > 0 ? parsed : null;
    } catch (e) {
        return null;
    }
}

function saveMapping(key, data) {
    if (!data || Object.keys(data).length === 0) return;
    writeStore(`rc_map_${key}`, JSON.stringify(data));
}

function stripCacheHeaders(headers) {
    const h = Object.assign({}, headers || {});
    Object.keys(h).forEach((k) => {
        if (/^(x-revenuecat-etag|if-none-match)$/i.test(k)) delete h[k];
    });
    return h;
}

function pickAuthHeaders(headers) {
    const h = headers || {};
    const out = {};
    [
        "authorization", "Authorization",
        "x-client-bundle-id", "X-Client-Bundle-ID",
        "x-platform-bundle-id", "X-Platform-Bundle-ID",
        "user-agent", "User-Agent",
        "x-revenuecat-api-key", "X-RevenueCat-API-Key",
    ].forEach((k) => {
        if (h[k] !== undefined && h[k] !== "") out[k] = h[k];
    });
    return out;
}

function shouldSkipUrl(url) {
    return /(?:attributes|adservices_attribution)/.test(url || "");
}

function isOfferingsUrl(url) {
    return /\/offerings(?:\?|$)/.test(url || "");
}

function isMappingUrl(url) {
    return /\/product_entitlement_mapping(?:\?|$)/.test(url || "");
}

function isInjectUrl(url) {
    if (shouldSkipUrl(url) || isOfferingsUrl(url) || isMappingUrl(url)) return false;
    return /\/receipts(?:\?|$)/.test(url || "") || /\/subscribers\/[^/?]+(?:\?|$)/.test((url || "").split("?")[0]);
}

function parseJson(raw) {
    if (!raw || !String(raw).trim()) return null;
    try {
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

function extractMapping(body) {
    const data = typeof body === "string" ? parseJson(body) : body;
    if (!data) return null;
    const map = data.product_entitlement_mapping;
    return map && Object.keys(map).length > 0 ? map : null;
}

function mergeMapping(into, extra) {
    if (!extra) return into;
    const out = Object.assign({}, into || {});
    Object.keys(extra).forEach((k) => {
        out[k] = Object.assign({}, out[k] || {}, extra[k]);
    });
    return out;
}

function hasEntitlements(mapping) {
    return mapping && Object.keys(mapping).some((k) => ((mapping[k] || {}).entitlements || []).length > 0);
}

function cacheMappingResponse(body, iden) {
    const map = extractMapping(body);
    if (map) saveMapping(iden.key, mergeMapping(loadMapping(iden.key), map));
    return map;
}

function cacheOfferingsResponse(body, iden) {
    const data = typeof body === "string" ? parseJson(body) : body;
    if (!data) return;
    const partial = {};
    const offerings = data.offerings;
    const list = Array.isArray(offerings) ? offerings : offerings ? Object.values(offerings) : [];
    list.forEach((off) => {
        (off.packages || []).forEach((pkg) => {
            const pid = pkg.platform_product_identifier;
            if (pid && !partial[pid]) partial[pid] = { product_identifier: pid, entitlements: [] };
        });
    });
    if (Object.keys(partial).length > 0) {
        saveMapping(iden.key, mergeMapping(loadMapping(iden.key), partial));
    }
}

function createSubscription(id) {
    return {
        is_sandbox: false,
        ownership_type: "PURCHASED",
        product_identifier: id,
        original_purchase_date: SETTINGS.DATES.CURRENT,
        expires_date: SETTINGS.DATES.FUTURE,
        purchase_date: SETTINGS.DATES.CURRENT,
        store: SETTINGS.STORE.NAME,
        store_transaction_id: SETTINGS.STORE.TRANSACTION_ID,
        period_type: "normal",
    };
}

function createEntitlement(id) {
    return { expires_date: SETTINGS.DATES.FUTURE, purchase_date: SETTINGS.DATES.CURRENT, product_identifier: id };
}

function createNonSubscription(id) {
    return [{
        id: SETTINGS.STORE.TRANSACTION_ID,
        is_sandbox: false,
        ownership_type: "PURCHASED",
        product_identifier: id,
        purchase_date: SETTINGS.DATES.CURRENT,
        store: SETTINGS.STORE.NAME,
        store_transaction_id: SETTINGS.STORE.TRANSACTION_ID,
    }];
}

function buildSubscriberShell(url) {
    const m = (url || "").match(/\/subscribers\/([^/?]+)/);
    const appUserId = m ? decodeURIComponent(m[1]) : "$RCAnonymousID:unknown";
    const now = new Date().toISOString();
    return {
        request_date: now,
        request_date_ms: Date.now(),
        subscriber: {
            entitlements: {},
            first_seen: now,
            last_seen: now,
            management_url: null,
            non_subscriptions: {},
            original_app_user_id: appUserId,
            original_application_version: null,
            original_purchase_date: null,
            other_purchases: {},
            subscriptions: {},
        },
    };
}

function applyProductMapping(original, mapping) {
    const subs = {};
    const ents = {};
    const nonSubs = {};
    Object.keys(mapping || {}).forEach((pId) => {
        const p = mapping[pId] || {};
        const pid = p.product_identifier || pId;
        subs[pid] = createSubscription(pid);
        nonSubs[pid] = createNonSubscription(pid);
        (p.entitlements || []).forEach((e) => {
            ents[e] = createEntitlement(pid);
        });
    });
    const cur = original.subscriber || {};
    original.subscriber = Object.assign({}, cur, {
        subscriptions: Object.assign({}, cur.subscriptions || {}, subs),
        non_subscriptions: Object.assign({}, cur.non_subscriptions || {}, nonSubs),
        entitlements: Object.assign({}, cur.entitlements || {}, ents),
        management_url: "https://apps.apple.com/account/subscriptions",
    });
    return original;
}

function buildInjectedBody(url, mapping, rawBody) {
    let base = parseJson(rawBody);
    if (!base || !base.subscriber) base = buildSubscriberShell(url);
    return JSON.stringify(applyProductMapping(base, mapping));
}

function buildInjectResponse(bodyStr) {
    const headers = stripCacheHeaders(Object.assign({}, ($response && $response.headers) || {}));
    if (!headers["Content-Type"] && !headers["content-type"]) headers["Content-Type"] = "application/json";
    const out = { body: bodyStr, headers };
    if (($response && $response.status === 304) || !(($response && $response.body) || "").trim()) {
        out.status = 200;
    }
    return out;
}

function notifyOK(iden) {
    if (isNotifySuppressedForIdentifiers(iden || getIdentifiers())) return;
    const title = (typeof globalThis !== "undefined" && globalThis.SCRIPT_NAME) || "✨RevenueCat✨";
    const msg = (typeof globalThis !== "undefined" && globalThis.SCRIPT_MSG) || NOTIFY.MSG;
    const nKey = `RCat_${(iden || getIdentifiers()).notificationKey}_last_notification`;
    const last = readStore(nKey);
    if (last && Date.now() - parseInt(last, 10) < SETTINGS.NOTIFICATION.INTERVAL) return;
    try {
        if (typeof $notification !== "undefined" && $notification.post) {
            $notification.post(title, "✅ 成功", msg);
        } else if (typeof $notify === "function") {
            $notify(title, "✅ 成功", msg);
        }
        writeStore(nKey, String(Date.now()));
    } catch (e) {}
}

function httpGet(url, headers, cb) {
    const opt = { url, method: "GET", headers: pickAuthHeaders(headers), timeout: 15000 };
    if (typeof $httpClient !== "undefined") {
        $httpClient.get(opt, (err, resp, data) => {
            const status = resp && (resp.status || resp.statusCode);
            cb(err, status, data);
        });
        return;
    }
    if (isQuanX) {
        $task.fetch(Object.assign({}, opt, { method: "GET" })).then(
            (r) => cb(null, r.statusCode, r.body),
            (e) => cb(e.error || e, null, null)
        );
        return;
    }
    cb(new Error("no http client"), null, null);
}

function fetchProductMapping(headers, cb) {
    let i = 0;
    const next = () => {
        if (i >= MAPPING_URLS.length) return cb(null);
        const url = MAPPING_URLS[i++];
        httpGet(url, headers, (err, status, data) => {
            if (!err && status === 200) {
                const map = extractMapping(data);
                if (map && Object.keys(map).length > 0) return cb(map);
            }
            next();
        });
    };
    next();
}

function canAsyncFetch() {
    return isSurge || isLoon || isQuanX || typeof $httpClient !== "undefined";
}

function mockSubscriberResponse(url, mapping, rawBody, iden) {
    notifyOK(iden);
    return {
        response: {
            status: 200,
            headers: { "Content-Type": "application/json" },
            body: buildInjectedBody(url, mapping, rawBody),
        },
    };
}

function handleRequest(iden) {
    const url = $request.url || "";
    const headers = stripCacheHeaders(iden.headers);

    if (isForbiddenApp(iden)) {
        if (SETTINGS.INJECT.DEBUG_LOG) console.log(`🚫 禁止 MITM 应用，跳过: ${iden.ua}`);
        return $done({});
    }

    if (!isInjectUrl(url)) return $done({ headers });

    const cached = loadMapping(iden.key);
    if (hasEntitlements(cached)) {
        return $done(mockSubscriberResponse(url, cached, null, iden));
    }

    // 冷启动：仅清 etag 放行，mapping 在 response 阶段异步拉取（与 Reheji 一致）
    return $done({ headers });
}

function handleResponse(iden) {
    const url = $request.url || "";

    if (isForbiddenApp(iden)) {
        if (SETTINGS.INJECT.DEBUG_LOG) console.log(`🚫 禁止 MITM 应用，跳过: ${iden.ua}`);
        return $done({});
    }

    const rawBody = ($response && $response.body) || "";

    if (isMappingUrl(url)) {
        cacheMappingResponse(rawBody, iden);
        return $done({});
    }

    if (isOfferingsUrl(url)) {
        cacheOfferingsResponse(rawBody, iden);
        fetchProductMapping(iden.headers, (map) => {
            if (hasEntitlements(map)) {
                saveMapping(iden.key, mergeMapping(loadMapping(iden.key), map));
            }
        });
        return $done({});
    }

    if (shouldSkipUrl(url) || !isInjectUrl(url)) return $done({});

    let mapping = loadMapping(iden.key);
    if (!hasEntitlements(mapping)) {
        const fromBody = extractMapping(rawBody);
        if (fromBody) {
            mapping = mergeMapping(mapping, fromBody);
            saveMapping(iden.key, mapping);
        }
    }

    if (!hasEntitlements(mapping)) {
        if (canAsyncFetch()) {
            fetchProductMapping(iden.headers, (map) => {
                if (!hasEntitlements(map)) return $done({});
                saveMapping(iden.key, map);
                notifyOK(iden);
                $done(buildInjectResponse(buildInjectedBody(url, map, rawBody)));
            });
            return;
        }
        return $done({});
    }

    notifyOK(iden);
    $done(buildInjectResponse(buildInjectedBody(url, mapping, rawBody)));
}

const iden = getIdentifiers();

if (typeof $response === "undefined") {
    handleRequest(iden);
} else {
    handleResponse(iden);
}
