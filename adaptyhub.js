globalThis.SCRIPT_NAME = "✨ AdaptyHub ✨"; // auto-injected
/*
#!name= ✨ AdaptyHub ✨
#!desc=AdaptyHub合集解锁🔓
#!category=🔐APP
#!author=🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ
#!icon=https://img.mikephie.site/APP_logo/adaptyhub.png
𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
目前支持服务：
- Adapty (adapty.io / adaptytech.com)
- Apphud (apphud.com)
- SNOW (snow.me)
 
[rewrite_local]
# Adapty - 更宽的路径匹配（v1/v2/v3）
^https?:\/\/api\.(?:adapty\.io|adaptytech\.com)\/api\/v\d+\/sdk\/(?:analytics\/profiles(?:\/.*)?|purchase(?:\/.*)?|in-apps\/(?:apple\/receipt\/validate|purchase(?:-containers|\/app-store)(?:\/.*)?|(?:public_live_[^/?]+\/)?(?:products-ids\/app_store|products\/app_store(?:\/.*)?|paywall\/variations\/[^?]+))) url script-response-body https://ijs.mikephie.com/quantumultx/adaptyhub.js


# Apphud - 兼容 api 或 {tenant}.apphud.com
^https?:\/\/(?:api|\w+)\.apphud\.com\/v\d+\/(?:subscriptions|customers)(?:\?.*)?$ url script-response-body https://ijs.mikephie.com/quantumultx/adaptyhub.js


# SNOW - 订阅状态（含 Epik，注意 Epik 实际路径为 purchase/subscriber/status 无 subscription）
^https?:\/\/[\w\-\.]+\.snow\.me\/v\d+\/purchase\/(?:subscription\/)?subscriber\/status(?:\/.*)?(?:\?.*)?$ url script-response-body https://ijs.mikephie.com/quantumultx/adaptyhub.js
# SNOW/Epik - purchase/subscription/product/list 等
^https?:\/\/[\w\-\.]+\.snow\.me\/v\d+\/(?:purchase|subscription|user|premium|launch)(?:\/.*)?(?:\?.*)?$ url script-response-body https://ijs.mikephie.com/quantumultx/adaptyhub.js
# Epik - api-epik.snow.me 的 xht/api/subs 接口（page/list、page/show/status）
^https?:\/\/[\w\-\.]+\.snow\.me\/xht\/api\/subs\/v\d+\/(?:page\/list|page\/show\/status)(?:\/.*)?(?:\?.*)?$ url script-response-body https://ijs.mikephie.com/quantumultx/adaptyhub.js


[mitm]
hostname = api.adapty.io, api.adaptytech.com, *.apphud.com, *.snow.me


*/


// 通知模块（批量修改时只改 NOTIFY 配置；adaptyhub 需 UA 区分 Epik/SNOW，用 fn 自定义）
const NOTIFY={MSG:"💎 Unlimited Privileges\n📅 Valid Until: 2088-08-08",APPS:[{pattern:/adapty(?:\.io|tech\.com)/,name:"Adapty"},{pattern:/apphud\.com/,name:"Apphud"},{pattern:/snow\.me/,name:null}]};
(function(){const u=($request&&$request.url)||"",ua=($request&&$request.headers&&($request.headers["User-Agent"]||$request.headers["user-agent"]))||"",z="\u200B";let n="AdaptyHub",s=z;for(let i=0;i<(NOTIFY.APPS&&NOTIFY.APPS.length)||0;i++){if(NOTIFY.APPS[i].pattern.test(u)){n=NOTIFY.APPS[i].name===null?(/epik/i.test(ua)?"Epik":"SNOW"):NOTIFY.APPS[i].name;s=z.repeat(i+1);break}}if(typeof globalThis!=="undefined"){globalThis.SCRIPT_NAME="✨"+n+"✨"+s;globalThis.SCRIPT_MSG=NOTIFY.MSG||"💖永久解锁成功，到期时间：2088-08-08"}})();
(function(){try{if(typeof $response==="undefined"||!$response||$response.status<200||$response.status>=300)return;const N=(typeof globalThis!=="undefined"&&typeof globalThis.SCRIPT_NAME==="string"&&globalThis.SCRIPT_NAME.trim())||"脚本通知",M=(typeof globalThis!=="undefined"&&typeof globalThis.SCRIPT_MSG==="string"&&globalThis.SCRIPT_MSG.trim())||"💎 Lifetime License Granted\n📅 Valid Until: 2088-08-08",C=360,B=N.replace(/[^\w]/g,"_").slice(0,40),K="n_"+(/[a-zA-Z0-9]/.test(B)?B:Math.abs(N.split("").reduce((h,c)=>((h<<5)-h)+c.charCodeAt(0)|0,0)).toString(36)),R=k=>{try{return typeof $prefs!=="undefined"?$prefs.valueForKey(k):$persistentStore.read(k)}catch(e){return null}},l=parseInt(R(K)||"0",10);if(Date.now()-l<C*6e4)return;if(typeof $notify==="function")$notify(N,"✅ 成功",M);else if(typeof $notification!=="undefined"&&$notification.post)$notification.post(N,"✅ 成功",M);try{typeof $prefs!=="undefined"?$prefs.setValueForKey(String(Date.now()),K):$persistentStore.write(String(Date.now()),K)}catch(e){}}catch(e){}})();


// ================ 配置区域 ================
// ==UserScript==
// Unified Adapty/Apphud/SNOW VIP - Hardened
// 2025-08-08
// ==/UserScript==


const SETTINGS = {
  DEBUG_LOG: true,
  VERSION: "20260603-sync5",
  NOTIFICATION: { ENABLED: false, INTERVAL: 10 * 60 * 1000, ERROR: true },
  INJECT: {
    DATES: { CURRENT: new Date().toISOString(), FUTURE: "2088-08-08T08:08:08.000Z" },
    TRANSACTION: { ID: `4900012${Math.floor(Math.random() * 10000000)}` }
  }
};


class Env {
  constructor(name) {
    this.name = name;
    this.start = Date.now();
    this.store = (typeof $persistentStore !== 'undefined') ? $persistentStore :
                 (typeof $prefs !== 'undefined') ? $prefs : null;
  }
  log(...a){ if(SETTINGS.DEBUG_LOG) console.log(`[${this.name}]`, ...a); }
  get(k){ try{ return this.store ? (this.store.read ? this.store.read(k) : this.store.valueForKey(k)) : null; }catch{ return null; } }
  set(k,v){ try{ return this.store ? (this.store.write ? this.store.write(v,k) : this.store.setValueForKey(v,k)) : false; }catch{ return false; } }
  notify(t,s="",m="", appId=""){
    if(!SETTINGS.NOTIFICATION.ENABLED){ this.log("[通知关闭]", t,s,m); return; }
    if(appId && !t.includes("错误")){
      const key = `${this.name}_${appId}_lastNotify`; const last=this.get(key);
      if(last && Date.now()-(+last) < SETTINGS.NOTIFICATION.INTERVAL){ this.log(`[通知限流] ${appId}`); return; }
      this.set(key, Date.now().toString());
    }
    if(typeof $notify!=='undefined') $notify(t,s,m);
    else if(typeof $notification!=='undefined') $notification.post(t,s,m);
    else this.log(t,s,m);
  }
  notifyError(err, ctx=""){ if(!SETTINGS.NOTIFICATION.ERROR) return; const msg=(err&&err.message)||String(err); this.notify("🔴 脚本执行错误", ctx?`[${ctx}]`:"", msg); this.log("ERR", ctx, msg); }
  done(obj){ this.log(`完成，用时 ${(Date.now()-this.start)/1000}s`); $done(obj); }
}
const env = new Env("UnifiedVIP+");


function safeParse(body){
  try{
    if (body == null || body === "") return {};
    if (typeof body === "object") return body;
    return JSON.parse(body);
  }catch(e){ env.notifyError(e,"JSON解析"); return {}; }
}
function delLen(h){ if(!h) return; const keys=Object.keys(h); for(const k of keys){ if(k.toLowerCase()==="content-length") delete h[k]; } }
function delAdaptyHeaders(h){
  delLen(h);
  if(!h) return;
  for(const k of Object.keys(h)){
    const lk = k.toLowerCase();
    if(lk==="x-response-hash") delete h[k];
  }
}
function bundleFromProductId(pid){
  if(!pid) return null;
  const parts = String(pid).split(".");
  if(parts.length >= 3) return parts.slice(0, 3).join(".");
  if(parts.length >= 2) return parts.slice(0, 2).join(".");
  return parts[0] || null;
}
function pickPreferredProductId(products){
  if(!Array.isArray(products) || !products.length) return null;
  return products.find(p => /year|annual|yearly/i.test(p)) || products[0];
}
function cacheKey(profileId){ return `adapty_ctx_${profileId || "global"}`; }
function readAdaptyCtx(profileId){
  try{
    const global = JSON.parse(env.get(cacheKey("global")) || "{}");
    const own = JSON.parse(env.get(cacheKey(profileId)) || "{}");
    return { ...global, ...own };
  }catch{ return {}; }
}
function writeAdaptyCtx(profileId, patch){
  for (const id of [profileId, "global"]) {
    if (!id) continue;
    try{
      const cur = JSON.parse(env.get(cacheKey(id)) || "{}");
      env.set(cacheKey(id), JSON.stringify({ ...cur, ...patch, updatedAt: Date.now() }));
    }catch{}
  }
}
function rememberAdaptyCatalog(productIds, profileId, accessLevels){
  const ids = [...new Set((productIds || []).filter(Boolean))];
  const levels = [...new Set((accessLevels || []).filter(Boolean))];
  if(!ids.length && !levels.length) return;
  const productId = pickPreferredProductId(ids);
  const bundleId = bundleFromProductId(productId);
  writeAdaptyCtx(profileId, {
    productIds: ids.length ? ids : undefined,
    productId: productId || undefined,
    bundleId: bundleId || undefined,
    accessLevels: levels.length ? levels : undefined
  });
}
function rememberAdaptyProfileMeta(attr, profileId, chosenTxId){
  if(!attr) return;
  const avr = attr.apple_validation_result || {};
  const productId = Object.keys(attr.subscriptions || {})[0] ||
    avr.transactions?.[0]?.productId ||
    attr.paid_access_levels?.premium?.vendor_product_id;
  const bundleId = avr.bundleId || avr.receipt?.bundle_id || bundleFromProductId(productId);
  if(productId || bundleId){
    writeAdaptyCtx(profileId, {
      productId: productId || undefined,
      bundleId: bundleId || undefined,
      txId: chosenTxId || undefined
    });
  }
}
function snapshotKey(profileId){ return `adapty_snap_${profileId || "global"}`; }
function saveProfileSnapshot(profileId, attr){
  if(!attr) return;
  const avr = attr.apple_validation_result || {};
  const cur = readAdaptyCtx(profileId);
  const subIds = Object.keys(attr.subscriptions || {});
  const productIds = [...new Set([...(cur.productIds || []), ...subIds].filter(Boolean))];
  const patch = {
    productIds,
    productId: pickPreferredProductId(productIds) ||
      attr.paid_access_levels?.premium?.vendor_product_id ||
      subIds[0] ||
      avr.transactions?.[0]?.productId ||
      cur.productId,
    bundleId: avr.bundleId || avr.receipt?.bundle_id || bundleFromProductId(
      attr.paid_access_levels?.premium?.vendor_product_id
    ),
    txId: attr.paid_access_levels?.premium?.vendor_original_transaction_id ||
      avr.transactions?.[0]?.originalTransactionId
  };
  if(patch.productId || patch.bundleId){
    try{ env.set(snapshotKey(profileId), JSON.stringify(patch)); }catch(e){}
    writeAdaptyCtx(profileId, patch);
  }
}
function loadProfileSnapshot(profileId){
  try{ return JSON.parse(env.get(snapshotKey(profileId)) || "{}"); }catch{ return {}; }
}
function bootstrapFromRequest(req, profileId, body){
  if(!needsCatalogBootstrap(readAdaptyCtx(profileId))){
    return readAdaptyCtx(profileId);
  }
  const snap = loadProfileSnapshot(profileId);
  if(snap.productId || snap.productIds?.length){
    writeAdaptyCtx(profileId, snap);
    return readAdaptyCtx(profileId);
  }
  const attr = body?.data?.attributes;
  if(attr){
    saveProfileSnapshot(profileId, attr);
    const ctx = readAdaptyCtx(profileId);
    if(!needsCatalogBootstrap(ctx)) return ctx;
  }
  return readAdaptyCtx(profileId);
}
function extractCatalogFromBody(body){
  const ids = [];
  const accessLevels = [];
  const data = body?.data;
  const items = Array.isArray(data) ? data : (data && typeof data === "object" ? [data] : []);
  for(const item of items){
    if(typeof item === "string") ids.push(item);
    else if(item && typeof item === "object"){
      ids.push(item.vendor_product_id || item.attributes?.vendor_product_id);
      if(item.access_level_id) accessLevels.push(item.access_level_id);
      if(item.attributes?.access_level_id) accessLevels.push(item.attributes.access_level_id);
      const products = item.attributes?.products || item.products;
      if(Array.isArray(products)){
        for(const p of products){
          if(!p) continue;
          ids.push(p.vendor_product_id || p.product_id || p.productId);
          if(p.access_level_id) accessLevels.push(p.access_level_id);
        }
      }
    }
  }
  return {
    productIds: ids.filter(Boolean),
    accessLevels: accessLevels.filter(Boolean)
  };
}
function extractCatalogProductIds(body){
  return extractCatalogFromBody(body).productIds;
}
function needsCatalogBootstrap(ctx){
  return !ctx?.productIds?.length || !ctx?.productId ||
    !ctx?.bundleId || ctx.bundleId === "com.adapty.app";
}
function resolveAdaptyProductContext(attr, avr, subsNode, req, profileId){
  const ctx = readAdaptyCtx(profileId);
  const reqBody = safeParse(req?.body);
  const reqTx = reqBody?.data?.attributes?.original_transaction_id;
  let bundleId = avr.bundleId || avr.receipt?.bundle_id || ctx.bundleId;
  let productId = Object.keys(subsNode)[0] ||
    avr.transactions?.[0]?.productId ||
    attr.paid_access_levels?.premium?.vendor_product_id ||
    ctx.productId;
  if(ctx.productIds?.length){
    productId = pickPreferredProductId(ctx.productIds) || productId;
  }
  if((!bundleId || bundleId === "com.adapty.app") && productId){
    bundleId = bundleFromProductId(productId) || bundleId;
  }
  if((!bundleId || bundleId === "com.adapty.app") && ctx.bundleId) bundleId = ctx.bundleId;
  if((!productId || productId.includes("com.adapty.app")) && ctx.productId) productId = ctx.productId;
  if(!productId && bundleId && bundleId !== "com.adapty.app"){
    productId = pickPreferredProductId(ctx.productIds) || `${bundleId}.premium.yearly`;
  }
  if((!bundleId || bundleId === "com.adapty.app") && (!productId || productId.includes("com.adapty.app"))){
    env.log("[Adapty] 警告: 未能解析真实 product/bundle");
  }
  if(!bundleId) bundleId = bundleFromProductId(productId) || "unknown.bundle";
  if(!productId) productId = `${bundleId}.premium.yearly`;
  let chosenTxId = reqTx || ctx.txId || SETTINGS.INJECT.TRANSACTION.ID;
  if(Array.isArray(avr.transactions) && avr.transactions[0]?.originalTransactionId){
    chosenTxId = String(avr.transactions[0].originalTransactionId);
  }
  return { bundleId, productId, chosenTxId };
}


class Detector{
  constructor(req){ this.u=req?.url||""; }
  type(){
    if(/adapty(?:\.io|tech\.com)/.test(this.u)) return "adapty";
    if(/(?:api|\w+)\.apphud\.com/.test(this.u)) return "apphud";
    if(/\.snow\.me/.test(this.u)) return "snow";
    return "unknown";
  }
}


function getUA(headers){ return headers["User-Agent"]||headers["user-agent"]||""; }
function getBundleFromAdapty(resp){
  const a = resp?.data?.attributes?.apple_validation_result;
  return a?.bundleId || a?.receipt?.bundle_id || "com.adapty.app";
}
function getProfileIdFromHeaders(h){
  return h["adapty-sdk-profile-id"] || h["ADAPTY-SDK-PROFILE-ID"] || `profile_${Math.random().toString(36).slice(2,10)}`;
}
function pickProductId(resp){
  const subs = resp?.data?.attributes?.subscriptions;
  if(subs){ const ks=Object.keys(subs); if(ks[0]) return ks[0]; }
  const tx = resp?.data?.attributes?.apple_validation_result?.transactions;
  if(Array.isArray(tx) && tx[0]?.productId) return tx[0].productId;
  const lr = resp?.data?.attributes?.apple_validation_result?.latest_receipt_info;
  if(Array.isArray(lr) && lr[0]?.product_id) return lr[0].product_id;
  return null;
}


function ensure(obj, path, fallback){
  // path: ["data","attributes","subscriptions"]
  let cur=obj;
  for(let i=0;i<path.length;i++){
    const p=path[i];
    if(cur[p]==null) cur[p] = (i===path.length-1 ? fallback : {});
    cur = cur[p];
  }
  return cur;
}


function injectAdapty(originalBody, req, resHeaders){
  const body = safeParse(originalBody);
  const headers = req?.headers||{};
  const profileId = getProfileIdFromHeaders(headers) ||
    (req?.url||"").match(/\/profiles\/([0-9a-f-]{36})\/?/i)?.[1] ||
    body?.data?.id ||
    `profile_${Math.random().toString(36).slice(2,10)}`;


  bootstrapFromRequest(req, profileId, body);


  // JSON:API 壳：新版 SDK 空 profile 常返回 {"data":{}}
  if (!body.data || typeof body.data !== "object") body.data = {};
  if (!body.data.id) body.data.id = profileId;
  if (!body.data.type) {
    body.data.type = (req?.url||"").includes("/purchase/") ?
      "adapty_purchase_app_store_original_transaction_id_validation_result" :
      "adapty_analytics_profile";
  }


  // 拿到现有结构
  const attr = ensure(body, ["data","attributes"], {});
  const avr  = ensure(attr, ["apple_validation_result"], {});
  const subsNode = ensure(attr, ["subscriptions"], {});
  let { bundleId, productId, chosenTxId } = resolveAdaptyProductContext(attr, avr, subsNode, req, profileId);


  // 优先年费 SKU，清掉过期试用 weekly 残留
  const ctx = readAdaptyCtx(profileId);
  if (ctx.productIds?.length) {
    productId = pickPreferredProductId(ctx.productIds) || productId;
  }
  for (const k of Object.keys(subsNode)) {
    if (k !== productId) delete subsNode[k];
  }


  // 1) 统一 & 拉远苹果 transactions 到期时间
  avr.environment = avr.environment || "Production";
  avr.bundleId = bundleId;
  avr.hasMore = false;
  avr.transactions = Array.isArray(avr.transactions) ? avr.transactions : [{
    productId,
    storefront: "SGP",
    originalTransactionId: chosenTxId,
    isUpgraded: false,
    expiresDate: SETTINGS.INJECT.DATES.FUTURE,
    type: "Auto-Renewable Subscription",
    purchaseDate: SETTINGS.INJECT.DATES.CURRENT,
    price: 0,
    transactionId: chosenTxId,
    currency: "USD",
    inAppOwnershipType: "PURCHASED",
    originalPurchaseDate: SETTINGS.INJECT.DATES.CURRENT
  }];
  // 逐个修正 StoreKit2 交易（去掉试用/过期标记）
  avr.transactions = avr.transactions.map(t => ({
    ...t,
    productId: t.productId || productId,
    originalTransactionId: chosenTxId,
    transactionId: chosenTxId,
    expiresDate: SETTINGS.INJECT.DATES.FUTURE,
    purchaseDate: t.purchaseDate || SETTINGS.INJECT.DATES.CURRENT,
    inAppOwnershipType: t.inAppOwnershipType || "PURCHASED",
    offerType: null,
    offerDiscountType: null,
    offerIdentifier: null,
    revocationDate: null,
    revocationReason: null
  }));


  // 2) 同步补齐 latest_receipt_info / receipt.in_app（很多 App 读这里）
  const receiptItem = {
    quantity: "1",
    purchase_date_ms: Date.now().toString(),
    expires_date: "2088-08-08 08:08:08 Etc/GMT",
    transaction_id: chosenTxId,
    original_transaction_id: chosenTxId,
    product_id: productId,
    expires_date_ms: "3742762088000"
  };
  avr.latest_receipt_info = Array.isArray(avr.latest_receipt_info) ? avr.latest_receipt_info : [receiptItem];
  avr.receipt = avr.receipt || { receipt_type: "Production", bundle_id: bundleId, in_app: [receiptItem] };


  // 3) subscriptions 节点：只保留当前 premium SKU
  const subIds = [productId];
  for (const pid of subIds) {
    subsNode[pid] = {
      vendor_transaction_id: chosenTxId,
      offer_id: null,
      billing_issue_detected_at: null,
      is_lifetime: false,
      store: "app_store",
      vendor_product_id: pid,
      vendor_original_transaction_id: chosenTxId,
      will_renew: true,
      renewed_at: SETTINGS.INJECT.DATES.CURRENT,
      cancellation_reason: null,
      active_promotional_offer_id: null,
      active_promotional_offer_type: null,
      unsubscribed_at: null,
      is_active: true,
      activated_at: SETTINGS.INJECT.DATES.CURRENT,
      is_refund: false,
      is_in_grace_period: false,
      active_introductory_offer_type: null,
      expires_at: SETTINGS.INJECT.DATES.FUTURE,
      starts_at: null,
      base_plan_id: null,
      is_sandbox: false
    };
  }
  productId = subIds[0] || productId;


  // 4) paid_access_levels 同步（修正所有已有 access level）
  const pal = ensure(attr, ["paid_access_levels"], {});
  const levelIds = Object.keys(pal).length ? Object.keys(pal) :
    (ctx.accessLevels?.length ? ctx.accessLevels : ["premium"]);
  for (const lid of levelIds) {
    pal[lid] = {
      vendor_transaction_id: chosenTxId,
      offer_id: null,
      billing_issue_detected_at: null,
      is_lifetime: false,
      store: "app_store",
      vendor_product_id: productId,
      vendor_original_transaction_id: chosenTxId,
      will_renew: true,
      renewed_at: SETTINGS.INJECT.DATES.CURRENT,
      cancellation_reason: null,
      active_promotional_offer_id: null,
      active_promotional_offer_type: null,
      unsubscribed_at: null,
      id: lid,
      is_active: true,
      activated_at: SETTINGS.INJECT.DATES.CURRENT,
      is_refund: false,
      is_in_grace_period: false,
      active_introductory_offer_type: null,
      expires_at: SETTINGS.INJECT.DATES.FUTURE,
      starts_at: null,
      base_plan_id: null
    };
  }


  // 5) 其它属性补齐（保留服务端 segment_hash 等，避免 SDK 反复拉 profile）
  if (!attr.app_id) attr.app_id = `app_${profileId.slice(0, 8)}`;
  attr.profile_id = attr.profile_id || profileId;
  attr.is_test_user = false;
  attr.introductory_offer_eligibility = true;
  attr.promotional_offer_eligibility = true;
  attr.total_revenue_usd = attr.total_revenue_usd || 0;
  attr.timestamp = attr.timestamp || Date.now();


  rememberAdaptyProfileMeta(attr, profileId, chosenTxId);
  saveProfileSnapshot(profileId, attr);


  // 清理长度/校验头，避免 SDK 因 hash 与 body 不一致丢弃响应
  delAdaptyHeaders(resHeaders);
  resHeaders["Content-Type"] = "application/json";


  env.log(`[Adapty] ${bundleId} / ${productId} tx=${chosenTxId} 已注入 premium`);
  return body;
}


function cacheAdaptyCatalogResponse(originalBody, req){
  const body = safeParse(originalBody);
  const profileId = getProfileIdFromHeaders(req?.headers || {});
  const { productIds, accessLevels } = extractCatalogFromBody(body);
  rememberAdaptyCatalog(productIds, profileId, accessLevels);
  env.log(`[Adapty] 已缓存 ${productIds.length} 产品 / ${accessLevels.length} access level`);
  return body;
}


function injectApphud(originalBody, req, resHeaders){
  const body = safeParse(originalBody);
  // 确保结构
  const results = ensure(body, ["data","results"], {});
  const now = SETTINGS.INJECT.DATES.CURRENT;
  const future = SETTINGS.INJECT.DATES.FUTURE;
  const txId = SETTINGS.INJECT.TRANSACTION.ID;


  // 构建一个可见订阅列表，尽量沿用原有 paywalls
  let products = [];
  if(Array.isArray(results.paywalls)){
    for(const pw of results.paywalls){
      if(Array.isArray(pw.items)){
        for(const it of pw.items){
          if(it?.product_id) products.push({productId: it.product_id, groupId: it.id||`g_${Math.random().toString(36).slice(2,8)}`, name: it.name||"Premium"});
        }
      }
    }
  }
  if(products.length===0){
    const bundle = (results.application?.bundle_id)||"com.apphud.app";
    products = [{productId:`${bundle}.premium.yearly`, groupId:`g_${Math.random().toString(36).slice(2,8)}`, name:"Premium"}];
  }


  // subscriptions
  results.subscriptions = [];
  for(const p of products){
    results.subscriptions.push({
      status: "trial",
      group_id: p.groupId,
      autorenew_enabled: true,
      id: `sub_${Math.random().toString(36).slice(2,12)}`,
      product_id: p.productId,
      platform: "ios",
      environment: "production",
      started_at: now,
      original_transaction_id: txId,
      expires_at: future
    });
  }


  // permissions（部分 App 会读取）
  results.permissions = results.permissions || {};
  for(const p of products){
    results.permissions[p.name] = {
      id: `perm_${Math.random().toString(36).slice(2,10)}`,
      name: p.name,
      active: true,
      product_ids: [p.productId],
      group_ids: [p.groupId]
    };
  }


  delLen(resHeaders);
  env.log(`[Apphud] 注入 ${products.length} 个产品`);
  return body;
}


const SNOW_VIP = {
  isPremium: true,
  isVip: true,
  activated: true,
  vipType: 1,
  expiredTime: 3742762088000,
  expireTime: 3742762088000,
  vipTime: 3742762088000,
  vipSegments: ["NEVER_USED_VIP"],
  specialSwitchStatus_B: 0,
  specialSwitchStatus_C: 0,
  specialSwitchStatus: 0,
  launchingSwitchStatus: 1
};


function injectSnow(originalBody, req, resHeaders){
  const body = safeParse(originalBody);
  const ua = getUA(req?.headers||{});
  const appKey = /^iphoneapp\.epik/i.test(ua) ? "epik" :
                 /^iphoneapp\.snow/i.test(ua) ? "snow" : "snow";
  const productId = appKey==="epik" ? "com.snowcorp.epik.subscribe.plan.oneyear" : "com.campmobile.snow.subscribe.oneyear";


  const times = Date.now();


  // 格式1: result 结构（多数订阅/状态接口）
  const result = ensure(body, ["result"], {});
  Object.assign(result, SNOW_VIP);
  result.products = result.products && result.products.length ? result.products : [{
    managed: true, status: "ACTIVE",
    startDate: times, productId, expireDate: 3742762088000
  }];
  result.tickets = result.tickets && result.tickets.length ? result.tickets : [{
    managed: true, status: "ACTIVE",
    startDate: times, productId, expireDate: 3742762088000
  }];


  // 格式2: data 结构（部分 Epik 接口用 msg/data/code）
  if (body.data && typeof body.data === "object") {
    Object.assign(body.data, SNOW_VIP);
  }
  if (body.code === undefined) body.code = 200;
  if (body.msg === undefined) body.msg = "";


  delLen(resHeaders);
  env.log(`[SNOW/Epik] 注入 ${productId}，补齐 isPremium/isVip/vipType 等`);
  return body;
}


(function main(){
  try{
    const type = new Detector($request).type();
    env.log("Matched:", type, $request?.url, "v=" + SETTINGS.VERSION);
    const resHeaders = $response?.headers || {};


    if(type==="adapty"){
      if(/products-ids\/app_store|products\/app_store(?:\/|$|\?)|paywall\/variations\//.test($request?.url||"")){
        const catalog = cacheAdaptyCatalogResponse($response.body, $request);
        delAdaptyHeaders(resHeaders);
        resHeaders["Content-Type"] = "application/json";
        return $done({ body: JSON.stringify(catalog), headers: resHeaders });
      }
      const out = injectAdapty($response.body, $request, resHeaders);
      delAdaptyHeaders(resHeaders);
      resHeaders["Content-Type"] = "application/json";
      env.log("[Adapty] 注入完成", (out?.data?.attributes?.paid_access_levels?.premium?.is_active), out?.data?.attributes?.paid_access_levels?.premium?.vendor_product_id);
      return $done({ body: JSON.stringify(out), headers: resHeaders });
    }


    let out;
    if(type==="apphud") out = injectApphud($response.body, $request, resHeaders);
    else if(type==="snow") out = injectSnow($response.body, $request, resHeaders);
    else { env.log("Unknown service, passthrough."); return $done({ body: $response.body }); }


    delAdaptyHeaders(resHeaders);
    resHeaders["Content-Type"] = "application/json";
    $done({ body: JSON.stringify(out), headers: resHeaders });
  }catch(e){
    env.log("[FATAL]", (e && e.message) || String(e));
    env.notifyError(e,"主流程");
    $done({ body: $response.body });
  }
})();

