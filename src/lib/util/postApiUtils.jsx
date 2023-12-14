export const postDataApi = (apiUrl, postDataInfo, setLoading) => {
  const baseUrl = "https://e-commerce-api-51vp.onrender.com" || "";
  const url = `${baseUrl}/${apiUrl}`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postDataInfo),
  })
    .then((response) => {
      if (!response.ok) {
        // Log the full response text when an error occurs
        return response.text();
      }
      return response.text();
    })
    .then((data) => {
      console.log("Server response:", data);
    })
    .catch((error) => {
      console.error(" server response:", error);
    })
    .finally(() => {
      setLoading(false);
    });
};
