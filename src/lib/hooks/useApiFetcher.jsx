import { useEffect, useState } from "react";
import { fetchData } from "../util/apiUtils";

const useApiFetcher = (apiUrl, headers = {}, method = "") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const jsonData = await fetchData(apiUrl, headers, method);
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    // Fetch data once when the component mounts
    fetchDataFromApi();

    // Set up an interval for polling every 10 seconds
    const pollingInterval = setInterval(fetchDataFromApi, 10000);

    // Clean up the interval when the component unmounts or when dependencies change
    return () => clearInterval(pollingInterval);

  }, [apiUrl, headers, method]);

  return { data, error };
};

export default useApiFetcher;
