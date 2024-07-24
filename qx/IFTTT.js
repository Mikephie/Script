/*        
        ➪：IFTTT

        ★：解锁永久🆅🅸🅿

        𖣘： 🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
 
[rewrite_local]
^https?:\/\/ifttt\.com\/api\/v3\/graph url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/IFTTT.js

[MITM]
hostname = ifttt.com

*******************************/

var mikephie = JSON.parse($response.body);

    mikephie = {
  "data" : {
    "me" : {
      "login" : "Mikephie🎖",
      "is_admin" : false,
      "can_view_p_f_s" : true,
      "next_onboarding_step" : "goals",
      "created_at" : "2024-06-22 06:39:01 -0700",
      "id" : "31684456",
      "is_newsletter_subscriber" : true,
      "is_platform_developer" : false,
      "normalized_user_tier" : "Pro",
      "prompt_first_time_feedback" : "not_yet",
      "profile_username" : null,
      "profile_image_url" : null,
      "applet_quota_slots_total" : -1,
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
      "email" : "mikephiemy@gmail.com",
      "alerts_push_notification_setting" : true,
      "applet_quota_slots_remaining" : 88888,
      "is_platform_partner_subscriber" : true,
      "send_alerts" : true,
      "unlimited_applet_enables" : true,
      "two_factor_auth" : null,
      "home_screen_preference" : "",
      "bio" : null,
      "organizations" : [

      ],
      "time_zone" : {
        "id" : "Asia/Singapore",
        "formatted_offset" : "+08:00",
        "name" : "Singapore"
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