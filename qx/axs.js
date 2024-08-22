#!name=AXS Payment

#!desc=AXS Payment 去广告

#!homepage=https://mike

#!author=mike

#!icon=https://raw.githubusercontent.com/Mikephie/Script/main/Mike_axs.js

[rewrite_local]
^https?:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/(InfoPage|highlight)\/.*\.(png|jpg|jpeg|gif|js|css)(\?.*)?$ url reject-200


hostname=m-station2.axs.com.sg



#https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/(InfoPage|highlight)\/[A-Za-z0-9_\/?.=&-]+ url reject-200
