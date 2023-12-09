export const postDataApi = async (apiUrl, headers, method, postData) => {
  const baseUrl = "https://e-commerce-api-51vp.onrender.com" || "";
  const url = `${baseUrl}/${apiUrl}`;

  const requestOptions = {
    method: method,
    headers: {
      accept: "application/json",
      ...headers,
    },
  };

  if (postData) {
    requestOptions.body = JSON.stringify(postData);
  }

  const res = await fetch(url, requestOptions);

  if (!res.ok) {
    let errorData = {};
    try {
      errorData = await res.json();
    } catch (error) {
      // Handle non-JSON error responses
      throw new Error(`${res.status} ${res.statusText}: ${res.text()}`);
    }

    throw new Error(`${res.status} ${res.statusText}: ${JSON.stringify(errorData)}`);
  }

  return res.json();
};
