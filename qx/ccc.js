/*  ccc
     @Mike



[rewrite_local] 
^https:\/\/ea\.blademaster\.club\/api\/log url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/ccc.js

[mitm]
hostname = ea.blademaster.club

var mikephie = JSON.parse($response.body);

    mikephie.coin_get = 8128;
    mikephie.energy = 888352;
    mikephie.coin = 88823776;
    mikephie.stage = 1999;

$done({body : JSON.stringify(mikephie)});