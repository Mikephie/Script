/******************************

脚本名称: Notebook
下载地址：商店
脚本作者：Mikephie
更新时间：2024-06-08
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
# VIP 订阅, 100G 空间, Token
^https:\/\/notebook\.zoho\.com\/api\/v1\/(userprofile\/accounts\/payment\?action=get_current_plan_detail&include_(expired_plans=true|purchase_platform=false)|payments\/feature\/consumptions|userprofile\/accounts\/payment\?action=get_feature_template(&platform=ios)?|userprofile\/accounts\/payment\?action=get_feature_template)$|^https:\/\/sdk-apptics\.zoho\.com\/sdk\/api\/apptics\/v1\/app\/bearertoken$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notetest.js

# VIP 多项权益
^https:\/\/notebook\.zoho\.com\/api\/v1\/userprofile\/accounts\/payment\?action=get_feature_template&platform=ios url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebook-all.js


[MITM]
hostname = notebook.zoho.com