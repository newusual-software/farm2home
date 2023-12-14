// apiUtils.jsx

export const fetchData = async (apiUrl, headers, method) => {
 const baseUrl = "https://e-commerce-api-51vp.onrender.com" || "";
  const url = `${baseUrl}/${apiUrl}`;

  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(`${res.status} ${res.statusText}: ${JSON.stringify(errorData)}`);
  }

  return res.json();
};
