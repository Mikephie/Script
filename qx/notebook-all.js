/*  notebook
     @Mike

[rewrite_local] 
^https://notebook.zoho.com/api/v1/userprofile/accounts/payment?action=get_feature_template url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebook-all.js

[MITM]
hostname = notebook.zoho.com
*/

// 公共模板：定义通用数据
const commonMeta = {
  start_date: 1717644792301,
  end_date: 3742762088000,
  grace_period: 999160000000,
  source: "PAID",
  type: "PRIMARY"
};

// 定义功能列表
const features = [
  {
    name: "AUDIO_CARD",
    limits: [
      { value: "60", applied_for: "NOTE", name: "DURATION", unit: "MINUTES" }
    ]
  },
  { name: "OCR" },
  { name: "CHAT_WITH_US" },
  { name: "FLIGHT_CARD" },
  { name: "EMAIL_IN" },
  { name: "CUSTOM_RECURRING_REMINDER" },
  { name: "PREMIUM_COVERS" },
  {
    name: "NOTECARD",
    limits: [
      { value: "100", applied_for: "NOTE", name: "VERSIONS", unit: "RESOURCES" },
      { value: "209715200", applied_for: "NOTE", name: "MAX_SIZE", unit: "BYTES" },
      { value: "1073741824", applied_for: "NOTE", name: "MAX_FILE_SIZE", unit: "BYTES" }
    ]
  },
  {
    name: "STORAGE",
    limits: [
      {
        value: "107374182400",
        name: "MAX_SIZE",
        unit: "BYTES",
        user_type: "INDIVIDUAL_USER"
      }
    ]
  },
  { name: "PHONE_SUPPORT" },
  {
    name: "NOTEBOOK_SHARING",
    limits: [
      { value: "CO_OWNER", applied_for: "NOTEBOOK", name: "PERMISSION", unit: "STRING" },
      { value: "CO_OWNER", applied_for: "COLLECTION", name: "PERMISSION", unit: "STRING" },
      { value: "CO_OWNER", applied_for: "NOTECARD", name: "PERMISSION", unit: "STRING" },
      { value: "WRITE_DELETE", applied_for: "NOTEBOARD", name: "PERMISSION", unit: "STRING" },
      { value: "READ_WRITE", applied_for: "WHITEBOARD", name: "PERMISSION", unit: "STRING" }
    ]
  }
];

// 动态生成最终数据
const result = features.map(feature => {
  // 每个功能都使用公共元数据
  const metaData = [{ ...commonMeta }];
  if (feature.limits) metaData[0].limits = feature.limits;

  return {
    feature_name: feature.name,
    feature_meta_data: metaData
  };
});

// 输出 JSON 数据
$done({ body: JSON.stringify({ code: 200, status: "Success", feature_template: result }) });