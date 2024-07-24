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
      "normalized_user_tier" : "pro",
      "prompt_first_time_feedback" : "no",
      "profile_username" : null,
      "profile_image_url" : null,
      "applet_quota_slots_total" : -1,
      "profile_provider" : null,
      "marketing_push_notification_setting" : true,
      "user_subscriptions" : [
        {
          "expires_at" : "2024-07-31 07:04:52 -0700",
          "id" : "661203",
          "status" : "active",
          "payment_type" : "apple",
          "plan_id" : "pro"
        }
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
      "applet_quota_slots_remaining" : -1,
      "is_platform_partner_subscriber" : true,
      "send_alerts" : true,
      "unlimited_applet_enables" : false,
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
      "is_beta_subscriber" : false,
      "tier" : "pro",
      "user_login_providers" : [
        {
          "channel" : {
            "module_name" : "apple_id"
          }
        }
      ]
    },
    "live_applets" : [
      {
        "applet" : {
          "normalized_applet" : {
            "can_push_enable" : false,
            "brand_color" : "#1db954",
            "failed_applet_run_notifications_enabled" : true,
            "status" : "enabled_for_user",
            "background_images" : {
              "lg_background_image_url" : null,
              "sm_background_image_url" : null
            },
            "service_slug" : "spotify",
            "archived" : false,
            "by_service_owner" : false,
            "configurations" : [

            ],
            "mobile_live_fields" : [
              {
                "name" : "if_notifications.send_notification",
                "type" : "action",
                "fields" : {

                }
              }
            ],
            "name" : "If you save a new episode to your library, then Send a notification from the IFTTT app",
            "type" : "applet",
            "installs_count" : 1,
            "push_enabled" : false,
            "id" : "ZmDrGWe3",
            "intermediate_pro_features" : false,
            "instant" : false,
            "applet_feedback_by_user" : null,
            "pro_features" : false,
            "permissions" : [
              {
                "service_slug" : "spotify"
              },
              {
                "service_slug" : "if_notifications"
              }
            ],
            "just_enabled" : false,
            "channels" : [
              {
                "id" : "51464135",
                "brand_color" : "1db954",
                "monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
                "connected" : true,
                "embedded_redirect_uris" : [

                ],
                "is_hidden" : null,
                "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
                "image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
                "short_name" : "Spotify",
                "lrg_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
                "requires_user_authentication" : true,
                "description_html" : "<p>Spotify is a digital music service that gives you access to millions of songs. Applets can help you save your Discover Weekly and Release Radar playlists, share your favorite tunes, and much more. </p>\n",
                "can_be_autoactivated" : false,
                "allow_multiple_live_channels" : false,
                "name" : "Spotify",
                "module_name" : "spotify"
              },
              {
                "id" : "651849913",
                "brand_color" : "0099ff",
                "monochrome_image_url" : "https://assets.ifttt.com/images/channels/651849913/icons/monochrome_regular.png",
                "connected" : true,
                "embedded_redirect_uris" : [

                ],
                "is_hidden" : false,
                "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/651849913/icons/monochrome_large.png",
                "image_url" : "https://assets.ifttt.com/images/channels/651849913/icons/monochrome_regular.png",
                "short_name" : "Notification",
                "lrg_image_url" : "https://assets.ifttt.com/images/channels/651849913/icons/monochrome_large.png",
                "requires_user_authentication" : false,
                "description_html" : "<p>Notifications work seamlessly on any Android or iOS device with the IFTTT app installed. Get the information you want, when you want it. </p>\n",
                "can_be_autoactivated" : false,
                "allow_multiple_live_channels" : false,
                "name" : "Notifications",
                "module_name" : "if_notifications"
              }
            ],
            "created_at" : "2024-06-23 00:56:55 -0700",
            "config_type" : "static",
            "published" : false,
            "author" : "mikephiemy",
            "description" : ""
          }
        }
      },
      {
        "applet" : {
          "normalized_applet" : {
            "can_push_enable" : true,
            "brand_color" : "#1db954",
            "failed_applet_run_notifications_enabled" : true,
            "status" : "enabled_for_user",
            "background_images" : {
              "lg_background_image_url" : null,
              "sm_background_image_url" : null
            },
            "service_slug" : "spotify",
            "archived" : false,
            "by_service_owner" : false,
            "configurations" : [

            ],
            "mobile_live_fields" : [

            ],
            "name" : "If New saved track, then Send yourself an email from mikephie@gmail.com",
            "type" : "applet",
            "installs_count" : 1,
            "push_enabled" : true,
            "id" : "saUpy9kQ",
            "intermediate_pro_features" : false,
            "instant" : false,
            "applet_feedback_by_user" : null,
            "pro_features" : false,
            "permissions" : [
              {
                "service_slug" : "spotify"
              },
              {
                "service_slug" : "gmail"
              }
            ],
            "just_enabled" : false,
            "channels" : [
              {
                "id" : "33",
                "brand_color" : "23448b",
                "monochrome_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_regular.png",
                "connected" : true,
                "embedded_redirect_uris" : [

                ],
                "is_hidden" : false,
                "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_large.png",
                "image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_regular.png",
                "short_name" : "Gmail",
                "lrg_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_large.png",
                "requires_user_authentication" : true,
                "description_html" : "<p>Connect Gmail to send emails to yourself and others.</p>\n",
                "can_be_autoactivated" : false,
                "allow_multiple_live_channels" : true,
                "name" : "Gmail",
                "module_name" : "gmail"
              },
              {
                "id" : "51464135",
                "brand_color" : "1db954",
                "monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
                "connected" : true,
                "embedded_redirect_uris" : [

                ],
                "is_hidden" : null,
                "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
                "image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
                "short_name" : "Spotify",
                "lrg_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
                "requires_user_authentication" : true,
                "description_html" : "<p>Spotify is a digital music service that gives you access to millions of songs. Applets can help you save your Discover Weekly and Release Radar playlists, share your favorite tunes, and much more. </p>\n",
                "can_be_autoactivated" : false,
                "allow_multiple_live_channels" : false,
                "name" : "Spotify",
                "module_name" : "spotify"
              }
            ],
            "created_at" : "2024-07-24 04:55:22 -0700",
            "config_type" : "static",
            "published" : false,
            "author" : "mikephiemy",
            "description" : ""
          }
        }
      },
      {
        "applet" : {
          "normalized_applet" : {
            "can_push_enable" : true,
            "brand_color" : "#1db954",
            "failed_applet_run_notifications_enabled" : true,
            "status" : "enabled_for_user",
            "background_images" : {
              "lg_background_image_url" : null,
              "sm_background_image_url" : null
            },
            "service_slug" : "spotify",
            "archived" : false,
            "by_service_owner" : false,
            "configurations" : [

            ],
            "mobile_live_fields" : [

            ],
            "name" : "If a new episode is released, then Send yourself an email from mikephie@gmail.com",
            "type" : "applet",
            "installs_count" : 1,
            "push_enabled" : false,
            "id" : "qEW5RCgn",
            "intermediate_pro_features" : false,
            "instant" : false,
            "applet_feedback_by_user" : null,
            "pro_features" : false,
            "permissions" : [
              {
                "service_slug" : "spotify"
              },
              {
                "service_slug" : "gmail"
              }
            ],
            "just_enabled" : true,
            "channels" : [
              {
                "id" : "33",
                "brand_color" : "23448b",
                "monochrome_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_regular.png",
                "connected" : true,
                "embedded_redirect_uris" : [

                ],
                "is_hidden" : false,
                "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_large.png",
                "image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_regular.png",
                "short_name" : "Gmail",
                "lrg_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_large.png",
                "requires_user_authentication" : true,
                "description_html" : "<p>Connect Gmail to send emails to yourself and others.</p>\n",
                "can_be_autoactivated" : false,
                "allow_multiple_live_channels" : true,
                "name" : "Gmail",
                "module_name" : "gmail"
              },
              {
                "id" : "51464135",
                "brand_color" : "1db954",
                "monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
                "connected" : true,
                "embedded_redirect_uris" : [

                ],
                "is_hidden" : null,
                "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
                "image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
                "short_name" : "Spotify",
                "lrg_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
                "requires_user_authentication" : true,
                "description_html" : "<p>Spotify is a digital music service that gives you access to millions of songs. Applets can help you save your Discover Weekly and Release Radar playlists, share your favorite tunes, and much more. </p>\n",
                "can_be_autoactivated" : false,
                "allow_multiple_live_channels" : false,
                "name" : "Spotify",
                "module_name" : "spotify"
              }
            ],
            "created_at" : "2024-07-24 07:06:21 -0700",
            "config_type" : "static",
            "published" : false,
            "author" : "mikephiemy",
            "description" : ""
          }
        }
      }
    ],
    "applets" : [
      {
        "normalized_applet" : {
          "can_push_enable" : true,
          "brand_color" : "#1db954",
          "failed_applet_run_notifications_enabled" : true,
          "status" : "enabled_for_user",
          "background_images" : {
            "lg_background_image_url" : null,
            "sm_background_image_url" : null
          },
          "service_slug" : "spotify",
          "archived" : false,
          "by_service_owner" : false,
          "configurations" : [

          ],
          "mobile_live_fields" : [

          ],
          "name" : "If a new episode is released, then Send yourself an email from mikephie@gmail.com",
          "type" : "applet",
          "installs_count" : 1,
          "push_enabled" : false,
          "id" : "qEW5RCgn",
          "intermediate_pro_features" : false,
          "instant" : false,
          "applet_feedback_by_user" : null,
          "pro_features" : false,
          "permissions" : [
            {
              "service_slug" : "spotify"
            },
            {
              "service_slug" : "gmail"
            }
          ],
          "just_enabled" : true,
          "channels" : [
            {
              "id" : "33",
              "brand_color" : "23448b",
              "monochrome_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_regular.png",
              "connected" : true,
              "embedded_redirect_uris" : [

              ],
              "is_hidden" : false,
              "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_large.png",
              "image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_regular.png",
              "short_name" : "Gmail",
              "lrg_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_large.png",
              "requires_user_authentication" : true,
              "description_html" : "<p>Connect Gmail to send emails to yourself and others.</p>\n",
              "can_be_autoactivated" : false,
              "allow_multiple_live_channels" : true,
              "name" : "Gmail",
              "module_name" : "gmail"
            },
            {
              "id" : "51464135",
              "brand_color" : "1db954",
              "monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
              "connected" : true,
              "embedded_redirect_uris" : [

              ],
              "is_hidden" : null,
              "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
              "image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
              "short_name" : "Spotify",
              "lrg_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
              "requires_user_authentication" : true,
              "description_html" : "<p>Spotify is a digital music service that gives you access to millions of songs. Applets can help you save your Discover Weekly and Release Radar playlists, share your favorite tunes, and much more. </p>\n",
              "can_be_autoactivated" : false,
              "allow_multiple_live_channels" : false,
              "name" : "Spotify",
              "module_name" : "spotify"
            }
          ],
          "created_at" : "2024-07-24 07:06:21 -0700",
          "config_type" : "static",
          "published" : false,
          "author" : "mikephiemy",
          "description" : ""
        }
      },
      {
        "normalized_applet" : {
          "can_push_enable" : true,
          "brand_color" : "#1db954",
          "failed_applet_run_notifications_enabled" : true,
          "status" : "enabled_for_user",
          "background_images" : {
            "lg_background_image_url" : null,
            "sm_background_image_url" : null
          },
          "service_slug" : "spotify",
          "archived" : false,
          "by_service_owner" : false,
          "configurations" : [

          ],
          "mobile_live_fields" : [

          ],
          "name" : "If New saved track, then Send yourself an email from mikephie@gmail.com",
          "type" : "applet",
          "installs_count" : 1,
          "push_enabled" : true,
          "id" : "saUpy9kQ",
          "intermediate_pro_features" : false,
          "instant" : false,
          "applet_feedback_by_user" : null,
          "pro_features" : false,
          "permissions" : [
            {
              "service_slug" : "spotify"
            },
            {
              "service_slug" : "gmail"
            }
          ],
          "just_enabled" : false,
          "channels" : [
            {
              "id" : "33",
              "brand_color" : "23448b",
              "monochrome_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_regular.png",
              "connected" : true,
              "embedded_redirect_uris" : [

              ],
              "is_hidden" : false,
              "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_large.png",
              "image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_regular.png",
              "short_name" : "Gmail",
              "lrg_image_url" : "https://assets.ifttt.com/images/channels/33/icons/monochrome_large.png",
              "requires_user_authentication" : true,
              "description_html" : "<p>Connect Gmail to send emails to yourself and others.</p>\n",
              "can_be_autoactivated" : false,
              "allow_multiple_live_channels" : true,
              "name" : "Gmail",
              "module_name" : "gmail"
            },
            {
              "id" : "51464135",
              "brand_color" : "1db954",
              "monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
              "connected" : true,
              "embedded_redirect_uris" : [

              ],
              "is_hidden" : null,
              "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
              "image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
              "short_name" : "Spotify",
              "lrg_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
              "requires_user_authentication" : true,
              "description_html" : "<p>Spotify is a digital music service that gives you access to millions of songs. Applets can help you save your Discover Weekly and Release Radar playlists, share your favorite tunes, and much more. </p>\n",
              "can_be_autoactivated" : false,
              "allow_multiple_live_channels" : false,
              "name" : "Spotify",
              "module_name" : "spotify"
            }
          ],
          "created_at" : "2024-07-24 04:55:22 -0700",
          "config_type" : "static",
          "published" : false,
          "author" : "mikephiemy",
          "description" : ""
        }
      },
      {
        "normalized_applet" : {
          "can_push_enable" : false,
          "brand_color" : "#1db954",
          "failed_applet_run_notifications_enabled" : true,
          "status" : "enabled_for_user",
          "background_images" : {
            "lg_background_image_url" : null,
            "sm_background_image_url" : null
          },
          "service_slug" : "spotify",
          "archived" : false,
          "by_service_owner" : false,
          "configurations" : [

          ],
          "mobile_live_fields" : [
            {
              "name" : "if_notifications.send_notification",
              "type" : "action",
              "fields" : {

              }
            }
          ],
          "name" : "If you save a new episode to your library, then Send a notification from the IFTTT app",
          "type" : "applet",
          "installs_count" : 1,
          "push_enabled" : false,
          "id" : "ZmDrGWe3",
          "intermediate_pro_features" : false,
          "instant" : false,
          "applet_feedback_by_user" : null,
          "pro_features" : false,
          "permissions" : [
            {
              "service_slug" : "spotify"
            },
            {
              "service_slug" : "if_notifications"
            }
          ],
          "just_enabled" : false,
          "channels" : [
            {
              "id" : "51464135",
              "brand_color" : "1db954",
              "monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
              "connected" : true,
              "embedded_redirect_uris" : [

              ],
              "is_hidden" : null,
              "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
              "image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_regular.png",
              "short_name" : "Spotify",
              "lrg_image_url" : "https://assets.ifttt.com/images/channels/51464135/icons/monochrome_large.png",
              "requires_user_authentication" : true,
              "description_html" : "<p>Spotify is a digital music service that gives you access to millions of songs. Applets can help you save your Discover Weekly and Release Radar playlists, share your favorite tunes, and much more. </p>\n",
              "can_be_autoactivated" : false,
              "allow_multiple_live_channels" : false,
              "name" : "Spotify",
              "module_name" : "spotify"
            },
            {
              "id" : "651849913",
              "brand_color" : "0099ff",
              "monochrome_image_url" : "https://assets.ifttt.com/images/channels/651849913/icons/monochrome_regular.png",
              "connected" : true,
              "embedded_redirect_uris" : [

              ],
              "is_hidden" : false,
              "lrg_monochrome_image_url" : "https://assets.ifttt.com/images/channels/651849913/icons/monochrome_large.png",
              "image_url" : "https://assets.ifttt.com/images/channels/651849913/icons/monochrome_regular.png",
              "short_name" : "Notification",
              "lrg_image_url" : "https://assets.ifttt.com/images/channels/651849913/icons/monochrome_large.png",
              "requires_user_authentication" : false,
              "description_html" : "<p>Notifications work seamlessly on any Android or iOS device with the IFTTT app installed. Get the information you want, when you want it. </p>\n",
              "can_be_autoactivated" : false,
              "allow_multiple_live_channels" : false,
              "name" : "Notifications",
              "module_name" : "if_notifications"
            }
          ],
          "created_at" : "2024-06-23 00:56:55 -0700",
          "config_type" : "static",
          "published" : false,
          "author" : "mikephiemy",
          "description" : ""
        }
      }
    ]
  }
}


$done({body : JSON.stringify(mikephie)});