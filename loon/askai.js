
[Script]
//http-request ^https:\/\/purchase-verifier\.cdwapi\.com\/ios script-path=test1.js, requires-body=true, timeout=60, tag=header
http-response ^https:\/\/purchase-verifier\.cdwapi\.com\/ios script-path=test.js, requires-body=true, timeout=60, tag=test


[MITM]
hostname = purchase-verifier.cdwapi.com