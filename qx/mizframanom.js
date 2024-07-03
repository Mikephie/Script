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

    mikephie = [
  {
    "appID" : "206A447E-7A67-4C16-80B9-99D67E802625",
    "payload" : [
      "majorSystemVersion:iOS 17",
      "telemetryClientVersion:SwiftClient 1.3.0",
      "targetEnvironment:native",
      "majorMinorSystemVersion:iOS 17.5",
      "isTestFlight:false",
      "buildNumber:17",
      "packageId:$rc_monthly",
      "isAppStore:false",
      "platform:iOS",
      "operatingSystem:iOS",
      "revenuecatUserId:$RCAnonymousID:5f15e69d93144d23981ba7aebfda923d",
      "isDebug:false",
      "isSimulator:false",
      "appVersion:2.6",
      "modelName:iPad16,6",
      "systemVersion:iOS 17.5.1",
      "architecture:arm64",
      "locale:en_SG"
    ],
    "sessionID" : "0E6988AF-19DF-4A08-90DA-C0178715D891",
    "type" : "purchase",
    "clientUser" : "ee9ccde2ad726e8f398da76203926dc800be5afa672c0dea7ef3e222597ec983",
    "receivedAt" : "2024-07-03T01:17:28+0000",
    "isTestMode" : "false"
  },
  {
    "appID" : "206A447E-7A67-4C16-80B9-99D67E802625",
    "payload" : [
      "isDebug:false",
      "architecture:arm64",
      "operatingSystem:iOS",
      "plan_text:Monthly Premium",
      "revenuecatUserId:$RCAnonymousID:5f15e69d93144d23981ba7aebfda923d",
      "systemVersion:iOS 17.5.1",
      "majorSystemVersion:iOS 17",
      "targetEnvironment:native",
      "isAppStore:false",
      "telemetryClientVersion:SwiftClient 1.3.0",
      "isSimulator:false",
      "buildNumber:17",
      "majorMinorSystemVersion:iOS 17.5",
      "isTestFlight:false",
      "locale:en_SG",
      "platform:iOS",
      "appVersion:2.6",
      "modelName:iPad16,6"
    ],
    "sessionID" : "0E6988AF-19DF-4A08-90DA-C0178715D891",
    "receivedAt" : "2024-07-03T01:17:32+0000",
    "clientUser" : "ee9ccde2ad726e8f398da76203926dc800be5afa672c0dea7ef3e222597ec983",
    "type" : "view_info",
    "isTestMode" : "false"
  },
  {
    "appID" : "206A447E-7A67-4C16-80B9-99D67E802625",
    "payload" : [
      "isDebug:false",
      "isTestFlight:false",
      "majorMinorSystemVersion:iOS 17.5",
      "majorSystemVersion:iOS 17",
      "targetEnvironment:native",
      "architecture:arm64",
      "locale:en_SG",
      "packageId:$rc_monthly",
      "buildNumber:17",
      "operatingSystem:iOS",
      "revenuecatUserId:$RCAnonymousID:5f15e69d93144d23981ba7aebfda923d",
      "isSimulator:false",
      "appVersion:2.6",
      "modelName:iPad16,6",
      "isAppStore:false",
      "platform:iOS",
      "telemetryClientVersion:SwiftClient 1.3.0",
      "systemVersion:iOS 17.5.1"
    ],
    "isTestMode" : "false",
    "receivedAt" : "2024-07-03T01:17:37+0000",
    "clientUser" : "ee9ccde2ad726e8f398da76203926dc800be5afa672c0dea7ef3e222597ec983",
    "sessionID" : "0E6988AF-19DF-4A08-90DA-C0178715D891",
    "type" : "purchase"
  }
]

$done({body : JSON.stringify(mikephie)});