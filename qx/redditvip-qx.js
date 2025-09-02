/*
 * Reddit Premium 解锁&去广告全兼容脚本
 * 作者：Mikephie
 
[rewrite_local]
#^https?:\/\/gql(-fed)?\.reddit\.com url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip-qx.js
^https?:\/\/gql(-fed)?\.reddit\.com\/.+ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/redditvip-qx.js

[MITM]
hostname = gql.reddit.com, gql-fed.reddit.com

 */

// == Reddit GQL Cleaner (Readable) ==
// 2025-09-02T11:47:12+08:00

/** 小工具 **/
const S = {
  safeParse(txt) {
    try { return JSON.parse(txt); } catch { return null; }
  },
  safeStringify(obj) {
    try { return JSON.stringify(obj); } catch { return ''; }
  },
  // 广谱判断 "是否广告节点"
  isAdNode(node) {
    if (!node || typeof node !== 'object') return false;
    const t = String(node.__typename || '');
    if (/Ad/i.test(t)) return true;
    if (node.adPayload) return true;
    if (Array.isArray(node.cells) && node.cells.some(c => /Ad/i.test(String(c?.__typename || '')))) return true;
    return false;
  },
  // 深度遍历并修改字段 + 过滤广告 edges
  deepFix(x) {
    if (Array.isArray(x)) {
      // 若是 edges-like 数组，尝试过滤广告
      const looksLikeEdges = x.length && (x[0]?.node || x[0]?.__typename || typeof x[0] === 'object');
      let arr = x.map(S.deepFix);
      if (looksLikeEdges) {
        // 常见结构：[{node: {...}}, ...] 或直接 [{...}] 都尝试识别
        arr = arr.filter(item => {
          const n = item?.node ?? item;
          return !S.isAdNode(n);
        });
      }
      return arr;
    }
    if (x && typeof x === 'object') {
      for (const k of Object.keys(x)) {
        const v = x[k];

        // 字段修正（与原脚本的多处 replace 等效）
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

/** 处理请求阶段：拦截 Ads 查询 **/
(function handleRequestPhase() {
  if (typeof $request === 'undefined' || !$request) return;
  let opName = '';
  // GraphQL 一般在 body 里有 operationName
  if ($request.body) {
    const j = S.safeParse($request.body);
    if (j && typeof j === 'object') {
      opName = String(j.operationName || '');
    }
  }
  if (/Ads/i.test(opName)) {
    // 直接空回，阻断广告请求
    $done({ body: '{}' });
    return;
  }
})();

/** 处理响应阶段：净化数据 **/
(function handleResponsePhase() {
  if (typeof $response === 'undefined' || !$response) return;

  let raw = $response.body || '';
  // 与原脚本的字符串层替换等效：先直接把常见布尔/路径修正掉，提高容错
  // （注意：这里都是 JSON 文本替换，后续仍会用对象级修正兜底）
  try {
    raw = raw
      .replace(/"isObfuscated":\s*true/g, '"isObfuscated":false')
      .replace(/"obfuscatedPath":"[^"]*"/g, '"obfuscatedPath":null')
      .replace(/"isNsfw":\s*true/g, '"isNsfw":false')
      .replace(/"isAdPersonalizationAllowed":\s*true/g, '"isAdPersonalizationAllowed":false')
      .replace(/"isThirdPartyInfoAdPersonalizationAllowed":\s*true/g, '"isThirdPartyInfoAdPersonalizationAllowed":false')
      .replace(/"isNsfwMediaBlocked":\s*true/g, '"isNsfwMediaBlocked":false')
      .replace(/"isNsfwContentShown":\s*true/g, '"isNsfwContentShown":false')
      .replace(/"isPremiumMember":\s*false/g, '"isPremiumMember":true')
      .replace(/"isEmployee":\s*false/g, '"isEmployee":true');
  } catch (_) {}

  const obj = S.safeParse(raw);
  if (!obj) {
    // 解析失败则原样返回，避免断流
    $done({ body: raw });
    return;
  }

  // 深度修正 + 广告过滤
  const fixed = S.deepFix(obj);
  const out = S.safeStringify(fixed) || raw;
  $done({ body: out });
})();
