#!name=Reddit
#!desc=过滤推广, 关 NSFW 提示 @xream

[General]

force-http-engine-hosts = %APPEND% gql.reddit.com, gql-fed.reddit.com

[Script]
Reddit = type=http-response,pattern=^https?:\/\/gql(-fed)?\.reddit\.com,requires-body=1,max-size=0,timeout=30,script-path=reddit.js
[MITM]
hostname = %APPEND%, gql.reddit.com, gql-fed.reddit.com