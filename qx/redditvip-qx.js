/*
 * Reddit Premium 解锁&去广告全兼容脚本
 * 作者：Mikephie
 
[rewrite_local]
#^https?:\/\/gql(-fed)?\.reddit\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip-qx.js
^https?:\/\/gql-fed\.reddit\.com\/$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip-qx.js

[MITM]
hostname = gql.reddit.com, gql-fed.reddit.com

 */

// == Reddit Cleaner (Full, Stable) ==
// 2025-09-02T12:18:00+08:00  Asia/Singapore
// 说明：仅做"响应清洗"，不再拦"请求"，防止首屏空白；扩展识别 gateway 接口；三级兜底。
// 标记保留：
;var encode_version = 'jsjiami.com.v7';
const VERSION = '1.2.0-20250902';

// ---- 可选：从 argument 里读开关（Surge/QX/Loon 均支持 $argument）----
const ARG = (typeof $argument === 'string' && $argument) ? Object.fromEntries(
  $argument.split('&').map(kv => kv.split('=').map(decodeURIComponent))
) : {};
const DEBUG = ARG.debug === '1';
const MODE  = (ARG.mode || 'auto'); // auto / wide / strict

(function main() {
  try {
    if (typeof $response !== 'undefined' && $response) {
      return handleResponse();
    }
    // 请求阶段：不做任何拦截，防止首屏空白
    $done({});
  } catch (e) {
    log('fatal', e);
    if (typeof $response !== 'undefined' && $response?.body) return $done({ body: $response.body });
    $done({});
  }
})();

/*** 工具 ***/
function log(...a){ if (DEBUG) console.log('[reddit-cleaner]', ...a); }
const S = {
  parse(s){ try{ return JSON.parse(s) }catch{ return null } },
  str(o){ try{ return JSON.stringify(o) }catch{ return '' } },

  // ---- 广告判定（更全）----
  isAdStrict(obj){
    if (!obj || typeof obj !== 'object') return false;
    const t = String(obj.__typename || '');
    if (/^Ad([A-Z0-9_]+)?$/i.test(t)) return true;
    if (obj.adPayload) return true;
    // REST 风格常见标志
    if (obj.isSponsored === true) return true;
    if (obj.promoted === true) return true;
    if (obj.ad_metadata || obj.adServing || obj.promo || obj.promotedBy) return true;
    return false;
  },
  isAdWide(obj){
    if (!obj || typeof obj !== 'object') return false;
    const t = String(obj.__typename || '');
    if (/Ad/i.test(t)) return true;
    if (obj.adPayload) return true;
    if (Array.isArray(obj.cells) && obj.cells.some(c => /Ad/i.test(String(c?.__typename || '')))) return true;
    // 其他宽判定
    if (obj.isSponsored || obj.promoted) return true;
    if (obj.ad_metadata || obj.adServing || obj.promo || obj.promotedBy) return true;
    return false;
  },

  // ---- 字段修正 ----（与旧版等效）
  fixFields(k, obj){
    switch (k){
      case 'isObfuscated': obj[k] = false; break;
      case 'obfuscatedPath': obj[k] = null; break;

      case 'isNsfw':
      case 'isNsfwMediaBlocked':
      case 'isNsfwContentShown':
        obj[k] = false; break;

      case 'isAdPersonalizationAllowed':
      case 'isThirdPartyInfoAdPersonalizationAllowed':
        obj[k] = false; break;

      case 'isPremiumMember':
      case 'isEmployee':
        obj[k] = true; break;
    }
  },

  // ---- 深度修正 + 过滤（带兜底）----
  deepFix(x){
    if (Array.isArray(x)){
      const a0 = x.map(S.deepFix);

      // 是否像 edges / items 列表
      const looksLikeList = a0.length && (a0[0]?.node !== undefined || typeof a0[0] === 'object');

      if (!looksLikeList) return a0;

      const strict = it => !S.isAdStrict(it?.node ?? it);
      const wide   = it => !S.isAdWide(it?.node ?? it);

      let filtered;
      if (MODE === 'strict') {
        filtered = a0.filter(strict);
      } else if (MODE === 'wide') {
        filtered = a0.filter(wide);
        if (filtered.length === 0 && a0.length > 0) filtered = a0.filter(strict);
        if (filtered.length === 0) filtered = a0; // 兜底保留
      } else { // auto：先宽后严再保留
        filtered = a0.filter(wide);
        if (filtered.length === 0 && a0.length > 0) filtered = a0.filter(strict);
        if (filtered.length === 0) filtered = a0;
      }
      return filtered;
    }

    if (x && typeof x === 'object'){
      for (const k of Object.keys(x)){
        S.fixFields(k, x);
        x[k] = S.deepFix(x[k]);
      }
      return x;
    }
    return x;
  }
};

/*** 响应处理 ***/
function handleResponse(){
  let raw = $response.body || '';

  // 文本层粗修（与旧混淆脚本多段 replace 等效）
  try{
    raw = raw
      .replace(/"isObfuscated":\s*true/g, '"isObfuscated":false')
      .replace(/"obfuscatedPath":"[^"]*"/g, '"obfuscatedPath":null')
      .replace(/"isNsfw":\s*true/g, '"isNsfw":false')
      .replace(/"isNsfwMediaBlocked":\s*true/g, '"isNsfwMediaBlocked":false')
      .replace(/"isNsfwContentShown":\s*true/g, '"isNsfwContentShown":false')
      .replace(/"isAdPersonalizationAllowed":\s*true/g, '"isAdPersonalizationAllowed":false')
      .replace(/"isThirdPartyInfoAdPersonalizationAllowed":\s*true/g, '"isThirdPartyInfoAdPersonalizationAllowed":false')
      .replace(/"isPremiumMember":\s*false/g, '"isPremiumMember":true')
      .replace(/"isEmployee":\s*false/g, '"isEmployee":true');
  }catch(_){}

  const obj = S.parse(raw);
  if (!obj){
    // 不是 JSON（或解析失败）→ 原样回传，避免断流
    log('non-json or parse fail; passthrough');
    return $done({ body: raw });
  }

  const fixed = S.deepFix(obj);
  const out = S.str(fixed) || raw;
  $done({ body: out });
}

// 兼容检测/清理器标识
var version_ = 'jsjiami.com.v7';