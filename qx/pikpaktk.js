let obj = JSON.parse($response.body); 

  obj.proEndDate = "3030-03-03T00:00:00.000+0000";  
  
  obj.pro = true;
  obj.teamPro = true;
 obj.activeTeamUser =  true;
  obj.teamUser = true;
 obj.freetrail = true;
  
$done({body: JSON.stringify(obj)});

https:\/\/ticktick\.com\/api\/v2\/user\/status