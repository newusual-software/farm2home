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

  }, [apiUrl, headers, method]);

  return { data, error };
};

export default useApiFetcher;
