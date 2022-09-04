import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const getData = async () => {
    setIsLoading(true);
    await axios
      .get(url)
      .then(res => setData(res.data))
      .catch(err => setError(err));
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, [url]);
  return { data, isLoading, error };
};
