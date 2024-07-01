/******************************

脚本名称: NotebookMac
下载地址：商店
脚本作者：Mikephie
更新时间：2024-06-08
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
# VIP 订阅
^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment\?action=get_current_plan_detail&include_purchase_platform=false url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebookMac1.js

# 100G 空间
^https:\/\/notebook\.zoho\.com\/api\/v1\/payments\/feature\/consumptions url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebook-storage.js

# VIP 多项权益
^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment\?action=get_feature_template url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebookMac2.js

# Token
^https:\/\/sdk-apptics\.zoho\.com\/sdk\/api\/apptics\/v1\/app\/bearertoken url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebook-token.js

[MITM]
hostname = notebook.zoho.com
