import { useEffect, useState } from "react";
import { fetchData } from "../util/apiUtils";

const useApiFetcher = (apiUrl, headers = {}, method = "") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let ignore = false;
    const fetchDataFromApi = async () => {
      try {
        const jsonData = await fetchData(apiUrl, headers, method);
        if (!ignore) setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        // Introduce a delay before the next request (e.g., 1 second)
        setTimeout(() => {
          fetchDataFromApi();
        }, 1000);
      }
    };

    // Fetch data once when the component mounts
    fetchDataFromApi();

    return () => {
      ignore = true;
    };
  }, [apiUrl, headers, method]);

  return { data, error };
};

export default useApiFetcher;
