: 'sjb' },  //Whisper-提问
  'chxm1023': { name: 'vip', id: 'black12_alp15_cxi', cm: 'sjb' },  //海风VPN
  'chxm1024': { name: 'vip', id: 'black12_alp15_cxi', cm: 'sjb' }  //蓝月亮VPN
}

//处理bundle_id
if (bundle[bundle_id]) {
  const { id, cm } = bundle[bundle_id];
  mikephie76["subscriber"]["subscriptions"][id] = {
    "is_sandbox": false,
    "period_type": "normal",
    "billing_issues_detected_at": null,
    "unsubscribe_detected_at": null,
    "expires_date": "2033-04-20T00:00:00Z",
    "original_purchase_date": "2024-04-20T00:00:00Z",
    "purchase_date": "2024-04-20T00:00:00Z",
    "store": "app_store"
  };
  mikephie76["subscriber"]["entitlements"][cm] = {
    "expires_date": "2033-04-20T00:00:00Z",
    "product_identifier": id,
    "purchase_date": "2024-04-20T00:00:00Z"
  };
}

//处理UA
if (list[ua]) {
  const { id, cm } = list[ua];
  mikephie76["subscriber"]["non_subscriptions"][id] = [{
    "id": id,
    "is_sandbox": false,
    "purchase_date": "2024-04-20T00:00:00Z",
    "original_purchase_date": "2024-04-20T00:00:00Z",
    "expires_date": "2033-04-20T00:00:00Z"
  }];
  mikephie76["subscriber"]["entitlements"][cm] = {
    "expires_date": "2033-04-20T00:00:00Z",
    "product_identifier": id,
    "purchase_date": "2024-04-20T00:00:00Z"
  };
}

$done({body: JSON.stringify(mikephie76)});
```

Please replace 'chxm1024' with 'mikephie76' and 'chxm1023' with 'mikephie' in the script accordingly.