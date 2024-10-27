#!name=AXS Payment
#!desc=AXS Payment 去广告
#!homepage=https://mike
#!author=mike
#!icon=https://raw.githubusercontent.com/Mikephie/Script/main/Mike_axs.js

[rewrite_local]
^https?:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage\/[^\/]+\/whatsnew\.php\?paramData=[A-F0-9]+&keyEnc=[A-F0-9]+&idx=\d+&APP_VERSION=\d+\.\d+\.\d+ url reject-200
^https:\/\/m-station2\.axs\.com\.sg\/AXSMobile\/InfoPage\/(?:InfoPageProcess\.php|(?:[^\/]+\/(?:images\/[^\/]+\.(?:png|jpg)|css\/[^\/]+\.css))(?:\?\d+)?)$ url reject-200


hostname = m-station2.axs.com.sg