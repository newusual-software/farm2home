import { toast } from "react-toastify";

export const postDataApi = (apiUrl, postDataInfo, setLoading, navigate) => {
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
        return response.text();
      }
    })
    .then((data) => {
      if (data && data._id) {
        // Store _id in localStorage
        console.log(data._id);
        localStorage.setItem("id", data._id);
      }
      console.log(data);
      if (data === "Account created") {
        toast.success(data);
        navigate("/dashboard");
        return null
      }
      toast.error(data);
    })
    .catch((error) => {
      toast.error(error);
    })
    .finally(() => {
      setLoading(false);
    });
};
