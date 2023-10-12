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

# ======= 去水印 ======= #
^https?:\/\/.*\.pipix\.com\/bds\/(feed\/stream|comment\/cell_reply|cell\/cell_comment|cell\/detail|ward\/list|user\/favorite|user\/cell_coment|user\/cell_userfeed|user\/publish_list) url script-response-body https://gist.githubusercontent.com/ddgksf2013/bb1dadbd32f67c68772caebcc70b0a33/raw/pipixia.adblock.js
# ======= 去广告 ======= #
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/highlight url reject-200
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage url reject-dict
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/InfoPage url reject-dict
^https:\/\/m-station\.axs\.com\.sg\/AXSMobile\/highlight url reject-200

[mitm]
 

hostname = m-station.axs.com.sg, m-station2.axs.com.sg

***********************************/