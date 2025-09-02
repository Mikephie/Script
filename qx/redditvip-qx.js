/*
 * Reddit Premium 解锁&去广告全兼容脚本
 * 作者：Mikephie
 
[rewrite_local]
#^https?:\/\/gql(-fed)?\.reddit\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip-qx.js
^https?:\/\/gql-fed\.reddit\.com\/$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip-qx.js

[MITM]
hostname = gql.reddit.com, gql-fed.reddit.com

 */

// 统一入口：根据 $request / $response 判断执行分支
(function main() {
  try {
    if (typeof $request !== 'undefined' && $request) {
      // === 请求阶段（首屏兼容：不再拦截 Ads；仅透传） ===
      // 你也可以在此做 header 微调/统计，但为避免空白首屏，这里不改动
      $done({});
      return;
    }

    if (typeof $response !== 'undefined' && $response) {
      // === 响应阶段：清洗 + 兜底 ===
      handleResponse();
      return;
    }

    // 既不是请求也不是响应（极少数环境），直接结束
    $done({});
  } catch (e) {
    console.log('[reddit_cleaner][fatal]', e && (e.stack || e));
    // 出错也尽量不阻断
    if (typeof $response !== 'undefined' && $response && typeof $response.body === 'string') {
      $done({ body: $response.body });
    } else {
      $done({});
    }
  }
})();

/** ========== 工具集 ========== **/
const S = {
  safeParse(txt) {
    try { return JSON.parse(txt); } catch { return null; }
  },
  safeStringify(obj) {
    try { return JSON.stringify(obj); } catch { return ''; }
  },

  // ---- 明确广告（保守）----仅剔除 100% 确认是广告的节点
  isAdNodeStrict(node) {
    if (!node || typeof node !== 'object') return false;
    const t = String(node.__typename || '');
    if (/^Ad[A-Z0-9_]*$/i.test(t)) return true; // Ad / AdPost / AdSomething...
    if (node.adPayload) return true;
    return false;
  },

  // ---- 广谱广告（激进）----尽可能多识别广告
  isAdNodeWide(node) {
    if (!node || typeof node !== 'object') return false;
    const t = String(node.__typename || '');
    if (/Ad/i.test(t)) return true;
    if (node.adPayload) return true;
    if (Array.isArray(node.cells) && node.cells.some(c => /Ad/i.test(String(c?.__typename || '')))) return true;
    return false;
  },

  // 深度修正字段 + 过滤广告 edges（带兜底）
  deepFix(x) {
    if (Array.isArray(x)) {
      const arrBefore = x.map(S.deepFix);
      const looksLikeEdges =
        arrBefore.length &&
        (arrBefore[0]?.node !== undefined || typeof arrBefore[0] === 'object');

      if (!looksLikeEdges) return arrBefore;

      // 1) 广谱过滤
      let filtered = arrBefore.filter(item => {
        const n = item?.node ?? item;
        return !S.isAdNodeWide(n);
      });

      // 2) 兜底①：若被清空但原先有内容 → 退回严格过滤
      if (filtered.length === 0 && arrBefore.length > 0) {
        filtered = arrBefore.filter(item => {
          const n = item?.node ?? item;
          return !S.isAdNodeStrict(n);
        });

        // 3) 兜底②：仍为空 → 全量保留，避免首屏空白
        if (filtered.length === 0) filtered = arrBefore;
      }

      return filtered;
    }

    if (x && typeof x === 'object') {
      for (const k of Object.keys(x)) {
        const v = x[k];

        // ---- 字段修正（与原混淆脚本等效）----
        if (k === 'isObfuscated') x[k] = false;
        else if (k === 'obfuscatedPath') x[k] = null;

        else if (k === 'isNsfw') x[k] = false;
        else if (k === 'isNsfwMediaBlocked') x[k] = false;
        else if (k === 'isNsfwContentShown') x[k] = false;

        else if (k === 'isAdPersonalizationAllowed') x[k] = false;
        else if (k === 'isThirdPartyInfoAdPersonalizationAllowed') x[k] = false;

        else if (k === 'isPremiumMember') x[k] = true;
        else if (k === 'isEmployee') x[k] = true;

        x[k] = S.deepFix(v);
      }
      return x;
    }

    return x;
  }
};

/** ========== 响应处理 ========== **/
function handleResponse() {
  let raw = $response.body || '';

  // 文本层预清洗（与原脚本的多段 .replace 等效，先粗修布尔/路径）
  try {
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
  } catch (_) {}

  const obj = S.safeParse(raw);
  if (!obj) {
    // JSON 解析失败，原样回传以防断流
    $done({ body: raw });
    return;
  }

  const fixed = S.deepFix(obj);
  const out = S.safeStringify(fixed) || raw;
  $done({ body: out });
}