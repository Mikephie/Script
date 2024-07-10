#!name=AXS Payment

#!desc=AXS Payment 去广告

#!homepage=https://mike

#!author=mike

#!icon=https://raw.githubusercontent.com/Mikephie/Script/main/Mike_axs.js





hostname=m-station2.axs.com.sg





^https?:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/(InfoPage\/.*|highlight\/.*) url reject-dict
