/***********************************

> 应用名称：AXS Payment
> 下载地址：http://t.cn/Air8PM5k
> 脚本作者：@Mikephie
> 解锁说明：去广告+去水印
> 更新时间：2023年10月11日 23:20
> 特别提醒：如需转载请注明出处，谢谢合作！
> 重写地址：https://raw.githubusercontent.com/Mikephie/Script/main/Mike_axs.js
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️
          
          
[rewrite_local]

# ======= 去广告 ======= #

^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage\/MastercardPromo2023_16_31Oct\/popup\.php\?Info_ID=I00306&Channel_ID=4&Device_ID=is0607557bfb15a6 url reject-200
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage\/InfoPageProcess\.php url reject-200
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage\/popupCategoryProcess\.php url reject-200
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage\/CIMB_PersonalLoan_Oct2023\/css\/custom\.css url reject-200
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage\/MastercardPromo2023_16_31Oct\/css\/custom\.css url reject-200
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage url reject-200
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/InfoPage url reject-200
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/highlight url reject-dict
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/highlight url reject-dict
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/UtilsWeb url reject-dict
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/UtilsWeb url reject-dict

[mitm]
 

hostname = m-station.axs.com.sg, m-station2.axs.com.sg

***********************************/