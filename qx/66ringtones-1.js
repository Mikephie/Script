/******************************

脚本名称: Ever Play 解锁VIP
下载地址：商店
脚本作者：Mikephie
更新时间：2024年6月15日 15:56
问题反馈：TG
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]
^https:\/\/msg\.umengcloud\.com\/tag\/add url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/66ringtones-1.js

[mitm] 
hostname = msg.umengcloud.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "data" : {
    "me" : {
      "login" : "Rnik666🎖",
      "is_admin" : false,
      "can_view_p_f_s" : true,
      "next_onboarding_step" : "goals",
      "created_at" : "2024-06-22 04:45:24 -0700",
      "id" : "31684150",
      "is_newsletter_subscriber" : true,
      "is_platform_developer" : false,
      "normalized_user_tier" : "Pro",
      "prompt_first_time_feedback" : "not_yet",
      "profile_username" : null,
      "profile_image_url" : null,
      "applet_quota_slots_total" : 2,
      "profile_provider" : null,
      "marketing_push_notification_setting" : true,
      "user_subscriptions" : [

      ],
      "website" : null,
      "is_promotions_subscriber" : false,
      "permissions" : {
        "multi_action" : {
          "minimum_tier" : "intermediate_pro",
          "permitted" : true
        },
        "multi_service_account" : {
          "minimum_tier" : "pro",
          "permitted" : true
        },
        "queries" : {
          "minimum_tier" : "pro",
          "permitted" : true
        },
        "filter_code" : {
          "minimum_tier" : "pro",
          "permitted" : true
        }
      },
      "email" : "rnik666@gmail.com",
      "alerts_push_notification_setting" : true,
      "applet_quota_slots_remaining" : 999,
      "is_platform_partner_subscriber" : true,
      "send_alerts" : true,
      "unlimited_applet_enables" : true,
      "two_factor_auth" : null,
      "home_screen_preference" : "",
      "bio" : null,
      "organizations" : [

      ],
      "time_zone" : {
        "id" : "Asia/Shanghai",
        "formatted_offset" : "+08:00",
        "name" : "Beijing"
      },
      "is_beta_subscriber" : true,
      "tier" : "pro",
      "user_login_providers" : [

      ]
    },
    "live_applets" : [

    ],
    "applets" : [

    ]
  }
}


$done({body : JSON.stringify(mikephie)});