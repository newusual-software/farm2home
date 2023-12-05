// hooks/useApiFetcher.js
import { useEffect, useState } from "react";
import { fetchData } from "../util/apiUtils";

const useApiFetcher = (apiUrl, headers = {}, method="") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataFromApi();
  // Start polling every 10 seconds
    const pollingInterval = setInterval(() => {
      fetchDataFromApi();
    }, 10000); // 10 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(pollingInterval);
    };
    
  }, []);
  const fetchDataFromApi = async () => {
      try {
        const jsonData = await fetchData(apiUrl, headers, method);
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };
  return { data, error };
};

export default useApiFetcher;
