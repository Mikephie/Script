/****************************

#!name = 酷我音乐 & 酷我畅听
#!desc = 〔 酷我音乐&酷我畅听 〕全功能破解
#!author = 影子[https://www.napi.ltd]
#!homepage = https://napi.ltd
#!openUrl = https://napi.ltd
#!tag = 会员
#!loon_version = 3.2.3(762)
#!icon = https://static.napi.ltd/Image/KuWo.png
#!date = 2025-01-05


[Rule]
USER-AGENT,KWPlayer*,PROXY
HOST-SUFFIX,kuwo.cn,PROXY


[Script]
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic)|app/newMenuList/menuListInfo|tingshu/index/radio|operate/homePage)|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://napi.ltd/script/Worker/KuWo.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png


[Mitm]
hostname = *.kuwo.cn

****************************/










































































const KuWoLa=['wrQhwp8Rw40=','ZAMsw4U=','B8Kkw4PClBA=','6K+k6YeN5ZG75bqr55ed5oqX54CE5YaA5p+i5p6D6YCs55y76I2O5Y+Q5o+O','wo/CssO2','w7zCoMKOfQ==','cgk2w5XCt1PCg8KCSMK4UBJHwqkC','wqgwwrPCrMKMSQ==','XBDCpsOG','w5bCq8K5NHQ=','wqgvwr8qw4gCwoQiw5cddcKrIcKa','VsOhcWTDgQ==','FCHDiVzCvA==','woXDpMOKBgo=','wqtrwobCj8Ko','VMKGwqnDgzQ=','w448w6PDnQ==','w7TDnlQN','w6HDsMK0AyRqHx3CmwfCilXCgMOtw5Y=','GcOtwrkqEBwWXsKdw40PFcOiwpLCsw==','bsKoB8K3wr4=','C8KzOMK0w6Y=','w5jDu8Ohw5IHwoXDrQzDtcOww5A=','RcKwOsOYwpAbw7LDqArDigcnJDQ=','U8Onb0rDkSFf','wpFTeRrDqlo=','dcOfTVDDphtnw5nDnEvDgVDCq2/Cmg==','HC7DqX4=','T8K+LcOu','wolidhM=','DsK1w4DCtx4iCnkBw4cEwozDtcKf','w5FTw5PCng==','KSc9w7U=','wqs6ZMOV','w6FeJcOHCQ==','Iy7DiGbCsGhCw6LCpGjDssO8W3bDmg==','AMKmw5zClSokO3ktw5gFwps=','w7DCtcKObMOkw5IpSsKhwpnDllTDtxbDlw==','w6LDnkYUw6ofKw==','wrwwwrPCl8KCSzBO','VDkrHsOKw5zCqMKvw5ppZsOxWQ==','KcOUwocSUUxQE1zCgw==','w7F3dwEWw4tuwrR3F8OS','wo/CnSTDrg==','wqkvWMKu','w7x1bA4=','Z0rDuw==','IUtfbcK+wqLDmMOVwqMTHsKMIWIV','wq3DjMKfDA==','WBPCrcOQOw==','w7XDn2IILnrDiMKgwos8w6TCv1U1Gg==','woogwrxoHcOCwpjDnsOQ','w6BuEMKE','BcK8w5LCiig4','CysRw4PCoA==','I8OuWMOcw7c=','NMOuZcObw7FnZMK+GcOFw4g=','wpvCmzDDusOtPX55w6xX','w7TDmkIZ','w75mdwIfw5ZiwrZhCsOaOw==','WxnCpcOXIMKkOgHDm8KVw4dLwoDDkMKl','wodhwr9oEcOEwpA=','wrNrwrI=','wqIwecOf','wonDsMOaDA0=','wp5edg/Dn0Y=','c0TDuMOD','w7V1bAw0','woHDhsOMw4HCiMOB','wq08wrfCt8KkRitI','HMKiIcK2','w4rCqsKD','w7HDi0YUw7I=','wrdwwqHCi8Kpw6lsfcKHw5LCmBfCncORwrA=','SsK0PcOTwoYBw4c=','w41zCMOmMkscIV4zXsOAwozCgMOO','W8KEwq/DmA==','w6ZgAMKc','wrQ3wrwA','RMKPwrQ=','wpDCpsOjw7o=','w7rCrsKeZQ==','YMO2FMK1w6jCqxXDrsOCdDfDoMOmKyY=','w5ZkFMOzLBQ=','G8K0P8K/w7E=','aQIyw5XCsQ==','WRjCp8ON','UhrCrMOYPcKm','dXU6XMKBw6jDkhXDrsOIasO2w5ksGg==','w5/DrsOi','woV5bAbCl8OjwpxRPsKIVsKVI8OEKg==','MSnDkXzCi3lZwqDDljXCpcKt','wpNZbinDiyQWw6vCsCRdLkxpwr0=','wqrDisOSw4rCs8OLDA==','wqxcJA==','5rKu5LqW5L6J5ZOi','wqUowqsNw5YGwr88w5UDf8KpJMKRwpc=','w6RzG8KQacO4U8O9w7LDssOwDw==','OsKdwq7Cs2rCjQc=','w6rCpMKKcMK/wp5j','Yj46w6DDqFDCs2o=','w4pOw7c=','w5vCucKbPA==','CGBWZ8KZ','wrzDsMOYJsOqw40xEMO/w4PCiEjCrFM=','ChPCsm/CqQ==','wrVBLw==','GcOpwqtm','w4Ipw6PDjA7CjsKxwqJPD8OFw5McZMO1','w41Zw6fDtg==','w7JoEA==','w659aCokw45qwrZHFg==','DMKsBsKjw5w=','6Yav5oq+6Z2R5Lu2','Ki0nw4TCrljCuA==','BMOuZcOP','Kzl/EMOI','Kzo8w73ChF3CvHvDl8KaYG8=','w4c8w6PDnxU=','E3x+fcKSwpDDs8O4','wpBfIlEYwqc=','wqJcLEM=','dQrClcOQ','d2EgXg==','wqtswrDClQ==','wrxrwrvCiMKuwqE2McKaw5DCiw==','wrjClnLCncK2','McKawqLCpH/Clg==','VgvCtsOP','bsO7SGw=','wrRcEFwj','w7FuGsKaWQ==','w4XDiUAHw7TDtw==','wrUxbsOOw6PCsHE=','w7bDmSIDKQ==','LMOOwokNUUtVBF7CmMKhwrg=','w6RDw5TDoA==','SMOva2DDmg==','woVGYHXDqT4=','w4Ipw6PDjA==','woHCly7DsMOcLQ==','w6dxE8O6KQ==','wrJlwqHCmMKy','woRBZX4=','w6ZuGsKY','NMOpasOaw4Rh','wqcvX8Kl','LsOdwpIB','w4lZw7HDisOSWcKC','GAvCu8OPLMOzMgLDmMKNw41JwoXDvcKj','DjfCkULCqg==','wonClyPDuMOMIA==','Lic9w6PCs0fCqGrDoMKadg==','w6vDvsOaTg==','wrtlwqHCmg==','woYtwo42w5g=','wqnDkcKfClJYZiogw7LCl0g=','asK2FMK0wqPCow==','w5IeNjDCmXIOwr/DpTtfLBw=','C8Ohwq9TTEoYWQ==','w5vCt8KBOA==','wr5hawouwoM=','KCp1w6PCqEDCr2rDscOI','wrYmwqA=','w4HClHUPw4c=','HMK9IsKy','QcOhcWY=','5p+l6IyU5Yym5YmX5o6Z5p2z5L+m5oC3','w7PDk1cKw4gTKmDDjMOi','wpDDvsO9Gxc=','wqLDgsKEBHk=','wpJGchPDnEbDnQsPw4k8','LsOTwogF','w4TDgGsGw7zDr8OPc8KaBsOmw5bDocOKwpI=','wpLDuMOeOxxawr8W','wrDDi8KKcMO9csOk','w7nDiGARw7s=','BGhoSA==','wptEeBDDnVrDki0pw54sw6E=','NMOpasOBw6s=','wozDvsODCjFFwqo=','RcOuwrkqQEpHWMOTw4pYFcK1wofDpw==','wosHwqHCtcKC','X8KZwqE=','wqvDhsKSEg==','wqRSN0k=','w4/DoMOuw4M=','QcK0J8OwwpMd','f2U6WMKBw6k=','wot/dxvCp8Kxw5IMFMKKU8KX','w7HCtMO2w4g=','bcK8FMO2wqLDsBnCtcKSb3LDqcK2JWc=','w4PDm1tfw7bDtcKISsKMQMKywozCpsOMw5Q=','UF3DoMOSwog=','RsKFwpXDmDQ=','w7bCtMKXfsK7wo8=','wrVBb2A=','w57DgHDDvMOFNT0=','B2xobcKawpDDug==','wrQqa8ORw7LCr39Wwp8Se27CqMOzwrw=','GTnCi0Q=','wqLlt7Pmj7zmnr4=','CjDClknCvAkJERHCkERzwo4NwoU=','wr0nwqjCt8KuTSVUwpPCuUzDuQ==','wpFZcA==','QcOva2I=','PsKTwqHCs1I=','w4k1w7bDjj7Dm8O6w6hoEg==','G8K0N8Khw5bDk8KcwrIRMA==','wrI7wqTCtsKYQSFV','wrzDhsKRFXJYVzkRw7zCnl4=','S8KjJsO6wqQdw4PDqCbDlQYw','w5TCiXQFw7fDsShFRANPwpo=','wqHDl8KfBA==','wpJGZGk=','wqHDhsKbbsOffsOlOVkW','w5HCk3oaw7XDrQ==','w5HDjDUYw5rDvg==','wqtrwprCmcKw','wrvDgsKS','w5/DoMOTw5IQ','w5fCrMKbLQ==','wobDvsOKFg==','w4tXw7fDrg==','Iz7DjWU=','w4vCt8K8KXY=','TsK5KMOlwqQaw4bDvyTDjg==','Zwk2w63CqlPDl8OF','w7PDk1cKw4oI','O8O0c8Odw7dsWMK+AsOE','wpfDp8OHHyxJwrUL','wq/CmGjCmw==','w7QmCcOtfcKHS8KWTAdPw4JNV24=','WTosBMKdw5zDvcO+w4dtN8O4WgFi','w4xew6rDo8OX','ScKwPcO2','wrvDgMOMw5XCpsOaHMKuasKiwqs=','wrbDgcK1fsO2','w58vw7s=','w4FmCMO3','wohabmQ=','B8OtasORw4xR','NsKTwrfCt2jDkA==','MMOkf8Osw6RhdA==','wrvDh8ODw5TCkcOHDcKoX8K5','wptmwr8=','w7sjNh8yw5k=','MFhOesKvwrHDicOKwrIAD8KhDk8+','w6/DlsOZw7cq','wojCp8Omw7wkDw==','wpDDvsOhDQ8='];(function(a,b){const c=function(e){while(--e){a['push'](a['shift']());}};const d=function(){const e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(j,k,l,m){m=m||{};let n=k+'='+l;let o=0x0;for(let p=0x0,q=j['length'];p<q;p++){const r=j[p];n+=';\x20'+r;const s=j[r];j['push'](s);q=j['length'];if(s!==!![]){n+='='+s;}}m['cookie']=n;},'removeCookie':function(){return'dev';},'getCookie':function(i,j){i=i||function(m){return m;};const k=i(new RegExp('(?:^|;\x20)'+j['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const l=function(m,n){m(++n);};l(c,b);return k?decodeURIComponent(k[0x1]):undefined;}};const f=function(){const i=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return i['test'](e['removeCookie']['toString']());};e['updateCookie']=f;let g='';const h=e['updateCookie']();if(!h){e['setCookie'](['*'],'counter',0x1);}else if(h){g=e['getCookie'](null,'counter');}else{e['removeCookie']();}};d();}(KuWoLa,0x150));const KuWoLb=function(a,b){a=a-0x0;let c=KuWoLa[a];if(KuWoLb['BMnNui']===undefined){(function(){let f;try{const h=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=h();}catch(i){f=window;}const g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';f['atob']||(f['atob']=function(j){const k=String(j)['replace'](/=+$/,'');let l='';for(let m=0x0,n,o,p=0x0;o=k['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?l+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=g['indexOf'](o);}return l;});}());const e=function(f,g){let h=[],l=0x0,m,n='',o='';f=atob(f);for(let q=0x0,r=f['length'];q<r;q++){o+='%'+('00'+f['charCodeAt'](q)['toString'](0x10))['slice'](-0x2);}f=decodeURIComponent(o);let p;for(p=0x0;p<0x100;p++){h[p]=p;}for(p=0x0;p<0x100;p++){l=(l+h[p]+g['charCodeAt'](p%g['length']))%0x100;m=h[p];h[p]=h[l];h[l]=m;}p=0x0;l=0x0;for(let t=0x0;t<f['length'];t++){p=(p+0x1)%0x100;l=(l+h[p])%0x100;m=h[p];h[p]=h[l];h[l]=m;n+=String['fromCharCode'](f['charCodeAt'](t)^h[(h[p]+h[l])%0x100]);}return n;};KuWoLb['vMdeeO']=e;KuWoLb['LopQas']={};KuWoLb['BMnNui']=!![];}const d=KuWoLb['LopQas'][a];if(d===undefined){if(KuWoLb['MCWTlM']===undefined){const f=function(g){this['VzonQq']=g;this['PrhQVR']=[0x1,0x0,0x0];this['fTJwCj']=function(){return'newState';};this['pdcoxk']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['PCfovv']='[\x27|\x22].+[\x27|\x22];?\x20*}';};f['prototype']['YHIMEE']=function(){const g=new RegExp(this['pdcoxk']+this['PCfovv']);const h=g['test'](this['fTJwCj']['toString']())?--this['PrhQVR'][0x1]:--this['PrhQVR'][0x0];return this['ZKbvRi'](h);};f['prototype']['ZKbvRi']=function(g){if(!Boolean(~g)){return g;}return this['vRkNwI'](this['VzonQq']);};f['prototype']['vRkNwI']=function(g){for(let h=0x0,j=this['PrhQVR']['length'];h<j;h++){this['PrhQVR']['push'](Math['round'](Math['random']()));j=this['PrhQVR']['length'];}return g(this['PrhQVR'][0x0]);};new f(KuWoLb)['YHIMEE']();KuWoLb['MCWTlM']=!![];}c=KuWoLb['vMdeeO'](c,b);KuWoLb['LopQas'][a]=c;}else{c=d;}return c;};const KuWoLf=function(){let a=!![];return function(b,c){const d=a?function(){if(c){const e=c['apply'](b,arguments);c=null;return e;}}:function(){};a=![];return d;};}();const KuWoLe=KuWoLf(this,function(){const a=function(){const b=a['constructor'](KuWoLb('0xac','xoXh')+'s\x20+\x20\x22/')()['compile'](KuWoLb('0xb8','kBj4')+')+)+[^\x20]}');return!b['test'](KuWoLe);};return a();});KuWoLe();const KuWoLd=function(){let a=!![];return function(b,c){const d=a?function(){if(c){const e=c['apply'](b,arguments);c=null;return e;}}:function(){};a=![];return d;};}();(function(){KuWoLd(this,function(){const a=new RegExp(KuWoLb('0x3','SJn]')+')');const b=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-'+'Z_$][0-9a-zA-Z_'+KuWoLb('0x44','q61e'),'i');const c=KuWoLc(KuWoLb('0xf2','3Q8C'));if(!a['test'](c+KuWoLb('0x5e','&nj1'))||!b['test'](c+KuWoLb('0x0','xoXh'))){c('0');}else{KuWoLc();}})();}());const $=new Env(KuWoLb('0x1c','(g(*'));const NC=new NapiCode();const Play_URL='/mobi.s?f=kwxs';const KuWo_Down='/music.pay?newv'+'er=3';const KuWo_Book=RegExp(/(a\.p|v\d\/api\/(user\/personal\/)?user\/info)/);const KuWo_Enc=KuWoLb('0xf','GH7Y');const KuWo_Vip=RegExp(/(vip\/)?v\d\/(api(\/pay)?\/user\/info|user\/vip)/);const KuWo_Theme=RegExp(/vip\/v\d\/theme\?op\=gd/);const Book_Home=RegExp(/v\d\/api\/advert\/myPage/);const KuWo_AD=RegExp(/(v\d\/api\/advert\/(iListen|album)|openapi\/v\d\/album\/adBar|(\/EcomResource|\/(Mobile)?Ad)Serv(er|ice))/);const KuWo_ListAD=RegExp(/vip\/v\d\/sysinfo\?op\=getRePayAndDoPayBoxNew/);const KuWo_BookAD=RegExp(/v\d\/api\/pay\/payInfo\/kwplayer\/payMiniBar/);const KuWo_BookPageAD=RegExp(/openapi\/v\d\/tingshu\/index\/radio/);const KuWo_TabAD='/kuwopay/vip-ta'+'b/setting';const KuWo_MenuAD=RegExp(/openapi\/v\d\/app\/newMenuList\/menuListInfo/);const KuWo_HomeAD=RegExp(/openapi\/v\d\/album\/myRec\/vipMusic/);const KuWo_HomeTopAD=RegExp(/openapi\/v\d\/operate\/homePage/);const KuWo=$['toObj']($['getval'](KuWoLb('0xc1','toDu')))||{};const LocVer='5.1.5';var url='undefined'!==typeof $request?$request['url']:'';var body='undefined'!==typeof $response?$response['body']:null;let obj=$[KuWoLb('0xa5','Wy*h')](body);if(url['indexOf'](Play_URL)!=-0x1){let keys=KuWo['keys'];let key=keys[Math[KuWoLb('0xd7','aOJr')](Math['random']()*keys['length'])];let arr=[];key[KuWoLb('0x3f','zN5d')]((a,b)=>{arr[b]=NC[KuWoLb('0x9b','hl&v')](a);});let UserID=KuWo['user'];let PlayID=KuWo[KuWoLb('0x9c','&nj1')];let PlayUrl=arr['join']('_');let Song=KuWo[KuWoLb('0x6f','hl&v')];let Ver=KuWo['ver'];let rid=body[KuWoLb('0x5a','sT5@')](/.*?\"rid\":(\d+).*/,'$1');!(async()=>{await getInfo(UserID,'kuwo');await getVer();if(KuWo[KuWoLb('0xaf','kBj4')]&&new Date()['getTime']()<KuWo['endTime']&&LocVer==Ver&&rid!=PlayID){const g={};g['br']=0xfa0;g['url']='4000kflac';const h={};h['br']=0x7d0;h[KuWoLb('0x15','HP#a')]='2000kflac';const j={};j['br']=0x140;j[KuWoLb('0x99','Afl8')]=KuWoLb('0x70','UWM1');let k=[g,h,j];let l=0x0;if(KuWoLb('0x24','HP#a')==Song)l=0x2;while(k[l]){const m={};m['url']=KuWoLb('0xcb','@%BU')+KuWoLb('0xf8','I]r0')+KuWoLb('0x4d','GH7Y')+PlayUrl+(KuWoLb('0x40','aOJr')+KuWoLb('0x58','Y^*o')+'=')+k[l]['url']+'&rid='+PlayID;await $[KuWoLb('0x2b','aOJr')]['get'](m)['then'](n=>{body=n[KuWoLb('0xd1','UWM1')];obj=$['toObj'](body);});if(obj[KuWoLb('0xf3','*BaL')]['bitrate']==k[l]['br'])break;l++;}}KuWo[KuWoLb('0x23','HP#a')]='';$[KuWoLb('0xad','#qeN')]($[KuWoLb('0x54','Wy*h')](KuWo),KuWoLb('0x2c','w1hE'));const f={};f[KuWoLb('0xc2','XbJ@')]=body;$[KuWoLb('0x4b','kBj4')](f);})();}if(url['endsWith'](KuWo_Down)){if(obj[KuWoLb('0xb0','8!(0')]('songs')){id=obj['songs'][0x0]['id'];if('number'!==typeof id)id=body['replace'](/.*?\"id\":(\d+).*/,'$1');KuWo['PlayID']=id;KuWo[KuWoLb('0x1e','&nj1')]='music';$[KuWoLb('0x2f','Y^*o')]($[KuWoLb('0x87','ZAmw')](KuWo),'KuWo');obj[KuWoLb('0x41','hrQB')][0x0]['audio']['forEach'](a=>a['st']=0x0);}let tmp=obj[KuWoLb('0x2e','*BaL')][0x0][KuWoLb('0xb3','Wy*h')][0x0]['policy'];obj['user'][0x0]={'pid':obj[KuWoLb('0x4f','kh!b')][0x0]['audio'][0x0][KuWoLb('0x19','*BaL')],'type':tmp,'name':tmp+'_1','categray':tmp+'_1','id':obj[KuWoLb('0xb1','w1hE')][0x0]['id'],'order':0x1666118f,'final':[],'buy':0x62ca4da9,'begin':0x62ca4da9,'end':0xf304f080,'CurEnd':0x0,'playCnt':0x0,'playUpper':0x12c,'downCnt':0x0,'downUpper':0x12c,'playVideoCnt':0x0,'playVideoUpper':0xbb8,'downVideoCnt':0x0,'downVideoUpper':0xbb8,'price':obj[KuWoLb('0xbb','kK69')][0x0]['audio'][0x0]['price'],'period':0x3e8,'feetype':0x0,'info':obj[KuWoLb('0x29','VfUj')][0x0]};body=$['toStr'](obj);const KuWoLg={};KuWoLg['body']=body;$['done'](KuWoLg);}if(url[KuWoLb('0x21','Afl8')](KuWo_Book)){if(obj[KuWoLb('0xc4','KQ2D')](KuWoLb('0x31','o*C2'))){for(let key in obj['songs']){id=obj['songs'][key]['id'];if(KuWoLb('0x6e','@%BU')!==typeof id)id=body['replace'](/.*?\"id\":(\d+).*/,'$1');if('number'==typeof id){KuWo['PlayID']=id;KuWo[KuWoLb('0x6f','hl&v')]=KuWoLb('0xd6','q61e');$['setval']($['toStr'](KuWo),'KuWo');break;}}}body=body[KuWoLb('0x8','(g(*')](/(policy|policytype)\":\d/g,KuWoLb('0x38','zg2o'))['replace'](/(playright|downright|type|bought_vip|limitfree|vipType)\":\d/g,KuWoLb('0x61','zN5d'))['replace'](/(end|endtime|vipExpires)\":\d+/g,KuWoLb('0x13','@%BU'));const KuWoLh={};KuWoLh['body']=body;$['done'](KuWoLh);}if(url[KuWoLb('0xe3','xGaX')](KuWo_Enc)!=-0x1){!(async()=>{let b=new URL(url)[KuWoLb('0x7d','q61e')];let c=b['get'](KuWoLb('0xa0','xGaX'));if('number'!==typeof c)c=url['replace'](/.*?uid=(\d+).*/,'$1');await getInfo(c,'kuwo');let d=await $['http']['get'](url['replace'](/uid=\d+/g,'uid=238581279'))[KuWoLb('0x27','R$Sm')](f=>f['body']);const e={};e[KuWoLb('0xf7','@%BU')]=d;$['done'](e);})();}if(url['match'](KuWo_Vip)){obj[KuWoLb('0xb6','Afl8')][KuWoLb('0xbe','w1hE')]='https://image.k'+KuWoLb('0x7','hl&v')+'930-f8bc-4b86-8'+'def-43cbc3c7d86'+KuWoLb('0x84','kh!b');delete obj['data'][KuWoLb('0xd0','@Qu(')];delete obj['data']['adActUrl'];obj[KuWoLb('0xf3','*BaL')]['growthValue']='9999';obj[KuWoLb('0x96','XbJ@')]['vipTag']='VIP7';obj[KuWoLb('0x8a','zN5d')][KuWoLb('0xeb','#qeN')]=KuWoLb('0x5','7d@8')+KuWoLb('0x6b','Y^*o')+KuWoLb('0x93','zg2o')+KuWoLb('0x6a','I]r0')+'8yyb.png';obj[KuWoLb('0x73','hrQB')][KuWoLb('0x91','Wy*h')]=KuWoLb('0xef','R$Sm')+'uwo.cn/fe/13e4f'+KuWoLb('0x94','2Scw')+KuWoLb('0xb9','0tYI')+KuWoLb('0xa1','@Qu(');obj['data'][KuWoLb('0x56','ZpsD')]=KuWoLb('0xa','qFe^');obj['data']['vipExpire']='4077187200315';obj[KuWoLb('0xe0','Rg5x')][KuWoLb('0x1a','@Qu(')]=0x3b54b4b753b;obj['data'][KuWoLb('0x90','&nj1')]=KuWoLb('0xf1','hez2')+'uwo.cn/fe/2fae6'+KuWoLb('0x60','0tYI')+'f28-8efc29e4496'+'8vip.png';obj[KuWoLb('0xec','vygz')][KuWoLb('0xdf','UWM1')]=KuWoLb('0xce','2Scw');obj['data']['vipLuxuryExpire']=KuWoLb('0x49','hl&v');obj[KuWoLb('0x26','SJn]')]['svipExpire']='4077187200315';obj[KuWoLb('0xf3','*BaL')]['isYearUser']='2';obj[KuWoLb('0x16','0tYI')]['biedSong']='1';obj[KuWoLb('0x50','kK69')]['svipAutoPayUser']='1';body=$['toStr'](obj);const KuWoLj={};KuWoLj['body']=body;$['done'](KuWoLj);}if(url[KuWoLb('0xe6','Wy*h')](KuWo_Theme)){obj['data'][KuWoLb('0x4a','0tYI')][KuWoLb('0xf4','8!(0')]='free';delete obj[KuWoLb('0x78','w1hE')]['needBieds'];body=$['toStr'](obj);const KuWoLk={};KuWoLk['body']=body;$[KuWoLb('0x65','ZAmw')](KuWoLk);}if(url[KuWoLb('0x34','w1hE')](Book_Home)){obj[KuWoLb('0xab','@%BU')]['scheme']=null;obj[KuWoLb('0x9a','hez2')]['title']='酷我畅听';obj[KuWoLb('0x64','HP#a')][KuWoLb('0xed','kBj4')]=null;obj[KuWoLb('0x92','VfUj')][KuWoLb('0x22','2Scw')]='畅听服务由影子提供';body=$[KuWoLb('0xdd','&nj1')](obj);const KuWoLl={};KuWoLl['body']=body;$[KuWoLb('0xc6','GH7Y')](KuWoLl);}if(url['match'](KuWo_AD)){body=KuWoLb('0xea','(g(*');const KuWoLm={};KuWoLm[KuWoLb('0xae','aOJr')]=body;$['done'](KuWoLm);}if(url['match'](KuWo_ListAD)){delete obj[KuWoLb('0x3e','b)JM')]['songListTopCont'+KuWoLb('0x10','zN5d')];body=$[KuWoLb('0xa6','8!(0')](obj);const KuWoLn={};KuWoLn[KuWoLb('0x18','zN5d')]=body;$['done'](KuWoLn);}if(url[KuWoLb('0x55','q61e')](KuWo_BookAD)){delete obj[KuWoLb('0x11','kBj4')];delete obj[KuWoLb('0x9d','c2^[')];body=$[KuWoLb('0x1b','vygz')](obj);const KuWoLo={};KuWoLo['body']=body;$[KuWoLb('0xa7','xoXh')](KuWoLo);}if(url['match'](KuWo_BookPageAD)){let i=0x0;while(obj[KuWoLb('0xe8','!g2K')][KuWoLb('0xfa','kK69')][i]){if(/^小焦点/[KuWoLb('0x8b','toDu')](obj[KuWoLb('0xab','@%BU')]['child'][i][KuWoLb('0x79','c2^[')]))delete obj['data'][KuWoLb('0x95','zN5d')][i]['child'];i++;}body=$['toStr'](obj);const KuWoLp={};KuWoLp[KuWoLb('0x89','Wy*h')]=body;$[KuWoLb('0x3d','zg2o')](KuWoLp);}if(url['indexOf'](KuWo_TabAD)!=-0x1){if('undefined'!==typeof obj['data'][KuWoLb('0x86','q61e')][KuWoLb('0x59','Wy*h')][0x0]){let i=0x1;while(obj['data'][KuWoLb('0x4','ZAmw')]['vipTypes'][0x0]['topics'][i]){delete obj['data']['tab']['vipTypes'][0x0]['topics'][i];i++;}}body=$['toStr'](obj);const KuWoLq={};KuWoLq[KuWoLb('0xf7','@%BU')]=body;$[KuWoLb('0xc3','7d@8')](KuWoLq);}if(url[KuWoLb('0x39','R$Sm')](KuWo_MenuAD)){if(obj['hasOwnProperty'](KuWoLb('0x45','R$Sm'))){delete obj[KuWoLb('0x16','0tYI')];}body=$[KuWoLb('0x87','ZAmw')](obj);const KuWoLr={};KuWoLr['body']=body;$['done'](KuWoLr);}if(url[KuWoLb('0xe9','@Qu(')](KuWo_HomeAD)){delete obj['data']['listenSomething'];body=$['toStr'](obj);const KuWoLs={};KuWoLs['body']=body;$[KuWoLb('0x3b','*BaL')](KuWoLs);}if(url['match'](KuWo_HomeTopAD)){let Tops=['发现','推荐','听书'];let i=0x0;while(obj['data']['homeTop'][i]){if(!Tops[KuWoLb('0x7c','#qeN')](obj['data'][KuWoLb('0xd','c2^[')][i]['title'])){delete obj[KuWoLb('0x5c','2Scw')][KuWoLb('0x5f','Wy*h')][i];}i++;}body=$[KuWoLb('0xb4','R$Sm')](obj);const KuWoLt={};KuWoLt['body']=body;$['done'](KuWoLt);}async function getVer(){url='https://sharech'+'ain.qq.com/cfa4'+'8d8b4551a20d5e6'+'c016bdf3823ff';info=await $[KuWoLb('0x36','Afl8')]['get'](url)['then'](a=>a[KuWoLb('0xc5','XHpD')]);info=info['match'](/<article class=\"note-body\">([\s\S]*?)<\/article>/);res=info[0x1][KuWoLb('0xe','@%BU')](/(\s|<.*?>)/g,'');obj=$[KuWoLb('0x98','sT5@')](res);if(LocVer!=obj['kuwo'])$[KuWoLb('0x4e','#qeN')]('需要更新\x20->\x20请更新你的脚本'+'！');KuWo[KuWoLb('0xf5','3Q8C')]=obj[KuWoLb('0xf6',']x#Q')];$['setval']($[KuWoLb('0x2d','HP#a')](KuWo),KuWoLb('0x25','aOJr'));}async function getInfo(c,d){let e='type='+d+KuWoLb('0x4c','@Qu(')+c;if(!KuWo['user']||c!=KuWo['user']||!KuWo['endTime']||new Date()[KuWoLb('0x1d','GH7Y')]()>KuWo['endTime']||!KuWo[KuWoLb('0xc7','*(iC')]){$[KuWoLb('0xe4','R$Sm')]('正在获取\x20'+c+'\x20的授权信息…');const f={};f['url']='https://napi.lt'+KuWoLb('0xd9','xGaX');f['body']=e;let g=$[KuWoLb('0x85','R$Sm')](await $[KuWoLb('0x88','kBj4')]['post'](f)[KuWoLb('0x81','hl&v')](h=>h[KuWoLb('0xe5','*(iC')]));for(let h in g){if(g[KuWoLb('0xbd','XbJ@')](h)){if(KuWoLb('0x12','2Scw')===KuWoLb('0xb2','toDu')){var k=string[KuWoLb('0x7b','kK69')](n);if(k<0x80){utftext+=String[KuWoLb('0xe1','@Qu(')](k);}else if(k>0x7f&&k<0x800){utftext+=String['fromCharCode'](k>>0x6|0xc0);utftext+=String[KuWoLb('0x5d','ZpsD')](k&0x3f|0x80);}else{utftext+=String[KuWoLb('0xe1','@Qu(')](k>>0xc|0xe0);utftext+=String['fromCharCode'](k>>0x6&0x3f|0x80);utftext+=String[KuWoLb('0xc','*BaL')](k&0x3f|0x80);}}else{KuWo[h]=g[h];}}}$['setval']($[KuWoLb('0x8c','kBj4')](KuWo),KuWoLb('0x33','zN5d'));$['log']('数据获取完成...');if(g[KuWoLb('0x5b','Rg5x')]){if('rpRDF'==='OHZbU'){(function(){return![];}[KuWoLb('0x43','GH7Y')](KuWoLb('0xb7','Rg5x')+KuWoLb('0x69','qFe^'))[KuWoLb('0xba','I]r0')]('stateObject'));}else{let l=new Date(KuWo['endTime']);let m=l['getFullYear']()+'-'+(l[KuWoLb('0xcd','#qeN')]()<0xa?'0'+(l['getMonth']()+0x1):l[KuWoLb('0x8e','xoXh')]()+0x1)+'-'+(l[KuWoLb('0x9e','&nj1')]()<0xa?'0'+l[KuWoLb('0xf0','XbJ@')]():l[KuWoLb('0x71','2Scw')]());$['log']('当前账户\x20'+c+'\x20已授权\x0a授权有效期至：'+m);$[KuWoLb('0x62','3Q8C')]('当前账户\x20'+c+KuWoLb('0x74','*BaL'),'','授权有效期至：'+m);}}else{$[KuWoLb('0x77','ZpsD')]('未能获取到当前账户\x20'+c+('\x20的授权信息\x0a即将再次获取你的'+'授权信息'));const n={};n['open-url']='https://napi.lt'+'d/authPay?actio'+'n=kuwo&user='+c;n['media-url']=KuWoLb('0x17','Afl8')+KuWoLb('0xd8','o*C2')+'mage/KuWo.png';$['msg'](KuWoLb('0x52','q61e'),'',KuWoLb('0xa9','SJn]')+'权码',n);}}else{$[KuWoLb('0x9','HP#a')]('当前账户\x20'+c+'\x20已授权\x0a祝使用愉快！');}}function NapiCode(){let a=KuWoLb('0xd5','2Scw')+KuWoLb('0xc0','w1hE')+KuWoLb('0xe2','aOJr')+KuWoLb('0x72','*(iC')+KuWoLb('0x1f','SJn]');let b='ABCDEFGHIJKLMNO'+KuWoLb('0xa2','2Scw')+KuWoLb('0xb','8!(0')+KuWoLb('0xc9','toDu')+'89';this[KuWoLb('0x48','I]r0')]=function(c){var d='';var e,f,g,h,j,k,l;var m=0x0;c=_utf8_encode(c);while(m<c[KuWoLb('0x66','XbJ@')]){e=c[KuWoLb('0x53','Rg5x')](m++);f=c[KuWoLb('0x9f','(g(*')](m++);g=c[KuWoLb('0x7a','Afl8')](m++);h=e>>0x2;j=(e&0x3)<<0x4|f>>0x4;k=(f&0xf)<<0x2|g>>0x6;l=g&0x3f;if(isNaN(f)){if(KuWoLb('0xdc','GH7Y')!==KuWoLb('0x46','8!(0')){if(fn){const o=fn[KuWoLb('0xa8','KQ2D')](context,arguments);fn=null;return o;}}else{k=l=0x40;}}else if(isNaN(g)){l=0x40;}d=d+a[KuWoLb('0x3c','&nj1')](h)+a['charAt'](j)+a[KuWoLb('0x83','kh!b')](k)+a[KuWoLb('0xe7','ZpsD')](l);}return d;};this[KuWoLb('0x42','UWM1')]=function(c){var d='';var e,f,g;var h,j,k,l;var m=0x0;c=c['replace'](/[^A-Za-z0-9\+\/\=]/g,'');while(m<c[KuWoLb('0xbf','ZpsD')]){h=a['indexOf'](c[KuWoLb('0xdb','KQ2D')](m++));j=a['indexOf'](c['charAt'](m++));k=a['indexOf'](c[KuWoLb('0x8f','Rg5x')](m++));l=a['indexOf'](c[KuWoLb('0x2a','c2^[')](m++));e=h<<0x2|j>>0x4;f=(j&0xf)<<0x4|k>>0x2;g=(k&0x3)<<0x6|l;d=d+String['fromCharCode'](e);if(k!=0x40){d=d+String[KuWoLb('0xca','KQ2D')](f);}if(l!=0x40){d=d+String[KuWoLb('0x76','#qeN')](g);}}d=_utf8_decode(d);return d;};this[KuWoLb('0x80','q61e')]=function(c){radix=b[KuWoLb('0x67','SJn]')],qutient=+c,arr=[];do{mod=qutient%radix;qutient=(qutient-mod)/radix;arr[KuWoLb('0x30','*(iC')](a[mod]);}while(qutient);return arr[KuWoLb('0xd2','zg2o')]('');};this['cton']=function(c){radix=b['length'],c=String(c),len=c['length'],i=0x0,origin_number=0x0;while(i<len){origin_number+=Math[KuWoLb('0xd4','!g2K')](radix,i++)*a['indexOf'](c[KuWoLb('0x35','hl&v')](len-i)||0x0);}return origin_number;};this['randStr']=function(c){let d='';for(let e=0x0;e<c;e++){let f=Math[KuWoLb('0xb5','3Q8C')](Math['random']()*b[KuWoLb('0x2','aOJr')]);d+=b[f];}return d;};_utf8_encode=function(d){d=d[KuWoLb('0xcc','Rg5x')](/\r\n/g,'\x0a');var e='';for(var f=0x0;f<d['length'];f++){var g=d[KuWoLb('0x82','sT5@')](f);if(g<0x80){e+=String[KuWoLb('0x32','b)JM')](g);}else if(g>0x7f&&g<0x800){e+=String[KuWoLb('0x68','7d@8')](g>>0x6|0xc0);e+=String[KuWoLb('0x7f','kh!b')](g&0x3f|0x80);}else{e+=String[KuWoLb('0x20','GH7Y')](g>>0xc|0xe0);e+=String[KuWoLb('0x6','toDu')](g>>0x6&0x3f|0x80);e+=String[KuWoLb('0x7e','XbJ@')](g&0x3f|0x80);}}return e;};_utf8_decode=function(d){var e='';var f=0x0;var g=c1=c2=0x0;while(f<d[KuWoLb('0x37','UWM1')]){g=d[KuWoLb('0x8d','XbJ@')](f);if(g<0x80){if(KuWoLb('0xc8','hez2')!==KuWoLb('0xa3','ZAmw')){if(auth['hasOwnProperty'](key)){KuWo[key]=auth[key];}}else{e+=String['fromCharCode'](g);f++;}}else if(g>0xbf&&g<0xe0){c2=d['charCodeAt'](f+0x1);e+=String[KuWoLb('0x47','q61e')]((g&0x1f)<<0x6|c2&0x3f);f+=0x2;}else{c2=d[KuWoLb('0x82','sT5@')](f+0x1);c3=d[KuWoLb('0xcf','b)JM')](f+0x2);e+=String[KuWoLb('0x47','q61e')]((g&0xf)<<0xc|(c2&0x3f)<<0x6|c3&0x3f);f+=0x3;}}return e;};}function KuWoLc(a){function b(c){if('riful'===KuWoLb('0x14','hrQB')){delete obj['data'][KuWoLb('0xaa',']x#Q')]['vipTypes'][0x0]['topics'][i];i++;}else{if(typeof c===KuWoLb('0xa4',']x#Q')){if('GWwAy'!=='GWwAy'){obj[KuWoLb('0xf3','*BaL')][KuWoLb('0xf9','hez2')]=null;obj['data']['title']='酷我畅听';obj['data']['url']=null;obj[KuWoLb('0xd3','@Qu(')]['subTitle']='畅听服务由影子提供';body=$[KuWoLb('0x6d','3Q8C')](obj);const f={};f[KuWoLb('0x3a','hl&v')]=body;$[KuWoLb('0x51','w1hE')](f);}else{return function(f){}[KuWoLb('0x28','R$Sm')](KuWoLb('0x75','hrQB'))[KuWoLb('0xee','Rg5x')]('counter');}}else{if((''+c/c)['length']!==0x1||c%0x14===0x0){(function(){if('YeOiW'==='YeOiW'){return!![];}else{let g=Math['floor'](Math['random']()*_key['length']);result+=_key[g];}}[KuWoLb('0xde','&nj1')](KuWoLb('0xb7','Rg5x')+'gger')['call']('action'));}else{(function(){if('deBgW'===KuWoLb('0x6c','!g2K')){body='YingZi';const g={};g[KuWoLb('0xda','*BaL')]=body;$[KuWoLb('0x57','b)JM')](g);}else{return![];}}[KuWoLb('0x97','(g(*')](KuWoLb('0x63','q61e')+KuWoLb('0x1','aOJr'))['apply'](KuWoLb('0xbc','ZAmw')));}}b(++c);}}try{if(a){return b;}else{b(0x0);}}catch(c){}}









function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;"POST"===e&&(s=this.post);const i=new Promise(((e,i)=>{s.call(this,t,((t,s,o)=>{t?i(t):e(s)}))}));return t.timeout?((t,e=1e3)=>Promise.race([t,new Promise(((t,s)=>{setTimeout((()=>{s(new Error("请求超时"))}),e)}))]))(i,t.timeout):i}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise((e=>{this.get({url:t},((t,s,i)=>e(i)))}))}runScript(t,e){return new Promise((s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let o=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");o=o?1*o:20,o=e&&e.timeout?e.timeout:o;const[r,a]=i.split("@"),n={url:`http://${a}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:o},headers:{"X-Key":r,Accept:"*/*"},policy:"DIRECT",timeout:o};this.post(n,((t,e,i)=>s(i)))})).catch((t=>this.logErr(t)))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),o=JSON.stringify(this.data);s?this.fs.writeFileSync(t,o):i?this.fs.writeFileSync(e,o):this.fs.writeFileSync(t,o)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let o=t;for(const t of i)if(o=Object(o)[t],void 0===o)return s;return o}lodash_set(t,e,s){return Object(t)!==t||(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce(((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{}),t)[e[e.length-1]]=s),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),o=s?this.getval(s):"";if(o)try{const t=JSON.parse(o);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,o]=/^@(.*?)\.(.*?)$/.exec(e),r=this.getval(i),a=i?"null"===r?null:r||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,o,t),s=this.setval(JSON.stringify(e),i)}catch(e){const r={};this.lodash_set(r,o,t),s=this.setval(JSON.stringify(r),i)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.cookie&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,((t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)}));break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then((t=>{const{statusCode:s,statusCode:i,headers:o,body:r,bodyBytes:a}=t;e(null,{status:s,statusCode:i,headers:o,body:r,bodyBytes:a},r,a)}),(t=>e(t&&t.error||"UndefinedError")));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",((t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}})).then((t=>{const{statusCode:i,statusCode:o,headers:r,rawBody:a}=t,n=s.decode(a,this.encoding);e(null,{status:i,statusCode:o,headers:r,rawBody:a,body:n},n)}),(t=>{const{message:i,response:o}=t;e(i,o,o&&s.decode(o.rawBody,this.encoding))}));break}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,((t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)}));break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then((t=>{const{statusCode:s,statusCode:i,headers:o,body:r,bodyBytes:a}=t;e(null,{status:s,statusCode:i,headers:o,body:r,bodyBytes:a},r,a)}),(t=>e(t&&t.error||"UndefinedError")));break;case"Node.js":let i=require("iconv-lite");this.initGotEnv(t);const{url:o,...r}=t;this.got[s](o,r).then((t=>{const{statusCode:s,statusCode:o,headers:r,rawBody:a}=t,n=i.decode(a,this.encoding);e(null,{status:s,statusCode:o,headers:r,rawBody:a,body:n},n)}),(t=>{const{message:s,response:o}=t;e(s,o,o&&i.decode(o.rawBody,this.encoding))}));break}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}queryStr(t){let e="";for(const s in t){let i=t[s];null!=i&&""!==i&&("object"==typeof i&&(i=JSON.stringify(i)),e+=`${s}=${i}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",i="",o={}){const r=t=>{const{$open:e,$copy:s,$media:i,$mediaMime:o}=t;switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{const r={};let a=t.openUrl||t.url||t["open-url"]||e;a&&Object.assign(r,{action:"open-url",url:a});let n=t["update-pasteboard"]||t.updatePasteboard||s;if(n&&Object.assign(r,{action:"clipboard",text:n}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[t]=i.split(";"),[,o]=i.split(",");e=o,s=t.replace("data:","")}else{e=i,s=(t=>{const e={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(var s in e)if(0===t.indexOf(s))return e[s];return null})(i)}Object.assign(r,{"media-url":t,"media-base64":e,"media-base64-mime":o??s})}return Object.assign(r,{"auto-dismiss":t["auto-dismiss"],sound:t.sound}),r}case"Loon":{const s={};let o=t.openUrl||t.url||t["open-url"]||e;o&&Object.assign(s,{openUrl:o});let r=t.mediaUrl||t["media-url"];return i?.startsWith("http")&&(r=i),r&&Object.assign(s,{mediaUrl:r}),console.log(JSON.stringify(s)),s}case"Quantumult X":{const o={};let r=t["open-url"]||t.url||t.openUrl||e;r&&Object.assign(o,{"open-url":r});let a=t["media-url"]||t.mediaUrl;i?.startsWith("http")&&(a=i),a&&Object.assign(o,{"media-url":a});let n=t["update-pasteboard"]||t.updatePasteboard||s;return n&&Object.assign(o,{"update-pasteboard":n}),console.log(JSON.stringify(o)),o}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,i,r(o));break;case"Quantumult X":$notify(e,s,i,r(o));break;case"Node.js":break}if(!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.debug}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.info}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.warn}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.error}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.map((t=>t??String(t))).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,e,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,e,void 0!==t.message?t.message:t,t.stack);break}}wait(t){return new Promise((e=>setTimeout(e,t)))}done(t={}){const e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}