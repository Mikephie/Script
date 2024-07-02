/*        
        ➪：脚本名称: Mizframa （永久会员）

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹

[rewrite_local]
^https:\/\/nom\.telemetrydeck\.com\/api\/v1\/apps\/206A447E-7A67-4C16-80B9-99D67E802625\/signals\/multiple\/ url script-request-body  https://raw.githubusercontent.com/Mikephie/Script/main/qx/mizframanom.js

[mitm]
hostname = nom.telemetrydeck.com

*******************************/


var mikephie = JSON.parse($response.body);

    mikephie = {
    "appID" : "206A447E-7A67-4C16-80B9-99D67E802625",
    "payload" : [
      "architecture:arm64",
      "duration:1.71 seconds",
      "locale:en_SG",
      "systemVersion:iOS 17.5.1",
      "majorSystemVersion:iOS 17",
      "buildNumber:17",
      "revenuecatUserId:$RCAnonymousID:a22f076a706f4713badfdc68d8fa2c8e",
      "modelName:iPhone16,2",
      "isSimulator:false",
      "appVersion:2.6",
      "telemetryClientVersion:SwiftClient 1.3.0",
      "targetEnvironment:native",
      "isTestFlight:false",
      "majorMinorSystemVersion:iOS 17.5",
      "isAppStore:false",
      "isDebug:false",
      "operatingSystem:iOS",
      "platform:iOS"
    ],
    "sessionID" : "093156A0-AA6E-4670-9ED5-5AE577D85B85",
    "isTestMode" : "false",
    "clientUser" : "c107166a7d65df33cce3a43ef88be2d531fc7b7572c604f97d1db80abcc8f608",
    "receivedAt" : "2024-07-02T05:44:10+0000",
    "type" : "load_mockups"
  },
  {
    "appID" : "206A447E-7A67-4C16-80B9-99D67E802625",
    "payload" : [
      "isSimulator:false",
      "revenuecatUserId:$RCAnonymousID:a22f076a706f4713badfdc68d8fa2c8e",
      "isTestFlight:false",
      "majorMinorSystemVersion:iOS 17.5",
      "majorSystemVersion:iOS 17",
      "buildNumber:17",
      "architecture:arm64",
      "telemetryClientVersion:SwiftClient 1.3.0",
      "operatingSystem:iOS",
      "plan_text:Monthly Premium",
      "appVersion:2.6",
      "systemVersion:iOS 17.5.1",
      "locale:en_SG",
      "targetEnvironment:native",
      "platform:iOS",
      "isAppStore:false",
      "modelName:iPhone16,2",
      "isDebug:false"
    ],
    "sessionID" : "093156A0-AA6E-4670-9ED5-5AE577D85B85",
    "type" : "view_info",
    "clientUser" : "c107166a7d65df33cce3a43ef88be2d531fc7b7572c604f97d1db80abcc8f608",
    "receivedAt" : "2024-07-02T05:44:11+0000",
    "isTestMode" : "false"
  }

$done({body : JSON.stringify(mikephie)});