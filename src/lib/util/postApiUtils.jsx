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
      // Check if apiUrl is equal to "create"
      if (apiUrl === "create") {
        // If apiUrl is "create", return response text
        return response.text();
      } else {
        // If apiUrl is not "create", return response json
        return response.json();
      }
    })
    .then((data) => {
      if (data && data._id) {
        // Store _id in localStorage
        console.log(data._id);
        localStorage.setItem("id", data._id);
      }
      if("fname" in data) {
        return data
      }
      console.log("Server response:", data);
    })
    .catch((error) => {
      console.error(" server response:", error);
    })
    .finally(() => {
      setLoading(false);
    });
};
