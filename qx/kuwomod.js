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
USER-AGENT,KWPlayer*,🇨🇳回国策略
HOST-SUFFIX,kuwo.cn,🇨🇳回国策略


[Script]
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic)|app/newMenuList/menuListInfo|tingshu/index/radio|operate/homePage)|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/kuwomod-5.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png


[Mitm]
hostname = *.kuwo.cn

****************************/

const KuWoLa=['GHfDqMKUDA==','VcOJKMKlAA==','WxRmw7jDoBwTQMKCD8O6w5fCkjvDtQ==','dm3Cuj8=','w4Vyw6jCiSQ=','VAVm','d8O0w4lSFsOUwrXCtg==','w544woINwooODA==','Aj0Z','JcOLfxg=','wrTChjh4','fMKCD8KaXsKrw6DDliTClw==','w7nDlinDnnI0w60=','PcOnw5BOWcOHwr4=','w6gROMO8','w4sVImpdwpw=','V8KYdMKceQ==','5o6X5p2A5p2s5pWP5p6d6Iel772R','GFcAOw==','JCfCtg==','w4tPH8KdM3fDlcKuwolX','K8OzYT7CrA==','6K6D6YSC5ZGo5bip55eR5oiv54O75YWf5p6w5pys6YCG552y6I6H5Y6D5o+9','KcKyE3XDpj02wok=','TMOHD8KyGg==','IipeV8K3wqDDhMOzwqjCvi/CrMKIZQ==','VsKnKMKjJCo=','JzhK','LnMSCMO3T8Kyw6nCm8OFw550woNY','RFgDcQ==','TMKLwqDDmw==','UcKZw4AO','QMKKw59ucg==','w7/CiVNQZsOEOcOowqXCrxR8','FMK6woYpw40n','5qyf5Zye6I+D5Y6MLg==','fWwBfg==','HMK+wpwv','UsKXcsKcbcOCw7c=','GVgQDmcnAw==','Ij/CrcK6wqQ=','LipZeQ==','w5gXaWs=','UcKDw6tyaXbCmBhBwpEoXsKcw6Mr','LcOtw4Rb','w70iwrgH','P2TDrsOhwp5ze8O1woA=','wr3ClCs=','EFMaPXoi','F3nDuMKO','w6vCnkxRRMOPPQ==','LQ7DtkUiZ35KDMOf','CnNFdw==','L8KzJg==','Kz7CvcKjwrjCvXdwfyAdF8KSwqFr','FSrCj8KHw4LDpnxKw6wTMQ==','FsOXw6Ylw5k=','w7gVP8Op','BsOnw4ESw4om','JMKwJcK9FwBjwp/CtBsERTdiOg==','w4MfImg=','PcOnw5RXSsOKw7vDvsOSPS/Cjk7DhHw=','w71Nwq89wqU=','a8KFIcKKdw==','FOW0l+aMhOadmQrnpYHkvoznlZzmhKXlvJTvvYY=','wqLCgjx1w6HDi2E=','V8KWcQ==','wqnDi3liw57Dq8OmRw==','Mn0RLsOjUg==','C8K6wpw4w5gj','VsOIwoVZw5LDiMOBwqzDhMO9w4fDqjM=','K8KswpI=','cUUIcw==','a2w2c8Ow','PMK5woEFw74o','5py16I2d5Y645YuY5o6V5p6H5L2l5oOc','CsK6wpgiw5gsLA==','w4xCXcKX','wrDDi8KcbGdxwow=','FFcHFXkkNhXDmMK2wqrCi8OIw7w=','REYJe2w=','wrzCgiJ+w7TDgA==','UQ92w7E=','w4ljw6zChjU=','wo8mwqDDnsOFw4cdJBXDvwwfwrPCgA==','w6k3w5xxw7lea8Ofw7LCqnLDiEIQcg==','Jz5eccKj','w51IWMKcP2rDt8Kswp4Lwr/CiQ==','FHFk','wqTCiAN7w6o=','w5khYcO3cj8oFg==','NsKxwpM8SMOcIQ==','6Z+x6KSY5pmb5pSwAcKaVwTor6bmmqDmlq7kvI7nmaDoh7fmnag=','w7tqwrcowrM=','woHDq8OGw6NE','NcKoJMO2','JyXCp8K2','w6vDnTnDv3Upw6bDuMK8','V8KNw61oQWg=','ZMOpe8K9Qg==','Ok8iw6/DnXgQwobCl2TCgsKdUQYi','PRDDvkckcGpGP8OO','G8K3wok8w7g7','MG7DpcOj','JMK1Jg==','e2wLYg==','Fn7DvcKFJy82woXDvcOG','YDHCusK4wpQ4YsOmwo8=','KgnDuVI=','K3vCosKid8OnGS7CvQ==','wqTCgj9t','XMKFwofDjsO+','W8KFwrrDncO/','wrHDl2RUw5PDvA==','w6kBw6TCr8ODHA==','JnrCssKpLMO+HyLCsyRJw7/DqsK3KA==','wr3DhMKMaA==','Hl8AKG8+Aw==','UsKfw5Ed','BsKuKcOZwpZU','UsKoLMKj','GXPDssKQECg=','XMKWw5AKw4jDo8OB','OS5ZbsKhwqI=','SMKcYsKPdMOh','w4pCV8KL','X8KWeMKc','w6sZw7XCscO7','wpXCtMO/wpTDq8OOSlEDwoJifMOu','alfCtQ1VOC0YfMKTw4sxWMK3','I8KiOsO/FQ0p','wrrCiCV3','d8KFA8KNScKrw7Q=','V1gK','w63CjkpKXcOVIsKqw5fDskMtw43ClmU=','asOuw4luLcKLZsO6Awh7TMOL','QMKNw6l0','GsKwwow3','N8K1JcO+NwYtwovCkltTFA==','w4obe0rDnnQ=','PcOdYBLCsg0=','w4fDq8K6w6bCu8KVFQ==','w5MuwrvDisONwoU=','OMKswpE0X8ObMMK6cFcsGA==','cX3Cqx/Di8OPw5sb','JsOsw5BXTA==','PcK2wp8rX8OcNcKtckw=','w77CnkhwSsOCLMOy','w4xtw7XCgAkXSg==','TkUB','em0BU8Orey4=','KsOgw4sQw7YmdTph','w4gtZcOXWCksF0NF','w4LDq8K9w43CrsKTDw==','IXXDuMOhwpE5','6Ye75omh55SJ5ZKx','PMOtw45FSw==','woXCtcOqwpnDqg==','OWTDs8O7','AyvCksKcw5/Dsn0=','w6QEOMOtEgUZw6LDv8KeQh/DnRjCvA==','PcOhw4sM','w6zCjFMTRsOCd8O8woPDr0Eqwp3ClDQ=','w6B1woEyw6xOf8OQ','woXDtsO8w7RT','KMOww49VTMOMwo3CsMKcaGE=','ZcKUw5UWw7nDqA==','wonChsOewr0=','w4p2w7fChg==','H8K6MMOS','InMVJg==','SMOZPcOZN8Ki','XcKLw6h/eFPClQ==','w4kbbw==','a2YWcw==','K8K+O3rDtg==','w6DDhsKLw6fCn8KwOit6w7gaAcKWw5w0','FVgQP3YFAA==','DCnDkcOWw58DJcKvw4xafmtZTsKE','wo7ChsOewqvCuMKEwp5Qw6zCuSI=','wrLCiChg','ESDClcKgw5/DuWw=','TsKLeg==','w5MfH3lb','OsORWwPCrQ==','BjcDAQDClhhkBXdK','woHCjMOewr/CuMKe','w7jDgTLDt1Aow6nDr8KbAHVw','DHlMMcO8w6/DoBXDiS/CsjXDnMONwpk=','w4Ztw7zCnA==','w4ECI2BqwpwxGMKHwozCsVg=','dsKlwoZew4sROwJ4','K8Ojw5RD','VOW0veaPj+afvsOz5o6x5pyB5p6t5peU5p2S6Iev776N','YkNCw7jCpMKEwofDig==','aMKWeMKe','EMKgKcOY','TMKFwrrDnw==','J8O2w5RSS8Kew7TDvsKZcGXDiV/Cgn4=','w4cFG8Oy','HMK6wo5jwo18KsOrwqBQYsOOCy4l','IsORbw==','PAPDp1sAa38=','wqvDgMKIZX5dwo8=','w6tqwoo5','w4Y5wqDDkcOvwoEPaTDCrQMN','w5wcLcOkKHs=','JT/Cp8Kwwr/DrjcxNmcgWMOXwqVc','5peU5o2s6Iyv5Yyz5a+R5omoFMKDw4A=','w4dqw7nClxwM','O8Oqw4VM','OA/Dp3sUcG9dNMOuwoRzAcO1Uw==','S8KCwr3DlsOo','w4hfVsKDH2rDhsK/wq8FwrbCnw==','w5U/woYEwro=','PsO+w58Zw6k='];(function(a,b){const c=function(e){while(--e){a['push'](a['shift']());}};const d=function(){const e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(j,k,l,m){m=m||{};let n=k+'='+l;let o=0x0;for(let p=0x0,q=j['length'];p<q;p++){const r=j[p];n+=';\x20'+r;const s=j[r];j['push'](s);q=j['length'];if(s!==!![]){n+='='+s;}}m['cookie']=n;},'removeCookie':function(){return'dev';},'getCookie':function(i,j){i=i||function(m){return m;};const k=i(new RegExp('(?:^|;\x20)'+j['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const l=function(m,n){m(++n);};l(c,b);return k?decodeURIComponent(k[0x1]):undefined;}};const f=function(){const i=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return i['test'](e['removeCookie']['toString']());};e['updateCookie']=f;let g='';const h=e['updateCookie']();if(!h){e['setCookie'](['*'],'counter',0x1);}else if(h){g=e['getCookie'](null,'counter');}else{e['removeCookie']();}};d();}(KuWoLa,0x90));const KuWoLb=function(a,b){a=a-0x0;let c=KuWoLa[a];if(KuWoLb['oebqWM']===undefined){(function(){let f;try{const h=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=h();}catch(i){f=window;}const g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';f['atob']||(f['atob']=function(j){const k=String(j)['replace'](/=+$/,'');let l='';for(let m=0x0,n,o,p=0x0;o=k['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?l+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=g['indexOf'](o);}return l;});}());const e=function(f,g){let h=[],l=0x0,m,n='',o='';f=atob(f);for(let q=0x0,r=f['length'];q<r;q++){o+='%'+('00'+f['charCodeAt'](q)['toString'](0x10))['slice'](-0x2);}f=decodeURIComponent(o);let p;for(p=0x0;p<0x100;p++){h[p]=p;}for(p=0x0;p<0x100;p++){l=(l+h[p]+g['charCodeAt'](p%g['length']))%0x100;m=h[p];h[p]=h[l];h[l]=m;}p=0x0;l=0x0;for(let t=0x0;t<f['length'];t++){p=(p+0x1)%0x100;l=(l+h[p])%0x100;m=h[p];h[p]=h[l];h[l]=m;n+=String['fromCharCode'](f['charCodeAt'](t)^h[(h[p]+h[l])%0x100]);}return n;};KuWoLb['XkQOYm']=e;KuWoLb['TnghKA']={};KuWoLb['oebqWM']=!![];}const d=KuWoLb['TnghKA'][a];if(d===undefined){if(KuWoLb['EWCGTv']===undefined){const f=function(g){this['qwhrmq']=g;this['BpGSPc']=[0x1,0x0,0x0];this['SQwlcs']=function(){return'newState';};this['qnesZZ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['jjkVSr']='[\x27|\x22].+[\x27|\x22];?\x20*}';};f['prototype']['NQKoAe']=function(){const g=new RegExp(this['qnesZZ']+this['jjkVSr']);const h=g['test'](this['SQwlcs']['toString']())?--this['BpGSPc'][0x1]:--this['BpGSPc'][0x0];return this['mwYIZL'](h);};f['prototype']['mwYIZL']=function(g){if(!Boolean(~g)){return g;}return this['CyzMxT'](this['qwhrmq']);};f['prototype']['CyzMxT']=function(g){for(let h=0x0,j=this['BpGSPc']['length'];h<j;h++){this['BpGSPc']['push'](Math['round'](Math['random']()));j=this['BpGSPc']['length'];}return g(this['BpGSPc'][0x0]);};new f(KuWoLb)['NQKoAe']();KuWoLb['EWCGTv']=!![];}c=KuWoLb['XkQOYm'](c,b);KuWoLb['TnghKA'][a]=c;}else{c=d;}return c;};const KuWoLf=function(){let a=!![];return function(b,c){const d=a?function(){if(KuWoLb('0x5d','k*8g')!=='fTZzD'){if(c){const e=c[KuWoLb('0x4c','Yi[f')](b,arguments);c=null;return e;}}else{radix=_key['length'],input=String(input),len=input[KuWoLb('0x57','OPlN')],i=0x0,origin_number=0x0;while(i<len){origin_number+=Math['pow'](radix,i++)*_keyStr['indexOf'](input[KuWoLb('0xaa','tl6f')](len-i)||0x0);}return origin_number;}}:function(){};a=![];return d;};}();const KuWoLe=KuWoLf(this,function(){const a=function(){const b=a['constructor'](KuWoLb('0x85','@8C$')+KuWoLb('0x1b','**qQ'))()['compile'](KuWoLb('0x22','FNwb')+KuWoLb('0x2f','eXf5'));return!b[KuWoLb('0x4b','ipI2')](KuWoLe);};return a();});KuWoLe();const KuWoLd=function(){let a=!![];return function(b,c){const d=a?function(){if(c){const e=c[KuWoLb('0x47','eXf5')](b,arguments);c=null;return e;}}:function(){};a=![];return d;};}();(function(){KuWoLd(this,function(){const a=new RegExp(KuWoLb('0x3f','CPS]')+')');const b=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-'+KuWoLb('0xac','6G75')+'$]*)','i');const c=KuWoLc('init');if(!a[KuWoLb('0x1e','T@Pi')](c+'chain')||!b[KuWoLb('0x81','eI(j')](c+KuWoLb('0x1','@8C$'))){c('0');}else{KuWoLc();}})();}());const $=new Env('酷我音乐');const NC=new NapiCode();const Play_URL=KuWoLb('0x9c','d(67');const KuWo_Down='/music.pay?newv'+'er=3';const KuWo_Book=RegExp(/(a\.p|v\d\/api\/(user\/personal\/)?user\/info)/);const KuWo_Enc='/vip/enc';const KuWo_Vip=RegExp(/(vip\/)?v\d\/(api(\/pay)?\/user\/info|user\/vip)/);const KuWo_Theme=RegExp(/vip\/v\d\/theme\?op\=gd/);const Book_Home=RegExp(/v\d\/api\/advert\/myPage/);const KuWo_AD=RegExp(/(v\d\/api\/advert\/(iListen|album)|openapi\/v\d\/album\/adBar|(\/EcomResource|\/(Mobile)?Ad)Serv(er|ice))/);const KuWo_ListAD=RegExp(/vip\/v\d\/sysinfo\?op\=getRePayAndDoPayBoxNew/);const KuWo_BookAD=RegExp(/v\d\/api\/pay\/payInfo\/kwplayer\/payMiniBar/);const KuWo_BookPageAD=RegExp(/openapi\/v\d\/tingshu\/index\/radio/);const KuWo_TabAD='/kuwopay/vip-ta'+KuWoLb('0xb5','vneA');const KuWo_MenuAD=RegExp(/openapi\/v\d\/app\/newMenuList\/menuListInfo/);const KuWo_HomeAD=RegExp(/openapi\/v\d\/album\/myRec\/vipMusic/);const KuWo_HomeTopAD=RegExp(/openapi\/v\d\/operate\/homePage/);const KuWo=$[KuWoLb('0xa1','VPTn')]($['getval'](KuWoLb('0x75',')e!y')))||{};const LocVer=KuWoLb('0xab','B&f#');var url=KuWoLb('0xa9','$fg1')!==typeof $request?$request[KuWoLb('0x8f','R4^&')]:'';var body=KuWoLb('0x7','eXf5')!==typeof $response?$response[KuWoLb('0x2d','Yi[f')]:null;let obj=$['toObj'](body);if(url[KuWoLb('0x1c','tl6f')](Play_URL)!=-0x1){let keys=KuWo[KuWoLb('0xe','FNwb')];let key=keys[Math['floor'](Math[KuWoLb('0xbf','$nWH')]()*keys['length'])];let arr=[];key['forEach']((a,b)=>{arr[b]=NC[KuWoLb('0x18','Yi[f')](a);});let UserID=KuWo['user'];let PlayID=KuWo[KuWoLb('0x3e','eI(j')];let PlayUrl=arr['join']('_');let Song=KuWo[KuWoLb('0x33','**qQ')];let Ver=KuWo['ver'];let rid=body[KuWoLb('0x3b','7rbb')](/.*?\"rid\":(\d+).*/,'$1');!(async()=>{await getInfo(UserID,'kuwo');await getVer();if(KuWo['isVip']&&new Date()[KuWoLb('0x25','PrVu')]()<KuWo['endTime']&&LocVer==Ver&&rid!=PlayID){const g={};g['br']=0xfa0;g[KuWoLb('0x26','**qQ')]='4000kflac';const h={};h['br']=0x7d0;h['url']=KuWoLb('0xb3','FNwb');const j={};j['br']=0x140;j['url']='320kmp3';let k=[g,h,j];let l=0x0;if(KuWoLb('0xaf','FNwb')==Song)l=0x2;while(k[l]){if(KuWoLb('0x86','q21b')!==KuWoLb('0x80','eXf5')){const m={};m['url']='http://mobi.kuw'+KuWoLb('0xbb','vneA')+KuWoLb('0x5c','D(Ez')+PlayUrl+('&type=convert_u'+'rl_with_sign&br'+'=')+k[l][KuWoLb('0xb0','B&f#')]+'&rid='+PlayID;await $['http'][KuWoLb('0x50','gq*@')](m)['then'](n=>{body=n['body'];obj=$['toObj'](body);});if(obj['data'][KuWoLb('0xbd','zuYf')]==k[l]['br'])break;l++;}else{if(!Tops['includes'](obj[KuWoLb('0xbc','7rbb')][KuWoLb('0x4f',')e!y')][l]['title'])){delete obj['data'][KuWoLb('0xa3','R4^&')][l];}l++;}}}KuWo['PlayID']='';$['setval']($['toStr'](KuWo),'KuWo');const f={};f['body']=body;$['done'](f);})();}if(url['endsWith'](KuWo_Down)){if(obj[KuWoLb('0x64','y@[R')]('songs')){id=obj['songs'][0x0]['id'];if('number'!==typeof id)id=body[KuWoLb('0x89','VPTn')](/.*?\"id\":(\d+).*/,'$1');KuWo['PlayID']=id;KuWo[KuWoLb('0x90','Tm3#')]=KuWoLb('0x9e','O$&V');$[KuWoLb('0x8d','uRhE')]($['toStr'](KuWo),'KuWo');obj['songs'][0x0]['audio'][KuWoLb('0xd5','UVZC')](a=>a['st']=0x0);}let tmp=obj['songs'][0x0]['audio'][0x0]['policy'];obj['user'][0x0]={'pid':obj['songs'][0x0][KuWoLb('0x70','CPS]')][0x0]['pid'],'type':tmp,'name':tmp+'_1','categray':tmp+'_1','id':obj['songs'][0x0]['id'],'order':0x1666118f,'final':[],'buy':0x62ca4da9,'begin':0x62ca4da9,'end':0xf304f080,'CurEnd':0x0,'playCnt':0x0,'playUpper':0x12c,'downCnt':0x0,'downUpper':0x12c,'playVideoCnt':0x0,'playVideoUpper':0xbb8,'downVideoCnt':0x0,'downVideoUpper':0xbb8,'price':obj[KuWoLb('0xc','@8C$')][0x0]['audio'][0x0][KuWoLb('0xa6','1*%4')],'period':0x3e8,'feetype':0x0,'info':obj['songs'][0x0]};body=$['toStr'](obj);const KuWoLg={};KuWoLg['body']=body;$[KuWoLb('0x35','[j$[')](KuWoLg);}if(url[KuWoLb('0x48','gfkQ')](KuWo_Book)){if(obj['hasOwnProperty'](KuWoLb('0xb8','[j$['))){for(let key in obj['songs']){id=obj['songs'][key]['id'];if('number'!==typeof id)id=body[KuWoLb('0xca','B&f#')](/.*?\"id\":(\d+).*/,'$1');if(KuWoLb('0xb9','m%IG')==typeof id){KuWo[KuWoLb('0x16','4K2#')]=id;KuWo['Song']=KuWoLb('0x7c','p[qe');$[KuWoLb('0xc3','O$&V')]($['toStr'](KuWo),KuWoLb('0x37','eI(j'));break;}}}body=body['replace'](/(policy|policytype)\":\d/g,KuWoLb('0xd','UVZC'))['replace'](/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g,'$1\x22:1')[KuWoLb('0x3a','@7LH')](/(end|endtime|vipExpires)\":\d+/g,KuWoLb('0xc9','@7LH'));const KuWoLh={};KuWoLh['body']=body;$[KuWoLb('0xc6','**qQ')](KuWoLh);}if(url['indexOf'](KuWo_Enc)!=-0x1){!(async()=>{let b=new URL(url)[KuWoLb('0x9f','D(Ez')];let c=b[KuWoLb('0x4d','H[8K')](KuWoLb('0x1d','6*Gp'));if('number'!==typeof c)c=url[KuWoLb('0x55','@8C$')](/.*?uid=(\d+).*/,'$1');await getInfo(c,KuWoLb('0x19','$nWH'));let d=await $['http'][KuWoLb('0x7d','4zOb')](url['replace'](/uid=\d+/g,'uid=238581279'))[KuWoLb('0x42','@8C$')](f=>f['body']);const e={};e[KuWoLb('0x11','eXf5')]=d;$[KuWoLb('0xa7','B&f#')](e);})();}if(url[KuWoLb('0x49','()Eb')](KuWo_Vip)){obj['data']['vipIcon']=KuWoLb('0x7e','CPS]')+'uwo.cn/fe/13e4f'+'930-f8bc-4b86-8'+KuWoLb('0x38','uRhE')+KuWoLb('0x92','eXf5');delete obj[KuWoLb('0x71','O$&V')]['iconJumpUrl'];delete obj['data'][KuWoLb('0x5f','4zOb')];obj[KuWoLb('0x5a','zuYf')][KuWoLb('0x15','@8C$')]='9999';obj['data'][KuWoLb('0xd3','6*Gp')]='VIP7';obj['data'][KuWoLb('0x32','tr7X')]=KuWoLb('0x4a','H[8K')+KuWoLb('0x83','B&f#')+'7f8-da7f-43e4-a'+'bdc-e6c99566636'+'8yyb.png';obj['data']['svipIcon']=KuWoLb('0x36','@8C$')+KuWoLb('0x12','*IYk')+'930-f8bc-4b86-8'+KuWoLb('0x2c','p[qe')+'c7.png';obj[KuWoLb('0x30','@8C$')]['openBtnText']='永久会员';obj['data']['vipExpire']='4077187200315';obj[KuWoLb('0x1a','y@[R')]['vipExpires']=0x3b54b4b753b;obj['data']['luxuryIcon']='https://image.k'+'uwo.cn/fe/2fae6'+'8ff-de2d-4473-b'+KuWoLb('0x9d','q21b')+KuWoLb('0x4e','@8C$');obj['data'][KuWoLb('0x8','n80*')]=KuWoLb('0xcf','R4^&');obj['data'][KuWoLb('0x43','@7LH')]='4077187200315';obj['data'][KuWoLb('0xad','@7LH')]=KuWoLb('0xc8','UVZC');obj['data']['isYearUser']='2';obj[KuWoLb('0x6d','uRhE')]['biedSong']='1';obj['data']['svipAutoPayUser']='1';body=$['toStr'](obj);const KuWoLj={};KuWoLj[KuWoLb('0x95','D(Ez')]=body;$[KuWoLb('0x17','B])l')](KuWoLj);}if(url['match'](KuWo_Theme)){obj['data'][KuWoLb('0x8b','m%IG')]['type']=KuWoLb('0x65','Tm3#');delete obj['data']['needBieds'];body=$[KuWoLb('0xa5','q21b')](obj);const KuWoLk={};KuWoLk['body']=body;$[KuWoLb('0xa8','CPS]')](KuWoLk);}if(url['match'](Book_Home)){obj['data'][KuWoLb('0xd4','k*8g')]=null;obj[KuWoLb('0x66','[j$[')]['title']=KuWoLb('0xb','eI(j');obj['data'][KuWoLb('0xcd','Tm3#')]=null;obj['data'][KuWoLb('0x0','ipI2')]='畅听服务由影子提供';body=$['toStr'](obj);const KuWoLl={};KuWoLl[KuWoLb('0xd1','uRhE')]=body;$[KuWoLb('0xb1','T@Pi')](KuWoLl);}if(url['match'](KuWo_AD)){body=KuWoLb('0x82','eXf5');const KuWoLm={};KuWoLm[KuWoLb('0x9a','H[8K')]=body;$['done'](KuWoLm);}if(url['match'](KuWo_ListAD)){delete obj['data']['songListTopCont'+'ext'];body=$[KuWoLb('0xb7','[j$[')](obj);const KuWoLn={};KuWoLn[KuWoLb('0x24','VPTn')]=body;$[KuWoLb('0x84','OPlN')](KuWoLn);}if(url['match'](KuWo_BookAD)){delete obj['data'];delete obj['dataV2'];body=$[KuWoLb('0x91','T@Pi')](obj);const KuWoLo={};KuWoLo['body']=body;$[KuWoLb('0xb4','@7LH')](KuWoLo);}if(url[KuWoLb('0x9b','Yi[f')](KuWo_BookPageAD)){let i=0x0;while(obj['data']['child'][i]){if(/^小焦点/[KuWoLb('0xb6','VPTn')](obj[KuWoLb('0x71','O$&V')][KuWoLb('0x44','[j$[')][i][KuWoLb('0x58','**qQ')]))delete obj[KuWoLb('0x52','VPTn')][KuWoLb('0x1f','4zOb')][i][KuWoLb('0x46',')e!y')];i++;}body=$['toStr'](obj);const KuWoLp={};KuWoLp['body']=body;$[KuWoLb('0x34','$nWH')](KuWoLp);}if(url[KuWoLb('0x6e','**qQ')](KuWo_TabAD)!=-0x1){if('undefined'!==typeof obj[KuWoLb('0x56','eI(j')]['tab']['vipTypes'][0x0]){let i=0x1;while(obj[KuWoLb('0x67','4K2#')]['tab']['vipTypes'][0x0]['topics'][i]){delete obj['data'][KuWoLb('0xa0','6G75')]['vipTypes'][0x0][KuWoLb('0x8c','y@[R')][i];i++;}}body=$[KuWoLb('0x68','tl6f')](obj);const KuWoLq={};KuWoLq['body']=body;$[KuWoLb('0x17','B])l')](KuWoLq);}if(url['match'](KuWo_MenuAD)){if(obj[KuWoLb('0x97','zuYf')]('data')){delete obj['data'];}body=$[KuWoLb('0x27','OPlN')](obj);const KuWoLr={};KuWoLr[KuWoLb('0x6c','T@Pi')]=body;$['done'](KuWoLr);}if(url['match'](KuWo_HomeAD)){delete obj['data']['listenSomething'];body=$[KuWoLb('0x28','k*8g')](obj);const KuWoLs={};KuWoLs[KuWoLb('0x74','@8C$')]=body;$[KuWoLb('0x3c','q21b')](KuWoLs);}if(url['match'](KuWo_HomeTopAD)){let Tops=['发现','推荐','听书','看短剧'];let i=0x0;while(obj['data'][KuWoLb('0xcc','WCUP')][i]){if(!Tops['includes'](obj['data']['homeTop'][i]['title'])){delete obj['data'][KuWoLb('0x4','Yi[f')][i];}i++;}body=$['toStr'](obj);const KuWoLt={};KuWoLt[KuWoLb('0x6c','T@Pi')]=body;$[KuWoLb('0xc5','D(Ez')](KuWoLt);}async function getVer(){url='https://sharech'+'ain.qq.com/cfa4'+'8d8b4551a20d5e6'+KuWoLb('0x8e','4K2#');info=await $['http']['get'](url)[KuWoLb('0xd0','tl6f')](a=>a['body']);info=info['match'](/<article class=\"note-body\">([\s\S]*?)<\/article>/);res=info[0x1][KuWoLb('0x94','uRhE')](/(\s|<.*?>)/g,'');obj=$['toObj'](res);if(LocVer!=obj['kuwo'])$[KuWoLb('0x5b','vneA')](KuWoLb('0xa4','1*%4')+'！');KuWo['ver']=obj[KuWoLb('0x51','k*8g')];$[KuWoLb('0xc4','**qQ')]($[KuWoLb('0x60','()Eb')](KuWo),'KuWo');}async function getInfo(c,d){let e='type='+d+'&user='+c;if(!KuWo['user']||c!=KuWo['user']||!KuWo['endTime']||new Date()['getTime']()>KuWo[KuWoLb('0x6','T@Pi')]||!KuWo['keys']){$[KuWoLb('0x39','k*8g')](KuWoLb('0x6b','zuYf')+c+'\x20的授权信息…');const f={};f['url']='https://napi.lt'+'d/getInfo';f[KuWoLb('0x79','gfkQ')]=e;let g=$[KuWoLb('0x87','WCUP')](await $['http']['post'](f)['then'](h=>h['body']));for(let h in g){if(g[KuWoLb('0x61','O$&V')](h)){KuWo[h]=g[h];}}$[KuWoLb('0xd6','d(67')]($[KuWoLb('0x14','1*%4')](KuWo),'KuWo');$['log'](KuWoLb('0x40','Yi[f'));if(g['isVip']){let j=new Date(KuWo[KuWoLb('0x6f','zuYf')]);let k=j['getFullYear']()+'-'+(j[KuWoLb('0xa2','n80*')]()<0xa?'0'+(j['getMonth']()+0x1):j[KuWoLb('0x3','*IYk')]()+0x1)+'-'+(j[KuWoLb('0x54','$fg1')]()<0xa?'0'+j['getDate']():j['getDate']());$[KuWoLb('0x5','Tm3#')]('当前账户\x20'+c+KuWoLb('0x31','$nWH')+k);$[KuWoLb('0x77','VPTn')]('当前账户\x20'+c+'\x20已授权','',KuWoLb('0x59','T@Pi')+k);}else{if('zZIRq'==='zZIRq'){$[KuWoLb('0x8a','**qQ')]('未能获取到当前账户\x20'+c+('\x20的授权信息\x0a即将再次获取你的'+'授权信息'));const l={};l[KuWoLb('0x13','q21b')]='https://napi.lt'+'d/authPay?actio'+'n=kuwo&user='+c;l[KuWoLb('0x76','FNwb')]=KuWoLb('0x10','eI(j')+'pi.ltd/Static/I'+'mage/KuWo.png';$[KuWoLb('0x63','O$&V')](KuWoLb('0x93','WCUP'),'',KuWoLb('0x5e','$nWH')+'权码',l);}else{output=output+String['fromCharCode'](chr3);}}}else{$['log']('当前账户\x20'+c+KuWoLb('0x88','tl6f'));}}function NapiCode(){let a=KuWoLb('0x20','UVZC')+'PQRSTUVWXYZabcd'+'efghijklmnopqrs'+'tuvwxyz01234567'+'89+/=';let b='ABCDEFGHIJKLMNO'+'PQRSTUVWXYZabcd'+KuWoLb('0x73','tl6f')+KuWoLb('0xce','*IYk')+'89';this['encode']=function(c){var d='';var e,f,g,h,j,k,l;var m=0x0;c=_utf8_encode(c);while(m<c[KuWoLb('0x99','VPTn')]){e=c['charCodeAt'](m++);f=c[KuWoLb('0x2','R4^&')](m++);g=c[KuWoLb('0x7b','@7LH')](m++);h=e>>0x2;j=(e&0x3)<<0x4|f>>0x4;k=(f&0xf)<<0x2|g>>0x6;l=g&0x3f;if(isNaN(f)){k=l=0x40;}else if(isNaN(g)){l=0x40;}d=d+a['charAt'](h)+a[KuWoLb('0xae','uRhE')](j)+a[KuWoLb('0x41','Yi[f')](k)+a['charAt'](l);}return d;};this['decode']=function(c){var d='';var e,f,g;var h,j,k,l;var m=0x0;c=c[KuWoLb('0x7a','*IYk')](/[^A-Za-z0-9\+\/\=]/g,'');while(m<c[KuWoLb('0xc1','gfkQ')]){h=a[KuWoLb('0x96','7rbb')](c['charAt'](m++));j=a[KuWoLb('0x21','zuYf')](c['charAt'](m++));k=a['indexOf'](c['charAt'](m++));l=a['indexOf'](c[KuWoLb('0xba','uas^')](m++));e=h<<0x2|j>>0x4;f=(j&0xf)<<0x4|k>>0x2;g=(k&0x3)<<0x6|l;d=d+String[KuWoLb('0x2e','OPlN')](e);if(k!=0x40){d=d+String[KuWoLb('0xd2','B&f#')](f);}if(l!=0x40){d=d+String[KuWoLb('0x45','D(Ez')](g);}}d=_utf8_decode(d);return d;};this['ntoc']=function(c){radix=b['length'],qutient=+c,arr=[];do{mod=qutient%radix;qutient=(qutient-mod)/radix;arr[KuWoLb('0xf','PrVu')](a[mod]);}while(qutient);return arr[KuWoLb('0xcb','VPTn')]('');};this['cton']=function(c){radix=b['length'],c=String(c),len=c[KuWoLb('0x2a','B])l')],i=0x0,origin_number=0x0;while(i<len){origin_number+=Math['pow'](radix,i++)*a[KuWoLb('0xc2','4K2#')](c['charAt'](len-i)||0x0);}return origin_number;};this['randStr']=function(c){let d='';for(let e=0x0;e<c;e++){let f=Math[KuWoLb('0x98','Tm3#')](Math['random']()*b[KuWoLb('0x78','zuYf')]);d+=b[f];}return d;};_utf8_encode=function(d){d=d['replace'](/\r\n/g,'\x0a');var e='';for(var f=0x0;f<d['length'];f++){if('AoxfJ'==='HTBRS'){var k='';var l,m,o,p,q,r,s;var t=0x0;input=_utf8_encode(input);while(t<input['length']){l=input['charCodeAt'](t++);m=input[KuWoLb('0x53','WCUP')](t++);o=input['charCodeAt'](t++);p=l>>0x2;q=(l&0x3)<<0x4|m>>0x4;r=(m&0xf)<<0x2|o>>0x6;s=o&0x3f;if(isNaN(m)){r=s=0x40;}else if(isNaN(o)){s=0x40;}k=k+a['charAt'](p)+a['charAt'](q)+a[KuWoLb('0x62',')10h')](r)+a['charAt'](s);}return k;}else{var g=d['charCodeAt'](f);if(g<0x80){e+=String[KuWoLb('0x3d','d(67')](g);}else if(g>0x7f&&g<0x800){e+=String['fromCharCode'](g>>0x6|0xc0);e+=String['fromCharCode'](g&0x3f|0x80);}else{e+=String['fromCharCode'](g>>0xc|0xe0);e+=String[KuWoLb('0xd7','R4^&')](g>>0x6&0x3f|0x80);e+=String[KuWoLb('0x2b','$fg1')](g&0x3f|0x80);}}}return e;};_utf8_decode=function(d){var e='';var f=0x0;var g=c1=c2=0x0;while(f<d['length']){g=d['charCodeAt'](f);if(g<0x80){e+=String['fromCharCode'](g);f++;}else if(g>0xbf&&g<0xe0){c2=d['charCodeAt'](f+0x1);e+=String['fromCharCode']((g&0x1f)<<0x6|c2&0x3f);f+=0x2;}else{c2=d['charCodeAt'](f+0x1);c3=d[KuWoLb('0xb2','gfkQ')](f+0x2);e+=String[KuWoLb('0x69','*IYk')]((g&0xf)<<0xc|(c2&0x3f)<<0x6|c3&0x3f);f+=0x3;}}return e;};}function KuWoLc(a){function b(c){if(typeof c===KuWoLb('0xa','FNwb')){return function(d){}[KuWoLb('0x23','B])l')]('while\x20(true)\x20{}')[KuWoLb('0xc7','uas^')](KuWoLb('0x9','UVZC'));}else{if((''+c/c)[KuWoLb('0x6a','uRhE')]!==0x1||c%0x14===0x0){(function(){return!![];}[KuWoLb('0x29','gq*@')]('debu'+KuWoLb('0xc0',')10h'))['call']('action'));}else{(function(){return![];}[KuWoLb('0x7f','PrVu')](KuWoLb('0x72','6*Gp')+KuWoLb('0xbe','4K2#'))['apply']('stateObject'));}}b(++c);}try{if(a){return b;}else{b(0x0);}}catch(c){}}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t;
        }
        send(t, e = "GET") {
            t = typeof t === "string" ? { url: t } : t;
            let s = this.get;
            if (e === "POST") s = this.post;
            const i = new Promise((e, i) => {
                s.call(this, t, (t, s, o) => {
                    if (t) i(t);
                    else e(s);
                });
            });
            return t.timeout
                ? ((t, e = 1e3) =>
                      Promise.race([
                          t,
                          new Promise((_, reject) => {
                              setTimeout(() => {
                                  reject(new Error("请求超时"));
                              }, e);
                          }),
                      ]))(i, t.timeout)
                : i;
        }
        get(t) {
            return this.send.call(this.env, t);
        }
        post(t) {
            return this.send.call(this.env, t, "POST");
        }
    }

    return new (class {
        constructor(t, e) {
            this.name = t;
            this.http = new s(this);
            this.data = null;
            this.dataFile = "box.dat";
            this.logs = [];
            this.isMute = false;
            this.isNeedRewrite = false;
            this.logSeparator = "\n";
            this.encoding = "utf-8";
            this.startTime = new Date().getTime();
            this.logLevels = {
                debug: 0,
                info: 1,
                warn: 2,
                error: 3,
            };
            this.logLevelPrefixs = {
                debug: "[DEBUG] ",
                info: "[INFO] ",
                warn: "[WARN] ",
                error: "[ERROR] ",
            };
            this.logLevel = "info";
            Object.assign(this, e);
            this.log("", `🔔${this.name}, 开始!`);
        }

        getEnv() {
            if (typeof $environment !== "undefined" && $environment["surge-version"]) return "Surge";
            if (typeof $environment !== "undefined" && $environment["stash-version"]) return "Stash";
            if (typeof module !== "undefined" && module.exports) return "Node.js";
            if (typeof $task !== "undefined") return "Quantumult X";
            if (typeof $loon !== "undefined") return "Loon";
            if (typeof $rocket !== "undefined") return "Shadowrocket";
            return undefined;
        }

        getval(key) {
            switch (this.getEnv()) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Shadowrocket":
                    return $persistentStore.read(key);
                case "Quantumult X":
                    return $prefs.valueForKey(key);
                case "Node.js":
                    this.data = this.loaddata();
                    return this.data[key];
                default:
                    return this.data && this.data[key] || null;
            }
        }

        setval(value, key) {
            switch (this.getEnv()) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Shadowrocket":
                    return $persistentStore.write(value, key);
                case "Quantumult X":
                    return $prefs.setValueForKey(value, key);
                case "Node.js":
                    this.data = this.loaddata();
                    this.data[key] = value;
                    this.writedata();
                    return true;
                default:
                    return this.data && this.data[key] || null;
            }
        }

        get(options, callback = () => {}) {
            switch (this.getEnv()) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Shadowrocket":
                    $httpClient.get(options, (err, resp, body) => {
                        if (!err && resp) resp.body = body;
                        callback(err, resp, body);
                    });
                    break;
                case "Quantumult X":
                    $task.fetch(options).then(
                        (resp) => {
                            const { statusCode, headers, body } = resp;
                            callback(null, { statusCode, headers, body }, body);
                        },
                        (err) => callback(err)
                    );
                    break;
                case "Node.js":
                    this.initGotEnv(options);
                    this.got(options).then(
                        (resp) => {
                            const { statusCode, headers, rawBody, body } = resp;
                            callback(null, { statusCode, headers, rawBody, body }, body);
                        },
                        (err) => callback(err)
                    );
                    break;
            }
        }

        post(options, callback = () => {}) {
            options.method = "POST";
            this.get(options, callback);
        }

        log(...args) {
            this.logs = [...this.logs, ...args];
            console.log(args.join(this.logSeparator));
        }

        logErr(err, msg) {
            this.log("", `❗️${this.name}, 错误: ${msg}`, err);
        }

        msg(title = "", subtitle = "", body = "", options = {}) {
            if (!this.isMute) {
                switch (this.getEnv()) {
                    case "Surge":
                    case "Loon":
                    case "Stash":
                    case "Shadowrocket":
                        $notification.post(title, subtitle, body, options);
                        break;
                    case "Quantumult X":
                        $notify(title, subtitle, body, options);
                        break;
                    case "Node.js":
                        break;
                }
            }
        }

        done(result = {}) {
            const endTime = (new Date().getTime() - this.startTime) / 1000;
            this.log("", `🔔${this.name}, 结束! 🕛 ${endTime} 秒`);
            $done(result);
        }
    })(t, e);
}