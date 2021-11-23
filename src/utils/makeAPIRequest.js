const makeAPIRequest = (path, method, params) =>
  fetch(path, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  })
    .then((response) => response.json())
    .then((jsonResponseData) => {
      return jsonResponseData;
    })
    .catch((err) => console.log(err));

export default makeAPIRequest;
