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
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic)|app/newMenuList/menuListInfo|tingshu/index/radio|operate/homePage)|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://raw.githubusercontent.com/Mikephie/Script/main/qx/kuwomod.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png


[Mitm]
hostname = *.kuwo.cn

****************************/

Skip to content

Navigation Menu
Toggle navigation



Sign in
	•	Product
	◦	GitHub Copilot Write better code with AI 
	◦	Security Find and fix vulnerabilities 
	◦	Actions Automate any workflow 
	◦	Codespaces Instant dev environments 
	◦	Issues Plan and track work 
	◦	Code Review Manage code changes 
	◦	Discussions Collaborate outside of code 
	◦	Code Search Find more, search less 
	•	  Explore
	◦	All features
	◦	Documentation
	◦	GitHub Skills
	◦	Blog
	•	  
	•	Solutions By company size
	◦	Enterprises
	◦	Small and medium teams
	◦	Startups
	•	 By use case
	◦	DevSecOps
	◦	DevOps
	◦	CI/CD
	◦	View all use cases
	•	  By industry
	◦	Healthcare
	◦	Financial services
	◦	Manufacturing
	◦	Government
	◦	View all industries
	•	  View all solutions  
	•	Resources Topics
	◦	AI
	◦	DevOps
	◦	Security
	◦	Software Development
	◦	View all
	•	  Explore
	◦	Learning Pathways
	◦	White papers, Ebooks, Webinars
	◦	Customer Stories
	◦	Partners
	◦	Executive Insights
	•	  
	•	Open Source
	◦	GitHub Sponsors Fund open source developers 
	•	
	◦	The ReadME Project GitHub community articles 
	•	 Repositories
	◦	Topics
	◦	Trending
	◦	Collections
	•	  
	•	Enterprise
	◦	Enterprise platform AI-powered developer platform 
	•	 Available add-ons
	◦	Advanced Security Enterprise-grade security features 
	◦	GitHub Copilot Enterprise-grade AI features 
	◦	Premium Support Enterprise-grade 24/7 support 
	•	  
	•	Pricing

Search or jump to...

Search code, repositories, users, issues, pull requests...


Sign in
Sign up Reseting focus


Mikephie / decode_action Public
forked from smallfawn/decode_action
	•	Notifications
	•	Fork 0
	•	Star 1 

	•	Code
	•	Pull requests
	•	Actions
	•	Projects
	•	Security
	•	Insights



Files


 main
Breadcrumbs
		decode_action
/output.js






Latest commit
 

History
History


1113 lines (1113 loc) · 32.9 KB

File metadata and controls
	•	Code
	•	Blame
1113 lines (1113 loc) · 32.9 KB
Raw





1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290

291
292
293
294
295
296
297
298
299
300
301
302

303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335

336
337
338

339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368

369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398

399
400
401
402
403
404
405
406
407
408
409

410
411
412
413
414
415
416
417
418
419
420

421
422
423
424
425
426
427
428

429
430
431
432
433
434
435
436
437
438
439
440
441
442
443
444
445
446
447
448

449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474

475

476
477
478
479

480
481
482
483
484
485
486
487
488
489
490
491
492
493
494
495
496
497
498
499
500
501
502
503
504

505
506
507
508
509
510
511
512
513
514
515
516
517
518
519
520
521
522
523
524
525
526
527
528
529
530
531
532
533
534
535
536
537
538
539
540
541
542
543
544
545
546
547
548
549
550
551
552

553
554
555
556
557
558
559

560
561
562
563
564
565
566

567
568
569
570
571
572
573
574
575

576
577
578
579
580
581
582

583
584
585
586
587
588
589

590
591
592
593
594
595
596
597
598
599
600
601
602
603
604
605
606
607
608
609
610
611
612
613
614

615
616
617
618
619
620
621
622
623
624
625
626
627
628
629
630
631
632
633
634
635
636
637
638

639
640
641
642
643
644
645
646
647
648
649
650

651
652
653
654
655
656
657
658
659
660
661
662

663
664
665
666
667
668
669
670
671
672
673
674
675
676
677
678

679
680
681
682
683
684
685
686
687
688
689
690
691
692
693
694
695
696
697
698

699
700
701
702
703
704
705
706
707
708
709
710
711
712
713
714

715
716
717
718
719
720
721
722
723
724
725
726
727
728
729
730
731
732

733
734
735
736
737
738

739
740
741
742
743
744
745
746
747
748
749
750
751
752
753
754
755
756
757
758
759
760
761
762
763
764
765
766
767
768
769
770
771
772
773
774
775
776
777
778
779
780
781
782
783
784
785
786
787
788
789
790
791
792
793
794
795
796
797
798
799
800
801
802
803
804
805
806
807
808
809
810
811
812
813
814

815
816
817
818
819
820
821
822
823
824
825
826
827
828
829
830
831
832
833
834
835
836
837
838
839
840
841
842
843
844
845
846
847
848
849
850
851
852
853
854
855
856
857
858
859
860
861
862
863
864
865
866
867
868
869
870
871
872
873
874
875
876
877
878
879
880
881
882
883
884
885
886

887
888
889
890
891
892
893
894
895
896
897
898
899
900
901

902
903
904
905
906
907
908
909
910

911

912
913
914
915
916
917
918
919
920
921
922
923
924
925
926
927
928
929
930
931
932
933
934
935
936
937
938
939
940
941
942
943
944
945
946
947
948
949
950
951
952
953
954
955
956
957
958
959
960
961
962
963
964
965
966
967
968
969
970
971
972
973
974
975
976
977
978
979
980
981
982
983
984
985
986
987
988
989
990
991
992
993
994
995
996
997
998
999
1000
//Wed Jan 08 2025 14:01:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("酷我音乐");
const NC = new NapiCode();
const Play_URL = "/mobi.s?f=kwxs";
const KuWo_Down = "/music.pay?newver=3";
const KuWo_Book = RegExp(/(a\.p|v\d\/api\/(user\/personal\/)?user\/info)/);
const KuWo_Enc = "/vip/enc";
const KuWo_Vip = RegExp(/(vip\/)?v\d\/(api(\/pay)?\/user\/info|user\/vip)/);
const KuWo_Theme = RegExp(/vip\/v\d\/theme\?op\=gd/);
const Book_Home = RegExp(/v\d\/api\/advert\/myPage/);
const KuWo_AD = RegExp(/(v\d\/api\/advert\/(iListen|album)|openapi\/v\d\/album\/adBar|(\/EcomResource|\/(Mobile)?Ad)Serv(er|ice))/);
const KuWo_ListAD = RegExp(/vip\/v\d\/sysinfo\?op\=getRePayAndDoPayBoxNew/);
const KuWo_BookAD = RegExp(/v\d\/api\/pay\/payInfo\/kwplayer\/payMiniBar/);
const KuWo_BookPageAD = RegExp(/openapi\/v\d\/tingshu\/index\/radio/);
const KuWo_TabAD = "/kuwopay/vip-tab/setting";
const KuWo_MenuAD = RegExp(/openapi\/v\d\/app\/newMenuList\/menuListInfo/);
const KuWo_HomeAD = RegExp(/openapi\/v\d\/album\/myRec\/vipMusic/);
const KuWo_HomeTopAD = RegExp(/openapi\/v\d\/operate\/homePage/);
const KuWo = $.toObj($.getval("KuWo")) || {};
const LocVer = "5.1.6";
var url = "undefined" !== typeof $request ? $request.url : "";
var body = "undefined" !== typeof $response ? $response.body : null;
let obj = $.toObj(body);
if (url.indexOf(Play_URL) != -1) {
let keys = KuWo.keys;
let key = keys[Math.floor(Math.random() * keys.length)];
let arr = [];
key.forEach((a, b) => {
arr[b] = NC.ntoc(a);
});
let UserID = KuWo.user;
let PlayID = KuWo.PlayID;
let PlayUrl = arr.join("_");
let Song = KuWo.Song;
let Ver = KuWo.ver;
let rid = body.replace(/.*?\"rid\":(\d+).*/, "$1");
!(async () => {
await getInfo(UserID, "kuwo");
await getVer();
if (KuWo.isVip && new Date().getTime() < KuWo.endTime && LocVer == Ver && rid != PlayID) {
const g = {
br: 4000,
url: "4000kflac"
};
const h = {
br: 2000,
url: "2000kflac"
};
const j = {
br: 320,
url: "320kmp3"
};
let k = [g, h, j];
let l = 0;
if ("book" == Song) {
l = 2;
}
while (k[l]) {
const m = {
url: "http://mobi.kuwo.cn/mobi.s?f=web&source=" + PlayUrl + "&type=convert_url_with_sign&br=" + k[l].url + "&rid=" + PlayID
};
await $.http.get(m).then(n => {
body = n.body;
obj = $.toObj(body);
});
if (obj.data.bitrate == k[l].br) {
break;
}
l++;
}
}
KuWo.PlayID = "";
$.setval($.toStr(KuWo), "KuWo");
const f = {
body: body
};
$.done(f);
})();
}
if (url.endsWith(KuWo_Down)) {
if (obj.hasOwnProperty("songs")) {
id = obj.songs[0].id;
if ("number" !== typeof id) {
id = body.replace(/.*?\"id\":(\d+).*/, "$1");
}
KuWo.PlayID = id;
KuWo.Song = "music";
$.setval($.toStr(KuWo), "KuWo");
obj.songs[0].audio.forEach(a => a.st = 0);
}
let tmp = obj.songs[0].audio[0].policy;
obj.user[0] = {
pid: obj.songs[0].audio[0].pid,
type: tmp,
name: tmp + "_1",
categray: tmp + "_1",
id: obj.songs[0].id,
order: 375787919,
final: [],
buy: 1657425321,
begin: 1657425321,
end: 4077187200,
CurEnd: 0,
playCnt: 0,
playUpper: 300,
downCnt: 0,
downUpper: 300,
playVideoCnt: 0,
playVideoUpper: 3000,
downVideoCnt: 0,
downVideoUpper: 3000,
price: obj.songs[0].audio[0].price,
period: 1000,
feetype: 0,
info: obj.songs[0]
};
body = $.toStr(obj);
const KuWoLg = {
body: body
};
$.done(KuWoLg);
}
if (url.match(KuWo_Book)) {
if (obj.hasOwnProperty("songs")) {
for (let key in obj.songs) {
id = obj.songs[key].id;
if ("number" !== typeof id) {
id = body.replace(/.*?\"id\":(\d+).*/, "$1");
}
if ("number" == typeof id) {
KuWo.PlayID = id;
KuWo.Song = "book";
$.setval($.toStr(KuWo), "KuWo");
break;
}
}
}
body = body.replace(/(policy|policytype)\":\d/g, "$1\":0").replace(/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g, "$1\":1").replace(/(end|endtime|vipExpires)\":\d+/g, "$1\":4077187200");
const KuWoLh = {
body: body
};
$.done(KuWoLh);
}
if (url.indexOf(KuWo_Enc) != -1) {
!(async () => {
let b = new URL(url).searchParams;
let c = b.get("uid");
if ("number" !== typeof c) {
c = url.replace(/.*?uid=(\d+).*/, "$1");
}
await getInfo(c, "kuwo");
let d = await $.http.get(url.replace(/uid=\d+/g, "uid=238581279")).then(f => f.body);
const e = {
body: d
};
$.done(e);
})();
}
if (url.match(KuWo_Vip)) {
obj.data.vipIcon = "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png";
delete obj.data.iconJumpUrl;
delete obj.data.adActUrl;
obj.data.growthValue = "9999";
obj.data.vipTag = "VIP7";
obj.data.vipmIcon = "https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png";
obj.data.svipIcon = "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png";
obj.data.openBtnText = "永久会员";
obj.data.vipExpire = "4077187200315";
obj.data.vipExpires = 4077187200315;
obj.data.luxuryIcon = "https://image.kuwo.cn/fe/2fae68ff-de2d-4473-bf28-8efc29e44968vip.png";
obj.data.vipmExpire = "4077187200315";
obj.data.vipLuxuryExpire = "4077187200315";
obj.data.svipExpire = "4077187200315";
obj.data.isYearUser = "2";
obj.data.biedSong = "1";
obj.data.svipAutoPayUser = "1";
body = $.toStr(obj);
const KuWoLj = {
body: body
};
$.done(KuWoLj);
}
if (url.match(KuWo_Theme)) {
obj.data.vipTheme.type = "free";
delete obj.data.needBieds;
body = $.toStr(obj);
const KuWoLk = {
body: body
};
$.done(KuWoLk);
}
if (url.match(Book_Home)) {
obj.data.scheme = null;
obj.data.title = "酷我畅听";
obj.data.url = null;
obj.data.subTitle = "畅听服务由影子提供";
body = $.toStr(obj);
const KuWoLl = {
body: body
};
$.done(KuWoLl);
}
if (url.match(KuWo_AD)) {
body = "YingZi";
const KuWoLm = {
body: body
};
$.done(KuWoLm);
}
if (url.match(KuWo_ListAD)) {
delete obj.data.songListTopContext;
body = $.toStr(obj);
const KuWoLn = {
body: body
};
$.done(KuWoLn);
}
if (url.match(KuWo_BookAD)) {
delete obj.data;
delete obj.dataV2;
body = $.toStr(obj);
const KuWoLo = {
body: body
};
$.done(KuWoLo);
}
if (url.match(KuWo_BookPageAD)) {
let i = 0;
while (obj.data.child[i]) {
if (/^小焦点/.test(obj.data.child[i].label)) {
delete obj.data.child[i].child;
}
i++;
}
body = $.toStr(obj);
const KuWoLp = {
body: body
};
$.done(KuWoLp);
}
if (url.indexOf(KuWo_TabAD) != -1) {
if ("undefined" !== typeof obj.data.tab.vipTypes[0]) {
let i = 1;
while (obj.data.tab.vipTypes[0].topics[i]) {
delete obj.data.tab.vipTypes[0].topics[i];
i++;
}
}
body = $.toStr(obj);
const KuWoLq = {
body: body
};
$.done(KuWoLq);
}
if (url.match(KuWo_MenuAD)) {
if (obj.hasOwnProperty("data")) {
delete obj.data;
}
body = $.toStr(obj);
const KuWoLr = {
body: body
};
$.done(KuWoLr);
}
if (url.match(KuWo_HomeAD)) {
delete obj.data.listenSomething;
body = $.toStr(obj);
const KuWoLs = {
body: body
};
$.done(KuWoLs);
}
if (url.match(KuWo_HomeTopAD)) {
let Tops = ["发现", "推荐", "听书", "看短剧"];
let i = 0;
while (obj.data.homeTop[i]) {
if (!Tops.includes(obj.data.homeTop[i].title)) {
delete obj.data.homeTop[i];
}
i++;
}
body = $.toStr(obj);
const KuWoLt = {
body: body
};
$.done(KuWoLt);
}
async function getVer() {
url = "https://sharechain.qq.com/cfa48d8b4551a20d5e6c016bdf3823ff";
info = await $.http.get(url).then(a => a.body);
info = info.match(/<article class=\"note-body\">([\s\S]*?)<\/article>/);
res = info[1].replace(/(\s|<.*?>)/g, "");
obj = $.toObj(res);
if (LocVer != obj.kuwo) {
$.msg("需要更新 -> 请更新你的脚本！");
}
KuWo.ver = obj.kuwo;
$.setval($.toStr(KuWo), "KuWo");
}
async function getInfo(c, d) {
let e = "type=" + d + "&user=" + c;
if (!KuWo.user || c != KuWo.user || !KuWo.endTime || new Date().getTime() > KuWo.endTime || !KuWo.keys) {
$.log("正在获取 " + c + " 的授权信息…");
const f = {
url: "https://napi.ltd/getInfo",
body: e
};
let g = $.toObj(await $.http.post(f).then(h => h.body));
for (let h in g) {
if (g.hasOwnProperty(h)) {
KuWo[h] = g[h];
}
}
$.setval($.toStr(KuWo), "KuWo");
$.log("数据获取完成...");
if (g.isVip) {
let j = new Date(KuWo.endTime);
let k = j.getFullYear() + "-" + (j.getMonth() < 10 ? "0" + (j.getMonth() + 1) : j.getMonth() + 1) + "-" + (j.getDate() < 10 ? "0" + j.getDate() : j.getDate());
$.log("当前账户 " + c + " 已授权\n授权有效期至：" + k);
$.msg("当前账户 " + c + " 已授权", "", "授权有效期至：" + k);
} else {
$.log("未能获取到当前账户 " + c + " 的授权信息\n即将再次获取你的授权信息");
const l = {
"open-url": "https://napi.ltd/authPay?action=kuwo&user=" + c,
"media-url": "https://file.napi.ltd/Static/Image/KuWo.png"
};
$.msg("未获取到授权信息", "", "请重启应用或点击本条通知获取授权码", l);
}
} else {
$.log("当前账户 " + c + " 已授权\n祝使用愉快！");
}
}
function NapiCode() {
let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
let b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
this.encode = function (c) {
var d = "";
var e;
var f;
var g;
var h;
var j;
var k;
var l;
var m = 0;
c = _utf8_encode(c);
while (m < c.length) {
e = c.charCodeAt(m++);
f = c.charCodeAt(m++);
g = c.charCodeAt(m++);
h = e >> 2;
j = (e & 3) << 4 | f >> 4;
k = (f & 15) << 2 | g >> 6;
l = g & 63;
if (isNaN(f)) {
k = l = 64;
} else {
if (isNaN(g)) {
l = 64;
}
}
d = d + a.charAt(h) + a.charAt(j) + a.charAt(k) + a.charAt(l);
}
return d;
};
this.decode = function (c) {
var d = "";
var e;
var f;
var g;
var h;
var j;
var k;
var l;
var m = 0;
c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
while (m < c.length) {
h = a.indexOf(c.charAt(m++));
j = a.indexOf(c.charAt(m++));
k = a.indexOf(c.charAt(m++));
l = a.indexOf(c.charAt(m++));
e = h << 2 | j >> 4;
f = (j & 15) << 4 | k >> 2;
g = (k & 3) << 6 | l;
d = d + String.fromCharCode(e);
if (k != 64) {
d = d + String.fromCharCode(f);
}
if (l != 64) {
d = d + String.fromCharCode(g);
}
}
d = _utf8_decode(d);
return d;
};
this.ntoc = function (c) {
radix = b.length;
qutient = +c;
arr = [];
do {
mod = qutient % radix;
qutient = (qutient - mod) / radix;
arr.unshift(a[mod]);
} while (qutient);
return arr.join("");
};
this.cton = function (c) {
radix = b.length;
c = String(c);
len = c.length;
i = 0;
origin_number = 0;
while (i < len) {
origin_number += Math.pow(radix, i++) * a.indexOf(c.charAt(len - i) || 0);
}
return origin_number;
};
this.randStr = function (c) {
let d = "";
for (let e = 0; e < c; e++) {
let f = Math.floor(Math.random() * b.length);
d += b[f];
}
return d;
};
_utf8_encode = function (d) {
d = d.replace(/\r\n/g, "\n");
var e = "";
for (var f = 0; f < d.length; f++) {
var g = d.charCodeAt(f);
if (g < 128) {
e += String.fromCharCode(g);
} else {
if (g > 127 && g < 2048) {
e += String.fromCharCode(g >> 6 | 192);
e += String.fromCharCode(g & 63 | 128);
} else {
e += String.fromCharCode(g >> 12 | 224);
e += String.fromCharCode(g >> 6 & 63 | 128);
e += String.fromCharCode(g & 63 | 128);
}
}
}
return e;
};
_utf8_decode = function (d) {
var e = "";
var f = 0;
c1 = c2 = 0;
var g = c1;
while (f < d.length) {
g = d.charCodeAt(f);
if (g < 128) {
e += String.fromCharCode(g);
f++;
} else {
if (g > 191 && g < 224) {
c2 = d.charCodeAt(f + 1);
e += String.fromCharCode((g & 31) << 6 | c2 & 63);
f += 2;
} else {
c2 = d.charCodeAt(f + 1);
c3 = d.charCodeAt(f + 2);
e += String.fromCharCode((g & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
f += 3;
}
}
}
return e;
};
}
function Env(t, e) {
class s {
constructor(t) {
this.env = t;
}
send(t, e = "GET") {
t = "string" == typeof t ? {
url: t
} : t;
let s = this.get;
"POST" === e && (s = this.post);
const i = new Promise((e, i) => {
s.call(this, t, (t, s, o) => {
t ? i(t) : e(s);
});
});
return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
setTimeout(() => {
s(new Error("请求超时"));
}, e);
})]))(i, t.timeout) : i;
}
get(t) {
return this.send.call(this.env, t);
}
post(t) {
return this.send.call(this.env, t, "POST");
}
}
return new class {
constructor(t, e) {
this.logLevels = {
debug: 0,
info: 1,
warn: 2,
error: 3
};
this.logLevelPrefixs = {
debug: "[DEBUG] ",
info: "[INFO] ",
warn: "[WARN] ",
error: "[ERROR] "
};
this.logLevel = "info";
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
Object.assign(this, e);
this.log("", `🔔${this.name}, 开始!`);
}
getEnv() {
return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
}
isNode() {
return "Node.js" === this.getEnv();
}
isQuanX() {
return "Quantumult X" === this.getEnv();
}
isSurge() {
return "Surge" === this.getEnv();
}
isLoon() {
return "Loon" === this.getEnv();
}
isShadowrocket() {
return "Shadowrocket" === this.getEnv();
}
isStash() {
return "Stash" === this.getEnv();
}
toObj(t, e = null) {
try {
return JSON.parse(t);
} catch {
return e;
}
}
toStr(t, e = null, ...s) {
try {
return JSON.stringify(t, ...s);
} catch {
return e;
}
}
getjson(t, e) {
let s = e;
if (this.getdata(t)) {
try {
s = JSON.parse(this.getdata(t));
} catch {}
}
return s;
}
setjson(t, e) {
try {
return this.setdata(JSON.stringify(t), e);
} catch {
return false;
}
}
getScript(t) {
return new Promise(e => {
this.get({
url: t
}, (t, s, i) => e(i));
});
}
runScript(t, e) {
return new Promise(s => {
let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
i = i ? i.replace(/\n/g, "").trim() : i;
let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
o = o ? 1 * o : 20;
o = e && e.timeout ? e.timeout : o;
const [r, a] = i.split("@");
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
};
this.post(n, (t, e, i) => s(i));
}).catch(t => this.logErr(t));
}
loaddata() {
if (!this.isNode()) {
return {};
}
{
this.fs = this.fs ? this.fs : require("fs");
this.path = this.path ? this.path : require("path");
const t = this.path.resolve(this.dataFile);
const e = this.path.resolve(process.cwd(), this.dataFile);
const s = this.fs.existsSync(t);
const i = !s && this.fs.existsSync(e);
if (!s && !i) {
return {};
}
{
const i = s ? t : e;
try {
return JSON.parse(this.fs.readFileSync(i));
} catch (t) {
return {};
}
}
}
}
writedata() {
if (this.isNode()) {
this.fs = this.fs ? this.fs : require("fs");
this.path = this.path ? this.path : require("path");
const t = this.path.resolve(this.dataFile);
const e = this.path.resolve(process.cwd(), this.dataFile);
const s = this.fs.existsSync(t);
const i = !s && this.fs.existsSync(e);
const o = JSON.stringify(this.data);
s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
}
}
lodash_get(t, e, s) {
const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
let o = t;
for (const t of i) if (o = Object(o)[t], undefined === o) {
return s;
}
return o;
}
lodash_set(t, e, s) {
Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
return t;
}
getdata(t) {
let e = this.getval(t);
if (/^@/.test(t)) {
const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
const o = s ? this.getval(s) : "";
if (o) {
try {
const t = JSON.parse(o);
e = t ? this.lodash_get(t, i, "") : e;
} catch (t) {
e = "";
}
}
}
return e;
}
setdata(t, e) {
let s = false;
if (/^@/.test(e)) {
const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
const r = this.getval(i);
const a = i ? "null" === r ? null : r || "{}" : "{}";
try {
const e = JSON.parse(a);
this.lodash_set(e, o, t);
s = this.setval(JSON.stringify(e), i);
} catch (e) {
const r = {};
this.lodash_set(r, o, t);
s = this.setval(JSON.stringify(r), i);
}
} else {
s = this.setval(t, e);
}
return s;
}
getval(t) {
switch (this.getEnv()) {
case "Surge":
case "Loon":
case "Stash":
case "Shadowrocket":
return $persistentStore.read(t);
case "Quantumult X":
return $prefs.valueForKey(t);
case "Node.js":
this.data = this.loaddata();
return this.data[t];
default:
return this.data && this.data[t] || null;
}
}
setval(t, e) {
switch (this.getEnv()) {
case "Surge":
case "Loon":
case "Stash":
case "Shadowrocket":
return $persistentStore.write(t, e);
case "Quantumult X":
return $prefs.setValueForKey(t, e);
case "Node.js":
this.data = this.loaddata();
this.data[e] = t;
this.writedata();
return true;
default:
return this.data && this.data[e] || null;
}
}
initGotEnv(t) {
this.got = this.got ? this.got : require("got");
this.cktough = this.cktough ? this.cktough : require("tough-cookie");
this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
}
get(t, e = () => {}) {
switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
redirection: false
})), this.getEnv()) {
case "Surge":
case "Loon":
case "Stash":
case "Shadowrocket":
default:
this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
"X-Surge-Skip-Scripting": false
}));
$httpClient.get(t, (t, s, i) => {
!t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
e(t, s, i);
});
break;
case "Quantumult X":
this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
hints: false
}));
$task.fetch(t).then(t => {
const {
statusCode: s,
statusCode: i,
headers: o,
body: r,
bodyBytes: a
} = t;
e(null, {
status: s,
statusCode: i,
headers: o,
body: r,
bodyBytes: a
}, r, a);
}, t => e(t && t.error || "UndefinedError"));
break;
case "Node.js":
let s = require("iconv-lite");
this.initGotEnv(t);
this.got(t).on("redirect", (t, e) => {
try {
if (t.headers["set-cookie"]) {
const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
s && this.ckjar.setCookieSync(s, null);
e.cookieJar = this.ckjar;
}
} catch (t) {
this.logErr(t);
}
}).then(t => {
const {
statusCode: i,
statusCode: o,
headers: r,
rawBody: a
} = t;
const n = s.decode(a, this.encoding);
e(null, {
status: i,
statusCode: o,
headers: r,
rawBody: a,
body: n
}, n);
}, t => {
const {
message: i,
response: o
} = t;
e(i, o, o && s.decode(o.rawBody, this.encoding));
});
break;
}
}
post(t, e = () => {}) {
const s = t.method ? t.method.toLocaleLowerCase() : "post";
switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
redirection: false
})), this.getEnv()) {
case "Surge":
case "Loon":
case "Stash":
case "Shadowrocket":
default:
this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
"X-Surge-Skip-Scripting": false
}));
$httpClient[s](t, (t, s, i) => {
!t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
e(t, s, i);
});
break;
case "Quantumult X":
t.method = s;
this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
hints: false
}));
$task.fetch(t).then(t => {
const {
statusCode: s,
statusCode: i,
headers: o,
body: r,
bodyBytes: a
} = t;
e(null, {
status: s,
statusCode: i,
headers: o,
body: r,
bodyBytes: a
}, r, a);
}, t => e(t && t.error || "UndefinedError"));
break;
case "Node.js":
let i = require("iconv-lite");
this.initGotEnv(t);
const {
url: o,
...r
} = t;
this.got[s](o, r).then(t => {
const {
statusCode: s,
statusCode: o,
headers: r,
rawBody: a
} = t;
const n = i.decode(a, this.encoding);
e(null, {
status: s,
statusCode: o,
headers: r,
rawBody: a,
body: n
}, n);
}, t => {
const {
message: s,
response: o
} = t;
e(s, o, o && i.decode(o.rawBody, this.encoding));
});
break;
}
}
time(t, e = null) {
const s = e ? new Date(e) : new Date();
let i = {
"M+": s.getMonth() + 1,
"d+": s.getDate(),
"H+": s.getHours(),
"m+": s.getMinutes(),
"s+": s.getSeconds(),
"q+": Math.floor((s.getMonth() + 3) / 3),
S: s.getMilliseconds()
};
/(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
return t;
}
queryStr(t) {
let e = "";
for (const s in t) {
let i = t[s];
null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
}
e = e.substring(0, e.length - 1);
return e;
}
msg(e = t, s = "", i = "", o = {}) {
const r = t => {
const {
$open: e,
$copy: s,
$media: i,
$mediaMime: o
} = t;
switch (typeof t) {
case undefined:
return t;
case "string":
switch (this.getEnv()) {
case "Surge":
case "Stash":
default:
return {
url: t
};
case "Loon":
case "Shadowrocket":
return t;
case "Quantumult X":
return {
"open-url": t
};
case "Node.js":
return;
}
case "object":
switch (this.getEnv()) {
case "Surge":
case "Stash":
case "Shadowrocket":
default:
{
const r = {};
let a = t.openUrl || t.url || t["open-url"] || e;
a && Object.assign(r, {
action: "open-url",
url: a
});
let n = t["update-pasteboard"] || t.updatePasteboard || s;
if (n && Object.assign(r, {
action: "clipboard",
text: n
}), i) {
let t;
let e;
let s;
if (i.startsWith("http")) {
t = i;
} else {
if (i.startsWith("data:")) {
const [t] = i.split(";");
const [, o] = i.split(",");
e = o;
s = t.replace("data:", "");
} else {
e = i;
s = (t => {
const e = {
JVBERi0: "application/pdf",
R0lGODdh: "image/gif",
R0lGODlh: "image/gif",
iVBORw0KGgo: "image/png",
"/9j/": "image/jpg"
};
for (var s in e) if (0 === t.indexOf(s)) {
return e[s];
}
return null;
})(i);
}
}
Object.assign(r, {
"media-url": t,
"media-base64": e,
"media-base64-mime": o ?? s
});
}
Object.assign(r, {
"auto-dismiss": t["auto-dismiss"],
sound: t.sound
});
return r;
}
case "Loon":
{
const s = {};
let o = t.openUrl || t.url || t["open-url"] || e;
View remainder of file in raw view




Footer
© 2025 GitHub, Inc.
Footer navigation
	•	Terms
	•	Privacy
	•	Security
	•	Status
	•	Docs
	•	Contact
	•	Manage cookies
	•	Do not share my personal information


