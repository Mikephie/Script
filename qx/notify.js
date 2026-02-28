// 🔔 云端远程通知 (60min版 - 增加强制结束)
(function(){try{
    // 环境检查
    if(typeof $response==="undefined"||!$response||$response.status<200||$response.status>=300) return $done({});
    
    const N=(typeof globalThis!=="undefined"&&typeof globalThis.SCRIPT_NAME==="string"&&globalThis.SCRIPT_NAME.trim())||"Script",
          M=(typeof globalThis!=="undefined"&&typeof globalThis.SCRIPT_MSG==="string"&&globalThis.SCRIPT_MSG.trim())||"🍬 永久授权 | 2088-08-08",
          C=60, 
          K="n_"+N.replace(/[^\w]/g,"_").slice(0,40),
          R=k=>{try{return typeof $prefs!=="undefined"?$prefs.valueForKey(k):$persistentStore.read(k)}catch(e){return null}},
          l=parseInt(R(K)||"0",10);
    
    // 60分钟节流检查
    if(Date.now()-l<C*6e4) return $done({});
    
    // 弹窗
    const S=`✨ 激活成功 [${C}m]`;
    if(typeof $notify==="function")$notify(N,S,M);
    else if(typeof $notification!=="undefined"&&$notification.post)$notification.post(N,S,M);
    
    // 记录时间
    try{typeof $prefs!=="undefined"?$prefs.setValueForKey(String(Date.now()),K):$persistentStore.write(String(Date.now()),K)}catch(e){}
}catch(e){} finally { $done({}); }})(); // ⚠️ 必须执行 $done，脚本才能成功提交并弹出通知
