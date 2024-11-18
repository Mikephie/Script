/*  notebook
     @Mike

[rewrite_local] 
^https://notebook.zoho.com/api/v1/userprofile/accounts/payment?action=get_feature_template url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/notebook-all.js

[MITM]
hostname = notebook.zoho.com
*/

// 公共模板：定义通用的元数据
const template = {
  start_date: 1717644792301,
  end_date: 3742762088000,
  grace_period: 999160000000,
  source: "PAID",
  type: "PRIMARY"
};

// 功能列表：仅需要定义功能名和特定属性
const features = [
  {
    feature_name: "AUDIO_CARD",
    limits: [
      {
        value: "60",
        applied_for: "NOTE",
        name: "DURATION",
        unit: "MINUTES"
      }
    ]
  },
  {
    feature_name: "OCR"
  },
  {
    feature_name: "CHAT_WITH_US"
  },
  {
    feature_name: "FLIGHT_CARD"
  },
  {
    feature_name: "EMAIL_IN"
  },
  {
    feature_name: "CUSTOM_RECURRING_REMINDER"
  },
  {
    feature_name: "PREMIUM_COVERS"
  },
  {
    feature_name: "NOTECARD",
    limits: [
      {
        value: "100",
        applied_for: "NOTE",
        name: "VERSIONS",
        unit: "RESOURCES"
      },
      {
        value: "209715200",
        applied_for: "NOTE",
        name: "MAX_SIZE",
        unit: "BYTES"
      },
      {
        value: "1073741824",
        applied_for: "NOTE",
        name: "MAX_FILE_SIZE",
        unit: "BYTES"
      }
    ]
  },
  {
    feature_name: "STORAGE",
    limits: [
      {
        value: "107374182400",
        name: "MAX_SIZE",
        unit: "BYTES",
        user_type: "INDIVIDUAL_USER"
      }
    ]
  },
  {
    feature_name: "PHONE_SUPPORT"
  },
  {
    feature_name: "NOTEBOOK_SHARING",
    limits: [
      {
        value: "CO_OWNER",
        applied_for: "NOTEBOOK",
        name: "PERMISSION",
        unit: "STRING"
      },
      {
        value: "CO_OWNER",
        applied_for: "COLLECTION",
        name: "PERMISSION",
        unit: "STRING"
      },
      {
        value: "CO_OWNER",
        applied_for: "NOTECARD",
        name: "PERMISSION",
        unit: "STRING"
      },
      {
        value: "WRITE_DELETE",
        applied_for: "NOTEBOARD",
        name: "PERMISSION",
        unit: "STRING"
      },
      {
        value: "READ_WRITE",
        applied_for: "WHITEBOARD",
        name: "PERMISSION",
        unit: "STRING"
      }
    ]
  }
];

// 动态生成 JSON 配置
const result = features.map(feature => {
  // 公共模板数据
  const metaData = [{ ...template }];
  
  // 如果功能有特定限制，添加到元数据中
  if (feature.limits) {
    metaData[0].limits = feature.limits;
  }

  return {
    feature_name: feature.feature_name,
    feature_meta_data: metaData
  };
});

// 返回最终 JSON
$done({ body: JSON.stringify({ code: 200, status: "Success", feature_template: result }) });