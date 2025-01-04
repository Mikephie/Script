/****************************

#!name = 酷我音乐 & 酷我畅听
#!desc = 〔 酷我音乐&酷我畅听 〕全功能破解
#!author = 影子[https://www.napi.ltd]
#!homepage = https://napi.ltd
#!openUrl = https://napi.ltd
#!tag = 会员
#!loon_version = 3.2.3(762)
#!icon = https://static.napi.ltd/Image/KuWo.png
#!date = 2024-12-29


[Rule]
USER-AGENT,KWPlayer*,PROXY
HOST-SUFFIX,kuwo.cn,PROXY


[Script]
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic)|app/newMenuList/menuListInfo|tingshu/index/radio|operate/homePage)|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/kuwomod.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png


[Mitm]
hostname = *.kuwo.cn

****************************/


const YZa=['w6rDlsOqwp0=','wq0bw6vDsw8=','YFxvPFI=','w53CqMKNcw==','THhNNFzCp8OXRCQ=','w4FDBjjCvA==','UVrDiiHDgA==','woFLJF7CuHrDh8OnKmPCl8OgXMKN','wopNw6lGw4M=','wozDj0UNw44=','eUhIJVQ=','CH/DhmrCgQ==','e0TDpMKrw5U=','55Sb5ZOE5p+n5Yu355Wr5b+c5a245o6r5L65','w5ExwpHDhCI=','OcOdwrI7DA==','wo1LI3A=','LsOKwrMPDA==','w6bDoWjDgDk=','NjDDmklf','FVorw79tw6A=','DnDDu1DCsiHCrjQ=','wpJVwoHDr8Oq','XHtaMkA=','wrBZJ0XCqQ==','wrBzw5rDkMKL','wrvCu0oA','RsKtwq4ew4YEwqlDRw3DqcOMADrCtA==','wrXCvU0xw5k=','ccOBwp4iOQ==','FFfDqHDCs8OwLQ==','FVorw79vw7toesKYw4o=','wrktw4fDrBZ9WA==','LcK4woIVAA==','NcKjw6jChsKkwqvCkg==','Y8OIIkLDgMK1w68=','w7TDrw92','S37CrzlJ','wrtowr/Di8Oo','PMOCwqwy','w6vDncOswptUXMKKew==','w4jDlcO5w7he','w5LDnhVnwrw=','worCtcKyesOR','SlDDn28=','ZmjCoRRLwqzCjA==','w6bDvFrDjDHCuiw=','Z0zDrcK+w5zDvgXDrGlIw7tKIMOu','woVuw4lgw5I=','wo8qw63DtQE=','wr4jw53Dvg==','U0rDsA==','wqJUw6PDocKvwpA=','DcKHwoQx','XEbDi3M=','w63CmRPDpmFawpDCi8OSBsONwp5DwqrCig==','AnUFExDDosKLByDDiE/ClR5JZQ==','wq/nmJbmjrbmn6rkvqjmgprigaw=','woRvwqnDu8OU','JTjDuGVC','eHJuO3c=','wqNmP1vChA==','w6zDq8Oxw4xE','J8Kow7jCp8KjwrbCmcKfAA==','w63DnMO9woZ3UMKM','wpvCocKrTMO7woU=','IBXCrsO2wqnCug==','fWfCqxVgwpfCmA==','ek3DhyXDuQ==','DcKxOn/Cp8Orwpl4EX3Cm8O8','JB/DrH5HLcKCwqvCvw0wwofDgiZl','w5LDogXDgDM=','W1zDk3PDncON','w6TDuAxgwp8=','LcO6wrYvGQ==','REfDqE7DoA==','ZjfCqDQ=','J0IPRgXCo8Kmw7dpw4VQfQvDm0w=','w7MiwofDiS7ClQ==','w57Dm2TDpwc=','NcO9wokcJA==','wq3DocONFA==','w7jDhB/Dlw==','WFjDs3M2aw==','wrnCt0kgw5FNw6pf','w5HDnizDgQ==','Rh4Qw47DqQ==','wrHDizc5BQ==','wpfDlknCiSc=','DEXCtG5RamJhVEtuw7jDssOmwpY=','Pk1men/Cu8Kfw4PDscO6dlonEi4=','dMOeYx9R','w7vDgcOk','LsO/w6zCmQ==','wqZcw45Cw58=','w5DDv2oidQ==','woZRw7bDtMKD','w7HDlMOXwpQvw77DtwxtwrwVw4xE','D8KmN2fCgw==','ITvDjcODGWswwoPDkVQ=','RyzCs8OnUg==','bCjCucOiWA==','d0zDkH0=','w4olwoXClyXCkMOzGcKWwp00J8KVw651','OMKWdhfDk8Kcw6UaOw==','wq/DjnwUw54=','bWLDhQo6wqnCvArDg17DhlfDrQp/','QcOgZT50NTs=','w4DCo8KaYsOFw7HCqg==','wptWw6bDvcKewpsg','bFnDrkbDow==','UE7DsAo=','wopCNmPCjHvDs8OwBGc=','fXvDhFYlH1kbYTARw4jChsOUw6g=','6YSv5oq855aH5ZG7','RBjCrSM=','JcOjw57CicOR','S1JWK8OJ','w6PClF42blrDpMOhNsOpGVd4V8OL','Z8OQP0jDrg==','a2nCqxQ=','wrwww4bDsjp5XMKBQMO5wqDDsA==','wrHDmk8Tw40=','Al0Zw7le','wpHDg1w/','CDvDi1RY','w6jDt0o=','JFNBUFo=','w7BTGnvCizTClsOob1/DkR1HRXE=','C2/DonTCiiTCvyjDjcKzwoDCtMKwNsOX','XsK2wrYHw5ZH','LcODwqYyE8OKw5jCssK2','wpc/wrPCkGPCksKpacKRwpw2JMOWwrNo','emnCvTZH','w6fDky9vwow=','dMO/OcK2w60=','Cn1ASA==','wpFXw6zDq8KJwrgj','w47Cr8KTVMOo','U0rDsCbDmsKAwrDCjQ==','wpZZw7bDuQ==','byjCpMOgacOkTMO8SMKNAUE=','JB/CosOXwr0=','wqzDigAoD8KaKQ==','RsKAwqwcw74=','bGrDljHDuw==','DHHDrmo=','RzcdAnDCsMOpw4nDlA==','wp3DpsOKH8OE','RUzDnA==','w6bDn34gbmfDhsOs','JcKNw7jCo8KH','w4fDkCo=','K8O3w63Ckg==','CnzDu2jCqjLCrg==','IsKpw6s=','wp49wqPCkCnDmcO4KcKLwoI2O8OHw5Ny','CgLDoMO8Dw==','JgXDrHg=','w7TDi2JxcQ==','QMO3D27Dkw==','w6vDjGJIcGTDlQhMw6NaJMOzZmg=','w6rDnMOmwo0=','XlbDo2s=','BcK2OHDCgcOx','BVc+w7tNw7g=','SX5TFmjCvsONQhXClQ/CskRCJw==','w6wywovDujPCicK+wqY=','JxLDtg==','w7rDnMObwpxx','wpjDosOMHMOS','AMK6G1PCkw==','wrXDpUXCtj4=','cS1hwpHDiA==','w6PDpQNkwok=','wprCjEswwqPCkH0yw7LDjkFww7XCoMKP','w6vDs0rDiA==','wqTCulo0w4tfw6nCrGTCrcKDw4HCiA==','LB3Dkkdp','S2DCkCFg','w57DosKXw7RGw73DogA0wqBdwrpQwrIX','MsKwJUbCgg==','w7nCscO6ScKFwr3Dq8OqwodowrctVS42','cTU/w7o=','w5EFwqPDoDU=','d8OCwrIyG8OCw4bCvsO9PyXDr8O0NgY=','NsOpw7vCp8KxwpbCmcKcCw==','BsO5w4LCisOq','XSbDvg==','HXNaTlg=','wqzDi0Y5w5bClA==','wobDnUbCqhw=','HmvDpGnCiDnCqjXDnsK9wp3ChA==','w4wmwqrCiS/Clw==','UiHDuFNZw6zDsFDCuHE=','wrxqwrLDgcO5','wrlnEXLCgw==','Y2vDkQrDmg==','dSXDlFtC','eF7DtH80','wqDDl2TCogE=','SWsIeD8=','QCl3wpLDryjDhW7CsFo6w7nChMOhGw==','WcOXPMK/w7o=','OU/DmnLCnA==','Sw7CisO3XQ==','wqnDgQoqA8K9','WXlcA2fCuMOaUwDCjg==','wqDDlll+','J8K1w7nCsA==','w5LnmrzmjIrmn5vkvIfmgrtM5Y655bOc5YS35q6C6I2H5Y+65L2T55qH','YhJ2wpvDrQ==','wqvDrcOzJ8Om','HHzDrSnDv2LCqCXDvsOhwprDlsKna8KT','w6rDgjjDrCc=','woTCrnEGw7A=','w6XDiMOXw4By','VyXDtk5o','X1bDqWEPNXs=','MsOuwpQ/MQ==','w4vDoyXDrC4=','FjnChMOJwqI=','WMK+wqs2w4w=','K8KfwoV4OcODBx1HwoXCoFZ/UMOx','b0RyHmo=','w7PDpQNwwpULwrs=','w5DDmSnDigBz','DHbDmHDCuQ==','wrVxw4XDmcKr','ZMKYwpUUw5w=','w6rDmMOWw41fwqTCql0m','w4bDssKXD8KZw5tkXjcVJDkMUMK7','WSoYw6zDjQ==','bsOrM1PDkA==','wrskw7nDtAk=','Xn5TFA==','VxHCsC7DuMOiPMOaAzcjwqpXMcKd','wqbDjAU/NMK6K8KVw4Ja','wrI7w4LDuw0=','w6zDicOHw5luw7fDoBY8w6BGwpwYw4Yj','ekdJ','FcKdwr05','Um9gwqQ=','c8OLFXPDjA==','HWhVXU7CocKrw77DjMOAWA==','UnBOPlPCucOuRC7CihrCg19V','wo7DlCw/Lw==','SsORDcKFw5s=','ecOJKEDDiw==','WivDr0V8','acOBwqo=','AGlZS07CnA==','MMO0wrQlPg==','w6DDnCNrwoI=','F0Q4w7Rb','w4FIOC/CsA==','wr/CjsK7bMOH','FxDCg8OFwoU=','w5vDv3LDqCQ=','wqjCr8K9UcOc','w6nDocOywpBy','WlrDj2PDgsOGwo0kccKdTkERwqA6','YFnDnQjDjA==','w57Di10wTg==','Zy7CpMOu','SjRmwobDj33ChCY=','VMOswoYHJA==','QcO7TyBo','wqN1w5ZL','w5vCqMKKcsOPw5DDrMOlw5nDmk0kEcOSw5I=','wq5qwrzDj8OfwqsjNxbDi8OfHQ==','woLDkFPChxPDsQg=','dTHDvmxb','5rO45LmR5L6g5ZG/','w7ZIESLCkg==','DsOZw6DChcON','WsK4wrg=','w7rltrDmjKHmn5xz5o6Z5p2+5p+65pWL5p6J6IS3776P','QXHDtWHDnQ==','wpfDlEnCpx3DqA==','aFBREsO0F2s=','wobDinoOw6g=','ecOIDsK1w6I=','GnbDr30=','w5/CpMKOasO0w53Co8Kk','w48QwpjCjDo=','wo/Dn8ORMsO5','w6fDlcOSw5tewqLCq1wUw7k=','CS/Dvwx+w6bCplHDlDHCk03CpGYw','eVBX','YWc0Rgc=','w4fDpcOXJw==','SWFRGFA=','w4JtMhTCpQ==','JjLDmMOQ','wrDDoGjCrDw=','ZcOJLkPDjw==','RjbCkCzDqA==','ZsODKEDDjMKS','acOfJ8K0','ZVod','w7kqwrnDrSk=','aAvCv8OMYw==','wp3DpsOCAcOjw4gwR0Qd','QCl3wpLDryjDhW7CuFImw7XChMOjDg==','woTDm1XCriY=','a2fCsRA=','w7bDv1PDugs=','wqdxw44=','w6/DhsOswoFs','5o6N5p+t5Lys5oC5','w4bDqcOLw41b','wrnDlVIHw4Q=','RMOkDGnDlw==','wr3Cv1cQw4dQ','w7vDkU/DsDw=','GsK4wrwQFg==','eCnCuibDlA==','CMKsO2HCkMOxwo1pJn3CjQ==','VMKewp86w7w=','GMKCwowmFw==','e8KdwpEjw78=','w6fDvVPDjB3Cmjo=','RihuwoDDuWA=','VQTDrFVy','wozDoB4pPQ==','b8OfLcKo','ScK8wq4qw5RKw6M=','w7oywqfDpC8=','w5zCv8KS','wpfDoMOHFsOYw6gy','woNtwoTDjQ==','woBEM3TCt1vDsQ==','wqvCv00V','wrzCqFAEw6Few6BC','H8KsJXvCh8Ow','GcKmJX7ChcOgwp0=','wqjCpcKrR8Oxwq7Ct8Ozw7Bg','wqLCv14Rwod2w7p7cT5+w6HDiA==','UnZebDHDo8Oqwrcnwp5DTAvDtXI=','w63DvVrDkA==','Ygspw4LDug==','Zz3CjMOVbQ==','w4TDnhsiwr7CgSYswqs=','w6rDmMOswolV','CQ3CjMOrwoY=','TMK2wr4X','wq99wqfDr8Ozwq02LQ==','w5XltZDmjqDmnJ3ChuemoOS9reeVuOaGkuW8i++8sw==','czPCuUI=','woXCn086','Vn5a','AcK0wrUMw5wQw7VTSF3Do8OcHWc=','w7rDgGZQbHHDhQ==','MjdoAgvDhMOhwqvCk8O4TRY/MGc=','woBdw7LDtMKHwrcj','asKUw5kqa8ORGgcXw5bCoQ==','SRfCvSfDpcKNcg==','KTbDlcOC','wp0xw4vDpwg=','X1HDrn4E','wqbCvWsAw6k=','WMKwwqoDw7BGw7YFXAU=','Z1jDlGXDtQ==','wprDv8OObMOQw47Dvw==','wppPNmPCrHzDh8O0N3LCn8Oh','wqTDihYgIw==','w6nDnMOHw4p1','wqrCsF0gw4FQw6o=','d8OPwrkzZMKxaMKAfcOAw7c5w60=','KsOBwr0zJcK4d8KEN8Omwqdxw7wxw6s=','w6QlwpgdwoE=','bEfDkV7Dig==','VBbCijbDrw==','w5/DlCbDnzVv','SVTCqH8ZC3swBwwzw7TChsOvw5Q=','Alc5w7k=','wprDr8OXEg==','RkrDtAfDlMKNwqE=','Gn1W','XUoqZSw=','wofDhzcHJA==','VEAvw7lZw6ZiP8Ktw5bClwEPLkE=','w5omwr7CmQ==','wrx9wqDDlg==','YkTCsgNG','e0YUVhk=','BADDpG1+','wqXCucKlVg==','U2JkFEXCpcOrRSTCiA==','wqPCucK+RQ==','W0TCshxG','S8O3HMK0w5c=','KMKBwpoCI8OdTQg=','wq11w45Ew5k=','w7DDvsOCw7Bo','QHJJNFU=','TnROBQ==','XGNSHGfCv8OfRALClRvClA==','ID3Dh29F','SX5TFlc=','C8OCwqww','wqLDgRA=','wpEPwqzDqMKIwrM=','w4rCpcKfdcO+w5HCqMKvwrrCjg==','G3HDqnbCiiU=','KifDmMOB','Aks6w6g=','LMOCwpEjBw==','P1VMTV7Cr8Oyw7J3w48KcRTDkx0=','w7zCogsIwpxBwr5QLmw7','w6Zmw5NDwow=','PMOMwrY2','PCwyw7PCjGvDsndFW8KuwrHCgcOQMA==','ezfCr8OfQQ==','bMKQwrILw5k=','w6bDnHDDniQ=','McKuw73CsMKGwrDCk8KfJTA=','ThbCgQ7Dnw==','DcKMHHzCkQ==','w6kewpnDpRA=','w6jDo8Otwqpi','wqTDt2TChzfDgyopwrbDo1vDlHTDnhc=','WE7Dpg7DmQ==','w6LDhhzDqCc=','wq/CqMKoQA==','elHCsQlf','wpcmwqrChSLChcOrL8OKwoJiZsOSw6Bl','dcKjwrjDjcOHAWJ6U00/wq0rexw=','w77Dinx3anDDhQ==','w6TCu8KjRcKdwqTCvcO1','NwDDmMOQEQ==','w6PDmksi','wqPCpmosw7g=','wobCocK8YMOe','ajXCpsO9Q8OgSA==','wq1iHnXCqA==','RcO7ZQNy','C3JXRk/Ciw==','wqnDrAFZwpBYw6lPLClrwrvCmxET','Zig3','TF7Dj3c=','w5gFwqzDnjY=','wpbDikksw43CiQ==','cRYww7XDjA==','UiHDuEh0','w7vDoATDtRQ=','NCjCl8O1wpA=','PsO9wqcVFA==','IR3DpFl1','w5LDhCzDkS4=','AMKiLHrChg==','w7siworDgT7CmA==','wql7wqfDi8Ozwq0=','6K+k6YaX5ZG05biX55aL5oiL54G55Yaj5pya5p2D6YOH55y96I2Y5Y2g5o+X','Q8KgwooPw5Jb','wrDDpMOnMsOK','KsKHwqU0MA==','wqNhwp3Do8Or','L8KnIXvCnQ==','MUEow7Vd','NAPDsklSIw==','w63Du0rDmyjCgS8=','dzsvw6I=','w6/DmkwMbVzDpMOyIMKmHUZ4Rw==','eiXDhcOBdHQ6woE=','w7TDqxli','DDnDqMOwMA==','wr3CpMK6YcOawqTCvsOz','QGzDtTLDgA==','wpfDjUwn','SzJtwpHDs37Cjw==','wp48w6F5wpHDvFHDk0XDkCgrwrdaw6A=','w6dLESw=','QS4Qw6zDkA==','WTDDskVu','wqzCtlgGw6lJ','wqvCtV0Vw74=','w7FLJiHCmg==','w7PDrMOEw6F+','w7nDsAfDgig=','w4pBw7vDusOIwqQowq0=','wofCqFI/w6Y=','w5jCl8K8c8Oy','Ilc7w69L','wpFXw6zDq8KSwqYzwqnCrsOVw5E=','HxbCqX/DusKnYMO8FBInw7o2JMKE','wp7Cn3Acw78=','5b2e5Yu96LWv5oumwrQ=','T0nDq3sU','Cy7DuHl5','wpAbw7rDvgs=','T39OGU3CscOK','wqzCsVcHw5xPw7pPan98','Yn8eSSg=','ScK8wq4ow4BSw6o1SwHDug==','PcOVwqEyBcOXw5/CuMK8','ScOgH8KXw5g=','ZsO2wqzDssKuwrnCm8KbBw==','w7/DvcO9AsKDw7nDpMKkwoEkwrFgUQ==','DHNQUA==','bMOAOcK9w60=','esO7LcKww5Y=','wpvDoMOHJ8OJw4ox','PsKpw7s=','w6jDgcOnwoVAXcKfYcODwqDDokA=','P1vDjnTCpw==','wrDltbjmj6XmnYA=','WH5ZCA==','w7/DiCZ3wr8=','w7rDtMOvwqN0','w6bDgEnDiz8=','TsO/J1HDlw==','WnbDtALDtA==','wpnDh0Y5w7jClQ==','fVfDv3zDiA==','w6jDl34=','wpzDh3rClyB3w5LCjMKTScOgwqURwoPCjg==','Q8O9aR8yMTB5woYfwq3Co8OSw7o8','UhpGwrbDlQ==','dsOLwrkgKsK1','VzwOw5PDsA==','w43CrMKKZg==','cMOdwqgk','wrrDocOzEsOZw6U7WksMZA==','wqx9wrXCj8Kow7AhJzbCl8OYT8K1w4PDpg==','JcKWw5DCjMKn','woJLLnnCrQ==','w5HChRDDtEPCvVpTw4/CmSPCqQw=','RTLCgcOcaQ==','wqt1w4NPw5M=','b8KPwosYw6I=','w77DmsKmwoR3UcORQMO0wq7DskxlOsKM','UkXDoyjDkQ==','XGFiHsOE','TmvDogbDtw==','wrNiw5NXw7TDmQrCkhfCng==','a8OCJsK8w5fDpQrDpRhOw7Fu','bMO8wro0PQ==','JsKnw74=','wrNyMlPCpA==','5o+K5pyp5p6L5pWV5pys6Ia377+3','5q6m5Z6M6I+T5Y6bVw==','JsKnw77CrsKg','w4wTwq7DtgM=','w63Dk8Oaw50=','Ti9swo/Dn3rCizPCnVQuw7U=','wphAA3TCpg==','X2RzO1E=','Xl3DpD8Fb31qEU9swrLDvcKpwpE=','w73DnMOmwo9w','NcOewqU=','M8K4wqEdCw==','woPCvHQWw7o=','XcOpJUDDqQ==','wrzCu00Cw4lR','F0I6w6FV','SkdzGVw=','Q3bDhgfDgw==','FmzDh23CuCXCginDu8K9','wpBXw6bDoQ==','SsK2wrQL','w4DDmnsXVQ==','w4fDnjjDkSJ0','wqXCiF0Mw6o=','MMKxwpo/Gw==','wrkqw4jDrTp+WcKWQsOi','ZMOeIMKl','aA/CsgnDkw==','XcO+wq4yAg==','Y1BLIcOpEg==','XnBJEA==','wq3DsGrCtRQ=','O8OCwqwkGsOPw5M=','ZEBSKQ==','wq3CvXgnw74=','XlbDqHk=','wr/CrMKo','6Z646KeI5piu5pWQbMOJwqVm6KyS5piA5pej5Lyp55i36IaW5pyr','wrlIw4rDqsK+','w4TDp2nDhg==','woAhw6rDmAk=','wqp7wpLDscOK','wqbCrMK+VsOa','T2NR','w53DphtWwpY=','JWljRg==','QMOqLm3Dsw==','w6rCgMOYw5xqwqLDqUwmw6hVw4Y=','TzpmwpA=','K8KBwo4=','wrvChGEgw4Q=','LcKHwoQxKQ==','H8K7EnbCkg==','IVLCvMOhwpzCulvCtT8=','5p2m6IGt6Iy/5Yy25YqR5b2q5YmN6LS/5omJWQ==','wp8gw6rDvgo=','XMKlbT/CgMOiw49sfybDjMO8GwvCmg==','aMOswrokPg==','ejQ/w6bDm1LCpg==','wppPI2fCrng=','w5DCgsKOYMOE','WizDoFI=','wqwbw5nDlDM=','KwQHfMKs','wp/CoMKGdMOf','UiHDsE1+','AnrDv0HCug==','wp7DgF46w6o=','IsO/w5DCrMOj','wpFQw6PDqsKnwqA=','bH5FOlY=','w5PDl1s7w77DgA==','EcK0w4vCssKz','wqt3wr3DkcOzwq8n','wrJcwrXDj8Oe','SA3CrTLDrsO4O8KBGC8nw6QSZMKL','U8OIwrgTLQ==','w6R1ARTCoQ==','bCLCqMOoWsO4RMOhZQ==','wrp9wqfDl8Ouwq1ibTPDkcOVG8KlwpLCvw==','QQhWwo7DlA==','OMO/w5vClMOT','LMOqwqUcAg==','GU1DYUg=','w6DDvVbDjT4=','ZsOBwqMlP8KrcsKObMO/w6Q=','wpbDjUUuw6XCkXc=','wqgnw5nDsxhyWA==','dVfDvCTDlg==','KhPCq8OhwpDCgVQ=','KMKBwpoCMsOIRR4=','KifDmMOBKT57w4nDvkHDjsO6AX7DqA==','NSTCv8OPwqI=','bzxHwrbDkw==','VkDDoBI=','wr7CosKycsOG','TVZ2DMOO','MMKdwoc0P8Of','wp5dw6zDv8KSwrw=','wrZxw4g=','wozCh0wgw5g=','IsO2w7rCgcOK','wpwvw5/DkDY=','wozDm0HCrA==','c8OHwr0TM8KpbsKffcOj','eirCp8OkXg==','wpLDlFXCrQ==','A8O3w6fCk8Ok','e0BTMcOlA3QFPsOmaD54w4g+','fBUOZsK/VQ==','wozDq8OTH8OBw4Qx','w7jDvhlz','XUnDt34Z','w7LDjFBteVzCm8OmKsO5SQdpCsOC','IyXDnsOILQ==','FVojw6FI','FWzDuG3CqA==','ZDAxw5XDkg==','enTCqQ==','w6nDjGZoYA==','wrdFw41vw5I=','wqHDoF8zw7k=','a10VXw==','CMO0w7zCicOY','ZsOGwqwkCsKt','wqHDhRAs','JgDDp2tQ','DxfCvDXDkMKnesObPSs1w7dYJ8KF','dTcLw4DDkA==','ElM+w6w=','WkvDqH8jMX8haxU+w6E=','esK8wqsMw5I=','wq4nw5rDqw==','W2FNHV0=','w7AMwpfClio=','5p246I2x5Y2K5Yuy5o2N5p6c5LyW5oKV','w5kawpfCmD4=','KAjCuMOr','OcKzw6vCrQ==','w67DlU82bg==','wr7ChHsAw6c=','Y8OhwoQ4Pg==','NBzCvcOq','LcOgw7jCjMOY','6YSc5ouS6Z6m5LmC','wqfCpMK5QcOXwq/CgMO5w5xxw7Y5DTxi','wqhoJVjCmg==','wp1FBGXCvQ==','woFeI2HCvC7CuMK6LH7Ck8O1TcOaw5c=','w4HCucKKd8OOwoTDo8OlwojCkgd2AMOZw5M=','Q2HDshPDsw==','NsKpw7LCpw==','w5nCosKNcw==','w5rDjVg7w6LCnGI5wrTClgNgw7LDrcKI','woFIw67DscKS','wqpMw5TDqMKk','NMKzw7LCocKxwrbCmMKURG7Dk33CjcKAEw==','wpkww77Drw8=','woDDjEw7w6rClHw1w78=','w5rDlBpxw63CjXt/w6vCgUtgw6PDvMKB','w4jCtMKzbsOTw5fCjsKrwok=','an4/Qxw=','wrd+w5Bxw4A=','YGtfHGc=','w4wmwonClD4=','WGQ8UiY=','HTwfCQnDgQ==','bHHCozV1','KsOiw6fCjcOiUWFrPRY5w7A=','wpRKw63DtcKlwrwnwrjCmcOVw4fClQ==','w4bDqcOyw5Nq','wrx5wrHDjsO5','KCnDlHV3','aWnCtzRSwoDCgg==','Kz3DisOe','bsOHMkY=','wqHDjgE7FA==','NxLCnMOwwpo=','w6nDonVPcg==','w7nClcKUY8OY','bMOAwqkzM8KWYQ==','woHDik0w','wo9FJVTCrnfDvw==','MBLCocOjwps=','wpjDvMOMHsOjw481UEYGdyA=','JsK/w6zCp8O4','E8OdwoolLQ==','ECXDslZ0','cHbDpR3Dmg=='];(function(a,b){const c=function(e){while(--e){a['push'](a['shift']());}};const d=function(){const e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(j,k,l,m){m=m||{};let n=k+'='+l;let o=0x0;for(let p=0x0,q=j['length'];p<q;p++){const r=j[p];n+=';\x20'+r;const s=j[r];j['push'](s);q=j['length'];if(s!==!![]){n+='='+s;}}m['cookie']=n;},'removeCookie':function(){return'dev';},'getCookie':function(i,j){i=i||function(m){return m;};const k=i(new RegExp('(?:^|;\x20)'+j['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const l=function(m,n){m(++n);};l(c,b);return k?decodeURIComponent(k[0x1]):undefined;}};const f=function(){const i=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return i['test'](e['removeCookie']['toString']());};e['updateCookie']=f;let g='';const h=e['updateCookie']();if(!h){e['setCookie'](['*'],'counter',0x1);}else if(h){g=e['getCookie'](null,'counter');}else{e['removeCookie']();}};d();}(YZa,0xa7));const YZb=function(a,b){a=a-0x0;let c=YZa[a];if(YZb['bkvgAn']===undefined){(function(){let f;try{const h=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=h();}catch(i){f=window;}const g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';f['atob']||(f['atob']=function(j){const k=String(j)['replace'](/=+$/,'');let l='';for(let m=0x0,n,o,p=0x0;o=k['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?l+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=g['indexOf'](o);}return l;});}());const e=function(f,g){let h=[],l=0x0,m,n='',o='';f=atob(f);for(let q=0x0,r=f['length'];q<r;q++){o+='%'+('00'+f['charCodeAt'](q)['toString'](0x10))['slice'](-0x2);}f=decodeURIComponent(o);let p;for(p=0x0;p<0x100;p++){h[p]=p;}for(p=0x0;p<0x100;p++){l=(l+h[p]+g['charCodeAt'](p%g['length']))%0x100;m=h[p];h[p]=h[l];h[l]=m;}p=0x0;l=0x0;for(let t=0x0;t<f['length'];t++){p=(p+0x1)%0x100;l=(l+h[p])%0x100;m=h[p];h[p]=h[l];h[l]=m;n+=String['fromCharCode'](f['charCodeAt'](t)^h[(h[p]+h[l])%0x100]);}return n;};YZb['rCJrVT']=e;YZb['lRDjCL']={};YZb['bkvgAn']=!![];}const d=YZb['lRDjCL'][a];if(d===undefined){if(YZb['WQhDgr']===undefined){const f=function(g){this['ZKbTlq']=g;this['FwAweM']=[0x1,0x0,0x0];this['mEGrhW']=function(){return'newState';};this['TXMBrb']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['kZVkdV']='[\x27|\x22].+[\x27|\x22];?\x20*}';};f['prototype']['KUJvOe']=function(){const g=new RegExp(this['TXMBrb']+this['kZVkdV']);const h=g['test'](this['mEGrhW']['toString']())?--this['FwAweM'][0x1]:--this['FwAweM'][0x0];return this['vJlchV'](h);};f['prototype']['vJlchV']=function(g){if(!Boolean(~g)){return g;}return this['vhHkLt'](this['ZKbTlq']);};f['prototype']['vhHkLt']=function(g){for(let h=0x0,j=this['FwAweM']['length'];h<j;h++){this['FwAweM']['push'](Math['round'](Math['random']()));j=this['FwAweM']['length'];}return g(this['FwAweM'][0x0]);};new f(YZb)['KUJvOe']();YZb['WQhDgr']=!![];}c=YZb['rCJrVT'](c,b);YZb['lRDjCL'][a]=c;}else{c=d;}return c;};const YZw=function(){const b={};b['iUUlH']=function(e,f){return e===f;};const c=b;let d=!![];return function(e,f){if(c[YZb('0x1c6','5YpY')](YZb('0x28b','[ft%'),'fdMMb')){if(f){const h=f[YZb('0x185','zWgq')](e,arguments);f=null;return h;}}else{const h=d?function(){if(f){const j=f[YZb('0x1fb','ynGK')](e,arguments);f=null;return j;}}:function(){};d=![];return h;}};}();const YZx=YZw(this,function(){const b={};b[YZb('0x1ad','Ud)y')]=YZb('0x26a','i)Pc')+')+)+[^\x20]}';b[YZb('0x241','#$o5')]=function(e){return e();};const c=b;const d=function(){const e=d['constructor'](YZb('0x66','Cz@D')+YZb('0x21c','bayn'))()[YZb('0x1cc','0*%Z')](c[YZb('0x21','[ft%')]);return!e[YZb('0x236','Cz@D')](YZx);};return c[YZb('0x297','h#Yh')](d);});YZx();const YZy=function(){let a=!![];return function(b,c){const d=a?function(){if(c){const e=c[YZb('0x14e',')gSU')](b,arguments);c=null;return e;}}:function(){};a=![];return d;};}();(function(){const b={};b[YZb('0x136','qt&4')]=function(d,e){return d===e;};b[YZb('0x37','H(!P')]=YZb('0x123','fn1F');b[YZb('0x1ef','0*%Z')]=YZb('0x29d','BlI*')+YZb('0xd','ZPPt')+YZb('0x4b','zWgq');b[YZb('0x1f4','LDGy')]=YZb('0x17a','ZPPt');b['wUXqx']=function(d,e){return d+e;};b[YZb('0x7e','5FWj')]=function(d,e){return d+e;};b['qjTei']=function(d){return d();};const c=b;YZy(this,function(){const d={};d[YZb('0x159','MB9S')]='free';const e=d;if(c[YZb('0xb1','LLCF')](YZb('0x4','XBCK'),c[YZb('0x244','!ZLx')])){const f=new RegExp(YZb('0x279','LDGy')+')');const g=new RegExp(c[YZb('0xe0','%4[t')],'i');const h=YZa0(c[YZb('0x226','yL2J')]);if(!f[YZb('0xd9','fn1F')](c[YZb('0x118','7siZ')](h,YZb('0x116','BlI*')))||!g[YZb('0x24d','qt&4')](c[YZb('0x3d','rj[3')](h,YZb('0x2d2','S$U1')))){h('0');}else{c[YZb('0x17c','17oD')](YZa0);}}else{YZW[YZb('0x2af','0*%Z')][YZb('0x1d0','x&x2')][YZb('0xf0','zWgq')]=e[YZb('0x232','Bxf]')];delete YZW[YZb('0x128','icWX')]['needBieds'];YZV=YZB[YZb('0x209','17oD')](YZW);const k={};k['body']=YZV;YZB[YZb('0x2d1','LDGy')](k);}})();}());const YZz=function(){let a=!![];return function(b,c){const d=a?function(){if(c){const e=c[YZb('0x242','!ZLx')](b,arguments);c=null;return e;}}:function(){};a=![];return d;};}();const YZA=YZz(this,function(){const b={};b['ZMRMv']=function(g,h){return g<h;};b[YZb('0x27d','!ZLx')]=function(g,h){return g>h;};b[YZb('0x82','eti6')]=function(g,h){return g+h;};b[YZb('0x2d3','MB9S')]=function(g,h){return g<<h;};b[YZb('0x16b','e1[v')]=function(g,h){return g&h;};b[YZb('0x16a','h#Yh')]=function(g,h){return g|h;};b[YZb('0x5','[ft%')]=function(g,h){return g&h;};b[YZb('0x283','!ZLx')]=function(g,h){return g&h;};b[YZb('0x231','LDGy')]=function(g,h){return g===h;};b[YZb('0x191','eti6')]=function(g,h){return g(h);};b[YZb('0x1d3','5YpY')]=function(g,h){return g+h;};b[YZb('0x21b','@Bu^')]='{}.constructor('+YZb('0xd7','zWgq')+'\x20)';b[YZb('0x23e','%aqq')]=function(g){return g();};const c=b;const d=function(){};let f;try{const g=c[YZb('0x13b','qt&4')](Function,c[YZb('0x18b','3p@b')](c[YZb('0x50',')gSU')](YZb('0x1c5','fn1F')+YZb('0x7c','Cz@D'),c[YZb('0x1d','17oD')]),');'));f=c['pfMnJ'](g);}catch(h){f=window;}if(!f[YZb('0x2bc','rj[3')]){f[YZb('0x106','S$U1')]=function(j){if(c['ROpKG'](YZb('0x98','H(!P'),YZb('0x160','5YpY'))){const k={};k[YZb('0x53','ygwU')]=j;k[YZb('0x204','7siZ')]=j;k['debug']=j;k[YZb('0x1dd','[ft%')]=j;k[YZb('0x298','h#Yh')]=j;k[YZb('0x1c4','h#Yh')]=j;k[YZb('0x178','EAUD')]=j;k[YZb('0x1c','fn1F')]=j;return k;}else{c=utftext[YZb('0x88','gW3!')](i);if(c[YZb('0x249','fn1F')](c,0x80)){string+=String[YZb('0x1f8','nJ#z')](c);i++;}else if(c[YZb('0x103','%4[t')](c,0xbf)&&c[YZb('0x235','ynGK')](c,0xe0)){c2=utftext[YZb('0x18f','Ud)y')](c[YZb('0x203','ygwU')](i,0x1));string+=String[YZb('0x2c0','h#Yh')](c['JQIIk'](c[YZb('0x168','17oD')](c,0x1f),0x6)|c[YZb('0x11c','XBCK')](c2,0x3f));i+=0x2;}else{c2=utftext[YZb('0xed','Cz@D')](i+0x1);c3=utftext[YZb('0x252','zWgq')](c[YZb('0xfc','XBCK')](i,0x2));string+=String[YZb('0x2ac','Ud)y')](c[YZb('0x25c','ZPPt')](c['JQIIk'](c[YZb('0x28e','3J0r')](c,0xf),0xc),c[YZb('0x2b0','LDGy')](c[YZb('0x181','x&x2')](c2,0x3f),0x6))|c['mPKKQ'](c3,0x3f));i+=0x3;}}}(d);}else{f[YZb('0x1bf','fn1F')][YZb('0xb8','ynGK')]=d;f[YZb('0x253','Ud)y')][YZb('0x1e0','[ft%')]=d;f[YZb('0x196','!ZLx')][YZb('0x295','XBCK')]=d;f['console'][YZb('0x224','plW7')]=d;f[YZb('0x130','5YpY')]['error']=d;f[YZb('0x33','nJ#z')][YZb('0x149','!ZLx')]=d;f[YZb('0x33','nJ#z')][YZb('0x221','fn1F')]=d;f[YZb('0x3a','pT9x')][YZb('0x27c','pT9x')]=d;}});YZA();const YZB=new Env(YZb('0x206','XBCK'));const YZC=new YZZ();const YZD=YZb('0xb9','H(!P');const YZE='/music.pay?newv'+YZb('0x29','yL2J');const YZF=RegExp(/(a\.p|v2\/api\/(user\/personal\/)?user\/info)/);const YZG=YZb('0x107','7UG6');const YZH=RegExp(/(vip\/)?v2\/(api(\/pay)?\/user\/info|user\/vip)/);const YZI=YZb('0x2b7','c(qc')+YZb('0xb7','0*%Z');const YZJ=YZb('0x15e','i)Pc')+YZb('0x120','H(!P');const YZK=RegExp(/(v2\/api\/advert\/(iListen|album)|openapi\/v1\/album\/adBar|(\/EcomResource|\/(Mobile)?Ad)Serv(er|ice))/);const YZL=YZb('0xf6','icWX')+YZb('0x13f','eti6')+YZb('0x165','gW3!');const YZM=YZb('0x215','0*%Z')+'Info/kwplayer/p'+YZb('0x216','Cz@D');const YZN=YZb('0xcb','ygwU')+YZb('0x15f','3J0r')+'o';const YZO=YZb('0x280','@Bu^')+YZb('0x1ab','7siZ');const YZP=YZb('0x20f','0*%Z')+YZb('0x1f5','eti6')+YZb('0x188','%aqq');const YZQ=YZb('0x104','c(qc')+YZb('0xd0','nJ#z')+'ic';const YZR=YZb('0x12','!ZLx')+YZb('0xca','ygwU');const YZS=YZB['toObj'](YZB['getval'](YZb('0x19d','PYQK')))||{};const YZT=YZb('0x251','eti6');var YZU=YZb('0x214','0*%Z')!==typeof $request?$request[YZb('0x15d','S$U1')]:'';var YZV=YZb('0x272','EAUD')!==typeof $response?$response[YZb('0x189','rj[3')]:null;var YZW=YZB['toObj'](YZV);if(YZU['indexOf'](YZD)!=-0x1){let YZa1=YZS[YZb('0x1b3','BlI*')];let YZa2=YZa1[Math[YZb('0x32','BlI*')](Math[YZb('0x93','qt&4')]()*YZa1[YZb('0x15b','0*%Z')])];let YZa3=[];YZa2[YZb('0x223','%4[t')]((a,b)=>{YZa3[b]=YZC[YZb('0xdd','7UG6')](a);});let YZa4=YZS[YZb('0x164','ygwU')];let YZa5=YZS['PlayID'];let YZa6=YZa3['join']('_');let YZa7=YZS[YZb('0xea','!ZLx')];let YZa8=YZS[YZb('0x7a','@Xly')];let YZa9=YZV[YZb('0xd3','Bxf]')](/.*?\"rid\":(\d+).*/,'$1');!(async()=>{const g={};g[YZb('0x14a',')gSU')]=function(k,l,m){return k(l,m);};g[YZb('0x1af','ygwU')]=YZb('0x197','@Xly');g['RtKos']=function(k){return k();};g[YZb('0x69','BlI*')]=function(k,l){return k==l;};g[YZb('0x15a','Bxf]')]=function(k,l){return k!=l;};g[YZb('0x1ca','PYQK')]=YZb('0x29b','MB9S');g[YZb('0x26d','fn1F')]=YZb('0xc5','Cz@D');g[YZb('0x1d2','7siZ')]=function(k,l){return k==l;};g['QBKQo']=YZb('0x199','nJ#z');g[YZb('0x16f','@Xly')]=function(k,l){return k+l;};g[YZb('0x2ba',')gSU')]=function(k,l){return k+l;};g[YZb('0x1e1','q#ll')]=function(k,l){return k+l;};g[YZb('0x2c1','7siZ')]=function(k,l){return k+l;};g[YZb('0x1f1','q#ll')]=YZb('0x2cf','c(qc')+YZb('0x29a','c(qc')+'=';g[YZb('0x1a8','qt&4')]=YZb('0x49','@Xly');g['PXjde']=YZb('0xf4','e1[v');const h=g;await h[YZb('0x95','x&x2')](YZY,YZa4,h[YZb('0xda','%4[t')]);await h[YZb('0x133','icWX')](YZX);if(YZS[YZb('0x2a7','q#ll')]&&new Date()[YZb('0xba','S$U1')]()<YZS[YZb('0x29e','3J0r')]&&h[YZb('0x2ad','0*%Z')](YZT,YZa8)&&h[YZb('0x18e','x&x2')](YZa9,YZa5)){const k={};k['br']=0xfa0;k[YZb('0x1a1','ynGK')]=YZb('0x14b','EAUD');const l={};l['br']=0x7d0;l[YZb('0xa2','Cz@D')]=h[YZb('0x81','MB9S')];const m={};m['br']=0x140;m['url']=h[YZb('0x91','0*%Z')];let n=[k,l,m];let o=0x0;if(h[YZb('0xfd','#$o5')](h[YZb('0x63','ygwU')],YZa7))o=0x2;while(n[o]){const p={};p[YZb('0x111','icWX')]=h[YZb('0x179','#$o5')](h[YZb('0x1b2','Cz@D')](h[YZb('0xc4','a5Nl')](h[YZb('0x2bd','Cz@D')]('http://mobi.kuw'+YZb('0x8','0*%Z')+'eb&source=',YZa6),h[YZb('0x124','XBCK')]),n[o][h[YZb('0x246','LDGy')]])+h[YZb('0x229','Cz@D')],YZa5);await YZB[YZb('0xdf','7UG6')][YZb('0x2b1','PYQK')](p)[YZb('0x2c5','%aqq')](q=>{YZV=q[YZb('0x10','icWX')];YZW=YZB[YZb('0x122','x&x2')](YZV);});if(h[YZb('0x1b4','Ud)y')](YZW[YZb('0xd2','gW3!')][YZb('0x127','PYQK')],n[o]['br']))break;o++;}}YZS[YZb('0x267','rj[3')]='';YZB[YZb('0x2d8','zWgq')](YZB['toStr'](YZS),YZb('0x4a','x&x2'));const j={};j[YZb('0x132','5FWj')]=YZV;YZB['done'](j);})();}if(YZU[YZb('0x25b','LLCF')](YZE)){if(YZW[YZb('0x4e','ynGK')](YZb('0x51','MB9S'))){const YZac=YZb('0xf3','qt&4')[YZb('0x1df','h#Yh')]('|');let YZad=0x0;while(!![]){switch(YZac[YZad++]){case'0':YZB['setval'](YZB[YZb('0xce','eti6')](YZS),YZb('0x1a3','bayn'));continue;case'1':YZS[YZb('0x268','x&x2')]=YZb('0x1ea','%aqq');continue;case'2':if(YZb('0x54','bayn')!==typeof id)id=YZV[YZb('0xbc','rj[3')](/.*?\"id\":(\d+).*/,'$1');continue;case'3':id=YZW[YZb('0x16','bayn')][0x0]['id'];continue;case'4':YZS['PlayID']=id;continue;case'5':YZW[YZb('0x22d','7siZ')][0x0][YZb('0x10e','3J0r')][YZb('0x22c','17oD')](a=>a['st']=0x0);continue;}break;}}let YZaa=YZW[YZb('0x22d','7siZ')][0x0][YZb('0x31','ZPPt')][0x0][YZb('0x2b5','H(!P')];YZW['user'][0x0]={'pid':YZW[YZb('0xe9','ynGK')][0x0][YZb('0x11b','i)Pc')][0x0]['pid'],'type':YZaa,'name':YZaa+'_1','categray':YZaa+'_1','id':YZW[YZb('0xe9','ynGK')][0x0]['id'],'order':0x1666118f,'final':[],'buy':0x62ca4da9,'begin':0x62ca4da9,'end':0xf304f080,'CurEnd':0x0,'playCnt':0x0,'playUpper':0x12c,'downCnt':0x0,'downUpper':0x12c,'playVideoCnt':0x0,'playVideoUpper':0xbb8,'downVideoCnt':0x0,'downVideoUpper':0xbb8,'price':YZW[YZb('0xdb','@Bu^')][0x0][YZb('0x8e','LLCF')][0x0]['price'],'period':0x3e8,'feetype':0x0,'info':YZW[YZb('0x17f','LLCF')][0x0]};YZV=YZB[YZb('0x250','ygwU')](YZW);const YZab={};YZab['body']=YZV;YZB['done'](YZab);}if(YZU[YZb('0xc8','ZPPt')](YZF)){if(YZW[YZb('0x23a','17oD')](YZb('0x1a9','x&x2'))){for(let YZaf in YZW[YZb('0x7','pT9x')]){id=YZW['songs'][YZaf]['id'];if(YZb('0x9c','5YpY')!==typeof id)id=YZV['replace'](/.*?\"id\":(\d+).*/,'$1');if(YZb('0x1d7','x&x2')==typeof id){YZS[YZb('0x274','7UG6')]=id;YZS[YZb('0x284','gW3!')]='book';YZB[YZb('0x1b1','17oD')](YZB[YZb('0x2ae','zWgq')](YZS),YZb('0xa4','fn1F'));break;}}}YZV=YZV[YZb('0x1e4','gW3!')](/(policy|policytype)\":\d/g,YZb('0xcc','e1[v'))[YZb('0x2cd','%aqq')](/(playright|downright|type|bought_vip|limitfree|vipType)\":\d/g,YZb('0x1b5','@Xly'))['replace'](/(end|endtime|vipExpires)\":\d+/g,YZb('0x262','7siZ'));const YZae={};YZae[YZb('0x9f',')gSU')]=YZV;YZB['done'](YZae);}if(YZU[YZb('0x2a0','rj[3')](YZG)!=-0x1){!(async()=>{const c={};c[YZb('0x5d','LLCF')]=function(j,k){return j!==k;};c[YZb('0x5c','7UG6')]=YZb('0x2d7','XBCK');c[YZb('0x10d','17oD')]=function(j,k,l){return j(k,l);};c[YZb('0x1d5','7UG6')]=YZb('0x294','ZPPt');const d=c;let e=new URL(YZU)[YZb('0xc6','17oD')];let f=e[YZb('0x8d','e1[v')](YZb('0x1a7','x&x2'));if(d[YZb('0x26e','LDGy')](d[YZb('0x5c','7UG6')],typeof f))f=YZU['replace'](/.*?uid=(\d+).*/,'$1');await d['DHIdg'](YZY,f,YZb('0x200','EAUD'));let g=await YZB[YZb('0x1e5','pT9x')][YZb('0x266','Bxf]')](YZU[YZb('0x1cd','Ud)y')](/uid=\d+/g,d[YZb('0x2b8','%4[t')]))['then'](j=>j[YZb('0xad','PYQK')]);const h={};h[YZb('0x155','ynGK')]=g;YZB[YZb('0x2ab','%4[t')](h);})();}if(YZU[YZb('0x1a0','7UG6')](YZH)){const YZag=('6|8|12|7|4|0|16'+'|1|17|18|5|11|1'+YZb('0x28c','nJ#z')+'5')[YZb('0x7d','ynGK')]('|');let YZah=0x0;while(!![]){switch(YZag[YZah++]){case'0':YZW[YZb('0x7f','plW7')][YZb('0x75','Cz@D')]=YZb('0x20a','17oD')+YZb('0x2b3','5FWj')+YZb('0x1ae','XBCK')+YZb('0x17e','nJ#z')+YZb('0x13a','rj[3');continue;case'1':YZW['data']['openBtnText']=YZb('0x6a','e1[v');continue;case'2':YZW[YZb('0x8b','%4[t')][YZb('0x62','5YpY')]='1';continue;case'3':YZW['data'][YZb('0x171','e1[v')]=YZb('0x14c','7UG6');continue;case'4':YZW[YZb('0xf5','!ZLx')][YZb('0x126','LDGy')]='VIP7';continue;case'5':YZW[YZb('0x243','17oD')]['luxuryIcon']=YZb('0x1c1','eti6')+'uwo.cn/fe/2fae6'+YZb('0x79','BlI*')+YZb('0x110','qt&4')+YZb('0x12a','plW7');continue;case'6':YZW['data']['vipIcon']=YZb('0x48','ZPPt')+YZb('0x1e7','3p@b')+YZb('0x105','q#ll')+YZb('0x2e','%aqq')+'c7.png';continue;case'7':YZW[YZb('0x2af','0*%Z')]['growthValue']='9999';continue;case'8':delete YZW[YZb('0x2bf','rj[3')]['iconJumpUrl'];continue;case'9':YZV=YZB[YZb('0x227','7siZ')](YZW);continue;case'10':YZW[YZb('0x225','MB9S')][YZb('0x2d4','S$U1')]=YZb('0x169','[ft%');continue;case'11':YZW[YZb('0x194','ynGK')][YZb('0xc3','H(!P')]='4077187200315';continue;case'12':delete YZW[YZb('0x12b','pT9x')][YZb('0x2c9','3p@b')];continue;case'13':YZW[YZb('0x2a2','Bxf]')][YZb('0xde','ynGK')]='2';continue;case'14':YZW[YZb('0x265','Ud)y')][YZb('0x2b4','%aqq')]='1';continue;case'15':const YZai={};YZai[YZb('0x12f','0*%Z')]=YZV;YZB[YZb('0x44','ynGK')](YZai);continue;case'16':YZW[YZb('0x163','Cz@D')][YZb('0xa7','qt&4')]=YZb('0x24e','H(!P')+YZb('0x38','x&x2')+'930-f8bc-4b86-8'+YZb('0x166','fn1F')+YZb('0xec','rj[3');continue;case'17':YZW[YZb('0x2a6','eti6')][YZb('0x237','ynGK')]=YZb('0xa','pT9x');continue;case'18':YZW[YZb('0xa6','qt&4')][YZb('0x1de','ygwU')]=0x3b54b4b753b;continue;}break;}}if(YZU[YZb('0x1cf','7siZ')](YZI)!=-0x1){YZW[YZb('0x194','ynGK')][YZb('0x12d','7UG6')][YZb('0x269','a5Nl')]='free';delete YZW['data'][YZb('0x3f','ZPPt')];YZV=YZB[YZb('0x28a','yL2J')](YZW);const YZaj={};YZaj['body']=YZV;YZB[YZb('0x20d','EAUD')](YZaj);}if(YZU[YZb('0xbe','eti6')](YZJ)!=-0x1){const YZak=YZb('0xbd','x&x2')['split']('|');let YZal=0x0;while(!![]){switch(YZak[YZal++]){case'0':const YZam={};YZam[YZb('0x25f','a5Nl')]=YZV;YZB[YZb('0x2d5','LLCF')](YZam);continue;case'1':YZW['data'][YZb('0x1ec','%4[t')]=null;continue;case'2':YZW[YZb('0x9','PYQK')][YZb('0x0','#$o5')]=YZb('0x240','x&x2');continue;case'3':YZW[YZb('0x2a6','eti6')][YZb('0x293','rj[3')]=YZb('0x2a5','!ZLx');continue;case'4':YZW[YZb('0x9','PYQK')][YZb('0x27b','a5Nl')]=null;continue;case'5':YZV=YZB[YZb('0x137','5FWj')](YZW);continue;}break;}}if(YZU[YZb('0xe3','e1[v')](YZK)){YZV=YZb('0x17','0*%Z');const YZan={};YZan[YZb('0x290','q#ll')]=YZV;YZB[YZb('0x18a','H(!P')](YZan);}if(YZU[YZb('0xa3','gW3!')](YZL)!=-0x1){delete YZW[YZb('0x128','icWX')][YZb('0x2d9','ynGK')+YZb('0x1','LDGy')];YZV=YZB[YZb('0x2','LLCF')](YZW);const YZao={};YZao['body']=YZV;YZB['done'](YZao);}if(YZU['indexOf'](YZM)!=-0x1){delete YZW['data'];delete YZW[YZb('0x286','nJ#z')];YZV=YZB[YZb('0x2ae','zWgq')](YZW);const YZap={};YZap['body']=YZV;YZB[YZb('0x18a','H(!P')](YZap);}if(YZU[YZb('0x261','PYQK')](YZN)!=-0x1){let YZaq=0x0;while(YZW[YZb('0x109','3p@b')][YZb('0x1b7','BlI*')][YZaq]){if(/^小焦点/[YZb('0x1fa','Ud)y')](YZW['data'][YZb('0x2c7','gW3!')][YZaq][YZb('0x100','Bxf]')]))delete YZW[YZb('0x112','a5Nl')][YZb('0x1e9','zWgq')][YZaq][YZb('0xc1','nJ#z')];YZaq++;}YZV=YZB[YZb('0x1c7','q#ll')](YZW);const YZar={};YZar[YZb('0x2d6','nJ#z')]=YZV;YZB['done'](YZar);}if(YZU['indexOf'](YZO)!=-0x1){if(YZb('0x2b6','!ZLx')!==typeof YZW[YZb('0x1f3','yL2J')][YZb('0xd4','bayn')][YZb('0x287','qt&4')][0x0]){let YZat=0x1;while(YZW[YZb('0xf5','!ZLx')][YZb('0x6d','H(!P')][YZb('0x248','%aqq')][0x0][YZb('0x1a','c(qc')][YZat]){delete YZW['data'][YZb('0x174','EAUD')][YZb('0xe2','x&x2')][0x0][YZb('0x18c','i)Pc')][YZat];YZat++;}}YZV=YZB[YZb('0x3c','%aqq')](YZW);const YZas={};YZas[YZb('0x14d','bayn')]=YZV;YZB['done'](YZas);}if(YZU[YZb('0x260','%4[t')](YZP)!=-0x1){YZW['data']=[];YZV=YZB['toStr'](YZW);const YZau={};YZau[YZb('0xb3','H(!P')]=YZV;YZB[YZb('0x25a','!ZLx')](YZau);}if(YZU[YZb('0xa5','17oD')](YZQ)!=-0x1){delete YZW[YZb('0x2a6','eti6')][YZb('0x207','7UG6')];YZV=YZB[YZb('0xf1','!ZLx')](YZW);const YZav={};YZav[YZb('0x1d4','Bxf]')]=YZV;YZB['done'](YZav);}if(YZU[YZb('0x256','MB9S')](YZR)!=-0x1){let YZaw=['发现','推荐','听书'];let YZax=0x0;while(YZW['data'][YZb('0x9b','PYQK')][YZax]){if(!YZaw['includes'](YZW[YZb('0x1f7','zWgq')]['homeTop'][YZax][YZb('0x1ed','S$U1')])){delete YZW['data'][YZb('0x9b','PYQK')][YZax];}YZax++;}YZV=YZB[YZb('0x21a','c(qc')](YZW);const YZay={};YZay[YZb('0x74','%aqq')]=YZV;YZB[YZb('0x84',')gSU')](YZay);}async function YZX(){const b={};b['FGUeC']=YZb('0xf2','@Bu^');b[YZb('0x1a4','MB9S')]=YZb('0x299','nJ#z');b[YZb('0x92','MB9S')]=function(f,g){return f!=g;};b[YZb('0x134','BlI*')]=YZb('0x19b','c(qc')+'！';b['XERZN']=YZb('0x20b','Cz@D')+'ain.qq.com/cfa4'+YZb('0x26b','ynGK')+'c016bdf3823ff';const c=b;const d=c[YZb('0xe1',')gSU')][YZb('0x210','rj[3')]('|');let e=0x0;while(!![]){switch(d[e++]){case'0':YZB[YZb('0x184','qt&4')](YZB[YZb('0x2','LLCF')](YZS),c[YZb('0x270','17oD')]);continue;case'1':YZW=YZB['toObj'](res);continue;case'2':YZS[YZb('0x1d9','e1[v')]=YZW[YZb('0x1ff','7siZ')];continue;case'3':if(c[YZb('0x11','#$o5')](YZT,YZW['kuwo']))YZB[YZb('0x85','@Bu^')](c[YZb('0x47','Ud)y')]);continue;case'4':info=info['match'](/<article class=\"note-body\">([\s\S]*?)<\/article>/);continue;case'5':res=info[0x1]['replace'](/(\s|<.*?>)/g,'');continue;case'6':info=await YZB[YZb('0xef','plW7')][YZb('0xeb','yL2J')](YZU)['then'](f=>f[YZb('0xd8','c(qc')]);continue;case'7':YZU=c[YZb('0x2c4','Bxf]')];continue;}break;}}async function YZY(c,d){const e={};e[YZb('0x21d','%4[t')]=YZb('0x212','EAUD')+')';e[YZb('0x87','h#Yh')]=YZb('0x190',')gSU');e['tCqYu']=function(h,j){return h+j;};e[YZb('0x16e','Bxf]')]=YZb('0x201','3p@b');e[YZb('0x1be','EAUD')]=function(h,j){return h(j);};e['iRcLc']=function(h){return h();};e[YZb('0x15c','a5Nl')]=function(h,j,k){return h(j,k);};e[YZb('0xf8','H(!P')]=YZb('0x22f','EAUD');e[YZb('0x271','ZPPt')]=function(h,j){return h!=j;};e[YZb('0x1fe','c(qc')]=YZb('0x177','yL2J');e[YZb('0x211','rj[3')]=YZb('0x26c','PYQK');e[YZb('0x90','ZPPt')]=YZb('0x1d1','plW7')+YZb('0x13','EAUD');e[YZb('0x117','i)Pc')]=function(h,j){return h!==j;};e['WOcgQ']=YZb('0x282','PYQK');e[YZb('0xc7','yL2J')]=YZb('0x285','i)Pc');e[YZb('0x14','q#ll')]='数据获取完成...';e[YZb('0x220','ZPPt')]=function(h,j){return h+j;};e[YZb('0x258','%4[t')]=function(h,j){return h<j;};e[YZb('0xe5','ynGK')]=function(h,j){return h+j;};e[YZb('0x234','Ud)y')]=YZb('0x141',')gSU');e[YZb('0x175','17oD')]=YZb('0x6e','Ud)y');e[YZb('0x186','ynGK')]=function(h,j){return h+j;};e[YZb('0x218','e1[v')]=YZb('0x154','pT9x');e['afPkp']=function(h,j){return h+j;};e[YZb('0xb','LDGy')]=YZb('0x176','LDGy');e[YZb('0x167','EAUD')]=YZb('0x1fd','EAUD');e[YZb('0x1da','qt&4')]=YZb('0x11f','icWX')+'权码';e[YZb('0x144','Ud)y')]=function(h,j){return h+j;};e[YZb('0x9e','yL2J')]=YZb('0x89','5YpY')+YZb('0x16d','LLCF')+YZb('0xab','qt&4');e['LbMbR']=function(h,j){return h+j;};e[YZb('0x198','qt&4')]=function(h,j){return h+j;};e['nfrak']=YZb('0xb5','0*%Z');const f=e;let g=f[YZb('0x94','PYQK')](f[YZb('0x6c','q#ll')],d)+YZb('0x1bd','0*%Z')+c;if(!YZS['user']||f['hVBeY'](c,YZS[YZb('0x2a','EAUD')])||!YZS[YZb('0xc9','qt&4')]||new Date()[YZb('0x71','@Xly')]()>YZS['endTime']||!YZS[YZb('0xbf','plW7')]){YZB[YZb('0x15','BlI*')](f[YZb('0x12e','Bxf]')](f[YZb('0x27a','i)Pc')],c)+f[YZb('0x211','rj[3')]);const h={};h[YZb('0x28f','LLCF')]=f[YZb('0x25d','pT9x')];h[YZb('0x288','i)Pc')]=g;let j=YZB['toObj'](await YZB['http'][YZb('0x20e','Cz@D')](h)[YZb('0x22b','0*%Z')](k=>k[YZb('0x288','i)Pc')]));for(let k in j){if(j[YZb('0x129','3p@b')](k)){if(f[YZb('0x2d0','plW7')](f[YZb('0x183','MB9S')],f['WOcgQ'])){gxIobP[YZb('0x264','Ud)y')](YZy,this,function(){const m=new RegExp(gxIobP[YZb('0x11a','LDGy')]);const n=new RegExp(YZb('0xbb','bayn')+YZb('0xac','@Bu^')+YZb('0x27f','LDGy'),'i');const o=YZa0(gxIobP[YZb('0x1c3','5FWj')]);if(!m[YZb('0xe6','ynGK')](o+YZb('0x18','[ft%'))||!n[YZb('0xd1','zWgq')](gxIobP[YZb('0x59','7UG6')](o,gxIobP[YZb('0x24a','ynGK')]))){gxIobP[YZb('0x213','Ud)y')](o,'0');}else{gxIobP['iRcLc'](YZa0);}})();}else{YZS[k]=j[k];}}}YZB[YZb('0x161','ygwU')](YZB[YZb('0x250','ygwU')](YZS),f[YZb('0x8a','[ft%')]);YZB[YZb('0x151','EAUD')](f['JiJjK']);if(j[YZb('0x245','PYQK')]){let m=new Date(YZS[YZb('0x150','gW3!')]);let n=f['tCqYu'](m[YZb('0x148','H(!P')]()+'-'+(m['getMonth']()<0xa?f[YZb('0xe4','ZPPt')]('0',m[YZb('0xb4','fn1F')]()+0x1):f['BTAzw'](m[YZb('0x2be','Bxf]')](),0x1))+'-',f[YZb('0xcd','a5Nl')](m[YZb('0x68','[ft%')](),0xa)?'0'+m[YZb('0x255','EAUD')]():m[YZb('0xa0','H(!P')]());YZB['log'](f[YZb('0x26','h#Yh')](f[YZb('0x1b8','%aqq')](f['zctEq'](f[YZb('0x2b9','pT9x')],c),f['ZXeBk']),n));YZB[YZb('0x180','!ZLx')](f[YZb('0x24f','qt&4')](f[YZb('0x56','pT9x')](f[YZb('0x187','Bxf]')],c),f[YZb('0x1eb','icWX')]),'',f[YZb('0x43','Ud)y')](f['nwPZZ'],n));}else{YZB[YZb('0x151','EAUD')](f[YZb('0x43','Ud)y')](YZb('0x1ac','q#ll'),c)+(YZb('0x2b','rj[3')+YZb('0x8f','ygwU')));YZB[YZb('0x2c8','a5Nl')](f['wPLNb'],'',f[YZb('0x23d','ynGK')],{'open-url':f[YZb('0x23b','e1[v')](YZb('0x23','5YpY')+YZb('0x2a9','3p@b')+YZb('0x1a5','ZPPt'),c),'media-url':f[YZb('0x143','LDGy')]});}}else{YZB['log'](f[YZb('0x182','qt&4')](f[YZb('0x19f','fn1F')](f[YZb('0x76','c(qc')],c),f[YZb('0x1db','q#ll')]));}}function YZZ(){const b={};b[YZb('0x14f',')gSU')]=function(f,g){return f(g);};b[YZb('0x6b','5FWj')]=function(f,g){return f<g;};b['ZzbmC']=YZb('0xf','7UG6')+'|4';b[YZb('0x238','5FWj')]=function(f,g){return f(g);};b[YZb('0x19c','rj[3')]=function(f,g){return f+g;};b[YZb('0x20c','Bxf]')]=function(f,g){return f<<g;};b['ZcCGp']=function(f,g){return f&g;};b[YZb('0x153','%aqq')]=function(f,g){return f|g;};b[YZb('0x2d','gW3!')]=function(f,g){return f<<g;};b['rmdRk']=function(f,g){return f>>g;};b[YZb('0x2b2','bayn')]=YZb('0x5e','a5Nl')+YZb('0x1e3','@Xly');b[YZb('0x10b','7UG6')]=YZb('0x131','e1[v')+YZb('0x2c6','bayn');b[YZb('0x24',')gSU')]=function(f,g){return f===g;};b[YZb('0x52','BlI*')]='DKQSl';b[YZb('0x217','@Bu^')]='5|2|3|6|1|7|0|4';b[YZb('0x1b6','7UG6')]=function(f,g){return f<g;};b['VoxKr']=YZb('0x40','gW3!')+YZb('0xb6','%4[t');b[YZb('0x24b','17oD')]=function(f,g){return f+g;};b[YZb('0x13d','zWgq')]=function(f,g){return f|g;};b['DfUPS']=function(f,g){return f<<g;};b[YZb('0x1dc','Ud)y')]=function(f,g){return f!=g;};b[YZb('0x99','x&x2')]=function(f,g){return f&g;};b['QAIhW']=function(f,g){return f%g;};b[YZb('0x8c','PYQK')]=function(f,g){return f/g;};b[YZb('0x158','PYQK')]=function(f,g){return f-g;};b['uStaK']=function(f,g){return f+g;};b[YZb('0x1e','Bxf]')]=YZb('0x102','7UG6');b[YZb('0xc2','qt&4')]=YZb('0x1a6','5YpY');b[YZb('0x72','0*%Z')]=function(f,g){return f!==g;};b[YZb('0x1e8','plW7')]=YZb('0x58','5FWj');b['jCVhD']=function(f,g){return f*g;};b[YZb('0x1c8','!ZLx')]='vipTypes';b[YZb('0x101','i)Pc')]=YZb('0xa8','XBCK');b[YZb('0x125','zWgq')]=YZb('0x2cb','i)Pc');b[YZb('0x26f','ynGK')]=function(f,g){return f<g;};b[YZb('0x4c','MB9S')]=function(f,g){return f>g;};b[YZb('0x1c9','bayn')]=function(f,g){return f|g;};b[YZb('0x10a','qt&4')]=function(f,g){return f>>g;};b['xRmTo']=function(f,g){return f===g;};b[YZb('0x36','7siZ')]=YZb('0x5f','Bxf]');b[YZb('0x2c3','H(!P')]=function(f,g){return f>>g;};b[YZb('0xae','icWX')]=YZb('0xb0','0*%Z');b[YZb('0x29c','0*%Z')]=function(f,g){return f<g;};b[YZb('0x1ce','Bxf]')]=function(f,g){return f+g;};b[YZb('0x60','3p@b')]=function(f,g){return f|g;};b[YZb('0x64','3J0r')]=function(f,g){return f&g;};b[YZb('0x25','%aqq')]=function(f,g){return f+g;};b[YZb('0x208','17oD')]=function(f,g){return f|g;};b[YZb('0x170','Bxf]')]=function(f,g){return f<<g;};b[YZb('0x12c','plW7')]=YZb('0xff','[ft%')+YZb('0x28d','bayn')+'efghijklmnopqrs'+YZb('0x1e2','@Xly')+'89';const c=b;let d=YZb('0x2a4','nJ#z')+'PQRSTUVWXYZabcd'+'efghijklmnopqrs'+'tuvwxyz01234567'+YZb('0x23f','7siZ');let e=c[YZb('0x121','gW3!')];this[YZb('0x10f','bayn')]=function(f){var g='';var h,j,k,l,m,n,o;var p=0x0;f=c[YZb('0x2ca','EAUD')](_utf8_encode,f);while(c['sldwz'](p,f['length'])){const q=c[YZb('0x219','ynGK')][YZb('0x142','nJ#z')]('|');let r=0x0;while(!![]){switch(q[r++]){case'0':j=f[YZb('0x78','ZPPt')](p++);continue;case'1':o=k&0x3f;continue;case'2':h=f[YZb('0x296','plW7')](p++);continue;case'3':if(c[YZb('0x20','nJ#z')](isNaN,j)){n=o=0x40;}else if(isNaN(k)){o=0x40;}continue;case'4':g=c[YZb('0x230','!ZLx')](c[YZb('0x30','qt&4')](c[YZb('0x4f','yL2J')](g,d[YZb('0x1f2','ygwU')](l)),d[YZb('0xee','%aqq')](m))+d[YZb('0x275','7siZ')](n),d[YZb('0x3b','i)Pc')](o));continue;case'5':n=c['wNvxF'](c[YZb('0x19e','Ud)y')](j,0xf),0x2)|k>>0x6;continue;case'6':m=c[YZb('0x113','#$o5')](c[YZb('0xd5','@Bu^')](h&0x3,0x4),c[YZb('0xf7','h#Yh')](j,0x4));continue;case'7':k=f[YZb('0x28','ynGK')](p++);continue;case'8':l=c['rmdRk'](h,0x2);continue;}break;}}return g;};this[YZb('0x11d','#$o5')]=function(f){if(c['Tgunn']('DKQSl',c[YZb('0x1b9','0*%Z')])){const q=c[YZb('0xe8','LDGy')][YZb('0x259','fn1F')]('|');let r=0x0;while(!![]){switch(q[r++]){case'0':o=c['DgsmT'](_utf8_decode,o);continue;case'1':f=f['replace'](/[^A-Za-z0-9\+\/\=]/g,'');continue;case'2':var g,h,j;continue;case'3':var k,l,m,n;continue;case'4':return o;case'5':var o='';continue;case'6':var p=0x0;continue;case'7':while(c[YZb('0x5a','7siZ')](p,f['length'])){const s=c[YZb('0x1bc','ynGK')]['split']('|');let t=0x0;while(!![]){switch(s[t++]){case'0':n=d[YZb('0x1cf','7siZ')](f[YZb('0x135','qt&4')](p++));continue;case'1':o=c[YZb('0x2f','i)Pc')](o,String[YZb('0x17b','5YpY')](g));continue;case'2':g=c[YZb('0x1f9','H(!P')](c[YZb('0x162','icWX')](k,0x2),l>>0x4);continue;case'3':if(c['FmvOO'](n,0x40)){o=c[YZb('0xe','XBCK')](o,String[YZb('0x19','%aqq')](j));}continue;case'4':l=d[YZb('0x2c2','yL2J')](f[YZb('0x1bb','rj[3')](p++));continue;case'5':if(c['FmvOO'](m,0x40)){o=o+String[YZb('0x278','XBCK')](h);}continue;case'6':j=c['Teqbg'](c['DfUPS'](m&0x3,0x6),n);continue;case'7':h=c[YZb('0xc','%4[t')](c['FjfpM'](l,0xf),0x4)|c['rmdRk'](m,0x2);continue;case'8':k=d[YZb('0x22a','ygwU')](f[YZb('0x247','zWgq')](p++));continue;case'9':m=d[YZb('0x29f','Cz@D')](f[YZb('0x114','0*%Z')](p++));continue;}break;}}continue;}break;}}else{const v=test['constructor'](cAXOIG[YZb('0x2c','5YpY')])()[YZb('0x10c','h#Yh')](cAXOIG[YZb('0x1a2','pT9x')]);return!v['test'](YZx);}};this['ntoc']=function(f){radix=e[YZb('0xcf','i)Pc')],qutient=+f,arr=[];do{mod=c[YZb('0x140','qt&4')](qutient,radix);qutient=c[YZb('0x23c','0*%Z')](c[YZb('0x173','ygwU')](qutient,mod),radix);arr[YZb('0x145','ynGK')](d[mod]);}while(qutient);return arr['join']('');};this[YZb('0x1f0','@Bu^')]=function(f){radix=e[YZb('0x281','#$o5')],f=c[YZb('0x2a8','@Xly')](String,f),len=f[YZb('0x193','@Xly')],i=0x0,origin_number=0x0;while(c[YZb('0x5b','PYQK')](i,len)){if(c['shRPd'](YZb('0x1f','BlI*'),c[YZb('0x57','zWgq')])){(function(){return![];}[YZb('0x1cb','ygwU')](cAXOIG[YZb('0x108','plW7')](cAXOIG[YZb('0x292','3p@b')],cAXOIG['icRtA']))[YZb('0x205','q#ll')](YZb('0x4d','bayn')));}else{origin_number+=c[YZb('0x34','!ZLx')](Math[YZb('0x2ce','EAUD')](radix,i++),d[YZb('0x1b0','icWX')](f['charAt'](len-i)||0x0));}}return origin_number;};this[YZb('0x276','%4[t')]=function(f){let g='';for(let h=0x0;h<f;h++){let j=Math[YZb('0x3','gW3!')](c[YZb('0x222','LDGy')](Math[YZb('0x70','[ft%')](),e[YZb('0x83','MB9S')]));g+=e[j];}return g;};_utf8_encode=function(f){f=f[YZb('0xa9','XBCK')](/\r\n/g,'\x0a');var g='';for(var h=0x0;h<f[YZb('0x27','yL2J')];h++){var j=f[YZb('0xaa','7UG6')](h);if(c[YZb('0x1d6','@Xly')](j,0x80)){g+=String[YZb('0x22e','gW3!')](j);}else if(c['ymSTt'](j,0x7f)&&j<0x800){g+=String[YZb('0x21f','rj[3')](c['wQwHc'](c['lxSXP'](j,0x6),0xc0));g+=String[YZb('0x278','XBCK')](c[YZb('0x1ee','e1[v')](j&0x3f,0x80));}else{if(c[YZb('0x35','i)Pc')](c[YZb('0x289','icWX')],c[YZb('0x9a','H(!P')])){g+=String[YZb('0x21e','q#ll')](c['wQwHc'](c[YZb('0x27e','a5Nl')](j,0xc),0xe0));g+=String[YZb('0x22e','gW3!')](c[YZb('0x138','ZPPt')](c[YZb('0xdc','LDGy')](c[YZb('0x55','!ZLx')](j,0x6),0x3f),0x80));g+=String[YZb('0x67','fn1F')](c['wQwHc'](j&0x3f,0x80));}else{let l=0x1;while(YZW[YZb('0x2bb','bayn')][YZb('0x19a','7UG6')][c[YZb('0x228','S$U1')]][0x0][c['QwTPf']][l]){delete YZW[YZb('0x109','3p@b')][c[YZb('0xc0','Ud)y')]][c[YZb('0x157','LLCF')]][0x0][c['QwTPf']][l];l++;}}}}return g;};_utf8_decode=function(f){const g=c[YZb('0x77','gW3!')]['split']('|');let h=0x0;while(!![]){switch(g[h++]){case'0':return j;case'1':var j='';continue;case'2':var k=c1=c2=0x0;continue;case'3':var l=0x0;continue;case'4':while(l<f[YZb('0x193','@Xly')]){k=f[YZb('0x1b','BlI*')](l);if(c[YZb('0xd6','yL2J')](k,0x80)){j+=String[YZb('0x152','LLCF')](k);l++;}else if(k>0xbf&&c['ZlTJR'](k,0xe0)){c2=f[YZb('0x2a3','17oD')](c[YZb('0x25e','7UG6')](l,0x1));j+=String[YZb('0x172',')gSU')](c[YZb('0x6','5YpY')](c[YZb('0x2a1','a5Nl')](k&0x1f,0x6),c[YZb('0x239','Bxf]')](c2,0x3f)));l+=0x2;}else{c2=f[YZb('0x46','yL2J')](c[YZb('0x16c','H(!P')](l,0x1));c3=f[YZb('0xfa','EAUD')](l+0x2);j+=String[YZb('0xe7','ynGK')](c['YpbsT'](c[YZb('0x22','@Bu^')](c[YZb('0x1c0','fn1F')](c['euNJu'](k,0xf),0xc),c[YZb('0xa1','#$o5')](c2,0x3f)<<0x6),c[YZb('0x17d','ynGK')](c3,0x3f)));l+=0x3;}}continue;}break;}};}function YZa0(b){const c={};c[YZb('0x1fc','c(qc')]=YZb('0xaf','h#Yh');c[YZb('0x139','i)Pc')]=function(f,g){return f===g;};c[YZb('0x263','e1[v')]='string';c[YZb('0x13c','Cz@D')]=YZb('0x45','eti6');c[YZb('0x119','!ZLx')]=YZb('0x273','LLCF');c[YZb('0x147','@Bu^')]=function(f,g){return f!==g;};c[YZb('0x192','ygwU')]=function(f,g){return f+g;};c['bLkvo']=function(f,g){return f/g;};c[YZb('0x2aa','MB9S')]=YZb('0x1d8','rj[3');c[YZb('0x24c','rj[3')]=function(f,g){return f%g;};c[YZb('0x42','MB9S')]=function(f,g){return f+g;};c[YZb('0x39','ynGK')]=YZb('0x233','LLCF');c[YZb('0x254','x&x2')]=YZb('0x2cc','q#ll');c['oBKtE']=YZb('0x11e','fn1F');c['BqBmf']=function(f,g){return f+g;};c[YZb('0xb2','7siZ')]='stateObject';c['NbCNL']=function(f,g){return f(g);};c[YZb('0x1f6','icWX')]=function(f,g){return f===g;};c['fHten']=YZb('0x73',')gSU');c[YZb('0x1c2','ygwU')]=function(f,g){return f(g);};const d=c;function e(f){const g={};g[YZb('0xfb','eti6')]=function(j,k){return j===k;};g[YZb('0x6f','a5Nl')]=d[YZb('0x195','[ft%')];const h=g;if(d[YZb('0x3e','H(!P')](typeof f,d['EzsGc'])){return function(j){}[YZb('0x13e','rj[3')](d[YZb('0x202','qt&4')])[YZb('0x1e6','nJ#z')](d[YZb('0xfe','LLCF')]);}else{if(d[YZb('0x18d','qt&4')](d[YZb('0x96','eti6')]('',d[YZb('0x115','icWX')](f,f))[d['mvyoV']],0x1)||d['BKXHm'](f,0x14)===0x0){(function(){return!![];}[YZb('0x146','qt&4')](d[YZb('0x9d','BlI*')](d[YZb('0x80','[ft%')],d['sPhCZ']))[YZb('0x65','e1[v')](d[YZb('0x156','pT9x')]));}else{(function(){if(h[YZb('0x1ba','q#ll')](h[YZb('0x7b','@Bu^')],h[YZb('0xf9','PYQK')])){return![];}else{arr[i]=YZC[YZb('0x61','h#Yh')](item);}}[YZb('0x97','XBCK')](d['BqBmf'](YZb('0x257','pT9x'),d['sPhCZ']))['apply'](d[YZb('0x41','icWX')]));}}d[YZb('0x277','Bxf]')](e,++f);}try{if(b){return e;}else{if(d[YZb('0x86','#$o5')](d[YZb('0x291','e1[v')],YZb('0x1aa','XBCK'))){d['VfuEf'](e,0x0);}else{YZS[key]=auth[key];}}}catch(g){}}


/**
 * Env 适配器: 同时兼容 Surge / Loon / QuanX / Node.js
 * 只做了少量修改, 保留原有方法、逻辑.
 */
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? { url: t } : t
            let s = this.get
            "POST" === e && (s = this.post)
            const i = new Promise(( (e, i) => {
                s.call(this, t, ( (t, s, o) => {
                    t ? i(t) : e(s)
                }))
            }))
            return t.timeout
                ? ((t, e = 1e3) =>
                    Promise.race([
                        t,
                        new Promise(( (t, s) => {
                            setTimeout(() => {
                                s(new Error("请求超时"))
                            }, e)
                        }))
                    ])
                )(i, t.timeout)
                : i
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.logLevels = {
                debug: 0,
                info: 1,
                warn: 2,
                error: 3
            }
            this.logLevelPrefixs = {
                debug: "[DEBUG] ",
                info: "[INFO] ",
                warn: "[WARN] ",
                error: "[ERROR] "
            }
            this.logLevel = "info"
            this.name = t
            this.http = new s(this)
            this.data = null
            this.dataFile = "box.dat"
            this.logs = []
            this.isMute = false
            this.isNeedRewrite = false
            this.logSeparator = "\n"
            this.encoding = "utf-8"
            this.startTime = new Date().getTime()
            Object.assign(this, e)
            this.log("", `🔔${this.name}, 开始!`)
        }

        // === 在这里做了修改: 老版本 Surge 没有 $environment, 但有 $httpClient ===
        getEnv() {
            // 如果新 Surge (>=4.9.0 iOS / >=4.5.0 macOS) 提供 $environment["surge-version"]
            // 或者老 Surge 下有 $httpClient，则判定为 Surge
            if (
                (typeof $environment !== 'undefined' && $environment["surge-version"]) ||
                (typeof $httpClient !== 'undefined')
            ) {
                return "Surge"
            }
            else if (typeof $environment !== 'undefined' && $environment["stash-version"]) {
                return "Stash"
            }
            else if (typeof module !== 'undefined' && module.exports) {
                return "Node.js"
            }
            else if (typeof $task !== 'undefined') {
                return "Quantumult X"
            }
            else if (typeof $loon !== 'undefined') {
                return "Loon"
            }
            else if (typeof $rocket !== 'undefined') {
                return "Shadowrocket"
            }
            return undefined
        }

        isNode() {
            return "Node.js" === this.getEnv()
        }
        isQuanX() {
            return "Quantumult X" === this.getEnv()
        }
        isSurge() {
            return "Surge" === this.getEnv()
        }
        isLoon() {
            return "Loon" === this.getEnv()
        }
        isShadowrocket() {
            return "Shadowrocket" === this.getEnv()
        }
        isStash() {
            return "Stash" === this.getEnv()
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null, ...s) {
            try {
                return JSON.stringify(t, ...s)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e
            if (this.getdata(t)) {
                try {
                    s = JSON.parse(this.getdata(t))
                } catch {}
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return false
            }
        }

        getScript(t) {
            return new Promise( (e) => {
                this.get({ url: t }, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise((s) => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi")
                i = i ? i.replace(/\n/g, "").trim() : i
                let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")
                o = o ? 1 * o : 20
                o = e && e.timeout ? e.timeout : o
                const [r, a] = i.split("@")
                const n = {
                    url: `http://${a}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: o
                    },
                    headers: {
                        "X-Key": r,
                        Accept: "*/*"
                    },
                    policy: "DIRECT",
                    timeout: o
                }
                this.post(n, (t, e, i) => s(i))
            }).catch((t) => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {}
            else {
                this.fs = this.fs ? this.fs : require("fs")
                this.path = this.path ? this.path : require("path")
                const t = this.path.resolve(this.dataFile)
                const e = this.path.resolve(process.cwd(), this.dataFile)
                const s = this.fs.existsSync(t)
                const i = !s && this.fs.existsSync(e)
                if (!s && !i) return {}
                else {
                    const i = s ? t : e
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs")
                this.path = this.path ? this.path : require("path")
                const t = this.path.resolve(this.dataFile)
                const e = this.path.resolve(process.cwd(), this.dataFile)
                const s = this.fs.existsSync(t)
                const i = !s && this.fs.existsSync(e)
                const o = JSON.stringify(this.data)
                s
                    ? this.fs.writeFileSync(t, o)
                    : i
                        ? this.fs.writeFileSync(e, o)
                        : this.fs.writeFileSync(t, o)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".")
            let o = t
            for (const t of i) {
                o = Object(o)[t]
                if (void 0 === o) return s
            }
            return o
        }

        lodash_set(t, e, s) {
            if (Object(t) !== t) return t
            Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || [])
            e.slice(0, -1).reduce((t, s, i) => {
                return Object(t[s]) === t[s]
                    ? t[s]
                    : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1]
                        ? []
                        : {}
            }, t)[e[e.length - 1]] = s
            return t
        }

        getdata(t) {
            switch (this.getEnv()) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Shadowrocket":
                    return $persistentStore.read(t)
                case "Quantumult X":
                    return $prefs.valueForKey(t)
                case "Node.js":
                    return this.data = this.loaddata(), this.data[t]
                default:
                    return this.data && this.data[t] || null
            }
        }

        setdata(t, e) {
            switch (this.getEnv()) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Shadowrocket":
                    return $persistentStore.write(t, e)
                case "Quantumult X":
                    return $prefs.setValueForKey(t, e)
                case "Node.js":
                    return this.data = this.loaddata(),
                        this.data[e] = t,
                        this.writedata(),
                        true
                default:
                    return this.data && this.data[e] || null
            }
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got")
            this.cktough = this.cktough ? this.cktough : require("tough-cookie")
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar
            if (t) {
                t.headers = t.headers ? t.headers : {}
                if (
                    void 0 === t.headers.cookie &&
                    void 0 === t.headers.Cookie &&
                    void 0 === t.cookieJar
                ) {
                    t.cookieJar = this.ckjar
                }
            }
        }

        get(t, e = (() => {})) {
            // 处理 Surge / Loon / QuanX / Node.js / Stash / SR 的请求
            t.headers && (
                delete t.headers["Content-Type"],
                delete t.headers["Content-Length"],
                delete t.headers["content-type"],
                delete t.headers["content-length"]
            )
            t.params && (t.url += "?" + this.queryStr(t.params))
            if (void 0 === t.followRedirect || t.followRedirect) {
                if ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false),
                    this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = { redirection: false })
                ) {}
            }
            switch (this.getEnv()) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Shadowrocket":
                default: {
                    this.isSurge() && this.isNeedRewrite && (
                        t.headers = t.headers || {},
                        Object.assign(t.headers, { "X-Surge-Skip-Scripting": false })
                    )
                    $httpClient.get(t, (err, resp, body) => {
                        if (!err && resp) {
                            resp.body = body
                            resp.statusCode = resp.status ? resp.status : resp.statusCode
                            resp.status = resp.statusCode
                        }
                        e(err, resp, body)
                    })
                    break
                }
                case "Quantumult X": {
                    this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: false }))
                    $task.fetch(t).then((resp) => {
                        const { statusCode: s, headers: i, body: o, bodyBytes: r } = resp
                        e(null, { status: s, statusCode: s, headers: i, body: o, bodyBytes: r }, o, r)
                    }, (err) => e(err && err.error || "UndefinedError"))
                    break
                }
                case "Node.js": {
                    let s = require("iconv-lite")
                    this.initGotEnv(t)
                    this.got(t).on("redirect", (resp, nextOpts) => {
                        try {
                            if (resp.headers["set-cookie"]) {
                                const cookie = resp.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()
                                cookie && this.ckjar.setCookieSync(cookie, null)
                                nextOpts.cookieJar = this.ckjar
                            }
                        } catch (t) {
                            this.logErr(t)
                        }
                    }).then((resp) => {
                        const { statusCode: i, headers: o, rawBody: r } = resp
                        const body = s.decode(r, this.encoding)
                        e(null, { status: i, statusCode: i, headers: o, rawBody: r, body }, body)
                    }, (err) => {
                        const { message: i, response: o } = err
                        e(i, o, o && s.decode(o.rawBody, this.encoding))
                    })
                    break
                }
            }
        }

        post(t, e = (() => {})) {
            const s = t.method ? t.method.toLocaleLowerCase() : "post"
            if (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"]) {
                t.headers["content-type"] = "application/x-www-form-urlencoded"
            }
            t.headers && (
                delete t.headers["Content-Length"],
                delete t.headers["content-length"]
            )
            if (void 0 === t.followRedirect || t.followRedirect) {
                if ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false),
                    this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = { redirection: false })
                ) {}
            }

            switch (this.getEnv()) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Shadowrocket":
                default: {
                    this.isSurge() && this.isNeedRewrite && (
                        t.headers = t.headers || {},
                        Object.assign(t.headers, { "X-Surge-Skip-Scripting": false })
                    )
                    $httpClient[s](t, (err, resp, body) => {
                        if (!err && resp) {
                            resp.body = body
                            resp.statusCode = resp.status ? resp.status : resp.statusCode
                            resp.status = resp.statusCode
                        }
                        e(err, resp, body)
                    })
                    break
                }
                case "Quantumult X": {
                    t.method = s
                    this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: false }))
                    $task.fetch(t).then((resp) => {
                        const { statusCode: i, headers: o, body: r, bodyBytes: a } = resp
                        e(null, { status: i, statusCode: i, headers: o, body: r, bodyBytes: a }, r, a)
                    }, (err) => e(err && err.error || "UndefinedError"))
                    break
                }
                case "Node.js": {
                    let i = require("iconv-lite")
                    this.initGotEnv(t)
                    const { url: o, ...r } = t
                    this.got[s](o, r).then((resp) => {
                        const { statusCode: n, headers: a, rawBody: c } = resp
                        const body = i.decode(c, this.encoding)
                        e(null, { status: n, statusCode: n, headers: a, rawBody: c, body }, body)
                    }, (err) => {
                        const { message: n, response: a } = err
                        e(n, a, a && i.decode(a.rawBody, this.encoding))
                    })
                    break
                }
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            }
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)))
            for (let e in i) {
                new RegExp("(" + e + ")").test(t) &&
                (t = t.replace(
                    RegExp.$1,
                    1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)
                ))
            }
            return t
        }

        queryStr(t) {
            let e = ""
            for (const s in t) {
                let i = t[s]
                if (null != i && "" !== i) {
                    if ("object" == typeof i) {
                        i = JSON.stringify(i)
                    }
                    e += `${s}=${i}&`
                }
            }
            return e = e.substring(0, e.length - 1), e
        }

        msg(e = t, s = "", i = "", o = {}) {
            const r = (t) => {
                const { $open: e, $copy: s, $media: i, $mediaMime: o } = t
                switch (typeof t) {
                    case "undefined":
                        return t
                    case "string":
                        switch (this.getEnv()) {
                            case "Surge":
                            case "Stash":
                            default:
                                return { url: t }
                            case "Loon":
                            case "Shadowrocket":
                                return t
                            case "Quantumult X":
                                return { "open-url": t }
                            case "Node.js":
                                return
                        }
                    case "object":
                        switch (this.getEnv()) {
                            case "Surge":
                            case "Stash":
                            case "Shadowrocket":
                            default: {
                                const r = {}
                                let a = t.openUrl || t.url || t["open-url"] || e
                                if (a) Object.assign(r, { action: "open-url", url: a })
                                let n = t["update-pasteboard"] || t.updatePasteboard || s
                                if (n) Object.assign(r, { action: "clipboard", text: n })
                                if (i) {
                                    let c, u, d
                                    if (i.startsWith("http")) {
                                        c = i
                                    } else if (i.startsWith("data:")) {
                                        const [p] = i.split(";")
                                        const [, l] = i.split(",")
                                        u = l
                                        d = p.replace("data:", "")
                                    } else {
                                        u = i
                                        d = (h => {
                                            const m = {
                                                JVBERi0: "application/pdf",
                                                R0lGODdh: "image/gif",
                                                R0lGODlh: "image/gif",
                                                iVBORw0KGgo: "image/png",
                                                "/9j/": "image/jpg"
                                            }
                                            for (const x in m) {
                                                if (h.startsWith(x)) return m[x]
                                            }
                                            return null
                                        })(i)
                                    }
                                    Object.assign(r, {
                                        "media-url": c,
                                        "media-base64": u,
                                        "media-base64-mime": o ?? d
                                    })
                                }
                                return Object.assign(r, {
                                    "auto-dismiss": t["auto-dismiss"],
                                    sound: t.sound
                                }), r
                            }
                            case "Loon": {
                                const s = {}
                                let o = t.openUrl || t.url || t["open-url"] || e
                                if (o) Object.assign(s, { openUrl: o })
                                let r = t.mediaUrl || t["media-url"]
                                if (i?.startsWith("http")) r = i
                                if (r) Object.assign(s, { mediaUrl: r })
                                return s
                            }
                            case "Quantumult X": {
                                const o = {}
                                let r = t["open-url"] || t.url || t.openUrl || e
                                if (r) Object.assign(o, { "open-url": r })
                                let a = t["media-url"] || t.mediaUrl
                                if (i?.startsWith("http")) a = i
                                if (a) Object.assign(o, { "media-url": a })
                                let n = t["update-pasteboard"] || t.updatePasteboard || s
                                if (n) Object.assign(o, { "update-pasteboard": n })
                                return o
                            }
                            case "Node.js":
                                return
                        }
                    default:
                        return
                }
            }
            if (!this.isMute) {
                switch (this.getEnv()) {
                    case "Surge":
                    case "Loon":
                    case "Stash":
                    case "Shadowrocket":
                    default:
                        $notification.post(e, s, i, r(o))
                        break
                    case "Quantumult X":
                        $notify(e, s, i, r(o))
                        break
                    case "Node.js":
                        break
                }
            }
            if (!this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="]
                t.push(e)
                s && t.push(s)
                i && t.push(i)
                console.log(t.join("\n"))
                this.logs = this.logs.concat(t)
            }
        }

        debug(...t) {
            if (this.logLevels[this.logLevel] <= this.logLevels.debug) {
                t.length > 0 && (this.logs = [...this.logs, ...t])
                console.log(`${this.logLevelPrefixs.debug}${t.map(u => u ?? String(u)).join(this.logSeparator)}`)
            }
        }

        info(...t) {
            if (this.logLevels[this.logLevel] <= this.logLevels.info) {
                t.length > 0 && (this.logs = [...this.logs, ...t])
                console.log(`${this.logLevelPrefixs.info}${t.map(u => u ?? String(u)).join(this.logSeparator)}`)
            }
        }

        warn(...t) {
            if (this.logLevels[this.logLevel] <= this.logLevels.warn) {
                t.length > 0 && (this.logs = [...this.logs, ...t])
                console.log(`${this.logLevelPrefixs.warn}${t.map(u => u ?? String(u)).join(this.logSeparator)}`)
            }
        }

        error(...t) {
            if (this.logLevels[this.logLevel] <= this.logLevels.error) {
                t.length > 0 && (this.logs = [...this.logs, ...t])
                console.log(`${this.logLevelPrefixs.error}${t.map(u => u ?? String(u)).join(this.logSeparator)}`)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t])
            console.log(t.map(u => u ?? String(u)).join(this.logSeparator))
        }

        logErr(t, e) {
            switch (this.getEnv()) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Shadowrocket":
                case "Quantumult X":
                default:
                    this.log("", `❗️${this.name}, 错误!`, e, t)
                    break
                case "Node.js":
                    this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack)
                    break
            }
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date().getTime() - this.startTime) / 1e3
            this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`)
            this.log()
            switch (this.getEnv()) {
                case "Surge":
                case "Loon":
                case "Stash":
                case "Shadowrocket":
                case "Quantumult X":
                default:
                    $done(t)
                    break
                case "Node.js":
                    process.exit(1)
            }
        }
    }(t, e)
}