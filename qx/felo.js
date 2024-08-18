/*        
          ➪：felo实时翻译-同传与语音字幕

          ★：解锁永久🆅🅸🅿

          𖣘：🅜ⓘ🅚ⓔ🅟ⓗ🅘ⓔ

𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹𒊹
[rewrite_local]
# >felo实时翻译-同传与语音字幕
^https?:\/\/(translator|accounts).felo.me\/api\/user.*$ url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/felosubs.js
^https?:\/\/translator.felo.me\/api\/translation\/thirdToken\?token_channel url script-request-header https://raw.githubusercontent.com/Mikephie/Script/main/qx/felotk.js

[mitm] 
hostname = accounts.felo.me,translator.felo.me