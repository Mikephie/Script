#Surge #模块 #Reddit 过滤推广, 关 NSFW 提示(非暴力替换版)

🤔 目前 🎈Loon 纯 TUN 模式使用该脚本会导致各种加载缓慢/失败 请先关闭纯 TUN 模式

小脚本小模块就不放 GitHub 了

① reddit.sgmodule
#!name=Reddit
#!desc=过滤推广, 关 NSFW 提示 @xream

[General]

force-http-engine-hosts = %APPEND% gql.reddit.com, gql-fed.reddit.com

[Script]
Reddit = type=http-response,pattern=^https?:\/\/gql(-fed)?\.reddit\.com,requires-body=1,max-size=0,timeout=30,script-path=reddit.js
[MITM]
hostname = %APPEND%, gql.reddit.com, gql-fed.reddit.com
② reddit.js

let body;
try {
  body = JSON.parse($response.body.replace(/"isNsfw":true/g, '"isNsfw":false'))
  if (body.data?.children?.commentsPageAds) {
    body.data.children.commentsPageAds = []
  } 
  for (const [k, v] of Object.entries(body.data)) {
    if (v?.elements?.edges) {
      body.data[k].elements.edges = v.elements.edges.filter(
        i =>
          !['AdPost'].includes(i?.node?.__typename) &&
          !i?.node?.cells?.some(j => j?.__typename === 'AdMetadataCell') &&
          !i?.node?.adPayload
      );
    }
  }

  
} catch (e) {
  console.log(e);
} finally {
  $done(body ? { body: JSON.stringify(body) } : {});
}

相关: 如何使用 Gist 创建私有脚本/模块

另一个版本: 暴力替换版(有点 bug)