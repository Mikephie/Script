#!name=AXS Payment

#!desc=AXS Payment 去广告

#!homepage=https://mike

#!author=mike

#!icon=> 重写地址：https://raw.githubusercontent.com/Mikephie/Script/main/Mike_axs.js





hostname=m-station2.axs.com.sg





^https?:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/(InfoPage\/.*|highlight\/.*) url reject-200
