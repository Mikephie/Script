const modifyResponse = (response) => {
  try {
    let data = JSON.parse(response.body);
    if (data && data.data && data.data.current_device) {
      data.data.current_device.trial_end_at = 2764454888;
      data.data.current_device.trial_status = 1;
      response.body = JSON.stringify(data);
    }
  } catch (e) {
    console.error("Error modifying response", e);
  }
  return response;
};

$done(modifyResponse($response));