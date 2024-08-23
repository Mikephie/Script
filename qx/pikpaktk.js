let obj = JSON.parse($response.body); 

  obj.expire = "2024-11-29T10:58:16+08:00";  
  
  obj.pro = true;
  obj.teamPro = true;
 obj.activeTeamUser =  true;
  obj.teamUser = true;
 obj.freetrail = true;
  
$done({body: JSON.stringify(obj)});

https:\/\/ticktick\.com\/api\/v2\/user\/status