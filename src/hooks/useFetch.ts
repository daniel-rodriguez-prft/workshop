import { useState, useEffect } from "react";
import { CORS_WORKER, APP_ENDPOINT, API_KEY } from "../constants";

const useFetch = (searchTerm: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${CORS_WORKER}/?${APP_ENDPOINT}?key=${API_KEY}&search=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [searchTerm]);

  return [data];
};

export default useFetch;
