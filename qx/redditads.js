/* Reddit Ads Free

[General]
force-http-engine-hosts = gql.reddit.com, gql-fed.reddit.com

[rewrite_local]
^https?:\/\/gql(-fed)?\.reddit\.com url script-response-body https:

[MITM]
hostname = gql.reddit.com, gql-fed.reddit.com